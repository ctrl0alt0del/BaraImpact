//-------------------------------------------------------------
// Assets/Scripts/Gameplay/Equipment/EquipmentComponent.cs
//-------------------------------------------------------------
using UnityEngine;
using System.Collections;
using SEA.Events;
using Game.States;
using Game.Abilities;
using SEA.State;

namespace Game.Equipment
{
    [RequireComponent(typeof(AbilityPhaseRunner))]
    public class EquipmentComponent : MonoBehaviour
    {
        [Header("Sockets & Prefabs")]
        [SerializeField] Transform rightSocket;          // drag WeaponSocket
        [SerializeField] GameObject basicAttackWeapon;    // Sword.prefab

        [Header("Auto-stash")]
        [SerializeField, Min(1f)] float unequipDelay = 20f;  // seconds idle before stash

        GameObject currentWeapon;
        Coroutine stashRoutine;

        /*──────────────── Unity lifecycle ───────────────*/
        void Awake() => GlobalEventBus.Subscribe<EnterEvent>(OnEnter);
        void OnDestroy() => GlobalEventBus.Unsubscribe<EnterEvent>(OnEnter);

        /*──────────────── SEA event pump ────────────────*/
        void OnEnter(EnterEvent e)
        {
            if (e.Target != gameObject) return;

            var runner = GetComponent<AbilityPhaseRunner>();

            switch (e.State)
            {
                case UnitStates.AbilityWindup:
                    if (runner?.Current?.Slot == AbilitySlot.BasicAttack)
                        Equip(basicAttackWeapon);
                    break;

                case UnitStates.AbilityRecover:
                case UnitStates.Idle:
                    // don't unequip immediately; let the timer decide
                    break;
            }
        }

        /*──────────────── Public API ────────────────────*/
        public void Equip(GameObject prefab)
        {
            if (!prefab || !rightSocket) return;

            if (!currentWeapon)
                currentWeapon = Instantiate(prefab,
                    rightSocket.position,
                    rightSocket.rotation,
                    rightSocket);

            currentWeapon.transform.localPosition = Vector3.zero;
            currentWeapon.transform.localRotation = Quaternion.identity;

            // reset / start the stash timer
            if (stashRoutine != null) StopCoroutine(stashRoutine);
            stashRoutine = StartCoroutine(StashAfterDelay());
        }

        /*──────────────── Helpers ───────────────────────*/
        IEnumerator StashAfterDelay()
        {
            yield return new WaitForSeconds(unequipDelay);
            Unequip();
            stashRoutine = null;
        }

        void Unequip()
        {
            if (currentWeapon)
            {
                Destroy(currentWeapon);
                currentWeapon = null;
            }
        }
    }
}
