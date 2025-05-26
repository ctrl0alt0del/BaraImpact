using Game.AI.Core;
using CleverCrow.Fluid.BTs.Trees;

namespace Game.AI.BT
{
    public interface IBehaviorTreeBuilder
    {
        BehaviorTree Build(AIContext context);
    }
}