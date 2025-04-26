using UnityEngine;
using Game.Resources;

[CreateAssetMenu(menuName = "Bara Impact/Ability")]
public class AbilityDefinition : ScriptableObject
{
  [Header("Core")]
  public string abilityName = "Basic Attack";

  [Tooltip("How much of the chosen resource gets consumed.")]
  public float resourceCost = 0f;

  [Tooltip("Which resource pool is drained (Stamina, Mana, Rage, …).")]
  public ResourceType resourceType = ResourceType.Stamina;

  [Header("Timings (sec)")]
  public float windupTime = 0.15f;
  public float activeTime = 0.05f;
  public float recoverTime = 0.25f;

  [Header("Visuals")]
  public AnimationClip animationClip;
  public GameObject hitboxPrefab;
}
