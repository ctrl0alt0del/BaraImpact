// NpcHealthBarDriver.cs
// Spawns a world-space MicroBar prefab, keeps it facing the camera,
// and feeds it data from the H2V Attribute System.

using UnityEngine;
using H2V.GameplayAbilitySystem.AttributeSystem;
using H2V.GameplayAbilitySystem.AttributeSystem.Components;
using H2V.GameplayAbilitySystem.AttributeSystem.ScriptableObjects;
using Microlight.MicroBar;                      // ← MicroBar namespace

public class NpcHealthBarDriver : MonoBehaviour
{
    [Header("Attribute System")]
    [SerializeField] private AttributeSystemBehaviour attrSystem;
    [SerializeField] private AttributeSO currentHp;
    [SerializeField] private AttributeSO maxHp;

    [Header("Prefab & Placement")]
    [SerializeField] private GameObject barPrefab;     // world-space Canvas with MicroBar
    [SerializeField] private Vector3 worldOffset = new(0, 2.2f, 0);

    [Header("Visibility")]
    [SerializeField] private bool hideWhenFull = false;

    /* Internals */
    private MicroBar _bar;
    private Transform _barTf;
    private float _lastMax = -1f;
    private float _lastCur = -1f;
    private Camera _cam;

    /* ---------- life-cycle ---------- */

    void Awake()
    {
        if (!attrSystem) attrSystem = GetComponent<AttributeSystemBehaviour>();
        _cam = Camera.main;

        // Spawn bar
        var go = Instantiate(barPrefab, transform.position + worldOffset, Quaternion.identity);
        _barTf = go.transform;
        _bar = go.GetComponentInChildren<MicroBar>();

        // Subscribe to attribute changes
        attrSystem.PostAttributeChange += OnAttrChanged;

        // Initialise bar once (will pull real values)
        Refresh(forceInit: true);
    }

    void OnDestroy()
    {
        if (attrSystem) attrSystem.PostAttributeChange -= OnAttrChanged;
        if (_barTf) Destroy(_barTf.gameObject);
    }

    void LateUpdate()
    {
        if (!_barTf) return;

        // Keep bar above head
        _barTf.position = transform.position + worldOffset;

        // Billboard (rotation-only)
        if (_cam)
        {
            Vector3 dir = _barTf.position - _cam.transform.position;
            _barTf.rotation = Quaternion.LookRotation(dir, Vector3.up);
        }
    }

    /* ---------- GAS callback ---------- */

    private void OnAttrChanged(AttributeSO attr, AttributeValue oldV, AttributeValue newV)
    {
        if (attr == currentHp || attr == maxHp)
            Refresh();
    }

    /* ---------- main update ---------- */

    private void Refresh(bool forceInit = false)
    {
        if (!attrSystem.TryGetAttributeValue(currentHp, out var curVal) ||
            !attrSystem.TryGetAttributeValue(maxHp, out var maxVal))
            return;

        float cur = curVal.CurrentValue;
        float cap = maxVal.CurrentValue;

        /* --- 1) initialise MicroBar once ----------------------------------- */
        if (!_bar || (!_bar.gameObject.activeSelf && !forceInit)) return;

        if (forceInit || !_bar.MaxValue.Equals(cap))
        {
            _bar.Initialize(cap);                     // sets Current = Max
            _bar.SetNewMaxHP(cap, skipAnimation: true);
            _lastMax = cap;
            _lastCur = cap;
        }

        /* --- 2) propagate changes ------------------------------------------ */
        if (!cap.Equals(_lastMax))
        {
            // MaxHP changed (buff/debuff)
            _bar.SetNewMaxHP(cap, skipAnimation: false);
            _lastMax = cap;
        }

        if (!cur.Equals(_lastCur))
        {
            // Determine heal vs damage animation
            UpdateAnim anim = cur < _lastCur ? UpdateAnim.Damage : UpdateAnim.Heal;
            _bar.UpdateBar(cur, skipAnimation: false, updateType: anim);
            _lastCur = cur;
        }

        /* --- 3) visibility toggle ------------------------------------------ */
        if (hideWhenFull)
            _barTf.gameObject.SetActive(cur < cap);
    }
}
