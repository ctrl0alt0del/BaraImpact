using System;
using System.Collections.Generic;
using CleverCrow.Fluid.BTs.Trees;
using Game.AI.Core;

namespace Game.AI.BT
{
    public class ComposableBTBuilder : IBehaviorTreeBuilder
    {
        private readonly List<Action<BehaviorTreeBuilder, AIContext>> _actions = new();

        public ComposableBTBuilder AddBlock(Action<BehaviorTreeBuilder, AIContext> apply)
        {
            _actions.Add(apply);
            return this;
        }

        public BehaviorTree Build(AIContext ctx)
        {
            var builder = new BehaviorTreeBuilder(ctx.Owner)
                .Selector("Root");

            foreach (var action in _actions)
                action(builder, ctx);

            return builder.End().Build();
        }
    }
}