using UnityEngine;

public interface ITargetable
{
  bool IsDestroyed { get; }  // true if the target is dead or destroyed
  Transform AimPoint { get; }        // where projectiles should try to hit
}
