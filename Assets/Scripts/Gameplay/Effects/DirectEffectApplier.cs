using UnityEngine;
using H2V.GameplayAbilitySystem.Components;
using H2V.GameplayAbilitySystem.EffectSystem;
using H2V.GameplayAbilitySystem.EffectSystem.Components;
using H2V.GameplayAbilitySystem.EffectSystem.ScriptableObjects;

[RequireComponent(typeof(AbilitySystemComponent))]
[RequireComponent(typeof(EffectSystemBehaviour))]
public sealed class DirectEffectApplier : MonoBehaviour, IEffectApplier
{
  AbilitySystemComponent asc;      // “self”
  EffectSystemBehaviour effSys;

  void Awake()
  {
    asc = GetComponent<AbilitySystemComponent>();
    effSys = GetComponent<EffectSystemBehaviour>();
  }

  public GameplayEffectSpec Apply(GameplayEffectSO effectSO,
                                  AbilitySystemComponent target = null)
  {
    if (!effectSO) return null;
    target ??= asc;                                       // default to self

    var spec = effectSO.CreateEffectSpec(asc, asc.MakeEffectContext());
    spec.Target = target;

    var active = new ActiveGameplayEffect(spec);
    target.GetComponent<EffectSystemBehaviour>().AddActiveEffect(active);
    return spec;
  }

  public void Remove(GameplayEffectSpec spec)
  {
    if (spec != null && spec.Target)
      spec.Target.GetComponent<EffectSystemBehaviour>().RemoveEffect(spec);
  }
}
