// Assets/Scripts/Gameplay/Abilities/SprintAbilitySO.cs
using UnityEngine;
using System;
using Game.Abilities;
using H2V.GameplayAbilitySystem.AbilitySystem;
using H2V.GameplayAbilitySystem.AbilitySystem.Components;
using H2V.GameplayAbilitySystem.EffectSystem;
using H2V.GameplayAbilitySystem.EffectSystem.ScriptableObjects;
using StarterAssets;
using Game.Movement;
using H2V.GameplayAbilitySystem.AttributeSystem.ScriptableObjects;
using H2V.GameplayAbilitySystem.AttributeSystem.Components;

[CreateAssetMenu(menuName = "Bara Impact/Abilities/Sprint")]
public class SprintAbilitySO : ChannelledAbilitySO<AbilitySpec>   // or <AbilitySpec>
{
    [Header("Dash Impulse")]
    [SerializeField] private float impulse = 6f;

    [Header("Speed Buff")]
    [SerializeField] private GameplayEffectSO sprintMotionEffect;

    [Header("Stamina Cost")]
    [SerializeField] private AttributeSO currentStaminaAttr;   // drag CurrentStamina.asset
    [Min(0)][SerializeField] private float staminaCost = 20f; // flat cost per dash

    /*── gameplay meta ─────────────────────────────*/
    public override AbilitySlot Slot => AbilitySlot.Sprint;
    public override AbilityPriority Priority => AbilityPriority.Low;

    /*── channel callbacks ─────────────────────────*/
    [SerializeReference] GameplayEffectSpec _spec;   // handle so we can remove it
    public override void OnWindupStart(GameObject owner, AbilitySystemBehaviour asc)
    {
        var bridge = owner.GetComponent<IMotionBridge>();
        if (bridge != null)
            bridge.BurstMove(owner.transform.forward, impulse, WindupTime);
    }
    public override void OnActiveStart(GameObject owner, AbilitySystemBehaviour asc)
    {
        // speed buff
        var applier = owner.GetComponent<IEffectApplier>();
        if (applier != null && sprintMotionEffect != null)
            _spec = applier.Apply(sprintMotionEffect);
    }

    public override void OnActiveTick(GameObject owner, float dt) { /* stamina, VFX */ }

    public override bool IsStillChannelled(GameObject owner)
        => owner.GetComponent<StarterAssetsInputs>()?.sprint ?? false;

    public override Action<GameObject> OnActiveEnd => owner =>
    {
        if (_spec == null) return;
        var applier = owner.GetComponent<IEffectApplier>();
        if (applier != null) applier.Remove(_spec);
        _spec = null;
    };

    public override bool CanPay(AbilitySystemBehaviour asc)
    {
        // enough stamina?
        if (!asc.TryGetComponent(out AttributeSystemBehaviour attrs)) return false;
        if (!attrs.TryGetAttributeValue(currentStaminaAttr, out var v)) return false;
        return v.CurrentValue >= staminaCost;
    }

    public override void PayCost(AbilitySystemBehaviour asc)
    {
        if (!asc.TryGetComponent(out AttributeSystemBehaviour attrs)) return;
        if (!attrs.TryGetAttributeValue(currentStaminaAttr, out var v)) return;
        attrs.SetAttributeBaseValue(currentStaminaAttr, v.CurrentValue - staminaCost);
    }
}