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
using Game.Combat;      // AttackKind

/*────────────────────────────────────────────────────────────*/
[CreateAssetMenu(menuName = "Bara Impact/Abilities/Basic Attack")]
public sealed class BasicAttackAbilitySO
        : AbilitySO<BasicAttackAbilitySO.BasicAttackSpec>,        // new GAS base-class
          IGameplayAbilityData,
          IAbilityDeliveryData,
          IVfxProvider
{
  /*──────── Designer-tweaks ───────────────────────────────*/
  [Header("Timeline (sec)")]
  [SerializeField] private float windup = 0.15f;
  [SerializeField] private float active = 0.05f;
  [SerializeField] private float recover = 0.25f;

  [Header("Visuals / Prefabs")]
  [SerializeField] private AnimationClip animationClip;
  [SerializeField] private GameObject attackPrefab;
  [SerializeField] private GameObject vfxPrefab;

  [Header("Delivery")]
  [SerializeField] private AttackKind kind = AttackKind.Melee;
  [SerializeField] private float range = 2.0f;        // metres
  [SerializeField] private float speed = 0f;          // 0 = melee / hitscan
  [SerializeField] private LayerMask hitMask = ~0;         // default: hit everything

  /*──────── IGameplayAbilityData ──────────────────────────*/
  public AbilitySlot Slot => AbilitySlot.BasicAttack;
  public AbilityPriority Priority => AbilityPriority.Low;

  public bool CanPay(AbilitySystemBehaviour asc) => true;  // free
  public void PayCost(AbilitySystemBehaviour asc) { }      // nothing to deduct

  public float WindupTime => windup;
  public float ActiveTime => active;
  public float RecoverTime => recover;
  public AnimationClip AnimationClip => animationClip;

  /*──────── IAbilityDeliveryData ──────────────────────────*/
  public GameObject AttackPrefab => attackPrefab;
  public AttackKind Kind => kind;
  public float Range => range;
  public float Speed => speed;
  public LayerMask HitMask => hitMask;

  /*──────── IVfxProvider ─────────────────────────────────*/
  public GameObject VfxPrefab => vfxPrefab;

  /*──────── GAS spec - minimal stub (SEA drives logic) ──*/
  public sealed class BasicAttackSpec : AbilitySpec
  {
  }
}
