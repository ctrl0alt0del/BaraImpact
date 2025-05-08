//-------------------------------------------------------------
// BasicAttackAbilitySO.cs   (re-targeted to h2v9696/UnityGAS)
//-------------------------------------------------------------
using UnityEngine;
using System.Collections;

/* ── GAS (h2v9696 fork) ─────────────────────────────────── */
using H2V.GameplayAbilitySystem.AbilitySystem;
using H2V.GameplayAbilitySystem.AbilitySystem.Components;          // AbilitySystemBehaviour
using H2V.GameplayAbilitySystem.AbilitySystem.ScriptableObjects;   // AbilitySO<T>

/* ── Your project-local contracts ─────────────────────────── */
using Game.Abilities;   // IGameplayAbilityData, IAbilityDeliveryData, AbilitySlot, AbilityPriority
using Game.Combat;
using Game.Vfx; // AttackKind

/*────────────────────────────────────────────────────────────*/
[CreateAssetMenu(menuName = "Bara Impact/Abilities/Basic Attack")]
public sealed class BasicAttackAbilitySO
        : BaseAbilitySO<AbilitySpec>
{
    public override AbilitySlot Slot => AbilitySlot.BasicAttack;
    public override AbilityPriority Priority => AbilityPriority.Low;
    public sealed class BasicAttackSpec : AbilitySpec
  {
  }
}
