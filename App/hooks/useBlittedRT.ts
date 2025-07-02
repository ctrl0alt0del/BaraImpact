import { useEffect, useRef, useState } from "preact/hooks";
import {
  RenderTexture,
  Material,
  Shader,
  Graphics,
  Quaternion,
  Matrix4x4,
  Vector3,
  TextureWrapMode,
  Vector4,
} from "UnityEngine";
export const mul = Matrix4x4.op_Multiply;
export function useBlittedRT(
  srcRT: RenderTexture | null,
  {
    width = 1024,
    height = 1024,
    yaw = 0,
    pitch = 0,
    roll = 0,
    scale = 1,
    persp = 0.2,
    pivot = { x: 0.5, y: 0.5 }, // 0-1 perspective tweak
  } = {}
) {
  /* persistent refs ---------------------------------------------------- */
  const dstRef = useRef<RenderTexture | null>(null);
  const matRef = useRef<Material | null>(null);
  const [outRT, setOutRT] = useState<RenderTexture | null>(null);

  /* re-allocate ONLY when src/size changes ----------------------------- */
  useEffect(() => {
    if (!srcRT) return;

    /* tidy previous allocation */
    if (dstRef.current) {
      Graphics.SetRenderTarget(null);
      dstRef.current.Release();
      CS.UnityEngine.Object.Destroy(matRef.current);
      dstRef.current = null;
      matRef.current = null;
    }

    /* allocate new RT + material */
    const dst = new RenderTexture(width, height, 0);
    dst.name = `${srcRT.name}_Warped`;
    dst.graphicsFormat = srcRT.graphicsFormat; // keep same colour space
    dst.Create();
    dstRef.current = dst;

    srcRT.wrapMode = TextureWrapMode.Clamp;
    dstRef.current.wrapMode = TextureWrapMode.Clamp;
    setOutRT(dst);

    const mat = new Material(Shader.Find("Hidden/RT_Homography"));
    mat.mainTexture = srcRT;
    matRef.current = mat;

    /* cleanup */
    return () => {
      Graphics.SetRenderTarget(null);
      dst.Release();
      CS.UnityEngine.Object.Destroy(mat);
    };
  }, [srcRT, width, height]);

  /* frame loop that ONLY updates matrix -------------------------------- */
  useEffect(() => {
    if (!srcRT || !dstRef.current || !matRef.current) return;

    let raf = 0;
    const loop = () => {
      if (pitch > 180 || pitch < -180) {
        pitch = 360 - (Math.abs(pitch) % 360); // wrap to [-180, 180]
      }
      if (yaw > 180 || yaw < -180) {
        yaw = 360 - (Math.abs(yaw) % 360); // wrap to [-180, 180]
      }
      if (roll > 180 || roll < -180) {
        roll = 360 - (Math.abs(roll) % 360); // wrap to [-180, 180]
      }

      console.log(
        "Blitting RT with yaw:",
        yaw,
        "pitch:",
        pitch,
        "roll:",
        roll,
        "pivotX:",
        pivot.x,
        "pivotY:",
        pivot.y,
        "scale:",
        scale,
        "persp:",
        persp
      );
      const R = Matrix4x4.Rotate(Quaternion.Euler(yaw, pitch, roll));
      const S = Matrix4x4.Scale(new Vector3(scale, scale, 1));
      const T0 = Matrix4x4.Translate(new Vector3(-pivot.x, -pivot.y, 0));
      const T1 = Matrix4x4.Translate(new Vector3(pivot.x, pivot.y, 0));
      const M = mul(T1, mul(S, mul(R, T0))); // right-most applied first

      /* ----- Perspective boost ------------- */
      // Copy M, then *scale* the z-row instead of replacing it.
      const H = new Matrix4x4(
        M.GetColumn(0),
        M.GetColumn(1),
        M.GetColumn(2),
        M.GetColumn(3)
      );

      // perspective boost — keep genuine depth terms
      H.m20 = H.m20 * persp; // scale dz/du
      H.m21 = H.m21 * persp; // scale dz/dv
      H.m22 = 1; // baseline so w≈1 when persp=0
      H.m23 = 1;

      matRef.current!.SetMatrix("_H", H);
      Graphics.Blit(srcRT, dstRef.current!, matRef.current!);

      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [srcRT, yaw, pitch, roll, scale, persp]);

  return outRT;
}
