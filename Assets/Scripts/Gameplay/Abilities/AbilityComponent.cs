using UnityEngine;
using System.Collections;
using System.Collections.Generic;
using Game.States;
using SEA.State;        // EnterEvent / ExitEvent 🎟️  cite turn6view0
using SEA.Mutators;     // StateMutator + queue      cite turn7view0 turn8view0
using SEA.Events;       // GlobalEventBus
using AbilitySystem.Authoring;
using AbilitySystem;
using Game.Abilities;   // AbilitySlot + IGameplayAbilityData

/// Mount on any GameObject that has a StateMachine + Animator.
[RequireComponent(typeof(StateMachine), typeof(Animator))]
public class AbilityComponent : MonoBehaviour
{
  [SerializeField] AbstractAbilityScriptableObject[] grantedAbilities;
  readonly Dictionary<AbilitySlot, IGameplayAbilityData> slotToAbility
         = new Dictionary<AbilitySlot, IGameplayAbilityData>();
  AbilitySystemCharacter asc;
  StateMachine sm;
  Animator _anim;

  IGameplayAbilityData _pending;
  IGameplayAbilityData _active;

  void Awake()
  {
    sm = GetComponent<StateMachine>();
    _anim = GetComponent<Animator>();
    asc = GetComponent<AbilitySystemCharacter>();

    foreach (var so in grantedAbilities)
    {
      if (so is IGameplayAbilityData data)
      {
        asc.GrantAbility(so.CreateSpec(asc));
        slotToAbility[data.Slot] = data;
      }
    }

    GlobalEventBus.Subscribe<EnterEvent>(HandleEnter);
  }

  /*──────── SEA pump ────────*/
  /*───────────────────────────────────────────────────────────────*/
  /*  AbilityComponent.cs  ―  slimmed-out HandleEnter()            */
  /*───────────────────────────────────────────────────────────────*/
  void HandleEnter(EnterEvent evt)
  {
    // 1️⃣ Did the INPUT state-machine fire?
    if (IsInputEvent(evt))
    {
      TryQueueAbilityForInput(evt.State);
      return;                               // never let input fall through
    }

    // 2️⃣ Is it this unit’s own SEA timeline event?
    if (evt.Target == gameObject && _pending != null)
      HandleUnitTimeline(evt.State);
  }

  /*──────────────────────── helpers ─────────────────────────────*/

  bool IsInputEvent(EnterEvent evt) =>
      InputStateMachineBootstrap.Instance &&
      evt.Target == InputStateMachineBootstrap.Instance.gameObject;

  void TryQueueAbilityForInput(string inputState)
  {
    var slot = InputStateToSlot(inputState);
    if (!slot.HasValue) return;

    if (!slotToAbility.TryGetValue(slot.Value, out var ability)) return;

    // Priority / spam guard
    bool freeToStart = _pending == null;
    bool canInterrupt = _active != null && ability.Priority > _active.Priority;

    if (!freeToStart && !canInterrupt) return;

    if (canInterrupt) _active = null;             // drop lower-prio move

    _pending = ability;
    MutatorQueue.Enqueue(new StateMutator(gameObject, UnitStates.CostPayment));
  }

  void HandleUnitTimeline(string state)
  {
    switch (state)
    {
      case UnitStates.CostPayment: TryPayAndProceed(); break;
      case UnitStates.AbilityWindup: StartCoroutine(WindupRoutine()); break;
      case UnitStates.AbilityActive: StartCoroutine(ActiveRoutine()); break;
      case UnitStates.AbilityRecover: StartCoroutine(RecoverRoutine()); break;
    }
  }


  static AbilitySlot? InputStateToSlot(string inputState)
  {
    return inputState switch
    {
      InputStates.BasicAttack => AbilitySlot.BasicAttack,
      InputStates.Skill => AbilitySlot.Skill,   // add in InputStates enum when you wire up
      InputStates.Burst => AbilitySlot.Burst,
      _ => null
    };
  }

  void TryPayAndProceed()
  {
    if (!_pending.CanPay(asc))
    {
      _pending = null;                                   // fail → idle
      MutatorQueue.Enqueue(new StateMutator(gameObject, UnitStates.Idle));
      return;
    }

    _pending.PayCost(asc);                                 // deduct if needed
    MutatorQueue.Enqueue(new StateMutator(gameObject, UnitStates.AbilityWindup));
  }

  /*──────────────────── Phase coroutines ───────────────────────*/

  IEnumerator WindupRoutine()
  {
    Debug.Log($"Windup: {_pending.WindupTime} sec");
    if (_pending.AnimationClip)
      _anim.Play(_pending.AnimationClip.name, 0, 0f);

    yield return new WaitForSeconds(_pending.WindupTime);
    MutatorQueue.Enqueue(new StateMutator(gameObject, UnitStates.AbilityActive));
  }

  IEnumerator ActiveRoutine()
  {
    if (_pending.HitboxPrefab)
    {
      var hb = Instantiate(_pending.HitboxPrefab,
                           transform.position + transform.forward,
                           transform.rotation, transform);
      Destroy(hb, _pending.ActiveTime);
    }

    yield return new WaitForSeconds(_pending.ActiveTime);
    MutatorQueue.Enqueue(new StateMutator(gameObject, UnitStates.AbilityRecover));
  }

  IEnumerator RecoverRoutine()
  {
    yield return new WaitForSeconds(_pending.RecoverTime);
    _pending = null;                       // clear lock
    MutatorQueue.Enqueue(new StateMutator(gameObject, UnitStates.Idle));
  }
}
