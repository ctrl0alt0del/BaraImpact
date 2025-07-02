import { h, ComponentChildren } from "preact";
import { useMemo } from "preact/hooks";
import { PrimitiveCtx } from "@/primitives/PrimitiveContext";
import { UnityCircle } from "@/primitives/unity/UnityCircle";
import { UnityLine } from "@/primitives/unity/UnityLine";

interface UnityPrimitiveProviderProps {
  children?: ComponentChildren;
}

export const UnityPrimitiveProvider = ({
  children,
}: UnityPrimitiveProviderProps) => {
  const value = useMemo(() => ({ Circle: UnityCircle, Line: UnityLine }), []);
  return (
    <PrimitiveCtx.Provider value={value}>{children}</PrimitiveCtx.Provider>
  );
};
