//-------------------------------------------------------------
// ActorIdentity.cs
//-------------------------------------------------------------
using UnityEngine;
using UnityEngine.Serialization;
using static UnityEditor.Searcher.SearcherWindow;

public enum ActorAlignment
{
    Player,
    Friendly,
    Neutral,
    Ally,
    Enemy
}

public enum ActorFaction
{
    PlayerFaction,
    EnemyGeneralFaction,
}

/// <summary>Single component that exposes both alignment and a
///          basic targeting surface.
///          • Attach to any NPC or dummy object.
///          • Drag an “AimPoint” child (e.g., chest) in the Inspector.
/// </summary>
public class ActorIdentity : MonoBehaviour, ITargetable
{
  [FormerlySerializedAs("role")]
  [Header("Alignment")]
  [SerializeField] ActorAlignment alignment = ActorAlignment.Neutral;

  [Header("Faction")]
  [SerializeField] private ActorFaction faction = ActorFaction.EnemyGeneralFaction;

    [Header("Targeting")]
  [Tooltip("Optional. Defaults to this.transform if left empty.")]
  [SerializeField] Transform aimPoint;

    /*──────── Alignment API ────────*/
    public ActorAlignment Alignment => alignment;
    public ActorFaction Faction => faction;

    public bool Is(ActorAlignment desired) => alignment == desired;
    public bool Is(ActorFaction desired) => faction == desired;

    /*──────── ITargetable ──────────*/
    public bool IsDestroyed => !gameObject.activeInHierarchy;
  public Transform AimPoint => aimPoint != null ? aimPoint : transform;
}
