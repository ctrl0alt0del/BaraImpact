using UnityEngine;

namespace Game.Vfx
{
    [CreateAssetMenu(menuName = "Bara/VFX Spawn Spec", fileName = "NewVfxSpec")]
    public class VfxSpawnSpec : ScriptableObject
    {
        [Header("Visual")]
        public GameObject Prefab;

        [Tooltip("Name of bone or child transform on the target.")]
        public string Bone = "";               // empty → use target root

        public bool ParentToBone = true;

        [Header("Offset (local space of bone)")]
        public Vector3 PositionOffset = Vector3.zero;
        public Vector3 RotationOffset = Vector3.zero;

        [Header("Sound")]
        public AudioClip OneShotSfx;
        [Min(0f)] public float Volume = 1f;

        /// <summary>Spawns the prefab & optional audio relative to the given root.</summary>
        public void Spawn(Transform root)
        {
            if (!Prefab) return;

            Transform bone = root;
            if (!string.IsNullOrEmpty(Bone))
            {
                bone = root.Find(Bone) ??
                       root.GetComponent<Animator>()?.GetBoneTransformByName(Bone) ??
                       root;
            }

            Vector3 pos = bone.TransformPoint(PositionOffset);
            Quaternion rot = bone.rotation * Quaternion.Euler(RotationOffset);

            var go = Object.Instantiate(Prefab, pos, rot,
                ParentToBone ? bone : null);

            if (OneShotSfx)
                AudioSource.PlayClipAtPoint(OneShotSfx, pos, Volume);
        }
    }
}