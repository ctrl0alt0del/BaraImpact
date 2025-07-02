using UnityEngine;
using System;
using System.Collections.Generic;

namespace Game.Infrastructure
{
    /// Attach to any prefab / scene object that needs global lookup.
    [DisallowMultipleComponent]
    public class IDTag : MonoBehaviour
    {
        // ---------- Inspector fields ----------
        [Header("ID Tag")]
        [Tooltip("Set manually for predictable references ('player', 'portal_A', …)")]
        public string NamedId;

        [Tooltip("Broad category. Extend the enum or swap to string if you prefer.")]
        public String ClassId;

        // Stored as string for easy serialization & JS interop
        [SerializeField, HideInInspector] private string guidId;

        // ---------- Public getters ----------
        public string GuidId => guidId;
        public string Named => NamedId;
        public String Class => ClassId;

        // ---------- Static global registry ----------
        private static readonly Dictionary<string, IDTag> _byGuid = new();
        private static readonly Dictionary<string, IDTag> _byNamed = new();
        private static readonly Dictionary<String, List<IDTag>> _byClass = new();

        // ---------- Unity lifecycle ----------
        private void Awake()
        {
            // ① Ensure we have a GUID (runs in editor & builds)
            if (string.IsNullOrWhiteSpace(guidId))
                guidId = Guid.NewGuid().ToString("N");

            Register();
        }

        private void OnDestroy() => Unregister();

        // ---------- Registry helpers ----------
        private void Register()
        {
            _byGuid[guidId] = this;

            if (!string.IsNullOrEmpty(NamedId))
                _byNamed[NamedId] = this;

            if (!_byClass.TryGetValue(ClassId, out var list))
                _byClass[ClassId] = list = new List<IDTag>();
            list.Add(this);
        }

        private void Unregister()
        {
            _byGuid.Remove(guidId);
            if (!string.IsNullOrEmpty(NamedId) && _byNamed.TryGetValue(NamedId, out var existing) && existing == this)
                _byNamed.Remove(NamedId);
            if (_byClass.TryGetValue(ClassId, out var list))
                list.Remove(this);
        }

        // ---------- Static API (C#, OneJS, Networking) ----------
        public static IDTag GetByGuid(string guid) => _byGuid.TryGetValue(guid, out var tag) ? tag : null;
        public static IDTag GetByName(string named) => _byNamed.TryGetValue(named, out var tag) ? tag : null;
        public static IReadOnlyList<IDTag> GetByClass(String kind)
            => _byClass.TryGetValue(kind, out var list) ? list : Array.Empty<IDTag>();
    }

}
