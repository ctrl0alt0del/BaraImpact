using UnityEngine;
using Game.AI.Core;
using Game.AI.Senses;

[CreateAssetMenu(menuName = "AI/Sensors/Target Memory Sensor")]
public class TargetMemorySensor : ScriptableSensor
{
    public float memoryDuration = 3f;

    private GameObject _cachedTarget;
    private float _timeSinceLost = Mathf.Infinity;

    public override void Tick(GameObject owner)
    {
        // Nothing to do per frame
    }

    public override void Apply(GameObject owner, ref AIContext context)
    {
        if (context.Target != null)
        {
            // Update memory
            _cachedTarget = context.Target;
            _timeSinceLost = 0f;
        }
        else if (_cachedTarget != null)
        {
            _timeSinceLost += Time.deltaTime;

            if (_timeSinceLost < memoryDuration)
            {
                context.LastKnownTargetPosition = _cachedTarget.transform.position;
            }
            else
            {
                _cachedTarget = null;
            }
        }
    }
}