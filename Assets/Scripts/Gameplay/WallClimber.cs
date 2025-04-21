using UnityEngine;
using UnityEngine.InputSystem;
using StarterAssets;

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

  [Header("Pull‑Up Motion")]
  [SerializeField] float pullUpUp = 1.2f;
  [SerializeField] float pullUpForward = 0.8f;
  [SerializeField] float pullUpDuration = 0.8f;   // seconds (clip length)

  [Header("Early Pull‑Up Probe")]
  [SerializeField] float headRayOffset = 0.4f; // metres above chest ray
  [SerializeField] float headRayForwardCut = 0.1f; // shorten head‑ray

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
  float pullUpTimer;
  float wallLostTimer;

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
    bool wallOk = IsWallAhead(out RaycastHit hit); // chest ray
    bool headWall = IsWallAtHead();                  // higher ray

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

      /* EARLY pull‑up: moving up, chest has wall, head is clear */
      bool earlyPull = goUp && wallOk && !headWall;

      /* fallback pull‑up: wall lost while moving up */
      bool wallGoneWhileGoingUp = goUp && !wallOk && wallLostTimer > 0.02f;

      if (earlyPull || wallGoneWhileGoingUp)
      {
        TriggerPullUp();
      }
      else
      {
        bool drop = jumpTap || stamina <= 0f || wallLostTimer > wallGraceTime;
        if (drop) StopClimb();
      }
    }
    /*──────────────── Pull‑up phase ─────────────*/
    else if (isPullingUp)
    {
      pullUpTimer += Time.deltaTime;
      float step = Time.deltaTime / pullUpDuration;

      Vector3 delta = transform.up * pullUpUp * step +
                      transform.forward * pullUpForward * step;
      cc.Move(delta);

      if (pullUpTimer >= pullUpDuration)
        FinishPullUp();
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

    // Reactivate gravity/movement only if we're not in pull‑up phase
    if (!isPullingUp && movementScript != null)
      movementScript.enabled = true;
  }

  void TriggerPullUp()
  {
    isClimbing = false;
    isPullingUp = true;
    pullUpTimer = 0f;

    animator.SetBool("isClimbing", false);   // guard
    animator.SetTrigger("pullUp");

    cc.stepOffset = 0f;
    if (movementScript) movementScript.enabled = false;
  }

  void FinishPullUp()
  {
    isPullingUp = false;
    cc.stepOffset = 0.3f;
    if (movementScript) movementScript.enabled = true;
  }

  void FaceWall(Vector3 wallNormal)
  {
    Vector3 flat = Vector3.ProjectOnPlane(wallNormal, Vector3.up);
    if (flat.sqrMagnitude > 0.001f)
      transform.rotation = Quaternion.LookRotation(-flat);
  }
}
