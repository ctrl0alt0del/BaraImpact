using UnityEngine;

namespace Game.UI.Projection
{
    /// Passed from JS to C#.  One instance per HUD widget.
    public class UIBillboard
    {
        public Vector2 anchor01;
        public float radiusPx;
        public float follow = 8f, parallax = 1f;
        public Vector3 rotEuler, vel;
    }
}
