using Game.Combat;
using UnityEngine;

namespace Game.Abilities
{
    public abstract class DeliveryExecutionStrategy : BaseExecutionStrategy
    {
        public override void Begin(GameObject owner, IGameplayAbilityData data)
        {
            base.Begin(owner, data);

            if (data is IAbilityDeliveryData delivery)
            {
                var spawner = owner.GetComponent<DeliverySpawner>();
                if (spawner) spawner.Spawn(delivery, owner.transform);
            }
        }
    }
}