using UnityEngine;

namespace SEA.Mutators
{
  public class MutatorProcessor : MonoBehaviour
  {
    private static bool _created;
    private void Awake()
    {
      if (_created) { Destroy(gameObject); return; }
      _created = true;
      DontDestroyOnLoad(gameObject);
    }
    private void Update() => MutatorQueue.Tick();
  }
}
