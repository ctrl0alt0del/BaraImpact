using System.Collections.Generic;
using UnityEngine;
using SEA.State;     // for StateMachine
using SEA.Events;

namespace SEA.Mutators
{
  public static class MutatorQueue
  {
    private static readonly MiniHeap<StateMutator> prio =
        new();
    private static readonly Queue<StateMutator> fifo = new();

    /// enqueue a mutator (priority ≥1 goes to priority queue)
    public static void Enqueue(StateMutator m)
    {
      if (m.Priority > 0) prio.Enqueue(m, -m.Priority); // min-heap
      else fifo.Enqueue(m);
    }

    /// called every frame from MutatorProcessor
    public static void Tick()
    {
      StateMutator m;
      if (prio.Count > 0) m = prio.Dequeue();
      else if (fifo.Count > 0) m = fifo.Dequeue();
      else return; // nothing to do

      if (m.Target == null) return;

      var sm = m.Target.GetComponent<StateMachine>();
      if (sm == null) return;

      if (m.FromState != null && sm.Current != m.FromState) return;

      sm.Goto(m.ToState);              // fires Exit / Enter events
    }
  }
}
