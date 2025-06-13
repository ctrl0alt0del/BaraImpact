using UnityEngine;

namespace Game.Abilities
{
    public sealed class DiscreteDeliveryStrategy : DeliveryExecutionStrategy
    {
        float _t;
        public override void BeginActive(GameObject o, IGameplayAbilityData d)
        {
            base.BeginActive(o, d);
            _t = d.ActiveTime;
        }
        public override bool Tick(float dt) { _t -= dt; return _t > 0f; }
    }

}