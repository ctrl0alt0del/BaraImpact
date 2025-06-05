using System.Collections.Generic;
using UnityEngine;
using SEA.Events;

namespace SEA.State
{
    public readonly struct EnterEvent
    {
        public readonly GameObject Target;
        public readonly string State;
        public readonly object Payload;

        public EnterEvent(GameObject target, string state, object payload)
        {
            Target = target;
            State = state;
            Payload = payload;
        }
    }

    public readonly struct ExitEvent
    {
        public readonly GameObject Target;
        public readonly string State;
        public readonly object Payload;

        public ExitEvent(GameObject target, string state, object payload)
        {
            Target = target;
            State = state;
            Payload = payload;
        }
    }

    public class StateMachine : MonoBehaviour
    {
        [SerializeField] private string initialState = "idle";

        // Holds current state per namespace
        private readonly Dictionary<string, string> _stateMap = new();

        // Default namespace state accessor
        public string Current => this[""];

        // Indexer for getting/setting current state per namespace
        public string this[string ns]
        {
            get => _stateMap.GetValueOrDefault(ns);
            private set => _stateMap[ns] = value; // used only internally
        }

        void Awake()
        {
            var (ns, stateName) = Parse(initialState);
            Goto(Format(ns, stateName), null);
        }

        /// PUBLIC entry point for transitions
        public void Goto(string fullState, object payload = null)
        {
            var (ns, newState) = Parse(fullState);

            if (_stateMap.TryGetValue(ns, out var oldState))
            {
                GlobalEventBus.Publish(new ExitEvent(gameObject, Format(ns, oldState), payload));
            }

            _stateMap[ns] = newState;

            Debug.Log($"StateMachine({gameObject}) → [{Format(ns, newState)}]");

            GlobalEventBus.Publish(new EnterEvent(gameObject, Format(ns, newState), payload));
        }

        public bool IsInState(string fullState)
        {
            var (ns, stateName) = Parse(fullState);
            return _stateMap.TryGetValue(ns, out var currentState) && currentState == stateName;
        }

        private static string Format(string ns, string state)
        {
            return string.IsNullOrEmpty(ns) ? state : $"{ns}:{state}";
        }

        private static (string ns, string name) Parse(string fullState)
        {
            if (string.IsNullOrWhiteSpace(fullState))
                return ("", "");

            var parts = fullState.Split(':');
            return parts.Length == 2 ? (parts[0], parts[1]) : ("", parts[0]);
        }
    }
}
