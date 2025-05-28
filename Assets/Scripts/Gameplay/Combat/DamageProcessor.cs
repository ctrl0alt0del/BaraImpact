//-------------------------------------------------------------
// Assets/Scripts/Gameplay/Combat/DamageProcessor.cs
//-------------------------------------------------------------
using UnityEngine;
using SEA.Events;
using SEA.State;                                   // EnterEvent
using SEA.Mutators;                                // HitContext
using H2V.GameplayAbilitySystem.AttributeSystem.Components;
using H2V.GameplayAbilitySystem.AttributeSystem.ScriptableObjects;
using Game.States;                                 // UnitStates
using Game.Combat;                                 // AttackKind enum (if any)

namespace Game.Combat
{
    /// Applies damage whenever this GameObject’s StateMachine
    /// enters one of the configured states. Damage is computed
    /// from the HitContext payload; placeholder returns 10 HP.
    [AddComponentMenu("Bara Impact/Combat/Damage Processor")]
    public class DamageProcessor : MonoBehaviour
    {
        [Header("Attribute System")]
        [SerializeField] private AttributeSystemBehaviour attributeSystem;
        [SerializeField] private AttributeSO currentHp;        // drag CurrentHP.asset

        [Header("States that deal damage")]
        [SerializeField]
        private string[] damagingStates = {
            UnitStates.HitReceived
        };

        /* -------------------------------------------------- */

        private void OnEnable()
        {
            if (!attributeSystem) attributeSystem = GetComponent<AttributeSystemBehaviour>();
            GlobalEventBus.Subscribe<EnterEvent>(OnEnterState);
        }

        private void OnDisable()
        {
            GlobalEventBus.Unsubscribe<EnterEvent>(OnEnterState);
        }

        private void OnEnterState(EnterEvent evt)
        {
            if (evt.Target != gameObject) return;                // not my object

            // React only to listed states
            var damageReceived = false;
            for (int i = 0; i < damagingStates.Length; i++)
            {
                if (evt.State != damagingStates[i]) continue;

                float dmg = ExtractDamage(evt);
                ApplyDamage(dmg);
                damageReceived = true;
                break;
            }

            if (damageReceived)
            {
                MutatorQueue.Enqueue(new StateMutator(gameObject, UnitStates.CombatNone));
            }
        }

        /* ---------- Damage extraction ---------- */

        private float ExtractDamage(EnterEvent evt)
        {
            // Was there a payload?
            if (evt.Payload is HitContext ctx)
                return GetAttackerDamage(ctx, gameObject);

            // Fallback if somebody forgot the payload
            return 10f;
        }

        /// TODO: Replace with real calculation once attacker stats exist
        private static float GetAttackerDamage(HitContext ctx, GameObject victim)
        {
            // ctx.Attacker     → Transform of the aggressor
            // ctx.Kind         → melee / projectile / etc.
            // victim           → this GameObject
            return 10f;
        }

        /* ---------- HP subtraction ---------- */

        private void ApplyDamage(float dmg)
        {
            if (dmg <= 0f) return;
            if (!attributeSystem.TryGetAttributeValue(currentHp, out var hpVal)) return;

            float newHp = Mathf.Max(0f, hpVal.CurrentValue - dmg);
            attributeSystem.SetAttributeBaseValue(currentHp, newHp);
        }
    }
}
