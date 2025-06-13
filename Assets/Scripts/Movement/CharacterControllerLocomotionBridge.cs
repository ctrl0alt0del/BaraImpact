using UnityEngine;

namespace Game.Movement
{
    [RequireComponent(typeof(CharacterController))]
    public sealed class CharacterControllerMotionBridge : MonoBehaviour, IMotionBridge
    {
        CharacterController cc;

        void Awake() => cc = GetComponent<CharacterController>();

        public void BurstMove(Vector3 worldDir, float distance, float duration)
        {
            worldDir.Normalize();
            float speed = distance / Mathf.Max(duration, 0.01f);   // m/s
            StartCoroutine(DashRoutine());

            System.Collections.IEnumerator DashRoutine()
            {
                float t = 0f;
                while (t < duration)
                {
                    float step = speed * Time.deltaTime;
                    cc.Move(worldDir * step);
                    t += Time.deltaTime;
                    yield return null;
                }
            }
        }
    }
}
