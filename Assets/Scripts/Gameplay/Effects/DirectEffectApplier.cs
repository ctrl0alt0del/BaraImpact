// Assets/Scripts/Gameplay/EffectSystem/DirectEffectApplier.cs
using UnityEngine;
using H2V.GameplayAbilitySystem.Components;
using H2V.GameplayAbilitySystem.EffectSystem;
using H2V.GameplayAbilitySystem.EffectSystem.Components;
using H2V.GameplayAbilitySystem.EffectSystem.ScriptableObjects;

[RequireComponent(typeof(AbilitySystemComponent))]
[RequireComponent(typeof(EffectSystemBehaviour))]
public sealed class DirectEffectApplier : MonoBehaviour, IEffectApplier
{
    AbilitySystemComponent asc;
    EffectSystemBehaviour effSys;

    void Awake() => EnsureInit();

    void EnsureInit()
    {
        if (asc == null) asc = GetComponent<AbilitySystemComponent>();
        if (effSys == null) effSys = GetComponent<EffectSystemBehaviour>();
    }
    public GameplayEffectSpec Apply(GameplayEffectSO effectSO,
        AbilitySystemComponent target = null)
    {
        if (effectSO == null) return null;

        EnsureInit();                          // <-- safe even if Awake not run
        target ??= asc;
        if (target == null) return null;     // should never happen; fails safe

        var spec = effectSO.CreateEffectSpec(asc, asc.MakeEffectContext());
        spec.Target = target;

        var active = new ActiveGameplayEffect(spec);
        target.GetComponent<EffectSystemBehaviour>()?.AddActiveEffect(active);
        return spec;
    }

    public void Remove(GameplayEffectSpec spec)
    {
        if (spec?.Target == null) return;
        spec.Target.GetComponent<EffectSystemBehaviour>()?.RemoveEffect(spec);
    }
}