using System;
using UnityEngine;
using H2V.GameplayAbilitySystem.AttributeSystem;
using H2V.GameplayAbilitySystem.AttributeSystem.Components;
using H2V.GameplayAbilitySystem.AttributeSystem.ScriptableObjects;
using UnityEngine.Serialization;
[Serializable]
public class BasicDerivedAttributeCalculator
    : IAttributeValueCalculator
{
    [Header("Required attributes")]
    [SerializeField] private AttributeSO baseSecondaryAttributeSo;
    [SerializeField] private AttributeSO basePrimalAttributeSo;

    [Header("Scaling")]
    [SerializeField] private float primalWeightF = 10f;

    public AttributeValue Calculate(AttributeValue self,
        AttributeSystemBehaviour sys)
    {
        // --- 1) Fetch live values of the two inputs ---------------------------
        float baseHpVal = 0f;
        float strengthVal = 0f;

        if (sys.TryGetAttributeValue(baseSecondaryAttributeSo, out var bp)) baseHpVal = bp.CurrentValue;
        if (sys.TryGetAttributeValue(basePrimalAttributeSo, out var st)) strengthVal = st.CurrentValue;

        // --- 2) Compose the derived "core" value ------------------------------
        self.BaseValue = baseHpVal + strengthVal * primalWeightF;

        // --- 3) Pass through standard modifier maths so Gameplay Effects
        //         (add, mult, override) still apply on top of the derivation ---
        return CurrentAttributeValueCalculator
            .CalculateCurrentAttributeValue(self);
    }
}