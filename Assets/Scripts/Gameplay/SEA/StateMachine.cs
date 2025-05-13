using UnityEngine;
using SEA.Events;

namespace SEA.State
{
    public readonly struct EnterEvent
    {
        public readonly GameObject Target;
        public readonly string State;
        public readonly object Payload;   // ← NEW

        public EnterEvent(GameObject target, string state, object payload)
        { Target = target; State = state; Payload = payload; }
    }

    public readonly struct ExitEvent
    {
        public readonly GameObject Target;
        public readonly string State;
        public readonly object Payload;   // ← NEW

        public ExitEvent(GameObject target, string state, object payload)
        { Target = target; State = state; Payload = payload; }
    }


    public class StateMachine : MonoBehaviour
    {
        [SerializeField] private string initialState = "Test";
        public string Current { get; private set; }

        void Awake()
        {
            Current = initialState;
            GlobalEventBus.Publish(new EnterEvent(gameObject, Current, null));
        }

        // add optional payload param (defaults to null for old calls)
        public void Goto(string next, object payload = null)
        {
            GlobalEventBus.Publish(new ExitEvent(gameObject, Current, payload));
            Current = next;
            Debug.Log($"StateMachine.Goto({next})");
            GlobalEventBus.Publish(new EnterEvent(gameObject, Current, payload));
        }
    }
}
