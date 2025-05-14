//-------------------------------------------------------------
// Assets/Scripts/Gameplay/Abilities/AbilityPhaseRunner.cs
//-------------------------------------------------------------
using UnityEngine;
using System.Collections;
using SEA.Events;
using SEA.Mutators;
using Game.States;
using Game.Combat;
using SEA.State;               // DeliverySpawner

namespace Game.Abilities
{
    [RequireComponent(typeof(Animator), typeof(DeliverySpawner))]
    public class AbilityPhaseRunner : MonoBehaviour
    {
        const string AnimSpeed = "AbilitySpeedMul";

        /* ───────── FIELDS ───────── */
        Animator anim;
        DeliverySpawner spawner;

        IGameplayAbilityData current;
        AnimationClip activeClip;

        // AOC plumbing
        RuntimeAnimatorController baseCtrl;
        AnimatorOverrideController aoc;
        AnimationClip placeholderClip;

        float savedSpeed = 1f;

        public IGameplayAbilityData Current => current;
        public AnimationClip ActiveClip => activeClip;

        /* ───────── SETUP ───────── */
        void Awake()
        {
            anim = GetComponent<Animator>();
            spawner = GetComponent<DeliverySpawner>();

            // Grab original controller and build an AOC on top of it once
            baseCtrl = anim.runtimeAnimatorController;
            aoc = new AnimatorOverrideController(baseCtrl);

            // cache the placeholder clip used by Cast_Generic
            foreach (var pair in aoc.clips)
            {
                // pair.originalClip is the key
                if (pair.originalClip.name == "Cast_placeholder")
                {
                    placeholderClip = pair.originalClip;
                    break;
                }
            }

            GlobalEventBus.Subscribe<EnterEvent>(OnEnter);
        }

        void OnDestroy()
        {
            GlobalEventBus.Unsubscribe<EnterEvent>(OnEnter);
        }

        /* ───────── CALLED BY AbilityComponent ───────── */
        public void Arm(IGameplayAbilityData ability)
        {
            current = ability;

            // choose a variant clip if the ability provides one
            if (ability is IVfxVariantProvider vp &&
                vp.CastVariants &&
                vp.CastVariants.GetNext(out var clip, out _))
            {
                activeClip = clip;
            }
        }

        /* ───────── SEA EVENT HANDLER ───────── */
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

        /* ───────── COROUTINES ───────── */
        IEnumerator Windup()
        {
            if (activeClip && current.TotalTime > 0f)
            {
                // 1) override placeholder with chosen clip
                aoc[placeholderClip] = activeClip;
                anim.runtimeAnimatorController = aoc;

                // 2) play state at speed so it finishes exactly at Windup end
                savedSpeed = anim.GetFloat(AnimSpeed);
                anim.SetFloat(AnimSpeed, activeClip.length / current.TotalTime);
                anim.CrossFade("Cast_Generic", 0.12f, 1);   // layer 0
            }

            yield return new WaitForSeconds(current.WindupTime);

            MutatorQueue.Enqueue(new StateMutator(gameObject, UnitStates.AbilityActive));
        }

        IEnumerator Active()
        {
            if (current is IAbilityDeliveryData d)
                spawner.Spawn(d, transform);    // projectile or melee hitbox

            yield return new WaitForSeconds(current.ActiveTime);

            MutatorQueue.Enqueue(new StateMutator(gameObject, UnitStates.AbilityRecover));
        }

        IEnumerator Recover()
        {
            yield return new WaitForSeconds(current.RecoverTime);

            // restore original speed & controller
            anim.SetFloat(AnimSpeed, savedSpeed);
            anim.runtimeAnimatorController = baseCtrl;

            current = null;
            activeClip = null;

            MutatorQueue.Enqueue(new StateMutator(gameObject, UnitStates.Idle));
        }
    }
}
