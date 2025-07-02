// ui/theme.ts
import { createContext } from "preact";

export interface GaugeTheme {
  back: string;
  fill: string;
  tick: string;
  width: number;
}
export const GaugeThemeCtx = createContext<GaugeTheme>({
  back: "#333",
  fill: "#4caf50",
  tick: "#777",
  width: 12,
});
