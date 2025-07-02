// @/services/useAddressableAsset.ts
import { taskToPromise } from "@/utils/csToJs";
import { useEffect, useState } from "preact/hooks";

const UIAssetLoader = CS.UIAssetLoader;
/**
 * Loads (and auto-releases) ANY addressable asset.
 * @param key  the Addressable “Address” or Label
 */
export function useAddressableAsset<T extends CS.UnityEngine.Object>(
  key: string
) {
  const [asset, setAsset] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!key) return;

    let alive = true;

    (async () => {
      try {
        const obj = await taskToPromise(UIAssetLoader.Load(key));
        if (alive) setAsset(obj as T);
      } catch (e) {
        if (alive) setError(e as Error);
      }
    })();

    return () => {
      alive = false;
      UIAssetLoader.Release(key);
    };
  }, [key]);

  return { asset, error };
}
