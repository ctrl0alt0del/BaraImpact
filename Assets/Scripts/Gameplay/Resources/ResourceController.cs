using UnityEngine;
using Game.Resources;

public class ResourceController : MonoBehaviour
{
  [System.Serializable]
  public class Pool
  {
    public ResourceType type;
    public float max = 100f;
    public float current = 100f;
  }

  public Pool[] pools = { new Pool { type = ResourceType.Stamina, max = 100 } };

  /*────────────────── Public helpers ──────────────────*/
  public bool Has(ResourceType type, float amount) =>
      GetPool(type)?.current >= amount;

  public void Spend(ResourceType type, float amount)
  {
    var p = GetPool(type);
    if (p != null) p.current = Mathf.Max(0, p.current - amount);
  }

  private Pool GetPool(ResourceType t)
  {
    foreach (var p in pools)
      if (p.type == t) return p;
    return null;
  }
}
