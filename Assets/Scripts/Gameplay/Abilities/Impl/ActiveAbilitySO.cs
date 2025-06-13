using UnityEngine;
using Game.Vfx;
using H2V.GameplayAbilitySystem.AbilitySystem;
using H2V.GameplayAbilitySystem.AbilitySystem.Components;
using H2V.GameplayAbilitySystem.AbilitySystem.ScriptableObjects;

namespace Game.Abilities
{
    public abstract class ActiveAbilitySO<TSpec> : AbilitySO<TSpec>,
                                                   IStageVariantProvider,
                                                   IGameplayAbilityData
                                                   where TSpec : AbilitySpec, new()
    {
        /*────────── Timeline ─────────────────────────────*/
        [Header("Timeline (sec)")]
        [SerializeField] private float windup = 0.1f;
        [SerializeField] private float active = 0.0f;   // 0 → channelled drives it
        [SerializeField] private float recover = 0.15f;

        /*────────── Stage-variant tables ─────────────────*/
        [Header("Stage Animation / VFX Tables")]
        [SerializeField] private CastVfxVariantTable windupVariants;
        [SerializeField] private CastVfxVariantTable activeVariants;
        [SerializeField] private CastVfxVariantTable recoverVariants;

        /*────────── IStageVariantProvider ────────────────*/
        public CastVfxVariantTable WindupVariants => windupVariants;
        public CastVfxVariantTable ActiveVariants => activeVariants;
        public CastVfxVariantTable RecoverVariants => recoverVariants;

        /*────────── IGameplayAbilityData ────────────────*/
        public abstract AbilitySlot Slot { get; }
        public abstract AbilityPriority Priority { get; }

        public float WindupTime => windup;
        public float ActiveTime => active;
        public float RecoverTime => recover;

        public virtual bool CanPay(AbilitySystemBehaviour asc) => true;
        public virtual void PayCost(AbilitySystemBehaviour asc) { }
    }
}
