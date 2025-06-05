using UnityEngine;

namespace Game.AI.Interaction
{
    [CreateAssetMenu(fileName = "GuardLogic", menuName = "AI/Interaction/GuardLogic")]
    public class GuardLogic : InteractionLogicSO
    {
        public override void OnStart(GameObject actor, InteractionPoint point)
        {
            Debug.Log($"{actor.name} starts guarding at {point.name}");
            // Add animation, emote, etc.
        }

        public override void OnEnd(GameObject actor, InteractionPoint point)
        {
            Debug.Log($"{actor.name} stops guarding at {point.name}");
        }
    }
}
