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
            if (runner?.Current is not IVfxVariantProvider vp) return;

            if (vp.CastVariants &&
                vp.CastVariants.TryGetSpec(runner.ActiveClip, out var spec))
            {
                spec?.Spawn(transform);
            }
        }
    }
}