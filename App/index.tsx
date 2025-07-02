import { h, render } from "preact";
import { UnityPrimitiveProvider } from "./primitives/UnityPrimitiveProvider";
import { StaminaMeter } from "./ui/componetns/StaminaMeter";
import { RenderTextureSurface } from "./ui/componetns/system/RenderTextureSurface";
//chess tiles to test blitted RTs
render(
  <RenderTextureSurface side="left">
    <UnityPrimitiveProvider>
      <StaminaMeter />
    </UnityPrimitiveProvider>
  </RenderTextureSurface>,
  document.body
);
