//-------------------------------------------------------------
// Assets/Scripts/Gameplay/Abilities/AbilityPhaseRunner.cs
//-------------------------------------------------------------
using UnityEngine;
using System.Collections;
using Game.Combat;
using SEA.Events;
using SEA.Mutators;
using Game.States;
using SEA.State;

namespace Game.Abilities
{
    [RequireComponent(typeof(Animator))]
    public class AbilityPhaseRunner : MonoBehaviour
    {
        const string AnimSpeed = "AbilitySpeedMul";

        Animator anim;
        DeliverySpawner spawner;

        IGameplayAbilityData current;
        float savedSpeed = 1f;

        public IGameplayAbilityData Current => current;

        void Awake()
        {
            anim = GetComponent<Animator>();
            spawner = GetComponent<DeliverySpawner>();
            GlobalEventBus.Subscribe<EnterEvent>(OnEnter);
        }

        void OnDestroy() =>
            GlobalEventBus.Unsubscribe<EnterEvent>(OnEnter);

        public void Arm(IGameplayAbilityData ability)
        {
            current = ability;
        }

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
                savedSpeed = anim.GetFloat(AnimSpeed);
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
            anim.SetFloat(AnimSpeed, savedSpeed);
            current = null;

            MutatorQueue.Enqueue(new StateMutator(gameObject,
                                   UnitStates.Idle));
        }
    }
}
