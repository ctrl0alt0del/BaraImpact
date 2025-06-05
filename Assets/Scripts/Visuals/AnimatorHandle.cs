using UnityEngine;

namespace Game.Visuals
{
    /// <summary>
    /// Lives on the child that owns the Animator.
    /// Logic scripts obtain their Animator reference via the IAnimatorSource interface,
    /// so they no longer depend on the Animator’s position in the hierarchy.
    /// </summary>
    public interface IAnimatorSource
    {
        Animator Animator { get; }
        Transform GetBone(string boneName);
    }

    [DisallowMultipleComponent]
    public class AnimatorHandle : MonoBehaviour, IAnimatorSource
    {
        [SerializeField] private Animator animator;

        public Animator Animator => animator;

        public Transform GetBone(string boneName) =>
            animator ? animator.GetBoneTransformByName(boneName) : null;

#if UNITY_EDITOR
        void Reset() => animator = GetComponent<Animator>();
#endif
        [Header("Optional foot-/land-step audio (leave empty to mute warnings)")]
        [SerializeField] private AudioClip[] footstepClips;
        [SerializeField] private AudioClip landClip;
        [SerializeField][Range(0, 1)] private float volume = 0.5f;

        // Called by AnimationEvent in Walk / Run clips (Starter Assets default)
        public void OnFootstep(AnimationEvent e)
        {
            if (footstepClips == null || footstepClips.Length == 0) return;
            if (e.animatorClipInfo.weight < 0.5f) return;            // same test TPC uses

            int i = Random.Range(0, footstepClips.Length);
            AudioSource.PlayClipAtPoint(
                footstepClips[i],
                transform.position,
                volume);
        }

        // Called by AnimationEvent in Land clip
        public void OnLand(AnimationEvent e)
        {
            if (!landClip) return;
            if (e.animatorClipInfo.weight < 0.5f) return;

            AudioSource.PlayClipAtPoint(
                landClip,
                transform.position,
                volume);
        }
    }
}