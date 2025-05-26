using UnityEngine;
using Game.AI.BT;
using Game.AI.Core;
using Game.AI.Brain;
using System.Collections.Generic;

namespace Game.AI.Definitions
{
    [CreateAssetMenu(menuName = "AI/Brains/Composable BT Brain")]
    public class ScriptableBTBrainDefinition : ScriptableAIBrainDefinition
    {
        [SerializeField]
        private List<ScriptableBTBlock> blocks = new();

        public override IAIBrain CreateBrain(AIContext context)
        {
            var builder = new ComposableBTBuilder();
            foreach (var block in blocks)
            {
                if (block != null)
                    builder.AddBlock(block.ApplyToTree); // Delegate-based passing
            }

            return new BTBrain(builder, context);
        }
    }
}