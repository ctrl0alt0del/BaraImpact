// Assets/_Game/Scripts/Utils/AnimatorExtensions.cs
using System;
using UnityEngine;

public static class AnimatorExtensions
{
  /// Finds a Humanoid bone whose Transform's *name* matches the
  /// supplied string (case-insensitive); returns null if not found.
  public static Transform GetBoneTransformByName(this Animator animator, string name)
  {
    if (animator == null || string.IsNullOrEmpty(name))
      return null;

    foreach (HumanBodyBones bone in Enum.GetValues(typeof(HumanBodyBones)))
    {
      if (bone == HumanBodyBones.LastBone) continue;

      Transform t = animator.GetBoneTransform(bone);
      if (t != null && t.name.Equals(name, StringComparison.OrdinalIgnoreCase))
        return t;
    }
    return null;
  }
}
