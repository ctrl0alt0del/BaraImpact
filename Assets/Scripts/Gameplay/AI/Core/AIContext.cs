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

        public Transform[] PatrolPoints;
        public int CurrentPatrolIndex;

        // Extend this over time
    }
}