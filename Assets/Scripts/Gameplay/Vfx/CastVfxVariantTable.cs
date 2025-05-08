using UnityEngine;

namespace Game.Vfx
{
    /// <summary>Maps individual Animation Clips to specific cast VFX specs
    /// and supports round-robin cycling via GetNext().</summary>
    [CreateAssetMenu(menuName = "Bara/VFX Cast Variant Table", fileName = "CastVfxTable")]
    public class CastVfxVariantTable : ScriptableObject
    {
        [System.Serializable]
        public struct Entry
        {
            public AnimationClip Clip;
            public VfxSpawnSpec Spec;
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
        public bool GetNext(out AnimationClip clip, out VfxSpawnSpec spec)
        {
            if (variants == null || variants.Length == 0)
            {
                clip = null; spec = null; return false;
            }

            cursor = (cursor + 1) % variants.Length;
            clip = variants[cursor].Clip;
            spec = variants[cursor].Spec;
            return true;
        }
    }
}