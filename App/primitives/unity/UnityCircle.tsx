// @/primitives/unity/UnityCircle.tsx
import { h } from "preact";
import { useRef, useEffect, useMemo } from "preact/hooks";
import { Mathf, Vector2 } from "UnityEngine";
import { Angle, ArcDirection } from "UnityEngine/UIElements";
import { parseColor } from "onejs/utils";
import { CircleProps } from "@/primitives/PrimitiveContext";

export function UnityCircle({
  radius,
  width,
  color,
  angle = 2 * Mathf.PI, // full circle default
  style = {},
}: Readonly<CircleProps>) {
  const ref = useRef<Element>();

  useEffect(() => {
    if (!ref.current?.ve) {
      return;
    }
    ref.current.ve.generateVisualContent = (mgc) => {
      const p = mgc.painter2D;
      p.strokeColor = parseColor(color);
      p.lineWidth = width;

      const r = radius - width / 2;
      const c = new Vector2(radius, radius);

      p.BeginPath();
      p.Arc(
        c,
        r,
        new Angle(-90),
        new Angle(-90 + (angle * 180) / Mathf.PI),
        ArcDirection.Clockwise
      );
      p.Stroke();
      p.ClosePath();
    };
    ref.current.ve.MarkDirtyRepaint();
  }, [radius, width, color, angle]);

  const containerStyle = useMemo(
    () => ({
      width: radius * 2 + "px",
      height: radius * 2 + "px",
      ...style,
    }),
    [radius, style]
  );
  console.log("Container style:", containerStyle);
  return <div ref={ref} style={containerStyle} />;
}
