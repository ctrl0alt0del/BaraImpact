using UnityEngine;

public class BillboardToCamera : MonoBehaviour
{
    private Camera _cam;

    void Awake() => _cam = Camera.main;               // or assign explicitly
    void LateUpdate()
    {
        if (!_cam) return;

        // Point the forward axis **toward** the camera, keep 'up' world-up
        Vector3 dir = transform.position - _cam.transform.position;
        transform.rotation = Quaternion.LookRotation(dir, Vector3.up);
    }
}