using UnityEngine;
using Game.AI.Core;
using CleverCrow.Fluid.BTs.Trees;

namespace Game.AI.BT
{
    public abstract class ScriptableBTBlock : ScriptableObject
    {
        public abstract void ApplyToTree(BehaviorTreeBuilder builder, AIContext ctx);
    }
}