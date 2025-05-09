using Game.Abilities;   // AbilitySlot, IGameplayAbilityData
using UnityEngine;
public sealed class AbilityQueue
{
  IGameplayAbilityData _pending;
  IGameplayAbilityData _active;

  public bool HasPending => _pending != null;
  public IGameplayAbilityData Active => _active;

  public bool TryEnqueue(IGameplayAbilityData ability)
  {
    Debug.Log($"AbilityQueue: TryEnqueue {ability.Slot}");
    bool canInterrupt = _active == null ||
                        ability.Priority > _active.Priority;

    if (!canInterrupt) return false;
    if (canInterrupt) _active = null;

    _pending = ability;
    return true;
  }

  public IGameplayAbilityData Dequeue()
  {
    var a = _pending;
    _pending = null;
    _active = a;
    return a;
  }

  public void Clear() => (_pending, _active) = (null, null);
}
