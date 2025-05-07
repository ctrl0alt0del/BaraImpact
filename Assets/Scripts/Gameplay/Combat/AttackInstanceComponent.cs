//-------------------------------------------------------------
// AttackInstanceComponent.cs – homing-aware projectile
//-------------------------------------------------------------
using UnityEngine;
using SEA.State;
using SEA.Mutators;
using SEA.Events;
using Game.Combat;

[RequireComponent(typeof(StateMachine))]
public class AttackInstanceComponent : MonoBehaviour
{
  AttackKind kind;
  float range;
  float speed;
  int damage;
  LayerMask hitMask;
  float lifetime;
  Transform owner;
  GameObject vfxInstance;

  /* ── homing ── */
  Transform homingTarget;
  float turnRateDeg;

  StateMachine sm;

  public void Init(AttackKind k, float rng, float spd,
                   GameObject vfxPrefab, LayerMask mask, Transform own)
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

    if (kind != AttackKind.Hitscan)
      gameObject.AddComponent<SphereCollider>().isTrigger = true;

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

  void Update()
  {
    if (sm.Current != AttackInstanceStates.Active) return;

    if ((lifetime -= Time.deltaTime) <= 0)
    {
      QueueCollided();
      return;
    }

    if (kind == AttackKind.Projectile)
    {
      if (homingTarget && homingTarget.gameObject.activeInHierarchy)
      {
        Vector3 dir = (homingTarget.position -
                       transform.position).normalized;
        Quaternion desired = Quaternion.LookRotation(dir);
        transform.rotation = Quaternion.RotateTowards(
                                transform.rotation,
                                desired,
                                turnRateDeg * Time.deltaTime);
      }
      transform.position += transform.forward * speed * Time.deltaTime;
    }
  }

  void OnTriggerEnter(Collider other)
  {
    if (sm.Current != AttackInstanceStates.Active) return;
    if (((1 << other.gameObject.layer) & hitMask) == 0) return;

    other.GetComponent<IDamageable>()?.TakeDamage(damage);
    QueueCollided();
  }

  void DoHitscan()
  {
    if (Physics.Raycast(owner.position + Vector3.up * 1.4f,
                        owner.forward,
                        out var hit,
                        range,
                        hitMask))
      hit.collider.GetComponent<IDamageable>()?.TakeDamage(damage);
  }

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
