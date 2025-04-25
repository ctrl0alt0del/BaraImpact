using UnityEngine;

namespace SEA.Mutators
{
  /// Describes a single requested state change for one GameObject.
  public readonly struct StateMutator
  {
    public readonly GameObject Target;
    public readonly string FromState;   // null = ignore
    public readonly string ToState;
    public readonly int Priority;    // 0 = normal
    public readonly object Payload;     // optional extra data

    public StateMutator(GameObject target, string toState,
                        string fromState = null, int priority = 0,
                        object payload = null)
    {
      Target = target;
      FromState = fromState;
      ToState = toState;
      Priority = priority;
      Payload = payload;
    }
  }
}
