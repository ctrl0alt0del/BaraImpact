using UnityEngine;
using AbilitySystem;
using AbilitySystem.Authoring;
using System.Collections;
using Game.Abilities;
using Game.Combat;

[CreateAssetMenu(menuName = "Gameplay Ability System/Abilities/Basic Attack")]
public class BasicAttackAbilitySO : AbstractAbilityScriptableObject, IGameplayAbilityData, IAbilityDeliveryData, IVfxProvider
{
  [Header("Timeline (sec)")]
  [SerializeField] float windup = 0.15f;
  [SerializeField] float active = 0.05f;
  [SerializeField] float recover = 0.25f;

  [Header("Visuals")]
  [SerializeField] AnimationClip animationClip;
  [Header("Prefab")]
  [SerializeField] GameObject attackPrefab;

  [Header("Visuals")]
  [SerializeField] GameObject vfxPrefab;
  [SerializeField] AttackKind kind = AttackKind.Melee;
  [SerializeField] float range = 2.0f;
  [SerializeField] float speed = 0f;     // 0 for melee / hitscan
  [SerializeField] LayerMask hitMask = ~0;   // default: hit everything

  public AbilitySlot Slot => AbilitySlot.BasicAttack;
  public AbilityPriority Priority => AbilityPriority.Low;

  /*──── IGameplayAbilityData ────*/
  public bool CanPay(AbilitySystemCharacter asc) => true;    // always allowed
  public void PayCost(AbilitySystemCharacter asc) { }        // no cost

  public float WindupTime => windup;
  public float ActiveTime => active;
  public float RecoverTime => recover;
  // designer set
  public GameObject VfxPrefab => vfxPrefab;
  public AnimationClip AnimationClip => animationClip;
  public GameObject AttackPrefab => attackPrefab;
  public AttackKind Kind => kind;
  public float Range => range;
  public float Speed => speed;
  public LayerMask HitMask => hitMask;

  /*──── GAS plumbing left empty (SEA drives the timeline) ────*/
  public override AbstractAbilitySpec CreateSpec(AbilitySystemCharacter owner)
      => new BasicAttackSpec(this, owner);

  class BasicAttackSpec : AbstractAbilitySpec
  {
    public BasicAttackSpec(AbstractAbilityScriptableObject ability, AbilitySystemCharacter owner)
        : base(ability, owner) { }
    /* no tag requirements for a free basic attack */
    public override bool CheckGameplayTags() => true;

    /* nothing to prep — SEA starts the animation */
    protected override IEnumerator PreActivate() => null;

    /* nothing to cancel — but method must exist */
    public override void CancelAbility() { }

    /* SEA runs the timeline, so we’re done */
    protected override IEnumerator ActivateAbility() { yield break; }
  }
}
