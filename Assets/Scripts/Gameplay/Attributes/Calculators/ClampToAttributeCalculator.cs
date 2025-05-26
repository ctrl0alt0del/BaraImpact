using System;
using System.Collections.Generic;
using UnityEngine;
using H2V.GameplayAbilitySystem.AttributeSystem;
using H2V.GameplayAbilitySystem.AttributeSystem.Components;
using H2V.GameplayAbilitySystem.AttributeSystem.ScriptableObjects;

[Serializable] // embed via SerializeReference
public class ClampToAttributeCalculator : IAttributeValueCalculator
{
    /* ───────── Inspector fields ───────── */
    [Header("Clamping Attribute")]
    [Tooltip("The attribute that defines the upper bound (e.g. Max HP).")]
    [SerializeField] private AttributeSO _capAttribute;

    [Tooltip("If CurrentHP starts at 0, set it to the cap on first eval.")]
    [SerializeField] private bool _initialiseToCap = true;

    [Tooltip("Auto-heal by the amount the cap increased.")]
    [SerializeField] private bool _followCapIncrease = true;

    /* ───────── Per-owner cap cache ─────────
     * key = AttributeSystemBehaviour instance ID
     * value = last cap seen by this calculator
     */
    private static readonly Dictionary<int, float> _capCache = new();

    public AttributeValue Calculate(AttributeValue self,
                                    AttributeSystemBehaviour sys)
    {
        /* 1) apply stock additive / multiplicative / override math */
        self = CurrentAttributeValueCalculator
               .CalculateCurrentAttributeValue(self);

        /* 2) fetch current cap */
        float cap = 0f;
        if (_capAttribute &&
            sys.TryGetAttributeValue(_capAttribute, out var capVal))
            cap = capVal.CurrentValue;

        /* 3) first-time initialisation (spawn at full) */
        bool uninitialised = self.BaseValue == 0f && self.CurrentValue == 0f;
        if (_initialiseToCap && uninitialised)
        {
            self.BaseValue = cap;
            self.CurrentValue = cap;
            _capCache[sys.GetInstanceID()] = cap;
            return self;
        }

        /* 4) follow cap increase (optional) */
        if (_followCapIncrease)
        {
            int id = sys.GetInstanceID();
            _capCache.TryGetValue(id, out float oldCap);

            if (cap > oldCap)               // cap went up
            {
                float delta = cap - oldCap; // how much it rose
                self.BaseValue = Mathf.Min(self.CurrentValue + delta, cap);
                self.CurrentValue = Mathf.Min(self.CurrentValue + delta, cap);
            }

            _capCache[id] = cap;            // store latest cap
        }

        /* 5) clamp 0 … cap */
        self.CurrentValue = Mathf.Clamp(self.CurrentValue, 0f, cap);
        return self;
    }
}
