//-------------------------------------------------------------
// Assets/Scripts/Gameplay/Movement/NavmeshLocomotionBridge.cs
//-------------------------------------------------------------
using UnityEngine;
using UnityEngine.AI;
using Game.Visuals;

namespace Game.Movement
{
    [RequireComponent(typeof(NavMeshAgent))]
    public class NavmeshLocomotionBridge : MonoBehaviour
    {
        [SerializeField] float speedChangeRate = 10f;      // match ThirdPersonController
        [SerializeField] float dampTime = 0.1f;     // smoothing for MotionSpeed (0-1)

        static readonly int SpeedHash = Animator.StringToHash("Speed");
        static readonly int MotionSpeedHash = Animator.StringToHash("MotionSpeed");

        NavMeshAgent agent;
        IAnimatorSource animSrc;
        Animator Anim => animSrc?.Animator;

        float animBlend;      // behaves like _animationBlend
        float moveBlend;      // behaves like inputMagnitude (0-1)

        void Awake()
        {
            agent = GetComponent<NavMeshAgent>();
            animSrc = GetComponentInChildren<IAnimatorSource>(true);
        }

        void LateUpdate()
        {
            if (animSrc == null) return;

            /* 1 ─ current speed in m/s (horizontal only) */
            Vector3 horizVel = agent.desiredVelocity; horizVel.y = 0;
            float curSpeed = horizVel.magnitude;      // 0 … agent.speed

            /* 2 ─ smooth toward target like Starter Assets */
            animBlend = Mathf.Lerp(animBlend, curSpeed,
                                   Time.deltaTime * speedChangeRate);

            /* 3 ─ 0-1 magnitude, also damped */
            float rawMove = curSpeed / Mathf.Max(agent.speed, 0.01f);
            moveBlend = Mathf.Lerp(moveBlend, rawMove,
                                   Time.deltaTime / dampTime);

            /* 4 ─ push to Animator (same names as Starter Assets) */
            Anim.SetFloat(SpeedHash, animBlend);
            Anim.SetFloat(MotionSpeedHash, moveBlend);
        }
    }
}
