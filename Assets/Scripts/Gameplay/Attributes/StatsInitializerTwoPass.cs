// StatsInitializerTwoPass.cs
// Adds every Attribute first, sets all base values second, then performs one
// UpdateAttributeValues() so derived calculators see fully-initialised inputs.

using System.Collections.Generic;
using UnityEngine;
using H2V.GameplayAbilitySystem.AttributeSystem;
using H2V.GameplayAbilitySystem.AttributeSystem.Components;
using H2V.GameplayAbilitySystem.AttributeSystem.ScriptableObjects;

namespace Game.Attributes
{
    [AddComponentMenu("Bara Impact/Attributes/Stats Initializer (Two-Pass)")]
    public class StatsInitializerTwoPass : MonoBehaviour
    {
        [SerializeField] private AttributeSystemBehaviour _attributeSystem;
        [SerializeField] private bool _initOnStart = false;
        [SerializeReference, SubclassSelector] private IStatsProvider _statsProvider;

        /* ---------- boilerplate ---------- */

        private void OnValidate()
        {
            if (_attributeSystem != null) return;
            _attributeSystem = GetComponent<AttributeSystemBehaviour>();
        }

        private void Start()
        {
            if (_initOnStart) InitStats();
        }

        /* ---------- two-pass initialisation ---------- */

        public void InitStats()
        {
            if (_attributeSystem == null || _statsProvider == null) return;

            // PASS 1 ────────────────────────────────────────────────────────────
            // Register every attribute (no base values yet)
            foreach (var stat in _statsProvider.Stats)
                _attributeSystem.AddAttribute(stat.Attribute);

            // PASS 2 ────────────────────────────────────────────────────────────
            // Directly set BaseValue on the internal list; this avoids triggering
            // UpdateAttributeValues() for each individual stat.
            Dictionary<AttributeSO, int> cache = _attributeSystem.GetAttributeIndexCache();
            List<AttributeValue> values = _attributeSystem.AttributeValues;

            foreach (var stat in _statsProvider.Stats)
            {
                if (!cache.TryGetValue(stat.Attribute, out int idx)) continue;

                AttributeValue v = values[idx];
                v.BaseValue = stat.Value;
                values[idx] = v;
            }

            // SINGLE evaluation pass ───────────────────────────────────────────
            _attributeSystem.UpdateAttributeValues();
        }
    }
}
