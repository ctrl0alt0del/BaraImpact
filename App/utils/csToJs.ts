// @/utils/csToJs.ts
type IEnumerable = CS.System.Collections.IEnumerable;

/**
 * Converts a C# IEnumerable into a plain JavaScript array
 * so you can safely call .map / .filter / .reduce.
 *
 * @example
 *   const enemies = csToJsArray<IDTag>(IDTag.GetByClass(ClassKind.Enemy));
 */
export function csToJsArray<T>(source: IEnumerable): T[] {
  const out: T[] = [];
  if (!source) return out;

  // IEnumerator dance (IEnumerable.GetEnumerator → MoveNext / Current)
  const it = source.GetEnumerator() as any;
  while (it.MoveNext()) out.push(it.Current as T);
  return out;
}

/* ------------------------------------------------------------------
 * Converts a System.Threading.Tasks.Task (or Task$1<T>) returned from
 * Puerts into a native JavaScript Promise<T>.
 * ------------------------------------------------------------------ */
export function taskToPromise<T>(
  task: CS.System.Threading.Tasks.Task$1<T>
): Promise<T> {
  return new Promise<T>((resolve, reject) => {
    const unityScheduler =
      CS.System.Threading.Tasks.TaskScheduler.FromCurrentSynchronizationContext();

    task.ContinueWith(
      (t) => {
        if (t.IsCanceled) {
          reject(new Error("Task cancelled"));
        } else if (t.IsFaulted) {
          reject(t.Exception?.InnerException ?? new Error("Task faulted"));
        } else {
          resolve(t.Result);
        }
      },
      // ▸ run right here if we’re already on main,
      // ▸ otherwise schedule on Unity main thread
      void 0,
      CS.System.Threading.CancellationToken.None,
      CS.System.Threading.Tasks.TaskContinuationOptions.ExecuteSynchronously,
      unityScheduler
    );
  });
}
