//-------------------------------------------------------------
// Assets/Scripts/Gameplay/Combat/AttackSpawnData.cs
//-------------------------------------------------------------
using UnityEngine;
using Game.Vfx;

namespace Game.Combat
{
    public struct AttackSpawnData
    {
        public AttackKind Kind;
        public float Range;
        public float Speed;
        public float CollisionRadius;
        public float Lifetime;
        public LayerMask HitMask;
        public Transform Owner;

        public VfxSpawnSpec ProjectileSpec;
        public VfxSpawnSpec ImpactSpec;

        public NpcRole[] AllowedRoles;
    }
}