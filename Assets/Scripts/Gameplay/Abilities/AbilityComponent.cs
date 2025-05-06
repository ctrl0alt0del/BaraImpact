//-------------------------------------------------------------
// AbilityComponent.cs   – version for h2v9696/UnityGAS
//-------------------------------------------------------------
using UnityEngine;
using System.Collections;
using System.Collections.Generic;
using System;

using SEA.State;                         // EnterEvent
using SEA.Mutators;                      // StateMutator
using SEA.Events;                        // GlobalEventBus

using H2V.GameplayAbilitySystem.AbilitySystem.Components;          // AbilitySystemBehaviour
using H2V.GameplayAbilitySystem.AbilitySystem.ScriptableObjects;   // AbilitySO<>
using H2V.GameplayAbilitySystem.EffectSystem.ScriptableObjects;
using H2V.GameplayAbilitySystem.EffectSystem;                     // IEffectApplier, GameplayEffectSpec

using Game.States;
using Game.Abilities;                    // AbilitySlot, IGameplayAbilityData
using Game.Combat;                       // AttackInstanceComponent, IAbilityDeliveryData, IVfxProvider

/// Mount on any GameObject that already has a StateMachine + Animator
[RequireComponent(typeof(StateMachine), typeof(Animator), typeof(AbilitySystemBehaviour))]
public class AbilityComponent : MonoBehaviour
{
  /* Designer-assigned list of ability assets (AbilitySO<…>) */
  [SerializeField] AbilitySO[] grantedAbilities;
  [Header("Speed-cap GameplayEffect")]
  [SerializeField] private GameplayEffectSO walkOnlyEffect;
  IEffectApplier effects;
  [NonSerialized] GameplayEffectSpec walkCapSpec;

  readonly Dictionary<AbilitySlot, IGameplayAbilityData> slotToAbility
      = new Dictionary<AbilitySlot, IGameplayAbilityData>();

  AbilitySystemBehaviour asc;      // GAS runtime component
  StateMachine sm;
  Animator _anim;

  IGameplayAbilityData _pending;
  IGameplayAbilityData _active;

  /*──────────────────────────────────────────────────────────*/
  void Awake()
  {
    sm = GetComponent<StateMachine>();
    _anim = GetComponent<Animator>();
    asc = GetComponent<AbilitySystemBehaviour>();
    effects = GetComponent<IEffectApplier>();

    /* register every SO on this character */
    foreach (var so in grantedAbilities)
    {
      if (so is IGameplayAbilityData data)
      {
        // AbilitySO already knows how to create its own Spec:
        asc.GiveAbility(so);            // new GAS API

        slotToAbility[data.Slot] = data;    // cache for quick lookup
      }
    }

    GlobalEventBus.Subscribe<EnterEvent>(HandleEnter);
  }

  /*──────────────────────────────────────────────────────────*/
  /*                   EVENT ENTRY PUMP                       */
  /*──────────────────────────────────────────────────────────*/
  void HandleEnter(EnterEvent evt)
  {
    /* 1️⃣ INPUT state-machine fired? */
    if (IsInputEvent(evt))
    {
      TryQueueAbilityForInput(evt.State);
      return;                                 // stop bubbling
    }

    /* 2️⃣ Unit’s own state timeline event */
    if (evt.Target == gameObject && _pending != null)
      HandleUnitTimeline(evt.State);
  }

  /*──────── helpers ─────────────────────────────*/
  bool IsInputEvent(EnterEvent evt) =>
      InputStateMachineBootstrap.Instance &&
      evt.Target == InputStateMachineBootstrap.Instance.gameObject;

