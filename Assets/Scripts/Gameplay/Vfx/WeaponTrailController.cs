using UnityEngine;
using SEA.Events;
using Game.States;
using Game.Abilities;
using SEA.State;

namespace Game.Vfx
{
    /// <summary>Turns a TrailRenderer on only during AbilityActive.</summary>
    [RequireComponent(typeof(TrailRenderer))]
    public class WeaponTrailController : MonoBehaviour
    {
        TrailRenderer trail;

        void Awake()
        {
            trail = GetComponent<TrailRenderer>();
            trail.emitting = false;
            GlobalEventBus.Subscribe<EnterEvent>(OnEnter);
        }

        void OnDestroy() =>
            GlobalEventBus.Unsubscribe<EnterEvent>(OnEnter);

        void OnEnter(EnterEvent e)
        {
            // we only care about events coming from *our* actor
            if (e.Target.transform.root != transform.root) return;

            if (e.State == UnitStates.AbilityActive &&
                IsBasicAttack(e.Target))
            {
                trail.Clear();
                trail.emitting = true;
            }
            else if (e.State == UnitStates.AbilityRecover ||
                     e.State == UnitStates.Idle)
            {
                trail.emitting = false;
                // leave existing vertices so the ribbon fades naturally
            }
        }

        bool IsBasicAttack(GameObject actor)
        {
            var runner = actor.GetComponent<AbilityPhaseRunner>();
            return runner && runner.Current?.Slot == AbilitySlot.BasicAttack;
        }
    }
}