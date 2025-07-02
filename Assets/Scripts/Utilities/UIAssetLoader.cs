using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using UnityEngine;
using UnityEngine.AddressableAssets;
using UnityEngine.ResourceManagement.AsyncOperations;

public static class UIAssetLoader
{
    private static readonly Dictionary<string, AsyncOperationHandle> _cache
        = new();

    /// <summary>Loads an addressable asset without using C# generics.</summary>
    /// <param name="key">Addressables key / label / GUID.</param>
    /// <param name="type">
    ///   Runtime type to load (e.g. typeof(Texture2D)).
    ///   If null, falls back to UnityEngine.Object.
    /// </param>
    /// <returns>
    ///   Task that resolves to the loaded asset (as UnityEngine.Object).
    ///   OneJS bridges this Task → JS Promise automatically.
    /// </returns>
    private static readonly SynchronizationContext UnitySync =
        SynchronizationContext.Current;   // captured on main thread

    public static Task<UnityEngine.Object> Load(string key)
    {
        var tcs = new TaskCompletionSource<UnityEngine.Object>();

        var handle = Addressables.LoadAssetAsync<UnityEngine.Object>(key);

        handle.Completed += op =>
        {
            // Always hop back to the Unity main thread BEFORE completing Task
            UnitySync.Post(_ =>
            {
                if (op.Status == AsyncOperationStatus.Succeeded)
                    tcs.SetResult(op.Result);
                else
                    tcs.SetException(op.OperationException ??
                        new System.Exception("Addressables load failed"));
            }, null);
        };

        return tcs.Task;      // JS sees this as Task$1<T>
    }

    /// <summary>Release a previously loaded key (optional).</summary>
    public static void Release(string key)
    {
        if (_cache.TryGetValue(key, out var handle))
        {
            Addressables.Release(handle);
            _cache.Remove(key);
        }
    }

}
