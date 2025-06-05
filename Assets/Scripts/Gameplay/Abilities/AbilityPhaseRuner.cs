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

        AnimationClip activeClip;          // chosen animation variant
        VfxSpawnSpec activeVfxSpec;       // chosen VFX variant
        GameObject spawnedVfxGO;        // runtime instance (for manual despawn)

        /* AOC plumbing */
        RuntimeAnimatorController baseCtrl;
        AnimatorOverrideController aoc;
        [SerializeField] string placeholderName = "Cast_placeholder";
        AnimationClip placeholderClip;

        float savedSpeed = 1f;

        /* ───────── PROPS ───────── */
        public IGameplayAbilityData Current => current;
        public AnimationClip ActiveClip => activeClip;

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
            if (spawnedVfxGO) Destroy(spawnedVfxGO);
        }

        /* ───────── PUBLIC API ───────── */
        public void Arm(IGameplayAbilityData ability)
        {
            current = ability;
            activeClip = null;
            activeVfxSpec = null;

            // Ability supplies a variant table that pairs Clip + VFX
            if (ability is IVfxVariantProvider vp &&
                vp.CastVariants &&
                vp.CastVariants.GetNext(out var clip, out var vfxSpec))
            {
                activeClip = clip;
                activeVfxSpec = vfxSpec;
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

        /* ───────── PHASE COROUTINES ───────── */
        IEnumerator Windup()
        {
            if (activeClip && current.TotalTime > 0f)
            {
                aoc[placeholderClip] = activeClip;
                Anim.runtimeAnimatorController = aoc;

                savedSpeed = Anim.GetFloat(AnimSpeed);
                Anim.SetFloat(AnimSpeed, activeClip.length / current.TotalTime);
                Anim.CrossFade("Cast_Generic", 0.12f, 1);  // layer 0
            }

            yield return new WaitForSeconds(current.WindupTime);

            MutatorQueue.Enqueue(new StateMutator(gameObject, UnitStates.AbilityActive));
        }

        IEnumerator Active()
        {
            if (activeVfxSpec && activeVfxSpec.Prefab)
            {
                Transform root = transform;
                if (!string.IsNullOrEmpty(activeVfxSpec.Bone))
                {
                    var t = root.Find(activeVfxSpec.Bone) ??
                            root.GetComponent<Animator>()
                                ?.GetBoneTransformByName(activeVfxSpec.Bone);
                    if (t) root = t;
                }

                Vector3 pos = root.TransformPoint(activeVfxSpec.PositionOffset);
                Quaternion rot = root.rotation *
                                 Quaternion.Euler(activeVfxSpec.RotationOffset);

                spawnedVfxGO = Instantiate(
                    activeVfxSpec.Prefab,
                    pos, rot,
                    activeVfxSpec.ParentToBone ? root : null);

                if (activeVfxSpec.OneShotSfx)
                    AudioSource.PlayClipAtPoint(
                        activeVfxSpec.OneShotSfx,
                        pos, activeVfxSpec.Volume);
            }
            var exec = AbilityStrategyFactory.Create(current);
            exec.Begin(gameObject, current);

            while (exec.Tick(Time.fixedDeltaTime))
                yield return new WaitForFixedUpdate();

            /*  Despawn VFX if still alive and parented outside pooled system */
            if (spawnedVfxGO) Destroy(spawnedVfxGO);

            MutatorQueue.Enqueue(new StateMutator(gameObject, UnitStates.AbilityRecover));
        }

        IEnumerator Recover()
        {
            yield return new WaitForSeconds(current.RecoverTime);

            Anim.SetFloat(AnimSpeed, savedSpeed);
            Anim.runtimeAnimatorController = baseCtrl;

            current = null;
            activeClip = null;
            activeVfxSpec = null;
            spawnedVfxGO = null;

            MutatorQueue.Enqueue(new StateMutator(gameObject, UnitStates.Idle));
        }
    }
}
