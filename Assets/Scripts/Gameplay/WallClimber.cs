using UnityEngine;
using UnityEngine.InputSystem;
using StarterAssets;

[RequireComponent(typeof(CharacterController))]
public class WallClimber : MonoBehaviour
{
  /*────────────────── Tunables ──────────────────*/
  [Header("Speed & Stamina")]
  [SerializeField] float climbSpeed = 3f;
  [SerializeField] float maxStamina = 5f;
  [SerializeField] float staminaRecharge = 2f;

  [Header("Wall Detection")]
  [Range(60, 89)] public float minWallAngle = 75f;
  public LayerMask nonClimbableMask = 0;
  public float grabDistance = 0.6f;
  public float wallGraceTime = 0.15f;      // tolerance frames

  [Header("Ledge Pull‑Up")]
  [SerializeField] float ledgeCheckHeight = 1.2f;   // ray height above chest
  [SerializeField] float pullUpUp = 1.2f;   // meters up
  [SerializeField] float pullUpForward = 0.8f;   // meters forward
  [SerializeField] float pullUpDuration = 0.8f;   // seconds (match clip)

  /*────────────────── References ────────────────*/
  [Header("Refs")]
  public Animator animator;
  public PlayerInput input;
  public ThirdPersonController movementScript;

  /*────────────────── Runtime ───────────────────*/
  CharacterController cc;
  float stamina;
  bool isClimbing;
  bool isPullingUp;
  float pullUpTimer;
  float wallLostTimer;
  Vector3 cachedWallNormal;

  /*────────────────── Unity Hooks ───────────────*/
  void Awake()
  {
    cc = GetComponent<CharacterController>();
    if (movementScript == null) movementScript = GetComponent<ThirdPersonController>();
    stamina = maxStamina;
  }

  void Update()
  {
    Vector2 move = input.actions["Move"].ReadValue<Vector2>();
    bool jumpTap = input.actions["Jump"].WasPressedThisFrame();
    bool wallOk = IsClimbableWallAhead(out RaycastHit hit);

    /*──────────── Idle → Climb ───────────*/
    if (!isClimbing && !isPullingUp)
    {
      if (jumpTap && wallOk && stamina > 0f)
        StartClimb(hit.normal);
    }
    /*──────────── Climbing logic ─────────*/
    else if (isClimbing)
    {
      cc.Move(Vector3.up * move.y * climbSpeed * Time.deltaTime);
      stamina -= Time.deltaTime;

      // Grace frames
      if (wallOk) wallLostTimer = 0f;
      else wallLostTimer += Time.deltaTime;

      bool ledgeReady = !wallOk && IsGroundAhead();

      if (ledgeReady)
        TriggerPullUp();
      else
      {
        bool drop = jumpTap || stamina <= 0f || wallLostTimer > wallGraceTime;
        if (drop) StopClimb();
      }
    }
    /*──────────── Pull‑up phase ──────────*/
    else if (isPullingUp)
    {
      pullUpTimer += Time.deltaTime;
      float step = Time.deltaTime / pullUpDuration;

      // Move capsule along planned vector
      Vector3 delta = transform.up * pullUpUp * step +
                      transform.forward * pullUpForward * step;
      cc.Move(delta);

      if (pullUpTimer >= pullUpDuration)
        FinishPullUp();
    }

    /*────────── Recharge stamina ─────────*/
    if (!isClimbing && !isPullingUp && cc.isGrounded && stamina < maxStamina)
      stamina += staminaRecharge * Time.deltaTime;
  }

  /*────────────────── Detection ────────────────*/
  bool IsClimbableWallAhead(out RaycastHit hit)
  {
    Vector3 origin = transform.position + Vector3.up * 1.2f;      // chest
    if (!Physics.Raycast(origin, transform.forward, out hit,
                         grabDistance, ~0, QueryTriggerInteraction.Ignore))
      return false;

    if (((1 << hit.collider.gameObject.layer) & nonClimbableMask) != 0)
      return false;

    return Vector3.Angle(hit.normal, Vector3.up) > minWallAngle;
  }

  bool IsGroundAhead()
  {
    Vector3 origin = transform.position + Vector3.up * ledgeCheckHeight;
    return Physics.Raycast(origin, transform.forward, grabDistance);
  }

  /*────────────────── State Switches ───────────*/
  void StartClimb(Vector3 wallNormal)
  {
    isClimbing = true;
    wallLostTimer = 0f;
    cachedWallNormal = wallNormal;
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
    if (movementScript) movementScript.enabled = true;
  }

  void TriggerPullUp()
  {
    isClimbing = false;
    isPullingUp = true;
    pullUpTimer = 0f;
    animator.SetTrigger("pullUp");          // clip = Climb Up
    cc.stepOffset = 0f;
  }

  void FinishPullUp()
  {
    isPullingUp = false;
    animator.ResetTrigger("pullUp");
    cc.stepOffset = 0.3f;
    if (movementScript) movementScript.enabled = true;
  }

  /*────────────────── Helpers ───────────────────*/
  void FaceWall(Vector3 wallNormal)
  {
    Vector3 flat = Vector3.ProjectOnPlane(wallNormal, Vector3.up);
    if (flat.sqrMagnitude > 0.001f)
      transform.rotation = Quaternion.LookRotation(-flat);
  }
}
