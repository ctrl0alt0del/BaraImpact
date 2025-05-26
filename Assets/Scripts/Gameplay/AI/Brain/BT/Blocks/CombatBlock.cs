using UnityEngine;
using Game.AI.BT;
using Game.AI.Core;
using CleverCrow.Fluid.BTs.Trees;
using CleverCrow.Fluid.BTs.Tasks;
using H2V.GameplayAbilitySystem.AbilitySystem.Components;
using Game.Abilities;

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
            .Condition("Has Target", () => ctx.Target != null)
            .Do("Select + Enqueue Ability or Move", () =>
            {
                var abilityComponent = ctx.Owner.GetComponent<AbilityComponent>();
                var abilitySystem = ctx.Owner.GetComponent<AbilitySystemBehaviour>();
                var nav = ctx.Owner.GetComponent<UnityEngine.AI.NavMeshAgent>();

                if (abilityComponent == null || abilitySystem == null)
                    return TaskStatus.Failure;

                var target = ctx.Target;
                float dist = Vector3.Distance(ctx.Owner.transform.position, target.transform.position);

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
                        if (abilityComponent.EnqueueAbility(ability))
                        {
                            Debug.Log($"AI: Using {slot} ability");
                            return TaskStatus.Success;
                        }
                    }
                    else
                    {
                        Debug.Log($"AI: Moving to target for {slot} ability");
                        if (nav != null && nav.enabled)
                        {
                            nav.SetDestination(target.transform.position);
                            return TaskStatus.Continue;
                        }
                    }
                }

                return TaskStatus.Failure;
            });
    }
}
