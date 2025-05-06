namespace Game.Abilities
{
  /// Implement only on abilities that must originate from a specific bone.
  public interface IHasSpawnOrigin
  {
    /// Humanoid bone or custom child-Transform name.
    /// Return null or empty to fall back to default fire-point logic.
    string SpawnBone { get; }

    /// Optional local offset inside that bone (e.g., +0.15 on Z so it
    /// doesn’t clip the hand mesh).  Usually Vector3.zero.
    UnityEngine.Vector3 SpawnOffset { get; }
  }
}
