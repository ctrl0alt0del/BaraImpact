using Game.Vfx;
using UnityEngine;

namespace Game.Abilities
{
    /// Supply independent Animation+VFX variant tables for each stage.
    public interface IStageVariantProvider
    {
        CastVfxVariantTable WindupVariants { get; }
        CastVfxVariantTable ActiveVariants { get; }
        CastVfxVariantTable RecoverVariants { get; }
    }
}
