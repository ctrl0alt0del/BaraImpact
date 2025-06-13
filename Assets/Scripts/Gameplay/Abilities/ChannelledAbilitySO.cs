// Assets/Scripts/Gameplay/Abilities/ChannelledAbilitySO.cs
using UnityEngine;
using System;
using Game.Abilities;
using H2V.GameplayAbilitySystem.AbilitySystem;
using H2V.GameplayAbilitySystem.AbilitySystem.Components;
using H2V.GameplayAbilitySystem.AbilitySystem.ScriptableObjects;

public abstract class ChannelledAbilitySO<TSpec> :
    ActiveAbilitySO<TSpec>,
    IChannelledAbilityData
    where TSpec : AbilitySpec, new()
{

    /*───────── IChannelledAbilityData ---------------------*/
    public abstract void OnWindupStart(GameObject owner,
                                  AbilitySystemBehaviour asc);
    public abstract void OnActiveStart(GameObject owner, AbilitySystemBehaviour asc);
    public abstract void OnActiveTick(GameObject owner, float dt);
    public abstract bool IsStillChannelled(GameObject owner);
    public virtual Action<GameObject> OnActiveEnd => null;
}