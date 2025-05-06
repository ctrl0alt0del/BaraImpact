using UnityEngine;
using SEA.State;        // StateMachine, EnterEvent
using SEA.Mutators;     // MutatorQueue, StateMutator
using Game.Combat;
using SEA.Events;
using Game.Combat;

[RequireComponent(typeof(StateMachine))]
public class AttackInstanceComponent : MonoBehaviour
{
  /* config */
  AttackKind kind;
  float range;
  float speed;
  int damage;
  LayerMask hitMask;
  float lifetime;
  Transform owner;
  GameObject vfxInstance;

  StateMachine sm;

  /*──────── PUBLIC INIT ────────*/
  public void Init(AttackKind k, float rng, float spd, GameObject vfxPrefab, LayerMask mask, Transform own)
  {
    kind = k;
    range = rng;
    speed = spd;
    hitMask = mask;
    owner = own;

    lifetime = kind switch
    {
      AttackKind.Melee => rng,                       // rng = active-time
      AttackKind.Projectile => rng / Mathf.Max(spd, 0.01f),
      AttackKind.Hitscan => 0.1f,
      _ => 0.5f
    };

    if (vfxPrefab)
      vfxInstance = Instantiate(vfxPrefab, transform);

    if (kind != AttackKind.Hitscan)
      gameObject.AddComponent<SphereCollider>().isTrigger = true;

    // schedule state change to Active on the next Tick
    MutatorQueue.Enqueue(
        new StateMutator(gameObject, AttackInstanceStates.Active));

    if (kind == AttackKind.Hitscan)
      DoHitscan();
  }

  /*──────── Lifecycle ────────*/
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
      QueueCollided();
    else if (kind == AttackKind.Projectile)
      transform.position += transform.forward * speed * Time.deltaTime;
  }

  /*──────── Hit / expire ────────*/
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
                        owner.forward, out var hit, range, hitMask))
      hit.collider.GetComponent<IDamageable>()?.TakeDamage(damage);
  }

  void QueueCollided()
  {
    Debug.Log("AttackInstanceComponent: Queuing Collided state");
    MutatorQueue.Enqueue(
        new StateMutator(gameObject, AttackInstanceStates.Collided));
  }

  /*──────── SEA event pump ────────*/
  void OnEnter(EnterEvent evt)
  {
    if (evt.Target != gameObject) return;

    if (evt.State == AttackInstanceStates.Collided)
    {
      // optional: impact VFX here
      Destroy(gameObject);
    }
  }
}
