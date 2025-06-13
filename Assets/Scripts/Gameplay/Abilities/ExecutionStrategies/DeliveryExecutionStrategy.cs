using Game.Combat;
using UnityEngine;

namespace Game.Abilities
{
    public abstract class DeliveryExecutionStrategy : BaseExecutionStrategy
    {
        public override void BeginActive(GameObject owner, IGameplayAbilityData data)
        {
            base.BeginActive(owner, data);

            if (data is IAbilityDeliveryData delivery)
            {
                var spawner = owner.GetComponent<DeliverySpawner>();
                if (spawner) spawner.Spawn(delivery, owner.transform);
            }
        }
    }
}