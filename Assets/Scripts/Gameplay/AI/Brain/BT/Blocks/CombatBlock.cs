using UnityEngine;
using Game.AI.BT;
using Game.AI.Core;
using CleverCrow.Fluid.BTs.Trees;
using CleverCrow.Fluid.BTs.Tasks;
using H2V.GameplayAbilitySystem.AbilitySystem.Components;
using Game.Abilities;
using Game.States;
using SEA.Mutators;

[CreateAssetMenu(menuName = "AI/BT Blocks/Combat Block")]
public class CombatBTBlock : ScriptableBTBlock
{
    [SerializeField]
    private AbilitySlot[] priorityOrder = new[]
    {
        AbilitySlot.Burst,
        AbilitySlot.Skill,
        AbilitySlot.BasicAttack
    };


    [SerializeField] private float fallbackRange = 2.5f;

    public override void ApplyToTree(BehaviorTreeBuilder builder, AIContext ctx)
    {
        builder.Sequence("Combat Block")
            .Condition("Has Target or LastKnownPos", () =>
                ctx.Target != null || ctx.LastKnownTargetPosition != Vector3.zero)
            .Do("Enter Combat", () =>
            {
                MutatorQueue.Enqueue(new StateMutator(ctx.Owner, MetaStates.Combat));
                return TaskStatus.Success;
            })
            .Do("Select + Enqueue Ability or Move", () =>
            {
                var abilityComponent = ctx.Owner.GetComponent<AbilityComponent>();
                var abilitySystem = ctx.Owner.GetComponent<AbilitySystemBehaviour>();
                var nav = ctx.Owner.GetComponent<UnityEngine.AI.NavMeshAgent>();

                if (abilityComponent == null || abilitySystem == null)
                    return TaskStatus.Failure;

                // ✅ Exit if player is completely gone
                bool targetLost = ctx.Target == null && ctx.LastKnownTargetPosition == Vector3.zero;
                if (targetLost)
                {
                    ctx.clearInteractionPoint();
                    ctx.LastKnownTargetPosition = Vector3.zero;
                    MutatorQueue.Enqueue(new StateMutator(ctx.Owner, MetaStates.Idle));
                    return TaskStatus.Failure;
                }

                var target = ctx.Target;
                var targetPosition = target != null ? target.transform.position : ctx.LastKnownTargetPosition;

                RotateTowardTarget(ctx.Owner, targetPosition);
                float dist = Vector3.Distance(ctx.Owner.transform.position, targetPosition);

                foreach (var slot in priorityOrder)
                {
                    if (!abilityComponent.TryGetAbility(slot, out var ability))
                        continue;

                    if (!ability.CanPay(abilitySystem))
                        continue;

                    float range = fallbackRange;
                    if (ability is IAbilityDeliveryData delivery)
                        range = delivery.Range;

                    if (dist <= range)
                    {
                        abilityComponent.EnqueueAbility(ability);
                        return TaskStatus.Continue;
                    }
                    else
                    {
                        if (nav != null && nav.enabled)
                        {
                            nav.SetDestination(targetPosition);
                            return TaskStatus.Continue;
                        }
                    }
                }

                return TaskStatus.Failure;
            })
            .End();

    }
    private void RotateTowardTarget(GameObject owner, Vector3 targetPosition, float rotationSpeed = 8f)
    {
        Vector3 direction = (targetPosition - owner.transform.position).normalized;
        direction.y = 0f;

        if (direction.sqrMagnitude < 0.001f) return;

        Quaternion lookRotation = Quaternion.LookRotation(direction);
        owner.transform.rotation = Quaternion.Slerp(
            owner.transform.rotation,
            lookRotation,
            Time.deltaTime * rotationSpeed
        );
    }
}
