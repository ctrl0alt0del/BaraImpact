// IEffectApplier.cs
using H2V.GameplayAbilitySystem.Components;                       // AbilitySystemComponent
using H2V.GameplayAbilitySystem.EffectSystem;                     // GameplayEffectSpec
using H2V.GameplayAbilitySystem.EffectSystem.ScriptableObjects;   // GameplayEffectSO

public interface IEffectApplier
{
  /// Apply GE to *target* (or to self if target is null); returns the spec.
  GameplayEffectSpec Apply(GameplayEffectSO effectSO,
                           AbilitySystemComponent target = null);

  void Remove(GameplayEffectSpec spec);
}
