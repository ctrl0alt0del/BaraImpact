using UnityEngine;
using H2V.GameplayAbilitySystem.EffectSystem.ScriptableObjects;
using H2V.GameplayAbilitySystem.EffectSystem;
using H2V.GameplayAbilitySystem.AttributeSystem.Components;      // AbilitySystemBehaviour
using H2V.GameplayAbilitySystem.AttributeSystem;                // AttributeValue
using H2V.GameplayAbilitySystem.AttributeSystem.ScriptableObjects;
using H2V.GameplayAbilitySystem.AbilitySystem.Components;

/// <summary>
/// Magnitude = ( SourceAttribute.FinalValue * Coefficient ) + Additive
/// Lets you mirror or scale any attribute from the Source or Target ASC.
/// </summary>
[CreateAssetMenu(menuName = "Bara Impact/Attributes/Modifier Magnitude/Attribute Based")]
public class AttributeBasedMagnitudeSO : ModifierComputationSO
{
  [Header("Attribute Source")]
  [Tooltip("If true, read the attribute from the Target; otherwise from the Source.")]
  [SerializeField] private bool useTargetAttribute = false;

  [SerializeField] private AttributeSO sourceAttribute;

  [Header("Math")]
  [SerializeField] private float coefficient = 1f;
  [SerializeField] private float additive = 0f;

  public override void Initialize(GameplayEffectSpec spec) { /* nothing to cache */ }

  public override bool TryCalculateMagnitude(GameplayEffectSpec spec,
                                             ref float evaluatedMagnitude)
  {
    var asc =
        useTargetAttribute ? spec.Target : spec.Source;
    AttributeSystemBehaviour asb = asc.AttributeSystem;

    if (asb == null || sourceAttribute == null)
      return false;

    if (!asb.TryGetAttributeValue(sourceAttribute, out AttributeValue attr))
      return false;

    evaluatedMagnitude = attr.CurrentValue * coefficient + additive;
    return true;
  }
}
