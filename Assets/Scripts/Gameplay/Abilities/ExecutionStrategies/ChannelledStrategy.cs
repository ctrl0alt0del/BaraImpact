using System;
using H2V.GameplayAbilitySystem.AbilitySystem.Components;
using UnityEngine;

namespace Game.Abilities
{
    public sealed class ChannelledStrategy : BaseExecutionStrategy
    {
        readonly IChannelledAbilityData _ch; AbilitySystemBehaviour _asc;
        public ChannelledStrategy(IChannelledAbilityData ch) { _ch = ch; }

        public override void Begin(GameObject o, IGameplayAbilityData d)
        {
            base.Begin(o, d);
            _asc = o.GetComponent<AbilitySystemBehaviour>();
            _ch.OnActiveStart(o, _asc);
        }
        public override bool Tick(float dt)
        {
            _ch.OnActiveTick(_owner, dt);
            return _ch.IsStillChannelled(_owner);
        }
        public override void End() { _ch.OnActiveEnd?.Invoke(_owner); }
    }
}