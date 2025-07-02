// useUIPyramidBillboardPose2D.ts
import { useEffect, useState, useRef } from "preact/hooks";
import { Vector2 } from "UnityEngine";
import { useObjectByName } from "@/hooks/useObject";
import { BillboardPose } from "@/types/BillboardPose";

declare const puerts: { $typeof: (t: any) => any };

type UIPyramidProjector = CS.Game.UI.Projection.UIPyramidProjector;
type UIBillboard = CS.Game.UI.Projection.UIBillboard;

const UIPyramidProjector = CS.Game.UI.Projection.UIPyramidProjector;
const UIBillboard = CS.Game.UI.Projection.UIBillboard;

export function useUIPyramidBillboardPose2D(
  anchor01: Vector2 | null,
  {
    follow = 8,
    parallax = 1,
    managerGuid = "HUDManager",
    radiusPx = 256,
  }: {
    follow?: number;
    parallax?: number;
    managerGuid?: string;
    radiusPx?: number;
  } = {}
): BillboardPose | null {
  const [pose, setPose] = useState<BillboardPose | null>(null);

  /* keep projector + billboard instances alive between renders */
  const projectorRef = useRef<UIPyramidProjector | null>(null);
  const bbRef = useRef<UIBillboard | null>(null);

  /* grab the projector once */
  const hudMgr = useObjectByName(managerGuid);
  useEffect(() => {
    if (!hudMgr || projectorRef.current) return;
    projectorRef.current = hudMgr.GetComponent(
      puerts.$typeof(UIPyramidProjector)
    ) as UIPyramidProjector | null;
  }, [hudMgr]);

  /* (one-time) init the billboard descriptor */
  useEffect(() => {
    if (bbRef.current) return;
    const bb = new UIBillboard();
    bb.follow = follow;
    bb.parallax = parallax;
    bb.radiusPx = radiusPx;
    bbRef.current = bb;
  }, [follow, parallax, radiusPx]);

  /* rAF loop that pushes updates into useState */
  useEffect(() => {
    if (!anchor01 || !projectorRef.current || !bbRef.current) return;

    const proj = projectorRef.current;
    let raf = 0,
      last = 0;

    const step = (now: number) => {
      const res = proj.UpdateBillboard(anchor01);
      const eul = res.rotation.eulerAngles; // quat → Euler

      /* push into React state (every frame) */
      setPose({
        yaw: eul.x,
        pitch: eul.y,
        roll: eul.z,
        pivot01: res.pivot01,
      });

      raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame((t) => {
      step(t);
    });
    return () => cancelAnimationFrame(raf);
  }, [anchor01, follow, parallax, radiusPx]);

  return pose;
}
