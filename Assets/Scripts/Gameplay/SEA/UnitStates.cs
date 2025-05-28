namespace Game.States
{
  /// Centralised, typo-proof state names for every unit.
  public static class UnitStates
  {
    public const string Idle = "Idle";
    public const string CostPayment = "CostPayment";
    public const string AbilityWindup = "AbilityWindup";
    public const string AbilityActive = "AbilityActive";
    public const string AbilityRecover = "AbilityRecover";
    public const string HitReceived = "combat:HitReceived";
    public const string CombatNone = "combat:None";
  }
}
