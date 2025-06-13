//-------------------------------------------------------------
// Assets/Scripts/Gameplay/Abilities/AbilityPhaseRunner.cs
//-------------------------------------------------------------
using UnityEngine;
using System.Collections;
using SEA.Events;
using SEA.Mutators;
using Game.States;
using Game.Combat;
using SEA.State;
using Game.Vfx;
using Game.Visuals;
using System.Collections.Generic;

namespace Game.Abilities
{
    [RequireComponent(typeof(DeliverySpawner))]
    public class AbilityPhaseRunner : MonoBehaviour
    {
        const string AnimSpeed = "AbilitySpeedMul";

        /* ───────── FIELDS ───────── */
        IAnimatorSource animSrc;                 // NEW
        Animator Anim => animSrc?.Animator;
        DeliverySpawner spawner;

        IGameplayAbilityData current;

        /* AOC plumbing */
        RuntimeAnimatorController baseCtrl;
        AnimatorOverrideController aoc;
        [SerializeField] string placeholderName = "Cast_placeholder";
        AnimationClip placeholderClip;

        float savedSpeed = 1f;
        List<GameObject> stageVfx;
        private IAbilityExecutionStrategy runningStrategy;

        /* ───────── PROPS ───────── */
        public IGameplayAbilityData Current => current;

        /* ───────── SETUP ───────── */
        void Awake()
        {
            animSrc = GetComponentInChildren<IAnimatorSource>(true);
            spawner = GetComponent<DeliverySpawner>();

            baseCtrl = Anim.runtimeAnimatorController;
            aoc = new AnimatorOverrideController(baseCtrl);

            foreach (var pair in aoc.clips)
                if (pair.originalClip.name == placeholderName)
                { placeholderClip = pair.originalClip; break; }

            GlobalEventBus.Subscribe<EnterEvent>(OnEnter);
        }

        void OnDestroy()
        {
            GlobalEventBus.Unsubscribe<EnterEvent>(OnEnter);
        }

        /* ───────── PUBLIC API ───────── */
        public void Arm(IGameplayAbilityData ability)
        {
            current = ability;
            runningStrategy = AbilityStrategyFactory.Create(current);
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

        /* ───────── PHASE COROUTINES ───────── */
        IEnumerator Windup()
        {
            stageVfx = StageVariantUtil.PlayStageVariant(
                           current as IStageVariantProvider,
                           AbilityStage.Windup,
                           Anim, aoc, placeholderClip, transform,
                           out var playedClip);

            if (playedClip && current.TotalTime > 0f)
            {
                savedSpeed = Anim.GetFloat(AnimSpeed);
                Anim.SetFloat(AnimSpeed, playedClip.length / current.TotalTime);
            }
            runningStrategy?.BeginWindup(gameObject, current);
            yield return new WaitForSeconds(current.WindupTime);
            DestroyList(stageVfx);

            MutatorQueue.Enqueue(new StateMutator(
                gameObject, UnitStates.AbilityActive));
        }

        IEnumerator Active()
        {
            stageVfx = StageVariantUtil.PlayStageVariant(
                           current as IStageVariantProvider,
                           AbilityStage.Active,
                           Anim, aoc, placeholderClip, transform,
                           out _);
            runningStrategy?.BeginActive(gameObject, current);

            while (runningStrategy.Tick(Time.fixedDeltaTime))
                yield return new WaitForFixedUpdate();

            runningStrategy.End(); runningStrategy = null;
            DestroyList(stageVfx);

            MutatorQueue.Enqueue(new StateMutator(
                gameObject, UnitStates.AbilityRecover));
        }

        IEnumerator Recover()
        {
            stageVfx = StageVariantUtil.PlayStageVariant(
                           current as IStageVariantProvider,
                           AbilityStage.Recover,
                           Anim, aoc, placeholderClip, transform,
                           out _);

            yield return new WaitForSeconds(current.RecoverTime);
            DestroyList(stageVfx);

            Anim.SetFloat(AnimSpeed, savedSpeed);
            Anim.runtimeAnimatorController = baseCtrl;
            current = null;
            MutatorQueue.Enqueue(new StateMutator(
                gameObject, UnitStates.Idle));
        }

        static void DestroyList(List<GameObject> list)
        {
            if (list == null) return;
            foreach (var go in list) if (go) Object.Destroy(go);
        }
    }
}
