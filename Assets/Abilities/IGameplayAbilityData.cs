using AbilitySystem;   // AbilitySystemCharacter
using Game.Abilities;
public interface IGameplayAbilityData
{
  AbilitySlot Slot { get; }
  AbilityPriority Priority { get; }
  /* resource gating */
  bool CanPay(AbilitySystemCharacter asc);
  void PayCost(AbilitySystemCharacter asc);

  /* timeline / visuals */
  float WindupTime { get; }
  float ActiveTime { get; }
  float RecoverTime { get; }

  UnityEngine.AnimationClip AnimationClip { get; }
  UnityEngine.GameObject HitboxPrefab { get; }
}
