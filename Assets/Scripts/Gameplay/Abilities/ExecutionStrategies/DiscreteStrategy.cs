using UnityEngine;

namespace Game.Abilities
{
    public sealed class DiscreteStrategy : BaseExecutionStrategy
    {
        float _t;
        public override void Begin(GameObject o, IGameplayAbilityData d)
        {
            base.Begin(o, d);
            _t = d.ActiveTime;
        }
        public override bool Tick(float dt) { _t -= dt; return _t > 0f; }
    }


}