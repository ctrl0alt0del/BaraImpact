using CleverCrow.Fluid.BTs.Trees;
using Game.AI.BT.Tasks;

namespace Game.AI.BT.Extensions
{
    public static class BTBuilderExtensions
    {
        public static BehaviorTreeBuilder WaitSeconds(this BehaviorTreeBuilder builder, string name, System.Func<float> durationProvider)
        {
            return builder.AddNode(new WaitSecondsNode(durationProvider) { Name = name });
        }
    }
}