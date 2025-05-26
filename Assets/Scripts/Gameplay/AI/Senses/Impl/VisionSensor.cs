using UnityEngine;
using Game.AI.Senses;
using Game.AI.Core;
using System.Collections.Generic;

[CreateAssetMenu(menuName = "AI/Sensors/Vision Sensor")]
public class VisionScriptableSensor : ScriptableSensor
{
    [Header("Vision Settings")]
    public float visionRange = 15f;
    public float fovAngle = 90f;
    public bool checkObstruction = true;

    [Header("Filter")]
    public List<ActorAlignment> reactToAlignments = new();
    public List<ActorFaction> reactToFactions = new();

    private GameObject _visibleTarget;

    public override void Tick(GameObject owner)
    {
        _visibleTarget = null;

        var colliders = Physics.OverlapSphere(owner.transform.position, visionRange);

        foreach (var col in colliders)
        {
            var identity = col.GetComponent<ActorIdentity>();
            if (identity == null) continue;

            // Alignment filtering
            if (reactToAlignments.Count > 0 && !reactToAlignments.Contains(identity.Alignment))
                continue;

            // Faction filtering
            if (reactToFactions.Count > 0 && !reactToFactions.Contains(identity.Faction))
                continue;

            // FOV check
            Vector3 toTarget = identity.AimPoint.position - owner.transform.position;
            float angle = Vector3.Angle(owner.transform.forward, toTarget.normalized);
            if (angle > fovAngle * 0.5f) continue;

            // Raycast check (optional)
            float dist = toTarget.magnitude;
            if (checkObstruction)
            {
                if (Physics.Raycast(owner.transform.position, toTarget.normalized, out RaycastHit hit, dist))
                {
                    if (hit.transform != identity.transform && hit.transform != identity.AimPoint)
                    {
                        continue; // something else blocked vision
                    }
                }
            }
            Debug.DrawLine(owner.transform.position, identity.AimPoint.position, Color.green);
            _visibleTarget = identity.gameObject;
            break;
        }
    }

    public override void Apply(GameObject owner, ref AIContext context)
    {
        if (_visibleTarget != null)
        {
            context.Target = _visibleTarget;
            context.LastKnownTargetPosition = _visibleTarget.transform.position;
        }
        else
        {
            context.Target = null;
        }
    }
}
