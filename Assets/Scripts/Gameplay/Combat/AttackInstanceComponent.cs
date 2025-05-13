//-------------------------------------------------------------
// Assets/Scripts/Gameplay/Combat/AttackInstanceComponent.cs
//-------------------------------------------------------------

using Game.States;
using UnityEngine;
using SEA.State;
using SEA.Mutators;
using SEA.Events;
using Game.Vfx;

namespace Game.Combat
{
    [RequireComponent(typeof(StateMachine))]
    public class AttackInstanceComponent : MonoBehaviour
    {
        AttackSpawnData d;

        float lifetime;
        GameObject projVfxGO;

        /* homing */
        Transform homingTarget;
        float turnRateDeg;

        /* runtime */
        StateMachine sm;
        Collider myCol;
        Rigidbody rb;

        public void Init(AttackSpawnData data)
        {
            d = data;
            lifetime = d.Kind switch
            {
                AttackKind.Melee => d.Range,
                AttackKind.Projectile => d.Range / Mathf.Max(d.Speed, 0.01f),
                AttackKind.Hitscan => 0.1f,
                _ => 0.5f
            };

            if (d.ProjectileSpec?.Prefab)
                projVfxGO = Instantiate(
                    d.ProjectileSpec.Prefab, transform, false);

            if (d.Kind != AttackKind.Hitscan)
            {
                myCol = gameObject.AddComponent<SphereCollider>();
                myCol.isTrigger = true;
                ((SphereCollider)myCol).radius =
                    d.CollisionRadius > 0 ? d.CollisionRadius : 0.25f;

                rb = gameObject.AddComponent<Rigidbody>();
                rb.isKinematic = true;
                rb.useGravity = false;
                rb.collisionDetectionMode =
                    CollisionDetectionMode.ContinuousSpeculative;
            }

            foreach (var c in d.Owner.GetComponentsInChildren<Collider>())
                if (myCol && c) Physics.IgnoreCollision(myCol, c, true);

            MutatorQueue.Enqueue(new StateMutator(gameObject,
                                   AttackInstanceStates.Active));

            if (d.Kind == AttackKind.Hitscan) DoHitscan();
        }

        public void SetHomingTarget(Transform tgt, float turnRate)
        {
            homingTarget = tgt;
            turnRateDeg = Mathf.Max(0f, turnRate);
        }

        /*──────────────────────────────────────────*/
        void Awake()
        {
            sm = GetComponent<StateMachine>();
            sm.Goto(AttackInstanceStates.Created);
            GlobalEventBus.Subscribe<EnterEvent>(OnEnter);
        }

        void OnDestroy()
        {
            GlobalEventBus.Unsubscribe<EnterEvent>(OnEnter);
            if (projVfxGO) Destroy(projVfxGO);
        }

        void FixedUpdate()
        {
            if (sm.Current != AttackInstanceStates.Active) return;

            lifetime -= Time.fixedDeltaTime;
            if (lifetime <= 0f) { QueueCollided(); return; }

            if (d.Kind != AttackKind.Projectile) return;

            if (homingTarget && homingTarget.gameObject.activeInHierarchy)
            {
                Vector3 dir = (homingTarget.position - transform.position).normalized;
                Quaternion want = Quaternion.LookRotation(dir);
                rb.MoveRotation(Quaternion.RotateTowards(
                                    transform.rotation,
                                    want,
                                    turnRateDeg * Time.fixedDeltaTime));
            }

            rb.MovePosition(transform.position +
                            d.Speed * Time.fixedDeltaTime * transform.forward);
        }

        void OnTriggerEnter(Collider other)
        {
            if (sm.Current != AttackInstanceStates.Active) return;
            if (((1 << other.gameObject.layer) & d.HitMask) == 0) return;
            if (!RolePasses(other)) return;

            NotifyTarget(other.gameObject);   // <──
            QueueCollided();
        }

        void DoHitscan()
        {
            Vector3 origin = d.Owner.position + Vector3.up * 1.4f;
            if (!Physics.Raycast(origin, d.Owner.forward, out var hit, d.Range, d.HitMask))
                return;
            if (!RolePasses(hit.collider)) return;

            NotifyTarget(hit.collider.gameObject);   // <──
            SpawnImpact();
        }

        /*──────────────── helpers ───────────────*/
        bool RolePasses(Component c)
        {
            if (d.AllowedRoles == null || d.AllowedRoles.Length == 0)
                return true;

            var id = c.GetComponentInParent<NpcIdentity>();
            if (!id) return false;

            foreach (var role in d.AllowedRoles)
                if (id.Role == role) return true;

            return false;
        }

        void NotifyTarget(GameObject tgt)
        {
            MutatorQueue.Enqueue(new StateMutator(
                tgt,
                UnitStates.HitReceived,          // target enters this state
                null,
                0,
                new HitContext(d.Owner, d.Kind)  // payload for later damage calc
            ));
        }

        void SpawnImpact() => d.ImpactSpec?.Spawn(transform);

        void QueueCollided()
        {
            SpawnImpact();
            MutatorQueue.Enqueue(new StateMutator(gameObject,
                                 AttackInstanceStates.Collided));
        }

        void OnEnter(EnterEvent e)
        {
            if (e.Target != gameObject) return;
            if (e.State == AttackInstanceStates.Collided)
                Destroy(gameObject);
        }
    }
}
