// Assets/Scripts/Gameplay/Abilities/IAbilityDeliveryData.cs
using UnityEngine;
using Game.Combat;                   // AttackKind enum

namespace Game.Abilities
{
  /// Implement this on any ScriptableObject that must spawn an AttackInstance
  /// (or some other delivery GO) when its Active phase begins.
  public interface IAbilityDeliveryData
  {
    GameObject AttackPrefab { get; }    // prefab with StateMachine + logic
    AttackKind Kind { get; }    // Melee / Projectile / Hitscan
    float Range { get; }
    float Speed { get; }
    LayerMask HitMask { get; }    // who can be hit
    float CollisionRadius { get; }
  }
}
