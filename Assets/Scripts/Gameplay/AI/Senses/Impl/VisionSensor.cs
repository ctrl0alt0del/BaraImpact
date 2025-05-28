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

            if (reactToAlignments.Count > 0 && !reactToAlignments.Contains(identity.Alignment))
                continue;

            if (reactToFactions.Count > 0 && !reactToFactions.Contains(identity.Faction))
                continue;

            Vector3 toTarget = identity.AimPoint.position - owner.transform.position;
            float angle = Vector3.Angle(owner.transform.forward, toTarget.normalized);
            if (angle > fovAngle * 0.5f) continue;

            if (checkObstruction && !IsLineOfSightClear(owner, identity))
                continue;

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

    private bool IsLineOfSightClear(GameObject owner, ActorIdentity identity)
    {
        Vector3 from = owner.transform.position + Vector3.up * 1.5f;
        Vector3 to = identity.AimPoint.position;
        Vector3 direction = (to - from).normalized;
        float distance = Vector3.Distance(from, to);

        Ray ray = new Ray(from, direction);
        RaycastHit[] hits = Physics.RaycastAll(ray, distance);

        foreach (var hit in hits)
        {
            // Skip the owner (and any of its children)
            if (hit.transform.root == owner.transform)
                continue;

            // Skip target itself
            if (hit.transform == identity.transform || hit.transform == identity.AimPoint)
                continue;

            // Anything else blocks vision
            return false;
        }

        return true;
    }
}
