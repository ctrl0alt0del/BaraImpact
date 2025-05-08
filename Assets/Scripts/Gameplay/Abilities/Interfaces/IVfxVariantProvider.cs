using Game.Vfx;

namespace Game.Abilities
{
    /// <summary>Ability SO implements if it owns a variant table.</summary>
    public interface IVfxVariantProvider
    {
        CastVfxVariantTable CastVariants { get; }
    }
}