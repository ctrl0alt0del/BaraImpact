using Game.AI.Core;
using UnityEngine;

namespace Game.AI.Senses
{
    public abstract class ScriptableSensor : ScriptableObject
    {
        public abstract void Tick(GameObject owner); // for expensive queries
        public abstract void Apply(GameObject owner, ref AIContext context);
    }
}