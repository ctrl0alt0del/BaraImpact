//-------------------------------------------------------------
// Assets/Scripts/Gameplay/Combat/DeliverySpawner.cs
//-------------------------------------------------------------
using UnityEngine;
using Game.Abilities;
using Game.Combat;
using Game.Vfx;
using Game.Visuals;

namespace Game.Combat
{
    public class DeliverySpawner : MonoBehaviour
    {

        public void Spawn(IAbilityDeliveryData data, Transform caster)
        {
            (Vector3 pos, Vector3 dir) = ResolveSpawnPoint(data, caster);

            Transform homing = null;
            float turn = 0f;
            if (data is IAutoLockDelivery auto)
            {
                homing = TargetingUtil.Acquire(auto.TargetRoles,
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
                ImpactSpec = vfx?.ImpactSpec,
                AllowedRoles = data.TargetRoles,
                Lifetime = data.Kind switch
                {
                    AttackKind.Melee => ((IGameplayAbilityData)data).ActiveTime,
                    AttackKind.Projectile => data.Range / Mathf.Max(data.Speed, 0.01f),
                    AttackKind.Hitscan => 0.1f,
                    _ => 0.5f
                }
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

            if (data is not IHasSpawnOrigin origin || string.IsNullOrEmpty(origin.SpawnBone))
                return (basePos, baseDir);

            /* Try IAnimatorSource first (works whether Animator is on root or child) */
            Transform bone = null;
            var src = caster.GetComponentInChildren<IAnimatorSource>(true);
            if (src != null) bone = src.GetBone(origin.SpawnBone);

            /* Fallback: simple Transform.Find() */
            bone ??= caster.Find(origin.SpawnBone);

            if (!bone) return (basePos, baseDir);

            Vector3 dir = caster.forward;
            Vector3 pos = bone.position + bone.TransformVector(origin.SpawnOffset);
            return (pos, dir);
        }
    }
}
