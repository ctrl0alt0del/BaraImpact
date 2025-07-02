// typings/idtag-merge.d.ts
declare module CS {
  namespace Game.Infrastructure {
    interface IDTag {
      /** comes from UnityEngine.Component */
      readonly gameObject: UnityEngine.GameObject;
    }
  }
}
