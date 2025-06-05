using System.Collections.Generic;
using Game.AI.Interaction;
using UnityEngine;

namespace Game.AI.Core
{
    public class AIContext
    {
        public GameObject Owner;
        public GameObject Target;
        public Vector3 LastKnownTargetPosition;

        public float CurrentHP;
        public float MaxHP;

        public float AggroLevel;
        public float TimeSinceLastSeen;

        public InteractionArea CurrentArea;

        public Blackboard Blackboard { get; private set; } = new Blackboard();
        public bool IsCurrentlyInteracting;
        public InteractionPoint CurrentInteractionPoint => Blackboard.Get<InteractionPoint>("interactionPoint");

        public void clearInteractionPoint()
        {
            Blackboard.Clear("interactionPoint");
        }

        // Extend this over time
    }

    public class Blackboard
    {
        private readonly Dictionary<string, object> _data = new();

        public void Set<T>(string key, T value) => _data[key] = value;
        public T Get<T>(string key) => _data.TryGetValue(key, out var val) ? (T)val : default;
        public void Clear(string key) => _data.Remove(key);
        public bool Has(string key) => _data.ContainsKey(key);
    }
}