using System;
using UnityEngine;
using H2V.GameplayAbilitySystem.AttributeSystem;
using H2V.GameplayAbilitySystem.AttributeSystem.Components;
using H2V.GameplayAbilitySystem.AttributeSystem.ScriptableObjects;

[Serializable]   // <- embed inside AttributeSO via SerializeReference
public class ClampToAttributeCalculator : IAttributeValueCalculator
{
    [Header("Clamping Attribute")]
    [Tooltip("The attribute that defines the upper bound (e.g. Max HP).")]
    [SerializeField] private AttributeSO _capAttribute;
    [Tooltip("If CurrentHP starts at 0, set it to the cap on first eval.")]
    [SerializeField] private bool _initialiseToCap = true;

    public AttributeValue Calculate(AttributeValue self,
                                    AttributeSystemBehaviour sys)
    {
        /* -----------------------------------------------------------
         * 1) Run the stock additive/multiplicative/override pipeline
         *    so Gameplay Effects that target CurrentHP are honoured.
         * --------------------------------------------------------- */
        self = CurrentAttributeValueCalculator
               .CalculateCurrentAttributeValue(self);

        /* -----------------------------------------------------------
         * 2) Determine the cap (defaults to Base/Current = 0 if
         *    the referenced attribute doesn't exist yet).
         * --------------------------------------------------------- */
        float cap = 0f;
        if (_capAttribute &&
            sys.TryGetAttributeValue(_capAttribute, out var capVal))
            cap = capVal.CurrentValue;   // already includes its modifiers

        /* -----------------------------------------------------------
         * 3) Optional first-time initialisation
         * --------------------------------------------------------- */
        bool uninitialised = self.BaseValue == 0f && self.CurrentValue == 0f;
        if (_initialiseToCap && uninitialised)
        {
            self.BaseValue = cap;   // so future heals/damage start from cap
            self.CurrentValue = cap;
            return self;
        }

        /* -----------------------------------------------------------
         * 4) Clamp to 0 … cap  (cap may be 0 if not found)
         * --------------------------------------------------------- */
        self.CurrentValue = Mathf.Clamp(self.CurrentValue, 0f, cap);
        return self;
    }
}
