using UnityEngine;

namespace Game.AI.Interaction
{
    public abstract class InteractionEnterStrategySO : ScriptableObject
    {
        public abstract void OnTriggerEnter(GameObject actor, InteractionPoint point);
    }
}