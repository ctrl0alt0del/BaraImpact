using UnityEngine;

namespace Game.Vfx
{
    /// <summary>Maps individual Animation Clips to specific cast VFX specs
    /// and supports round-robin cycling via GetNext().</summary>
    [CreateAssetMenu(menuName = "Bara Impact/VFX/VFX Cast Variant Table", fileName = "CastVfxTable")]
    public class CastVfxVariantTable : ScriptableObject
    {
        [System.Serializable]
        public struct Entry
        {
            public AnimationClip Clip;
            public VfxSpawnSpec Spec;

            [Tooltip("Animator layer to play this clip on (leave blank ⇒ \"UpperBody\").")]
            public string LayerName;      // NEW  (e.g. \"Base\" / \"UpperBody\")

            [Tooltip("Animator state you mapped the placeholder to "
                   + "(leave blank ⇒ \"Cast_Generic\").")]
            public string StateName;      // NEW  (default placeholder)
        }

        [SerializeField] Entry[] variants;

        int cursor = -1; // for GetNext()

        /// <summary>Exact lookup by clip asset.</summary>
        public bool TryGetSpec(AnimationClip clip, out VfxSpawnSpec spec)
        {
            foreach (var e in variants)
            {
                if (e.Clip != clip) continue;
                spec = e.Spec; return true;
            }
            spec = null; return false;
        }

        /// <summary>Round-robin: returns next (Clip,Spec) pair each call.</summary>
        public bool GetNext(out Entry entry)
        {
            if (variants == null || variants.Length == 0)
            { entry = default; return false; }

            cursor = (cursor + 1) % variants.Length;
            entry = variants[cursor];
            return true;
        }
    }
}