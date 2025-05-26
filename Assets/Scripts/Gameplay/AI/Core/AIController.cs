using UnityEngine;
using Game.AI.Core;
using Game.AI.Brain;
using Game.AI.Definitions;
using Game.AI.Senses;
using SEA.State; // We'll put BT/GOAP brain classes here

namespace Game.AI.Core
{
    [RequireComponent(typeof(StateMachine))] // Assumes SEA FSM exists
    public class AIController : MonoBehaviour
    {
        private AIContext _context;
        private IAIBrain _brain;
        private StateMachine _stateMachine;
        private AISensory _sensory;
        [SerializeField] private ScriptableAIBrainDefinition brainDefinition;

        public AIContext Context => _context;

        void Awake()
        {
            _stateMachine = GetComponent<StateMachine>();
            _sensory = GetComponent<AISensory>();

            _context = new AIContext
            {
                Owner = gameObject,
                CurrentHP = 100f, // Placeholder
                MaxHP = 100f,
            };

            _brain = brainDefinition?.CreateBrain(_context);
        }

        void Update()
        {
            _sensory?.ApplyPerceptions();
            _brain?.Tick();
        }
    }

    public enum AIType
    {
        BehaviorTree,
        GoapUtility
    }
}