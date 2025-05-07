//-------------------------------------------------------------
// AttackInstanceComponent.cs – homing, CCD, reliable triggers
//-------------------------------------------------------------
using UnityEngine;
using SEA.State;
using SEA.Mutators;
using SEA.Events;
using Game.Combat;

[RequireComponent(typeof(StateMachine))]
public class AttackInstanceComponent : MonoBehaviour
{
  /* ── injected at spawn ──────────────────────────────── */
  AttackKind kind;
  float range;
  float speed;
  LayerMask hitMask;
  Transform owner;

  float lifetime;
  GameObject vfxInstance;

  /* homing */
  Transform homingTarget;
  float turnRateDeg;

  /* runtime */
  StateMachine sm;
  Collider myCollider;
  Rigidbody rb;
  Collider hitCollider;   // stored on contact

  /*──────── PUBLIC INIT ─────────────────────────────────*/
  public void Init(AttackKind k,
                   float rng,
                   float spd,
                   GameObject vfxPrefab,
                   LayerMask mask,
                   Transform own,
                   float collisionRadius = 0.25f)
  {
    kind = k;
    range = rng;
    speed = spd;
    hitMask = mask;
    owner = own;

    lifetime = kind switch
    {
      AttackKind.Melee => rng,
      AttackKind.Projectile => rng / Mathf.Max(spd, 0.01f),
      AttackKind.Hitscan => 0.1f,
      _ => 0.5f
    };

    if (vfxPrefab)
      vfxInstance = Instantiate(vfxPrefab, transform);

    /* ── collider & rigidbody (non-hitscan) ───────── */
    if (kind != AttackKind.Hitscan)
    {
      myCollider = gameObject.AddComponent<SphereCollider>();
      myCollider.isTrigger = true;

      /* set radius from param or mesh bounds as fallback */
      if (collisionRadius > 0f)
        ((SphereCollider)myCollider).radius = collisionRadius;
      else if (TryGetComponent<MeshRenderer>(out var mr))
        ((SphereCollider)myCollider).radius =
            mr.bounds.extents.magnitude * 0.5f;
      else
        ((SphereCollider)myCollider).radius = 0.25f;

      rb = gameObject.AddComponent<Rigidbody>();
      rb.isKinematic = true;
      rb.useGravity = false;
      rb.collisionDetectionMode =
          CollisionDetectionMode.ContinuousSpeculative;
    }

    /* ignore owner's colliders so we don't trigger on spawn */
    foreach (var oc in owner.GetComponentsInChildren<Collider>())
      if (myCollider && oc) Physics.IgnoreCollision(myCollider, oc, true);

    /* start state machine */
    MutatorQueue.Enqueue(new StateMutator(gameObject,
                           AttackInstanceStates.Active));

    if (kind == AttackKind.Hitscan)
      DoHitscan();
  }

  public void SetHomingTarget(Transform tgt, float turnRate)
  {
    homingTarget = tgt;
    turnRateDeg = Mathf.Max(0f, turnRate);
  }

  /*──────── Unity lifecycle ───────────────────────────*/
  void Awake()
  {
    sm = GetComponent<StateMachine>();
    sm.Goto(AttackInstanceStates.Created);
    GlobalEventBus.Subscribe<EnterEvent>(OnEnter);
  }

  void OnDestroy()
  {
    GlobalEventBus.Unsubscribe<EnterEvent>(OnEnter);
    if (vfxInstance) Destroy(vfxInstance);
  }

  void FixedUpdate()
  {
    if (sm.Current != AttackInstanceStates.Active) return;

    /* 1⃣ lifetime */
    lifetime -= Time.fixedDeltaTime;
    if (lifetime <= 0f) { QueueCollided(); return; }

    if (kind != AttackKind.Projectile) return;

    /* 2⃣ steering */
    if (homingTarget && homingTarget.gameObject.activeInHierarchy)
    {
      Vector3 dir = (homingTarget.position - transform.position).normalized;
      Quaternion want = Quaternion.LookRotation(dir);
      rb.MoveRotation(Quaternion.RotateTowards(
                          transform.rotation,
                          want,
                          turnRateDeg * Time.fixedDeltaTime));
    }

    /* 3⃣ forward motion */
    Vector3 step = transform.forward * speed * Time.fixedDeltaTime;
    rb.MovePosition(transform.position + step);
  }

  /*──────── Trigger callback ──────────────────────────*/
  void OnTriggerEnter(Collider other)
  {
    if (sm.Current != AttackInstanceStates.Active) return;
    if (((1 << other.gameObject.layer) & hitMask) == 0) return;

    Debug.Log($"Trigger {other.name} with {gameObject.name}");
    hitCollider = other;
    QueueCollided();
  }

  /*──────── Hitscan path ─────────────────────────────*/
  void DoHitscan()
  {
    if (Physics.Raycast(owner.position + Vector3.up * 1.4f,
                        owner.forward,
                        out var hit,
                        range,
                        hitMask))
    {
      hitCollider = hit.collider;
    }
  }

  /*──────── FSM plumbing ─────────────────────────────*/
  void QueueCollided() =>
      MutatorQueue.Enqueue(new StateMutator(gameObject,
                           AttackInstanceStates.Collided));

  void OnEnter(EnterEvent e)
  {
    if (e.Target != gameObject) return;
    if (e.State == AttackInstanceStates.Collided)
      Destroy(gameObject);
  }
}
