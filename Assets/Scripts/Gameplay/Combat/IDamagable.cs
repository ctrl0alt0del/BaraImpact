namespace Game.Combat
{
  /// <summary>
  /// Simple contract for anything that can lose HP or otherwise react to damage.
  /// </summary>
  public interface IDamageable
  {
    /// <param name="amount">Raw (pre-mitigation) damage to apply.</param>
    void TakeDamage(int amount);
  }
}