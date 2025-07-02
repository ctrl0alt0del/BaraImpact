// unity/primitives/UnityLine.tsx
import { h } from "preact";
import { useEffect, useMemo, useRef } from "preact/hooks";
import { Mathf, Vector2 } from "UnityEngine";
import { parseColor } from "onejs/utils";
import { LineProps } from "../PrimitiveContext";

export function UnityLine({
  x1,
  y1,
  x2,
  y2,
  width,
  color,
  key,
}: Readonly<LineProps>) {
  const ref = useRef<Element>();

  useEffect(() => {
    if (!ref.current?.ve) {
      return;
    }
    ref.current.ve.generateVisualContent = (mgc) => {
      const p = mgc.painter2D;
      p.strokeColor = parseColor(color);
      p.lineWidth = width;
      p.BeginPath();
      p.MoveTo(new Vector2(x1, y1));
      p.LineTo(new Vector2(x2, y2));
      p.Stroke();
      p.ClosePath();
    };
    ref.current.ve.MarkDirtyRepaint();
  }, [x1, y1, x2, y2, width, color]);
  // size big enough to contain both points
  const widthValue = Mathf.Max(x1, x2) - Mathf.Min(x1, x2) + width;
  const heightValue = Mathf.Max(y1, y2) - Mathf.Min(y1, y2) + width;
  const style = useMemo(
    () => ({
      width: widthValue + "px",
      height: heightValue + "px",
      position: "absolute",
    }),
    [x1, y1, x2, y2, width]
  );
  return <div ref={ref} style={style} key={key} />;
}
