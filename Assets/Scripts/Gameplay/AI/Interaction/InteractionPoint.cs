using System;
using System.Collections;
using UnityEngine;
using Game.States;
using SEA.Mutators;
using SEA.State;
using Game.AI.Core;
using UnityEngine.AI;

namespace Game.AI.Interaction
{
    [DisallowMultipleComponent]
    [RequireComponent(typeof(Collider))]
    public class InteractionPoint : MonoBehaviour
    {
        [Header("Point Definition")]
        [SerializeField] private InteractionType type;
        [SerializeField] private Transform spot;
        [SerializeField] private float duration = 3f;
        [SerializeField] private InteractionLogicSO logic;

        [Header("Trigger Behavior")]
        [SerializeField] private InteractionEnterStrategySet enterStrategies = new();

        public bool IsInUse { get; private set; }

        public InteractionType Type => type;
        public Transform Spot => spot != null ? spot : transform;
        public float Duration => duration;

        public void OnValidate()
        {
            enterStrategies.EnsureAllAlignments();
        }

        public void OnInteractionStart(GameObject actor)
        {
            IsInUse = true;
            var sm = actor.GetComponent<StateMachine>();
            if (sm != null)
                MutatorQueue.Enqueue(new StateMutator(actor, MetaStates.Interacting));
            var context = actor.GetComponent<AIController>()?.Context;
            if (context != null)
                context.IsCurrentlyInteracting = true;
            var agent = actor.GetComponent<NavMeshAgent>();
            if (agent != null && agent.enabled)
            {
                agent.ResetPath();
            }
            logic?.OnStart(actor, this);
            StartCoroutine(InteractionTimer(actor));
        }

        public void OnInteractionEnd(GameObject actor)
        {
            IsInUse = false;
            var sm = actor?.GetComponent<StateMachine>();
            if (sm != null)
                MutatorQueue.Enqueue(new StateMutator(actor, MetaStates.Idle));
            var context = actor.GetComponent<AIController>()?.Context;
            if (context != null)
            {
                context.IsCurrentlyInteracting = false;
                context.clearInteractionPoint();
            }

            logic?.OnEnd(actor, this);
        }

        private void Start()
        {
            var area = GetComponentInParent<InteractionArea>();
            area?.RegisterPoint(this);
        }

        void OnTriggerEnter(Collider other)
        {
            if (IsInUse || enterStrategies == null) return;

            var identity = other.GetComponent<ActorIdentity>();
            if (identity == null) return;

            var strategy = enterStrategies.GetStrategy(identity.Alignment);
            strategy?.OnTriggerEnter(other.gameObject, this);
        }

        private void OnDrawGizmos()
        {
            Gizmos.color = Color.cyan;
            Gizmos.DrawWireSphere(transform.position, 0.5f);
        }

        private IEnumerator InteractionTimer(GameObject actor)
        {
            yield return new WaitForSeconds(duration);
            OnInteractionEnd(actor);
        }
    }
}