using UnityEngine;
using UnityEngine.InputSystem;
using StarterAssets;
using System.Collections;

[RequireComponent(typeof(CharacterController))]
public class WallClimber : MonoBehaviour
{
  /*──────── Tunables ────────*/
  [Header("Speed & Stamina")]
  [SerializeField] float climbSpeed = 3f;
  [SerializeField] float maxStamina = 5f;
  [SerializeField] float staminaRecharge = 2f;

  [Header("Wall Detection")]
  [Range(60, 89)] public float minWallAngle = 75f;
  public LayerMask nonClimbableMask = 0;
  public float grabDistance = 0.6f;
  public float wallGraceTime = 0.15f;

  [Header("Pull-Up Motion")]
  [SerializeField] float pullUpForward = 0.8f;   // distance you land in front of the ledge

  [Header("Early Pull-Up Probe")]
  [SerializeField] float headRayOffset = 0.4f;  // metres above chest ray
  [SerializeField] float headRayForwardCut = 0.1f;  // shorten head-ray

  /*──────── Refs ────────────*/
  [Header("Refs")]
  public Animator animator;
  public PlayerInput input;
  public ThirdPersonController movementScript;

  /*──────── Runtime ─────────*/
  CharacterController cc;
  float stamina;
  bool isClimbing;
  bool isPullingUp;
  float wallLostTimer;
  Vector3 climbTarget;

  /*──────── Constants ───────*/
  const string PULL_UP_STATE = "ClimbPullUp";   // ← rename if your Animator uses a different state name

  /*==================================================================*/
  void Awake()
  {
    cc = GetComponent<CharacterController>();
    if (!movementScript) movementScript = GetComponent<ThirdPersonController>();
    stamina = maxStamina;
  }

  /*============================ UPDATE ============================*/
  void Update()
  {
    /* --- inputs --- */
    Vector2 move = input.actions["Move"].ReadValue<Vector2>();
    bool goUp = move.y > 0.01f;
    bool jumpTap = input.actions["Jump"].WasPressedThisFrame();

    /* --- wall checks --- */
    bool wallOk = IsWallAhead(out RaycastHit hit);   // chest ray
    bool headWall = IsWallAtHead();                    // higher ray

    /*──────────────── Idle → Climb ───────────────*/
    if (!isClimbing && !isPullingUp)
    {
      if (jumpTap && wallOk && stamina > 0f)
        StartClimb(hit.normal);
    }
    /*──────────────── Climbing ───────────────────*/
    else if (isClimbing)
    {
      /* vertical motion & stamina */
      cc.Move(Vector3.up * move.y * climbSpeed * Time.deltaTime);
      stamina -= Time.deltaTime;

      /* grace timer */
      wallLostTimer = wallOk ? 0f : wallLostTimer + Time.deltaTime;

      /* pull-up conditions */
      bool earlyPull = goUp && wallOk && !headWall;
      bool wallGoneWhileGoingUp = goUp && !wallOk && wallLostTimer > 0.02f;

      if (earlyPull || wallGoneWhileGoingUp)
      {
        Vector3 chest = transform.position + Vector3.up * 1.2f;
        Vector3 headOrigin = chest + Vector3.up * headRayOffset;
        climbTarget = headOrigin + transform.forward * pullUpForward;

        TriggerPullUp();
      }
      else
      {
        bool drop = jumpTap || stamina <= 0f || wallLostTimer > wallGraceTime;
        if (drop) StopClimb();
      }
    }

    /*──────────────── Recharge stamina ─────────*/
    if (!isClimbing && !isPullingUp && cc.isGrounded && stamina < maxStamina)
      stamina += staminaRecharge * Time.deltaTime;
  }

  /*====================== Detection helpers ======================*/
  bool IsWallAhead(out RaycastHit hit)
  {
    Vector3 chest = transform.position + Vector3.up * 1.2f;
    if (!Physics.Raycast(chest, transform.forward, out hit,
                         grabDistance, ~0, QueryTriggerInteraction.Ignore))
      return false;

    if (((1 << hit.collider.gameObject.layer) & nonClimbableMask) != 0)
      return false;

    return Vector3.Angle(hit.normal, Vector3.up) > minWallAngle;
  }

  bool IsWallAtHead()
  {
    Vector3 chest = transform.position + Vector3.up * 1.2f;
    Vector3 headOrigin = chest + Vector3.up * headRayOffset;

    return Physics.Raycast(headOrigin,
                           transform.forward,
                           grabDistance - headRayForwardCut,
                           ~0, QueryTriggerInteraction.Ignore);
  }

  /*====================== State helpers ==========================*/
  void StartClimb(Vector3 wallNormal)
  {
    isClimbing = true;
    wallLostTimer = 0f;
    animator.SetBool("isClimbing", true);

    FaceWall(wallNormal);
    cc.stepOffset = 0f;
    cc.Move(Vector3.up * 0.05f);

    if (movementScript) movementScript.enabled = false;
  }

  void StopClimb()
  {
    isClimbing = false;
    animator.SetBool("isClimbing", false);
    cc.stepOffset = 0.3f;

    if (!isPullingUp && movementScript)
      movementScript.enabled = true;
  }

  /*──────────────── pull-up helpers ───────────────*/
  void TriggerPullUp()
  {
    isClimbing = false;
    isPullingUp = true;

    animator.SetBool("isClimbing", false);   // guard
    animator.SetTrigger("pullUp");

    cc.stepOffset = 0f;
    if (movementScript) movementScript.enabled = false;

    StartCoroutine(PullUpRoutine());
  }

  IEnumerator PullUpRoutine()
  {
    /* Wait until the Animator is actually in the pull-up state */
    while (!animator.GetCurrentAnimatorStateInfo(0).IsName(PULL_UP_STATE))
      yield return null;

    float clipLen = animator.GetCurrentAnimatorStateInfo(0).length;
    yield return new WaitForSeconds(clipLen - 0.255f);  // minus some time to avoid the end of the animation

    FinishPullUp();
  }

  void FinishPullUp()
  {
    isPullingUp = false;
    cc.stepOffset = 0.3f;

    cc.enabled = false;            // warp the capsule safely
    transform.position = climbTarget;
    cc.enabled = true;

    if (movementScript) movementScript.enabled = true;
  }

  /*──────────────── misc ──────────────*/
  void FaceWall(Vector3 wallNormal)
  {
    Vector3 flat = Vector3.ProjectOnPlane(wallNormal, Vector3.up);
    if (flat.sqrMagnitude > 0.001f)
      transform.rotation = Quaternion.LookRotation(-flat);
  }
}
