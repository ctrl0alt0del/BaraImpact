//-------------------------------------------------------------
// Assets/Scripts/Gameplay/Combat/HitContext.cs
//-------------------------------------------------------------
using UnityEngine;
using Game.Combat;

namespace Game.Combat
{
    /// Passed via StateMutator.Payload so the victim knows
    /// *who* hit them and *what kind* of attack it was.
    public readonly struct HitContext
    {
        public readonly Transform Attacker;  // owner of the attack
        public readonly AttackKind Kind;     // melee / projectile / hitscan

        public HitContext(Transform attacker, AttackKind kind)
        {
            Attacker = attacker;
            Kind = kind;
        }
    }
}