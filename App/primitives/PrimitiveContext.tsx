import { h, createContext } from "preact";

export interface CircleProps {
  radius: number;
  width: number;
  color: string;
  /** sweep angle in radians (0 → 2π). Omit ⇒ full circle */
  angle?: number;
  style?: Record<string, string>;
}
export interface LineProps {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  width: number;
  color: string;
  key?: string; // for React reconciliation
}

export interface PrimitiveSet {
  Circle: (p: CircleProps) => Element;
  Line: (p: LineProps) => Element;
}

/* noop fallbacks avoid null-checks during hot-reload */
const Stub = () => <div />;
export const PrimitiveCtx = createContext<PrimitiveSet>({
  Circle: Stub,
  Line: Stub,
});
