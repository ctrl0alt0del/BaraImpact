using UnityEngine;
using Game.States;
using SEA.State;      // StateMachine
using SEA.Mutators;   // MutatorQueue

/// Keeps a reference to the input StateMachine and sets the start state.
[RequireComponent(typeof(StateMachine))]
public class InputStateMachineBootstrap : MonoBehaviour
{
  public static InputStateMachineBootstrap Instance { get; private set; }
  private StateMachine _sm;

  void Awake()
  {
    Debug.Log("InputStateMachineBootstrap.Awake()");
    Instance = this;
    _sm = GetComponent<StateMachine>();
    _sm.Goto(InputStates.Idle);   // start safely in Idle
  }
}
