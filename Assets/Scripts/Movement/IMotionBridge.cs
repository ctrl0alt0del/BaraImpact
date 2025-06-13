namespace Game.Movement
{
    public interface IMotionBridge
    {
        /// <param name="worldDir">Normalised direction in world space.</param>
        /// <param name="distance">Metres to cover immediately.</param>
        void BurstMove(UnityEngine.Vector3 worldDir, float distance, float duration);
    }
}
