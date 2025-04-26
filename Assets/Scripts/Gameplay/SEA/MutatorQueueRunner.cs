using UnityEngine;
using SEA.Mutators;   // ← your static queue namespace

/// One-liner runner that makes sure StateMutators actually fire.
public class MutatorQueueRunner : MonoBehaviour
{
  private static MutatorQueueRunner _instance;

  void Awake()
  {
    if (_instance != null && _instance != this)
    {
      Destroy(gameObject);               // enforce single instance
      return;
    }

    _instance = this;
    DontDestroyOnLoad(gameObject);         // survives scene swaps
  }

  /// Called after all normal Update() calls → deterministic order.
  void LateUpdate()
  {
    MutatorQueue.Tick();                   // or .Process() / .Flush()
  }
}
