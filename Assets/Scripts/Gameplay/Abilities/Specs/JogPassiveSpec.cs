// Assets/Scripts/Gameplay/Abilities/JogPassiveSpec.cs
using H2V.GameplayAbilitySystem.AbilitySystem;
using H2V.GameplayAbilitySystem.EffectSystem;
using H2V.GameplayAbilitySystem.EffectSystem.ScriptableObjects;
using UnityEngine;
using System.Collections.Generic;

namespace Game.Abilities
{
    public sealed class JogPassiveSpec : AbilitySpec
    {
        // popu­late via SO
        public GameplayEffectSO JogMotionEffect { get; set; }

        private readonly List<GameplayEffectSpec> _applied = new();

        public override void OnAbilityGranted(AbilitySpec _)          // fires once, after grant
        {
            var applier = Owner.GetComponent<IEffectApplier>();
            if (applier != null && JogMotionEffect != null)
                _applied.Add(applier.Apply(JogMotionEffect));
        }

        public override void OnAbilityRemoved(AbilitySpec _)
        {
            var applier = Owner.GetComponent<IEffectApplier>();
            if (applier == null) return;
            foreach (var spec in _applied) applier.Remove(spec);
            _applied.Clear();
        }
    }
}