using UnityEngine;

namespace Game.AI.Interaction
{
    public abstract class InteractionLogicSO : ScriptableObject
    {
        public abstract void OnStart(GameObject actor, InteractionPoint point);
        public abstract void OnEnd(GameObject actor, InteractionPoint point);
    }
}