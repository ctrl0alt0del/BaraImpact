using Game.Vfx;

namespace Game.Abilities
{
    /// <summary>
    /// One-stop interface for an ability’s Cast / Projectile / Impact specs.
    /// </summary>
    public interface IVfxProvider
    {
        VfxSpawnSpec CastSpec { get; }
        VfxSpawnSpec ProjectileSpec { get; }
        VfxSpawnSpec ImpactSpec { get; }

        /* legacy alias for scripts that referenced “VfxPrefab” */
        VfxSpawnSpec VfxPrefab => ProjectileSpec;
    }
}