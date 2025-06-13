using UnityEngine;
using System.Collections.Generic;
using System;
using SEA.Events;
using SEA.State;
using SEA.Mutators;
using H2V.GameplayAbilitySystem.AbilitySystem.Components;
using H2V.GameplayAbilitySystem.AbilitySystem.ScriptableObjects;

using H2V.GameplayAbilitySystem.EffectSystem.ScriptableObjects;
using H2V.GameplayAbilitySystem.EffectSystem;
using Game.States;
using Game.Abilities;
using H2V.GameplayAbilitySystem.Components;

[RequireComponent(typeof(StateMachine),
                  typeof(AbilityPhaseRunner),
                  typeof(AbilitySystemBehaviour))]
public class AbilityComponent : MonoBehaviour
{
  [SerializeField] AbilitySO[] grantedAbilities;
  [SerializeField] GameplayEffectSO walkOnlyEffect;
  [SerializeField] private bool reactToInputEvents = false;

  AbilitySystemBehaviour asc;
  IEffectApplier effects;
  [NonSerialized] GameplayEffectSpec moveCap;

  readonly AbilityQueue queue = new AbilityQueue();
  readonly Dictionary<AbilitySlot, IGameplayAbilityData> slotMap = new();
  AbilityPhaseRunner phase;

  void Awake()
  {
    asc = GetComponent<AbilitySystemBehaviour>();
    phase = GetComponent<AbilityPhaseRunner>();
    effects = GetComponent<IEffectApplier>();

    GetComponent<AbilitySystemComponent>().Init();

    foreach (var so in grantedAbilities)
    {
        asc.GiveAbility(so);

        if (so is IGameplayAbilityData d)
        {
            slotMap[d.Slot] = d;
        }
    }

    GlobalEventBus.Subscribe<EnterEvent>(OnEnter);
    GlobalEventBus.Subscribe<ExitEvent>(OnExit);
  }


  void OnDestroy() =>
      GlobalEventBus.Unsubscribe<EnterEvent>(OnEnter);

  void OnEnter(EnterEvent e)
  {
      if (IsInputEvent(e)) { HandleInput(e); return; }

      if (e.Target != gameObject) return;

      if (e.State == UnitStates.CostPayment)
        PayAndPushWindup();
  }

  void OnExit(ExitEvent e)
  {
    if (e.Target != gameObject) return;

    if (e.State == UnitStates.AbilityRecover) EndMoveCap();
  }

  bool IsInputEvent(EnterEvent e) =>
      InputStateMachineBootstrap.Instance &&
      e.Target == InputStateMachineBootstrap.Instance.gameObject && reactToInputEvents;

  void HandleInput(EnterEvent e)
  {
    var slot = ToSlot(e.State);
    if (!slot.HasValue) return;
    if (!slotMap.TryGetValue(slot.Value, out var a)) return;
    if (e.State == InputStates.SprintRelease &&
        phase.Current is IChannelledAbilityData)
    {
        // force the phase runner out of Active immediately
        MutatorQueue.Enqueue(new StateMutator(gameObject, UnitStates.AbilityRecover));
        return;
    }
        EnqueueAbility(a);
    }

  static AbilitySlot? ToSlot(string s) => s switch
  {
    InputStates.BasicAttack => AbilitySlot.BasicAttack,
    InputStates.Skill => AbilitySlot.Skill,
    InputStates.Burst => AbilitySlot.Burst,
    InputStates.SprintPress => AbilitySlot.Sprint,
      _ => null
  };

  void PayAndPushWindup()
  {
    var next = queue.Dequeue();
    if (next == null || !next.CanPay(asc))
    {
      queue.Clear();
      MutatorQueue.Enqueue(new StateMutator(gameObject,
                                            UnitStates.Idle));
      return;
    }

    next.PayCost(asc);
    phase.Arm(next);

    if (walkOnlyEffect && moveCap == null)
      moveCap = effects.Apply(walkOnlyEffect);

    MutatorQueue.Enqueue(new StateMutator(gameObject,
                           UnitStates.AbilityWindup));
  }
  void EndMoveCap()
  {
      Debug.Log("Exiting AbilityRecover");
    if (moveCap != null)
    {
      effects.Remove(moveCap);
      moveCap = null;
    }
    queue.Clear();
  }

  public bool TryGetAbility(AbilitySlot slot, out IGameplayAbilityData ability)
  {
      return slotMap.TryGetValue(slot, out ability);
  }

  public bool EnqueueAbility(IGameplayAbilityData ability)
  {
      if (!queue.TryEnqueue(ability))
          return false;

      MutatorQueue.Enqueue(new StateMutator(gameObject, UnitStates.CostPayment));
      return true;
    }
}
