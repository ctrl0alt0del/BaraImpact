using Game.Abilities;
using H2V.GameplayAbilitySystem.AbilitySystem.Components;
using UnityEngine;

namespace Game.Abilities
{
    public sealed class ChannelledStrategy : BaseExecutionStrategy
    {
        readonly IChannelledAbilityData _ch;
        AbilitySystemBehaviour _asc;

        public ChannelledStrategy(IChannelledAbilityData ch) => _ch = ch;

        /* ───── Wind-up phase ───────────────────────────── */
        public override void BeginWindup(GameObject owner, IGameplayAbilityData data)
        {
            base.BeginWindup(owner, data);

            _asc = owner.GetComponent<AbilitySystemBehaviour>();
            _ch.OnWindupStart(owner, _asc);
        }

        /* ───── Active phase ────────────────────────────── */
        public override void BeginActive(GameObject owner, IGameplayAbilityData data)
        {
            base.BeginActive(owner, data);
            _ch.OnActiveStart(owner, _asc);
        }

        public override bool Tick(float dt)
        {
            _ch.OnActiveTick(_owner, dt);
            return _ch.IsStillChannelled(_owner);
        }

        public override void End()
        {
            _ch.OnActiveEnd?.Invoke(_owner);
        }
    }
}
