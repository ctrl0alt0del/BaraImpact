using UnityEditor;
using UnityEngine;
using Game.AI.Interaction;

public static class CreateInteractionMenu
{
    [MenuItem("GameObject/AI/Interaction Area", false, 10)]
    public static void CreateInteractionArea(MenuCommand menuCommand)
    {
        GameObject go = new GameObject("InteractionArea");
        go.AddComponent<InteractionArea>();

        GameObjectUtility.SetParentAndAlign(go, menuCommand.context as GameObject);
        Undo.RegisterCreatedObjectUndo(go, "Create InteractionArea");
        Selection.activeObject = go;
    }

    [MenuItem("GameObject/AI/Interaction Point", false, 11)]
    public static void CreateInteractionPoint(MenuCommand menuCommand)
    {
        GameObject go = new GameObject("InteractionPoint");

        var col = go.AddComponent<SphereCollider>();
        col.isTrigger = true;

        var rb = go.AddComponent<Rigidbody>();
        rb.isKinematic = true;
        rb.useGravity = false;

        go.AddComponent<InteractionPoint>();

        GameObjectUtility.SetParentAndAlign(go, menuCommand.context as GameObject);
        Undo.RegisterCreatedObjectUndo(go, "Create InteractionPoint");
        Selection.activeObject = go;
    }
}