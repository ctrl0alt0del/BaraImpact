using UnityEngine;
using System.Collections;
using Game.States;
using SEA.State;        // EnterEvent / ExitEvent 🎟️  cite turn6view0
using SEA.Mutators;     // StateMutator + queue      cite turn7view0 turn8view0
using SEA.Events;       // GlobalEventBus

/// Mount on any GameObject that has a StateMachine + Animator.
[RequireComponent(typeof(StateMachine), typeof(Animator))]
public class AbilityComponent : MonoBehaviour
{
  [SerializeField] private AbilityDefinition defaultBasicAttack;

  private AbilityDefinition _pending;
  private StateMachine _sm;
  private Animator _anim;

  /*──────────────────────────────────────────────────────────────*/

  void Awake()
  {
    _sm = GetComponent<StateMachine>();
    _anim = GetComponent<Animator>();

    GlobalEventBus.Subscribe<EnterEvent>(OnEnter);
    GlobalEventBus.Subscribe<EnterEvent>(OnInputEnter);
  }

  void OnDestroy()
  {
    GlobalEventBus.Unsubscribe<EnterEvent>(OnEnter);
  }

  /*──────────────────────── Public API ─────────────────────────*/

  /// Call this from your input handler when LMB / ␣ / whatever is pressed.
  public void TryBasicAttack()
  {
    if (_pending != null) return;          // already mid-ability
    _pending = defaultBasicAttack;

    // Kick off the SEA chain 👉 Idle → CostPayment
    MutatorQueue.Enqueue(new StateMutator(gameObject, UnitStates.CostPayment));
  }

  /*──────────────────────── SEA hook ───────────────────────────*/

  private void OnEnter(EnterEvent evt)
  {
    if (evt.Target != gameObject || _pending == null) return;

    switch (evt.State)
    {
      case UnitStates.CostPayment:
        TryPayAndProceed();
        break;

      case UnitStates.AbilityWindup:
        StartCoroutine(WindupRoutine());
        break;

      case UnitStates.AbilityActive:
        StartCoroutine(ActiveRoutine());
        break;

      case UnitStates.AbilityRecover:
        StartCoroutine(RecoverRoutine());
        break;
    }
  }

  private void OnInputEnter(EnterEvent evt)
  {
    if (!InputStateMachineBootstrap.Instance || evt.Target != InputStateMachineBootstrap.Instance.gameObject) return;

    if (evt.State == InputStates.BasicAttack && _pending == null)
    {
      _pending = defaultBasicAttack;                        // lock in ability
      SEA.Mutators.MutatorQueue.Enqueue(
          new SEA.Mutators.StateMutator(gameObject, UnitStates.CostPayment));
    }
  }

  void TryPayAndProceed()
  {
    var a = _pending;
    var resCtrl = GetComponent<ResourceController>();

    if (a.resourceType != Game.Resources.ResourceType.None &&
        !resCtrl.Has(a.resourceType, a.resourceCost))
    {
      _pending = null;                                    // not enough juice
      MutatorQueue.Enqueue(new StateMutator(gameObject, UnitStates.Idle));
      return;
    }

    if (a.resourceType != Game.Resources.ResourceType.None)
      resCtrl.Spend(a.resourceType, a.resourceCost);

    MutatorQueue.Enqueue(new StateMutator(gameObject, UnitStates.AbilityWindup));
  }

  /*──────────────────── Phase coroutines ───────────────────────*/

  IEnumerator WindupRoutine()
  {
    if (_pending.animationClip)
      _anim.Play(_pending.animationClip.name, 0, 0f);

    yield return new WaitForSeconds(_pending.windupTime);
    MutatorQueue.Enqueue(new StateMutator(gameObject, UnitStates.AbilityActive));
  }

  IEnumerator ActiveRoutine()
  {
    if (_pending.hitboxPrefab)
    {
      var hb = Instantiate(_pending.hitboxPrefab,
                           transform.position + transform.forward,
                           transform.rotation, transform);
      Destroy(hb, _pending.activeTime);
    }

    yield return new WaitForSeconds(_pending.activeTime);
    MutatorQueue.Enqueue(new StateMutator(gameObject, UnitStates.AbilityRecover));
  }

  IEnumerator RecoverRoutine()
  {
    yield return new WaitForSeconds(_pending.recoverTime);
    _pending = null;                       // clear lock
    MutatorQueue.Enqueue(new StateMutator(gameObject, UnitStates.Idle));
  }
}
