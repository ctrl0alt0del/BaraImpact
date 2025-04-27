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

  IGameplayAbilityData _pending;     // generic!

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
  void HandleEnter(EnterEvent evt)
  {
    Debug.Log($"AbilityComponent.HandleEnter: {evt.State}");
    /* INPUT machine */
    AbilitySlot? inputSlot = evt.Target == InputStateMachineBootstrap.Instance?.gameObject
                                 ? InputStateToSlot(evt.State)
                                 : null;
    if (InputStateMachineBootstrap.Instance &&
        evt.Target == InputStateMachineBootstrap.Instance.gameObject &&
        evt.State == InputStates.BasicAttack &&
        _pending == null)
    {
      // find the BasicAttack asset among granted abilities
      foreach (var ab in grantedAbilities)
        if (ab is IGameplayAbilityData data)
        { _pending = data; break; }

      if (_pending != null)
        MutatorQueue.Enqueue(new StateMutator(gameObject, UnitStates.CostPayment));
      return;
    }

    /* Unit’s own machine */
    if (evt.Target != gameObject || _pending == null) return;

    switch (evt.State)
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
