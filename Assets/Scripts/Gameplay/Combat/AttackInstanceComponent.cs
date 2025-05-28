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

        /* runtime */
        float lifetime;
        GameObject projVfxGO;

        Transform homingTarget;
        float turnRateDeg;

        StateMachine sm;
        Collider myCol;
        Rigidbody rb;

        // ───────────────────────────────────────────────────────────
        //  INITIALISATION
        // ───────────────────────────────────────────────────────────
        public void Init(AttackSpawnData data)
        {
            d = data;
            lifetime = d.Lifetime;

            // 1.  VISUAL PREFAB (projectile only)
            if (d.ProjectileSpec?.Prefab && d.Kind == AttackKind.Projectile)
                projVfxGO = Instantiate(d.ProjectileSpec.Prefab, transform, false);

            // 2.  COLLIDER / RIGIDBODY
            switch (d.Kind)
            {
                case AttackKind.Projectile:
                    SetupProjectileCollider();
                    break;

                case AttackKind.Melee:
                    SetupMeleeCollider();
                    break;

                    // Hitscan uses a Raycast only
            }

            // 3.  Ignore owner collisions
            foreach (var c in d.Owner.GetComponentsInChildren<Collider>())
                if (myCol && c) Physics.IgnoreCollision(myCol, c, true);

            // 4.  Activate state machine
            MutatorQueue.Enqueue(new StateMutator(gameObject, AttackInstanceStates.Active));

            if (d.Kind == AttackKind.Hitscan) DoHitscan();
        }

        void SetupProjectileCollider()
        {
            float radius = d.CollisionRadius > 0 ? d.CollisionRadius : 0.25f;

            myCol = gameObject.AddComponent<SphereCollider>();
            ((SphereCollider)myCol).radius = radius;
            myCol.isTrigger = true;

            rb = gameObject.AddComponent<Rigidbody>();
            rb.isKinematic = true;
            rb.useGravity = false;
            rb.collisionDetectionMode = CollisionDetectionMode.ContinuousSpeculative;
        }

        void SetupMeleeCollider()
        {
            // Dimensions
            float depth = Mathf.Max(0.1f, d.Range);

            // Add BoxCollider to *this* object
            myCol = gameObject.AddComponent<BoxCollider>();
            var box = (BoxCollider)myCol;
            box.isTrigger = true;
            box.size = new Vector3(depth, depth, depth);
            box.center = new Vector3(0f, 0f, depth * 0.5f);   // pushed forward

            // Add kinematic Rigidbody so trigger messages are generated
            rb = gameObject.AddComponent<Rigidbody>();
            rb.isKinematic = true;
            rb.useGravity = false;
            rb.collisionDetectionMode = CollisionDetectionMode.ContinuousSpeculative;
        }

        public void SetHomingTarget(Transform tgt, float turnRate)
        {
            homingTarget = tgt;
            turnRateDeg = Mathf.Max(0f, turnRate);
        }

        // ───────────────────────────────────────────────────────────
        //  UNITY LIFE-CYCLE
        // ───────────────────────────────────────────────────────────
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

            if (d.Kind != AttackKind.Projectile) return; // no movement for melee

            // ─ Projectile homing / forward motion ─
            if (homingTarget && homingTarget.gameObject.activeInHierarchy)
            {
                Vector3 dir = (homingTarget.position - transform.position).normalized;
                Quaternion want = Quaternion.LookRotation(dir);
                rb.MoveRotation(Quaternion.RotateTowards(
                                    transform.rotation, want,
                                    turnRateDeg * Time.fixedDeltaTime));
            }

            rb.MovePosition(transform.position +
                            d.Speed * Time.fixedDeltaTime * transform.forward);
        }

        // ───────────────────────────────────────────────────────────
        //  COLLISION / HIT REGISTRATION
        // ───────────────────────────────────────────────────────────
        void OnTriggerEnter(Collider other)
        {
            if (sm.Current == AttackInstanceStates.Collided) return;
            if (((1 << other.gameObject.layer) & d.HitMask) == 0) return;
            if (RolePasses(other))
            {
                NotifyTarget(other.gameObject);
            }

            QueueCollided();
        }

        void DoHitscan()
        {
            Vector3 origin = d.Owner.position + Vector3.up * 1.4f;
            if (!Physics.Raycast(origin, d.Owner.forward, out var hit, d.Range, d.HitMask))
                return;
            if (RolePasses(hit.collider))
            {
                NotifyTarget(hit.collider.gameObject);
            }
            ;

            SpawnImpact();
        }

        /*──────── helpers ────────*/
        bool RolePasses(Component c)
        {
            if (d.AllowedRoles == null || d.AllowedRoles.Length == 0) return true;

            var id = c.GetComponentInParent<ActorIdentity>();
            if (!id) return false;

            foreach (var alignment in d.AllowedRoles)
                if (id.Is(alignment)) return true;

            return false;
        }

        void NotifyTarget(GameObject tgt)
        {
            MutatorQueue.Enqueue(new StateMutator(
                tgt,
                UnitStates.HitReceived,
                null,
                0,
                new HitContext(d.Owner, d.Kind)
            ));
        }

        void SpawnImpact() => d.ImpactSpec?.Spawn(transform);

        void QueueCollided()
        {
            SpawnImpact();
            MutatorQueue.Enqueue(new StateMutator(
                gameObject, AttackInstanceStates.Collided));
        }

        void OnEnter(EnterEvent e)
        {
            if (e.Target != gameObject) return;
            if (e.State == AttackInstanceStates.Collided)
                Destroy(gameObject);
        }
    }
}
