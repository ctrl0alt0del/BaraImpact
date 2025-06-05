using System;
using UnityEngine;
using Game.States;

namespace Game.AI.Interaction
{
    [Serializable]
    public class AlignmentStrategyPair
    {
        public ActorAlignment alignment;
        public InteractionEnterStrategySO strategy;
    }

    [Serializable]
    public class InteractionEnterStrategySet
    {
        [SerializeField] private AlignmentStrategyPair[] strategies;

        public InteractionEnterStrategySO GetStrategy(ActorAlignment alignment)
        {
            foreach (var pair in strategies)
            {
                if (pair.alignment == alignment)
                    return pair.strategy;
            }
            return null;
        }

        public void EnsureAllAlignments()
        {
#if UNITY_EDITOR
            var all = Enum.GetValues(typeof(ActorAlignment));
            if (strategies == null || strategies.Length != all.Length)
            {
                strategies = new AlignmentStrategyPair[all.Length];
                int i = 0;
                foreach (var align in all)
                {
                    strategies[i++] = new AlignmentStrategyPair
                    {
                        alignment = (ActorAlignment)align,
                        strategy = null // default to unassigned
                    };
                }
            }
#endif
        }
    }
}
