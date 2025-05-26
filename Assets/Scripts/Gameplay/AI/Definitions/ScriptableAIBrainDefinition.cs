using UnityEngine;
using Game.AI.Core;

namespace Game.AI.Definitions
{
    public abstract class ScriptableAIBrainDefinition : ScriptableObject
    {
        public abstract IAIBrain CreateBrain(AIContext context);
    }
}