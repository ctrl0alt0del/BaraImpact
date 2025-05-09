//-------------------------------------------------------------
// Assets/Scripts/Gameplay/Abilities/AbilityPhaseRunner.cs
//-------------------------------------------------------------
using UnityEngine;
using System.Collections;
using SEA.Events;
using SEA.Mutators;
using Game.States;
using Game.Abilities;
using Game.Combat;
using SEA.State; // DeliverySpawner

namespace Game.Abilities
{
    [RequireComponent(typeof(Animator), typeof(DeliverySpawner))]
    public class AbilityPhaseRunner : MonoBehaviour
    {
        const string AnimSpeed = "AbilitySpeedMul";

        Animator anim;
        DeliverySpawner spawner;

        IGameplayAbilityData current;
        AnimationClip activeClip;           // ← stores chosen variant
        float savedSpeed = 1f;

        public IGameplayAbilityData Current => current;
        public AnimationClip ActiveClip => activeClip;   // ← public getter

        void Awake()
        {
            anim = GetComponent<Animator>();
            spawner = GetComponent<DeliverySpawner>();
            GlobalEventBus.Subscribe<EnterEvent>(OnEnter);
        }

        void OnDestroy() =>
            GlobalEventBus.Unsubscribe<EnterEvent>(OnEnter);

        /// <summary>Called by AbilityComponent when an ability is queued.</summary>
        public void Arm(IGameplayAbilityData ability)
        {
            current = ability;

            // Pick the next animation variant (or default)
            if (ability is IVfxVariantProvider vp &&
                vp.CastVariants &&
                vp.CastVariants.GetNext(out var clip, out _))
            {
                activeClip = clip;
            }
        }

        /*──────── SEA event pump ─────────*/
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

        /*──────── Phase coroutines ───────*/
        IEnumerator Windup()
        {
            if (activeClip && current.TotalTime > 0f)
            {
                savedSpeed = anim.GetFloat(AnimSpeed);
                anim.SetFloat(AnimSpeed,
                              activeClip.length / current.TotalTime);
                anim.CrossFade(activeClip.name, 0.12f, 1);
            }
            yield return new WaitForSeconds(current.WindupTime);

            MutatorQueue.Enqueue(new StateMutator(gameObject,
                                   UnitStates.AbilityActive));
        }

        IEnumerator Active()
        {
            if (current is IAbilityDeliveryData d)
                spawner.Spawn(d, transform);            // ← projectile / melee hit

            yield return new WaitForSeconds(current.ActiveTime);

            MutatorQueue.Enqueue(new StateMutator(gameObject,
                                   UnitStates.AbilityRecover));
        }

        IEnumerator Recover()
        {
            yield return new WaitForSeconds(current.RecoverTime);
            anim.SetFloat(AnimSpeed, savedSpeed);
            current = null;
            activeClip = null;

            MutatorQueue.Enqueue(new StateMutator(gameObject,
                                   UnitStates.Idle));
        }
    }
}
