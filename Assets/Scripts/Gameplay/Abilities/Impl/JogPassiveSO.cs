using H2V.GameplayAbilitySystem.AbilitySystem.ScriptableObjects;
using H2V.GameplayAbilitySystem.EffectSystem.ScriptableObjects;
using UnityEngine;

namespace Game.Abilities
{
    [CreateAssetMenu(menuName = "Bara Impact/Abilities/Passives/JogMotion")]
    public class JogPassiveSO : AbilitySO<JogPassiveSpec>
    {
        [SerializeField] private GameplayEffectSO jogMotionEffect;

        /*──────── inject design-time data into the spec ───────*/
        protected override JogPassiveSpec CreateAbility()
        {
            return new JogPassiveSpec
            {
                JogMotionEffect = jogMotionEffect
            };
        }

    }
}