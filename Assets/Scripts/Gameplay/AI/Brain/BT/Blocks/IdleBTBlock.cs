using UnityEngine;
using Game.AI.BT;
using Game.AI.Core;
using Game.AI.Interaction;
using CleverCrow.Fluid.BTs.Trees;
using CleverCrow.Fluid.BTs.Tasks;
using Game.States;
using SEA.State;

namespace Game.AI.BT.Blocks
{
    [CreateAssetMenu(menuName = "AI/BT Blocks/Idle Block")]
    public class IdleBTBlock : ScriptableBTBlock
    {
        [SerializeField] private InteractionType desiredType = InteractionType.Generic;
        [SerializeField] private float interactionRange = 1.5f;

        public override void ApplyToTree(BehaviorTreeBuilder builder, AIContext ctx)
        {
            builder.Sequence("Seek & Move to Interaction Point")
                .Condition("Is meta:idle", () =>
                {
                    var sm = ctx.Owner.GetComponent<StateMachine>();
                    return sm != null && sm.IsInState(MetaStates.Idle) && !ctx.IsCurrentlyInteracting;
                })
                .Condition("Has no destination point",
                    () => ctx.Blackboard.Get<InteractionPoint>("interactionPoint") == null)
                .Do("Pick Nearby Point", () =>
                {
                    if (ctx.CurrentArea == null) return TaskStatus.Failure;

                    var point = ctx.CurrentArea.GetRandomAvailablePoint(desiredType, ctx.Owner);
                    if (point == null) return TaskStatus.Failure;

                    ctx.Blackboard.Set("interactionPoint", point);
                    return TaskStatus.Success;
                })
                .Condition("Has destination point", () => ctx.Blackboard.Has("interactionPoint"))
                .Do("Move to Spot", () =>
                {
                    var point = ctx.Blackboard.Get<InteractionPoint>("interactionPoint");
                    if (point == null) return TaskStatus.Failure;

                    var agent = ctx.Owner.GetComponent<UnityEngine.AI.NavMeshAgent>();
                    if (agent == null || !agent.enabled) return TaskStatus.Failure;

                    float dist = Vector3.Distance(ctx.Owner.transform.position, point.Spot.position);
                    if (dist > interactionRange)
                    {
                        agent.SetDestination(point.Spot.position);
                    }

                    return TaskStatus.Success;
                })
                .End();
        }
    }
}