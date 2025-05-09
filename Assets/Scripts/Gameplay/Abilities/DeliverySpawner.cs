//-------------------------------------------------------------
// Assets/Scripts/Gameplay/Combat/DeliverySpawner.cs
//-------------------------------------------------------------
using UnityEngine;
using Game.Abilities;
using Game.Combat;
using Game.Vfx;

namespace Game.Combat
{
    [RequireComponent(typeof(Animator))]
    public class DeliverySpawner : MonoBehaviour
    {
        Animator anim;
        void Awake() => anim = GetComponent<Animator>();

        public void Spawn(IAbilityDeliveryData data, Transform caster)
        {
            (Vector3 pos, Vector3 dir) = ResolveSpawnPoint(data, caster);

            Transform homing = null;
            float turn = 0f;
            if (data is IAutoLockDelivery auto)
            {
                homing = TargetingUtil.Acquire(auto.TargetPriority,
                    caster.position,
                    caster.forward,
                    auto.LockRadius,
                    auto.LockHalfAngle,
                    data.HitMask);
                turn = auto.TurnRate;
                if (homing) dir = (homing.position - pos).normalized;
            }

            GameObject go = Instantiate(data.AttackPrefab,
                pos,
                Quaternion.LookRotation(dir));

            var comp = go.GetComponent<AttackInstanceComponent>();
            var vfx = data as IRangeVfxProvider;

            var spawn = new AttackSpawnData
            {
                Kind = data.Kind,
                Range = data.Range,
                Speed = data.Speed,
                CollisionRadius = 0.25f,
                HitMask = data.HitMask,
                Owner = caster,
                ProjectileSpec = vfx?.ProjectileSpec,
                ImpactSpec = vfx?.ImpactSpec
            };

            comp.Init(spawn);
            if (homing) comp.SetHomingTarget(homing, turn);

            if (vfx?.ImpactSpec)
            {
                var l = go.AddComponent<ImpactVfxListener>();
                l.impactSpec = vfx.ImpactSpec;
            }
        }
        (Vector3 pos, Vector3 dir) ResolveSpawnPoint(IAbilityDeliveryData data, Transform caster)
        {
            const float fallbackHeight = 1.3f;
            const float fwdOffset = 0.3f;

            Vector3 baseDir = caster.forward;
            Vector3 basePos = caster.position + Vector3.up * fallbackHeight + baseDir * fwdOffset;

            if (data is not IHasSpawnOrigin origin ||
                string.IsNullOrEmpty(origin.SpawnBone))
                return (basePos, baseDir);

            Transform bone = caster.GetComponent<Animator>()?.GetBoneTransformByName(origin.SpawnBone)
                            ?? caster.Find(origin.SpawnBone);

            if (!bone) return (basePos, baseDir);

            Vector3 dir = caster.forward;
            Vector3 pos = bone.position + bone.TransformVector(origin.SpawnOffset);
            return (pos, dir);
        }
    }
}
