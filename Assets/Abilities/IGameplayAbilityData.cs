using H2V.GameplayAbilitySystem.AbilitySystem.Components;  // AbilitySystemBehaviour
using Game.Abilities;
public interface IGameplayAbilityData
{
  AbilitySlot Slot { get; }
  AbilityPriority Priority { get; }
  /* resource gating */
  bool CanPay(AbilitySystemBehaviour asc);
  void PayCost(AbilitySystemBehaviour asc);

  /* timeline / visuals */
  float WindupTime { get; }
  float ActiveTime { get; }
  float RecoverTime { get; }

  float TotalTime => WindupTime + ActiveTime + RecoverTime;
}
