using System.Collections.Generic;
using UnityEngine;

namespace Game.Vfx
{
    [System.Serializable]
    public struct BoneAttachment
    {
        [Tooltip("Humanoid bone or child name (relative to animated root)")]
        public string Bone;

        public Vector3 PositionOffset;
        public Vector3 RotationOffset;
        public bool ParentToBone;   // true = follow bone; false = world-space
    }

    [CreateAssetMenu(menuName = "Bara Impact/VFX/VFX Spawn Spec", fileName = "NewVfxSpec")]
    public class VfxSpawnSpec : ScriptableObject
    {
        [Header("Visual")]
        public GameObject Prefab;

        [Tooltip("List of places to attach the prefab")]
        public BoneAttachment[] Attachments = { new BoneAttachment{
            Bone = "Hips", ParentToBone = true }};

        [Header("Sound")]
        public AudioClip OneShotSfx;
        [Min(0f)] public float Volume = 1f;

        public List<GameObject> Spawn(Transform root)
        {
            var spawned = new List<GameObject>();
            if (Prefab == null || Attachments == null || Attachments.Length == 0)
                return spawned;

            for (int i = 0; i < Attachments.Length; ++i)
            {
                var att = Attachments[i];
                Transform t = root;

                if (!string.IsNullOrEmpty(att.Bone))
                    t = root.Find(att.Bone) ??
                        root.GetComponent<Animator>()
                            ?.GetBoneTransformByName(att.Bone) ?? root;

                var go = Instantiate(
                            Prefab,
                            t.TransformPoint(att.PositionOffset),
                            t.rotation * Quaternion.Euler(att.RotationOffset),
                            att.ParentToBone ? t : null);

                if (i == 0 && OneShotSfx)
                    AudioSource.PlayClipAtPoint(OneShotSfx, go.transform.position, Volume);

                spawned.Add(go);
            }
            return spawned;
        }
    }
}