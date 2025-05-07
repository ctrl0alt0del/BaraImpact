//-------------------------------------------------------------
// NpcIdentity.cs
//-------------------------------------------------------------
using UnityEngine;

public enum NpcRole
{
  Friendly,
  Neutral,
  Ally,
  Enemy
}

/// <summary>Single component that exposes both alignment and a
///          basic targeting surface.
///          • Attach to any NPC or dummy object.
///          • Drag an “AimPoint” child (e.g., chest) in the Inspector.
/// </summary>
public class NpcIdentity : MonoBehaviour, ITargetable
{
  [Header("Alignment")]
  [SerializeField] NpcRole role = NpcRole.Neutral;

  [Header("Targeting")]
  [Tooltip("Optional. Defaults to this.transform if left empty.")]
  [SerializeField] Transform aimPoint;

  /*──────── Alignment API ────────*/
  public NpcRole Role => role;
  public bool Is(NpcRole desired) => role == desired;

  /*──────── ITargetable ──────────*/
  public bool IsDestroyed => !gameObject.activeInHierarchy;
  public Transform AimPoint => aimPoint != null ? aimPoint : transform;
}