  void TryQueueAbilityForInput(string inputState)
  {
    var slot = InputStateToSlot(inputState);
    if (!slot.HasValue) return;

    if (!slotToAbility.TryGetValue(slot.Value, out var ability)) return;

    /* spam / priority guard */
    bool freeToStart = _pending == null;
    bool canInterrupt = _active != null && ability.Priority > _active.Priority;

    if (!freeToStart && !canInterrupt) return;

    if (canInterrupt) _active = null;

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

  static AbilitySlot? InputStateToSlot(string inputState) => inputState switch
  {
    InputStates.BasicAttack => AbilitySlot.BasicAttack,
    InputStates.Skill => AbilitySlot.Skill,
    InputStates.Burst => AbilitySlot.Burst,
    _ => null
  };

  /*──────────────────────────────────────────────────────────*/
  /*                        PHASES                            */
  /*──────────────────────────────────────────────────────────*/
  void TryPayAndProceed()
  {
    if (!_pending.CanPay(asc))
    {
      _pending = null;
      MutatorQueue.Enqueue(new StateMutator(gameObject, UnitStates.Idle));
      return;
    }

    _pending.PayCost(asc);
    MutatorQueue.Enqueue(new StateMutator(gameObject, UnitStates.AbilityWindup));
  }

  IEnumerator WindupRoutine()
  {
    _active = _pending;                                   // lock priority
    if (_pending.AnimationClip)
      _anim.CrossFade(_pending.AnimationClip.name, 0.12f, 1);
    Debug.Assert(walkOnlyEffect != null, "walkOnlyEffect is null!");
    if (walkOnlyEffect && walkCapSpec == null)
      walkCapSpec = effects.Apply(walkOnlyEffect);

    yield return new WaitForSeconds(_pending.WindupTime);
    MutatorQueue.Enqueue(new StateMutator(gameObject, UnitStates.AbilityActive));
  }

  IEnumerator ActiveRoutine()
  {
    if (_pending is IAbilityDeliveryData delivery)
      SpawnDelivery(delivery);

    yield return new WaitForSeconds(_pending.ActiveTime);
    MutatorQueue.Enqueue(new StateMutator(gameObject, UnitStates.AbilityRecover));
  }

  IEnumerator RecoverRoutine()
  {
    yield return new WaitForSeconds(_pending.RecoverTime);
    _pending = null;
    _active = null;
    effects.Remove(walkCapSpec);
    walkCapSpec = null;
    MutatorQueue.Enqueue(new StateMutator(gameObject, UnitStates.Idle));
  }

  void SpawnDelivery(IAbilityDeliveryData data)
  {
    // ── resolve spawn position / direction ─────────────
    (Vector3 pos, Vector3 dir) = ResolveSpawnPoint(data);

    // ── instantiate & orient projectile ────────────────
    GameObject go = Instantiate(data.AttackPrefab);
    go.transform.SetPositionAndRotation(pos, Quaternion.LookRotation(dir));

    if (!go.TryGetComponent(out AttackInstanceComponent comp))
    {
      Debug.LogError($"Prefab {data.AttackPrefab.name} missing AttackInstanceComponent");
      Destroy(go);
      return;
    }

    GameObject vfx = (data as IVfxProvider)?.VfxPrefab;

    comp.Init(data.Kind,
              data.Range,
              data.Speed,
              vfx,
              data.HitMask,
              transform);
    go.layer = LayerMask.NameToLayer("Projectile");

  }

  (Vector3 pos, Vector3 dir) ResolveSpawnPoint(IAbilityDeliveryData data)
  {
    const float fallbackHeight = 1.3f;
    const float forwardOffset = 0.3f;

    // default chest-level launch straight ahead
    Vector3 baseDir = transform.forward;
    Vector3 basePos = transform.position + Vector3.up * fallbackHeight + baseDir * forwardOffset;

    if (data is not IHasSpawnOrigin origin || string.IsNullOrEmpty(origin.SpawnBone))
      return (basePos, baseDir);

    // try Animator humanoid bone
    Animator anim = GetComponent<Animator>();
    Transform boneT = anim.GetBoneTransformByName(origin.SpawnBone);

    // fallback: named child
    if (boneT == null)
      boneT = transform.Find(origin.SpawnBone);

    if (boneT == null)
    {
      Debug.LogWarning($"Spawn bone \"{origin.SpawnBone}\" not found; using default point.");
      return (basePos, baseDir);
    }

    Vector3 dir = transform.forward;
    Vector3 pos = boneT.position + boneT.TransformVector(origin.SpawnOffset);
    Debug.DrawRay(pos, dir * 0.2f, Color.cyan, 0.5f);
    return (pos, dir);
  }

}
