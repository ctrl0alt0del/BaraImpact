using H2V.GameplayAbilitySystem.AbilitySystem.Components;
using System;
using UnityEngine;

namespace Game.Abilities
{
    public interface IChannelledAbilityData : IGameplayAbilityData
    {
        void OnWindupStart(GameObject owner,
                          AbilitySystemBehaviour asc);
        void OnActiveStart(GameObject owner, AbilitySystemBehaviour asc);
        void OnActiveTick(GameObject owner, float dt);
        bool IsStillChannelled(GameObject owner);
        Action<GameObject> OnActiveEnd { get; }
    }
}