using UnityEngine;

public interface IAutoLockDelivery
{
  float LockRadius { get; }   // metres
  float LockHalfAngle { get; }   // degrees (half-angle of cone)
  float TurnRate { get; }   // degrees per second projectile can steer
  NpcRole[] TargetRoles { get; }  // ordered list – highest priority first
}
