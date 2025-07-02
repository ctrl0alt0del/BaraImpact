// RenderTextureSurface.tsx
import { h, render, Fragment, ComponentChildren } from "onejs-preact";
import { useEffect, useState } from "preact/hooks";
import {
  Vector2,
  Vector3,
  GameObject,
  RenderTexture,
  ColorSpace,
  QualitySettings,
  Experimental,
  Resources,
  Screen,
  Color,
} from "UnityEngine";
import {
  UIDocument,
  PanelSettings,
  PanelScaleMode,
  StyleColor,
} from "UnityEngine/UIElements";
import { useUIPyramidBillboardPose2D } from "@/hooks/useUIPyramidBillboard";
import { useRTQuad } from "@/hooks/useRTQuad";
import { Document } from "OneJS/Dom";
import { DocumentWrapper } from "onejs-core/dom/document";
import { useObjectByName } from "@/hooks/useObject";
import { ScriptEngine } from "OneJS";

const GraphicsFormat = Experimental.Rendering.GraphicsFormat;
const UObject = CS.UnityEngine.Object;
export type Side = "left" | "right" | "top" | "bottom";

export interface SurfaceProps {
  /** which half‑screen rectangle this surface should occupy */
  side: Side;
  /** metres in front of camera (default 2) */
  distance?: number;
  /** additional local rotation */
  extraTiltEuler?: Vector3;
  children?: ComponentChildren;
}

function rectForSide(side: Side, fullW: number, fullH: number) {
  switch (side) {
    case "left":
      return { x: 0, y: 0, width: fullW / 2, height: fullH };
    case "right":
      return { x: fullW / 2, y: 0, width: fullW / 2, height: fullH };
    case "top":
      return { x: 0, y: fullH / 2, width: fullW, height: fullH / 2 };
    case "bottom":
    default:
      return { x: 0, y: 0, width: fullW, height: fullH / 2 };
  }
}

export const RenderTextureSurface = ({
  side,
  distance = 2,
  extraTiltEuler = Vector3.zero,
  children,
}: SurfaceProps) => {
  /* ---------------------------------------------------------------------- */
  const fullW = Screen.width;
  const fullH = Screen.height;
  const rectPx = rectForSide(side, fullW, fullH);

  // viewport‑space centre & size (0‑1) -------------------------------
  const center01 = new Vector2(
    (rectPx.x + rectPx.width * 0.5) / fullW,
    (rectPx.y + rectPx.height * 0.5) / fullH
  );
  const size01 = new Vector2(rectPx.width / fullW, rectPx.height / fullH);
  const [srcRT, setSrcRT] = useState<RenderTexture | null>(null);
  const scriptEngineObj = useObjectByName("ScriptEngine");
  useEffect(() => {
    if (!scriptEngineObj) {
      console.warn(
        "ScriptEngine object not found, cannot create RenderTextureSurface."
      );
      return;
    }
    /* pick colour‑space‑correct format */
    const fmt =
      QualitySettings.activeColorSpace === ColorSpace.Linear
        ? GraphicsFormat.R8G8B8A8_SRGB
        : GraphicsFormat.R8G8B8A8_UNorm;

    const rt = new RenderTexture(rectPx.width, rectPx.height, 0);
    rt.graphicsFormat = fmt;
    rt.name = `HUD_RT_${side}`;
    rt.Create();
    setSrcRT(rt);

    /* hidden UIDocument that renders `children` into the RT */
    const go = new GameObject("HUD_RT_Doc");
    const doc = go.AddComp(UIDocument);
    const ps = CS.UnityEngine.ScriptableObject.CreateInstance(
      "PanelSettings"
    ) as PanelSettings;
    ps.name = "HUD_RT_PanelSettings";
    ps.scaleMode = PanelScaleMode.ConstantPixelSize;
    ps.targetTexture = rt;
    doc.panelSettings = ps;
    const root = doc.rootVisualElement;
    root.style.backgroundColor = new StyleColor(new Color(0, 0, 0, 0));
    const domRoot = new Document(root, scriptEngineObj.GetComp(ScriptEngine));
    const domRootWrapper = new DocumentWrapper(domRoot);
    render(<Fragment>{children}</Fragment>, domRootWrapper.body);

    /* cleanup on unmount */
    return () => {
      render(null, domRootWrapper.body);
      rt.Release();
      UObject.Destroy(go);
    };
  }, [scriptEngineObj, rectPx.width, rectPx.height, children]);

  /* 2️⃣ derive tilt from billboard helper (optionally) ------------------ */
  const pose = useUIPyramidBillboardPose2D(center01);
  const billboardTilt = new Vector3(
    pose?.yaw ?? 0,
    pose?.pitch ?? 0,
    pose?.roll ?? 0
  );

  /* centre is already in viewport units */

  /* 4️⃣ spawn / update the 3‑D quad ------------------------------------ */
  useRTQuad(srcRT, {
    center01,
    size01,
    distance,
    tiltEuler: Vector3.op_Addition(billboardTilt, extraTiltEuler),
    edgePivot: "left",
  });

  /* 5️⃣ this component itself draws nothing – quad handles the visuals */
  return null;
};
