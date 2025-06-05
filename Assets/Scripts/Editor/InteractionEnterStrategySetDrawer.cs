using UnityEngine;
using UnityEditor;
using System;
using System.Collections.Generic;
using System.Reflection;
using Game.AI.Interaction;

[CustomPropertyDrawer(typeof(InteractionEnterStrategySet))]
public class InteractionEnterStrategySetDrawer : PropertyDrawer
{
    private const float LabelWidth = 80f;
    private const float Padding = 4f;

    public override float GetPropertyHeight(SerializedProperty property, GUIContent label)
    {
        var strategiesProp = property.FindPropertyRelative("strategies");
        return (EditorGUIUtility.singleLineHeight + Padding) * strategiesProp.arraySize + Padding;
    }

    public override void OnGUI(Rect position, SerializedProperty property, GUIContent label)
    {
        var strategiesProp = property.FindPropertyRelative("strategies");

        if (strategiesProp.arraySize == 0)
        {
            property.serializedObject.Update();
            RebuildStrategyList(property, strategiesProp);
            property.serializedObject.ApplyModifiedProperties();
        }

        EditorGUI.BeginProperty(position, label, property);
        position.y += Padding;
        for (int i = 0; i < strategiesProp.arraySize; i++)
        {
            var element = strategiesProp.GetArrayElementAtIndex(i);
            var alignmentProp = element.FindPropertyRelative("alignment");
            var strategyProp = element.FindPropertyRelative("strategy");

            Rect rowRect = new Rect(position.x, position.y, position.width, EditorGUIUtility.singleLineHeight);

            // Label
            var labelRect = new Rect(rowRect.x, rowRect.y, LabelWidth, rowRect.height);
            EditorGUI.LabelField(labelRect, alignmentProp.enumDisplayNames[alignmentProp.enumValueIndex]);

            // Strategy field
            var strategyRect = new Rect(labelRect.xMax + 5, rowRect.y, rowRect.width - LabelWidth - 5, rowRect.height);
            EditorGUI.PropertyField(strategyRect, strategyProp, GUIContent.none, true);

            position.y += rowRect.height + Padding;
        }
        EditorGUI.EndProperty();
    }

    private void RebuildStrategyList(SerializedProperty root, SerializedProperty strategiesProp)
    {
        var enumValues = Enum.GetValues(typeof(ActorAlignment));
        strategiesProp.ClearArray();
        strategiesProp.arraySize = enumValues.Length;

        for (int i = 0; i < enumValues.Length; i++)
        {
            var element = strategiesProp.GetArrayElementAtIndex(i);
            var alignmentProp = element.FindPropertyRelative("alignment");
            alignmentProp.enumValueIndex = (int)(ActorAlignment)enumValues.GetValue(i);

            // leave strategyProp null — user assigns it
        }
    }
}
