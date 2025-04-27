using System;
using System.Collections.Generic;
using UnityEngine;

namespace SEA.Events
{
  public static class GlobalEventBus
  {
    private static readonly Dictionary<Type, List<Delegate>> map = new();

    public static void Publish<T>(T evt) where T : struct
    {
      if (!map.TryGetValue(typeof(T), out var list)) return;
      for (int i = 0; i < list.Count; i++)
        ((Action<T>)list[i]).Invoke(evt);
    }

    public static void Subscribe<T>(Action<T> cb) where T : struct
    {
      var type = typeof(T);
      if (!map.TryGetValue(type, out var list))
        map[type] = list = new List<Delegate>();
      if (!list.Contains(cb)) list.Add(cb);
      Debug.Log($"GlobalEventBus.Subscribe() {type} {list.Count} subscribers");
    }

    public static void Unsubscribe<T>(Action<T> cb) where T : struct
    {
      if (map.TryGetValue(typeof(T), out var list))
        list.Remove(cb);
    }
  }
}
