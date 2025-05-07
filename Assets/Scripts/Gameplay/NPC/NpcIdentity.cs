using UnityEngine;

public enum NpcRole
{
  Friendly,
  Neutral,
  Ally,
  Enemy
}

/// <summary>Attach to any NPC or dummy target so game systems
///          can query its alignment without knowing other logic.</summary>
public class NpcIdentity : MonoBehaviour
{
  [SerializeField] NpcRole role = NpcRole.Neutral;

  public NpcRole Role => role;

  public bool Is(NpcRole desired) => role == desired;
}
