using UnityEngine;

public static class TargetingUtil
{
  /// <summary>Returns the best target inside a cone, or null.</summary>
  public static Transform Acquire(NpcRole[] priority,
                                  Vector3 origin,
                                  Vector3 forward,
                                  float radius,
                                  float halfAngle,
                                  LayerMask mask)
  {
    Collider[] hits = Physics.OverlapSphere(origin,
                                            radius,
                                            mask,
                                            QueryTriggerInteraction.Collide);

    foreach (NpcRole desired in priority)
    {
      Transform best = null;
      float bestDot = -1f;               // prefer centre of screen

      foreach (Collider c in hits)
      {
        var id = c.GetComponent<NpcIdentity>();
        var aim = c.GetComponent<ITargetable>();
        if (id == null || aim == null || !aim.IsAlive) continue;
        if (id.Role != desired) continue;

        Vector3 to = (aim.AimPoint.position - origin).normalized;
        if (Vector3.Angle(forward, to) > halfAngle) continue;

        float dot = Vector3.Dot(forward, to);
        if (dot > bestDot) { bestDot = dot; best = aim.AimPoint; }
      }

      if (best) return best;              // found for this priority
    }
    return null;                            // nothing found
  }
}
