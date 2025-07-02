// @/ui/RadialGauge.tsx
import { h } from "preact";
import { useContext, useMemo } from "preact/hooks";
import { GaugeThemeCtx } from "@/ui/theme";
import { PrimitiveCtx } from "@/primitives/PrimitiveContext";
import { Mathf } from "UnityEngine";

interface Props {
  current: number; // current resource
  max: number; // max resource
  /** tick step in resource units (e.g. 20 stamina) */
  tickInterval: number;
  size?: number;
}

/** platform-agnostic gauge that works with raw resource values */
export function RadialGauge({
  current,
  max,
  tickInterval,
  size,
}: Readonly<Props>) {
  const P = useContext(PrimitiveCtx);
  const T = useContext(GaugeThemeCtx);
  /* memo everything that only changes if size/theme/interval changes */
  const memo = useMemo(() => {
    const r = size / 2;
    const stroke = T.width;
    const centre = r;

    /* --------- 1 ▸ build an array of remaining-stamina levels --------- */
    const levels: number[] = [];
    for (let s = max - tickInterval; s > 0; s -= tickInterval) {
      levels.push(s); // e.g. [35, 25, 15, 5]
    }
    const lineAt = (angleRad: number, idx) => {
      /* calculate tick line end points */
      const cos = Mathf.Cos(angleRad);
      const sin = Mathf.Sin(angleRad);

      const outer = r + stroke * 0; // tip on outer edge of ring
      const inner = r - stroke * 1; // 30 % inward
      console.log(
        "tick",
        idx,
        "at angle",
        angleRad,
        "cos",
        cos,
        "sin",
        sin,
        "x1",
        centre + cos * outer,
        "y1",
        centre + sin * outer,
        "x2",
        centre + cos * inner,
        "y2",
        centre + sin * inner
      );
      return P.Line({
        key: idx !== undefined ? `tick-${idx}` : undefined,
        x1: centre + cos * outer,
        y1: centre + sin * outer,
        x2: centre + cos * inner,
        y2: centre + sin * inner,
        width: stroke * 0.4,
        color: T.tick,
      });
    };

    /* 2️⃣ all tick lines ----------------------------------------------- */
    const ticks = [
      lineAt(-Mathf.PI / 2, 0), // zero-angle tick (12 o’clock)
      ...levels.map((stam, idx) =>
        lineAt((stam / max) * 2 * Mathf.PI - Mathf.PI / 2, idx + 1)
      ),
    ];

    return { r, stroke, ticks };
  }, [size, T, max, tickInterval, P]);

  /* convert current / max to sweep angle */
  const fillAngle = (current / max) * 2 * Mathf.PI;

  /* shared abs style is memo-safe because inputs are constants */
  const abs = { position: "absolute", left: "0px", top: "0px" };
  return (
    <div style={{ width: size, height: size, position: "relative" }}>
      {/* background ring */}
      {P.Circle({
        radius: memo.r,
        width: memo.stroke,
        color: T.back,
        style: abs,
      })}
      {/* fill ring */}
      {P.Circle({
        radius: memo.r,
        width: memo.stroke,
        color: T.fill,
        angle: fillAngle,
        style: abs,
      })}
      {memo.ticks}
    </div>
  );
}
