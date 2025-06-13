//-------------------------------------------------------------
// Assets/Scripts/Gameplay/Abilities/BaseAbilitySO.cs
//-------------------------------------------------------------
using UnityEngine;
using H2V.GameplayAbilitySystem.AbilitySystem;
using H2V.GameplayAbilitySystem.AbilitySystem.Components;
using H2V.GameplayAbilitySystem.AbilitySystem.ScriptableObjects;
using Game.Combat;
using Game.Vfx;

namespace Game.Abilities
{
    /// <summary>
    /// Abstract ability ScriptableObject pre-wiring every common field/interface.
    /// Concrete abilities only override Slot + Priority (and optional cost).
    /// </summary>
    public abstract class BaseDeliverableAbilitySO<TSpec> : ActiveAbilitySO<TSpec>,
                                                 IAbilityDeliveryData,
                                                 IRangeVfxProvider,
                                                 IHasSpawnOrigin,
                                                 IAutoLockDelivery
                                                 where TSpec : AbilitySpec, new()
    {

        /*──────── Animation / Prefabs ─────────────────────*/
        [Header("Prefabs")]
        [SerializeField] GameObject attackPrefab;

        /*──────── VFX (Projectile / Impact) ───────────────*/
        [Header("Range-phase VFX")]
        [SerializeField] VfxSpawnSpec projectileSpec;
        [SerializeField] VfxSpawnSpec impactSpec;

        /*──────── Delivery ───────────────────────────────*/
        [Header("Delivery")]
        [SerializeField] AttackKind kind = AttackKind.Melee;
        [SerializeField] float range = 2f;
        [SerializeField] float speed = 0f;
        [SerializeField] LayerMask hitMask = ~0;
        [SerializeField] float collisionRad = 0.5f;

        /*──────── Origin ─────────────────────────────────*/
        [Header("Spawn Origin")]
        [SerializeField] string spawnBone = "RightHand";
        [SerializeField] Vector3 spawnOffset = Vector3.zero;

        /*──────── Auto-Lock ──────────────────────────────*/
        [Header("Auto-Lock")]
        [SerializeField] float lockHalfAngle = 45f;
        [SerializeField] float lockRadius = 2f;
        [SerializeField] float turnRate = 720f;
        [SerializeField] ActorAlignment[] targetPriority = { };

        /*──────── IAbilityDeliveryData ───────────────────*/
        public GameObject AttackPrefab => attackPrefab;
        public AttackKind Kind => kind;
        public float Range => range;
        public float Speed => speed;
        public LayerMask HitMask => hitMask;
        public float CollisionRadius => collisionRad;

        /*──────── IRangeVfxProvider ──────────────────────*/
        public VfxSpawnSpec ProjectileSpec => projectileSpec;
        public VfxSpawnSpec ImpactSpec => impactSpec;

        /*──────── IHasSpawnOrigin ───────────────────────*/
        public string SpawnBone => spawnBone;
        public Vector3 SpawnOffset => spawnOffset;

        /*──────── IAutoLockDelivery ─────────────────────*/
        public float LockRadius => lockRadius;
        public float LockHalfAngle => lockHalfAngle;
        public float TurnRate => turnRate;
        public ActorAlignment[] TargetRoles => targetPriority;
    }
}
