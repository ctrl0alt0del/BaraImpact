// Assets/Scripts/Game/UI/Projection/UIPyramidProjector.cs
using UnityEngine;

namespace Game.UI.Projection
{
    /// <summary>
    /// Tilts a HUD billboard out of the screen plane.
    /// • Base pyramid shape defined in [0-1] UV space.
    /// • Apex shifts when the player runs (forward/back) and when the camera yaws / pitches,
    ///   with a critically-damped spring so motion feels snappy but not jerky.
    /// • Apex shift is clamped so the billboard can never leave the screen bounds.
    /// </summary>
    public class UIPyramidProjector : MonoBehaviour
    {
        /* ───────────────────────────────── CONFIG ───────────────────────── */

        [Header("Pyramid shape")]
        [Tooltip("Height of the apex above the unit-square base (UV-units).")]
        public float pyramidHeight = 0.5f;

        [Header("Scene references")]
        [SerializeField] Transform player;           // assign in Inspector
        [SerializeField] Camera cam;             // assign, or left null to grab Camera.main

        [Header("Motion coupling (per-axis)")]
        [Tooltip("Player speed (m/s) ➜ apex height change (UV-units per m/s).")]
        public float runHeightCoef = 0.35f;
        [Tooltip("Camera yaw Δ°/frame ➜ apex X-shift (UV-units per deg).")]
        public float yawShiftCoef = 0.25f;
        [Tooltip("Camera pitch Δ°/frame ➜ apex Y-shift (UV-units per deg).")]
        public float pitchShiftCoef = 0.25f;

        [Header("Return smoothing")]
        [Tooltip("Half-life (seconds) for the apex to cover half the remaining distance back to neutral. "
       + "Smaller = snappier, larger = slower.")]
        public float returnHalfLife = 0.15f;     // 0.15 s feels brisk with no overshoot

        [Header("Clamp")]
        [Tooltip("Max UV shift so HUD never leaves the screen.")]
        public float maxUVShift = 0.30f;

        /* ───────────────────────── INTERNAL STATE ───────────────────────── */

        readonly Plane[] _faces = new Plane[4];  // Left, Right, Top, Bottom
        float _tiltDeg;

        Vector3 _apexPos;        // current apex (UV-space, y == height)

        Vector3 _prevPlayerPos;
        Vector3 _prevCamPos;
        Quaternion _prevCamRot;

        /* ───────────────────────────── LIFECYCLE ────────────────────────── */

        void Awake()
        {
            if (!cam) cam = Camera.main;

            _apexPos = new Vector3(0.5f, pyramidHeight, 0.5f);

            _prevPlayerPos = player ? player.position : Vector3.zero;
            _prevCamPos = cam ? cam.transform.position : Vector3.zero;
            _prevCamRot = cam ? cam.transform.rotation : Quaternion.identity;

            BuildPyramid(_apexPos);
        }

