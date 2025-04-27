using UnityEngine;
using SEA.Events;

namespace SEA.State
{
  public readonly struct EnterEvent
  {
    public readonly GameObject Target;
    public readonly string State;
    public EnterEvent(GameObject target, string state)
    { Target = target; State = state; }
  }
  public readonly struct ExitEvent
  {
    public readonly GameObject Target;
    public readonly string State;
    public ExitEvent(GameObject target, string state)
    { Target = target; State = state; }
  }

  public class StateMachine : MonoBehaviour
  {
    [SerializeField] private string initialState = "Test";
    public string Current { get; private set; }

    private void Awake()
    {
      Current = initialState;
      GlobalEventBus.Publish(new EnterEvent(gameObject, Current));
    }

    public void Goto(string next)
    {
      GlobalEventBus.Publish(new ExitEvent(gameObject, Current));
      Current = next;
      Debug.Log($"StateMachine.Goto({next})");
      GlobalEventBus.Publish(new EnterEvent(gameObject, Current));
    }
  }
}
