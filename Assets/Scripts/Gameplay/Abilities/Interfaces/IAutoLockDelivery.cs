using UnityEngine;

public interface IAutoLockDelivery
{
  float LockRadius { get; }   // metres
  float LockHalfAngle { get; }   // degrees (half-angle of cone)
  float TurnRate { get; }   // degrees per second projectile can steer
  ActorAlignment[] TargetRoles { get; }  // ordered list – highest priority first
}
