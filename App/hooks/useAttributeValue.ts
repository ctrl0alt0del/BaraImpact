import { useEffect, useState } from "preact/hooks";
import { useAddressableAsset } from "./useAddresableAsset";

type AttributeSO =
  CS.H2V.GameplayAbilitySystem.AttributeSystem.ScriptableObjects.AttributeSO;
type AttributeSystemBehaviour =
  CS.H2V.GameplayAbilitySystem.AttributeSystem.Components.AttributeSystemBehaviour;
type AttributeValue =
  CS.H2V.GameplayAbilitySystem.AttributeSystem.AttributeValue;

const AttributeSystemBehaviour =
  CS.H2V.GameplayAbilitySystem.AttributeSystem.Components
    .AttributeSystemBehaviour;

export function useAttributeValue(
  go: CS.UnityEngine.GameObject | null,
  attributePath: string,
  fallback = 0
) {
  const [val, setVal] = useState<number>(fallback);
  const [attrError, setAttrError] = useState<unknown>(null);

  // ─ Load the ScriptableObject ──────────────────────────────────────────
  const { asset: attrSO, error: loadErr } =
    useAddressableAsset<AttributeSO>(attributePath);

  // Handle load errors once, not on every render
  useEffect(() => {
    if (loadErr) {
      console.error(
        `[useAttributeValue] failed to load ${attributePath}:`,
        loadErr
      );
      setAttrError(loadErr);
      setVal(fallback);
    }
  }, [loadErr, attributePath, fallback]);

  // ─ Hook into AttributeSystem once everything is ready ────────────────
  useEffect(() => {
    if (!go || !attrSO || attrError) return; // still waiting / failed

    const asc = go.GetComp<AttributeSystemBehaviour>(AttributeSystemBehaviour);
    if (!asc) {
      setVal(fallback);
      return;
    }

    // initial pull
    const tmp = puerts.$ref<AttributeValue>(null);
    if (asc.TryGetAttributeValue(attrSO, tmp)) {
      const av = puerts.$unref(tmp) as AttributeValue | null; // ← correct
      if (av) setVal(av.CurrentValue);
    } else {
      // attribute not found yet – keep fallback
      console.warn(
        `[useAttributeValue] ${attrSO.name} not in AttributeSystem yet`
      );
    }

    // subscribe to live changes
    const handler = (
      changedSO: AttributeSO,
      _oldVal: AttributeValue,
      newVal: AttributeValue
    ) => {
      if (changedSO === attrSO) setVal(newVal.CurrentValue);
    };

    asc.add_PostAttributeChange(handler);
    return () => asc.remove_PostAttributeChange(handler);
  }, [go, attrSO, attrError, fallback]);

  return val;
}
