using System.Collections.Generic;

namespace SEA.Mutators
{
  internal class MiniHeap<T>
  {
    private readonly List<(T item, int prio)> list = new();

    public int Count => list.Count;

    public void Enqueue(T item, int prio)
    {
      list.Add((item, prio));
      int c = list.Count - 1;
      while (c > 0)
      {
        int p = (c - 1) >> 1;
        if (list[c].prio <= list[p].prio) break;
        (list[c], list[p]) = (list[p], list[c]);
        c = p;
      }
    }

    public T Dequeue()
    {
      var root = list[0].item;
      int last = list.Count - 1;
      list[0] = list[last];
      list.RemoveAt(last);
      int p = 0;
      while (true)
      {
        int c1 = (p << 1) + 1;
        if (c1 >= list.Count) break;
        int c2 = c1 + 1;
        int swap = (c2 < list.Count && list[c2].prio > list[c1].prio) ? c2 : c1;
        if (list[p].prio >= list[swap].prio) break;
        (list[p], list[swap]) = (list[swap], list[p]);
        p = swap;
      }
      return root;
    }
  }
}
