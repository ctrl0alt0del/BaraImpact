using UnityEngine;

namespace Game.Abilities
{
    public interface IAbilityExecutionStrategy
    {
        void Begin(GameObject owner, IGameplayAbilityData data);

        bool Tick(float dt);
        void End();
    }
}