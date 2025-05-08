//-------------------------------------------------------------
// Assets/Scripts/Gameplay/Vfx/ImpactVfxListener.cs
//-------------------------------------------------------------
using UnityEngine;
using SEA.Events;
using Game.Combat;
using SEA.State;

namespace Game.Vfx
{
    public class ImpactVfxListener : MonoBehaviour
    {
        [HideInInspector] public Game.Vfx.VfxSpawnSpec impactSpec;

        void Awake() => GlobalEventBus.Subscribe<EnterEvent>(OnEnter);
        void OnDestroy() => GlobalEventBus.Unsubscribe<EnterEvent>(OnEnter);

        void OnEnter(EnterEvent e)
        {
            if (e.Target != gameObject) return;
            if (e.State != AttackInstanceStates.Collided) return;

            impactSpec?.Spawn(transform);
        }
    }
}