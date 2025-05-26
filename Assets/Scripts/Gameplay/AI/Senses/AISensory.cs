using UnityEngine;
using System.Collections.Generic;
using Game.AI.Core;

namespace Game.AI.Senses
{
    public class AISensory : MonoBehaviour
    {
        [SerializeField] private List<ScriptableSensor> sensors;

        private AIContext _context;
        private AIController _controller;

        private void Awake()
        {
            _controller = GetComponent<AIController>();
        }

        private void Update()
        {
            foreach (var sensor in sensors)
                sensor.Tick(gameObject);
        }

        public void ApplyPerceptions()
        {
            // Lazy fetch context if not yet cached
            if (_context == null)
                _context = _controller.Context;

            if (_context == null)
            {
                Debug.LogWarning("AISensory: AIContext is still null!");
                return;
            }

            foreach (var sensor in sensors)
                sensor.Apply(gameObject, ref _context);
        }
    }
}