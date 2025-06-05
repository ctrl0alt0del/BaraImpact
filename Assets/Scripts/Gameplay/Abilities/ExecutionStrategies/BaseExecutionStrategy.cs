using UnityEngine;

namespace Game.Abilities
{
    public abstract class BaseExecutionStrategy : IAbilityExecutionStrategy
    {
        protected AbilityPhaseRunner _runner;
        protected GameObject _owner;
        protected IGameplayAbilityData _data;

        public virtual void Begin(GameObject owner,
            IGameplayAbilityData data)
        {
            _owner = owner;
            _data = data;
        }

        public abstract bool Tick(float dt);
        public virtual void End() { }
    }
}