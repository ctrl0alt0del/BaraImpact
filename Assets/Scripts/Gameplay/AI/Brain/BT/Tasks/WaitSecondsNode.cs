using CleverCrow.Fluid.BTs.Tasks;
using CleverCrow.Fluid.BTs.Tasks.Actions;
using UnityEngine;

namespace Game.AI.BT.Tasks
{
    public class WaitSecondsNode : ActionBase
    {
        private readonly System.Func<float> _getDuration;
        private float _elapsed;
        private float _targetDuration;

        public WaitSecondsNode(System.Func<float> getDuration)
        {
            _getDuration = getDuration;
        }

        protected override void OnStart()
        {
            _elapsed = 0f;
            _targetDuration = _getDuration.Invoke();
        }

        protected override TaskStatus OnUpdate()
        {
            _elapsed += Time.deltaTime;
            return _elapsed >= _targetDuration ? TaskStatus.Success : TaskStatus.Continue;
        }
    }
}