        void Update()
        {
            if (!cam || !player) return;

            float dt = Time.deltaTime;
            if (dt < Mathf.Epsilon) return;

            /* ─── 1. derive motion deltas ─────────────────────────── */

            // 1A: player forward/back speed relative to camera
            Vector3 camFwd = cam.transform.forward;
            float playerSpeed = Vector3.Dot(player.position - _prevPlayerPos, camFwd) / dt;
            /* float heightShift = Mathf.Clamp(playerSpeed * runHeightCoef,
                                              -pyramidHeight * .8f,
                                               pyramidHeight * .8f);*/
            float heightShift = Mathf.Clamp(-playerSpeed * runHeightCoef,
                                            -pyramidHeight * 0.8f,
                                            pyramidHeight * 0.8f);

            // 1B: camera yaw / pitch deltas since last frame
            Quaternion camDelta = cam.transform.rotation * Quaternion.Inverse(_prevCamRot);
            camDelta.ToAngleAxis(out float deltaDeg, out Vector3 deltaAxis);
            deltaDeg = Mathf.DeltaAngle(0, deltaDeg);               // −180 … +180

            float yawDeg = Vector3.Dot(deltaAxis, Vector3.up) * deltaDeg;   // + clockwise
            float pitchDeg = Vector3.Dot(deltaAxis, Vector3.right) * deltaDeg;   // + pitch-up

            Vector2 planarShift = new Vector2(yawDeg * yawShiftCoef,
                                              pitchDeg * pitchShiftCoef);

            planarShift = Vector2.ClampMagnitude(planarShift, maxUVShift);

            /* ─── 2. target apex in UV space ─────────────────────── */

            Vector3 target = new Vector3(
                0.5f + planarShift.x,
                pyramidHeight + heightShift,
                0.5f + planarShift.y
            );

            /* ─── 3. critically-damped spring toward target ─────── */
            float lambda = Mathf.Log(2f) / Mathf.Max(0.0001f, returnHalfLife);   // ln2 / T½
            float lerp = 1f - Mathf.Exp(-lambda * dt);                         // 0‥1

            _apexPos = Vector3.Lerp(_apexPos, target, lerp);

            /* clamp so HUD never leaves view -------------------------------- */
            _apexPos.x = Mathf.Clamp(_apexPos.x, 0.5f - maxUVShift, 0.5f + maxUVShift);
            _apexPos.z = Mathf.Clamp(_apexPos.z, 0.5f - maxUVShift, 0.5f + maxUVShift);

            BuildPyramid(_apexPos);

            /* ─── 4. store prev-frame samples ────────────────────── */
            _prevPlayerPos = player.position;
            _prevCamPos = cam.transform.position;
            _prevCamRot = cam.transform.rotation;
        }

        /* ──────────────────────── GEOMETRY BUILD ───────────────────────── */

        void BuildPyramid(Vector3 apex)
        {
            // unit-square corners in UV
            Vector3[] c = {
                new Vector3(0, 0, 0),  // bottom-left
                new Vector3(0, 0, 1),  // top-left
                new Vector3(1, 0, 1),  // top-right
                new Vector3(1, 0, 0)   // bottom-right
            };

            _faces[0] = new Plane(apex, c[0], c[1]);  // Left
            _faces[1] = new Plane(apex, c[2], c[3]);  // Right
            _faces[2] = new Plane(apex, c[1], c[2]);  // Top
            _faces[3] = new Plane(apex, c[3], c[0]);  // Bottom

            _tiltDeg = Vector3.Angle(Vector3.up, _faces[0].normal); // same for all faces
        }

        /* ───────────────────────────── API ─────────────────────────────── */

        public BillboardPose UpdateBillboard(Vector2 anchor01)
        {
            /* pick face by comparing |dx| and |dy| inside unit square */
            float dx = anchor01.x - 0.5f;
            float dy = anchor01.y - 0.5f;
            int face = Mathf.Abs(dx) > Mathf.Abs(dy)
                       ? (dx < 0 ? 0 : 1)   // Left / Right
                       : (dy < 0 ? 2 : 3);  // Top / Bottom

            float yaw = 0, pitch = 0;
            switch (face)
            {
                case 0: yaw = -_tiltDeg; break;   // Left
                case 1: yaw = _tiltDeg; break;   // Right
                case 2: pitch = -_tiltDeg; break;   // Top
                default: pitch = _tiltDeg; break;  // Bottom
            }

            Quaternion rot =
                  Quaternion.AngleAxis(yaw, Vector3.up)
                * Quaternion.AngleAxis(pitch, Vector3.right);

            Vector2 pivot = face switch
            {
                0 => new Vector2(0f, 0.5f),
                1 => new Vector2(1f, 0.5f),
                2 => new Vector2(0.5f, 0f),
                _ => new Vector2(0.5f, 1f),
            };

            return new BillboardPose
            {
                rotation = rot,
                position = Vector3.zero,
                pivot01 = pivot
            };
        }

        /* plain struct returned to JS / OneJS */
        public struct BillboardPose
        {
            public Quaternion rotation;
            public Vector3 position;   // (unused)
            public Vector2 pivot01;    // pivot in 0-1 space
        }
    }
}
