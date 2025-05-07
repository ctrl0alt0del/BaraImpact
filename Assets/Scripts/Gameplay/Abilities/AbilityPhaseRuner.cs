//-------------------------------------------------------------
// AbilityPhaseRunner.cs – handles Windup / Active / Recover
//-------------------------------------------------------------
using UnityEngine;
using System.Collections;
using SEA.Events;
using SEA.Mutators;
using SEA.State;
using Game.States;
using Game.Combat;
using Game.Abilities;

[RequireComponent(typeof(Animator), typeof(DeliverySpawner))]
public class AbilityPhaseRunner : MonoBehaviour
{
  const string AnimSpeed = "AbilitySpeedMul";

  Animator anim;
  DeliverySpawner spawner;
  IGameplayAbilityData current;
  float cachedSpeed = 1f;

  void Awake()
  {
    anim = GetComponent<Animator>();
    spawner = GetComponent<DeliverySpawner>();
    GlobalEventBus.Subscribe<EnterEvent>(OnEnter);
  }

  void OnDestroy() =>
      GlobalEventBus.Unsubscribe<EnterEvent>(OnEnter);

  public void Arm(IGameplayAbilityData ability) => current = ability;

  void OnEnter(EnterEvent e)
  {
    if (e.Target != gameObject || current == null) return;

    switch (e.State)
    {
      case UnitStates.AbilityWindup: StartCoroutine(Windup()); break;
      case UnitStates.AbilityActive: StartCoroutine(Active()); break;
      case UnitStates.AbilityRecover: StartCoroutine(Recover()); break;
    }
  }

  IEnumerator Windup()
  {
    if (current.AnimationClip && current.TotalTime > 0f)
    {
      cachedSpeed = anim.GetFloat(AnimSpeed);
      anim.SetFloat(AnimSpeed,
                    current.AnimationClip.length / current.TotalTime);
      anim.CrossFade(current.AnimationClip.name, 0.12f, 1);
    }
    yield return new WaitForSeconds(current.WindupTime);
    MutatorQueue.Enqueue(new StateMutator(gameObject,
                           UnitStates.AbilityActive));
  }

  IEnumerator Active()
  {
    if (current is IAbilityDeliveryData d)
      spawner.Spawn(d, transform);

    yield return new WaitForSeconds(current.ActiveTime);
    MutatorQueue.Enqueue(new StateMutator(gameObject,
                           UnitStates.AbilityRecover));
  }

  IEnumerator Recover()
  {
    yield return new WaitForSeconds(current.RecoverTime);
    anim.SetFloat(AnimSpeed, cachedSpeed);
    current = null;
    MutatorQueue.Enqueue(new StateMutator(gameObject,
                           UnitStates.Idle));
  }
}
