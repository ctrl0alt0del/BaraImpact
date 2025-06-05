using UnityEngine;
using System.Collections.Generic;
using System.Linq;

namespace Game.AI.Interaction
{
    [DisallowMultipleComponent]
    public class InteractionArea : MonoBehaviour
    {
        private readonly List<InteractionPoint> _points = new();
        private readonly List<GameObject> _npcs = new();

        private readonly Dictionary<GameObject, InteractionPoint> _lastUsedPoint = new();

        public void RegisterPoint(InteractionPoint point)
        {
            if (!_points.Contains(point))
                _points.Add(point);
        }

        public void RegisterNpc(GameObject npc)
        {
            if (!_npcs.Contains(npc))
                _npcs.Add(npc);
        }

        public void UnregisterPoint(InteractionPoint point)
        {
            _points.Remove(point);
            // Clean up references
            foreach (var kv in _lastUsedPoint.Where(kv => kv.Value == point).ToList())
                _lastUsedPoint.Remove(kv.Key);
        }

        public void UnregisterNpc(GameObject npc)
        {
            _npcs.Remove(npc);
            _lastUsedPoint.Remove(npc);
        }

        public IEnumerable<InteractionPoint> GetPoints() => _points;

        public InteractionPoint GetRandomAvailablePoint(InteractionType type, GameObject requester)
        {
            var available = _points
                .Where(p => p.Type == type && !p.IsInUse)
                .ToList();

            if (available.Count == 0) return null;

            if (_lastUsedPoint.TryGetValue(requester, out var lastPoint))
            {
                // Remove last used point from options (if it's still in the list)
                available.Remove(lastPoint);
            }

            var selected = available.Count > 0
                ? available[Random.Range(0, available.Count)]
                : lastPoint; // fallback to last if no other options

            _lastUsedPoint[requester] = selected;
            return selected;
        }

        private void OnDrawGizmos()
        {
            Gizmos.color = Color.green;
            Gizmos.DrawWireCube(transform.position, new Vector3(10, 1, 10));
        }
    }
}
