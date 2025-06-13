//-------------------------------------------------------------
using UnityEngine;
using Game.Vfx;
using System.Collections.Generic;

namespace Game.Abilities
{
    public static class StageVariantUtil
    {
        /// Plays the (Clip,Spec) for a given stage and returns the spawned VFX.
        public static List<GameObject> PlayStageVariant(
            IStageVariantProvider provider,
            AbilityStage stage,
            Animator anim,
            AnimatorOverrideController aoc,
            AnimationClip placeholder,
            Transform ownerRoot,
            out AnimationClip chosenClip)          // so caller can rescale speed
        {
            chosenClip = null;
            if (provider == null) return null;

            // ─ 1. pick the table ──────────────────────────────────────────
            CastVfxVariantTable table = stage switch
            {
                AbilityStage.Windup => provider.WindupVariants,
                AbilityStage.Active => provider.ActiveVariants,
                AbilityStage.Recover => provider.RecoverVariants,
                _ => null
            };
            if (table == null || !table.GetNext(out var entry))
                return null;

            chosenClip = entry.Clip;

            // ─ 2. animation layer & state name ───────────────────────────
            int layer = 1;                                // default UpperBody
            string stateName = string.IsNullOrEmpty(entry.StateName)
                               ? "Cast_Generic"
                               : entry.StateName;

            if (!string.IsNullOrEmpty(entry.LayerName) && anim != null)
            {
                int idx = anim.GetLayerIndex(entry.LayerName);
                if (idx >= 0) layer = idx;
            }

            // swap clip & play
            if (entry.Clip && anim && aoc && placeholder)
            {
                aoc[placeholder] = entry.Clip;
                anim.runtimeAnimatorController = aoc;
                anim.CrossFade(stateName, 0.12f, layer);
            }

            return entry.Spec ? entry.Spec.Spawn(ownerRoot) : null;
        }
    }
}
