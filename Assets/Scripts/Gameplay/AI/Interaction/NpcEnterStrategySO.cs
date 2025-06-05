using UnityEngine;
using Game.States;
using SEA.State;

namespace Game.AI.Interaction
{
    [CreateAssetMenu(menuName = "AI/Interaction/Enter Strategy/NPC")]
    public class NpcEnterStrategySO : InteractionEnterStrategySO
    {
        [SerializeField] private string[] allowedStates = new[] { MetaStates.Idle };

        public override void OnTriggerEnter(GameObject actor, InteractionPoint point)
        {
            var sm = actor.GetComponent<StateMachine>();
            if (sm == null) return;

            if (System.Array.Exists(allowedStates, state => sm.IsInState(state)))
            {
                point.OnInteractionStart(actor);
            }
        }
    }
}