using UnityEngine;
using UnityEngine.InputSystem;
using Unity.Cinemachine;

[RequireComponent(typeof(CinemachineInputAxisController))]
public class DragLookToggle : MonoBehaviour
{
  [Tooltip("Mouse / game‑pad button that gates camera rotation")]
  public InputActionReference dragButton;   // bind to <Mouse>/leftButton

  private CinemachineInputAxisController axisCtrl;

  void OnEnable()
  {
    axisCtrl = GetComponent<CinemachineInputAxisController>();

    dragButton.action.Enable();
  }
  void OnDisable() => dragButton.action.Disable();

  void Update()
  {
    bool draggingDesktop = dragButton.action.IsPressed();
    bool draggingMobile = Touchscreen.current != null &&
                           Touchscreen.current.primaryTouch.press.isPressed;

    // Enable axis input only while dragging / holding button
    axisCtrl.enabled = draggingDesktop || draggingMobile;
  }
}
