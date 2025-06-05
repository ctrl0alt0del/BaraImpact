namespace Game.Abilities
{
    public static class AbilityStrategyFactory
    {
        public static IAbilityExecutionStrategy Create(IGameplayAbilityData a) =>
            a switch
            {
                IChannelledAbilityData ch => new ChannelledStrategy(ch),
                IAbilityDeliveryData _ => new DiscreteDeliveryStrategy(),
                _ => new DiscreteStrategy(),
            };
    }

}