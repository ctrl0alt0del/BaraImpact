//-------------------------------------------------------------
// Assets/Scripts/Gameplay/Vfx/AbilityCastVfxListener.cs
//-------------------------------------------------------------
using UnityEngine;
using SEA.Events;
using Game.States;
using Game.Abilities;
using Game.Vfx;
using SEA.State;

namespace Game.Vfx
{
    [RequireComponent(typeof(AbilityPhaseRunner))]
    public class AbilityCastVfxListener : MonoBehaviour
    {
        void Awake() => GlobalEventBus.Subscribe<EnterEvent>(OnEnter);
        void OnDestroy() => GlobalEventBus.Unsubscribe<EnterEvent>(OnEnter);

        void OnEnter(EnterEvent e)
        {
            if (e.Target != gameObject) return;
            if (e.State != UnitStates.AbilityWindup) return;

            var runner = GetComponent<AbilityPhaseRunner>();
            if (runner?.Current is not IVfxProvider baseVfx) return;

            VfxSpawnSpec spec = baseVfx.CastSpec;

            if (runner.Current is IVfxVariantProvider vp &&
                vp.CastVariants &&
                vp.CastVariants.TryGetSpec(runner.Current.AnimationClip, out var overrideSpec))
            {
                spec = overrideSpec;
            }

            spec?.Spawn(transform);
        }
    }
}