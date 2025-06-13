using UnityEngine;

namespace Game.Abilities
{
    public interface IAbilityExecutionStrategy
    {
        void BeginWindup(GameObject owner,
                         IGameplayAbilityData data);
        void BeginActive(GameObject owner, IGameplayAbilityData data);

        bool Tick(float dt);
        void End();
    }
}