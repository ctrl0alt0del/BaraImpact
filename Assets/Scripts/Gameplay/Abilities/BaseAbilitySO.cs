//-------------------------------------------------------------
// Assets/Scripts/Gameplay/Abilities/BaseAbilitySO.cs
//-------------------------------------------------------------
using UnityEngine;
using H2V.GameplayAbilitySystem.AbilitySystem;
using H2V.GameplayAbilitySystem.AbilitySystem.Components;
using H2V.GameplayAbilitySystem.AbilitySystem.ScriptableObjects;
using Game.Combat;
using Game.Abilities;
using Game.Vfx;

namespace Game.Abilities
{
    /// <summary>
    /// Abstract SO that already exposes *every* common field / interface
    /// so concrete abilities only need to: <para/>
    /// 1) inherit from BaseAbilitySO&lt;TSpec&gt; <br/>
    /// 2) optionally tweak serialized values in the Inspector.
    /// </summary>
    public abstract class BaseAbilitySO<TSpec>
        : AbilitySO<TSpec>,
          IGameplayAbilityData,
          IAbilityDeliveryData,
          IVfxProvider,
          IHasSpawnOrigin,
          IAutoLockDelivery
        where TSpec : AbilitySpec, new()
    {
        /*???????? Timeline ???????????????????????????????*/
        [Header("Timeline (sec)")]
        [SerializeField] float windup = 0.15f;
        [SerializeField] float active = 0.05f;
        [SerializeField] float recover = 0.25f;

        /*???????? Animation / Prefabs ?????????????????????*/
        [Header("Animation & Prefabs")]
        [SerializeField] AnimationClip animationClip;
        [SerializeField] GameObject attackPrefab;

        [Header("VFX")]
        [SerializeField] VfxSpawnSpec castSpec;
        [SerializeField] VfxSpawnSpec projectileSpec;
        [SerializeField] VfxSpawnSpec impactSpec;

        /*???????? Delivery ???????????????????????????????*/
        [Header("Delivery")]
        [SerializeField] AttackKind kind = AttackKind.Melee;
        [SerializeField] float range = 2f;
        [SerializeField] float speed = 0f;
        [SerializeField] LayerMask hitMask = ~0;
        [SerializeField] float collisionRad = 0.5f;

        /*???????? Origin ?????????????????????????????????*/
        [Header("Spawn Origin")]
        [SerializeField] string spawnBone = "RightHand";
        [SerializeField] Vector3 spawnOffset = Vector3.zero;

        /*???????? Auto-Lock ?????????????????????????????*/
        [Header("Auto-Lock")]
        [SerializeField] float lockHalfAngle = 45f;
        [SerializeField] float lockRadius = 2f;
        [SerializeField] float turnRate = 720f;
        [SerializeField] NpcRole[] targetPriority = { };

        /*???????? IGameplayAbilityData ??????????????????*/
        public abstract AbilitySlot Slot { get; }
        public abstract AbilityPriority Priority { get; }

        public float WindupTime => windup;
        public float ActiveTime => active;
        public float RecoverTime => recover;
        public AnimationClip AnimationClip => animationClip;

        public virtual bool CanPay(AbilitySystemBehaviour asc) => true;
        public virtual void PayCost(AbilitySystemBehaviour asc) { }

        /*???????? IAbilityDeliveryData ???????????????????*/
        public GameObject AttackPrefab => attackPrefab;
        public AttackKind Kind => kind;
        public float Range => range;
        public float Speed => speed;
        public LayerMask HitMask => hitMask;
        public float CollisionRadius => collisionRad;

        /*???????? IVfxProvider ???????????????????????????*/
        public VfxSpawnSpec CastSpec => castSpec;
        public VfxSpawnSpec ProjectileSpec => projectileSpec;
        public VfxSpawnSpec ImpactSpec => impactSpec;

        /*???????? IHasSpawnOrigin ???????????????????????*/
        public string SpawnBone => spawnBone;
        public Vector3 SpawnOffset => spawnOffset;

        /*???????? IAutoLockDelivery ?????????????????????*/
        public float LockRadius => lockRadius;
        public float LockHalfAngle => lockHalfAngle;
        public float TurnRate => turnRate;
        public NpcRole[] TargetPriority => targetPriority;
    }
}
