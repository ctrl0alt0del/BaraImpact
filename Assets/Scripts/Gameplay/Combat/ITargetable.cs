using UnityEngine;
public enum FactionId { Player, Ally, Neutral, Enemy }

public interface ITargetable
{
  FactionId Faction { get; }
  bool IsAlive { get; }
  Transform AimPoint { get; }        // where projectiles should try to hit
}
