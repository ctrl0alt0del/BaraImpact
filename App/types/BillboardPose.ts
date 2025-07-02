import { Vector2 } from "UnityEngine";

/** What the hook returns every frame */
export interface BillboardPose {
  /** rotation around Y (deg) */
  yaw: number;
  /** rotation around X (deg) */
  pitch: number;
  /** rotation around Z (deg) */
  roll: number;
  /** pivot of the billboard in UV space (0-1) */
  pivot01: Vector2;
}
