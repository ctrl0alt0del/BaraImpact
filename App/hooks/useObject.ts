// @/services/useObject.ts
import { useEffect, useState } from "preact/hooks";
import UnityEngine from "UnityEngine";
import { csToJsArray } from "@/utils/csToJs";

type IDTag = CS.Game.Infrastructure.IDTag;
const IDTag = CS.Game.Infrastructure.IDTag;

/* ---------- 1. Fetch exactly one object by GUID ---------- */
export function useObjectByGuid(guid: string) {
  const [obj, setObj] = useState<UnityEngine.GameObject | null>(null);

  useEffect(() => {
    setObj(IDTag.GetByGuid(guid)?.gameObject ?? null);
  }, [guid]);

  return obj;
}
/* ---------- 2. Fetch exactly one object by NamedId ---------- */
export function useObjectByName(named: string) {
  const [obj, setObj] = useState<UnityEngine.GameObject | null>(null);

  useEffect(() => {
    setObj(IDTag.GetByName(named)?.gameObject ?? null);
  }, [named]);

  return obj;
}

/* ---------- 3. Fetch an array of objects by ClassKind ---------- */
export function useObjectsByClass(kind: string) {
  const [list, setList] = useState<UnityEngine.GameObject[]>([]);

  useEffect(() => {
    const tags = csToJsArray<IDTag>(IDTag.GetByClass(kind));
    setList(tags.map((t) => t.gameObject));
  }, [kind]);

  return list;
}
