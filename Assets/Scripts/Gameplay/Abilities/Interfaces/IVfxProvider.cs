// Assets/Scripts/Gameplay/Abilities/IVfxProvider.cs
using UnityEngine;

namespace Game.Abilities
{
  /// Implement on an ability SO if it must spawn a unique VFX when fired.
  public interface IVfxProvider
  {
    GameObject VfxPrefab { get; }
  }
}
