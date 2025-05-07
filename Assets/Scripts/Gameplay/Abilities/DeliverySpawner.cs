using UnityEngine;
using Game.Combat;
using Game.Abilities;

[RequireComponent(typeof(Animator))]
public class DeliverySpawner : MonoBehaviour
{
  Animator anim;

  void Awake() => anim = GetComponent<Animator>();

  public void Spawn(IAbilityDeliveryData data, Transform caster)
  {
    (Vector3 pos, Vector3 dir) = ResolveSpawnPoint(data, caster);

    Transform homingTarget = null;
    float turnRate = 0f;

    if (data is IAutoLockDelivery auto)
    {
      Debug.Log($"Auto-locking to {auto.TargetPriority}");
      homingTarget = TargetingUtil.Acquire(auto.TargetPriority,
                                           caster.position,
                                           caster.forward,
                                           auto.LockRadius,
                                           auto.LockHalfAngle,
                                           data.HitMask);
      turnRate = auto.TurnRate;
      if (homingTarget)
        dir = (homingTarget.position - pos).normalized;
    }

    GameObject go = Instantiate(data.AttackPrefab,
                                pos,
                                Quaternion.LookRotation(dir));

    if (!go.TryGetComponent(out AttackInstanceComponent comp))
    {
      Debug.LogError($"Prefab {data.AttackPrefab.name} missing AttackInstanceComponent");
      Destroy(go);
      return;
    }

    GameObject vfx = (data as IVfxProvider)?.VfxPrefab;

    comp.Init(data.Kind,
              data.Range,
              data.Speed,
              vfx,
              data.HitMask,
              caster,
              data.CollisionRadius);
    //go.layer = LayerMask.NameToLayer("Projectile");

    if (homingTarget)
      comp.SetHomingTarget(homingTarget, turnRate);
  }

  (Vector3 pos, Vector3 dir) ResolveSpawnPoint(IAbilityDeliveryData data,
                                               Transform caster)
  {
    const float fallbackHeight = 1.3f;
    const float forwardOffset = 0.3f;

    Vector3 baseDir = caster.forward;
    Vector3 basePos = caster.position +
                      Vector3.up * fallbackHeight +
                      baseDir * forwardOffset;

    if (data is not IHasSpawnOrigin origin ||
        string.IsNullOrEmpty(origin.SpawnBone))
      return (basePos, baseDir);

    Transform boneT = anim.GetBoneTransformByName(origin.SpawnBone)
                     ?? caster.Find(origin.SpawnBone);

    if (boneT == null)
      return (basePos, baseDir);

    Vector3 dir = caster.forward;
    Vector3 pos = boneT.position + boneT.TransformVector(origin.SpawnOffset);
    return (pos, dir);
  }
}
