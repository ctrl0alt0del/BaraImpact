import { MutableRef, useEffect, useRef } from "preact/hooks";
import {
  Camera,
  GameObject,
  Quaternion,
  RenderTexture,
  Vector2,
  Vector3,
} from "UnityEngine";
import { useAddressableAsset } from "./useAddresableAsset";

/* --------------------------------------------------------------------------
 * Hook: useQuadLifecycle
 * --------------------------------------------------------------------------
 * ▸ Creates / destroys a Quad that will display a RenderTexture.
 * ▸ Sets up a TRANSPARENT unlit material (src blend = SrcAlpha).
 * ▸ Parents the quad to Camera.main so there is **zero lag** on movement.
 * -------------------------------------------------------------------------- */
function useQuadLifecycle(srcRT: RenderTexture | null, prefab: GameObject) {
  const containerRef = useRef<GameObject | null>(null);
  const quadRef = useRef<GameObject | null>(null);

  useEffect(() => {
    if (!srcRT) return;
    if (!prefab) {
      console.warn("RTQuad prefab not loaded yet, skipping quad creation.");
      return;
    }
    if (!containerRef.current) {
      const inst = CS.UnityEngine.Object.Instantiate(prefab) as GameObject;
      containerRef.current = inst;
      quadRef.current = inst.transform.Find("RTQuad").gameObject;

      // ride the camera
      inst.transform.SetParent(Camera.main.transform, false);
    }

    // feed the RT into the quad’s material
    const rend = quadRef.current.GetComp(CS.UnityEngine.Renderer);
    rend.material.mainTexture = srcRT;
    rend.material.SetTexture("_BaseMap", srcRT);

    return () => {
      if (containerRef.current)
        CS.UnityEngine.Object.Destroy(containerRef.current);
      containerRef.current = quadRef.current = null;
    };
  }, [srcRT, prefab]);

  return { containerRef, quadRef };
}

/* --------------------------------------------------------------------------
 * Hook: useQuadTransform (pixel‑perfect via ViewportToWorldPoint)
 * --------------------------------------------------------------------------
 * Instead of FOV math, we sample ViewportToWorldPoint at the rect's
 * edges so the quad **exactly** covers the same screen pixels when
 * tiltEuler === 0.
 * -------------------------------------------------------------------------- */
export type EdgePivot = "center" | "left" | "right" | "top" | "bottom";

interface TransformOpts {
  center01: Vector2;
  size01: Vector2;
  distance?: number;
  tiltEuler?: Vector3;
  edgePivot?: "left" | "right" | "top" | "bottom" | "center";
}

function useQuadTransform(
  refs: {
    containerRef: MutableRef<GameObject | null>;
    quadRef: MutableRef<GameObject | null>;
  },
  opts: TransformOpts
) {
  const {
    center01,
    size01,
    distance = 2,
    tiltEuler = Vector3.zero,
    edgePivot = "center",
  } = opts;

  useEffect(() => {
    const { containerRef, quadRef } = refs;
    if (!containerRef.current || !quadRef.current) return;

    const cam = Camera.main;

    /* --- world size via ViewportToWorldPoint ------------------------- */
    const midW = cam.ViewportToWorldPoint(
      new Vector3(center01.x, center01.y, distance)
    );
    const dxW = cam.ViewportToWorldPoint(
      new Vector3(center01.x + size01.x * 0.5, center01.y, distance)
    );
    const dyW = cam.ViewportToWorldPoint(
      new Vector3(center01.x, center01.y + size01.y * 0.5, distance)
    );

    const worldW = Vector3.Distance(dxW, midW) * 2; // full width
    const worldH = Vector3.Distance(dyW, midW) * 2; // full height

    /* --- container local-placement (pivot point) --------------------- */
    const pivotCast = (() => {
      switch (edgePivot) {
        case "left":
          return cam.ViewportToWorldPoint(
            new Vector3(center01.x - size01.x * 0.5, center01.y, distance)
          );
        case "right":
          return cam.ViewportToWorldPoint(
            new Vector3(center01.x + size01.x * 0.5, center01.y, distance)
          );
        case "top":
          return cam.ViewportToWorldPoint(
            new Vector3(center01.x, center01.y + size01.y * 0.5, distance)
          );
        case "bottom":
          return cam.ViewportToWorldPoint(
            new Vector3(center01.x, center01.y - size01.y * 0.5, distance)
          );
        default:
          return midW; // center
      }
    })();

    const containerLocal = cam.transform.InverseTransformPoint(pivotCast);
    const cT = containerRef.current.transform;
    cT.localPosition = containerLocal;
    cT.localRotation = Quaternion.Euler(tiltEuler);

    /* --- quad offset inside the container ---------------------------- */
    const qT = quadRef.current.transform;
    qT.localRotation = Quaternion.identity;
    qT.localScale = new Vector3(worldW, worldH, 1);

    /* offset so the chosen edge touches the container origin */
    const halfW = worldW * 0.5,
      halfH = worldH * 0.5;
    switch (edgePivot) {
      case "left":
        qT.localPosition = new Vector3(halfW, 0, 0);
        break;
      case "right":
        qT.localPosition = new Vector3(-halfW, 0, 0);
        break;
      case "top":
        qT.localPosition = new Vector3(0, -halfH, 0);
        break;
      case "bottom":
        qT.localPosition = new Vector3(0, halfH, 0);
        break;
      default:
        qT.localPosition = Vector3.zero;
        break;
    }
  }, [refs, center01, size01, distance, tiltEuler, edgePivot]);
}

/* --------------------------------------------------------------------------
 * Public: useRTQuad
 * -------------------------------------------------------------------------- */
export interface RTQuadOpts extends Omit<TransformOpts, "center01" | "size01"> {
  center01?: Vector2;
  size01?: Vector2;
}
const PREFAB_KEY = "Assets/HUD/RTQuadPrefab.prefab";
export function useRTQuad(
  srcRT: RenderTexture | null,
  {
    center01 = new Vector2(0.5, 0.5),
    size01 = new Vector2(0.5, 0.5),
    distance,
    tiltEuler,
    edgePivot,
  }: RTQuadOpts = {}
) {
  const { asset: prefab } = useAddressableAsset<GameObject>(PREFAB_KEY);
  console.log("is Prefab loaded?", prefab ? "YES" : "NO");
  const quadRef = useQuadLifecycle(srcRT, prefab);
  useQuadTransform(quadRef, {
    center01,
    size01,
    distance,
    tiltEuler,
    edgePivot,
  });
}
