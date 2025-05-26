using Game.AI.Core;
using CleverCrow.Fluid.BTs.Trees;
using Game.AI.BT;

namespace Game.AI.Brain
{
    public class BTBrain : IAIBrain
    {
        private readonly BehaviorTree _tree;

        public BTBrain(IBehaviorTreeBuilder builder, AIContext context)
        {
            _tree = builder.Build(context);
        }

        public void Tick()
        {
            _tree?.Tick();
        }
    }
}