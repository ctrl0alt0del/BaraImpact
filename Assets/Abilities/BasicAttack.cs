using UnityEngine;
using AbilitySystem;
using AbilitySystem.Authoring;
using System.Collections;
using Game.Abilities;

[CreateAssetMenu(menuName = "Gameplay Ability System/Abilities/Basic Attack")]
public class BasicAttackAbilitySO : AbstractAbilityScriptableObject, IGameplayAbilityData
{
  [Header("Timeline (sec)")]
  [SerializeField] float windup = 0.15f;
  [SerializeField] float active = 0.05f;
  [SerializeField] float recover = 0.25f;

  [Header("Visuals")]
  [SerializeField] AnimationClip animationClip;
  [SerializeField] GameObject hitboxPrefab;

  public AbilitySlot Slot => AbilitySlot.BasicAttack;
  public AbilityPriority Priority => AbilityPriority.Low;

  /*──── IGameplayAbilityData ────*/
  public bool CanPay(AbilitySystemCharacter asc) => true;    // always allowed
  public void PayCost(AbilitySystemCharacter asc) { }        // no cost

  public float WindupTime => windup;
  public float ActiveTime => active;
  public float RecoverTime => recover;

  public AnimationClip AnimationClip => animationClip;
  public GameObject HitboxPrefab => hitboxPrefab;

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
