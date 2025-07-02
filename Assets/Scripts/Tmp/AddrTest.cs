using UnityEngine;
using UnityEditor;
using UnityEngine.AddressableAssets;
using UnityEngine.ResourceManagement.AsyncOperations;
using H2V.GameplayAbilitySystem.AttributeSystem.ScriptableObjects;

public static class AddrTest
{
    [MenuItem("Debug/Load Max Stamina")]
    private static async void LoadMaxStamina()
    {
        var handle =
            Addressables.LoadAssetAsync<Object>("Assets/Attributes/Max Stamina.asset");
        await handle.Task;
        var so = AssetDatabase.LoadAssetAtPath<AttributeSO>(
        "Assets/Attributes/Max Stamina.asset");
        Debug.Log($"Max value = {so?.InitialValueCalculator}");
        Debug.Log($"Addr status: {handle.Status}");
        Debug.Log($"Result obj: {handle.Result}");
    }
}