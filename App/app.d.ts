
declare namespace CS {
    // const __keep_incompatibility: unique symbol;
    // 
    // interface $Ref<T> {
    //     value: T
    // }
    // namespace System {
    //     interface Array$1<T> extends System.Array {
    //         get_Item(index: number):T;
    //         
    //         set_Item(index: number, value: T):void;
    //     }
    // }
    // type $Task<T> = System.Threading.Tasks.Task$1<T>
    namespace UnityEngine {
        class AssetReferenceUIRestriction extends System.Attribute implements System.Runtime.InteropServices._Attribute
        {
            protected [__keep_incompatibility]: never;
            public ValidateAsset ($obj: UnityEngine.Object) : boolean
            public ValidateAsset ($path: string) : boolean
            public constructor ()
        }
        class AssetReferenceUILabelRestriction extends UnityEngine.AssetReferenceUIRestriction implements System.Runtime.InteropServices._Attribute
        {
            protected [__keep_incompatibility]: never;
            public m_AllowedLabels : System.Array$1<string>
            public m_CachedToString : string
            public constructor (...allowedLabels: string[])
            public constructor ()
        }
    }
        class AbilityComponent extends UnityEngine.MonoBehaviour
        {
            protected [__keep_incompatibility]: never;
            public TryGetAbility ($slot: Game.Abilities.AbilitySlot, $ability: $Ref<IGameplayAbilityData>) : boolean
            public EnqueueAbility ($ability: IGameplayAbilityData) : boolean
            public constructor ()
        }
        interface IGameplayAbilityData
        {
            Slot : Game.Abilities.AbilitySlot
            Priority : Game.Abilities.AbilityPriority
            WindupTime : number
            ActiveTime : number
            RecoverTime : number
            TotalTime : number
            CanPay ($asc: H2V.GameplayAbilitySystem.AbilitySystem.Components.AbilitySystemBehaviour) : boolean
            PayCost ($asc: H2V.GameplayAbilitySystem.AbilitySystem.Components.AbilitySystemBehaviour) : void
        }
        class AbilityQueue extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public get HasPending(): boolean;
            public get Active(): IGameplayAbilityData;
            public TryEnqueue ($ability: IGameplayAbilityData) : boolean
            public Dequeue () : IGameplayAbilityData
            public Clear () : void
            public constructor ()
        }
        class ChannelledAbilitySO$1<TSpec> extends Game.Abilities.ActiveAbilitySO$1<TSpec> implements H2V.GameplayAbilitySystem.AbilitySystem.ScriptableObjects.IAbilityCreator$1<H2V.GameplayAbilitySystem.AbilitySystem.AbilitySpec>, H2V.GameplayAbilitySystem.AbilitySystem.ScriptableObjects.IAbilityCreator$1<TSpec>, IGameplayAbilityData, Game.Abilities.IChannelledAbilityData, Game.Abilities.IStageVariantProvider
        {
            protected [__keep_incompatibility]: never;
            public get OnActiveEnd(): System.Action$1<UnityEngine.GameObject>;
            public OnWindupStart ($owner: UnityEngine.GameObject, $asc: H2V.GameplayAbilitySystem.AbilitySystem.Components.AbilitySystemBehaviour) : void
            public OnActiveStart ($owner: UnityEngine.GameObject, $asc: H2V.GameplayAbilitySystem.AbilitySystem.Components.AbilitySystemBehaviour) : void
            public OnActiveTick ($owner: UnityEngine.GameObject, $dt: number) : void
            public IsStillChannelled ($owner: UnityEngine.GameObject) : boolean
        }
        interface IAutoLockDelivery
        {
            LockRadius : number
            LockHalfAngle : number
            TurnRate : number
            TargetRoles : System.Array$1<ActorAlignment>
        }
        class BasicAttackAbilitySO extends Game.Abilities.BaseDeliverableAbilitySO$1<H2V.GameplayAbilitySystem.AbilitySystem.AbilitySpec> implements H2V.GameplayAbilitySystem.AbilitySystem.ScriptableObjects.IAbilityCreator$1<H2V.GameplayAbilitySystem.AbilitySystem.AbilitySpec>, Game.Abilities.IAbilityDeliveryData, IAutoLockDelivery, IGameplayAbilityData, Game.Abilities.IHasSpawnOrigin, Game.Abilities.IRangeVfxProvider, Game.Abilities.IStageVariantProvider
        {
            protected [__keep_incompatibility]: never;
            public get Slot(): Game.Abilities.AbilitySlot;
            public get Priority(): Game.Abilities.AbilityPriority;
            public get AttackPrefab(): UnityEngine.GameObject;
            public get Kind(): Game.Combat.AttackKind;
            public get Range(): number;
            public get Speed(): number;
            public get HitMask(): UnityEngine.LayerMask;
            public get CollisionRadius(): number;
            public get TargetRoles(): System.Array$1<ActorAlignment>;
            public get LockRadius(): number;
            public get LockHalfAngle(): number;
            public get TurnRate(): number;
            public get WindupTime(): number;
            public get ActiveTime(): number;
            public get RecoverTime(): number;
            public get TotalTime(): number;
            public get SpawnBone(): string;
            public get SpawnOffset(): UnityEngine.Vector3;
            public get ProjectileSpec(): Game.Vfx.VfxSpawnSpec;
            public get ImpactSpec(): Game.Vfx.VfxSpawnSpec;
            public get VfxPrefab(): Game.Vfx.VfxSpawnSpec;
            public get WindupVariants(): Game.Vfx.CastVfxVariantTable;
            public get ActiveVariants(): Game.Vfx.CastVfxVariantTable;
            public get RecoverVariants(): Game.Vfx.CastVfxVariantTable;
            public constructor ()
            public CanPay ($asc: H2V.GameplayAbilitySystem.AbilitySystem.Components.AbilitySystemBehaviour) : boolean
            public PayCost ($asc: H2V.GameplayAbilitySystem.AbilitySystem.Components.AbilitySystemBehaviour) : void
        }
        class SprintAbilitySO extends ChannelledAbilitySO$1<H2V.GameplayAbilitySystem.AbilitySystem.AbilitySpec> implements H2V.GameplayAbilitySystem.AbilitySystem.ScriptableObjects.IAbilityCreator$1<H2V.GameplayAbilitySystem.AbilitySystem.AbilitySpec>, IGameplayAbilityData, Game.Abilities.IChannelledAbilityData, Game.Abilities.IStageVariantProvider
        {
            protected [__keep_incompatibility]: never;
            public get Slot(): Game.Abilities.AbilitySlot;
            public get Priority(): Game.Abilities.AbilityPriority;
            public get OnActiveEnd(): System.Action$1<UnityEngine.GameObject>;
            public get WindupTime(): number;
            public get ActiveTime(): number;
            public get RecoverTime(): number;
            public get TotalTime(): number;
            public get WindupVariants(): Game.Vfx.CastVfxVariantTable;
            public get ActiveVariants(): Game.Vfx.CastVfxVariantTable;
            public get RecoverVariants(): Game.Vfx.CastVfxVariantTable;
            public constructor ()
            public CanPay ($asc: H2V.GameplayAbilitySystem.AbilitySystem.Components.AbilitySystemBehaviour) : boolean
            public PayCost ($asc: H2V.GameplayAbilitySystem.AbilitySystem.Components.AbilitySystemBehaviour) : void
            public OnWindupStart ($owner: UnityEngine.GameObject, $asc: H2V.GameplayAbilitySystem.AbilitySystem.Components.AbilitySystemBehaviour) : void
            public OnActiveStart ($owner: UnityEngine.GameObject, $asc: H2V.GameplayAbilitySystem.AbilitySystem.Components.AbilitySystemBehaviour) : void
            public OnActiveTick ($owner: UnityEngine.GameObject, $dt: number) : void
            public IsStillChannelled ($owner: UnityEngine.GameObject) : boolean
        }
        enum ActorAlignment
        { Player = 0, Friendly = 1, Neutral = 2, Ally = 3, Enemy = 4 }
        class CombatBTBlock extends Game.AI.BT.ScriptableBTBlock
        {
            protected [__keep_incompatibility]: never;
            public constructor ()
        }
        class TargetMemorySensor extends Game.AI.Senses.ScriptableSensor
        {
            protected [__keep_incompatibility]: never;
            public memoryDuration : number
            public constructor ()
        }
        class VisionScriptableSensor extends Game.AI.Senses.ScriptableSensor
        {
            protected [__keep_incompatibility]: never;
            public visionRange : number
            public fovAngle : number
            public checkObstruction : boolean
            public reactToAlignments : System.Collections.Generic.List$1<ActorAlignment>
            public reactToFactions : System.Collections.Generic.List$1<ActorFaction>
            public constructor ()
        }
        enum ActorFaction
        { PlayerFaction = 0, EnemyGeneralFaction = 1 }
        class AttributeBasedMagnitudeSO extends H2V.GameplayAbilitySystem.EffectSystem.ScriptableObjects.ModifierComputationSO
        {
            protected [__keep_incompatibility]: never;
            public constructor ()
        }
        class BasicDerivedAttributeCalculator extends System.Object implements H2V.GameplayAbilitySystem.AttributeSystem.IAttributeValueCalculator
        {
            protected [__keep_incompatibility]: never;
            public Calculate ($self: H2V.GameplayAbilitySystem.AttributeSystem.AttributeValue, $sys: H2V.GameplayAbilitySystem.AttributeSystem.Components.AttributeSystemBehaviour) : H2V.GameplayAbilitySystem.AttributeSystem.AttributeValue
            public constructor ()
            public Calculate ($baseValue: H2V.GameplayAbilitySystem.AttributeSystem.AttributeValue, $attributeSystem: H2V.GameplayAbilitySystem.AttributeSystem.Components.AttributeSystemBehaviour) : H2V.GameplayAbilitySystem.AttributeSystem.AttributeValue
        }
        class ClampToAttributeCalculator extends System.Object implements H2V.GameplayAbilitySystem.AttributeSystem.IAttributeValueCalculator
        {
            protected [__keep_incompatibility]: never;
            public Calculate ($self: H2V.GameplayAbilitySystem.AttributeSystem.AttributeValue, $sys: H2V.GameplayAbilitySystem.AttributeSystem.Components.AttributeSystemBehaviour) : H2V.GameplayAbilitySystem.AttributeSystem.AttributeValue
            public constructor ()
            public Calculate ($baseValue: H2V.GameplayAbilitySystem.AttributeSystem.AttributeValue, $attributeSystem: H2V.GameplayAbilitySystem.AttributeSystem.Components.AttributeSystemBehaviour) : H2V.GameplayAbilitySystem.AttributeSystem.AttributeValue
        }
        interface ITargetable
        {
            IsDestroyed : boolean
            AimPoint : UnityEngine.Transform
        }
        class DirectEffectApplier extends UnityEngine.MonoBehaviour implements IEffectApplier
        {
            protected [__keep_incompatibility]: never;
            public Apply ($effectSO: H2V.GameplayAbilitySystem.EffectSystem.ScriptableObjects.GameplayEffectSO, $target?: H2V.GameplayAbilitySystem.Components.AbilitySystemComponent) : H2V.GameplayAbilitySystem.EffectSystem.GameplayEffectSpec
            public Remove ($spec: H2V.GameplayAbilitySystem.EffectSystem.GameplayEffectSpec) : void
            public constructor ()
        }
        interface IEffectApplier
        {
            Apply ($effectSO: H2V.GameplayAbilitySystem.EffectSystem.ScriptableObjects.GameplayEffectSO, $target?: H2V.GameplayAbilitySystem.Components.AbilitySystemComponent) : H2V.GameplayAbilitySystem.EffectSystem.GameplayEffectSpec
            Remove ($spec: H2V.GameplayAbilitySystem.EffectSystem.GameplayEffectSpec) : void
        }
        class InputStateMachineBootstrap extends UnityEngine.MonoBehaviour
        {
            protected [__keep_incompatibility]: never;
            public static get Instance(): InputStateMachineBootstrap;
            public constructor ()
        }
        class ActorIdentity extends UnityEngine.MonoBehaviour implements ITargetable
        {
            protected [__keep_incompatibility]: never;
            public get Alignment(): ActorAlignment;
            public get Faction(): ActorFaction;
            public get IsDestroyed(): boolean;
            public get AimPoint(): UnityEngine.Transform;
            public Is ($desired: ActorAlignment) : boolean
            public Is ($desired: ActorFaction) : boolean
            public constructor ()
        }
        class NpcHealthBarDriver extends UnityEngine.MonoBehaviour
        {
            protected [__keep_incompatibility]: never;
            public constructor ()
        }
        class MutatorQueueRunner extends UnityEngine.MonoBehaviour
        {
            protected [__keep_incompatibility]: never;
            public constructor ()
        }
        class WallClimber extends UnityEngine.MonoBehaviour
        {
            protected [__keep_incompatibility]: never;
            public minWallAngle : number
            public nonClimbableMask : UnityEngine.LayerMask
            public grabDistance : number
            public wallGraceTime : number
            public animator : UnityEngine.Animator
            public input : UnityEngine.InputSystem.PlayerInput
            public movementScript : StarterAssets.ThirdPersonController
            public constructor ()
        }
        class AddrTest extends System.Object
        {
            protected [__keep_incompatibility]: never;
        }
        class AnimatorExtensions extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public static GetBoneTransformByName ($animator: UnityEngine.Animator, $name: string) : UnityEngine.Transform
        }
        class BillboardToCamera extends UnityEngine.MonoBehaviour
        {
            protected [__keep_incompatibility]: never;
            public constructor ()
        }
        class TargetingUtil extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public static Acquire ($priority: System.Array$1<ActorAlignment>, $origin: UnityEngine.Vector3, $forward: UnityEngine.Vector3, $radius: number, $halfAngle: number, $mask: UnityEngine.LayerMask) : UnityEngine.Transform
        }
        class UIAssetLoader extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public static Load ($key: string) : System.Threading.Tasks.Task$1<UnityEngine.Object>
            public static Release ($key: string) : void
        }
        class GameInputAssets extends System.Object implements UnityEngine.InputSystem.IInputActionCollection, UnityEngine.InputSystem.IInputActionCollection2, System.Collections.Generic.IEnumerable$1<UnityEngine.InputSystem.InputAction>, System.Collections.IEnumerable, System.IDisposable
        {
            protected [__keep_incompatibility]: never;
            public get asset(): UnityEngine.InputSystem.InputActionAsset;
            public get bindingMask(): UnityEngine.InputSystem.InputBinding | null;
            public set bindingMask(value: UnityEngine.InputSystem.InputBinding | null);
            public get devices(): UnityEngine.InputSystem.Utilities.ReadOnlyArray$1<UnityEngine.InputSystem.InputDevice> | null;
            public set devices(value: UnityEngine.InputSystem.Utilities.ReadOnlyArray$1<UnityEngine.InputSystem.InputDevice> | null);
            public get controlSchemes(): UnityEngine.InputSystem.Utilities.ReadOnlyArray$1<UnityEngine.InputSystem.InputControlScheme>;
            public get bindings(): System.Collections.Generic.IEnumerable$1<UnityEngine.InputSystem.InputBinding>;
            public get Player(): GameInputAssets.PlayerActions;
            public get KeyboardMouseScheme(): UnityEngine.InputSystem.InputControlScheme;
            public get GamepadScheme(): UnityEngine.InputSystem.InputControlScheme;
            public get XboxControllerScheme(): UnityEngine.InputSystem.InputControlScheme;
            public get PS4ControllerScheme(): UnityEngine.InputSystem.InputControlScheme;
            public Dispose () : void
            public Contains ($action: UnityEngine.InputSystem.InputAction) : boolean
            public GetEnumerator () : System.Collections.Generic.IEnumerator$1<UnityEngine.InputSystem.InputAction>
            public Enable () : void
            public Disable () : void
            public FindAction ($actionNameOrId: string, $throwIfNotFound?: boolean) : UnityEngine.InputSystem.InputAction
            public FindBinding ($bindingMask: UnityEngine.InputSystem.InputBinding, $action: $Ref<UnityEngine.InputSystem.InputAction>) : number
            public constructor ()
        }
        class MobileDisableAutoSwitchControls extends UnityEngine.MonoBehaviour
        {
            protected [__keep_incompatibility]: never;
            public constructor ()
        }
        class UIVirtualButton extends UnityEngine.MonoBehaviour implements UnityEngine.EventSystems.IPointerClickHandler, UnityEngine.EventSystems.IEventSystemHandler, UnityEngine.EventSystems.IPointerDownHandler, UnityEngine.EventSystems.IPointerUpHandler
        {
            protected [__keep_incompatibility]: never;
            public buttonStateOutputEvent : UIVirtualButton.BoolEvent
            public buttonClickOutputEvent : UIVirtualButton.Event
            public OnPointerDown ($eventData: UnityEngine.EventSystems.PointerEventData) : void
            public OnPointerUp ($eventData: UnityEngine.EventSystems.PointerEventData) : void
            public OnPointerClick ($eventData: UnityEngine.EventSystems.PointerEventData) : void
            public constructor ()
        }
        class UIVirtualJoystick extends UnityEngine.MonoBehaviour implements UnityEngine.EventSystems.IDragHandler, UnityEngine.EventSystems.IEventSystemHandler, UnityEngine.EventSystems.IPointerDownHandler, UnityEngine.EventSystems.IPointerUpHandler
        {
            protected [__keep_incompatibility]: never;
            public containerRect : UnityEngine.RectTransform
            public handleRect : UnityEngine.RectTransform
            public joystickRange : number
            public magnitudeMultiplier : number
            public invertXOutputValue : boolean
            public invertYOutputValue : boolean
            public joystickOutputEvent : UIVirtualJoystick.Event
            public OnPointerDown ($eventData: UnityEngine.EventSystems.PointerEventData) : void
            public OnDrag ($eventData: UnityEngine.EventSystems.PointerEventData) : void
            public OnPointerUp ($eventData: UnityEngine.EventSystems.PointerEventData) : void
            public constructor ()
        }
        class UIVirtualTouchZone extends UnityEngine.MonoBehaviour implements UnityEngine.EventSystems.IDragHandler, UnityEngine.EventSystems.IEventSystemHandler, UnityEngine.EventSystems.IPointerDownHandler, UnityEngine.EventSystems.IPointerUpHandler
        {
            protected [__keep_incompatibility]: never;
            public containerRect : UnityEngine.RectTransform
            public handleRect : UnityEngine.RectTransform
            public clampToMagnitude : boolean
            public magnitudeMultiplier : number
            public invertXOutputValue : boolean
            public invertYOutputValue : boolean
            public touchZoneOutputEvent : UIVirtualTouchZone.Event
            public OnPointerDown ($eventData: UnityEngine.EventSystems.PointerEventData) : void
            public OnDrag ($eventData: UnityEngine.EventSystems.PointerEventData) : void
            public OnPointerUp ($eventData: UnityEngine.EventSystems.PointerEventData) : void
            public constructor ()
        }
        class BasicRigidBodyPush extends UnityEngine.MonoBehaviour
        {
            protected [__keep_incompatibility]: never;
            public pushLayers : UnityEngine.LayerMask
            public canPush : boolean
            public strength : number
            public constructor ()
        }
        class Readme extends UnityEngine.ScriptableObject
        {
            protected [__keep_incompatibility]: never;
            public icon : UnityEngine.Texture2D
            public title : string
            public sections : System.Array$1<Readme.Section>
            public loadedLayout : boolean
            public constructor ()
        }
        class ResetPosition extends UnityEngine.MonoBehaviour
        {
            protected [__keep_incompatibility]: never;
            public distanceToReset : number
            public constructor ()
        }
        class Demo_FreeCam extends UnityEngine.MonoBehaviour
        {
            protected [__keep_incompatibility]: never;
            public constructor ()
        }
        class Demo_TurningAround extends UnityEngine.MonoBehaviour
        {
            protected [__keep_incompatibility]: never;
            public rotSpeed_X : number
            public rotSpeed_Y : number
            public rotSpeed_Z : number
            public globalSpeed : number
            public constructor ()
        }
        class PackedPlayModeBuildLogs extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public get RuntimeBuildLogs(): System.Collections.Generic.List$1<PackedPlayModeBuildLogs.RuntimeBuildLog>;
            public set RuntimeBuildLogs(value: System.Collections.Generic.List$1<PackedPlayModeBuildLogs.RuntimeBuildLog>);
            public constructor ()
        }
        namespace Game.Abilities {
        enum AbilitySlot
        { BasicAttack = 0, Skill = 1, Burst = 2, Sprint = 3 }
        class ActiveAbilitySO$1<TSpec> extends H2V.GameplayAbilitySystem.AbilitySystem.ScriptableObjects.AbilitySO$1<TSpec> implements H2V.GameplayAbilitySystem.AbilitySystem.ScriptableObjects.IAbilityCreator$1<H2V.GameplayAbilitySystem.AbilitySystem.AbilitySpec>, H2V.GameplayAbilitySystem.AbilitySystem.ScriptableObjects.IAbilityCreator$1<TSpec>, IGameplayAbilityData, Game.Abilities.IStageVariantProvider
        {
            protected [__keep_incompatibility]: never;
            public get WindupVariants(): Game.Vfx.CastVfxVariantTable;
            public get ActiveVariants(): Game.Vfx.CastVfxVariantTable;
            public get RecoverVariants(): Game.Vfx.CastVfxVariantTable;
            public get Slot(): Game.Abilities.AbilitySlot;
            public get Priority(): Game.Abilities.AbilityPriority;
            public get WindupTime(): number;
            public get ActiveTime(): number;
            public get RecoverTime(): number;
            public get TotalTime(): number;
            public CanPay ($asc: H2V.GameplayAbilitySystem.AbilitySystem.Components.AbilitySystemBehaviour) : boolean
            public PayCost ($asc: H2V.GameplayAbilitySystem.AbilitySystem.Components.AbilitySystemBehaviour) : void
        }
        interface IStageVariantProvider
        {
            WindupVariants : Game.Vfx.CastVfxVariantTable
            ActiveVariants : Game.Vfx.CastVfxVariantTable
            RecoverVariants : Game.Vfx.CastVfxVariantTable
        }
        interface IChannelledAbilityData extends IGameplayAbilityData
        {
            OnActiveEnd : System.Action$1<UnityEngine.GameObject>
            Slot : Game.Abilities.AbilitySlot
            Priority : Game.Abilities.AbilityPriority
            WindupTime : number
            ActiveTime : number
            RecoverTime : number
            TotalTime : number
            OnWindupStart ($owner: UnityEngine.GameObject, $asc: H2V.GameplayAbilitySystem.AbilitySystem.Components.AbilitySystemBehaviour) : void
            OnActiveStart ($owner: UnityEngine.GameObject, $asc: H2V.GameplayAbilitySystem.AbilitySystem.Components.AbilitySystemBehaviour) : void
            OnActiveTick ($owner: UnityEngine.GameObject, $dt: number) : void
            IsStillChannelled ($owner: UnityEngine.GameObject) : boolean
            CanPay ($asc: H2V.GameplayAbilitySystem.AbilitySystem.Components.AbilitySystemBehaviour) : boolean
            PayCost ($asc: H2V.GameplayAbilitySystem.AbilitySystem.Components.AbilitySystemBehaviour) : void
        }
        class BaseDeliverableAbilitySO$1<TSpec> extends Game.Abilities.ActiveAbilitySO$1<TSpec> implements H2V.GameplayAbilitySystem.AbilitySystem.ScriptableObjects.IAbilityCreator$1<H2V.GameplayAbilitySystem.AbilitySystem.AbilitySpec>, H2V.GameplayAbilitySystem.AbilitySystem.ScriptableObjects.IAbilityCreator$1<TSpec>, Game.Abilities.IAbilityDeliveryData, IAutoLockDelivery, IGameplayAbilityData, Game.Abilities.IHasSpawnOrigin, Game.Abilities.IRangeVfxProvider, Game.Abilities.IStageVariantProvider
        {
            protected [__keep_incompatibility]: never;
            public get AttackPrefab(): UnityEngine.GameObject;
            public get Kind(): Game.Combat.AttackKind;
            public get Range(): number;
            public get Speed(): number;
            public get HitMask(): UnityEngine.LayerMask;
            public get CollisionRadius(): number;
            public get ProjectileSpec(): Game.Vfx.VfxSpawnSpec;
            public get ImpactSpec(): Game.Vfx.VfxSpawnSpec;
            public get SpawnBone(): string;
            public get SpawnOffset(): UnityEngine.Vector3;
            public get LockRadius(): number;
            public get LockHalfAngle(): number;
            public get TurnRate(): number;
            public get TargetRoles(): System.Array$1<ActorAlignment>;
            public get VfxPrefab(): Game.Vfx.VfxSpawnSpec;
        }
        interface IAbilityDeliveryData
        {
            AttackPrefab : UnityEngine.GameObject
            Kind : Game.Combat.AttackKind
            Range : number
            Speed : number
            HitMask : UnityEngine.LayerMask
            CollisionRadius : number
            TargetRoles : System.Array$1<ActorAlignment>
        }
        interface IHasSpawnOrigin
        {
            SpawnBone : string
            SpawnOffset : UnityEngine.Vector3
        }
        interface IRangeVfxProvider
        {
            ProjectileSpec : Game.Vfx.VfxSpawnSpec
            ImpactSpec : Game.Vfx.VfxSpawnSpec
            VfxPrefab : Game.Vfx.VfxSpawnSpec
        }
        enum AbilityPriority
        { Low = 0, Medium = 1, High = 2, Lock = 3 }
        class AbilityPhaseRunner extends UnityEngine.MonoBehaviour
        {
            protected [__keep_incompatibility]: never;
            public get Current(): IGameplayAbilityData;
            public Arm ($ability: IGameplayAbilityData) : void
            public constructor ()
        }
        class AbilityStrategyFactory extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public static Create ($a: IGameplayAbilityData) : Game.Abilities.IAbilityExecutionStrategy
        }
        interface IAbilityExecutionStrategy
        {
            BeginWindup ($owner: UnityEngine.GameObject, $data: IGameplayAbilityData) : void
            BeginActive ($owner: UnityEngine.GameObject, $data: IGameplayAbilityData) : void
            Tick ($dt: number) : boolean
            End () : void
        }
        class BaseExecutionStrategy extends System.Object implements Game.Abilities.IAbilityExecutionStrategy
        {
            protected [__keep_incompatibility]: never;
            public BeginWindup ($owner: UnityEngine.GameObject, $data: IGameplayAbilityData) : void
            public BeginActive ($o: UnityEngine.GameObject, $d: IGameplayAbilityData) : void
            public Tick ($dt: number) : boolean
            public End () : void
            public BeginActive ($owner: UnityEngine.GameObject, $data: IGameplayAbilityData) : void
        }
        class ChannelledStrategy extends Game.Abilities.BaseExecutionStrategy implements Game.Abilities.IAbilityExecutionStrategy
        {
            protected [__keep_incompatibility]: never;
            public constructor ($ch: Game.Abilities.IChannelledAbilityData)
        }
        class DeliveryExecutionStrategy extends Game.Abilities.BaseExecutionStrategy implements Game.Abilities.IAbilityExecutionStrategy
        {
            protected [__keep_incompatibility]: never;
        }
        class DiscreteDeliveryStrategy extends Game.Abilities.DeliveryExecutionStrategy implements Game.Abilities.IAbilityExecutionStrategy
        {
            protected [__keep_incompatibility]: never;
            public constructor ()
        }
        class DiscreteStrategy extends Game.Abilities.BaseExecutionStrategy implements Game.Abilities.IAbilityExecutionStrategy
        {
            protected [__keep_incompatibility]: never;
            public constructor ()
        }
        class JogPassiveSpec extends H2V.GameplayAbilitySystem.AbilitySystem.AbilitySpec
        {
            protected [__keep_incompatibility]: never;
            public get JogMotionEffect(): H2V.GameplayAbilitySystem.EffectSystem.ScriptableObjects.GameplayEffectSO;
            public set JogMotionEffect(value: H2V.GameplayAbilitySystem.EffectSystem.ScriptableObjects.GameplayEffectSO);
            public constructor ()
        }
        class JogPassiveSO extends H2V.GameplayAbilitySystem.AbilitySystem.ScriptableObjects.AbilitySO$1<Game.Abilities.JogPassiveSpec> implements H2V.GameplayAbilitySystem.AbilitySystem.ScriptableObjects.IAbilityCreator$1<H2V.GameplayAbilitySystem.AbilitySystem.AbilitySpec>, H2V.GameplayAbilitySystem.AbilitySystem.ScriptableObjects.IAbilityCreator$1<Game.Abilities.JogPassiveSpec>
        {
            protected [__keep_incompatibility]: never;
            public constructor ()
        }
        enum AbilityStage
        { Windup = 0, Active = 1, Recover = 2 }
        interface IVfxVariantProvider
        {
            CastVariants : Game.Vfx.CastVfxVariantTable
        }
        class StageVariantUtil extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public static PlayStageVariant ($provider: Game.Abilities.IStageVariantProvider, $stage: Game.Abilities.AbilityStage, $anim: UnityEngine.Animator, $aoc: UnityEngine.AnimatorOverrideController, $placeholder: UnityEngine.AnimationClip, $ownerRoot: UnityEngine.Transform, $chosenClip: $Ref<UnityEngine.AnimationClip>) : System.Collections.Generic.List$1<UnityEngine.GameObject>
        }
    }
    namespace H2V.GameplayAbilitySystem.AbilitySystem.ScriptableObjects {
        class AbilitySO extends UnityEngine.ScriptableObject implements H2V.GameplayAbilitySystem.AbilitySystem.ScriptableObjects.IAbilityCreator$1<H2V.GameplayAbilitySystem.AbilitySystem.AbilitySpec>
        {
            protected [__keep_incompatibility]: never;
            public get Tags(): H2V.GameplayAbilitySystem.AbilitySystem.AbilityTags;
            public get Contexts(): System.Array$1<H2V.GameplayAbilitySystem.AbilitySystem.IAbilityContext>;
            public get Conditions(): System.Array$1<H2V.GameplayAbilitySystem.AbilitySystem.IAbilityCondition>;
            public CreateAbilitySpec ($owner: H2V.GameplayAbilitySystem.AbilitySystem.Components.AbilitySystemBehaviour) : H2V.GameplayAbilitySystem.AbilitySystem.AbilitySpec
        }
        interface IAbilityCreator$1<T>
        {
            CreateAbilitySpec ($owner: H2V.GameplayAbilitySystem.AbilitySystem.Components.AbilitySystemBehaviour) : T
        }
        class AbilitySO$1<T> extends H2V.GameplayAbilitySystem.AbilitySystem.ScriptableObjects.AbilitySO implements H2V.GameplayAbilitySystem.AbilitySystem.ScriptableObjects.IAbilityCreator$1<H2V.GameplayAbilitySystem.AbilitySystem.AbilitySpec>, H2V.GameplayAbilitySystem.AbilitySystem.ScriptableObjects.IAbilityCreator$1<T>
        {
            protected [__keep_incompatibility]: never;
            public CreateAbilitySpec ($owner: H2V.GameplayAbilitySystem.AbilitySystem.Components.AbilitySystemBehaviour) : T
            public CreateAbilitySpec ($owner: H2V.GameplayAbilitySystem.AbilitySystem.Components.AbilitySystemBehaviour) : H2V.GameplayAbilitySystem.AbilitySystem.AbilitySpec
        }
    }
    namespace H2V.GameplayAbilitySystem.AbilitySystem {
        class AbilitySpec extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public get IsActive(): boolean;
            public get AbilityDef(): H2V.GameplayAbilitySystem.AbilitySystem.ScriptableObjects.AbilitySO;
            public get Owner(): H2V.GameplayAbilitySystem.AbilitySystem.Components.AbilitySystemBehaviour;
            public get Source(): H2V.GameplayAbilitySystem.AbilitySystem.Components.AbilitySystemBehaviour;
            public set Source(value: H2V.GameplayAbilitySystem.AbilitySystem.Components.AbilitySystemBehaviour);
            public get Targets(): System.Collections.Generic.HashSet$1<H2V.GameplayAbilitySystem.AbilitySystem.Components.AbilitySystemBehaviour>;
            public InitAbility ($owner: H2V.GameplayAbilitySystem.AbilitySystem.Components.AbilitySystemBehaviour, $ability: H2V.GameplayAbilitySystem.AbilitySystem.ScriptableObjects.AbilitySO) : void
            public InitTargets (...targets: H2V.GameplayAbilitySystem.AbilitySystem.Components.AbilitySystemBehaviour[]) : void
            public TryActiveAbility () : boolean
            public CanActiveAbility () : boolean
            public ActivateAbility () : void
            public EndAbility () : void
            public OnAbilityGranted ($gameplayAbilitySpec: H2V.GameplayAbilitySystem.AbilitySystem.AbilitySpec) : void
            public OnAbilityRemoved ($gameplayAbilitySpec: H2V.GameplayAbilitySystem.AbilitySystem.AbilitySpec) : void
            public constructor ()
        }
        class TagRequireIgnoreDetails extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public RequireTags : System.Array$1<H2V.GameplayAbilitySystem.TagSystem.ScriptableObjects.TagSO>
            public IgnoreTags : System.Array$1<H2V.GameplayAbilitySystem.TagSystem.ScriptableObjects.TagSO>
            public constructor ()
        }
        interface IAbilityCondition
        {
            IsPass ($abilitySpec: H2V.GameplayAbilitySystem.AbilitySystem.AbilitySpec) : boolean
        }
        class AlwaysTrue extends System.Object implements H2V.GameplayAbilitySystem.AbilitySystem.IAbilityCondition
        {
            protected [__keep_incompatibility]: never;
            public IsPass ($abilitySpec: H2V.GameplayAbilitySystem.AbilitySystem.AbilitySpec) : boolean
            public constructor ()
        }
        interface IAbilityContext
        {
            IsValid : boolean
        }
        class NullAbilityContext extends System.Object implements H2V.GameplayAbilitySystem.AbilitySystem.IAbilityContext
        {
            protected [__keep_incompatibility]: never;
            public static get Instance(): H2V.GameplayAbilitySystem.AbilitySystem.NullAbilityContext;
            public get IsValid(): boolean;
        }
        class AbilityTags extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public AbilityTag : H2V.GameplayAbilitySystem.TagSystem.ScriptableObjects.TagSO
            public CancelAbilityWithTags : System.Array$1<H2V.GameplayAbilitySystem.TagSystem.ScriptableObjects.TagSO>
            public BlockAbilityWithTags : System.Array$1<H2V.GameplayAbilitySystem.TagSystem.ScriptableObjects.TagSO>
            public ActivationTags : System.Array$1<H2V.GameplayAbilitySystem.TagSystem.ScriptableObjects.TagSO>
            public OwnerTags : H2V.GameplayAbilitySystem.AbilitySystem.TagRequireIgnoreDetails
            public SourceTags : H2V.GameplayAbilitySystem.AbilitySystem.TagRequireIgnoreDetails
            public TargetTags : H2V.GameplayAbilitySystem.AbilitySystem.TagRequireIgnoreDetails
            public constructor ()
        }
    }
    namespace H2V.GameplayAbilitySystem.AbilitySystem.Components {
        class AbilitySystemBehaviour extends UnityEngine.MonoBehaviour
        {
            protected [__keep_incompatibility]: never;
            public get TagSystem(): H2V.GameplayAbilitySystem.TagSystem.TagSystemBehaviour;
            public get GrantedAbilities(): System.Collections.Generic.IReadOnlyList$1<H2V.GameplayAbilitySystem.AbilitySystem.AbilitySpec>;
            public add_AbilityGrantedEvent ($value: H2V.GameplayAbilitySystem.AbilitySystem.Components.AbilitySystemBehaviour.AbilityGranted) : void
            public remove_AbilityGrantedEvent ($value: H2V.GameplayAbilitySystem.AbilitySystem.Components.AbilitySystemBehaviour.AbilityGranted) : void
            public GiveAbility ($ability: H2V.GameplayAbilitySystem.AbilitySystem.ScriptableObjects.IAbilityCreator$1<H2V.GameplayAbilitySystem.AbilitySystem.AbilitySpec>) : H2V.GameplayAbilitySystem.AbilitySystem.AbilitySpec
            public GiveAbility ($abilitySO: H2V.GameplayAbilitySystem.AbilitySystem.ScriptableObjects.AbilitySO) : H2V.GameplayAbilitySystem.AbilitySystem.AbilitySpec
            public TryActiveAbility ($abilitySpec: H2V.GameplayAbilitySystem.AbilitySystem.AbilitySpec, ...targets: H2V.GameplayAbilitySystem.AbilitySystem.Components.AbilitySystemBehaviour[]) : boolean
            public RemoveAbility ($abilitySpec: H2V.GameplayAbilitySystem.AbilitySystem.AbilitySpec) : boolean
            public RemoveAbility ($ability: H2V.GameplayAbilitySystem.AbilitySystem.ScriptableObjects.AbilitySO) : boolean
            public RemoveAllAbilities () : void
            public constructor ()
        }
        interface AbilitySystemBehaviour {
            HasAllTags ($tags: System.Array$1<H2V.GameplayAbilitySystem.TagSystem.ScriptableObjects.TagSO>) : boolean;
            HasNoneTags ($tags: System.Array$1<H2V.GameplayAbilitySystem.TagSystem.ScriptableObjects.TagSO>) : boolean;
            IsSatisfyTagRequirements ($tagRequirements: H2V.GameplayAbilitySystem.AbilitySystem.TagRequireIgnoreDetails) : boolean;
        }
    }
    namespace Game.AI.BT {
        class ScriptableBTBlock extends UnityEngine.ScriptableObject
        {
            protected [__keep_incompatibility]: never;
            public ApplyToTree ($builder: CleverCrow.Fluid.BTs.Trees.BehaviorTreeBuilder, $ctx: Game.AI.Core.AIContext) : void
        }
        interface IBehaviorTreeBuilder
        {
            Build ($context: Game.AI.Core.AIContext) : CleverCrow.Fluid.BTs.Trees.BehaviorTree
        }
        class ComposableBTBuilder extends System.Object implements Game.AI.BT.IBehaviorTreeBuilder
        {
            protected [__keep_incompatibility]: never;
            public AddBlock ($apply: System.Action$2<CleverCrow.Fluid.BTs.Trees.BehaviorTreeBuilder, Game.AI.Core.AIContext>) : Game.AI.BT.ComposableBTBuilder
            public Build ($ctx: Game.AI.Core.AIContext) : CleverCrow.Fluid.BTs.Trees.BehaviorTree
            public constructor ()
            public Build ($context: Game.AI.Core.AIContext) : CleverCrow.Fluid.BTs.Trees.BehaviorTree
        }
    }
    namespace Game.AI.Core {
        class AIContext extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public Owner : UnityEngine.GameObject
            public Target : UnityEngine.GameObject
            public LastKnownTargetPosition : UnityEngine.Vector3
            public CurrentHP : number
            public MaxHP : number
            public AggroLevel : number
            public TimeSinceLastSeen : number
            public CurrentArea : Game.AI.Interaction.InteractionArea
            public IsCurrentlyInteracting : boolean
            public get Blackboard(): Game.AI.Core.Blackboard;
            public get CurrentInteractionPoint(): Game.AI.Interaction.InteractionPoint;
            public clearInteractionPoint () : void
            public constructor ()
        }
        class Blackboard extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public Clear ($key: string) : void
            public Has ($key: string) : boolean
            public constructor ()
        }
        class AIController extends UnityEngine.MonoBehaviour
        {
            protected [__keep_incompatibility]: never;
            public get Context(): Game.AI.Core.AIContext;
            public constructor ()
        }
        enum AIType
        { BehaviorTree = 0, GoapUtility = 1 }
        interface IAIBrain
        {
            Tick () : void
        }
    }
    namespace Game.AI.Senses {
        class ScriptableSensor extends UnityEngine.ScriptableObject
        {
            protected [__keep_incompatibility]: never;
            public Tick ($owner: UnityEngine.GameObject) : void
            public Apply ($owner: UnityEngine.GameObject, $context: $Ref<Game.AI.Core.AIContext>) : void
        }
        class AISensory extends UnityEngine.MonoBehaviour
        {
            protected [__keep_incompatibility]: never;
            public ApplyPerceptions () : void
            public constructor ()
        }
    }
    namespace H2V.GameplayAbilitySystem.EffectSystem.ScriptableObjects {
        class ModifierComputationSO extends UnityEngine.ScriptableObject
        {
            protected [__keep_incompatibility]: never;
            public Initialize ($effectSpec: H2V.GameplayAbilitySystem.EffectSystem.GameplayEffectSpec) : void
            public TryCalculateMagnitude ($gameplayEffectSpec: H2V.GameplayAbilitySystem.EffectSystem.GameplayEffectSpec, $evaluatedMagnitude: $Ref<number>) : boolean
        }
        class GameplayEffectSO extends UnityEngine.ScriptableObject implements H2V.GameplayAbilitySystem.EffectSystem.IGameplayEffectDef
        {
            protected [__keep_incompatibility]: never;
            public get Name(): string;
            public get Description(): string;
            public get EffectTag(): H2V.GameplayAbilitySystem.TagSystem.ScriptableObjects.TagSO;
            public get Policy(): H2V.GameplayAbilitySystem.EffectSystem.GamplayEffectPolicies.IGameplayEffectPolicy;
            public get EffectDetails(): H2V.GameplayAbilitySystem.EffectSystem.EffectDetails;
            public get StackingDetails(): H2V.GameplayAbilitySystem.EffectSystem.StackingDetails;
            public get AdditionApplyEffects(): System.Array$1<H2V.GameplayAbilitySystem.EffectSystem.AdditionApplyEffects.IAdditionApplyEffect>;
            public get CustomExecutions(): System.Array$1<H2V.GameplayAbilitySystem.EffectSystem.ScriptableObjects.EffectExecutionSO>;
            public get ApplicationConditions(): System.Array$1<H2V.GameplayAbilitySystem.EffectSystem.EffectConditions.IEffectCondition>;
            public CreateEffectSpec ($ownerSystem: H2V.GameplayAbilitySystem.Components.AbilitySystemComponent, $context: H2V.GameplayAbilitySystem.EffectSystem.GameplayEffectContextHandle) : H2V.GameplayAbilitySystem.EffectSystem.GameplayEffectSpec
            public constructor ()
        }
        class EffectExecutionSO extends UnityEngine.ScriptableObject
        {
            protected [__keep_incompatibility]: never;
            public Execute ($executionParams: $Ref<H2V.GameplayAbilitySystem.EffectSystem.ScriptableObjects.CustomExecutionParameters>, $outModifiers: $Ref<H2V.GameplayAbilitySystem.EffectSystem.ScriptableObjects.GameplayEffectCustomExecutionOutput>) : void
        }
        enum EGameplayEffectCaptureSource
        { Source = 0, Target = 1 }
        class CustomExecutionAttributeCaptureDef extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
            public Attribute : H2V.GameplayAbilitySystem.AttributeSystem.ScriptableObjects.AttributeSO
            public CaptureFrom : H2V.GameplayAbilitySystem.EffectSystem.ScriptableObjects.EGameplayEffectCaptureSource
        }
        class CustomExecutionParameters extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
            public TargetSystem : H2V.GameplayAbilitySystem.Components.AbilitySystemComponent
            public SourceSystem : H2V.GameplayAbilitySystem.Components.AbilitySystemComponent
            public EffectSpec : H2V.GameplayAbilitySystem.EffectSystem.GameplayEffectSpec
            public TryGetAttributeValue ($captureAttributeDef: H2V.GameplayAbilitySystem.EffectSystem.ScriptableObjects.CustomExecutionAttributeCaptureDef, $attributeValue: $Ref<H2V.GameplayAbilitySystem.AttributeSystem.AttributeValue>, $defaultCurrentValue?: number) : void
            public constructor ($effectSpec: H2V.GameplayAbilitySystem.EffectSystem.GameplayEffectSpec)
        }
        class GameplayEffectCustomExecutionOutput extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public Modifiers : System.Collections.Generic.List$1<H2V.GameplayAbilitySystem.EffectSystem.ModifierEvaluatedData>
            public Add ($modifier: H2V.GameplayAbilitySystem.EffectSystem.ModifierEvaluatedData) : void
            public constructor ()
        }
    }
    namespace H2V.GameplayAbilitySystem.EffectSystem {
        class GameplayEffectSpec extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public get Source(): H2V.GameplayAbilitySystem.Components.AbilitySystemComponent;
            public set Source(value: H2V.GameplayAbilitySystem.Components.AbilitySystemComponent);
            public get Target(): H2V.GameplayAbilitySystem.Components.AbilitySystemComponent;
            public set Target(value: H2V.GameplayAbilitySystem.Components.AbilitySystemComponent);
            public get EffectDefDetails(): H2V.GameplayAbilitySystem.EffectSystem.EffectDetails;
            public set EffectDefDetails(value: H2V.GameplayAbilitySystem.EffectSystem.EffectDetails);
            public get CustomExecutions(): System.Array$1<H2V.GameplayAbilitySystem.EffectSystem.ScriptableObjects.EffectExecutionSO>;
            public set CustomExecutions(value: System.Array$1<H2V.GameplayAbilitySystem.EffectSystem.ScriptableObjects.EffectExecutionSO>);
            public get IsExpired(): boolean;
            public set IsExpired(value: boolean);
            public get Modifiers(): System.Array$1<H2V.GameplayAbilitySystem.EffectSystem.ModifierSpec>;
            public set Modifiers(value: System.Array$1<H2V.GameplayAbilitySystem.EffectSystem.ModifierSpec>);
            public get StackCount(): number;
            public set StackCount(value: number);
            public get Context(): H2V.GameplayAbilitySystem.EffectSystem.GameplayEffectContextHandle;
            public set Context(value: H2V.GameplayAbilitySystem.EffectSystem.GameplayEffectContextHandle);
            public get EffectDef(): H2V.GameplayAbilitySystem.EffectSystem.IGameplayEffectDef;
            public get EffectTag(): H2V.GameplayAbilitySystem.TagSystem.ScriptableObjects.TagSO;
            public get StackingDetails(): H2V.GameplayAbilitySystem.EffectSystem.StackingDetails;
            public InitEffect ($effectDef: H2V.GameplayAbilitySystem.EffectSystem.IGameplayEffectDef, $source: H2V.GameplayAbilitySystem.Components.AbilitySystemComponent) : void
            public OnInitEffect ($effectDef: H2V.GameplayAbilitySystem.EffectSystem.IGameplayEffectDef, $source: H2V.GameplayAbilitySystem.Components.AbilitySystemComponent) : void
            public CanApply () : boolean
            public CalculateModifierMagnitudes () : void
            public IsValid () : boolean
            public CreateActiveEffectSpec () : H2V.GameplayAbilitySystem.EffectSystem.ActiveGameplayEffect
            public GetModifierMagnitude ($modifierIdx: number) : number
            public IsStackableWith ($otherSpec: H2V.GameplayAbilitySystem.EffectSystem.GameplayEffectSpec) : boolean
            public constructor ()
        }
        interface IGameplayEffectDef
        {
            Name : string
            EffectTag : H2V.GameplayAbilitySystem.TagSystem.ScriptableObjects.TagSO
            Policy : H2V.GameplayAbilitySystem.EffectSystem.GamplayEffectPolicies.IGameplayEffectPolicy
            EffectDetails : H2V.GameplayAbilitySystem.EffectSystem.EffectDetails
            StackingDetails : H2V.GameplayAbilitySystem.EffectSystem.StackingDetails
            AdditionApplyEffects : System.Array$1<H2V.GameplayAbilitySystem.EffectSystem.AdditionApplyEffects.IAdditionApplyEffect>
            CustomExecutions : System.Array$1<H2V.GameplayAbilitySystem.EffectSystem.ScriptableObjects.EffectExecutionSO>
            ApplicationConditions : System.Array$1<H2V.GameplayAbilitySystem.EffectSystem.EffectConditions.IEffectCondition>
            CreateEffectSpec ($ownerSystem: H2V.GameplayAbilitySystem.Components.AbilitySystemComponent, $context: H2V.GameplayAbilitySystem.EffectSystem.GameplayEffectContextHandle) : H2V.GameplayAbilitySystem.EffectSystem.GameplayEffectSpec
        }
        class ModifierCallbackData extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
            public EffectSpec : H2V.GameplayAbilitySystem.EffectSystem.GameplayEffectSpec
            public ModEvaluatedData : H2V.GameplayAbilitySystem.EffectSystem.ModifierEvaluatedData
            public Owner : H2V.GameplayAbilitySystem.Components.AbilitySystemComponent
            public constructor ($spec: H2V.GameplayAbilitySystem.EffectSystem.GameplayEffectSpec, $modEvaluatedData: H2V.GameplayAbilitySystem.EffectSystem.ModifierEvaluatedData, $owner: H2V.GameplayAbilitySystem.Components.AbilitySystemComponent)
        }
        class ActiveGameplayEffect extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public get Spec(): H2V.GameplayAbilitySystem.EffectSystem.GameplayEffectSpec;
            public get StackCount(): number;
            public get StackLimitCount(): number;
            public get ComputedModifiers(): System.Collections.Generic.List$1<H2V.GameplayAbilitySystem.EffectSystem.ModifierEvaluatedData>;
            public get ModifierType(): H2V.GameplayAbilitySystem.AttributeSystem.EModifierType;
            public get IsActive(): boolean;
            public set IsActive(value: boolean);
            public get Expired(): boolean;
            public get EffectTag(): H2V.GameplayAbilitySystem.TagSystem.ScriptableObjects.TagSO;
            public Update ($deltaTime: number) : void
            public CanRemoveFrom ($fromSystem: H2V.GameplayAbilitySystem.EffectSystem.Components.EffectSystemBehaviour) : boolean
            public OnRemovedFrom ($fromSystem: H2V.GameplayAbilitySystem.EffectSystem.Components.EffectSystemBehaviour) : void
            public IsValid () : boolean
            public UpdateStackCount ($newStackCount: number) : void
            public ExecuteActiveEffect () : void
            public TrySelfActiveEffect () : boolean
            public ModifyAttributeBaseValue ($attribute: H2V.GameplayAbilitySystem.AttributeSystem.ScriptableObjects.AttributeSO, $modifierOp: H2V.GameplayAbilitySystem.EffectSystem.EAttributeModifierOperationType, $magnitude: number, $executeData: $Ref<H2V.GameplayAbilitySystem.EffectSystem.ModifierCallbackData>) : void
            public ExecuteCustomEffectOnApplied ($system: H2V.GameplayAbilitySystem.Components.AbilitySystemComponent) : void
            public constructor ()
            public constructor ($spec: H2V.GameplayAbilitySystem.EffectSystem.GameplayEffectSpec)
        }
        class ModifierEvaluatedData extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
            public Attribute : H2V.GameplayAbilitySystem.AttributeSystem.ScriptableObjects.AttributeSO
            public OpType : H2V.GameplayAbilitySystem.EffectSystem.EAttributeModifierOperationType
            public Magnitude : number
            public Clone () : H2V.GameplayAbilitySystem.EffectSystem.ModifierEvaluatedData
            public constructor ($attribute: H2V.GameplayAbilitySystem.AttributeSystem.ScriptableObjects.AttributeSO, $opType: H2V.GameplayAbilitySystem.EffectSystem.EAttributeModifierOperationType, $magnitude: number)
        }
        enum EAttributeModifierOperationType
        { Add = 0, Multiply = 1, Divide = 2, Override = 3 }
        class EffectAttributeModifier extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
            public Attribute : H2V.GameplayAbilitySystem.AttributeSystem.ScriptableObjects.AttributeSO
            public OperationType : H2V.GameplayAbilitySystem.EffectSystem.EAttributeModifierOperationType
            public ModifierMagnitude : H2V.GameplayAbilitySystem.EffectSystem.ScriptableObjects.ModifierComputationSO
            public Value : number
            public Clone () : H2V.GameplayAbilitySystem.EffectSystem.EffectAttributeModifier
        }
        class EffectDetails extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public Modifiers : System.Array$1<H2V.GameplayAbilitySystem.EffectSystem.EffectAttributeModifier>
            public StackingType : H2V.GameplayAbilitySystem.AttributeSystem.EModifierType
            public constructor ()
        }
        class GameplayEffectContext extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public get InstigatorAbilitySystem(): H2V.GameplayAbilitySystem.Components.AbilitySystemComponent;
            public IsValid () : boolean
            public AddInstigator ($instigator: UnityEngine.GameObject) : void
            public constructor ()
        }
        class GameplayEffectContextHandle extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public GetContext () : H2V.GameplayAbilitySystem.EffectSystem.GameplayEffectContext
            public IsValid () : boolean
            public constructor ($data: H2V.GameplayAbilitySystem.EffectSystem.GameplayEffectContext)
        }
        class ModifierSpec extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
            public EvaluatedMagnitude : number
            public ModifierOperation : H2V.GameplayAbilitySystem.EffectSystem.EAttributeModifierOperationType
            public GetEvaluatedMagnitude () : number
        }
        class StackingDetails extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
            public StackingType : H2V.GameplayAbilitySystem.EffectSystem.EGameplayEffectStackingType
            public StackLimitCount : number
            public OverflowEffects : System.Array$1<H2V.GameplayAbilitySystem.EffectSystem.IGameplayEffectDef>
            public IsAllowOverflowApplication : boolean
            public IsClearStackOnOverflow : boolean
            public IsStack () : boolean
        }
        enum EGameplayEffectStackingType
        { None = 0, AggregateBySource = 1, AggregateByTarget = 2 }
    }
    namespace H2V.GameplayAbilitySystem.AttributeSystem {
        interface IAttributeValueCalculator
        {
            Calculate ($baseValue: H2V.GameplayAbilitySystem.AttributeSystem.AttributeValue, $attributeSystem: H2V.GameplayAbilitySystem.AttributeSystem.Components.AttributeSystemBehaviour) : H2V.GameplayAbilitySystem.AttributeSystem.AttributeValue
        }
        class AttributeValue extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
            public ExternalModifier : H2V.GameplayAbilitySystem.AttributeSystem.Modifier
            public CoreModifier : H2V.GameplayAbilitySystem.AttributeSystem.Modifier
            public get Attribute(): H2V.GameplayAbilitySystem.AttributeSystem.ScriptableObjects.AttributeSO;
            public set Attribute(value: H2V.GameplayAbilitySystem.AttributeSystem.ScriptableObjects.AttributeSO);
            public get BaseValue(): number;
            public set BaseValue(value: number);
            public get CurrentValue(): number;
            public set CurrentValue(value: number);
            public Clone () : H2V.GameplayAbilitySystem.AttributeSystem.AttributeValue
            public CalculateInitialValue ($attributeSystem: H2V.GameplayAbilitySystem.AttributeSystem.Components.AttributeSystemBehaviour) : H2V.GameplayAbilitySystem.AttributeSystem.AttributeValue
            public CalculateCurrentValue ($attributeSystem: H2V.GameplayAbilitySystem.AttributeSystem.Components.AttributeSystemBehaviour) : H2V.GameplayAbilitySystem.AttributeSystem.AttributeValue
            public constructor ($attribute: H2V.GameplayAbilitySystem.AttributeSystem.ScriptableObjects.AttributeSO)
        }
        interface AttributeValue {
            GetCoreValue () : number;
        }
        enum EModifierType
        { External = 0, Core = 1 }
        class Modifier extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
            public Additive : number
            public Multiplicative : number
            public Overriding : number
            public static op_Addition ($a: H2V.GameplayAbilitySystem.AttributeSystem.Modifier, $b: H2V.GameplayAbilitySystem.AttributeSystem.Modifier) : H2V.GameplayAbilitySystem.AttributeSystem.Modifier
        }
        class InitialAttributeValueCalculator extends System.Object implements H2V.GameplayAbilitySystem.AttributeSystem.IAttributeValueCalculator
        {
            protected [__keep_incompatibility]: never;
            public Calculate ($baseValue: H2V.GameplayAbilitySystem.AttributeSystem.AttributeValue, $attributeSystem: H2V.GameplayAbilitySystem.AttributeSystem.Components.AttributeSystemBehaviour) : H2V.GameplayAbilitySystem.AttributeSystem.AttributeValue
            public constructor ()
        }
        class CurrentAttributeValueCalculator extends System.Object implements H2V.GameplayAbilitySystem.AttributeSystem.IAttributeValueCalculator
        {
            protected [__keep_incompatibility]: never;
            public Calculate ($baseValue: H2V.GameplayAbilitySystem.AttributeSystem.AttributeValue, $attributeSystem: H2V.GameplayAbilitySystem.AttributeSystem.Components.AttributeSystemBehaviour) : H2V.GameplayAbilitySystem.AttributeSystem.AttributeValue
            public static CalculateCurrentAttributeValue ($attributeValue: H2V.GameplayAbilitySystem.AttributeSystem.AttributeValue) : H2V.GameplayAbilitySystem.AttributeSystem.AttributeValue
            public constructor ()
        }
        class AttributeValueExtensions extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public static GetCoreValue ($attributeValue: H2V.GameplayAbilitySystem.AttributeSystem.AttributeValue) : number
        }
    }
    namespace H2V.GameplayAbilitySystem.AttributeSystem.Components {
        class AttributeSystemBehaviour extends UnityEngine.MonoBehaviour
        {
            protected [__keep_incompatibility]: never;
            public get Attributes(): System.Collections.Generic.List$1<H2V.GameplayAbilitySystem.AttributeSystem.ScriptableObjects.AttributeSO>;
            public get AttributeValues(): System.Collections.Generic.List$1<H2V.GameplayAbilitySystem.AttributeSystem.AttributeValue>;
            public add_PreAttributeChange ($value: H2V.GameplayAbilitySystem.AttributeSystem.Components.AttributeSystemBehaviour.PreAttributeChangeDelegate) : void
            public remove_PreAttributeChange ($value: H2V.GameplayAbilitySystem.AttributeSystem.Components.AttributeSystemBehaviour.PreAttributeChangeDelegate) : void
            public add_PostAttributeChange ($value: H2V.GameplayAbilitySystem.AttributeSystem.Components.AttributeSystemBehaviour.PostAttributeChangeDelegate) : void
            public remove_PostAttributeChange ($value: H2V.GameplayAbilitySystem.AttributeSystem.Components.AttributeSystemBehaviour.PostAttributeChangeDelegate) : void
            public Init () : void
            public GetAttributeIndexCache () : System.Collections.Generic.Dictionary$2<H2V.GameplayAbilitySystem.AttributeSystem.ScriptableObjects.AttributeSO, number>
            public TryAddModifierToAttribute ($modifier: H2V.GameplayAbilitySystem.AttributeSystem.Modifier, $attributeToModify: H2V.GameplayAbilitySystem.AttributeSystem.ScriptableObjects.AttributeSO, $modifierType?: H2V.GameplayAbilitySystem.AttributeSystem.EModifierType) : boolean
            public HasAttribute ($attributeSO: H2V.GameplayAbilitySystem.AttributeSystem.ScriptableObjects.AttributeSO, $value: $Ref<H2V.GameplayAbilitySystem.AttributeSystem.AttributeValue>) : boolean
            public AddAttribute ($attribute: H2V.GameplayAbilitySystem.AttributeSystem.ScriptableObjects.AttributeSO) : void
            public UpdateAttributeValues () : void
            public TryGetAttributeValue ($attribute: H2V.GameplayAbilitySystem.AttributeSystem.ScriptableObjects.AttributeSO, $value: $Ref<H2V.GameplayAbilitySystem.AttributeSystem.AttributeValue>) : boolean
            public SetAttributeBaseValue ($attribute: H2V.GameplayAbilitySystem.AttributeSystem.ScriptableObjects.AttributeSO, $value: number) : void
            public SetAttributeValue ($attribute: H2V.GameplayAbilitySystem.AttributeSystem.ScriptableObjects.AttributeSO, $attributeValue: H2V.GameplayAbilitySystem.AttributeSystem.AttributeValue) : void
            public ResetAllAttributes () : void
            public ResetAttributeModifiers () : void
            public constructor ()
        }
        class StatsInitializer extends UnityEngine.MonoBehaviour
        {
            protected [__keep_incompatibility]: never;
            public InitStats () : void
            public constructor ()
        }
        interface IStatsProvider
        {
            Stats : System.Array$1<H2V.GameplayAbilitySystem.AttributeSystem.ScriptableObjects.AttributeWithValue>
        }
        class InlineStatsProvider extends System.Object implements H2V.GameplayAbilitySystem.AttributeSystem.Components.IStatsProvider
        {
            protected [__keep_incompatibility]: never;
            public get Stats(): System.Array$1<H2V.GameplayAbilitySystem.AttributeSystem.ScriptableObjects.AttributeWithValue>;
            public constructor ()
        }
        class ScriptableObjectStatsProvider extends System.Object implements H2V.GameplayAbilitySystem.AttributeSystem.Components.IStatsProvider
        {
            protected [__keep_incompatibility]: never;
            public get Stats(): System.Array$1<H2V.GameplayAbilitySystem.AttributeSystem.ScriptableObjects.AttributeWithValue>;
            public constructor ()
        }
    }
    namespace H2V.GameplayAbilitySystem.Components {
        class AbilitySystemComponent extends UnityEngine.MonoBehaviour
        {
            protected [__keep_incompatibility]: never;
            public get TagSystem(): H2V.GameplayAbilitySystem.TagSystem.TagSystemBehaviour;
            public get AbilitySystem(): H2V.GameplayAbilitySystem.AbilitySystem.Components.AbilitySystemBehaviour;
            public get AttributeSystem(): H2V.GameplayAbilitySystem.AttributeSystem.Components.AttributeSystemBehaviour;
            public get GameplayEffectSystem(): H2V.GameplayAbilitySystem.EffectSystem.Components.EffectSystemBehaviour;
            public Init () : void
            public MakeOutgoingSpec ($effectDef: H2V.GameplayAbilitySystem.EffectSystem.IGameplayEffectDef, $context?: H2V.GameplayAbilitySystem.EffectSystem.GameplayEffectContextHandle) : H2V.GameplayAbilitySystem.EffectSystem.GameplayEffectSpec
            public MakeEffectContext () : H2V.GameplayAbilitySystem.EffectSystem.GameplayEffectContextHandle
            public ApplyEffectToSelf ($inSpec: H2V.GameplayAbilitySystem.EffectSystem.GameplayEffectSpec) : H2V.GameplayAbilitySystem.EffectSystem.ActiveGameplayEffect
            public ApplyEffectToSelf ($effectDef: H2V.GameplayAbilitySystem.EffectSystem.IGameplayEffectDef, $context?: H2V.GameplayAbilitySystem.EffectSystem.GameplayEffectContextHandle) : H2V.GameplayAbilitySystem.EffectSystem.ActiveGameplayEffect
            public constructor ()
        }
    }
    namespace StarterAssets {
        class ThirdPersonController extends UnityEngine.MonoBehaviour
        {
            protected [__keep_incompatibility]: never;
            public currentMotionSpeedAttr : H2V.GameplayAbilitySystem.AttributeSystem.ScriptableObjects.AttributeSO
            public RotationSmoothTime : number
            public SpeedChangeRate : number
            public LandingAudioClip : UnityEngine.AudioClip
            public FootstepAudioClips : System.Array$1<UnityEngine.AudioClip>
            public FootstepAudioVolume : number
            public JumpHeight : number
            public Gravity : number
            public JumpTimeout : number
            public FallTimeout : number
            public Grounded : boolean
            public GroundedOffset : number
            public GroundedRadius : number
            public GroundLayers : UnityEngine.LayerMask
            public CinemachineCameraTarget : UnityEngine.GameObject
            public TopClamp : number
            public BottomClamp : number
            public CameraAngleOverride : number
            public LockCameraPosition : boolean
            public constructor ()
        }
        class StarterAssetsInputs extends UnityEngine.MonoBehaviour
        {
            protected [__keep_incompatibility]: never;
            public move : UnityEngine.Vector2
            public look : UnityEngine.Vector2
            public jump : boolean
            public sprint : boolean
            public walk : boolean
            public basicAttackPressed : boolean
            public analogMovement : boolean
            public cursorLocked : boolean
            public cursorInputForLook : boolean
            public OnMove ($value: UnityEngine.InputSystem.InputValue) : void
            public OnLook ($value: UnityEngine.InputSystem.InputValue) : void
            public OnJump ($value: UnityEngine.InputSystem.InputValue) : void
            public OnSprint ($value: UnityEngine.InputSystem.InputValue) : void
            public OnWalk ($value: UnityEngine.InputSystem.InputValue) : void
            public OnBasicAttack ($value: UnityEngine.InputSystem.InputValue) : void
            public MoveInput ($newMoveDirection: UnityEngine.Vector2) : void
            public LookInput ($newLookDirection: UnityEngine.Vector2) : void
            public JumpInput ($newJumpState: boolean) : void
            public SprintInput ($newSprintState: boolean) : void
            public WalkInput ($newWalkState: boolean) : void
            public constructor ()
        }
        class UICanvasControllerInput extends UnityEngine.MonoBehaviour
        {
            protected [__keep_incompatibility]: never;
            public starterAssetsInputs : StarterAssets.StarterAssetsInputs
            public VirtualMoveInput ($virtualMoveDirection: UnityEngine.Vector2) : void
            public VirtualLookInput ($virtualLookDirection: UnityEngine.Vector2) : void
            public VirtualJumpInput ($virtualJumpState: boolean) : void
            public VirtualSprintInput ($virtualSprintState: boolean) : void
            public constructor ()
        }
    }
    namespace GameInputAssets {
        class PlayerActions extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
            public get Move(): UnityEngine.InputSystem.InputAction;
            public get Look(): UnityEngine.InputSystem.InputAction;
            public get Jump(): UnityEngine.InputSystem.InputAction;
            public get Sprint(): UnityEngine.InputSystem.InputAction;
            public get Walk(): UnityEngine.InputSystem.InputAction;
            public get BasicAttack(): UnityEngine.InputSystem.InputAction;
            public get enabled(): boolean;
            public Get () : UnityEngine.InputSystem.InputActionMap
            public Enable () : void
            public Disable () : void
            public static op_Implicit ($set: GameInputAssets.PlayerActions) : UnityEngine.InputSystem.InputActionMap
            public AddCallbacks ($instance: GameInputAssets.IPlayerActions) : void
            public RemoveCallbacks ($instance: GameInputAssets.IPlayerActions) : void
            public SetCallbacks ($instance: GameInputAssets.IPlayerActions) : void
            public constructor ($wrapper: GameInputAssets)
        }
        interface IPlayerActions
        {
            OnMove ($context: UnityEngine.InputSystem.InputAction.CallbackContext) : void
            OnLook ($context: UnityEngine.InputSystem.InputAction.CallbackContext) : void
            OnJump ($context: UnityEngine.InputSystem.InputAction.CallbackContext) : void
            OnSprint ($context: UnityEngine.InputSystem.InputAction.CallbackContext) : void
            OnWalk ($context: UnityEngine.InputSystem.InputAction.CallbackContext) : void
            OnBasicAttack ($context: UnityEngine.InputSystem.InputAction.CallbackContext) : void
        }
    }
    namespace UnityEngine.EventSystems {
        interface IPointerClickHandler extends UnityEngine.EventSystems.IEventSystemHandler
        {
            OnPointerClick ($eventData: UnityEngine.EventSystems.PointerEventData) : void
        }
        interface IEventSystemHandler
        {
        }
        interface IPointerDownHandler extends UnityEngine.EventSystems.IEventSystemHandler
        {
            OnPointerDown ($eventData: UnityEngine.EventSystems.PointerEventData) : void
        }
        interface IPointerUpHandler extends UnityEngine.EventSystems.IEventSystemHandler
        {
            OnPointerUp ($eventData: UnityEngine.EventSystems.PointerEventData) : void
        }
        class AbstractEventData extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public get used(): boolean;
            public Reset () : void
            public Use () : void
        }
        class BaseEventData extends UnityEngine.EventSystems.AbstractEventData
        {
            protected [__keep_incompatibility]: never;
            public get currentInputModule(): UnityEngine.EventSystems.BaseInputModule;
            public get selectedObject(): UnityEngine.GameObject;
            public set selectedObject(value: UnityEngine.GameObject);
            public constructor ($eventSystem: UnityEngine.EventSystems.EventSystem)
        }
        class PointerEventData extends UnityEngine.EventSystems.BaseEventData
        {
            protected [__keep_incompatibility]: never;
            public hovered : System.Collections.Generic.List$1<UnityEngine.GameObject>
            public get pointerEnter(): UnityEngine.GameObject;
            public set pointerEnter(value: UnityEngine.GameObject);
            public get lastPress(): UnityEngine.GameObject;
            public get rawPointerPress(): UnityEngine.GameObject;
            public set rawPointerPress(value: UnityEngine.GameObject);
            public get pointerDrag(): UnityEngine.GameObject;
            public set pointerDrag(value: UnityEngine.GameObject);
            public get pointerClick(): UnityEngine.GameObject;
            public set pointerClick(value: UnityEngine.GameObject);
            public get pointerCurrentRaycast(): UnityEngine.EventSystems.RaycastResult;
            public set pointerCurrentRaycast(value: UnityEngine.EventSystems.RaycastResult);
            public get pointerPressRaycast(): UnityEngine.EventSystems.RaycastResult;
            public set pointerPressRaycast(value: UnityEngine.EventSystems.RaycastResult);
            public get eligibleForClick(): boolean;
            public set eligibleForClick(value: boolean);
            public get displayIndex(): number;
            public set displayIndex(value: number);
            public get pointerId(): number;
            public set pointerId(value: number);
            public get position(): UnityEngine.Vector2;
            public set position(value: UnityEngine.Vector2);
            public get delta(): UnityEngine.Vector2;
            public set delta(value: UnityEngine.Vector2);
            public get pressPosition(): UnityEngine.Vector2;
            public set pressPosition(value: UnityEngine.Vector2);
            public get clickTime(): number;
            public set clickTime(value: number);
            public get clickCount(): number;
            public set clickCount(value: number);
            public get scrollDelta(): UnityEngine.Vector2;
            public set scrollDelta(value: UnityEngine.Vector2);
            public get useDragThreshold(): boolean;
            public set useDragThreshold(value: boolean);
            public get dragging(): boolean;
            public set dragging(value: boolean);
            public get button(): UnityEngine.EventSystems.PointerEventData.InputButton;
            public set button(value: UnityEngine.EventSystems.PointerEventData.InputButton);
            public get pressure(): number;
            public set pressure(value: number);
            public get tangentialPressure(): number;
            public set tangentialPressure(value: number);
            public get altitudeAngle(): number;
            public set altitudeAngle(value: number);
            public get azimuthAngle(): number;
            public set azimuthAngle(value: number);
            public get twist(): number;
            public set twist(value: number);
            public get tilt(): UnityEngine.Vector2;
            public set tilt(value: UnityEngine.Vector2);
            public get penStatus(): UnityEngine.PenStatus;
            public set penStatus(value: UnityEngine.PenStatus);
            public get radius(): UnityEngine.Vector2;
            public set radius(value: UnityEngine.Vector2);
            public get radiusVariance(): UnityEngine.Vector2;
            public set radiusVariance(value: UnityEngine.Vector2);
            public get fullyExited(): boolean;
            public set fullyExited(value: boolean);
            public get reentered(): boolean;
            public set reentered(value: boolean);
            public get enterEventCamera(): UnityEngine.Camera;
            public get pressEventCamera(): UnityEngine.Camera;
            public get pointerPress(): UnityEngine.GameObject;
            public set pointerPress(value: UnityEngine.GameObject);
            public IsPointerMoving () : boolean
            public IsScrolling () : boolean
            public constructor ($eventSystem: UnityEngine.EventSystems.EventSystem)
        }
        interface IDragHandler extends UnityEngine.EventSystems.IEventSystemHandler
        {
            OnDrag ($eventData: UnityEngine.EventSystems.PointerEventData) : void
        }
        class UIBehaviour extends UnityEngine.MonoBehaviour
        {
            protected [__keep_incompatibility]: never;
            public IsActive () : boolean
            public IsDestroyed () : boolean
        }
        interface IBeginDragHandler extends UnityEngine.EventSystems.IEventSystemHandler
        {
            OnBeginDrag ($eventData: UnityEngine.EventSystems.PointerEventData) : void
        }
        interface IInitializePotentialDragHandler extends UnityEngine.EventSystems.IEventSystemHandler
        {
            OnInitializePotentialDrag ($eventData: UnityEngine.EventSystems.PointerEventData) : void
        }
        interface IEndDragHandler extends UnityEngine.EventSystems.IEventSystemHandler
        {
            OnEndDrag ($eventData: UnityEngine.EventSystems.PointerEventData) : void
        }
        interface IScrollHandler extends UnityEngine.EventSystems.IEventSystemHandler
        {
            OnScroll ($eventData: UnityEngine.EventSystems.PointerEventData) : void
        }
        interface IPointerEnterHandler extends UnityEngine.EventSystems.IEventSystemHandler
        {
            OnPointerEnter ($eventData: UnityEngine.EventSystems.PointerEventData) : void
        }
        interface ISelectHandler extends UnityEngine.EventSystems.IEventSystemHandler
        {
            OnSelect ($eventData: UnityEngine.EventSystems.BaseEventData) : void
        }
        interface IPointerExitHandler extends UnityEngine.EventSystems.IEventSystemHandler
        {
            OnPointerExit ($eventData: UnityEngine.EventSystems.PointerEventData) : void
        }
        interface IDeselectHandler extends UnityEngine.EventSystems.IEventSystemHandler
        {
            OnDeselect ($eventData: UnityEngine.EventSystems.BaseEventData) : void
        }
        interface IMoveHandler extends UnityEngine.EventSystems.IEventSystemHandler
        {
            OnMove ($eventData: UnityEngine.EventSystems.AxisEventData) : void
        }
        interface ISubmitHandler extends UnityEngine.EventSystems.IEventSystemHandler
        {
            OnSubmit ($eventData: UnityEngine.EventSystems.BaseEventData) : void
        }
        interface ICancelHandler extends UnityEngine.EventSystems.IEventSystemHandler
        {
            OnCancel ($eventData: UnityEngine.EventSystems.BaseEventData) : void
        }
        class BaseRaycaster extends UnityEngine.EventSystems.UIBehaviour
        {
            protected [__keep_incompatibility]: never;
            public get eventCamera(): UnityEngine.Camera;
            public get sortOrderPriority(): number;
            public get renderOrderPriority(): number;
            public get rootRaycaster(): UnityEngine.EventSystems.BaseRaycaster;
            public Raycast ($eventData: UnityEngine.EventSystems.PointerEventData, $resultAppendList: System.Collections.Generic.List$1<UnityEngine.EventSystems.RaycastResult>) : void
        }
        class RaycastResult extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
            public module : UnityEngine.EventSystems.BaseRaycaster
            public distance : number
            public index : number
            public depth : number
            public sortingGroupID : number
            public sortingGroupOrder : number
            public sortingLayer : number
            public sortingOrder : number
            public worldPosition : UnityEngine.Vector3
            public worldNormal : UnityEngine.Vector3
            public screenPosition : UnityEngine.Vector2
            public displayIndex : number
            public get gameObject(): UnityEngine.GameObject;
            public set gameObject(value: UnityEngine.GameObject);
            public get isValid(): boolean;
            public Clear () : void
        }
        interface IUpdateSelectedHandler extends UnityEngine.EventSystems.IEventSystemHandler
        {
            OnUpdateSelected ($eventData: UnityEngine.EventSystems.BaseEventData) : void
        }
        class AxisEventData extends UnityEngine.EventSystems.BaseEventData
        {
            protected [__keep_incompatibility]: never;
            public get moveVector(): UnityEngine.Vector2;
            public set moveVector(value: UnityEngine.Vector2);
            public get moveDir(): UnityEngine.EventSystems.MoveDirection;
            public set moveDir(value: UnityEngine.EventSystems.MoveDirection);
            public constructor ($eventSystem: UnityEngine.EventSystems.EventSystem)
        }
        interface IPointerMoveHandler extends UnityEngine.EventSystems.IEventSystemHandler
        {
            OnPointerMove ($eventData: UnityEngine.EventSystems.PointerEventData) : void
        }
        enum MoveDirection
        { Left = 0, Up = 1, Right = 2, Down = 3, None = 4 }
        class EventSystem extends UnityEngine.EventSystems.UIBehaviour
        {
            protected [__keep_incompatibility]: never;
            public static get current(): UnityEngine.EventSystems.EventSystem;
            public static set current(value: UnityEngine.EventSystems.EventSystem);
            public get sendNavigationEvents(): boolean;
            public set sendNavigationEvents(value: boolean);
            public get pixelDragThreshold(): number;
            public set pixelDragThreshold(value: number);
            public get currentInputModule(): UnityEngine.EventSystems.BaseInputModule;
            public get firstSelectedGameObject(): UnityEngine.GameObject;
            public set firstSelectedGameObject(value: UnityEngine.GameObject);
            public get currentSelectedGameObject(): UnityEngine.GameObject;
            public get isFocused(): boolean;
            public get alreadySelecting(): boolean;
            public UpdateModules () : void
            public SetSelectedGameObject ($selected: UnityEngine.GameObject, $pointer: UnityEngine.EventSystems.BaseEventData) : void
            public SetSelectedGameObject ($selected: UnityEngine.GameObject) : void
            public RaycastAll ($eventData: UnityEngine.EventSystems.PointerEventData, $raycastResults: System.Collections.Generic.List$1<UnityEngine.EventSystems.RaycastResult>) : void
            public IsPointerOverGameObject () : boolean
            public IsPointerOverGameObject ($pointerId: number) : boolean
            public static SetUITookitEventSystemOverride ($activeEventSystem: UnityEngine.EventSystems.EventSystem, $sendEvents?: boolean, $createPanelGameObjectsOnStart?: boolean) : void
        }
        class BaseInputModule extends UnityEngine.EventSystems.UIBehaviour
        {
            protected [__keep_incompatibility]: never;
            public get input(): UnityEngine.EventSystems.BaseInput;
            public get inputOverride(): UnityEngine.EventSystems.BaseInput;
            public set inputOverride(value: UnityEngine.EventSystems.BaseInput);
            public Process () : void
            public IsPointerOverGameObject ($pointerId: number) : boolean
            public ShouldActivateModule () : boolean
            public DeactivateModule () : void
            public ActivateModule () : void
            public UpdateModule () : void
            public IsModuleSupported () : boolean
            public ConvertUIToolkitPointerId ($sourcePointerData: UnityEngine.EventSystems.PointerEventData) : number
            public ConvertPointerEventScrollDeltaToTicks ($scrollDelta: UnityEngine.Vector2) : UnityEngine.Vector2
            public GetNavigationEventDeviceType ($eventData: UnityEngine.EventSystems.BaseEventData) : UnityEngine.EventSystems.NavigationDeviceType
        }
        enum EventHandle
        { Unused = 0, Used = 1 }
        interface IDropHandler extends UnityEngine.EventSystems.IEventSystemHandler
        {
            OnDrop ($eventData: UnityEngine.EventSystems.PointerEventData) : void
        }
        class EventTrigger extends UnityEngine.MonoBehaviour implements UnityEngine.EventSystems.ISubmitHandler, UnityEngine.EventSystems.IPointerClickHandler, UnityEngine.EventSystems.ICancelHandler, UnityEngine.EventSystems.IBeginDragHandler, UnityEngine.EventSystems.IInitializePotentialDragHandler, UnityEngine.EventSystems.IDragHandler, UnityEngine.EventSystems.IEndDragHandler, UnityEngine.EventSystems.IDropHandler, UnityEngine.EventSystems.IEventSystemHandler, UnityEngine.EventSystems.IScrollHandler, UnityEngine.EventSystems.IUpdateSelectedHandler, UnityEngine.EventSystems.IPointerEnterHandler, UnityEngine.EventSystems.ISelectHandler, UnityEngine.EventSystems.IPointerExitHandler, UnityEngine.EventSystems.IDeselectHandler, UnityEngine.EventSystems.IPointerDownHandler, UnityEngine.EventSystems.IMoveHandler, UnityEngine.EventSystems.IPointerUpHandler
        {
            protected [__keep_incompatibility]: never;
            public get triggers(): System.Collections.Generic.List$1<UnityEngine.EventSystems.EventTrigger.Entry>;
            public set triggers(value: System.Collections.Generic.List$1<UnityEngine.EventSystems.EventTrigger.Entry>);
            public OnPointerEnter ($eventData: UnityEngine.EventSystems.PointerEventData) : void
            public OnPointerExit ($eventData: UnityEngine.EventSystems.PointerEventData) : void
            public OnDrag ($eventData: UnityEngine.EventSystems.PointerEventData) : void
            public OnDrop ($eventData: UnityEngine.EventSystems.PointerEventData) : void
            public OnPointerDown ($eventData: UnityEngine.EventSystems.PointerEventData) : void
            public OnPointerUp ($eventData: UnityEngine.EventSystems.PointerEventData) : void
            public OnPointerClick ($eventData: UnityEngine.EventSystems.PointerEventData) : void
            public OnSelect ($eventData: UnityEngine.EventSystems.BaseEventData) : void
            public OnDeselect ($eventData: UnityEngine.EventSystems.BaseEventData) : void
            public OnScroll ($eventData: UnityEngine.EventSystems.PointerEventData) : void
            public OnMove ($eventData: UnityEngine.EventSystems.AxisEventData) : void
            public OnUpdateSelected ($eventData: UnityEngine.EventSystems.BaseEventData) : void
            public OnInitializePotentialDrag ($eventData: UnityEngine.EventSystems.PointerEventData) : void
            public OnBeginDrag ($eventData: UnityEngine.EventSystems.PointerEventData) : void
            public OnEndDrag ($eventData: UnityEngine.EventSystems.PointerEventData) : void
            public OnSubmit ($eventData: UnityEngine.EventSystems.BaseEventData) : void
            public OnCancel ($eventData: UnityEngine.EventSystems.BaseEventData) : void
        }
        enum EventTriggerType
        { PointerEnter = 0, PointerExit = 1, PointerDown = 2, PointerUp = 3, PointerClick = 4, Drag = 5, Drop = 6, Scroll = 7, UpdateSelected = 8, Select = 9, Deselect = 10, Move = 11, InitializePotentialDrag = 12, BeginDrag = 13, EndDrag = 14, Submit = 15, Cancel = 16 }
        class ExecuteEvents extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public static get pointerMoveHandler(): UnityEngine.EventSystems.ExecuteEvents.EventFunction$1<UnityEngine.EventSystems.IPointerMoveHandler>;
            public static get pointerEnterHandler(): UnityEngine.EventSystems.ExecuteEvents.EventFunction$1<UnityEngine.EventSystems.IPointerEnterHandler>;
            public static get pointerExitHandler(): UnityEngine.EventSystems.ExecuteEvents.EventFunction$1<UnityEngine.EventSystems.IPointerExitHandler>;
            public static get pointerDownHandler(): UnityEngine.EventSystems.ExecuteEvents.EventFunction$1<UnityEngine.EventSystems.IPointerDownHandler>;
            public static get pointerUpHandler(): UnityEngine.EventSystems.ExecuteEvents.EventFunction$1<UnityEngine.EventSystems.IPointerUpHandler>;
            public static get pointerClickHandler(): UnityEngine.EventSystems.ExecuteEvents.EventFunction$1<UnityEngine.EventSystems.IPointerClickHandler>;
            public static get initializePotentialDrag(): UnityEngine.EventSystems.ExecuteEvents.EventFunction$1<UnityEngine.EventSystems.IInitializePotentialDragHandler>;
            public static get beginDragHandler(): UnityEngine.EventSystems.ExecuteEvents.EventFunction$1<UnityEngine.EventSystems.IBeginDragHandler>;
            public static get dragHandler(): UnityEngine.EventSystems.ExecuteEvents.EventFunction$1<UnityEngine.EventSystems.IDragHandler>;
            public static get endDragHandler(): UnityEngine.EventSystems.ExecuteEvents.EventFunction$1<UnityEngine.EventSystems.IEndDragHandler>;
            public static get dropHandler(): UnityEngine.EventSystems.ExecuteEvents.EventFunction$1<UnityEngine.EventSystems.IDropHandler>;
            public static get scrollHandler(): UnityEngine.EventSystems.ExecuteEvents.EventFunction$1<UnityEngine.EventSystems.IScrollHandler>;
            public static get updateSelectedHandler(): UnityEngine.EventSystems.ExecuteEvents.EventFunction$1<UnityEngine.EventSystems.IUpdateSelectedHandler>;
            public static get selectHandler(): UnityEngine.EventSystems.ExecuteEvents.EventFunction$1<UnityEngine.EventSystems.ISelectHandler>;
            public static get deselectHandler(): UnityEngine.EventSystems.ExecuteEvents.EventFunction$1<UnityEngine.EventSystems.IDeselectHandler>;
            public static get moveHandler(): UnityEngine.EventSystems.ExecuteEvents.EventFunction$1<UnityEngine.EventSystems.IMoveHandler>;
            public static get submitHandler(): UnityEngine.EventSystems.ExecuteEvents.EventFunction$1<UnityEngine.EventSystems.ISubmitHandler>;
            public static get cancelHandler(): UnityEngine.EventSystems.ExecuteEvents.EventFunction$1<UnityEngine.EventSystems.ICancelHandler>;
        }
        class BaseInput extends UnityEngine.EventSystems.UIBehaviour
        {
            protected [__keep_incompatibility]: never;
            public get compositionString(): string;
            public get imeCompositionMode(): UnityEngine.IMECompositionMode;
            public set imeCompositionMode(value: UnityEngine.IMECompositionMode);
            public get compositionCursorPos(): UnityEngine.Vector2;
            public set compositionCursorPos(value: UnityEngine.Vector2);
            public get mousePresent(): boolean;
            public get mousePosition(): UnityEngine.Vector2;
            public get mouseScrollDelta(): UnityEngine.Vector2;
            public get mouseScrollDeltaPerTick(): number;
            public get touchSupported(): boolean;
            public get touchCount(): number;
            public GetMouseButtonDown ($button: number) : boolean
            public GetMouseButtonUp ($button: number) : boolean
            public GetMouseButton ($button: number) : boolean
            public GetTouch ($index: number) : UnityEngine.Touch
            public GetAxisRaw ($axisName: string) : number
            public GetButtonDown ($buttonName: string) : boolean
            public constructor ()
        }
        enum NavigationDeviceType
        { Unknown = 0, Keyboard = 1, NonKeyboard = 2 }
        class PointerInputModule extends UnityEngine.EventSystems.BaseInputModule
        {
            protected [__keep_incompatibility]: never;
            public static kMouseLeftId : number
            public static kMouseRightId : number
            public static kMouseMiddleId : number
            public static kFakeTouchesId : number
        }
        class StandaloneInputModule extends UnityEngine.EventSystems.PointerInputModule
        {
            protected [__keep_incompatibility]: never;
            public get inputActionsPerSecond(): number;
            public set inputActionsPerSecond(value: number);
            public get repeatDelay(): number;
            public set repeatDelay(value: number);
            public get horizontalAxis(): string;
            public set horizontalAxis(value: string);
            public get verticalAxis(): string;
            public set verticalAxis(value: string);
            public get submitButton(): string;
            public set submitButton(value: string);
            public get cancelButton(): string;
            public set cancelButton(value: string);
        }
        class TouchInputModule extends UnityEngine.EventSystems.PointerInputModule
        {
            protected [__keep_incompatibility]: never;
            public get forceModuleActive(): boolean;
            public set forceModuleActive(value: boolean);
        }
        class RaycasterManager extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public static GetRaycasters () : System.Collections.Generic.List$1<UnityEngine.EventSystems.BaseRaycaster>
        }
        class PhysicsRaycaster extends UnityEngine.EventSystems.BaseRaycaster
        {
            protected [__keep_incompatibility]: never;
            public get eventCamera(): UnityEngine.Camera;
            public get depth(): number;
            public get finalEventMask(): number;
            public get eventMask(): UnityEngine.LayerMask;
            public set eventMask(value: UnityEngine.LayerMask);
            public get maxRayIntersections(): number;
            public set maxRayIntersections(value: number);
        }
        class Physics2DRaycaster extends UnityEngine.EventSystems.PhysicsRaycaster
        {
            protected [__keep_incompatibility]: never;
        }
    }
    namespace UIVirtualButton {
        class BoolEvent extends UnityEngine.Events.UnityEvent$1<boolean> implements UnityEngine.ISerializationCallbackReceiver
        {
            protected [__keep_incompatibility]: never;
            public constructor ()
        }
        class Event extends UnityEngine.Events.UnityEvent implements UnityEngine.ISerializationCallbackReceiver
        {
            protected [__keep_incompatibility]: never;
            public constructor ()
        }
    }
    namespace UIVirtualJoystick {
        class Event extends UnityEngine.Events.UnityEvent$1<UnityEngine.Vector2> implements UnityEngine.ISerializationCallbackReceiver
        {
            protected [__keep_incompatibility]: never;
            public constructor ()
        }
    }
    namespace UIVirtualTouchZone {
        class Event extends UnityEngine.Events.UnityEvent$1<UnityEngine.Vector2> implements UnityEngine.ISerializationCallbackReceiver
        {
            protected [__keep_incompatibility]: never;
            public constructor ()
        }
    }
    namespace Readme {
        class Section extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public heading : string
            public text : string
            public linkText : string
            public url : string
            public constructor ()
        }
    }
    namespace H2V.ExtensionsCore.ScriptableObjects {
        class SerializableScriptableObject extends UnityEngine.ScriptableObject
        {
            protected [__keep_incompatibility]: never;
            public get Guid(): string;
            public constructor ()
        }
    }
    namespace H2V.GameplayAbilitySystem.AttributeSystem.ScriptableObjects {
        class AttributeSO extends H2V.ExtensionsCore.ScriptableObjects.SerializableScriptableObject
        {
            protected [__keep_incompatibility]: never;
            public get InitialValueCalculator(): H2V.GameplayAbilitySystem.AttributeSystem.IAttributeValueCalculator;
            public get CurrentValueCalculator(): H2V.GameplayAbilitySystem.AttributeSystem.IAttributeValueCalculator;
            public constructor ()
        }
        class AttributesEventBase extends UnityEngine.ScriptableObject
        {
            protected [__keep_incompatibility]: never;
            public PreAttributeChange ($attributeSystem: H2V.GameplayAbilitySystem.AttributeSystem.Components.AttributeSystemBehaviour, $newAttributeValue: $Ref<H2V.GameplayAbilitySystem.AttributeSystem.AttributeValue>) : void
            public PostAttributeChange ($attributeSystem: H2V.GameplayAbilitySystem.AttributeSystem.Components.AttributeSystemBehaviour, $oldAttributeValue: $Ref<H2V.GameplayAbilitySystem.AttributeSystem.AttributeValue>, $newAttributeValue: $Ref<H2V.GameplayAbilitySystem.AttributeSystem.AttributeValue>) : void
        }
        class InitializeStatsSO extends UnityEngine.ScriptableObject
        {
            protected [__keep_incompatibility]: never;
            public get Stats(): System.Array$1<H2V.GameplayAbilitySystem.AttributeSystem.ScriptableObjects.AttributeWithValue>;
            public constructor ()
        }
        class AttributeWithValue extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
            public Attribute : H2V.GameplayAbilitySystem.AttributeSystem.ScriptableObjects.AttributeSO
            public Value : number
            public constructor ($attribute: H2V.GameplayAbilitySystem.AttributeSystem.ScriptableObjects.AttributeSO, $value: number)
        }
    }
    namespace SEA.State {
        class EnterEvent extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
            public Target : UnityEngine.GameObject
            public State : string
            public Payload : any
            public constructor ($target: UnityEngine.GameObject, $state: string, $payload: any)
        }
        class ExitEvent extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
            public Target : UnityEngine.GameObject
            public State : string
            public Payload : any
            public constructor ($target: UnityEngine.GameObject, $state: string, $payload: any)
        }
        class StateMachine extends UnityEngine.MonoBehaviour
        {
            protected [__keep_incompatibility]: never;
            public get Current(): string;
            public get_Item ($ns: string) : string
            public Goto ($fullState: string, $payload?: any) : void
            public IsInState ($fullState: string) : boolean
            public constructor ()
        }
    }
    namespace SEA.Mutators {
        class MutatorProcessor extends UnityEngine.MonoBehaviour
        {
            protected [__keep_incompatibility]: never;
            public constructor ()
        }
        class MutatorQueue extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public static Enqueue ($m: SEA.Mutators.StateMutator) : void
            public static Tick () : void
        }
        class StateMutator extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
            public Target : UnityEngine.GameObject
            public FromState : string
            public ToState : string
            public Priority : number
            public Payload : any
            public constructor ($target: UnityEngine.GameObject, $toState: string, $fromState?: string, $priority?: number, $payload?: any)
        }
    }
    namespace SEA.Events {
        class GlobalEventBus extends System.Object
        {
            protected [__keep_incompatibility]: never;
        }
    }
    namespace Game.Visuals {
        interface IAnimatorSource
        {
            Animator : UnityEngine.Animator
            GetBone ($boneName: string) : UnityEngine.Transform
        }
        class AnimatorHandle extends UnityEngine.MonoBehaviour implements Game.Visuals.IAnimatorSource
        {
            protected [__keep_incompatibility]: never;
            public get Animator(): UnityEngine.Animator;
            public GetBone ($boneName: string) : UnityEngine.Transform
            public OnFootstep ($e: UnityEngine.AnimationEvent) : void
            public OnLand ($e: UnityEngine.AnimationEvent) : void
            public constructor ()
        }
    }
    namespace Game.UI.Projection {
        class UIBillboard extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public anchor01 : UnityEngine.Vector2
            public radiusPx : number
            public follow : number
            public parallax : number
            public rotEuler : UnityEngine.Vector3
            public vel : UnityEngine.Vector3
            public constructor ()
        }
        class UIPyramidProjector extends UnityEngine.MonoBehaviour
        {
            protected [__keep_incompatibility]: never;
            public pyramidHeight : number
            public UpdateBillboard ($anchor01: UnityEngine.Vector2) : Game.UI.Projection.UIPyramidProjector.BillboardPose
            public constructor ()
        }
    }
    namespace Game.UI.Projection.UIPyramidProjector {
        class BillboardPose extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
            public rotation : UnityEngine.Quaternion
            public position : UnityEngine.Vector3
            public pivot01 : UnityEngine.Vector2
        }
    }
    namespace Game.Movement {
        class CharacterControllerMotionBridge extends UnityEngine.MonoBehaviour implements Game.Movement.IMotionBridge
        {
            protected [__keep_incompatibility]: never;
            public BurstMove ($worldDir: UnityEngine.Vector3, $distance: number, $duration: number) : void
            public constructor ()
        }
        interface IMotionBridge
        {
            BurstMove ($worldDir: UnityEngine.Vector3, $distance: number, $duration: number) : void
        }
        class NavmeshLocomotionBridge extends UnityEngine.MonoBehaviour
        {
            protected [__keep_incompatibility]: never;
            public BurstMove ($dir: UnityEngine.Vector3, $dist: number, $duration: number) : void
            public constructor ()
        }
    }
    namespace Game.Infrastructure {
        class IDTag extends UnityEngine.MonoBehaviour
        {
            protected [__keep_incompatibility]: never;
            public NamedId : string
            public ClassId : string
            public get GuidId(): string;
            public get Named(): string;
            public get Class(): string;
            public static GetByGuid ($guid: string) : Game.Infrastructure.IDTag
            public static GetByName ($named: string) : Game.Infrastructure.IDTag
            public static GetByClass ($kind: string) : System.Collections.Generic.IReadOnlyList$1<Game.Infrastructure.IDTag>
            public constructor ()
        }
    }
    namespace Game.Vfx {
        class CastVfxVariantTable extends UnityEngine.ScriptableObject
        {
            protected [__keep_incompatibility]: never;
            public TryGetSpec ($clip: UnityEngine.AnimationClip, $spec: $Ref<Game.Vfx.VfxSpawnSpec>) : boolean
            public GetNext ($entry: $Ref<Game.Vfx.CastVfxVariantTable.Entry>) : boolean
            public constructor ()
        }
        class VfxSpawnSpec extends UnityEngine.ScriptableObject
        {
            protected [__keep_incompatibility]: never;
            public Prefab : UnityEngine.GameObject
            public Attachments : System.Array$1<Game.Vfx.BoneAttachment>
            public OneShotSfx : UnityEngine.AudioClip
            public Volume : number
            public Spawn ($root: UnityEngine.Transform) : System.Collections.Generic.List$1<UnityEngine.GameObject>
            public constructor ()
        }
        class ImpactVfxListener extends UnityEngine.MonoBehaviour
        {
            protected [__keep_incompatibility]: never;
            public impactSpec : Game.Vfx.VfxSpawnSpec
            public constructor ()
        }
        class BoneAttachment extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
            public Bone : string
            public PositionOffset : UnityEngine.Vector3
            public RotationOffset : UnityEngine.Vector3
            public ParentToBone : boolean
        }
        class WeaponTrailController extends UnityEngine.MonoBehaviour
        {
            protected [__keep_incompatibility]: never;
            public constructor ()
        }
    }
    namespace Game.Vfx.CastVfxVariantTable {
        class Entry extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
            public Clip : UnityEngine.AnimationClip
            public Spec : Game.Vfx.VfxSpawnSpec
            public LayerName : string
            public StateName : string
        }
    }
    namespace Game.States {
        class InputStates extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public static Idle : string
            public static BasicAttack : string
            public static Skill : string
            public static Burst : string
            public static SprintPress : string
            public static SprintRelease : string
        }
        class MetaStates extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public static Idle : string
            public static Combat : string
            public static Interacting : string
        }
        class UnitStates extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public static Idle : string
            public static CostPayment : string
            public static AbilityWindup : string
            public static AbilityActive : string
            public static AbilityRecover : string
            public static HitReceived : string
            public static CombatNone : string
        }
    }
    namespace Game.Equipment {
        class EquipmentComponent extends UnityEngine.MonoBehaviour
        {
            protected [__keep_incompatibility]: never;
            public Equip ($prefab: UnityEngine.GameObject) : void
            public constructor ()
        }
    }
    namespace Game.Attributes {
        class StatsInitializerTwoPass extends UnityEngine.MonoBehaviour
        {
            protected [__keep_incompatibility]: never;
            public InitStats () : void
            public constructor ()
        }
    }
    namespace Game.AI.Interaction {
        class InteractionLogicSO extends UnityEngine.ScriptableObject
        {
            protected [__keep_incompatibility]: never;
            public OnStart ($actor: UnityEngine.GameObject, $point: Game.AI.Interaction.InteractionPoint) : void
            public OnEnd ($actor: UnityEngine.GameObject, $point: Game.AI.Interaction.InteractionPoint) : void
        }
        class GuardLogic extends Game.AI.Interaction.InteractionLogicSO
        {
            protected [__keep_incompatibility]: never;
            public constructor ()
        }
        class InteractionPoint extends UnityEngine.MonoBehaviour
        {
            protected [__keep_incompatibility]: never;
            public get IsInUse(): boolean;
            public get Type(): Game.AI.Interaction.InteractionType;
            public get Spot(): UnityEngine.Transform;
            public get Duration(): number;
            public OnValidate () : void
            public OnInteractionStart ($actor: UnityEngine.GameObject) : void
            public OnInteractionEnd ($actor: UnityEngine.GameObject) : void
            public constructor ()
        }
        class InteractionArea extends UnityEngine.MonoBehaviour
        {
            protected [__keep_incompatibility]: never;
            public RegisterPoint ($point: Game.AI.Interaction.InteractionPoint) : void
            public RegisterNpc ($npc: UnityEngine.GameObject) : void
            public UnregisterPoint ($point: Game.AI.Interaction.InteractionPoint) : void
            public UnregisterNpc ($npc: UnityEngine.GameObject) : void
            public GetPoints () : System.Collections.Generic.IEnumerable$1<Game.AI.Interaction.InteractionPoint>
            public GetRandomAvailablePoint ($type: Game.AI.Interaction.InteractionType, $requester: UnityEngine.GameObject) : Game.AI.Interaction.InteractionPoint
            public constructor ()
        }
        enum InteractionType
        { Generic = 0, Guard = 1, Sit = 2, UseConsole = 3, Observe = 4, IdlePose = 5 }
        class AlignmentStrategyPair extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public alignment : ActorAlignment
            public strategy : Game.AI.Interaction.InteractionEnterStrategySO
            public constructor ()
        }
        class InteractionEnterStrategySO extends UnityEngine.ScriptableObject
        {
            protected [__keep_incompatibility]: never;
            public OnTriggerEnter ($actor: UnityEngine.GameObject, $point: Game.AI.Interaction.InteractionPoint) : void
        }
        class InteractionEnterStrategySet extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public GetStrategy ($alignment: ActorAlignment) : Game.AI.Interaction.InteractionEnterStrategySO
            public EnsureAllAlignments () : void
            public constructor ()
        }
        class NpcEnterStrategySO extends Game.AI.Interaction.InteractionEnterStrategySO
        {
            protected [__keep_incompatibility]: never;
            public constructor ()
        }
    }
    namespace Game.AI.Brain {
        class BTBrain extends System.Object implements Game.AI.Core.IAIBrain
        {
            protected [__keep_incompatibility]: never;
            public Tick () : void
            public constructor ($builder: Game.AI.BT.IBehaviorTreeBuilder, $context: Game.AI.Core.AIContext)
        }
    }
    namespace Game.AI.Definitions {
        class ScriptableAIBrainDefinition extends UnityEngine.ScriptableObject
        {
            protected [__keep_incompatibility]: never;
            public CreateBrain ($context: Game.AI.Core.AIContext) : Game.AI.Core.IAIBrain
        }
        class ScriptableBTBrainDefinition extends Game.AI.Definitions.ScriptableAIBrainDefinition
        {
            protected [__keep_incompatibility]: never;
            public constructor ()
        }
    }
    namespace Game.AI.BT.Tasks {
        class WaitSecondsNode extends CleverCrow.Fluid.BTs.Tasks.Actions.ActionBase implements CleverCrow.Fluid.BTs.Tasks.ITask
        {
            protected [__keep_incompatibility]: never;
            public constructor ($getDuration: System.Func$1<number>)
        }
    }
    namespace Game.AI.BT.Extensions {
        class BTBuilderExtensions extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public static WaitSeconds ($builder: CleverCrow.Fluid.BTs.Trees.BehaviorTreeBuilder, $name: string, $durationProvider: System.Func$1<number>) : CleverCrow.Fluid.BTs.Trees.BehaviorTreeBuilder
        }
    }
    namespace Game.AI.BT.Blocks {
        class IdleBTBlock extends Game.AI.BT.ScriptableBTBlock
        {
            protected [__keep_incompatibility]: never;
            public constructor ()
        }
    }
    namespace Game.Combat {
        class DeliverySpawner extends UnityEngine.MonoBehaviour
        {
            protected [__keep_incompatibility]: never;
            public Spawn ($data: Game.Abilities.IAbilityDeliveryData, $caster: UnityEngine.Transform) : void
            public constructor ()
        }
        class AttackInstanceComponent extends UnityEngine.MonoBehaviour
        {
            protected [__keep_incompatibility]: never;
            public Init ($data: Game.Combat.AttackSpawnData) : void
            public SetHomingTarget ($tgt: UnityEngine.Transform, $turnRate: number) : void
            public constructor ()
        }
        class AttackSpawnData extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
            public Kind : Game.Combat.AttackKind
            public Range : number
            public Speed : number
            public CollisionRadius : number
            public Lifetime : number
            public HitMask : UnityEngine.LayerMask
            public Owner : UnityEngine.Transform
            public ProjectileSpec : Game.Vfx.VfxSpawnSpec
            public ImpactSpec : Game.Vfx.VfxSpawnSpec
            public AllowedRoles : System.Array$1<ActorAlignment>
        }
        class AttackInstanceStates extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public static Created : string
            public static Active : string
            public static Collided : string
        }
        enum AttackKind
        { Melee = 0, Projectile = 1, Hitscan = 2 }
        class DamageProcessor extends UnityEngine.MonoBehaviour
        {
            protected [__keep_incompatibility]: never;
            public constructor ()
        }
        class HitContext extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
            public Attacker : UnityEngine.Transform
            public Kind : Game.Combat.AttackKind
            public constructor ($attacker: UnityEngine.Transform, $kind: Game.Combat.AttackKind)
        }
        interface IDamageable
        {
            TakeDamage ($amount: number) : void
        }
    }
    namespace PuertsStaticWrap {
        class PuerRegisterInfo_Gen extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public static AddRegisterInfoGetterIntoJsEnv ($jsEnv: Puerts.JsEnv) : void
        }
    }
    namespace DG.Tweening {
        class DOTweenModuleAudio extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public static DOFade ($target: UnityEngine.AudioSource, $endValue: number, $duration: number) : DG.Tweening.Core.TweenerCore$3<number, number, DG.Tweening.Plugins.Options.FloatOptions>
            public static DOPitch ($target: UnityEngine.AudioSource, $endValue: number, $duration: number) : DG.Tweening.Core.TweenerCore$3<number, number, DG.Tweening.Plugins.Options.FloatOptions>
            public static DOSetFloat ($target: UnityEngine.Audio.AudioMixer, $floatName: string, $endValue: number, $duration: number) : DG.Tweening.Core.TweenerCore$3<number, number, DG.Tweening.Plugins.Options.FloatOptions>
            public static DOComplete ($target: UnityEngine.Audio.AudioMixer, $withCallbacks?: boolean) : number
            public static DOKill ($target: UnityEngine.Audio.AudioMixer, $complete?: boolean) : number
            public static DOFlip ($target: UnityEngine.Audio.AudioMixer) : number
            public static DOGoto ($target: UnityEngine.Audio.AudioMixer, $to: number, $andPlay?: boolean) : number
            public static DOPause ($target: UnityEngine.Audio.AudioMixer) : number
            public static DOPlay ($target: UnityEngine.Audio.AudioMixer) : number
            public static DOPlayBackwards ($target: UnityEngine.Audio.AudioMixer) : number
            public static DOPlayForward ($target: UnityEngine.Audio.AudioMixer) : number
            public static DORestart ($target: UnityEngine.Audio.AudioMixer) : number
            public static DORewind ($target: UnityEngine.Audio.AudioMixer) : number
            public static DOSmoothRewind ($target: UnityEngine.Audio.AudioMixer) : number
            public static DOTogglePause ($target: UnityEngine.Audio.AudioMixer) : number
        }
        class DOTweenModulePhysics extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public static DOMove ($target: UnityEngine.Rigidbody, $endValue: UnityEngine.Vector3, $duration: number, $snapping?: boolean) : DG.Tweening.Core.TweenerCore$3<UnityEngine.Vector3, UnityEngine.Vector3, DG.Tweening.Plugins.Options.VectorOptions>
            public static DOMoveX ($target: UnityEngine.Rigidbody, $endValue: number, $duration: number, $snapping?: boolean) : DG.Tweening.Core.TweenerCore$3<UnityEngine.Vector3, UnityEngine.Vector3, DG.Tweening.Plugins.Options.VectorOptions>
            public static DOMoveY ($target: UnityEngine.Rigidbody, $endValue: number, $duration: number, $snapping?: boolean) : DG.Tweening.Core.TweenerCore$3<UnityEngine.Vector3, UnityEngine.Vector3, DG.Tweening.Plugins.Options.VectorOptions>
            public static DOMoveZ ($target: UnityEngine.Rigidbody, $endValue: number, $duration: number, $snapping?: boolean) : DG.Tweening.Core.TweenerCore$3<UnityEngine.Vector3, UnityEngine.Vector3, DG.Tweening.Plugins.Options.VectorOptions>
            public static DORotate ($target: UnityEngine.Rigidbody, $endValue: UnityEngine.Vector3, $duration: number, $mode?: DG.Tweening.RotateMode) : DG.Tweening.Core.TweenerCore$3<UnityEngine.Quaternion, UnityEngine.Vector3, DG.Tweening.Plugins.Options.QuaternionOptions>
            public static DOLookAt ($target: UnityEngine.Rigidbody, $towards: UnityEngine.Vector3, $duration: number, $axisConstraint?: DG.Tweening.AxisConstraint, $up?: UnityEngine.Vector3 | null) : DG.Tweening.Core.TweenerCore$3<UnityEngine.Quaternion, UnityEngine.Vector3, DG.Tweening.Plugins.Options.QuaternionOptions>
            public static DOJump ($target: UnityEngine.Rigidbody, $endValue: UnityEngine.Vector3, $jumpPower: number, $numJumps: number, $duration: number, $snapping?: boolean) : DG.Tweening.Sequence
            public static DOPath ($target: UnityEngine.Rigidbody, $path: System.Array$1<UnityEngine.Vector3>, $duration: number, $pathType?: DG.Tweening.PathType, $pathMode?: DG.Tweening.PathMode, $resolution?: number, $gizmoColor?: UnityEngine.Color | null) : DG.Tweening.Core.TweenerCore$3<UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions>
            public static DOLocalPath ($target: UnityEngine.Rigidbody, $path: System.Array$1<UnityEngine.Vector3>, $duration: number, $pathType?: DG.Tweening.PathType, $pathMode?: DG.Tweening.PathMode, $resolution?: number, $gizmoColor?: UnityEngine.Color | null) : DG.Tweening.Core.TweenerCore$3<UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions>
        }
        class DOTweenModulePhysics2D extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public static DOMove ($target: UnityEngine.Rigidbody2D, $endValue: UnityEngine.Vector2, $duration: number, $snapping?: boolean) : DG.Tweening.Core.TweenerCore$3<UnityEngine.Vector2, UnityEngine.Vector2, DG.Tweening.Plugins.Options.VectorOptions>
            public static DOMoveX ($target: UnityEngine.Rigidbody2D, $endValue: number, $duration: number, $snapping?: boolean) : DG.Tweening.Core.TweenerCore$3<UnityEngine.Vector2, UnityEngine.Vector2, DG.Tweening.Plugins.Options.VectorOptions>
            public static DOMoveY ($target: UnityEngine.Rigidbody2D, $endValue: number, $duration: number, $snapping?: boolean) : DG.Tweening.Core.TweenerCore$3<UnityEngine.Vector2, UnityEngine.Vector2, DG.Tweening.Plugins.Options.VectorOptions>
            public static DORotate ($target: UnityEngine.Rigidbody2D, $endValue: number, $duration: number) : DG.Tweening.Core.TweenerCore$3<number, number, DG.Tweening.Plugins.Options.FloatOptions>
            public static DOJump ($target: UnityEngine.Rigidbody2D, $endValue: UnityEngine.Vector2, $jumpPower: number, $numJumps: number, $duration: number, $snapping?: boolean) : DG.Tweening.Sequence
            public static DOPath ($target: UnityEngine.Rigidbody2D, $path: System.Array$1<UnityEngine.Vector2>, $duration: number, $pathType?: DG.Tweening.PathType, $pathMode?: DG.Tweening.PathMode, $resolution?: number, $gizmoColor?: UnityEngine.Color | null) : DG.Tweening.Core.TweenerCore$3<UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions>
            public static DOLocalPath ($target: UnityEngine.Rigidbody2D, $path: System.Array$1<UnityEngine.Vector2>, $duration: number, $pathType?: DG.Tweening.PathType, $pathMode?: DG.Tweening.PathMode, $resolution?: number, $gizmoColor?: UnityEngine.Color | null) : DG.Tweening.Core.TweenerCore$3<UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions>
        }
        class DOTweenModuleSprite extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public static DOColor ($target: UnityEngine.SpriteRenderer, $endValue: UnityEngine.Color, $duration: number) : DG.Tweening.Core.TweenerCore$3<UnityEngine.Color, UnityEngine.Color, DG.Tweening.Plugins.Options.ColorOptions>
            public static DOFade ($target: UnityEngine.SpriteRenderer, $endValue: number, $duration: number) : DG.Tweening.Core.TweenerCore$3<UnityEngine.Color, UnityEngine.Color, DG.Tweening.Plugins.Options.ColorOptions>
            public static DOGradientColor ($target: UnityEngine.SpriteRenderer, $gradient: UnityEngine.Gradient, $duration: number) : DG.Tweening.Sequence
            public static DOBlendableColor ($target: UnityEngine.SpriteRenderer, $endValue: UnityEngine.Color, $duration: number) : DG.Tweening.Tweener
        }
        class DOTweenModuleUI extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public static DOFade ($target: UnityEngine.CanvasGroup, $endValue: number, $duration: number) : DG.Tweening.Core.TweenerCore$3<number, number, DG.Tweening.Plugins.Options.FloatOptions>
            public static DOColor ($target: UnityEngine.UI.Graphic, $endValue: UnityEngine.Color, $duration: number) : DG.Tweening.Core.TweenerCore$3<UnityEngine.Color, UnityEngine.Color, DG.Tweening.Plugins.Options.ColorOptions>
            public static DOFade ($target: UnityEngine.UI.Graphic, $endValue: number, $duration: number) : DG.Tweening.Core.TweenerCore$3<UnityEngine.Color, UnityEngine.Color, DG.Tweening.Plugins.Options.ColorOptions>
            public static DOColor ($target: UnityEngine.UI.Image, $endValue: UnityEngine.Color, $duration: number) : DG.Tweening.Core.TweenerCore$3<UnityEngine.Color, UnityEngine.Color, DG.Tweening.Plugins.Options.ColorOptions>
            public static DOFade ($target: UnityEngine.UI.Image, $endValue: number, $duration: number) : DG.Tweening.Core.TweenerCore$3<UnityEngine.Color, UnityEngine.Color, DG.Tweening.Plugins.Options.ColorOptions>
            public static DOFillAmount ($target: UnityEngine.UI.Image, $endValue: number, $duration: number) : DG.Tweening.Core.TweenerCore$3<number, number, DG.Tweening.Plugins.Options.FloatOptions>
            public static DOGradientColor ($target: UnityEngine.UI.Image, $gradient: UnityEngine.Gradient, $duration: number) : DG.Tweening.Sequence
            public static DOFlexibleSize ($target: UnityEngine.UI.LayoutElement, $endValue: UnityEngine.Vector2, $duration: number, $snapping?: boolean) : DG.Tweening.Core.TweenerCore$3<UnityEngine.Vector2, UnityEngine.Vector2, DG.Tweening.Plugins.Options.VectorOptions>
            public static DOMinSize ($target: UnityEngine.UI.LayoutElement, $endValue: UnityEngine.Vector2, $duration: number, $snapping?: boolean) : DG.Tweening.Core.TweenerCore$3<UnityEngine.Vector2, UnityEngine.Vector2, DG.Tweening.Plugins.Options.VectorOptions>
            public static DOPreferredSize ($target: UnityEngine.UI.LayoutElement, $endValue: UnityEngine.Vector2, $duration: number, $snapping?: boolean) : DG.Tweening.Core.TweenerCore$3<UnityEngine.Vector2, UnityEngine.Vector2, DG.Tweening.Plugins.Options.VectorOptions>
            public static DOColor ($target: UnityEngine.UI.Outline, $endValue: UnityEngine.Color, $duration: number) : DG.Tweening.Core.TweenerCore$3<UnityEngine.Color, UnityEngine.Color, DG.Tweening.Plugins.Options.ColorOptions>
            public static DOFade ($target: UnityEngine.UI.Outline, $endValue: number, $duration: number) : DG.Tweening.Core.TweenerCore$3<UnityEngine.Color, UnityEngine.Color, DG.Tweening.Plugins.Options.ColorOptions>
            public static DOScale ($target: UnityEngine.UI.Outline, $endValue: UnityEngine.Vector2, $duration: number) : DG.Tweening.Core.TweenerCore$3<UnityEngine.Vector2, UnityEngine.Vector2, DG.Tweening.Plugins.Options.VectorOptions>
            public static DOAnchorPos ($target: UnityEngine.RectTransform, $endValue: UnityEngine.Vector2, $duration: number, $snapping?: boolean) : DG.Tweening.Core.TweenerCore$3<UnityEngine.Vector2, UnityEngine.Vector2, DG.Tweening.Plugins.Options.VectorOptions>
            public static DOAnchorPosX ($target: UnityEngine.RectTransform, $endValue: number, $duration: number, $snapping?: boolean) : DG.Tweening.Core.TweenerCore$3<UnityEngine.Vector2, UnityEngine.Vector2, DG.Tweening.Plugins.Options.VectorOptions>
            public static DOAnchorPosY ($target: UnityEngine.RectTransform, $endValue: number, $duration: number, $snapping?: boolean) : DG.Tweening.Core.TweenerCore$3<UnityEngine.Vector2, UnityEngine.Vector2, DG.Tweening.Plugins.Options.VectorOptions>
            public static DOAnchorPos3D ($target: UnityEngine.RectTransform, $endValue: UnityEngine.Vector3, $duration: number, $snapping?: boolean) : DG.Tweening.Core.TweenerCore$3<UnityEngine.Vector3, UnityEngine.Vector3, DG.Tweening.Plugins.Options.VectorOptions>
            public static DOAnchorPos3DX ($target: UnityEngine.RectTransform, $endValue: number, $duration: number, $snapping?: boolean) : DG.Tweening.Core.TweenerCore$3<UnityEngine.Vector3, UnityEngine.Vector3, DG.Tweening.Plugins.Options.VectorOptions>
            public static DOAnchorPos3DY ($target: UnityEngine.RectTransform, $endValue: number, $duration: number, $snapping?: boolean) : DG.Tweening.Core.TweenerCore$3<UnityEngine.Vector3, UnityEngine.Vector3, DG.Tweening.Plugins.Options.VectorOptions>
            public static DOAnchorPos3DZ ($target: UnityEngine.RectTransform, $endValue: number, $duration: number, $snapping?: boolean) : DG.Tweening.Core.TweenerCore$3<UnityEngine.Vector3, UnityEngine.Vector3, DG.Tweening.Plugins.Options.VectorOptions>
            public static DOAnchorMax ($target: UnityEngine.RectTransform, $endValue: UnityEngine.Vector2, $duration: number, $snapping?: boolean) : DG.Tweening.Core.TweenerCore$3<UnityEngine.Vector2, UnityEngine.Vector2, DG.Tweening.Plugins.Options.VectorOptions>
            public static DOAnchorMin ($target: UnityEngine.RectTransform, $endValue: UnityEngine.Vector2, $duration: number, $snapping?: boolean) : DG.Tweening.Core.TweenerCore$3<UnityEngine.Vector2, UnityEngine.Vector2, DG.Tweening.Plugins.Options.VectorOptions>
            public static DOPivot ($target: UnityEngine.RectTransform, $endValue: UnityEngine.Vector2, $duration: number) : DG.Tweening.Core.TweenerCore$3<UnityEngine.Vector2, UnityEngine.Vector2, DG.Tweening.Plugins.Options.VectorOptions>
            public static DOPivotX ($target: UnityEngine.RectTransform, $endValue: number, $duration: number) : DG.Tweening.Core.TweenerCore$3<UnityEngine.Vector2, UnityEngine.Vector2, DG.Tweening.Plugins.Options.VectorOptions>
            public static DOPivotY ($target: UnityEngine.RectTransform, $endValue: number, $duration: number) : DG.Tweening.Core.TweenerCore$3<UnityEngine.Vector2, UnityEngine.Vector2, DG.Tweening.Plugins.Options.VectorOptions>
            public static DOSizeDelta ($target: UnityEngine.RectTransform, $endValue: UnityEngine.Vector2, $duration: number, $snapping?: boolean) : DG.Tweening.Core.TweenerCore$3<UnityEngine.Vector2, UnityEngine.Vector2, DG.Tweening.Plugins.Options.VectorOptions>
            public static DOPunchAnchorPos ($target: UnityEngine.RectTransform, $punch: UnityEngine.Vector2, $duration: number, $vibrato?: number, $elasticity?: number, $snapping?: boolean) : DG.Tweening.Tweener
            public static DOShakeAnchorPos ($target: UnityEngine.RectTransform, $duration: number, $strength?: number, $vibrato?: number, $randomness?: number, $snapping?: boolean, $fadeOut?: boolean, $randomnessMode?: DG.Tweening.ShakeRandomnessMode) : DG.Tweening.Tweener
            public static DOShakeAnchorPos ($target: UnityEngine.RectTransform, $duration: number, $strength: UnityEngine.Vector2, $vibrato?: number, $randomness?: number, $snapping?: boolean, $fadeOut?: boolean, $randomnessMode?: DG.Tweening.ShakeRandomnessMode) : DG.Tweening.Tweener
            public static DOJumpAnchorPos ($target: UnityEngine.RectTransform, $endValue: UnityEngine.Vector2, $jumpPower: number, $numJumps: number, $duration: number, $snapping?: boolean) : DG.Tweening.Sequence
            public static DONormalizedPos ($target: UnityEngine.UI.ScrollRect, $endValue: UnityEngine.Vector2, $duration: number, $snapping?: boolean) : DG.Tweening.Tweener
            public static DOHorizontalNormalizedPos ($target: UnityEngine.UI.ScrollRect, $endValue: number, $duration: number, $snapping?: boolean) : DG.Tweening.Tweener
            public static DOVerticalNormalizedPos ($target: UnityEngine.UI.ScrollRect, $endValue: number, $duration: number, $snapping?: boolean) : DG.Tweening.Tweener
            public static DOValue ($target: UnityEngine.UI.Slider, $endValue: number, $duration: number, $snapping?: boolean) : DG.Tweening.Core.TweenerCore$3<number, number, DG.Tweening.Plugins.Options.FloatOptions>
            public static DOColor ($target: UnityEngine.UI.Text, $endValue: UnityEngine.Color, $duration: number) : DG.Tweening.Core.TweenerCore$3<UnityEngine.Color, UnityEngine.Color, DG.Tweening.Plugins.Options.ColorOptions>
            public static DOCounter ($target: UnityEngine.UI.Text, $fromValue: number, $endValue: number, $duration: number, $addThousandsSeparator?: boolean, $culture?: System.Globalization.CultureInfo) : DG.Tweening.Core.TweenerCore$3<number, number, DG.Tweening.Plugins.Options.NoOptions>
            public static DOFade ($target: UnityEngine.UI.Text, $endValue: number, $duration: number) : DG.Tweening.Core.TweenerCore$3<UnityEngine.Color, UnityEngine.Color, DG.Tweening.Plugins.Options.ColorOptions>
            public static DOText ($target: UnityEngine.UI.Text, $endValue: string, $duration: number, $richTextEnabled?: boolean, $scrambleMode?: DG.Tweening.ScrambleMode, $scrambleChars?: string) : DG.Tweening.Core.TweenerCore$3<string, string, DG.Tweening.Plugins.Options.StringOptions>
            public static DOBlendableColor ($target: UnityEngine.UI.Graphic, $endValue: UnityEngine.Color, $duration: number) : DG.Tweening.Tweener
            public static DOBlendableColor ($target: UnityEngine.UI.Image, $endValue: UnityEngine.Color, $duration: number) : DG.Tweening.Tweener
            public static DOBlendableColor ($target: UnityEngine.UI.Text, $endValue: UnityEngine.Color, $duration: number) : DG.Tweening.Tweener
            public static DOShapeCircle ($target: UnityEngine.RectTransform, $center: UnityEngine.Vector2, $endValueDegrees: number, $duration: number, $relativeCenter?: boolean, $snapping?: boolean) : DG.Tweening.Core.TweenerCore$3<UnityEngine.Vector2, UnityEngine.Vector2, DG.Tweening.Plugins.CircleOptions>
        }
        class DOTweenModuleUnityVersion extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public static DOGradientColor ($target: UnityEngine.Material, $gradient: UnityEngine.Gradient, $duration: number) : DG.Tweening.Sequence
            public static DOGradientColor ($target: UnityEngine.Material, $gradient: UnityEngine.Gradient, $property: string, $duration: number) : DG.Tweening.Sequence
            public static WaitForCompletion ($t: DG.Tweening.Tween, $returnCustomYieldInstruction: boolean) : UnityEngine.CustomYieldInstruction
            public static WaitForRewind ($t: DG.Tweening.Tween, $returnCustomYieldInstruction: boolean) : UnityEngine.CustomYieldInstruction
            public static WaitForKill ($t: DG.Tweening.Tween, $returnCustomYieldInstruction: boolean) : UnityEngine.CustomYieldInstruction
            public static WaitForElapsedLoops ($t: DG.Tweening.Tween, $elapsedLoops: number, $returnCustomYieldInstruction: boolean) : UnityEngine.CustomYieldInstruction
            public static WaitForPosition ($t: DG.Tweening.Tween, $position: number, $returnCustomYieldInstruction: boolean) : UnityEngine.CustomYieldInstruction
            public static WaitForStart ($t: DG.Tweening.Tween, $returnCustomYieldInstruction: boolean) : UnityEngine.CustomYieldInstruction
            public static DOOffset ($target: UnityEngine.Material, $endValue: UnityEngine.Vector2, $propertyID: number, $duration: number) : DG.Tweening.Core.TweenerCore$3<UnityEngine.Vector2, UnityEngine.Vector2, DG.Tweening.Plugins.Options.VectorOptions>
            public static DOTiling ($target: UnityEngine.Material, $endValue: UnityEngine.Vector2, $propertyID: number, $duration: number) : DG.Tweening.Core.TweenerCore$3<UnityEngine.Vector2, UnityEngine.Vector2, DG.Tweening.Plugins.Options.VectorOptions>
            public static AsyncWaitForCompletion ($t: DG.Tweening.Tween) : $Task<any>
            public static AsyncWaitForRewind ($t: DG.Tweening.Tween) : $Task<any>
            public static AsyncWaitForKill ($t: DG.Tweening.Tween) : $Task<any>
            public static AsyncWaitForElapsedLoops ($t: DG.Tweening.Tween, $elapsedLoops: number) : $Task<any>
            public static AsyncWaitForPosition ($t: DG.Tweening.Tween, $position: number) : $Task<any>
            public static AsyncWaitForStart ($t: DG.Tweening.Tween) : $Task<any>
        }
        class DOTweenCYInstruction extends System.Object
        {
            protected [__keep_incompatibility]: never;
        }
        class DOTweenModuleUtils extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public static Init () : void
        }
    }
    namespace UnityEngine.UI {
        class Graphic extends UnityEngine.EventSystems.UIBehaviour implements UnityEngine.UI.ICanvasElement
        {
            protected [__keep_incompatibility]: never;
            public static get defaultGraphicMaterial(): UnityEngine.Material;
            public get color(): UnityEngine.Color;
            public set color(value: UnityEngine.Color);
            public get raycastTarget(): boolean;
            public set raycastTarget(value: boolean);
            public get raycastPadding(): UnityEngine.Vector4;
            public set raycastPadding(value: UnityEngine.Vector4);
            public get depth(): number;
            public get rectTransform(): UnityEngine.RectTransform;
            public get canvas(): UnityEngine.Canvas;
            public get canvasRenderer(): UnityEngine.CanvasRenderer;
            public get defaultMaterial(): UnityEngine.Material;
            public get material(): UnityEngine.Material;
            public set material(value: UnityEngine.Material);
            public get materialForRendering(): UnityEngine.Material;
            public get mainTexture(): UnityEngine.Texture;
            public get transform(): UnityEngine.Transform;
            public SetAllDirty () : void
            public SetLayoutDirty () : void
            public SetVerticesDirty () : void
            public SetMaterialDirty () : void
            public SetRaycastDirty () : void
            public OnCullingChanged () : void
            public Rebuild ($update: UnityEngine.UI.CanvasUpdate) : void
            public LayoutComplete () : void
            public GraphicUpdateComplete () : void
            public OnRebuildRequested () : void
            public SetNativeSize () : void
            public Raycast ($sp: UnityEngine.Vector2, $eventCamera: UnityEngine.Camera) : boolean
            public PixelAdjustPoint ($point: UnityEngine.Vector2) : UnityEngine.Vector2
            public GetPixelAdjustedRect () : UnityEngine.Rect
            public CrossFadeColor ($targetColor: UnityEngine.Color, $duration: number, $ignoreTimeScale: boolean, $useAlpha: boolean) : void
            public CrossFadeColor ($targetColor: UnityEngine.Color, $duration: number, $ignoreTimeScale: boolean, $useAlpha: boolean, $useRGB: boolean) : void
            public CrossFadeAlpha ($alpha: number, $duration: number, $ignoreTimeScale: boolean) : void
            public RegisterDirtyLayoutCallback ($action: UnityEngine.Events.UnityAction) : void
            public UnregisterDirtyLayoutCallback ($action: UnityEngine.Events.UnityAction) : void
            public RegisterDirtyVerticesCallback ($action: UnityEngine.Events.UnityAction) : void
            public UnregisterDirtyVerticesCallback ($action: UnityEngine.Events.UnityAction) : void
            public RegisterDirtyMaterialCallback ($action: UnityEngine.Events.UnityAction) : void
            public UnregisterDirtyMaterialCallback ($action: UnityEngine.Events.UnityAction) : void
            public Rebuild ($executing: UnityEngine.UI.CanvasUpdate) : void
        }
        interface Graphic {
            DOColor ($endValue: UnityEngine.Color, $duration: number) : DG.Tweening.Core.TweenerCore$3<UnityEngine.Color, UnityEngine.Color, DG.Tweening.Plugins.Options.ColorOptions>;
            DOFade ($endValue: number, $duration: number) : DG.Tweening.Core.TweenerCore$3<UnityEngine.Color, UnityEngine.Color, DG.Tweening.Plugins.Options.ColorOptions>;
            DOBlendableColor ($endValue: UnityEngine.Color, $duration: number) : DG.Tweening.Tweener;
        }
        interface ICanvasElement
        {
            transform : UnityEngine.Transform
            Rebuild ($executing: UnityEngine.UI.CanvasUpdate) : void
            LayoutComplete () : void
            GraphicUpdateComplete () : void
            IsDestroyed () : boolean
        }
        class MaskableGraphic extends UnityEngine.UI.Graphic implements UnityEngine.UI.IClippable, UnityEngine.UI.IMaterialModifier, UnityEngine.UI.IMaskable, UnityEngine.UI.ICanvasElement
        {
            protected [__keep_incompatibility]: never;
            public get onCullStateChanged(): UnityEngine.UI.MaskableGraphic.CullStateChangedEvent;
            public set onCullStateChanged(value: UnityEngine.UI.MaskableGraphic.CullStateChangedEvent);
            public get maskable(): boolean;
            public set maskable(value: boolean);
            public get isMaskingGraphic(): boolean;
            public set isMaskingGraphic(value: boolean);
            public get gameObject(): UnityEngine.GameObject;
            public GetModifiedMaterial ($baseMaterial: UnityEngine.Material) : UnityEngine.Material
            public Cull ($clipRect: UnityEngine.Rect, $validRect: boolean) : void
            public SetClipRect ($clipRect: UnityEngine.Rect, $validRect: boolean) : void
            public SetClipSoftness ($clipSoftness: UnityEngine.Vector2) : void
            public RecalculateClipping () : void
            public RecalculateMasking () : void
            public SetClipRect ($value: UnityEngine.Rect, $validRect: boolean) : void
        }
        interface IClippable
        {
            gameObject : UnityEngine.GameObject
            rectTransform : UnityEngine.RectTransform
            RecalculateClipping () : void
            Cull ($clipRect: UnityEngine.Rect, $validRect: boolean) : void
            SetClipRect ($value: UnityEngine.Rect, $validRect: boolean) : void
            SetClipSoftness ($clipSoftness: UnityEngine.Vector2) : void
        }
        interface IMaterialModifier
        {
            GetModifiedMaterial ($baseMaterial: UnityEngine.Material) : UnityEngine.Material
        }
        interface IMaskable
        {
            RecalculateMasking () : void
        }
        class Image extends UnityEngine.UI.MaskableGraphic implements UnityEngine.UI.IClippable, UnityEngine.UI.IMaterialModifier, UnityEngine.ICanvasRaycastFilter, UnityEngine.UI.IMaskable, UnityEngine.ISerializationCallbackReceiver, UnityEngine.UI.ICanvasElement, UnityEngine.UI.ILayoutElement
        {
            protected [__keep_incompatibility]: never;
            public get sprite(): UnityEngine.Sprite;
            public set sprite(value: UnityEngine.Sprite);
            public get overrideSprite(): UnityEngine.Sprite;
            public set overrideSprite(value: UnityEngine.Sprite);
            public get type(): UnityEngine.UI.Image.Type;
            public set type(value: UnityEngine.UI.Image.Type);
            public get preserveAspect(): boolean;
            public set preserveAspect(value: boolean);
            public get fillCenter(): boolean;
            public set fillCenter(value: boolean);
            public get fillMethod(): UnityEngine.UI.Image.FillMethod;
            public set fillMethod(value: UnityEngine.UI.Image.FillMethod);
            public get fillAmount(): number;
            public set fillAmount(value: number);
            public get fillClockwise(): boolean;
            public set fillClockwise(value: boolean);
            public get fillOrigin(): number;
            public set fillOrigin(value: number);
            public get alphaHitTestMinimumThreshold(): number;
            public set alphaHitTestMinimumThreshold(value: number);
            public get useSpriteMesh(): boolean;
            public set useSpriteMesh(value: boolean);
            public static get defaultETC1GraphicMaterial(): UnityEngine.Material;
            public get mainTexture(): UnityEngine.Texture;
            public get hasBorder(): boolean;
            public get pixelsPerUnitMultiplier(): number;
            public set pixelsPerUnitMultiplier(value: number);
            public get pixelsPerUnit(): number;
            public get material(): UnityEngine.Material;
            public set material(value: UnityEngine.Material);
            public get minWidth(): number;
            public get preferredWidth(): number;
            public get flexibleWidth(): number;
            public get minHeight(): number;
            public get preferredHeight(): number;
            public get flexibleHeight(): number;
            public get layoutPriority(): number;
            public DisableSpriteOptimizations () : void
            public OnBeforeSerialize () : void
            public OnAfterDeserialize () : void
            public CalculateLayoutInputHorizontal () : void
            public CalculateLayoutInputVertical () : void
            public IsRaycastLocationValid ($screenPoint: UnityEngine.Vector2, $eventCamera: UnityEngine.Camera) : boolean
        }
        interface Image {
            DOColor ($endValue: UnityEngine.Color, $duration: number) : DG.Tweening.Core.TweenerCore$3<UnityEngine.Color, UnityEngine.Color, DG.Tweening.Plugins.Options.ColorOptions>;
            DOFade ($endValue: number, $duration: number) : DG.Tweening.Core.TweenerCore$3<UnityEngine.Color, UnityEngine.Color, DG.Tweening.Plugins.Options.ColorOptions>;
            DOFillAmount ($endValue: number, $duration: number) : DG.Tweening.Core.TweenerCore$3<number, number, DG.Tweening.Plugins.Options.FloatOptions>;
            DOGradientColor ($gradient: UnityEngine.Gradient, $duration: number) : DG.Tweening.Sequence;
            DOBlendableColor ($endValue: UnityEngine.Color, $duration: number) : DG.Tweening.Tweener;
        }
        interface ILayoutElement
        {
            minWidth : number
            preferredWidth : number
            flexibleWidth : number
            minHeight : number
            preferredHeight : number
            flexibleHeight : number
            layoutPriority : number
            CalculateLayoutInputHorizontal () : void
            CalculateLayoutInputVertical () : void
        }
        class LayoutElement extends UnityEngine.EventSystems.UIBehaviour implements UnityEngine.UI.ILayoutIgnorer, UnityEngine.UI.ILayoutElement
        {
            protected [__keep_incompatibility]: never;
            public get ignoreLayout(): boolean;
            public set ignoreLayout(value: boolean);
            public get minWidth(): number;
            public set minWidth(value: number);
            public get minHeight(): number;
            public set minHeight(value: number);
            public get preferredWidth(): number;
            public set preferredWidth(value: number);
            public get preferredHeight(): number;
            public set preferredHeight(value: number);
            public get flexibleWidth(): number;
            public set flexibleWidth(value: number);
            public get flexibleHeight(): number;
            public set flexibleHeight(value: number);
            public get layoutPriority(): number;
            public set layoutPriority(value: number);
            public CalculateLayoutInputHorizontal () : void
            public CalculateLayoutInputVertical () : void
        }
        interface LayoutElement {
            DOFlexibleSize ($endValue: UnityEngine.Vector2, $duration: number, $snapping?: boolean) : DG.Tweening.Core.TweenerCore$3<UnityEngine.Vector2, UnityEngine.Vector2, DG.Tweening.Plugins.Options.VectorOptions>;
            DOMinSize ($endValue: UnityEngine.Vector2, $duration: number, $snapping?: boolean) : DG.Tweening.Core.TweenerCore$3<UnityEngine.Vector2, UnityEngine.Vector2, DG.Tweening.Plugins.Options.VectorOptions>;
            DOPreferredSize ($endValue: UnityEngine.Vector2, $duration: number, $snapping?: boolean) : DG.Tweening.Core.TweenerCore$3<UnityEngine.Vector2, UnityEngine.Vector2, DG.Tweening.Plugins.Options.VectorOptions>;
        }
        interface ILayoutIgnorer
        {
            ignoreLayout : boolean
        }
        class BaseMeshEffect extends UnityEngine.EventSystems.UIBehaviour implements UnityEngine.UI.IMeshModifier
        {
            protected [__keep_incompatibility]: never;
            public ModifyMesh ($mesh: UnityEngine.Mesh) : void
            public ModifyMesh ($vh: UnityEngine.UI.VertexHelper) : void
            public ModifyMesh ($verts: UnityEngine.UI.VertexHelper) : void
        }
        interface IMeshModifier
        {
            ModifyMesh ($verts: UnityEngine.UI.VertexHelper) : void
        }
        class Shadow extends UnityEngine.UI.BaseMeshEffect implements UnityEngine.UI.IMeshModifier
        {
            protected [__keep_incompatibility]: never;
            public get effectColor(): UnityEngine.Color;
            public set effectColor(value: UnityEngine.Color);
            public get effectDistance(): UnityEngine.Vector2;
            public set effectDistance(value: UnityEngine.Vector2);
            public get useGraphicAlpha(): boolean;
            public set useGraphicAlpha(value: boolean);
        }
        class Outline extends UnityEngine.UI.Shadow implements UnityEngine.UI.IMeshModifier
        {
            protected [__keep_incompatibility]: never;
        }
        interface Outline {
            DOColor ($endValue: UnityEngine.Color, $duration: number) : DG.Tweening.Core.TweenerCore$3<UnityEngine.Color, UnityEngine.Color, DG.Tweening.Plugins.Options.ColorOptions>;
            DOFade ($endValue: number, $duration: number) : DG.Tweening.Core.TweenerCore$3<UnityEngine.Color, UnityEngine.Color, DG.Tweening.Plugins.Options.ColorOptions>;
            DOScale ($endValue: UnityEngine.Vector2, $duration: number) : DG.Tweening.Core.TweenerCore$3<UnityEngine.Vector2, UnityEngine.Vector2, DG.Tweening.Plugins.Options.VectorOptions>;
        }
        class ScrollRect extends UnityEngine.EventSystems.UIBehaviour implements UnityEngine.UI.ILayoutController, UnityEngine.UI.ILayoutGroup, UnityEngine.EventSystems.IBeginDragHandler, UnityEngine.EventSystems.IInitializePotentialDragHandler, UnityEngine.EventSystems.IDragHandler, UnityEngine.EventSystems.IEndDragHandler, UnityEngine.UI.ICanvasElement, UnityEngine.EventSystems.IEventSystemHandler, UnityEngine.EventSystems.IScrollHandler, UnityEngine.UI.ILayoutElement
        {
            protected [__keep_incompatibility]: never;
            public get content(): UnityEngine.RectTransform;
            public set content(value: UnityEngine.RectTransform);
            public get horizontal(): boolean;
            public set horizontal(value: boolean);
            public get vertical(): boolean;
            public set vertical(value: boolean);
            public get movementType(): UnityEngine.UI.ScrollRect.MovementType;
            public set movementType(value: UnityEngine.UI.ScrollRect.MovementType);
            public get elasticity(): number;
            public set elasticity(value: number);
            public get inertia(): boolean;
            public set inertia(value: boolean);
            public get decelerationRate(): number;
            public set decelerationRate(value: number);
            public get scrollSensitivity(): number;
            public set scrollSensitivity(value: number);
            public get viewport(): UnityEngine.RectTransform;
            public set viewport(value: UnityEngine.RectTransform);
            public get horizontalScrollbar(): UnityEngine.UI.Scrollbar;
            public set horizontalScrollbar(value: UnityEngine.UI.Scrollbar);
            public get verticalScrollbar(): UnityEngine.UI.Scrollbar;
            public set verticalScrollbar(value: UnityEngine.UI.Scrollbar);
            public get horizontalScrollbarVisibility(): UnityEngine.UI.ScrollRect.ScrollbarVisibility;
            public set horizontalScrollbarVisibility(value: UnityEngine.UI.ScrollRect.ScrollbarVisibility);
            public get verticalScrollbarVisibility(): UnityEngine.UI.ScrollRect.ScrollbarVisibility;
            public set verticalScrollbarVisibility(value: UnityEngine.UI.ScrollRect.ScrollbarVisibility);
            public get horizontalScrollbarSpacing(): number;
            public set horizontalScrollbarSpacing(value: number);
            public get verticalScrollbarSpacing(): number;
            public set verticalScrollbarSpacing(value: number);
            public get onValueChanged(): UnityEngine.UI.ScrollRect.ScrollRectEvent;
            public set onValueChanged(value: UnityEngine.UI.ScrollRect.ScrollRectEvent);
            public get velocity(): UnityEngine.Vector2;
            public set velocity(value: UnityEngine.Vector2);
            public get normalizedPosition(): UnityEngine.Vector2;
            public set normalizedPosition(value: UnityEngine.Vector2);
            public get horizontalNormalizedPosition(): number;
            public set horizontalNormalizedPosition(value: number);
            public get verticalNormalizedPosition(): number;
            public set verticalNormalizedPosition(value: number);
            public get minWidth(): number;
            public get preferredWidth(): number;
            public get flexibleWidth(): number;
            public get minHeight(): number;
            public get preferredHeight(): number;
            public get flexibleHeight(): number;
            public get layoutPriority(): number;
            public get transform(): UnityEngine.Transform;
            public Rebuild ($executing: UnityEngine.UI.CanvasUpdate) : void
            public LayoutComplete () : void
            public GraphicUpdateComplete () : void
            public StopMovement () : void
            public OnScroll ($data: UnityEngine.EventSystems.PointerEventData) : void
            public OnInitializePotentialDrag ($eventData: UnityEngine.EventSystems.PointerEventData) : void
            public OnBeginDrag ($eventData: UnityEngine.EventSystems.PointerEventData) : void
            public OnEndDrag ($eventData: UnityEngine.EventSystems.PointerEventData) : void
            public OnDrag ($eventData: UnityEngine.EventSystems.PointerEventData) : void
            public CalculateLayoutInputHorizontal () : void
            public CalculateLayoutInputVertical () : void
            public SetLayoutHorizontal () : void
            public SetLayoutVertical () : void
            public OnScroll ($eventData: UnityEngine.EventSystems.PointerEventData) : void
        }
        interface ScrollRect {
            DONormalizedPos ($endValue: UnityEngine.Vector2, $duration: number, $snapping?: boolean) : DG.Tweening.Tweener;
            DOHorizontalNormalizedPos ($endValue: number, $duration: number, $snapping?: boolean) : DG.Tweening.Tweener;
            DOVerticalNormalizedPos ($endValue: number, $duration: number, $snapping?: boolean) : DG.Tweening.Tweener;
        }
        interface ILayoutController
        {
            SetLayoutHorizontal () : void
            SetLayoutVertical () : void
        }
        interface ILayoutGroup extends UnityEngine.UI.ILayoutController
        {
            SetLayoutHorizontal () : void
            SetLayoutVertical () : void
        }
        class Selectable extends UnityEngine.EventSystems.UIBehaviour implements UnityEngine.EventSystems.IEventSystemHandler, UnityEngine.EventSystems.IPointerEnterHandler, UnityEngine.EventSystems.ISelectHandler, UnityEngine.EventSystems.IPointerExitHandler, UnityEngine.EventSystems.IDeselectHandler, UnityEngine.EventSystems.IPointerDownHandler, UnityEngine.EventSystems.IPointerUpHandler, UnityEngine.EventSystems.IMoveHandler
        {
            protected [__keep_incompatibility]: never;
            public static get allSelectablesArray(): System.Array$1<UnityEngine.UI.Selectable>;
            public static get allSelectableCount(): number;
            public get navigation(): UnityEngine.UI.Navigation;
            public set navigation(value: UnityEngine.UI.Navigation);
            public get transition(): UnityEngine.UI.Selectable.Transition;
            public set transition(value: UnityEngine.UI.Selectable.Transition);
            public get colors(): UnityEngine.UI.ColorBlock;
            public set colors(value: UnityEngine.UI.ColorBlock);
            public get spriteState(): UnityEngine.UI.SpriteState;
            public set spriteState(value: UnityEngine.UI.SpriteState);
            public get animationTriggers(): UnityEngine.UI.AnimationTriggers;
            public set animationTriggers(value: UnityEngine.UI.AnimationTriggers);
            public get targetGraphic(): UnityEngine.UI.Graphic;
            public set targetGraphic(value: UnityEngine.UI.Graphic);
            public get interactable(): boolean;
            public set interactable(value: boolean);
            public get image(): UnityEngine.UI.Image;
            public set image(value: UnityEngine.UI.Image);
            public get animator(): UnityEngine.Animator;
            public static AllSelectablesNoAlloc ($selectables: System.Array$1<UnityEngine.UI.Selectable>) : number
            public IsInteractable () : boolean
            public FindSelectable ($dir: UnityEngine.Vector3) : UnityEngine.UI.Selectable
            public FindSelectableOnLeft () : UnityEngine.UI.Selectable
            public FindSelectableOnRight () : UnityEngine.UI.Selectable
            public FindSelectableOnUp () : UnityEngine.UI.Selectable
            public FindSelectableOnDown () : UnityEngine.UI.Selectable
            public OnMove ($eventData: UnityEngine.EventSystems.AxisEventData) : void
            public OnPointerDown ($eventData: UnityEngine.EventSystems.PointerEventData) : void
            public OnPointerUp ($eventData: UnityEngine.EventSystems.PointerEventData) : void
            public OnPointerEnter ($eventData: UnityEngine.EventSystems.PointerEventData) : void
            public OnPointerExit ($eventData: UnityEngine.EventSystems.PointerEventData) : void
            public OnSelect ($eventData: UnityEngine.EventSystems.BaseEventData) : void
            public OnDeselect ($eventData: UnityEngine.EventSystems.BaseEventData) : void
            public Select () : void
        }
        class Slider extends UnityEngine.UI.Selectable implements UnityEngine.EventSystems.IInitializePotentialDragHandler, UnityEngine.EventSystems.IDragHandler, UnityEngine.UI.ICanvasElement, UnityEngine.EventSystems.IEventSystemHandler, UnityEngine.EventSystems.IPointerEnterHandler, UnityEngine.EventSystems.ISelectHandler, UnityEngine.EventSystems.IPointerExitHandler, UnityEngine.EventSystems.IDeselectHandler, UnityEngine.EventSystems.IPointerDownHandler, UnityEngine.EventSystems.IPointerUpHandler, UnityEngine.EventSystems.IMoveHandler
        {
            protected [__keep_incompatibility]: never;
            public get fillRect(): UnityEngine.RectTransform;
            public set fillRect(value: UnityEngine.RectTransform);
            public get handleRect(): UnityEngine.RectTransform;
            public set handleRect(value: UnityEngine.RectTransform);
            public get direction(): UnityEngine.UI.Slider.Direction;
            public set direction(value: UnityEngine.UI.Slider.Direction);
            public get minValue(): number;
            public set minValue(value: number);
            public get maxValue(): number;
            public set maxValue(value: number);
            public get wholeNumbers(): boolean;
            public set wholeNumbers(value: boolean);
            public get value(): number;
            public set value(value: number);
            public get normalizedValue(): number;
            public set normalizedValue(value: number);
            public get onValueChanged(): UnityEngine.UI.Slider.SliderEvent;
            public set onValueChanged(value: UnityEngine.UI.Slider.SliderEvent);
            public get transform(): UnityEngine.Transform;
            public SetValueWithoutNotify ($input: number) : void
            public Rebuild ($executing: UnityEngine.UI.CanvasUpdate) : void
            public LayoutComplete () : void
            public GraphicUpdateComplete () : void
            public OnDrag ($eventData: UnityEngine.EventSystems.PointerEventData) : void
            public OnInitializePotentialDrag ($eventData: UnityEngine.EventSystems.PointerEventData) : void
            public SetDirection ($direction: UnityEngine.UI.Slider.Direction, $includeRectLayouts: boolean) : void
        }
        interface Slider {
            DOValue ($endValue: number, $duration: number, $snapping?: boolean) : DG.Tweening.Core.TweenerCore$3<number, number, DG.Tweening.Plugins.Options.FloatOptions>;
        }
        class Text extends UnityEngine.UI.MaskableGraphic implements UnityEngine.UI.IClippable, UnityEngine.UI.IMaterialModifier, UnityEngine.UI.IMaskable, UnityEngine.UI.ICanvasElement, UnityEngine.UI.ILayoutElement
        {
            protected [__keep_incompatibility]: never;
            public get cachedTextGenerator(): UnityEngine.TextGenerator;
            public get cachedTextGeneratorForLayout(): UnityEngine.TextGenerator;
            public get mainTexture(): UnityEngine.Texture;
            public get font(): UnityEngine.Font;
            public set font(value: UnityEngine.Font);
            public get text(): string;
            public set text(value: string);
            public get supportRichText(): boolean;
            public set supportRichText(value: boolean);
            public get resizeTextForBestFit(): boolean;
            public set resizeTextForBestFit(value: boolean);
            public get resizeTextMinSize(): number;
            public set resizeTextMinSize(value: number);
            public get resizeTextMaxSize(): number;
            public set resizeTextMaxSize(value: number);
            public get alignment(): UnityEngine.TextAnchor;
            public set alignment(value: UnityEngine.TextAnchor);
            public get alignByGeometry(): boolean;
            public set alignByGeometry(value: boolean);
            public get fontSize(): number;
            public set fontSize(value: number);
            public get horizontalOverflow(): UnityEngine.HorizontalWrapMode;
            public set horizontalOverflow(value: UnityEngine.HorizontalWrapMode);
            public get verticalOverflow(): UnityEngine.VerticalWrapMode;
            public set verticalOverflow(value: UnityEngine.VerticalWrapMode);
            public get lineSpacing(): number;
            public set lineSpacing(value: number);
            public get fontStyle(): UnityEngine.FontStyle;
            public set fontStyle(value: UnityEngine.FontStyle);
            public get pixelsPerUnit(): number;
            public get minWidth(): number;
            public get preferredWidth(): number;
            public get flexibleWidth(): number;
            public get minHeight(): number;
            public get preferredHeight(): number;
            public get flexibleHeight(): number;
            public get layoutPriority(): number;
            public FontTextureChanged () : void
            public GetGenerationSettings ($extents: UnityEngine.Vector2) : UnityEngine.TextGenerationSettings
            public static GetTextAnchorPivot ($anchor: UnityEngine.TextAnchor) : UnityEngine.Vector2
            public CalculateLayoutInputHorizontal () : void
            public CalculateLayoutInputVertical () : void
        }
        interface Text {
            DOColor ($endValue: UnityEngine.Color, $duration: number) : DG.Tweening.Core.TweenerCore$3<UnityEngine.Color, UnityEngine.Color, DG.Tweening.Plugins.Options.ColorOptions>;
            DOCounter ($fromValue: number, $endValue: number, $duration: number, $addThousandsSeparator?: boolean, $culture?: System.Globalization.CultureInfo) : DG.Tweening.Core.TweenerCore$3<number, number, DG.Tweening.Plugins.Options.NoOptions>;
            DOFade ($endValue: number, $duration: number) : DG.Tweening.Core.TweenerCore$3<UnityEngine.Color, UnityEngine.Color, DG.Tweening.Plugins.Options.ColorOptions>;
            DOText ($endValue: string, $duration: number, $richTextEnabled?: boolean, $scrambleMode?: DG.Tweening.ScrambleMode, $scrambleChars?: string) : DG.Tweening.Core.TweenerCore$3<string, string, DG.Tweening.Plugins.Options.StringOptions>;
            DOBlendableColor ($endValue: UnityEngine.Color, $duration: number) : DG.Tweening.Tweener;
        }
        class AnimationTriggers extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public get normalTrigger(): string;
            public set normalTrigger(value: string);
            public get highlightedTrigger(): string;
            public set highlightedTrigger(value: string);
            public get pressedTrigger(): string;
            public set pressedTrigger(value: string);
            public get selectedTrigger(): string;
            public set selectedTrigger(value: string);
            public get disabledTrigger(): string;
            public set disabledTrigger(value: string);
            public constructor ()
        }
        class Button extends UnityEngine.UI.Selectable implements UnityEngine.EventSystems.ISubmitHandler, UnityEngine.EventSystems.IPointerClickHandler, UnityEngine.EventSystems.IEventSystemHandler, UnityEngine.EventSystems.IPointerEnterHandler, UnityEngine.EventSystems.ISelectHandler, UnityEngine.EventSystems.IPointerExitHandler, UnityEngine.EventSystems.IDeselectHandler, UnityEngine.EventSystems.IPointerDownHandler, UnityEngine.EventSystems.IPointerUpHandler, UnityEngine.EventSystems.IMoveHandler
        {
            protected [__keep_incompatibility]: never;
            public get onClick(): UnityEngine.UI.Button.ButtonClickedEvent;
            public set onClick(value: UnityEngine.UI.Button.ButtonClickedEvent);
            public OnPointerClick ($eventData: UnityEngine.EventSystems.PointerEventData) : void
            public OnSubmit ($eventData: UnityEngine.EventSystems.BaseEventData) : void
        }
        enum CanvasUpdate
        { Prelayout = 0, Layout = 1, PostLayout = 2, PreRender = 3, LatePreRender = 4, MaxUpdateValue = 5 }
        class CanvasUpdateRegistry extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public static get instance(): UnityEngine.UI.CanvasUpdateRegistry;
            public static RegisterCanvasElementForLayoutRebuild ($element: UnityEngine.UI.ICanvasElement) : void
            public static TryRegisterCanvasElementForLayoutRebuild ($element: UnityEngine.UI.ICanvasElement) : boolean
            public static RegisterCanvasElementForGraphicRebuild ($element: UnityEngine.UI.ICanvasElement) : void
            public static TryRegisterCanvasElementForGraphicRebuild ($element: UnityEngine.UI.ICanvasElement) : boolean
            public static UnRegisterCanvasElementForRebuild ($element: UnityEngine.UI.ICanvasElement) : void
            public static DisableCanvasElementForRebuild ($element: UnityEngine.UI.ICanvasElement) : void
            public static IsRebuildingLayout () : boolean
            public static IsRebuildingGraphics () : boolean
        }
        class ColorBlock extends System.ValueType implements System.IEquatable$1<UnityEngine.UI.ColorBlock>
        {
            protected [__keep_incompatibility]: never;
            public static defaultColorBlock : UnityEngine.UI.ColorBlock
            public get normalColor(): UnityEngine.Color;
            public set normalColor(value: UnityEngine.Color);
            public get highlightedColor(): UnityEngine.Color;
            public set highlightedColor(value: UnityEngine.Color);
            public get pressedColor(): UnityEngine.Color;
            public set pressedColor(value: UnityEngine.Color);
            public get selectedColor(): UnityEngine.Color;
            public set selectedColor(value: UnityEngine.Color);
            public get disabledColor(): UnityEngine.Color;
            public set disabledColor(value: UnityEngine.Color);
            public get colorMultiplier(): number;
            public set colorMultiplier(value: number);
            public get fadeDuration(): number;
            public set fadeDuration(value: number);
            public Equals ($obj: any) : boolean
            public Equals ($other: UnityEngine.UI.ColorBlock) : boolean
            public static op_Equality ($point1: UnityEngine.UI.ColorBlock, $point2: UnityEngine.UI.ColorBlock) : boolean
            public static op_Inequality ($point1: UnityEngine.UI.ColorBlock, $point2: UnityEngine.UI.ColorBlock) : boolean
        }
        class ClipperRegistry extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public static get instance(): UnityEngine.UI.ClipperRegistry;
            public Cull () : void
            public static Register ($c: UnityEngine.UI.IClipper) : void
            public static Unregister ($c: UnityEngine.UI.IClipper) : void
            public static Disable ($c: UnityEngine.UI.IClipper) : void
        }
        interface IClipper
        {
            PerformClipping () : void
        }
        class Clipping extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public static FindCullAndClipWorldRect ($rectMaskParents: System.Collections.Generic.List$1<UnityEngine.UI.RectMask2D>, $validRect: $Ref<boolean>) : UnityEngine.Rect
        }
        class RectMask2D extends UnityEngine.EventSystems.UIBehaviour implements UnityEngine.ICanvasRaycastFilter, UnityEngine.UI.IClipper
        {
            protected [__keep_incompatibility]: never;
            public get padding(): UnityEngine.Vector4;
            public set padding(value: UnityEngine.Vector4);
            public get softness(): UnityEngine.Vector2Int;
            public set softness(value: UnityEngine.Vector2Int);
            public get canvasRect(): UnityEngine.Rect;
            public get rectTransform(): UnityEngine.RectTransform;
            public IsRaycastLocationValid ($sp: UnityEngine.Vector2, $eventCamera: UnityEngine.Camera) : boolean
            public PerformClipping () : void
            public UpdateClipSoftness () : void
            public AddClippable ($clippable: UnityEngine.UI.IClippable) : void
            public RemoveClippable ($clippable: UnityEngine.UI.IClippable) : void
        }
        class DefaultControls extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public static get factory(): UnityEngine.UI.DefaultControls.IFactoryControls;
            public static set factory(value: UnityEngine.UI.DefaultControls.IFactoryControls);
            public static CreatePanel ($resources: UnityEngine.UI.DefaultControls.Resources) : UnityEngine.GameObject
            public static CreateButton ($resources: UnityEngine.UI.DefaultControls.Resources) : UnityEngine.GameObject
            public static CreateText ($resources: UnityEngine.UI.DefaultControls.Resources) : UnityEngine.GameObject
            public static CreateImage ($resources: UnityEngine.UI.DefaultControls.Resources) : UnityEngine.GameObject
            public static CreateRawImage ($resources: UnityEngine.UI.DefaultControls.Resources) : UnityEngine.GameObject
            public static CreateSlider ($resources: UnityEngine.UI.DefaultControls.Resources) : UnityEngine.GameObject
            public static CreateScrollbar ($resources: UnityEngine.UI.DefaultControls.Resources) : UnityEngine.GameObject
            public static CreateToggle ($resources: UnityEngine.UI.DefaultControls.Resources) : UnityEngine.GameObject
            public static CreateInputField ($resources: UnityEngine.UI.DefaultControls.Resources) : UnityEngine.GameObject
            public static CreateDropdown ($resources: UnityEngine.UI.DefaultControls.Resources) : UnityEngine.GameObject
            public static CreateScrollView ($resources: UnityEngine.UI.DefaultControls.Resources) : UnityEngine.GameObject
        }
        class Dropdown extends UnityEngine.UI.Selectable implements UnityEngine.EventSystems.ISubmitHandler, UnityEngine.EventSystems.IPointerClickHandler, UnityEngine.EventSystems.ICancelHandler, UnityEngine.EventSystems.IEventSystemHandler, UnityEngine.EventSystems.IPointerEnterHandler, UnityEngine.EventSystems.ISelectHandler, UnityEngine.EventSystems.IPointerExitHandler, UnityEngine.EventSystems.IDeselectHandler, UnityEngine.EventSystems.IPointerDownHandler, UnityEngine.EventSystems.IPointerUpHandler, UnityEngine.EventSystems.IMoveHandler
        {
            protected [__keep_incompatibility]: never;
            public get template(): UnityEngine.RectTransform;
            public set template(value: UnityEngine.RectTransform);
            public get captionText(): UnityEngine.UI.Text;
            public set captionText(value: UnityEngine.UI.Text);
            public get captionImage(): UnityEngine.UI.Image;
            public set captionImage(value: UnityEngine.UI.Image);
            public get itemText(): UnityEngine.UI.Text;
            public set itemText(value: UnityEngine.UI.Text);
            public get itemImage(): UnityEngine.UI.Image;
            public set itemImage(value: UnityEngine.UI.Image);
            public get options(): System.Collections.Generic.List$1<UnityEngine.UI.Dropdown.OptionData>;
            public set options(value: System.Collections.Generic.List$1<UnityEngine.UI.Dropdown.OptionData>);
            public get onValueChanged(): UnityEngine.UI.Dropdown.DropdownEvent;
            public set onValueChanged(value: UnityEngine.UI.Dropdown.DropdownEvent);
            public get alphaFadeSpeed(): number;
            public set alphaFadeSpeed(value: number);
            public get value(): number;
            public set value(value: number);
            public SetValueWithoutNotify ($input: number) : void
            public RefreshShownValue () : void
            public AddOptions ($options: System.Collections.Generic.List$1<UnityEngine.UI.Dropdown.OptionData>) : void
            public AddOptions ($options: System.Collections.Generic.List$1<string>) : void
            public AddOptions ($options: System.Collections.Generic.List$1<UnityEngine.Sprite>) : void
            public ClearOptions () : void
            public OnPointerClick ($eventData: UnityEngine.EventSystems.PointerEventData) : void
            public OnSubmit ($eventData: UnityEngine.EventSystems.BaseEventData) : void
            public OnCancel ($eventData: UnityEngine.EventSystems.BaseEventData) : void
            public Show () : void
            public Hide () : void
        }
        class FontData extends System.Object implements UnityEngine.ISerializationCallbackReceiver
        {
            protected [__keep_incompatibility]: never;
            public static get defaultFontData(): UnityEngine.UI.FontData;
            public get font(): UnityEngine.Font;
            public set font(value: UnityEngine.Font);
            public get fontSize(): number;
            public set fontSize(value: number);
            public get fontStyle(): UnityEngine.FontStyle;
            public set fontStyle(value: UnityEngine.FontStyle);
            public get bestFit(): boolean;
            public set bestFit(value: boolean);
            public get minSize(): number;
            public set minSize(value: number);
            public get maxSize(): number;
            public set maxSize(value: number);
            public get alignment(): UnityEngine.TextAnchor;
            public set alignment(value: UnityEngine.TextAnchor);
            public get alignByGeometry(): boolean;
            public set alignByGeometry(value: boolean);
            public get richText(): boolean;
            public set richText(value: boolean);
            public get horizontalOverflow(): UnityEngine.HorizontalWrapMode;
            public set horizontalOverflow(value: UnityEngine.HorizontalWrapMode);
            public get verticalOverflow(): UnityEngine.VerticalWrapMode;
            public set verticalOverflow(value: UnityEngine.VerticalWrapMode);
            public get lineSpacing(): number;
            public set lineSpacing(value: number);
            public constructor ()
        }
        class FontUpdateTracker extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public static TrackText ($t: UnityEngine.UI.Text) : void
            public static UntrackText ($t: UnityEngine.UI.Text) : void
        }
        class GraphicRaycaster extends UnityEngine.EventSystems.BaseRaycaster
        {
            protected [__keep_incompatibility]: never;
            public get sortOrderPriority(): number;
            public get renderOrderPriority(): number;
            public get ignoreReversedGraphics(): boolean;
            public set ignoreReversedGraphics(value: boolean);
            public get blockingObjects(): UnityEngine.UI.GraphicRaycaster.BlockingObjects;
            public set blockingObjects(value: UnityEngine.UI.GraphicRaycaster.BlockingObjects);
            public get blockingMask(): UnityEngine.LayerMask;
            public set blockingMask(value: UnityEngine.LayerMask);
            public get eventCamera(): UnityEngine.Camera;
        }
        class GraphicRebuildTracker extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public static TrackGraphic ($g: UnityEngine.UI.Graphic) : void
            public static UnTrackGraphic ($g: UnityEngine.UI.Graphic) : void
            public static DisableTrackGraphic ($g: UnityEngine.UI.Graphic) : void
        }
        class GraphicRegistry extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public static get instance(): UnityEngine.UI.GraphicRegistry;
            public static RegisterGraphicForCanvas ($c: UnityEngine.Canvas, $graphic: UnityEngine.UI.Graphic) : void
            public static RegisterRaycastGraphicForCanvas ($c: UnityEngine.Canvas, $graphic: UnityEngine.UI.Graphic) : void
            public static UnregisterGraphicForCanvas ($c: UnityEngine.Canvas, $graphic: UnityEngine.UI.Graphic) : void
            public static UnregisterRaycastGraphicForCanvas ($c: UnityEngine.Canvas, $graphic: UnityEngine.UI.Graphic) : void
            public static DisableGraphicForCanvas ($c: UnityEngine.Canvas, $graphic: UnityEngine.UI.Graphic) : void
            public static DisableRaycastGraphicForCanvas ($c: UnityEngine.Canvas, $graphic: UnityEngine.UI.Graphic) : void
            public static GetGraphicsForCanvas ($canvas: UnityEngine.Canvas) : System.Collections.Generic.IList$1<UnityEngine.UI.Graphic>
            public static GetRaycastableGraphicsForCanvas ($canvas: UnityEngine.Canvas) : System.Collections.Generic.IList$1<UnityEngine.UI.Graphic>
        }
        interface IMask
        {
            rectTransform : UnityEngine.RectTransform
            Enabled () : boolean
        }
        class InputField extends UnityEngine.UI.Selectable implements UnityEngine.EventSystems.ISubmitHandler, UnityEngine.EventSystems.IPointerClickHandler, UnityEngine.EventSystems.IBeginDragHandler, UnityEngine.EventSystems.IDragHandler, UnityEngine.EventSystems.IEndDragHandler, UnityEngine.UI.ICanvasElement, UnityEngine.EventSystems.IEventSystemHandler, UnityEngine.EventSystems.IPointerEnterHandler, UnityEngine.EventSystems.IUpdateSelectedHandler, UnityEngine.EventSystems.ISelectHandler, UnityEngine.EventSystems.IPointerExitHandler, UnityEngine.EventSystems.IDeselectHandler, UnityEngine.EventSystems.IPointerDownHandler, UnityEngine.EventSystems.IPointerUpHandler, UnityEngine.EventSystems.IMoveHandler, UnityEngine.UI.ILayoutElement
        {
            protected [__keep_incompatibility]: never;
            public get shouldHideMobileInput(): boolean;
            public set shouldHideMobileInput(value: boolean);
            public get shouldActivateOnSelect(): boolean;
            public set shouldActivateOnSelect(value: boolean);
            public get text(): string;
            public set text(value: string);
            public get isFocused(): boolean;
            public get caretBlinkRate(): number;
            public set caretBlinkRate(value: number);
            public get caretWidth(): number;
            public set caretWidth(value: number);
            public get textComponent(): UnityEngine.UI.Text;
            public set textComponent(value: UnityEngine.UI.Text);
            public get placeholder(): UnityEngine.UI.Graphic;
            public set placeholder(value: UnityEngine.UI.Graphic);
            public get caretColor(): UnityEngine.Color;
            public set caretColor(value: UnityEngine.Color);
            public get customCaretColor(): boolean;
            public set customCaretColor(value: boolean);
            public get selectionColor(): UnityEngine.Color;
            public set selectionColor(value: UnityEngine.Color);
            public get onEndEdit(): UnityEngine.UI.InputField.EndEditEvent;
            public set onEndEdit(value: UnityEngine.UI.InputField.EndEditEvent);
            public get onSubmit(): UnityEngine.UI.InputField.SubmitEvent;
            public set onSubmit(value: UnityEngine.UI.InputField.SubmitEvent);
            public get onValueChanged(): UnityEngine.UI.InputField.OnChangeEvent;
            public set onValueChanged(value: UnityEngine.UI.InputField.OnChangeEvent);
            public get onValidateInput(): UnityEngine.UI.InputField.OnValidateInput;
            public set onValidateInput(value: UnityEngine.UI.InputField.OnValidateInput);
            public get characterLimit(): number;
            public set characterLimit(value: number);
            public get contentType(): UnityEngine.UI.InputField.ContentType;
            public set contentType(value: UnityEngine.UI.InputField.ContentType);
            public get lineType(): UnityEngine.UI.InputField.LineType;
            public set lineType(value: UnityEngine.UI.InputField.LineType);
            public get inputType(): UnityEngine.UI.InputField.InputType;
            public set inputType(value: UnityEngine.UI.InputField.InputType);
            public get touchScreenKeyboard(): UnityEngine.TouchScreenKeyboard;
            public get keyboardType(): UnityEngine.TouchScreenKeyboardType;
            public set keyboardType(value: UnityEngine.TouchScreenKeyboardType);
            public get characterValidation(): UnityEngine.UI.InputField.CharacterValidation;
            public set characterValidation(value: UnityEngine.UI.InputField.CharacterValidation);
            public get readOnly(): boolean;
            public set readOnly(value: boolean);
            public get multiLine(): boolean;
            public get asteriskChar(): number;
            public set asteriskChar(value: number);
            public get wasCanceled(): boolean;
            public get caretPosition(): number;
            public set caretPosition(value: number);
            public get selectionAnchorPosition(): number;
            public set selectionAnchorPosition(value: number);
            public get selectionFocusPosition(): number;
            public set selectionFocusPosition(value: number);
            public get minWidth(): number;
            public get preferredWidth(): number;
            public get flexibleWidth(): number;
            public get minHeight(): number;
            public get preferredHeight(): number;
            public get flexibleHeight(): number;
            public get layoutPriority(): number;
            public get transform(): UnityEngine.Transform;
            public SetTextWithoutNotify ($input: string) : void
            public MoveTextEnd ($shift: boolean) : void
            public MoveTextStart ($shift: boolean) : void
            public OnBeginDrag ($eventData: UnityEngine.EventSystems.PointerEventData) : void
            public OnDrag ($eventData: UnityEngine.EventSystems.PointerEventData) : void
            public OnEndDrag ($eventData: UnityEngine.EventSystems.PointerEventData) : void
            public ProcessEvent ($e: UnityEngine.Event) : void
            public OnUpdateSelected ($eventData: UnityEngine.EventSystems.BaseEventData) : void
            public ForceLabelUpdate () : void
            public Rebuild ($update: UnityEngine.UI.CanvasUpdate) : void
            public LayoutComplete () : void
            public GraphicUpdateComplete () : void
            public ActivateInputField () : void
            public OnPointerClick ($eventData: UnityEngine.EventSystems.PointerEventData) : void
            public DeactivateInputField () : void
            public OnSubmit ($eventData: UnityEngine.EventSystems.BaseEventData) : void
            public CalculateLayoutInputHorizontal () : void
            public CalculateLayoutInputVertical () : void
            public Rebuild ($executing: UnityEngine.UI.CanvasUpdate) : void
        }
        class AspectRatioFitter extends UnityEngine.EventSystems.UIBehaviour implements UnityEngine.UI.ILayoutController, UnityEngine.UI.ILayoutSelfController
        {
            protected [__keep_incompatibility]: never;
            public get aspectMode(): UnityEngine.UI.AspectRatioFitter.AspectMode;
            public set aspectMode(value: UnityEngine.UI.AspectRatioFitter.AspectMode);
            public get aspectRatio(): number;
            public set aspectRatio(value: number);
            public SetLayoutHorizontal () : void
            public SetLayoutVertical () : void
            public IsComponentValidOnObject () : boolean
            public IsAspectModeValid () : boolean
        }
        interface ILayoutSelfController extends UnityEngine.UI.ILayoutController
        {
            SetLayoutHorizontal () : void
            SetLayoutVertical () : void
        }
        class CanvasScaler extends UnityEngine.EventSystems.UIBehaviour
        {
            protected [__keep_incompatibility]: never;
            public get uiScaleMode(): UnityEngine.UI.CanvasScaler.ScaleMode;
            public set uiScaleMode(value: UnityEngine.UI.CanvasScaler.ScaleMode);
            public get referencePixelsPerUnit(): number;
            public set referencePixelsPerUnit(value: number);
            public get scaleFactor(): number;
            public set scaleFactor(value: number);
            public get referenceResolution(): UnityEngine.Vector2;
            public set referenceResolution(value: UnityEngine.Vector2);
            public get screenMatchMode(): UnityEngine.UI.CanvasScaler.ScreenMatchMode;
            public set screenMatchMode(value: UnityEngine.UI.CanvasScaler.ScreenMatchMode);
            public get matchWidthOrHeight(): number;
            public set matchWidthOrHeight(value: number);
            public get physicalUnit(): UnityEngine.UI.CanvasScaler.Unit;
            public set physicalUnit(value: UnityEngine.UI.CanvasScaler.Unit);
            public get fallbackScreenDPI(): number;
            public set fallbackScreenDPI(value: number);
            public get defaultSpriteDPI(): number;
            public set defaultSpriteDPI(value: number);
            public get dynamicPixelsPerUnit(): number;
            public set dynamicPixelsPerUnit(value: number);
        }
        class ContentSizeFitter extends UnityEngine.EventSystems.UIBehaviour implements UnityEngine.UI.ILayoutController, UnityEngine.UI.ILayoutSelfController
        {
            protected [__keep_incompatibility]: never;
            public get horizontalFit(): UnityEngine.UI.ContentSizeFitter.FitMode;
            public set horizontalFit(value: UnityEngine.UI.ContentSizeFitter.FitMode);
            public get verticalFit(): UnityEngine.UI.ContentSizeFitter.FitMode;
            public set verticalFit(value: UnityEngine.UI.ContentSizeFitter.FitMode);
            public SetLayoutHorizontal () : void
            public SetLayoutVertical () : void
        }
        class LayoutGroup extends UnityEngine.EventSystems.UIBehaviour implements UnityEngine.UI.ILayoutController, UnityEngine.UI.ILayoutGroup, UnityEngine.UI.ILayoutElement
        {
            protected [__keep_incompatibility]: never;
            public get padding(): UnityEngine.RectOffset;
            public set padding(value: UnityEngine.RectOffset);
            public get childAlignment(): UnityEngine.TextAnchor;
            public set childAlignment(value: UnityEngine.TextAnchor);
            public get minWidth(): number;
            public get preferredWidth(): number;
            public get flexibleWidth(): number;
            public get minHeight(): number;
            public get preferredHeight(): number;
            public get flexibleHeight(): number;
            public get layoutPriority(): number;
            public CalculateLayoutInputHorizontal () : void
            public CalculateLayoutInputVertical () : void
            public SetLayoutHorizontal () : void
            public SetLayoutVertical () : void
        }
        class GridLayoutGroup extends UnityEngine.UI.LayoutGroup implements UnityEngine.UI.ILayoutController, UnityEngine.UI.ILayoutGroup, UnityEngine.UI.ILayoutElement
        {
            protected [__keep_incompatibility]: never;
            public get startCorner(): UnityEngine.UI.GridLayoutGroup.Corner;
            public set startCorner(value: UnityEngine.UI.GridLayoutGroup.Corner);
            public get startAxis(): UnityEngine.UI.GridLayoutGroup.Axis;
            public set startAxis(value: UnityEngine.UI.GridLayoutGroup.Axis);
            public get cellSize(): UnityEngine.Vector2;
            public set cellSize(value: UnityEngine.Vector2);
            public get spacing(): UnityEngine.Vector2;
            public set spacing(value: UnityEngine.Vector2);
            public get constraint(): UnityEngine.UI.GridLayoutGroup.Constraint;
            public set constraint(value: UnityEngine.UI.GridLayoutGroup.Constraint);
            public get constraintCount(): number;
            public set constraintCount(value: number);
        }
        class HorizontalOrVerticalLayoutGroup extends UnityEngine.UI.LayoutGroup implements UnityEngine.UI.ILayoutController, UnityEngine.UI.ILayoutGroup, UnityEngine.UI.ILayoutElement
        {
            protected [__keep_incompatibility]: never;
            public get spacing(): number;
            public set spacing(value: number);
            public get childForceExpandWidth(): boolean;
            public set childForceExpandWidth(value: boolean);
            public get childForceExpandHeight(): boolean;
            public set childForceExpandHeight(value: boolean);
            public get childControlWidth(): boolean;
            public set childControlWidth(value: boolean);
            public get childControlHeight(): boolean;
            public set childControlHeight(value: boolean);
            public get childScaleWidth(): boolean;
            public set childScaleWidth(value: boolean);
            public get childScaleHeight(): boolean;
            public set childScaleHeight(value: boolean);
            public get reverseArrangement(): boolean;
            public set reverseArrangement(value: boolean);
        }
        class HorizontalLayoutGroup extends UnityEngine.UI.HorizontalOrVerticalLayoutGroup implements UnityEngine.UI.ILayoutController, UnityEngine.UI.ILayoutGroup, UnityEngine.UI.ILayoutElement
        {
            protected [__keep_incompatibility]: never;
        }
        class LayoutRebuilder extends System.Object implements UnityEngine.UI.ICanvasElement
        {
            protected [__keep_incompatibility]: never;
            public get transform(): UnityEngine.Transform;
            public IsDestroyed () : boolean
            public static ForceRebuildLayoutImmediate ($layoutRoot: UnityEngine.RectTransform) : void
            public Rebuild ($executing: UnityEngine.UI.CanvasUpdate) : void
            public static MarkLayoutForRebuild ($rect: UnityEngine.RectTransform) : void
            public LayoutComplete () : void
            public GraphicUpdateComplete () : void
            public constructor ()
        }
        class LayoutUtility extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public static GetMinSize ($rect: UnityEngine.RectTransform, $axis: number) : number
            public static GetPreferredSize ($rect: UnityEngine.RectTransform, $axis: number) : number
            public static GetFlexibleSize ($rect: UnityEngine.RectTransform, $axis: number) : number
            public static GetMinWidth ($rect: UnityEngine.RectTransform) : number
            public static GetPreferredWidth ($rect: UnityEngine.RectTransform) : number
            public static GetFlexibleWidth ($rect: UnityEngine.RectTransform) : number
            public static GetMinHeight ($rect: UnityEngine.RectTransform) : number
            public static GetPreferredHeight ($rect: UnityEngine.RectTransform) : number
            public static GetFlexibleHeight ($rect: UnityEngine.RectTransform) : number
            public static GetLayoutProperty ($rect: UnityEngine.RectTransform, $property: System.Func$2<UnityEngine.UI.ILayoutElement, number>, $defaultValue: number) : number
            public static GetLayoutProperty ($rect: UnityEngine.RectTransform, $property: System.Func$2<UnityEngine.UI.ILayoutElement, number>, $defaultValue: number, $source: $Ref<UnityEngine.UI.ILayoutElement>) : number
        }
        class VerticalLayoutGroup extends UnityEngine.UI.HorizontalOrVerticalLayoutGroup implements UnityEngine.UI.ILayoutController, UnityEngine.UI.ILayoutGroup, UnityEngine.UI.ILayoutElement
        {
            protected [__keep_incompatibility]: never;
        }
        class Mask extends UnityEngine.EventSystems.UIBehaviour implements UnityEngine.UI.IMaterialModifier, UnityEngine.ICanvasRaycastFilter
        {
            protected [__keep_incompatibility]: never;
            public get rectTransform(): UnityEngine.RectTransform;
            public get showMaskGraphic(): boolean;
            public set showMaskGraphic(value: boolean);
            public get graphic(): UnityEngine.UI.Graphic;
            public MaskEnabled () : boolean
            public IsRaycastLocationValid ($sp: UnityEngine.Vector2, $eventCamera: UnityEngine.Camera) : boolean
            public GetModifiedMaterial ($baseMaterial: UnityEngine.Material) : UnityEngine.Material
        }
        class MaskUtilities extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public static Notify2DMaskStateChanged ($mask: UnityEngine.Component) : void
            public static NotifyStencilStateChanged ($mask: UnityEngine.Component) : void
            public static FindRootSortOverrideCanvas ($start: UnityEngine.Transform) : UnityEngine.Transform
            public static GetStencilDepth ($transform: UnityEngine.Transform, $stopAfter: UnityEngine.Transform) : number
            public static IsDescendantOrSelf ($father: UnityEngine.Transform, $child: UnityEngine.Transform) : boolean
            public static GetRectMaskForClippable ($clippable: UnityEngine.UI.IClippable) : UnityEngine.UI.RectMask2D
            public static GetRectMasksForClip ($clipper: UnityEngine.UI.RectMask2D, $masks: System.Collections.Generic.List$1<UnityEngine.UI.RectMask2D>) : void
            public constructor ()
        }
        class Navigation extends System.ValueType implements System.IEquatable$1<UnityEngine.UI.Navigation>
        {
            protected [__keep_incompatibility]: never;
            public get mode(): UnityEngine.UI.Navigation.Mode;
            public set mode(value: UnityEngine.UI.Navigation.Mode);
            public get wrapAround(): boolean;
            public set wrapAround(value: boolean);
            public get selectOnUp(): UnityEngine.UI.Selectable;
            public set selectOnUp(value: UnityEngine.UI.Selectable);
            public get selectOnDown(): UnityEngine.UI.Selectable;
            public set selectOnDown(value: UnityEngine.UI.Selectable);
            public get selectOnLeft(): UnityEngine.UI.Selectable;
            public set selectOnLeft(value: UnityEngine.UI.Selectable);
            public get selectOnRight(): UnityEngine.UI.Selectable;
            public set selectOnRight(value: UnityEngine.UI.Selectable);
            public static get defaultNavigation(): UnityEngine.UI.Navigation;
            public Equals ($other: UnityEngine.UI.Navigation) : boolean
        }
        class RawImage extends UnityEngine.UI.MaskableGraphic implements UnityEngine.UI.IClippable, UnityEngine.UI.IMaterialModifier, UnityEngine.UI.IMaskable, UnityEngine.UI.ICanvasElement
        {
            protected [__keep_incompatibility]: never;
            public get mainTexture(): UnityEngine.Texture;
            public get texture(): UnityEngine.Texture;
            public set texture(value: UnityEngine.Texture);
            public get uvRect(): UnityEngine.Rect;
            public set uvRect(value: UnityEngine.Rect);
        }
        class Scrollbar extends UnityEngine.UI.Selectable implements UnityEngine.EventSystems.IBeginDragHandler, UnityEngine.EventSystems.IInitializePotentialDragHandler, UnityEngine.EventSystems.IDragHandler, UnityEngine.UI.ICanvasElement, UnityEngine.EventSystems.IEventSystemHandler, UnityEngine.EventSystems.IPointerEnterHandler, UnityEngine.EventSystems.ISelectHandler, UnityEngine.EventSystems.IPointerExitHandler, UnityEngine.EventSystems.IDeselectHandler, UnityEngine.EventSystems.IPointerDownHandler, UnityEngine.EventSystems.IPointerUpHandler, UnityEngine.EventSystems.IMoveHandler
        {
            protected [__keep_incompatibility]: never;
            public get handleRect(): UnityEngine.RectTransform;
            public set handleRect(value: UnityEngine.RectTransform);
            public get direction(): UnityEngine.UI.Scrollbar.Direction;
            public set direction(value: UnityEngine.UI.Scrollbar.Direction);
            public get value(): number;
            public set value(value: number);
            public get size(): number;
            public set size(value: number);
            public get numberOfSteps(): number;
            public set numberOfSteps(value: number);
            public get onValueChanged(): UnityEngine.UI.Scrollbar.ScrollEvent;
            public set onValueChanged(value: UnityEngine.UI.Scrollbar.ScrollEvent);
            public get transform(): UnityEngine.Transform;
            public SetValueWithoutNotify ($input: number) : void
            public Rebuild ($executing: UnityEngine.UI.CanvasUpdate) : void
            public LayoutComplete () : void
            public GraphicUpdateComplete () : void
            public OnBeginDrag ($eventData: UnityEngine.EventSystems.PointerEventData) : void
            public OnDrag ($eventData: UnityEngine.EventSystems.PointerEventData) : void
            public OnInitializePotentialDrag ($eventData: UnityEngine.EventSystems.PointerEventData) : void
            public SetDirection ($direction: UnityEngine.UI.Scrollbar.Direction, $includeRectLayouts: boolean) : void
        }
        class SpriteState extends System.ValueType implements System.IEquatable$1<UnityEngine.UI.SpriteState>
        {
            protected [__keep_incompatibility]: never;
            public get highlightedSprite(): UnityEngine.Sprite;
            public set highlightedSprite(value: UnityEngine.Sprite);
            public get pressedSprite(): UnityEngine.Sprite;
            public set pressedSprite(value: UnityEngine.Sprite);
            public get selectedSprite(): UnityEngine.Sprite;
            public set selectedSprite(value: UnityEngine.Sprite);
            public get disabledSprite(): UnityEngine.Sprite;
            public set disabledSprite(value: UnityEngine.Sprite);
            public Equals ($other: UnityEngine.UI.SpriteState) : boolean
        }
        class StencilMaterial extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public static Add ($baseMat: UnityEngine.Material, $stencilID: number, $operation: UnityEngine.Rendering.StencilOp, $compareFunction: UnityEngine.Rendering.CompareFunction, $colorWriteMask: UnityEngine.Rendering.ColorWriteMask) : UnityEngine.Material
            public static Add ($baseMat: UnityEngine.Material, $stencilID: number, $operation: UnityEngine.Rendering.StencilOp, $compareFunction: UnityEngine.Rendering.CompareFunction, $colorWriteMask: UnityEngine.Rendering.ColorWriteMask, $readMask: number, $writeMask: number) : UnityEngine.Material
            public static Remove ($customMat: UnityEngine.Material) : void
            public static ClearAll () : void
        }
        class Toggle extends UnityEngine.UI.Selectable implements UnityEngine.EventSystems.ISubmitHandler, UnityEngine.EventSystems.IPointerClickHandler, UnityEngine.UI.ICanvasElement, UnityEngine.EventSystems.IEventSystemHandler, UnityEngine.EventSystems.IPointerEnterHandler, UnityEngine.EventSystems.ISelectHandler, UnityEngine.EventSystems.IPointerExitHandler, UnityEngine.EventSystems.IDeselectHandler, UnityEngine.EventSystems.IPointerDownHandler, UnityEngine.EventSystems.IPointerUpHandler, UnityEngine.EventSystems.IMoveHandler
        {
            protected [__keep_incompatibility]: never;
            public toggleTransition : UnityEngine.UI.Toggle.ToggleTransition
            public graphic : UnityEngine.UI.Graphic
            public onValueChanged : UnityEngine.UI.Toggle.ToggleEvent
            public get group(): UnityEngine.UI.ToggleGroup;
            public set group(value: UnityEngine.UI.ToggleGroup);
            public get isOn(): boolean;
            public set isOn(value: boolean);
            public get transform(): UnityEngine.Transform;
            public Rebuild ($executing: UnityEngine.UI.CanvasUpdate) : void
            public LayoutComplete () : void
            public GraphicUpdateComplete () : void
            public SetIsOnWithoutNotify ($value: boolean) : void
            public OnPointerClick ($eventData: UnityEngine.EventSystems.PointerEventData) : void
            public OnSubmit ($eventData: UnityEngine.EventSystems.BaseEventData) : void
        }
        class ToggleGroup extends UnityEngine.EventSystems.UIBehaviour
        {
            protected [__keep_incompatibility]: never;
            public get allowSwitchOff(): boolean;
            public set allowSwitchOff(value: boolean);
            public NotifyToggleOn ($toggle: UnityEngine.UI.Toggle, $sendCallback?: boolean) : void
            public UnregisterToggle ($toggle: UnityEngine.UI.Toggle) : void
            public RegisterToggle ($toggle: UnityEngine.UI.Toggle) : void
            public EnsureValidState () : void
            public AnyTogglesOn () : boolean
            public ActiveToggles () : System.Collections.Generic.IEnumerable$1<UnityEngine.UI.Toggle>
            public GetFirstActiveToggle () : UnityEngine.UI.Toggle
            public SetAllTogglesOff ($sendCallback?: boolean) : void
        }
        class VertexHelper extends System.Object implements System.IDisposable
        {
            protected [__keep_incompatibility]: never;
            public get currentVertCount(): number;
            public get currentIndexCount(): number;
            public Dispose () : void
            public Clear () : void
            public PopulateUIVertex ($vertex: $Ref<UnityEngine.UIVertex>, $i: number) : void
            public SetUIVertex ($vertex: UnityEngine.UIVertex, $i: number) : void
            public FillMesh ($mesh: UnityEngine.Mesh) : void
            public AddVert ($position: UnityEngine.Vector3, $color: UnityEngine.Color32, $uv0: UnityEngine.Vector4, $uv1: UnityEngine.Vector4, $uv2: UnityEngine.Vector4, $uv3: UnityEngine.Vector4, $normal: UnityEngine.Vector3, $tangent: UnityEngine.Vector4) : void
            public AddVert ($position: UnityEngine.Vector3, $color: UnityEngine.Color32, $uv0: UnityEngine.Vector4, $uv1: UnityEngine.Vector4, $normal: UnityEngine.Vector3, $tangent: UnityEngine.Vector4) : void
            public AddVert ($position: UnityEngine.Vector3, $color: UnityEngine.Color32, $uv0: UnityEngine.Vector4) : void
            public AddVert ($v: UnityEngine.UIVertex) : void
            public AddTriangle ($idx0: number, $idx1: number, $idx2: number) : void
            public AddUIVertexQuad ($verts: System.Array$1<UnityEngine.UIVertex>) : void
            public AddUIVertexStream ($verts: System.Collections.Generic.List$1<UnityEngine.UIVertex>, $indices: System.Collections.Generic.List$1<number>) : void
            public AddUIVertexTriangleStream ($verts: System.Collections.Generic.List$1<UnityEngine.UIVertex>) : void
            public GetUIVertexStream ($stream: System.Collections.Generic.List$1<UnityEngine.UIVertex>) : void
            public constructor ()
            public constructor ($m: UnityEngine.Mesh)
        }
        class BaseVertexEffect extends System.Object
        {
            protected [__keep_incompatibility]: never;
        }
        interface IVertexModifier
        {
        }
        class PositionAsUV1 extends UnityEngine.UI.BaseMeshEffect implements UnityEngine.UI.IMeshModifier
        {
            protected [__keep_incompatibility]: never;
        }
    }
    namespace Microlight.MicroBar {
        class DemoManager extends UnityEngine.MonoBehaviour
        {
            protected [__keep_incompatibility]: never;
            public DamageLeft () : void
            public HealLeft () : void
            public DamageRight () : void
            public HealRight () : void
            public NextBarType () : void
            public PreviousBarType () : void
            public ToggleSound () : void
            public constructor ()
        }
        class AnimCommand extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public constructor ()
        }
        enum AnimExecution
        { Sequence = 0, Parallel = 1, Wait = 2 }
        enum AnimEffect
        { Color = 0, Fade = 1, Fill = 2, Move = 3, Rotate = 4, Scale = 5, Punch = 6, Shake = 7, AnchorMove = 8 }
        enum ValueMode
        { Absolute = 0, Additive = 1, Multiplicative = 2, StartingValue = 3, DefaultValue = 4 }
        enum AnimAxis
        { Uniform = 0, XY = 1, X = 2, Y = 3 }
        enum TransformProperties
        { Position = 0, Rotation = 1, Scale = 2, AnchorPosition = 3 }
        enum RenderType
        { Image = 0, Sprite = 1 }
        enum SimpleAnim
        { None = 0, Fill = 1, Flash = 2, Shake = 3 }
        enum UpdateAnim
        { Damage = 0, Heal = 1, CriticalDamage = 2, CriticalHeal = 3, Armor = 4, DOT = 5, HOT = 6, MaxHP = 7, Revive = 8, Death = 9, Custom = 10 }
        class MicroBarAnimation extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public get Sequence(): DG.Tweening.Sequence;
            public constructor ()
        }
        class GraphicsDefaultValues extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
            public get Color(): UnityEngine.Color;
            public get Fade(): number;
            public get Fill(): number;
            public get Position(): UnityEngine.Vector3;
            public get Rotation(): number;
            public get Scale(): UnityEngine.Vector3;
            public get AnchorPosition(): UnityEngine.Vector2;
            public constructor ($image: UnityEngine.UI.Image)
            public constructor ($sprite: UnityEngine.SpriteRenderer)
        }
        enum MaxHealthCalculation
        { Keep = 0, Follow = 1, FollowIncrease = 2, Proportional = 3 }
        class MicroBar extends UnityEngine.MonoBehaviour
        {
            protected [__keep_incompatibility]: never;
            public get PreviousValue(): number;
            public get CurrentValue(): number;
            public get MaxValue(): number;
            public get HPPercent(): number;
            public static get MaxHealthCalculation(): Microlight.MicroBar.MaxHealthCalculation;
            public get Animations(): System.Collections.Generic.List$1<Microlight.MicroBar.MicroBarAnimation>;
            public add_OnMaxValueChange ($value: System.Action$1<Microlight.MicroBar.MicroBar>) : void
            public remove_OnMaxValueChange ($value: System.Action$1<Microlight.MicroBar.MicroBar>) : void
            public add_OnCurrentValueChange ($value: System.Action$1<Microlight.MicroBar.MicroBar>) : void
            public remove_OnCurrentValueChange ($value: System.Action$1<Microlight.MicroBar.MicroBar>) : void
            public Initialize ($maxValue: number) : void
            public static ChangeMaxHealthCalculation ($maxHealthCalculation: Microlight.MicroBar.MaxHealthCalculation) : void
            public SetNewMaxHP ($newMaxValue: number, $skipAnimation?: boolean) : void
            public UpdateBar ($newHP: number, $skipAnimation?: boolean, $updateType?: Microlight.MicroBar.UpdateAnim) : void
            public UpdateBar ($newHP: number, $updateType: Microlight.MicroBar.UpdateAnim) : void
            public UpdateBar ($newHP: number) : void
            public SnapshotDefaultValues () : void
            public constructor ()
        }
        enum MicroBarEditorMode
        { Advanced = 0, Simple = 1 }
        class SimpleMicroBar extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public get Sequence(): DG.Tweening.Sequence;
            public constructor ()
        }
    }
    namespace fireAttackVFXNameSpace {
        class fireBallScript extends UnityEngine.MonoBehaviour
        {
            protected [__keep_incompatibility]: never;
            public vfxPrefab : UnityEngine.VFX.VisualEffect
            public objectToDisable : UnityEngine.GameObject
            public rb : UnityEngine.Rigidbody
            public speed : number
            public maxSpeed : number
            public acceleration : number
            public rotationSpeed : number
            public constructor ()
        }
        class InstantiateScript extends UnityEngine.MonoBehaviour
        {
            protected [__keep_incompatibility]: never;
            public fireBallPrefab : UnityEngine.GameObject
            public fireBallspawnPoint : UnityEngine.Transform
            public tornadoPrefab : UnityEngine.GameObject
            public tornadospawnPoint : UnityEngine.Transform
            public tornadoDuration : number
            public fireZonePrefab : UnityEngine.GameObject
            public fireZoneSpawnPoint : UnityEngine.Transform
            public fireZoneDuration : number
            public fireMeteorsPrefab : UnityEngine.GameObject
            public fireMeteorsSpawnPoint : UnityEngine.Transform
            public fireMeteorsDuration : number
            public spawnFireBall () : void
            public spawnTornadoFunction () : void
            public spawnFireZoneFunction () : void
            public spawnFireMeteorsFunction () : void
            public constructor ()
        }
    }
    namespace BasicAttackAbilitySO {
        class BasicAttackSpec extends H2V.GameplayAbilitySystem.AbilitySystem.AbilitySpec
        {
            protected [__keep_incompatibility]: never;
            public constructor ()
        }
    }
    namespace DG.Tweening.DOTweenModuleUI {
        class Utils extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public static SwitchToRectTransform ($from: UnityEngine.RectTransform, $to: UnityEngine.RectTransform) : UnityEngine.Vector2
        }
    }
    namespace DG.Tweening.DOTweenCYInstruction {
        class WaitForCompletion extends UnityEngine.CustomYieldInstruction implements System.Collections.IEnumerator
        {
            protected [__keep_incompatibility]: never;
            public get keepWaiting(): boolean;
            public constructor ($tween: DG.Tweening.Tween)
        }
        class WaitForRewind extends UnityEngine.CustomYieldInstruction implements System.Collections.IEnumerator
        {
            protected [__keep_incompatibility]: never;
            public get keepWaiting(): boolean;
            public constructor ($tween: DG.Tweening.Tween)
        }
        class WaitForKill extends UnityEngine.CustomYieldInstruction implements System.Collections.IEnumerator
        {
            protected [__keep_incompatibility]: never;
            public get keepWaiting(): boolean;
            public constructor ($tween: DG.Tweening.Tween)
        }
        class WaitForElapsedLoops extends UnityEngine.CustomYieldInstruction implements System.Collections.IEnumerator
        {
            protected [__keep_incompatibility]: never;
            public get keepWaiting(): boolean;
            public constructor ($tween: DG.Tweening.Tween, $elapsedLoops: number)
        }
        class WaitForPosition extends UnityEngine.CustomYieldInstruction implements System.Collections.IEnumerator
        {
            protected [__keep_incompatibility]: never;
            public get keepWaiting(): boolean;
            public constructor ($tween: DG.Tweening.Tween, $position: number)
        }
        class WaitForStart extends UnityEngine.CustomYieldInstruction implements System.Collections.IEnumerator
        {
            protected [__keep_incompatibility]: never;
            public get keepWaiting(): boolean;
            public constructor ($tween: DG.Tweening.Tween)
        }
    }
    namespace DG.Tweening.DOTweenModuleUtils {
        class Physics extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public static SetOrientationOnPath ($options: DG.Tweening.Plugins.Options.PathOptions, $t: DG.Tweening.Tween, $newRot: UnityEngine.Quaternion, $trans: UnityEngine.Transform) : void
            public static HasRigidbody2D ($target: UnityEngine.Component) : boolean
            public static HasRigidbody ($target: UnityEngine.Component) : boolean
            public static CreateDOTweenPathTween ($target: UnityEngine.MonoBehaviour, $tweenRigidbody: boolean, $isLocal: boolean, $path: DG.Tweening.Plugins.Core.PathCore.Path, $duration: number, $pathMode: DG.Tweening.PathMode) : DG.Tweening.Core.TweenerCore$3<UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions>
        }
    }
    namespace IndiGames.GameplayAbilitySystem.EffectSystem.Components {
        class EffectExecuteEventBase extends UnityEngine.ScriptableObject
        {
            protected [__keep_incompatibility]: never;
            public PreExecute ($executeData: H2V.GameplayAbilitySystem.EffectSystem.ModifierCallbackData) : boolean
            public PostExecute ($executeData: H2V.GameplayAbilitySystem.EffectSystem.ModifierCallbackData) : boolean
        }
    }
    namespace H2V.GameplayAbilitySystem.TagSystem {
        class TagSystemBehaviour extends UnityEngine.MonoBehaviour
        {
            protected [__keep_incompatibility]: never;
            public get DefaultTags(): System.Collections.Generic.List$1<H2V.GameplayAbilitySystem.TagSystem.ScriptableObjects.TagSO>;
            public get GrantedTags(): System.Collections.Generic.List$1<H2V.GameplayAbilitySystem.TagSystem.ScriptableObjects.TagSO>;
            public add_TagAdded ($value: H2V.GameplayAbilitySystem.TagSystem.TagSystemBehaviour.TagEvent) : void
            public remove_TagAdded ($value: H2V.GameplayAbilitySystem.TagSystem.TagSystemBehaviour.TagEvent) : void
            public add_TagRemoved ($value: H2V.GameplayAbilitySystem.TagSystem.TagSystemBehaviour.TagEvent) : void
            public remove_TagRemoved ($value: H2V.GameplayAbilitySystem.TagSystem.TagSystemBehaviour.TagEvent) : void
            public AddTags (...tags: H2V.GameplayAbilitySystem.TagSystem.ScriptableObjects.TagSO[]) : void
            public RemoveTags (...tags: H2V.GameplayAbilitySystem.TagSystem.ScriptableObjects.TagSO[]) : void
            public HasTag ($tagToCheck: H2V.GameplayAbilitySystem.TagSystem.ScriptableObjects.TagSO, $depth?: number) : boolean
            public HasAnyTag ($tagsToCheck: System.Array$1<H2V.GameplayAbilitySystem.TagSystem.ScriptableObjects.TagSO>, $depth?: number) : boolean
            public HasAllTags ($tagsToCheck: System.Array$1<H2V.GameplayAbilitySystem.TagSystem.ScriptableObjects.TagSO>, $depth?: number) : boolean
            public constructor ()
        }
    }
    namespace H2V.GameplayAbilitySystem.TagSystem.TagSystemBehaviour {
        interface TagEvent
        { 
        (tag: System.Array$1<H2V.GameplayAbilitySystem.TagSystem.ScriptableObjects.TagSO>) : void; 
        Invoke?: (tag: System.Array$1<H2V.GameplayAbilitySystem.TagSystem.ScriptableObjects.TagSO>) => void;
        }
        var TagEvent: { new (func: (tag: System.Array$1<H2V.GameplayAbilitySystem.TagSystem.ScriptableObjects.TagSO>) => void): TagEvent; }
    }
    namespace H2V.GameplayAbilitySystem.TagSystem.ScriptableObjects {
        class TagSO extends UnityEngine.ScriptableObject
        {
            protected [__keep_incompatibility]: never;
            public get Parent(): H2V.GameplayAbilitySystem.TagSystem.ScriptableObjects.TagSO;
            public IsChildOf ($otherTag: H2V.GameplayAbilitySystem.TagSystem.ScriptableObjects.TagSO, $depthSearch?: number) : boolean
            public constructor ()
        }
        class CommonTags extends UnityEngine.ScriptableObject
        {
            protected [__keep_incompatibility]: never;
            public get Tags(): System.Collections.Generic.List$1<H2V.GameplayAbilitySystem.TagSystem.ScriptableObjects.TagSO>;
            public static TryGetTag ($tagName: string, $tag: $Ref<H2V.GameplayAbilitySystem.TagSystem.ScriptableObjects.TagSO>) : boolean
            public constructor ()
        }
        class TagSystemConfig extends UnityEngine.ScriptableObject
        {
            protected [__keep_incompatibility]: never;
            public static MaxDepth : number
            public Init () : void
            public constructor ()
        }
    }
    namespace H2V.GameplayAbilitySystem.Helper {
        class AbilitySystemHelper extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public static HasAllTags ($abilitySystem: H2V.GameplayAbilitySystem.AbilitySystem.Components.AbilitySystemBehaviour, $tags: System.Array$1<H2V.GameplayAbilitySystem.TagSystem.ScriptableObjects.TagSO>) : boolean
            public static HasNoneTags ($abilitySystem: H2V.GameplayAbilitySystem.AbilitySystem.Components.AbilitySystemBehaviour, $tags: System.Array$1<H2V.GameplayAbilitySystem.TagSystem.ScriptableObjects.TagSO>) : boolean
            public static IsSatisfyTagRequirements ($abilitySystem: H2V.GameplayAbilitySystem.AbilitySystem.Components.AbilitySystemBehaviour, $tagRequirements: H2V.GameplayAbilitySystem.AbilitySystem.TagRequireIgnoreDetails) : boolean
        }
    }
    namespace H2V.GameplayAbilitySystem.EffectSystem.Components {
        class EffectSystemBehaviour extends UnityEngine.MonoBehaviour
        {
            protected [__keep_incompatibility]: never;
            public get AppliedEffects(): System.Collections.Generic.IReadOnlyList$1<H2V.GameplayAbilitySystem.EffectSystem.ActiveGameplayEffect>;
            public get Owner(): H2V.GameplayAbilitySystem.Components.AbilitySystemComponent;
            public set Owner(value: H2V.GameplayAbilitySystem.Components.AbilitySystemComponent);
            public get AttributeSystem(): H2V.GameplayAbilitySystem.AttributeSystem.Components.AttributeSystemBehaviour;
            public add_AppliedEffectToSelf ($value: H2V.GameplayAbilitySystem.EffectSystem.Components.EffectSystemBehaviour.AppliedEffectDelegate) : void
            public remove_AppliedEffectToSelf ($value: H2V.GameplayAbilitySystem.EffectSystem.Components.EffectSystemBehaviour.AppliedEffectDelegate) : void
            public add_AppliedEffectToTarget ($value: H2V.GameplayAbilitySystem.EffectSystem.Components.EffectSystemBehaviour.AppliedEffectDelegate) : void
            public remove_AppliedEffectToTarget ($value: H2V.GameplayAbilitySystem.EffectSystem.Components.EffectSystemBehaviour.AppliedEffectDelegate) : void
            public GetEffect ($effectDef: H2V.GameplayAbilitySystem.EffectSystem.IGameplayEffectDef) : H2V.GameplayAbilitySystem.EffectSystem.GameplayEffectSpec
            public AddActiveEffect ($activeEffect: H2V.GameplayAbilitySystem.EffectSystem.ActiveGameplayEffect) : void
            public ExpireEffectWithTagImmediately ($tag: H2V.GameplayAbilitySystem.TagSystem.ScriptableObjects.TagSO) : void
            public ExpireEffectWithTag ($tag: H2V.GameplayAbilitySystem.TagSystem.ScriptableObjects.TagSO) : void
            public RemoveEffect ($effectSpec: H2V.GameplayAbilitySystem.EffectSystem.GameplayEffectSpec) : void
            public FindEffectByDef ($effectDef: H2V.GameplayAbilitySystem.EffectSystem.IGameplayEffectDef) : H2V.GameplayAbilitySystem.EffectSystem.ActiveGameplayEffect
            public UpdateAttributeModifiersUsingAppliedEffects () : void
            public UpdateAttributeSystemModifiers () : void
            public RemoveExpiredEffects () : void
            public ClearEffects () : void
            public PreGameplayEffectExecute ($executeData: H2V.GameplayAbilitySystem.EffectSystem.ModifierCallbackData) : boolean
            public PostGameplayEffectExecute ($executeData: H2V.GameplayAbilitySystem.EffectSystem.ModifierCallbackData) : void
            public constructor ()
        }
    }
    namespace H2V.GameplayAbilitySystem.EffectSystem.GamplayEffectPolicies {
        interface IGameplayEffectPolicy
        {
            CreateActiveEffect ($spec: H2V.GameplayAbilitySystem.EffectSystem.GameplayEffectSpec) : H2V.GameplayAbilitySystem.EffectSystem.ActiveGameplayEffect
        }
        class StackPolicy extends System.Object implements H2V.GameplayAbilitySystem.EffectSystem.GamplayEffectPolicies.IGameplayEffectPolicy
        {
            protected [__keep_incompatibility]: never;
            public get StackPerActive(): number;
            public get ReduceStackStrategy(): H2V.GameplayAbilitySystem.EffectSystem.GamplayEffectPolicies.IReduceStackStrategy;
            public CreateActiveEffect ($inSpec: H2V.GameplayAbilitySystem.EffectSystem.GameplayEffectSpec) : H2V.GameplayAbilitySystem.EffectSystem.ActiveGameplayEffect
            public CreateActiveEffect ($spec: H2V.GameplayAbilitySystem.EffectSystem.GameplayEffectSpec) : H2V.GameplayAbilitySystem.EffectSystem.ActiveGameplayEffect
        }
        class CounterPolicy extends H2V.GameplayAbilitySystem.EffectSystem.GamplayEffectPolicies.StackPolicy implements H2V.GameplayAbilitySystem.EffectSystem.GamplayEffectPolicies.IGameplayEffectPolicy
        {
            protected [__keep_incompatibility]: never;
            public get Counter(): number;
            public get IsResetOnStackChange(): boolean;
            public RegistCounterEvent ($effect: H2V.GameplayAbilitySystem.EffectSystem.GamplayEffectPolicies.CounterGameplayEffect) : void
            public RemoveCounterEvent ($effect: H2V.GameplayAbilitySystem.EffectSystem.GamplayEffectPolicies.CounterGameplayEffect) : void
        }
        class StackGameplayEffect extends H2V.GameplayAbilitySystem.EffectSystem.ActiveGameplayEffect
        {
            protected [__keep_incompatibility]: never;
            public constructor ($stackPolicy: H2V.GameplayAbilitySystem.EffectSystem.GamplayEffectPolicies.StackPolicy, $effect: H2V.GameplayAbilitySystem.EffectSystem.GameplayEffectSpec)
            public constructor ()
            public constructor ($spec: H2V.GameplayAbilitySystem.EffectSystem.GameplayEffectSpec)
        }
        class CounterGameplayEffect extends H2V.GameplayAbilitySystem.EffectSystem.GamplayEffectPolicies.StackGameplayEffect
        {
            protected [__keep_incompatibility]: never;
            public ReduceCounterEvent () : void
            public constructor ($counterPolicy: H2V.GameplayAbilitySystem.EffectSystem.GamplayEffectPolicies.CounterPolicy, $effect: H2V.GameplayAbilitySystem.EffectSystem.GameplayEffectSpec)
            public constructor ($stackPolicy: H2V.GameplayAbilitySystem.EffectSystem.GamplayEffectPolicies.StackPolicy, $effect: H2V.GameplayAbilitySystem.EffectSystem.GameplayEffectSpec)
            public constructor ()
            public constructor ($spec: H2V.GameplayAbilitySystem.EffectSystem.GameplayEffectSpec)
        }
        interface IReduceStackStrategy
        {
            ReduceStack ($activeEffect: H2V.GameplayAbilitySystem.EffectSystem.ActiveGameplayEffect) : void
        }
        class DurationalPolicy extends H2V.GameplayAbilitySystem.EffectSystem.GamplayEffectPolicies.StackPolicy implements H2V.GameplayAbilitySystem.EffectSystem.GamplayEffectPolicies.IGameplayEffectPolicy
        {
            protected [__keep_incompatibility]: never;
            public get Duration(): number;
            public get IsResetOnStackChange(): boolean;
            public constructor ()
            public constructor ($duration: number, $isResetOnStackChange?: boolean, $stackPerActive?: number)
            public constructor ($duration: number, $reduceStackStrategy: H2V.GameplayAbilitySystem.EffectSystem.GamplayEffectPolicies.IReduceStackStrategy, $isResetOnStackChange?: boolean, $stackPerActive?: number)
        }
        class DurationGameplayEffect extends H2V.GameplayAbilitySystem.EffectSystem.GamplayEffectPolicies.StackGameplayEffect
        {
            protected [__keep_incompatibility]: never;
            public constructor ($policy: H2V.GameplayAbilitySystem.EffectSystem.GamplayEffectPolicies.DurationalPolicy, $effect: H2V.GameplayAbilitySystem.EffectSystem.GameplayEffectSpec)
            public constructor ($stackPolicy: H2V.GameplayAbilitySystem.EffectSystem.GamplayEffectPolicies.StackPolicy, $effect: H2V.GameplayAbilitySystem.EffectSystem.GameplayEffectSpec)
            public constructor ()
            public constructor ($spec: H2V.GameplayAbilitySystem.EffectSystem.GameplayEffectSpec)
        }
        class InfinitePolicy extends H2V.GameplayAbilitySystem.EffectSystem.GamplayEffectPolicies.StackPolicy implements H2V.GameplayAbilitySystem.EffectSystem.GamplayEffectPolicies.IGameplayEffectPolicy
        {
            protected [__keep_incompatibility]: never;
            public constructor ()
        }
        class InstantPolicy extends System.Object implements H2V.GameplayAbilitySystem.EffectSystem.GamplayEffectPolicies.IGameplayEffectPolicy
        {
            protected [__keep_incompatibility]: never;
            public CreateActiveEffect ($inSpec: H2V.GameplayAbilitySystem.EffectSystem.GameplayEffectSpec) : H2V.GameplayAbilitySystem.EffectSystem.ActiveGameplayEffect
            public constructor ()
            public CreateActiveEffect ($spec: H2V.GameplayAbilitySystem.EffectSystem.GameplayEffectSpec) : H2V.GameplayAbilitySystem.EffectSystem.ActiveGameplayEffect
        }
        class InstantActiveEffectPolicy extends H2V.GameplayAbilitySystem.EffectSystem.ActiveGameplayEffect
        {
            protected [__keep_incompatibility]: never;
            public constructor ($inSpec: H2V.GameplayAbilitySystem.EffectSystem.GameplayEffectSpec)
            public constructor ()
            public constructor ($spec: H2V.GameplayAbilitySystem.EffectSystem.GameplayEffectSpec)
        }
        class PeriodicPolicy extends H2V.GameplayAbilitySystem.EffectSystem.GamplayEffectPolicies.StackPolicy implements H2V.GameplayAbilitySystem.EffectSystem.GamplayEffectPolicies.IGameplayEffectPolicy
        {
            protected [__keep_incompatibility]: never;
            public get ActiveTimes(): number;
            public get Interval(): number;
            public get IsResetOnStackChange(): boolean;
            public get Effects(): System.Array$1<H2V.GameplayAbilitySystem.EffectSystem.IGameplayEffectDef>;
            public constructor ()
            public constructor ($activeTimes: number, $interval: number, $stackPerActive?: number, $isResetOnStackChange?: boolean)
            public constructor ($activeTimes: number, $interval: number, $reduceStackStrategy: H2V.GameplayAbilitySystem.EffectSystem.GamplayEffectPolicies.IReduceStackStrategy, $isResetOnStackChange?: boolean, $stackPerActive?: number)
            public constructor ($activeTimes: number, $interval: number, ...effects: H2V.GameplayAbilitySystem.EffectSystem.IGameplayEffectDef[])
        }
        class PeriodicGameplayEffect extends H2V.GameplayAbilitySystem.EffectSystem.GamplayEffectPolicies.StackGameplayEffect
        {
            protected [__keep_incompatibility]: never;
            public constructor ($policy: H2V.GameplayAbilitySystem.EffectSystem.GamplayEffectPolicies.PeriodicPolicy, $inSpec: H2V.GameplayAbilitySystem.EffectSystem.GameplayEffectSpec)
            public constructor ($stackPolicy: H2V.GameplayAbilitySystem.EffectSystem.GamplayEffectPolicies.StackPolicy, $effect: H2V.GameplayAbilitySystem.EffectSystem.GameplayEffectSpec)
            public constructor ()
            public constructor ($spec: H2V.GameplayAbilitySystem.EffectSystem.GameplayEffectSpec)
        }
        class DoNothing extends System.Object implements H2V.GameplayAbilitySystem.EffectSystem.GamplayEffectPolicies.IReduceStackStrategy
        {
            protected [__keep_incompatibility]: never;
            public ReduceStack ($activeEffect: H2V.GameplayAbilitySystem.EffectSystem.ActiveGameplayEffect) : void
            public constructor ()
        }
        class ReduceSingleStack extends System.Object implements H2V.GameplayAbilitySystem.EffectSystem.GamplayEffectPolicies.IReduceStackStrategy
        {
            protected [__keep_incompatibility]: never;
            public ReduceStack ($activeEffect: H2V.GameplayAbilitySystem.EffectSystem.ActiveGameplayEffect) : void
            public constructor ()
        }
        class ReduceAllStacks extends System.Object implements H2V.GameplayAbilitySystem.EffectSystem.GamplayEffectPolicies.IReduceStackStrategy
        {
            protected [__keep_incompatibility]: never;
            public ReduceStack ($activeEffect: H2V.GameplayAbilitySystem.EffectSystem.ActiveGameplayEffect) : void
            public constructor ()
        }
    }
    namespace H2V.GameplayAbilitySystem.EffectSystem.AdditionApplyEffects {
        interface IAdditionApplyEffect
        {
            OnEffectSpecApplied ($target: H2V.GameplayAbilitySystem.Components.AbilitySystemComponent) : void
            OnEffectSpecRemoved ($target: H2V.GameplayAbilitySystem.Components.AbilitySystemComponent) : void
        }
        class GrantAbilityOnApplying extends System.Object implements H2V.GameplayAbilitySystem.EffectSystem.AdditionApplyEffects.IAdditionApplyEffect
        {
            protected [__keep_incompatibility]: never;
            public get Abilities(): System.Array$1<H2V.GameplayAbilitySystem.AbilitySystem.ScriptableObjects.AbilitySO>;
            public OnEffectSpecApplied ($target: H2V.GameplayAbilitySystem.Components.AbilitySystemComponent) : void
            public OnEffectSpecRemoved ($target: H2V.GameplayAbilitySystem.Components.AbilitySystemComponent) : void
            public constructor ()
        }
        class GrantTagOnApplying extends System.Object implements H2V.GameplayAbilitySystem.EffectSystem.AdditionApplyEffects.IAdditionApplyEffect
        {
            protected [__keep_incompatibility]: never;
            public get Tags(): System.Array$1<H2V.GameplayAbilitySystem.TagSystem.ScriptableObjects.TagSO>;
            public OnEffectSpecApplied ($target: H2V.GameplayAbilitySystem.Components.AbilitySystemComponent) : void
            public OnEffectSpecRemoved ($target: H2V.GameplayAbilitySystem.Components.AbilitySystemComponent) : void
            public constructor ()
        }
        class RemoveOtherEffectOnAppliedByDef extends System.Object implements H2V.GameplayAbilitySystem.EffectSystem.AdditionApplyEffects.IAdditionApplyEffect
        {
            protected [__keep_incompatibility]: never;
            public get EffectDefs(): System.Array$1<H2V.GameplayAbilitySystem.EffectSystem.IGameplayEffectDef>;
            public OnEffectSpecApplied ($target: H2V.GameplayAbilitySystem.Components.AbilitySystemComponent) : void
            public OnEffectSpecRemoved ($target: H2V.GameplayAbilitySystem.Components.AbilitySystemComponent) : void
            public constructor ()
        }
        class RemoveOtherEffectOnAppliedByTags extends System.Object implements H2V.GameplayAbilitySystem.EffectSystem.AdditionApplyEffects.IAdditionApplyEffect
        {
            protected [__keep_incompatibility]: never;
            public get Tags(): System.Array$1<H2V.GameplayAbilitySystem.TagSystem.ScriptableObjects.TagSO>;
            public OnEffectSpecApplied ($target: H2V.GameplayAbilitySystem.Components.AbilitySystemComponent) : void
            public OnEffectSpecRemoved ($target: H2V.GameplayAbilitySystem.Components.AbilitySystemComponent) : void
            public constructor ()
        }
    }
    namespace H2V.GameplayAbilitySystem.EffectSystem.EffectConditions {
        interface IEffectCondition
        {
            IsPass ($effectSpec: H2V.GameplayAbilitySystem.EffectSystem.GameplayEffectSpec) : boolean
        }
        class AlwaysTrue extends System.Object implements H2V.GameplayAbilitySystem.EffectSystem.EffectConditions.IEffectCondition
        {
            protected [__keep_incompatibility]: never;
            public IsPass ($effectSpec: H2V.GameplayAbilitySystem.EffectSystem.GameplayEffectSpec) : boolean
            public constructor ()
        }
        class ChanceToApply extends System.Object implements H2V.GameplayAbilitySystem.EffectSystem.EffectConditions.IEffectCondition
        {
            protected [__keep_incompatibility]: never;
            public IsPass ($effectSpec: H2V.GameplayAbilitySystem.EffectSystem.GameplayEffectSpec) : boolean
            public constructor ()
        }
        class TagRequirements extends System.Object implements H2V.GameplayAbilitySystem.EffectSystem.EffectConditions.IEffectCondition
        {
            protected [__keep_incompatibility]: never;
            public IsPass ($effectSpec: H2V.GameplayAbilitySystem.EffectSystem.GameplayEffectSpec) : boolean
            public constructor ()
        }
    }
    namespace H2V.GameplayAbilitySystem.EffectSystem.Utilities {
        class GameplayEffectDefBuilder extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public WithName ($name: string) : H2V.GameplayAbilitySystem.EffectSystem.Utilities.GameplayEffectDefBuilder
            public WithEffectTag ($effectTag: H2V.GameplayAbilitySystem.TagSystem.ScriptableObjects.TagSO) : H2V.GameplayAbilitySystem.EffectSystem.Utilities.GameplayEffectDefBuilder
            public WithPolicy ($policy: H2V.GameplayAbilitySystem.EffectSystem.GamplayEffectPolicies.IGameplayEffectPolicy) : H2V.GameplayAbilitySystem.EffectSystem.Utilities.GameplayEffectDefBuilder
            public WithEffectDetails ($effectDetails: H2V.GameplayAbilitySystem.EffectSystem.EffectDetails) : H2V.GameplayAbilitySystem.EffectSystem.Utilities.GameplayEffectDefBuilder
            public WithStackingDetails ($stackingDetails: H2V.GameplayAbilitySystem.EffectSystem.StackingDetails) : H2V.GameplayAbilitySystem.EffectSystem.Utilities.GameplayEffectDefBuilder
            public WithAdditionApplyEffects (...additionApplyEffects: H2V.GameplayAbilitySystem.EffectSystem.AdditionApplyEffects.IAdditionApplyEffect[]) : H2V.GameplayAbilitySystem.EffectSystem.Utilities.GameplayEffectDefBuilder
            public WithCustomExecutions (...customExecutions: H2V.GameplayAbilitySystem.EffectSystem.ScriptableObjects.EffectExecutionSO[]) : H2V.GameplayAbilitySystem.EffectSystem.Utilities.GameplayEffectDefBuilder
            public WithApplicationConditions (...applicationConditions: H2V.GameplayAbilitySystem.EffectSystem.EffectConditions.IEffectCondition[]) : H2V.GameplayAbilitySystem.EffectSystem.Utilities.GameplayEffectDefBuilder
            public Build () : H2V.GameplayAbilitySystem.EffectSystem.Utilities.GameplayEffectDef
            public constructor ()
        }
        class GameplayEffectDef extends System.Object implements H2V.GameplayAbilitySystem.EffectSystem.IGameplayEffectDef
        {
            protected [__keep_incompatibility]: never;
            public get Name(): string;
            public get EffectTag(): H2V.GameplayAbilitySystem.TagSystem.ScriptableObjects.TagSO;
            public get Policy(): H2V.GameplayAbilitySystem.EffectSystem.GamplayEffectPolicies.IGameplayEffectPolicy;
            public get EffectDetails(): H2V.GameplayAbilitySystem.EffectSystem.EffectDetails;
            public get StackingDetails(): H2V.GameplayAbilitySystem.EffectSystem.StackingDetails;
            public get AdditionApplyEffects(): System.Array$1<H2V.GameplayAbilitySystem.EffectSystem.AdditionApplyEffects.IAdditionApplyEffect>;
            public get CustomExecutions(): System.Array$1<H2V.GameplayAbilitySystem.EffectSystem.ScriptableObjects.EffectExecutionSO>;
            public get ApplicationConditions(): System.Array$1<H2V.GameplayAbilitySystem.EffectSystem.EffectConditions.IEffectCondition>;
            public CreateEffectSpec ($ownerSystem: H2V.GameplayAbilitySystem.Components.AbilitySystemComponent, $context: H2V.GameplayAbilitySystem.EffectSystem.GameplayEffectContextHandle) : H2V.GameplayAbilitySystem.EffectSystem.GameplayEffectSpec
            public SetAdditionApplyEffects (...additionApplyEffects: H2V.GameplayAbilitySystem.EffectSystem.AdditionApplyEffects.IAdditionApplyEffect[]) : void
            public SetCustomExecutions (...customExecutions: H2V.GameplayAbilitySystem.EffectSystem.ScriptableObjects.EffectExecutionSO[]) : void
            public SetApplicationConditions (...applicationConditions: H2V.GameplayAbilitySystem.EffectSystem.EffectConditions.IEffectCondition[]) : void
            public constructor ($name: string, $effectTag: H2V.GameplayAbilitySystem.TagSystem.ScriptableObjects.TagSO, $policy: H2V.GameplayAbilitySystem.EffectSystem.GamplayEffectPolicies.IGameplayEffectPolicy, $effectDetails: H2V.GameplayAbilitySystem.EffectSystem.EffectDetails, $stackingDetails: H2V.GameplayAbilitySystem.EffectSystem.StackingDetails)
        }
        class GameplayEffectUtilities extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public static ComputeStackedModifierMagnitude ($baseComputedMagnitude: number, $stackCount: number, $modOp: H2V.GameplayAbilitySystem.EffectSystem.EAttributeModifierOperationType) : number
        }
    }
    namespace H2V.GameplayAbilitySystem.EffectSystem.Components.EffectSystemBehaviour {
        interface AppliedEffectDelegate
        { 
        (instigator: H2V.GameplayAbilitySystem.Components.AbilitySystemComponent, inSpec: H2V.GameplayAbilitySystem.EffectSystem.GameplayEffectSpec) : boolean; 
        Invoke?: (instigator: H2V.GameplayAbilitySystem.Components.AbilitySystemComponent, inSpec: H2V.GameplayAbilitySystem.EffectSystem.GameplayEffectSpec) => boolean;
        }
        var AppliedEffectDelegate: { new (func: (instigator: H2V.GameplayAbilitySystem.Components.AbilitySystemComponent, inSpec: H2V.GameplayAbilitySystem.EffectSystem.GameplayEffectSpec) => boolean): AppliedEffectDelegate; }
    }
    namespace H2V.GameplayAbilitySystem.AttributeSystem.Components.AttributeSystemBehaviour {
        interface PreAttributeChangeDelegate
        { 
        (attribute: H2V.GameplayAbilitySystem.AttributeSystem.ScriptableObjects.AttributeSO, newValue: H2V.GameplayAbilitySystem.AttributeSystem.AttributeValue) : void; 
        Invoke?: (attribute: H2V.GameplayAbilitySystem.AttributeSystem.ScriptableObjects.AttributeSO, newValue: H2V.GameplayAbilitySystem.AttributeSystem.AttributeValue) => void;
        }
        var PreAttributeChangeDelegate: { new (func: (attribute: H2V.GameplayAbilitySystem.AttributeSystem.ScriptableObjects.AttributeSO, newValue: H2V.GameplayAbilitySystem.AttributeSystem.AttributeValue) => void): PreAttributeChangeDelegate; }
        interface PostAttributeChangeDelegate
        { 
        (attribute: H2V.GameplayAbilitySystem.AttributeSystem.ScriptableObjects.AttributeSO, oldValue: H2V.GameplayAbilitySystem.AttributeSystem.AttributeValue, newValue: H2V.GameplayAbilitySystem.AttributeSystem.AttributeValue) : void; 
        Invoke?: (attribute: H2V.GameplayAbilitySystem.AttributeSystem.ScriptableObjects.AttributeSO, oldValue: H2V.GameplayAbilitySystem.AttributeSystem.AttributeValue, newValue: H2V.GameplayAbilitySystem.AttributeSystem.AttributeValue) => void;
        }
        var PostAttributeChangeDelegate: { new (func: (attribute: H2V.GameplayAbilitySystem.AttributeSystem.ScriptableObjects.AttributeSO, oldValue: H2V.GameplayAbilitySystem.AttributeSystem.AttributeValue, newValue: H2V.GameplayAbilitySystem.AttributeSystem.AttributeValue) => void): PostAttributeChangeDelegate; }
    }
    namespace H2V.GameplayAbilitySystem.AbilitySystem.Components.AbilitySystemBehaviour {
        interface AbilityGranted
        { 
        (grantedAbility: H2V.GameplayAbilitySystem.AbilitySystem.AbilitySpec) : void; 
        Invoke?: (grantedAbility: H2V.GameplayAbilitySystem.AbilitySystem.AbilitySpec) => void;
        }
        var AbilityGranted: { new (func: (grantedAbility: H2V.GameplayAbilitySystem.AbilitySystem.AbilitySpec) => void): AbilityGranted; }
    }
    namespace H2V.ExtensionsCore.Helpers {
        class FloatExtension extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public static NearlyEqual ($a: number, $b: number, $epsilon?: number) : boolean
        }
    }
    namespace H2V.ExtensionsCore.Helper {
        class ComponentUtils extends System.Object
        {
            protected [__keep_incompatibility]: never;
        }
        class LayerMaskExtensions extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public static Contains ($mask: UnityEngine.LayerMask, $layer: number) : boolean
            public static Add ($mask: UnityEngine.LayerMask, $layer: number) : UnityEngine.LayerMask
            public static Remove ($mask: UnityEngine.LayerMask, $layer: number) : UnityEngine.LayerMask
        }
    }
    namespace H2V.ExtensionsCore.Events.ScriptableObjects {
        class GenericEventChannelSO$1<T> extends UnityEngine.ScriptableObject
        {
            protected [__keep_incompatibility]: never;
            public add_EventRaised ($value: System.Action$1<T>) : void
            public remove_EventRaised ($value: System.Action$1<T>) : void
            public RaiseEvent ($obj: T) : void
        }
        class BoolEventChannelSO extends H2V.ExtensionsCore.Events.ScriptableObjects.GenericEventChannelSO$1<boolean>
        {
            protected [__keep_incompatibility]: never;
            public constructor ()
        }
        class FloatEventChannelSO extends H2V.ExtensionsCore.Events.ScriptableObjects.GenericEventChannelSO$1<number>
        {
            protected [__keep_incompatibility]: never;
            public constructor ()
        }
        class GenericReturnEventChannelSO$2<T, TResult> extends UnityEngine.ScriptableObject
        {
            protected [__keep_incompatibility]: never;
            public add_EventRaised ($value: System.Func$2<T, TResult>) : void
            public remove_EventRaised ($value: System.Func$2<T, TResult>) : void
            public RaiseEvent ($obj: T) : TResult
            public RaiseEventWithoutReturn ($obj: T) : void
        }
        class InputEventChannelSO extends H2V.ExtensionsCore.Events.ScriptableObjects.GenericEventChannelSO$1<UnityEngine.InputSystem.InputAction.CallbackContext>
        {
            protected [__keep_incompatibility]: never;
            public constructor ()
        }
        class IntEventChannelSO extends H2V.ExtensionsCore.Events.ScriptableObjects.GenericEventChannelSO$1<number>
        {
            protected [__keep_incompatibility]: never;
            public constructor ()
        }
        class StringEventChannelSO extends H2V.ExtensionsCore.Events.ScriptableObjects.GenericEventChannelSO$1<string>
        {
            protected [__keep_incompatibility]: never;
            public constructor ()
        }
        class VoidEventChannelSO extends UnityEngine.ScriptableObject
        {
            protected [__keep_incompatibility]: never;
            public add_EventRaised ($value: System.Action) : void
            public remove_EventRaised ($value: System.Action) : void
            public RaiseEvent () : void
            public constructor ()
        }
    }
    namespace H2V.ExtensionsCore.Events.ScriptableObjectEventListener {
        class GenericEventChannelListener$2<TEventChannelSO, TType> extends UnityEngine.MonoBehaviour
        {
            protected [__keep_incompatibility]: never;
            public _onEventRaised : UnityEngine.Events.UnityEvent$1<TType>
        }
        class BoolEventChannelListener extends H2V.ExtensionsCore.Events.ScriptableObjectEventListener.GenericEventChannelListener$2<H2V.ExtensionsCore.Events.ScriptableObjects.BoolEventChannelSO, boolean>
        {
            protected [__keep_incompatibility]: never;
            public constructor ()
        }
        class FloatEventChannelListener extends H2V.ExtensionsCore.Events.ScriptableObjectEventListener.GenericEventChannelListener$2<H2V.ExtensionsCore.Events.ScriptableObjects.FloatEventChannelSO, number>
        {
            protected [__keep_incompatibility]: never;
            public constructor ()
        }
        class IntEventChannelListener extends H2V.ExtensionsCore.Events.ScriptableObjectEventListener.GenericEventChannelListener$2<H2V.ExtensionsCore.Events.ScriptableObjects.IntEventChannelSO, number>
        {
            protected [__keep_incompatibility]: never;
            public constructor ()
        }
        class StringEventChannelListener extends H2V.ExtensionsCore.Events.ScriptableObjectEventListener.GenericEventChannelListener$2<H2V.ExtensionsCore.Events.ScriptableObjects.StringEventChannelSO, string>
        {
            protected [__keep_incompatibility]: never;
            public constructor ()
        }
        class VoidEventChannelListener extends UnityEngine.MonoBehaviour
        {
            protected [__keep_incompatibility]: never;
            public constructor ()
        }
    }
    namespace H2V.ExtensionsCore.Events.ActionDispatch {
        class ActionDispatcher extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public static Dispatch ($action: H2V.ExtensionsCore.Events.ActionDispatch.ActionBase) : void
            public static Bind ($callback: System.Action$1<H2V.ExtensionsCore.Events.ActionDispatch.ActionBase>) : TinyMessenger.TinyMessageSubscriptionToken
            public static Unbind ($token: TinyMessenger.TinyMessageSubscriptionToken) : void
        }
        class ActionBase extends System.Object implements TinyMessenger.ITinyMessage
        {
            protected [__keep_incompatibility]: never;
            public get Sender(): any;
        }
        class LogErrorHandler extends System.Object implements TinyMessenger.ISubscriberErrorHandler
        {
            protected [__keep_incompatibility]: never;
            public Handle ($message: TinyMessenger.ITinyMessage, $exception: System.Exception) : void
            public constructor ()
        }
        class SagaBase$1<TAction> extends UnityEngine.MonoBehaviour
        {
            protected [__keep_incompatibility]: never;
        }
    }
    namespace H2V.ExtensionsCore.EditorTools {
        class ReadOnlyAttribute extends UnityEngine.PropertyAttribute implements System.Runtime.InteropServices._Attribute
        {
            protected [__keep_incompatibility]: never;
            public constructor ()
        }
    }
    namespace H2V.ExtensionsCore.Common {
        class CacheableComponentGetter extends UnityEngine.MonoBehaviour
        {
            protected [__keep_incompatibility]: never;
            public constructor ()
        }
        class ClickToPlace extends UnityEngine.MonoBehaviour
        {
            protected [__keep_incompatibility]: never;
            public get IsTargeting(): boolean;
            public BeginTargeting () : void
            public UpdateTargeting ($spawnPosition: UnityEngine.Vector2) : void
            public EndTargeting () : void
            public constructor ()
        }
        class DisableLog extends UnityEngine.MonoBehaviour
        {
            protected [__keep_incompatibility]: never;
            public constructor ()
        }
    }
    namespace UnityEngine.AddressableAssets {
        class AssetReference extends System.Object implements UnityEngine.AddressableAssets.IKeyEvaluator
        {
            protected [__keep_incompatibility]: never;
            public get OperationHandle(): UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle;
            public get RuntimeKey(): any;
            public get AssetGUID(): string;
            public get SubObjectName(): string;
            public set SubObjectName(value: string);
            public get SubObjectGUID(): string;
            public set SubObjectGUID(value: string);
            public get IsDone(): boolean;
            public get Asset(): UnityEngine.Object;
            public get editorAsset(): UnityEngine.Object;
            public IsValid () : boolean
            public LoadSceneAsync ($loadMode?: UnityEngine.SceneManagement.LoadSceneMode, $activateOnLoad?: boolean, $priority?: number) : UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle$1<UnityEngine.ResourceManagement.ResourceProviders.SceneInstance>
            public UnLoadScene () : UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle$1<UnityEngine.ResourceManagement.ResourceProviders.SceneInstance>
            public InstantiateAsync ($position: UnityEngine.Vector3, $rotation: UnityEngine.Quaternion, $parent?: UnityEngine.Transform) : UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle$1<UnityEngine.GameObject>
            public InstantiateAsync ($parent?: UnityEngine.Transform, $instantiateInWorldSpace?: boolean) : UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle$1<UnityEngine.GameObject>
            public RuntimeKeyIsValid () : boolean
            public ReleaseAsset () : void
            public ReleaseInstance ($obj: UnityEngine.GameObject) : void
            public ValidateAsset ($obj: UnityEngine.Object) : boolean
            public ValidateAsset ($path: string) : boolean
            public SetEditorAsset ($value: UnityEngine.Object) : boolean
            public SetEditorSubObject ($value: UnityEngine.Object) : boolean
            public constructor ()
            public constructor ($guid: string)
        }
        interface IKeyEvaluator
        {
            RuntimeKey : any
            RuntimeKeyIsValid () : boolean
        }
        class AssetReferenceT$1<TObject> extends UnityEngine.AddressableAssets.AssetReference implements UnityEngine.AddressableAssets.IKeyEvaluator
        {
            protected [__keep_incompatibility]: never;
            public get editorAsset(): TObject;
            public LoadAssetAsync () : UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle$1<TObject>
            public constructor ($guid: string)
        }
        class ResourceLocatorInfo extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public get Locator(): UnityEngine.AddressableAssets.ResourceLocators.IResourceLocator;
            public get LocalHash(): string;
            public get CatalogLocation(): UnityEngine.ResourceManagement.ResourceLocations.IResourceLocation;
            public get HashLocation(): UnityEngine.ResourceManagement.ResourceLocations.IResourceLocation;
            public get CanUpdateContent(): boolean;
            public constructor ($loc: UnityEngine.AddressableAssets.ResourceLocators.IResourceLocator, $localHash: string, $remoteCatalogLocation: UnityEngine.ResourceManagement.ResourceLocations.IResourceLocation)
        }
        class InvalidKeyException extends System.Exception implements System.Runtime.Serialization.ISerializable, System.Runtime.InteropServices._Exception
        {
            protected [__keep_incompatibility]: never;
            public get Key(): any;
            public get Type(): System.Type;
            public get MergeMode(): UnityEngine.AddressableAssets.Addressables.MergeMode | null;
            public get Message(): string;
            public constructor ($key: any)
            public constructor ($key: any, $type: System.Type)
            public constructor ($key: any, $type: System.Type, $mergeMode: UnityEngine.AddressableAssets.Addressables.MergeMode)
            public constructor ()
            public constructor ($message: string)
            public constructor ($message: string, $innerException: System.Exception)
        }
        class Addressables extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public static kAddressablesRuntimeDataPath : string
            public static kAddressablesRuntimeBuildLogPath : string
            public static LibraryPath : string
            public static BuildReportPath : string
            public static get Version(): string;
            public static get ResourceManager(): UnityEngine.ResourceManagement.ResourceManager;
            public static get InstanceProvider(): UnityEngine.ResourceManagement.ResourceProviders.IInstanceProvider;
            public static get InternalIdTransformFunc(): System.Func$2<UnityEngine.ResourceManagement.ResourceLocations.IResourceLocation, string>;
            public static set InternalIdTransformFunc(value: System.Func$2<UnityEngine.ResourceManagement.ResourceLocations.IResourceLocation, string>);
            public static get WebRequestOverride(): System.Action$1<UnityEngine.Networking.UnityWebRequest>;
            public static set WebRequestOverride(value: System.Action$1<UnityEngine.Networking.UnityWebRequest>);
            public static get StreamingAssetsSubFolder(): string;
            public static get BuildPath(): string;
            public static get PlayerBuildDataPath(): string;
            public static get RuntimePath(): string;
            public static get ResourceLocators(): System.Collections.Generic.IEnumerable$1<UnityEngine.AddressableAssets.ResourceLocators.IResourceLocator>;
            public static ResolveInternalId ($id: string) : string
            public static Log ($msg: string) : void
            public static LogFormat ($format: string, ...args: any[]) : void
            public static LogWarning ($msg: string) : void
            public static LogWarningFormat ($format: string, ...args: any[]) : void
            public static LogError ($msg: string) : void
            public static LogException ($op: UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle, $ex: System.Exception) : void
            public static LogException ($ex: System.Exception) : void
            public static LogErrorFormat ($format: string, ...args: any[]) : void
            public static InitializeAsync () : UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle$1<UnityEngine.AddressableAssets.ResourceLocators.IResourceLocator>
            public static InitializeAsync ($autoReleaseHandle: boolean) : UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle$1<UnityEngine.AddressableAssets.ResourceLocators.IResourceLocator>
            public static LoadContentCatalogAsync ($catalogPath: string, $providerSuffix?: string) : UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle$1<UnityEngine.AddressableAssets.ResourceLocators.IResourceLocator>
            public static LoadContentCatalogAsync ($catalogPath: string, $autoReleaseHandle: boolean, $providerSuffix?: string) : UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle$1<UnityEngine.AddressableAssets.ResourceLocators.IResourceLocator>
            public static LoadResourceLocationsAsync ($keys: System.Collections.IEnumerable, $mode: UnityEngine.AddressableAssets.Addressables.MergeMode, $type?: System.Type) : UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle$1<System.Collections.Generic.IList$1<UnityEngine.ResourceManagement.ResourceLocations.IResourceLocation>>
            public static LoadResourceLocationsAsync ($key: any, $type?: System.Type) : UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle$1<System.Collections.Generic.IList$1<UnityEngine.ResourceManagement.ResourceLocations.IResourceLocation>>
            public static Release ($handle: UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle) : void
            public static ReleaseInstance ($instance: UnityEngine.GameObject) : boolean
            public static ReleaseInstance ($handle: UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle) : boolean
            public static ReleaseInstance ($handle: UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle$1<UnityEngine.GameObject>) : boolean
            public static GetDownloadSizeAsync ($key: any) : UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle$1<bigint>
            public static GetDownloadSizeAsync ($key: string) : UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle$1<bigint>
            public static GetDownloadSizeAsync ($keys: System.Collections.IEnumerable) : UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle$1<bigint>
            public static DownloadDependenciesAsync ($key: any, $autoReleaseHandle?: boolean) : UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle
            public static DownloadDependenciesAsync ($locations: System.Collections.Generic.IList$1<UnityEngine.ResourceManagement.ResourceLocations.IResourceLocation>, $autoReleaseHandle?: boolean) : UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle
            public static DownloadDependenciesAsync ($keys: System.Collections.IEnumerable, $mode: UnityEngine.AddressableAssets.Addressables.MergeMode, $autoReleaseHandle?: boolean) : UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle
            public static ClearDependencyCacheAsync ($key: any) : void
            public static ClearDependencyCacheAsync ($locations: System.Collections.Generic.IList$1<UnityEngine.ResourceManagement.ResourceLocations.IResourceLocation>) : void
            public static ClearDependencyCacheAsync ($keys: System.Collections.IEnumerable) : void
            public static ClearDependencyCacheAsync ($key: string) : void
            public static ClearDependencyCacheAsync ($key: any, $autoReleaseHandle: boolean) : UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle$1<boolean>
            public static ClearDependencyCacheAsync ($locations: System.Collections.Generic.IList$1<UnityEngine.ResourceManagement.ResourceLocations.IResourceLocation>, $autoReleaseHandle: boolean) : UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle$1<boolean>
            public static ClearDependencyCacheAsync ($keys: System.Collections.IEnumerable, $autoReleaseHandle: boolean) : UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle$1<boolean>
            public static ClearDependencyCacheAsync ($key: string, $autoReleaseHandle: boolean) : UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle$1<boolean>
            public static GetLocatorInfo ($locatorId: string) : UnityEngine.AddressableAssets.ResourceLocatorInfo
            public static GetLocatorInfo ($locator: UnityEngine.AddressableAssets.ResourceLocators.IResourceLocator) : UnityEngine.AddressableAssets.ResourceLocatorInfo
            public static InstantiateAsync ($location: UnityEngine.ResourceManagement.ResourceLocations.IResourceLocation, $parent?: UnityEngine.Transform, $instantiateInWorldSpace?: boolean, $trackHandle?: boolean) : UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle$1<UnityEngine.GameObject>
            public static InstantiateAsync ($location: UnityEngine.ResourceManagement.ResourceLocations.IResourceLocation, $position: UnityEngine.Vector3, $rotation: UnityEngine.Quaternion, $parent?: UnityEngine.Transform, $trackHandle?: boolean) : UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle$1<UnityEngine.GameObject>
            public static InstantiateAsync ($key: any, $parent?: UnityEngine.Transform, $instantiateInWorldSpace?: boolean, $trackHandle?: boolean) : UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle$1<UnityEngine.GameObject>
            public static InstantiateAsync ($key: any, $position: UnityEngine.Vector3, $rotation: UnityEngine.Quaternion, $parent?: UnityEngine.Transform, $trackHandle?: boolean) : UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle$1<UnityEngine.GameObject>
            public static InstantiateAsync ($key: any, $instantiateParameters: UnityEngine.ResourceManagement.ResourceProviders.InstantiationParameters, $trackHandle?: boolean) : UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle$1<UnityEngine.GameObject>
            public static InstantiateAsync ($location: UnityEngine.ResourceManagement.ResourceLocations.IResourceLocation, $instantiateParameters: UnityEngine.ResourceManagement.ResourceProviders.InstantiationParameters, $trackHandle?: boolean) : UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle$1<UnityEngine.GameObject>
            public static LoadSceneAsync ($key: any, $loadMode?: UnityEngine.SceneManagement.LoadSceneMode, $activateOnLoad?: boolean, $priority?: number, $releaseMode?: UnityEngine.ResourceManagement.ResourceProviders.SceneReleaseMode) : UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle$1<UnityEngine.ResourceManagement.ResourceProviders.SceneInstance>
            public static LoadSceneAsync ($key: any, $loadMode: UnityEngine.SceneManagement.LoadSceneMode, $releaseMode: UnityEngine.ResourceManagement.ResourceProviders.SceneReleaseMode, $activateOnLoad?: boolean, $priority?: number) : UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle$1<UnityEngine.ResourceManagement.ResourceProviders.SceneInstance>
            public static LoadSceneAsync ($key: any, $loadSceneParameters: UnityEngine.SceneManagement.LoadSceneParameters, $activateOnLoad?: boolean, $priority?: number) : UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle$1<UnityEngine.ResourceManagement.ResourceProviders.SceneInstance>
            public static LoadSceneAsync ($key: any, $loadSceneParameters: UnityEngine.SceneManagement.LoadSceneParameters, $releaseMode: UnityEngine.ResourceManagement.ResourceProviders.SceneReleaseMode, $activateOnLoad?: boolean, $priority?: number) : UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle$1<UnityEngine.ResourceManagement.ResourceProviders.SceneInstance>
            public static LoadSceneAsync ($location: UnityEngine.ResourceManagement.ResourceLocations.IResourceLocation, $loadMode?: UnityEngine.SceneManagement.LoadSceneMode, $activateOnLoad?: boolean, $priority?: number) : UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle$1<UnityEngine.ResourceManagement.ResourceProviders.SceneInstance>
            public static LoadSceneAsync ($location: UnityEngine.ResourceManagement.ResourceLocations.IResourceLocation, $loadMode: UnityEngine.SceneManagement.LoadSceneMode, $releaseMode: UnityEngine.ResourceManagement.ResourceProviders.SceneReleaseMode, $activateOnLoad?: boolean, $priority?: number) : UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle$1<UnityEngine.ResourceManagement.ResourceProviders.SceneInstance>
            public static LoadSceneAsync ($location: UnityEngine.ResourceManagement.ResourceLocations.IResourceLocation, $loadSceneParameters: UnityEngine.SceneManagement.LoadSceneParameters, $activateOnLoad?: boolean, $priority?: number) : UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle$1<UnityEngine.ResourceManagement.ResourceProviders.SceneInstance>
            public static LoadSceneAsync ($location: UnityEngine.ResourceManagement.ResourceLocations.IResourceLocation, $loadSceneParameters: UnityEngine.SceneManagement.LoadSceneParameters, $releaseMode: UnityEngine.ResourceManagement.ResourceProviders.SceneReleaseMode, $activateOnLoad?: boolean, $priority?: number) : UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle$1<UnityEngine.ResourceManagement.ResourceProviders.SceneInstance>
            public static UnloadSceneAsync ($scene: UnityEngine.ResourceManagement.ResourceProviders.SceneInstance, $unloadOptions: UnityEngine.SceneManagement.UnloadSceneOptions, $autoReleaseHandle?: boolean) : UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle$1<UnityEngine.ResourceManagement.ResourceProviders.SceneInstance>
            public static UnloadSceneAsync ($handle: UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle, $unloadOptions: UnityEngine.SceneManagement.UnloadSceneOptions, $autoReleaseHandle?: boolean) : UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle$1<UnityEngine.ResourceManagement.ResourceProviders.SceneInstance>
            public static UnloadSceneAsync ($scene: UnityEngine.ResourceManagement.ResourceProviders.SceneInstance, $autoReleaseHandle?: boolean) : UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle$1<UnityEngine.ResourceManagement.ResourceProviders.SceneInstance>
            public static UnloadSceneAsync ($handle: UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle, $autoReleaseHandle?: boolean) : UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle$1<UnityEngine.ResourceManagement.ResourceProviders.SceneInstance>
            public static UnloadSceneAsync ($handle: UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle$1<UnityEngine.ResourceManagement.ResourceProviders.SceneInstance>, $autoReleaseHandle?: boolean) : UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle$1<UnityEngine.ResourceManagement.ResourceProviders.SceneInstance>
            public static CheckForCatalogUpdates ($autoReleaseHandle?: boolean) : UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle$1<System.Collections.Generic.List$1<string>>
            public static UpdateCatalogs ($catalogs?: System.Collections.Generic.IEnumerable$1<string>, $autoReleaseHandle?: boolean) : UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle$1<System.Collections.Generic.List$1<UnityEngine.AddressableAssets.ResourceLocators.IResourceLocator>>
            public static UpdateCatalogs ($autoCleanBundleCache: boolean, $catalogs?: System.Collections.Generic.IEnumerable$1<string>, $autoReleaseHandle?: boolean) : UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle$1<System.Collections.Generic.List$1<UnityEngine.AddressableAssets.ResourceLocators.IResourceLocator>>
            public static AddResourceLocator ($locator: UnityEngine.AddressableAssets.ResourceLocators.IResourceLocator, $localCatalogHash?: string, $remoteCatalogLocation?: UnityEngine.ResourceManagement.ResourceLocations.IResourceLocation) : void
            public static RemoveResourceLocator ($locator: UnityEngine.AddressableAssets.ResourceLocators.IResourceLocator) : void
            public static ClearResourceLocators () : void
            public static CleanBundleCache ($catalogsIds?: System.Collections.Generic.IEnumerable$1<string>) : UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle$1<boolean>
        }
        class AssetLabelReference extends System.Object implements UnityEngine.AddressableAssets.IKeyEvaluator
        {
            protected [__keep_incompatibility]: never;
            public get labelString(): string;
            public set labelString(value: string);
            public get RuntimeKey(): any;
            public RuntimeKeyIsValid () : boolean
            public constructor ()
        }
        class AssetReferenceGameObject extends UnityEngine.AddressableAssets.AssetReferenceT$1<UnityEngine.GameObject> implements UnityEngine.AddressableAssets.IKeyEvaluator
        {
            protected [__keep_incompatibility]: never;
            public get RuntimeKey(): any;
            public constructor ($guid: string)
            public RuntimeKeyIsValid () : boolean
        }
        class AssetReferenceTexture extends UnityEngine.AddressableAssets.AssetReferenceT$1<UnityEngine.Texture> implements UnityEngine.AddressableAssets.IKeyEvaluator
        {
            protected [__keep_incompatibility]: never;
            public get RuntimeKey(): any;
            public constructor ($guid: string)
            public RuntimeKeyIsValid () : boolean
        }
        class AssetReferenceTexture2D extends UnityEngine.AddressableAssets.AssetReferenceT$1<UnityEngine.Texture2D> implements UnityEngine.AddressableAssets.IKeyEvaluator
        {
            protected [__keep_incompatibility]: never;
            public get RuntimeKey(): any;
            public constructor ($guid: string)
            public RuntimeKeyIsValid () : boolean
        }
        class AssetReferenceTexture3D extends UnityEngine.AddressableAssets.AssetReferenceT$1<UnityEngine.Texture3D> implements UnityEngine.AddressableAssets.IKeyEvaluator
        {
            protected [__keep_incompatibility]: never;
            public get RuntimeKey(): any;
            public constructor ($guid: string)
            public RuntimeKeyIsValid () : boolean
        }
        class AssetReferenceSprite extends UnityEngine.AddressableAssets.AssetReferenceT$1<UnityEngine.Sprite> implements UnityEngine.AddressableAssets.IKeyEvaluator
        {
            protected [__keep_incompatibility]: never;
            public get editorAsset(): UnityEngine.Object;
            public get RuntimeKey(): any;
            public constructor ($guid: string)
            public RuntimeKeyIsValid () : boolean
        }
        class AssetReferenceAtlasedSprite extends UnityEngine.AddressableAssets.AssetReferenceT$1<UnityEngine.Sprite> implements UnityEngine.AddressableAssets.IKeyEvaluator
        {
            protected [__keep_incompatibility]: never;
            public get editorAsset(): UnityEngine.U2D.SpriteAtlas;
            public get RuntimeKey(): any;
            public constructor ($guid: string)
            public RuntimeKeyIsValid () : boolean
        }
        enum AddressablesPlatform
        { Unknown = 0, Windows = 1, OSX = 2, Linux = 3, PS4 = 4, Switch = 5, XboxOne = 6, WebGL = 7, iOS = 8, Android = 9, WindowsUniversal = 10 }
        class PlatformMappingService extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public static GetPlatformPathSubFolder () : string
            public constructor ()
        }
    }
    namespace H2V.ExtensionsCore.AssetReferences {
        class GeneralAssetReference$1<T> extends UnityEngine.AddressableAssets.AssetReferenceT$1<T> implements UnityEngine.AddressableAssets.IKeyEvaluator
        {
            protected [__keep_incompatibility]: never;
            public get OperationHandle(): UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle$1<T>;
            public get RuntimeKey(): any;
            public TryLoadAsset () : Cysharp.Threading.Tasks.UniTask$1<T>
            public constructor ($guid: string)
            public RuntimeKeyIsValid () : boolean
        }
        class AudioAssetReference extends H2V.ExtensionsCore.AssetReferences.GeneralAssetReference$1<UnityEngine.AudioClip> implements UnityEngine.AddressableAssets.IKeyEvaluator
        {
            protected [__keep_incompatibility]: never;
            public get RuntimeKey(): any;
            public constructor ($guid: string)
            public RuntimeKeyIsValid () : boolean
        }
        class SceneAssetReference extends UnityEngine.AddressableAssets.AssetReference implements UnityEngine.AddressableAssets.IKeyEvaluator
        {
            protected [__keep_incompatibility]: never;
            public get OperationHandle(): UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle$1<UnityEngine.ResourceManagement.ResourceProviders.SceneInstance>;
            public TryLoadScene ($loadMode: UnityEngine.SceneManagement.LoadSceneMode, $activateOnLoad?: boolean, $priority?: number) : Cysharp.Threading.Tasks.UniTask$1<UnityEngine.SceneManagement.Scene>
            public constructor ($guid: string)
        }
        class ScriptableObjectAssetReference$1<TScriptableObject> extends UnityEngine.AddressableAssets.AssetReferenceT$1<TScriptableObject> implements UnityEngine.AddressableAssets.IKeyEvaluator
        {
            protected [__keep_incompatibility]: never;
            public get OperationHandle(): UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle$1<TScriptableObject>;
            public get RuntimeKey(): any;
            public TryLoadAsset () : Cysharp.Threading.Tasks.UniTask$1<TScriptableObject>
            public constructor ($guid: string)
            public RuntimeKeyIsValid () : boolean
        }
        class SpriteAssetReference extends H2V.ExtensionsCore.AssetReferences.GeneralAssetReference$1<UnityEngine.Sprite> implements UnityEngine.AddressableAssets.IKeyEvaluator
        {
            protected [__keep_incompatibility]: never;
            public get RuntimeKey(): any;
            public constructor ($guid: string)
            public RuntimeKeyIsValid () : boolean
        }
    }
    namespace UnityEngine.ResourceManagement.AsyncOperations {
        class AsyncOperationHandle$1<TObject> extends System.ValueType implements System.Collections.IEnumerator, System.IEquatable$1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle$1<TObject>>
        {
            protected [__keep_incompatibility]: never;
            public get DebugName(): string;
            public get IsDone(): boolean;
            public get OperationException(): System.Exception;
            public get PercentComplete(): number;
            public get Result(): TObject;
            public get Status(): UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationStatus;
            public get Task(): System.Threading.Tasks.Task$1<TObject>;
            public static op_Implicit ($obj: any) : any
            public GetDownloadStatus () : UnityEngine.ResourceManagement.AsyncOperations.DownloadStatus
            public add_Completed ($value: System.Action$1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle$1<TObject>>) : void
            public remove_Completed ($value: System.Action$1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle$1<TObject>>) : void
            public ReleaseHandleOnCompletion () : void
            public add_CompletedTypeless ($value: System.Action$1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle>) : void
            public remove_CompletedTypeless ($value: System.Action$1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle>) : void
            public GetDependencies ($deps: System.Collections.Generic.List$1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle>) : void
            public add_Destroyed ($value: System.Action$1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle>) : void
            public remove_Destroyed ($value: System.Action$1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle>) : void
            public Equals ($other: UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle$1<TObject>) : boolean
            public WaitForCompletion () : TObject
            public IsValid () : boolean
            public Release () : void
        }
        class AsyncOperationHandle extends System.ValueType implements System.Collections.IEnumerator
        {
            protected [__keep_incompatibility]: never;
            public get DebugName(): string;
            public get IsDone(): boolean;
            public get OperationException(): System.Exception;
            public get PercentComplete(): number;
            public get Result(): any;
            public get Status(): UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationStatus;
            public get Task(): System.Threading.Tasks.Task$1<any>;
            public add_Completed ($value: System.Action$1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle>) : void
            public remove_Completed ($value: System.Action$1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle>) : void
            public ReleaseHandleOnCompletion () : void
            public Equals ($other: UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle) : boolean
            public add_Destroyed ($value: System.Action$1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle>) : void
            public remove_Destroyed ($value: System.Action$1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle>) : void
            public GetDependencies ($deps: System.Collections.Generic.List$1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle>) : void
            public IsValid () : boolean
            public GetDownloadStatus () : UnityEngine.ResourceManagement.AsyncOperations.DownloadStatus
            public Release () : void
            public WaitForCompletion () : any
        }
        class AsyncOperationBase$1<TObject> extends System.Object implements UnityEngine.ResourceManagement.AsyncOperations.IAsyncOperation
        {
            protected [__keep_incompatibility]: never;
            public get Result(): TObject;
            public set Result(value: TObject);
            public get IsRunning(): boolean;
            public GetDependencies ($dependencies: System.Collections.Generic.List$1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle>) : void
            public WaitForCompletion () : void
            public Complete ($result: TObject, $success: boolean, $errorMsg: string) : void
            public Complete ($result: TObject, $success: boolean, $errorMsg: string, $releaseDependenciesOnFailure: boolean) : void
            public Complete ($result: TObject, $success: boolean, $exception: System.Exception, $releaseDependenciesOnFailure?: boolean) : void
        }
        interface IAsyncOperation
        {
        }
        class DownloadStatus extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
            public TotalBytes : bigint
            public DownloadedBytes : bigint
            public IsDone : boolean
            public get Percent(): number;
        }
        enum AsyncOperationStatus
        { None = 0, Succeeded = 1, Failed = 2 }
    }
    namespace UnityEngine.ResourceManagement.ResourceProviders {
        class SceneInstance extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
            public get Scene(): UnityEngine.SceneManagement.Scene;
            public ActivateAsync () : UnityEngine.AsyncOperation
        }
        interface IInstanceProvider
        {
            ProvideInstance ($resourceManager: UnityEngine.ResourceManagement.ResourceManager, $prefabHandle: UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle$1<UnityEngine.GameObject>, $instantiateParameters: UnityEngine.ResourceManagement.ResourceProviders.InstantiationParameters) : UnityEngine.GameObject
            ReleaseInstance ($resourceManager: UnityEngine.ResourceManagement.ResourceManager, $instance: UnityEngine.GameObject) : void
        }
        class InstantiationParameters extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
            public get Position(): UnityEngine.Vector3;
            public get Rotation(): UnityEngine.Quaternion;
            public get Parent(): UnityEngine.Transform;
            public get InstantiateInWorldPosition(): boolean;
            public get SetPositionRotation(): boolean;
            public Instantiate ($source: UnityEngine.Object) : UnityEngine.Object
            public constructor ($parent: UnityEngine.Transform, $instantiateInWorldSpace: boolean)
            public constructor ($position: UnityEngine.Vector3, $rotation: UnityEngine.Quaternion, $parent: UnityEngine.Transform)
        }
        enum SceneReleaseMode
        { ReleaseSceneWhenSceneUnloaded = 0, OnlyReleaseSceneOnHandleRelease = 1 }
        class ResourceProviderBase extends System.Object implements UnityEngine.ResourceManagement.ResourceProviders.IResourceProvider, UnityEngine.ResourceManagement.Util.IInitializableObject
        {
            protected [__keep_incompatibility]: never;
            public get ProviderId(): string;
            public get BehaviourFlags(): UnityEngine.ResourceManagement.ResourceProviders.ProviderBehaviourFlags;
            public Initialize ($id: string, $data: string) : boolean
            public CanProvide ($t: System.Type, $location: UnityEngine.ResourceManagement.ResourceLocations.IResourceLocation) : boolean
            public Release ($location: UnityEngine.ResourceManagement.ResourceLocations.IResourceLocation, $obj: any) : void
            public GetDefaultType ($location: UnityEngine.ResourceManagement.ResourceLocations.IResourceLocation) : System.Type
            public Provide ($provideHandle: UnityEngine.ResourceManagement.ResourceProviders.ProvideHandle) : void
            public InitializeAsync ($rm: UnityEngine.ResourceManagement.ResourceManager, $id: string, $data: string) : UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle$1<boolean>
            public CanProvide ($type: System.Type, $location: UnityEngine.ResourceManagement.ResourceLocations.IResourceLocation) : boolean
            public Release ($location: UnityEngine.ResourceManagement.ResourceLocations.IResourceLocation, $asset: any) : void
        }
        interface IResourceProvider
        {
            ProviderId : string
            BehaviourFlags : UnityEngine.ResourceManagement.ResourceProviders.ProviderBehaviourFlags
            GetDefaultType ($location: UnityEngine.ResourceManagement.ResourceLocations.IResourceLocation) : System.Type
            CanProvide ($type: System.Type, $location: UnityEngine.ResourceManagement.ResourceLocations.IResourceLocation) : boolean
            Provide ($provideHandle: UnityEngine.ResourceManagement.ResourceProviders.ProvideHandle) : void
            Release ($location: UnityEngine.ResourceManagement.ResourceLocations.IResourceLocation, $asset: any) : void
        }
        class ProvideHandle extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
            public get ResourceManager(): UnityEngine.ResourceManagement.ResourceManager;
            public get Type(): System.Type;
            public get Location(): UnityEngine.ResourceManagement.ResourceLocations.IResourceLocation;
            public get DependencyCount(): number;
            public GetDependencies ($list: System.Collections.Generic.IList$1<any>) : void
            public SetProgressCallback ($callback: System.Func$1<number>) : void
            public SetDownloadProgressCallbacks ($callback: System.Func$1<UnityEngine.ResourceManagement.AsyncOperations.DownloadStatus>) : void
            public SetWaitForCompletionCallback ($callback: System.Func$1<boolean>) : void
        }
        interface ISceneProvider
        {
            ProvideScene ($resourceManager: UnityEngine.ResourceManagement.ResourceManager, $location: UnityEngine.ResourceManagement.ResourceLocations.IResourceLocation, $loadMode: UnityEngine.SceneManagement.LoadSceneMode, $activateOnLoad: boolean, $priority: number) : UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle$1<UnityEngine.ResourceManagement.ResourceProviders.SceneInstance>
            ProvideScene ($resourceManager: UnityEngine.ResourceManagement.ResourceManager, $location: UnityEngine.ResourceManagement.ResourceLocations.IResourceLocation, $loadSceneParameters: UnityEngine.SceneManagement.LoadSceneParameters, $activateOnLoad: boolean, $priority: number) : UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle$1<UnityEngine.ResourceManagement.ResourceProviders.SceneInstance>
            ProvideScene ($resourceManager: UnityEngine.ResourceManagement.ResourceManager, $location: UnityEngine.ResourceManagement.ResourceLocations.IResourceLocation, $loadSceneParameters: UnityEngine.SceneManagement.LoadSceneParameters, $releaseMode: UnityEngine.ResourceManagement.ResourceProviders.SceneReleaseMode, $activateOnLoad: boolean, $priority: number) : UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle$1<UnityEngine.ResourceManagement.ResourceProviders.SceneInstance>
            ReleaseScene ($resourceManager: UnityEngine.ResourceManagement.ResourceManager, $sceneLoadHandle: UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle$1<UnityEngine.ResourceManagement.ResourceProviders.SceneInstance>) : UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle$1<UnityEngine.ResourceManagement.ResourceProviders.SceneInstance>
        }
        enum AssetLoadMode
        { RequestedAssetAndDependencies = 0, AllPackedAssetsAndDependencies = 1 }
        interface IAssetBundleResource
        {
            GetAssetBundle () : UnityEngine.AssetBundle
        }
        class AssetBundleRequestOptions extends System.Object implements UnityEngine.ResourceManagement.ResourceLocations.ILocationSizeData
        {
            protected [__keep_incompatibility]: never;
            public get Hash(): string;
            public set Hash(value: string);
            public get Crc(): number;
            public set Crc(value: number);
            public get Timeout(): number;
            public set Timeout(value: number);
            public get ChunkedTransfer(): boolean;
            public set ChunkedTransfer(value: boolean);
            public get RedirectLimit(): number;
            public set RedirectLimit(value: number);
            public get RetryCount(): number;
            public set RetryCount(value: number);
            public get BundleName(): string;
            public set BundleName(value: string);
            public get AssetLoadMode(): UnityEngine.ResourceManagement.ResourceProviders.AssetLoadMode;
            public set AssetLoadMode(value: UnityEngine.ResourceManagement.ResourceProviders.AssetLoadMode);
            public get BundleSize(): bigint;
            public set BundleSize(value: bigint);
            public get UseCrcForCachedBundle(): boolean;
            public set UseCrcForCachedBundle(value: boolean);
            public get UseUnityWebRequestForLocalBundles(): boolean;
            public set UseUnityWebRequestForLocalBundles(value: boolean);
            public get ClearOtherCachedVersionsWhenLoaded(): boolean;
            public set ClearOtherCachedVersionsWhenLoaded(value: boolean);
            public ComputeSize ($location: UnityEngine.ResourceManagement.ResourceLocations.IResourceLocation, $resourceManager: UnityEngine.ResourceManagement.ResourceManager) : bigint
            public constructor ()
        }
        class AssetBundleResource extends System.Object implements UnityEngine.ResourceManagement.ResourceProviders.IAssetBundleResource, UnityEngine.ResourceManagement.IUpdateReceiver
        {
            protected [__keep_incompatibility]: never;
            public GetAssetPreloadRequest () : UnityEngine.AssetBundleRequest
            public GetAssetBundle () : UnityEngine.AssetBundle
            public Start ($provideHandle: UnityEngine.ResourceManagement.ResourceProviders.ProvideHandle, $unloadOp: UnityEngine.AssetBundleUnloadOperation, $requestRetryCallback: System.Func$2<UnityEngine.ResourceManagement.Util.UnityWebRequestResult, boolean>) : void
            public static GetLoadInfo ($handle: UnityEngine.ResourceManagement.ResourceProviders.ProvideHandle, $loadType: $Ref<UnityEngine.ResourceManagement.ResourceProviders.AssetBundleResource.LoadType>, $path: $Ref<string>) : void
            public Update ($unscaledDeltaTime: number) : void
            public Unload ($unloadOp: $Ref<UnityEngine.AssetBundleUnloadOperation>) : boolean
            public constructor ()
        }
        class AssetBundleProvider extends UnityEngine.ResourceManagement.ResourceProviders.ResourceProviderBase implements UnityEngine.ResourceManagement.ResourceProviders.IResourceProvider, UnityEngine.ResourceManagement.Util.IInitializableObject
        {
            protected [__keep_incompatibility]: never;
            public ShouldRetryDownloadError ($uwrResult: UnityEngine.ResourceManagement.Util.UnityWebRequestResult) : boolean
            public constructor ()
        }
        class AssetDatabaseProvider extends UnityEngine.ResourceManagement.ResourceProviders.ResourceProviderBase implements UnityEngine.ResourceManagement.ResourceProviders.IResourceProvider, UnityEngine.ResourceManagement.Util.IInitializableObject
        {
            protected [__keep_incompatibility]: never;
            public constructor ()
            public constructor ($delay?: number)
        }
        class AtlasSpriteProvider extends UnityEngine.ResourceManagement.ResourceProviders.ResourceProviderBase implements UnityEngine.ResourceManagement.ResourceProviders.IResourceProvider, UnityEngine.ResourceManagement.Util.IInitializableObject
        {
            protected [__keep_incompatibility]: never;
            public constructor ()
        }
        class BundledAssetProvider extends UnityEngine.ResourceManagement.ResourceProviders.ResourceProviderBase implements UnityEngine.ResourceManagement.ResourceProviders.IResourceProvider, UnityEngine.ResourceManagement.Util.IInitializableObject
        {
            protected [__keep_incompatibility]: never;
            public constructor ()
        }
        class InstanceProvider extends System.Object implements UnityEngine.ResourceManagement.ResourceProviders.IInstanceProvider
        {
            protected [__keep_incompatibility]: never;
            public ProvideInstance ($resourceManager: UnityEngine.ResourceManagement.ResourceManager, $prefabHandle: UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle$1<UnityEngine.GameObject>, $instantiateParameters: UnityEngine.ResourceManagement.ResourceProviders.InstantiationParameters) : UnityEngine.GameObject
            public ReleaseInstance ($resourceManager: UnityEngine.ResourceManagement.ResourceManager, $instance: UnityEngine.GameObject) : void
            public constructor ()
        }
        enum ProviderBehaviourFlags
        { None = 0, CanProvideWithFailedDependencies = 1 }
        class TextDataProvider extends UnityEngine.ResourceManagement.ResourceProviders.ResourceProviderBase implements UnityEngine.ResourceManagement.ResourceProviders.IResourceProvider, UnityEngine.ResourceManagement.Util.IInitializableObject
        {
            protected [__keep_incompatibility]: never;
            public get IgnoreFailures(): boolean;
            public set IgnoreFailures(value: boolean);
            public Convert ($type: System.Type, $text: string) : any
            public constructor ()
        }
        class JsonAssetProvider extends UnityEngine.ResourceManagement.ResourceProviders.TextDataProvider implements UnityEngine.ResourceManagement.ResourceProviders.IResourceProvider, UnityEngine.ResourceManagement.Util.IInitializableObject
        {
            protected [__keep_incompatibility]: never;
            public constructor ()
        }
        class ProviderLoadRequestOptions extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public get IgnoreFailures(): boolean;
            public set IgnoreFailures(value: boolean);
            public get WebRequestTimeout(): number;
            public set WebRequestTimeout(value: number);
            public Copy () : UnityEngine.ResourceManagement.ResourceProviders.ProviderLoadRequestOptions
            public constructor ()
        }
        class SceneProvider extends System.Object implements UnityEngine.ResourceManagement.ResourceProviders.ISceneProvider, UnityEngine.ResourceManagement.ResourceProviders.ISceneProvider2
        {
            protected [__keep_incompatibility]: never;
            public ProvideScene ($resourceManager: UnityEngine.ResourceManagement.ResourceManager, $location: UnityEngine.ResourceManagement.ResourceLocations.IResourceLocation, $loadSceneMode: UnityEngine.SceneManagement.LoadSceneMode, $activateOnLoad: boolean, $priority: number) : UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle$1<UnityEngine.ResourceManagement.ResourceProviders.SceneInstance>
            public ProvideScene ($resourceManager: UnityEngine.ResourceManagement.ResourceManager, $location: UnityEngine.ResourceManagement.ResourceLocations.IResourceLocation, $loadSceneParameters: UnityEngine.SceneManagement.LoadSceneParameters, $activateOnLoad: boolean, $priority: number) : UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle$1<UnityEngine.ResourceManagement.ResourceProviders.SceneInstance>
            public ProvideScene ($resourceManager: UnityEngine.ResourceManagement.ResourceManager, $location: UnityEngine.ResourceManagement.ResourceLocations.IResourceLocation, $loadSceneParameters: UnityEngine.SceneManagement.LoadSceneParameters, $releaseMode: UnityEngine.ResourceManagement.ResourceProviders.SceneReleaseMode, $activateOnLoad: boolean, $priority: number) : UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle$1<UnityEngine.ResourceManagement.ResourceProviders.SceneInstance>
            public ReleaseScene ($resourceManager: UnityEngine.ResourceManagement.ResourceManager, $sceneLoadHandle: UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle$1<UnityEngine.ResourceManagement.ResourceProviders.SceneInstance>) : UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle$1<UnityEngine.ResourceManagement.ResourceProviders.SceneInstance>
            public constructor ()
            public ProvideScene ($resourceManager: UnityEngine.ResourceManagement.ResourceManager, $location: UnityEngine.ResourceManagement.ResourceLocations.IResourceLocation, $loadMode: UnityEngine.SceneManagement.LoadSceneMode, $activateOnLoad: boolean, $priority: number) : UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle$1<UnityEngine.ResourceManagement.ResourceProviders.SceneInstance>
        }
        interface ISceneProvider2 extends UnityEngine.ResourceManagement.ResourceProviders.ISceneProvider
        {
            ProvideScene ($resourceManager: UnityEngine.ResourceManagement.ResourceManager, $location: UnityEngine.ResourceManagement.ResourceLocations.IResourceLocation, $loadMode: UnityEngine.SceneManagement.LoadSceneMode, $activateOnLoad: boolean, $priority: number) : UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle$1<UnityEngine.ResourceManagement.ResourceProviders.SceneInstance>
            ProvideScene ($resourceManager: UnityEngine.ResourceManagement.ResourceManager, $location: UnityEngine.ResourceManagement.ResourceLocations.IResourceLocation, $loadSceneParameters: UnityEngine.SceneManagement.LoadSceneParameters, $activateOnLoad: boolean, $priority: number) : UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle$1<UnityEngine.ResourceManagement.ResourceProviders.SceneInstance>
            ProvideScene ($resourceManager: UnityEngine.ResourceManagement.ResourceManager, $location: UnityEngine.ResourceManagement.ResourceLocations.IResourceLocation, $loadSceneParameters: UnityEngine.SceneManagement.LoadSceneParameters, $releaseMode: UnityEngine.ResourceManagement.ResourceProviders.SceneReleaseMode, $activateOnLoad: boolean, $priority: number) : UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle$1<UnityEngine.ResourceManagement.ResourceProviders.SceneInstance>
            ReleaseScene ($resourceManager: UnityEngine.ResourceManagement.ResourceManager, $sceneLoadHandle: UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle$1<UnityEngine.ResourceManagement.ResourceProviders.SceneInstance>) : UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle$1<UnityEngine.ResourceManagement.ResourceProviders.SceneInstance>
        }
    }
    namespace H2V.ExtensionsCore.Events.ActionDispatch.LogErrorHandler {
        class ErrorAction extends H2V.ExtensionsCore.Events.ActionDispatch.ActionBase implements TinyMessenger.ITinyMessage
        {
            protected [__keep_incompatibility]: never;
            public get Exception(): System.Exception;
            public constructor ($exception: System.Exception)
        }
    }
    namespace PackedPlayModeBuildLogs {
        class RuntimeBuildLog extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
            public Type : UnityEngine.LogType
            public Message : string
            public constructor ($type: UnityEngine.LogType, $message: string)
        }
    }
    namespace UnityEngine.AddressableAssets.ResourceLocators {
        interface IResourceLocator
        {
            LocatorId : string
            Keys : System.Collections.Generic.IEnumerable$1<any>
            AllLocations : System.Collections.Generic.IEnumerable$1<UnityEngine.ResourceManagement.ResourceLocations.IResourceLocation>
            Locate ($key: any, $type: System.Type, $locations: $Ref<System.Collections.Generic.IList$1<UnityEngine.ResourceManagement.ResourceLocations.IResourceLocation>>) : boolean
        }
        class ContentCatalogDataEntry extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public get InternalId(): string;
            public set InternalId(value: string);
            public get Provider(): string;
            public get Keys(): System.Collections.Generic.List$1<any>;
            public get Dependencies(): System.Collections.Generic.List$1<any>;
            public get Data(): any;
            public set Data(value: any);
            public get ResourceType(): System.Type;
            public constructor ($type: System.Type, $internalId: string, $provider: string, $keys: System.Collections.Generic.IEnumerable$1<any>, $dependencies?: System.Collections.Generic.IEnumerable$1<any>, $extraData?: any)
        }
        class ContentCatalogData extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public LocalHash : string
            public get BuildResultHash(): string;
            public set BuildResultHash(value: string);
            public get ProviderId(): string;
            public get InstanceProviderData(): UnityEngine.ResourceManagement.Util.ObjectInitializationData;
            public set InstanceProviderData(value: UnityEngine.ResourceManagement.Util.ObjectInitializationData);
            public get SceneProviderData(): UnityEngine.ResourceManagement.Util.ObjectInitializationData;
            public set SceneProviderData(value: UnityEngine.ResourceManagement.Util.ObjectInitializationData);
            public get ResourceProviderData(): System.Collections.Generic.List$1<UnityEngine.ResourceManagement.Util.ObjectInitializationData>;
            public set ResourceProviderData(value: System.Collections.Generic.List$1<UnityEngine.ResourceManagement.Util.ObjectInitializationData>);
            public SerializeToByteArray () : System.Array$1<number>
            public SetData ($entries: System.Collections.Generic.IList$1<UnityEngine.AddressableAssets.ResourceLocators.ContentCatalogDataEntry>) : void
            public constructor ($id: string)
            public constructor ()
            public constructor ($entries: System.Collections.Generic.IList$1<UnityEngine.AddressableAssets.ResourceLocators.ContentCatalogDataEntry>, $id?: string)
        }
        class ResourceLocationData extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public get Keys(): System.Array$1<string>;
            public get InternalId(): string;
            public get Provider(): string;
            public get Dependencies(): System.Array$1<string>;
            public get ResourceType(): System.Type;
            public get Data(): any;
            public set Data(value: any);
            public constructor ($keys: System.Array$1<string>, $id: string, $provider: System.Type, $t: System.Type, $dependencies?: System.Array$1<string>)
        }
        class ResourceLocationMap extends System.Object implements UnityEngine.AddressableAssets.ResourceLocators.IResourceLocator
        {
            protected [__keep_incompatibility]: never;
            public get LocatorId(): string;
            public get AllLocations(): System.Collections.Generic.IEnumerable$1<UnityEngine.ResourceManagement.ResourceLocations.IResourceLocation>;
            public get Locations(): System.Collections.Generic.Dictionary$2<any, System.Collections.Generic.IList$1<UnityEngine.ResourceManagement.ResourceLocations.IResourceLocation>>;
            public get Keys(): System.Collections.Generic.IEnumerable$1<any>;
            public Locate ($key: any, $type: System.Type, $locations: $Ref<System.Collections.Generic.IList$1<UnityEngine.ResourceManagement.ResourceLocations.IResourceLocation>>) : boolean
            public Add ($key: any, $location: UnityEngine.ResourceManagement.ResourceLocations.IResourceLocation) : void
            public Add ($key: any, $locations: System.Collections.Generic.IList$1<UnityEngine.ResourceManagement.ResourceLocations.IResourceLocation>) : void
            public constructor ($id: string, $capacity?: number)
            public constructor ($id: string, $locations: System.Collections.Generic.IList$1<UnityEngine.AddressableAssets.ResourceLocators.ResourceLocationData>)
        }
    }
    namespace UnityEngine.ResourceManagement.ResourceLocations {
        interface IResourceLocation
        {
            InternalId : string
            ProviderId : string
            Dependencies : System.Collections.Generic.IList$1<UnityEngine.ResourceManagement.ResourceLocations.IResourceLocation>
            DependencyHashCode : number
            HasDependencies : boolean
            Data : any
            PrimaryKey : string
            ResourceType : System.Type
            Hash ($resultType: System.Type) : number
        }
        class ResourceLocationBase extends System.Object implements UnityEngine.ResourceManagement.ResourceLocations.IResourceLocation
        {
            protected [__keep_incompatibility]: never;
            public get InternalId(): string;
            public get ProviderId(): string;
            public get Dependencies(): System.Collections.Generic.IList$1<UnityEngine.ResourceManagement.ResourceLocations.IResourceLocation>;
            public get HasDependencies(): boolean;
            public get Data(): any;
            public set Data(value: any);
            public get PrimaryKey(): string;
            public set PrimaryKey(value: string);
            public get DependencyHashCode(): number;
            public get ResourceType(): System.Type;
            public Hash ($t: System.Type) : number
            public ComputeDependencyHash () : void
            public constructor ($name: string, $id: string, $providerId: string, $t: System.Type, ...dependencies: UnityEngine.ResourceManagement.ResourceLocations.IResourceLocation[])
            public Hash ($resultType: System.Type) : number
        }
        interface ILocationSizeData
        {
            ComputeSize ($location: UnityEngine.ResourceManagement.ResourceLocations.IResourceLocation, $resourceManager: UnityEngine.ResourceManagement.ResourceManager) : bigint
        }
        class ResourceLocationComparer extends System.Object implements System.Collections.Generic.IEqualityComparer$1<UnityEngine.ResourceManagement.ResourceLocations.IResourceLocation>
        {
            protected [__keep_incompatibility]: never;
            public Equals ($x: UnityEngine.ResourceManagement.ResourceLocations.IResourceLocation, $y: UnityEngine.ResourceManagement.ResourceLocations.IResourceLocation) : boolean
            public GetHashCode ($obj: UnityEngine.ResourceManagement.ResourceLocations.IResourceLocation) : number
            public constructor ()
        }
    }
    namespace UnityEngine.AddressableAssets.Addressables {
        enum MergeMode
        { None = 0, UseFirst = 0, Union = 1, Intersection = 2 }
    }
    namespace UnityEngine.ResourceManagement {
        class ResourceManager extends System.Object implements System.IDisposable
        {
            protected [__keep_incompatibility]: never;
            public static get ExceptionHandler(): System.Action$2<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle, System.Exception>;
            public static set ExceptionHandler(value: System.Action$2<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle, System.Exception>);
            public get InternalIdTransformFunc(): System.Func$2<UnityEngine.ResourceManagement.ResourceLocations.IResourceLocation, string>;
            public set InternalIdTransformFunc(value: System.Func$2<UnityEngine.ResourceManagement.ResourceLocations.IResourceLocation, string>);
            public get WebRequestOverride(): System.Action$1<UnityEngine.Networking.UnityWebRequest>;
            public set WebRequestOverride(value: System.Action$1<UnityEngine.Networking.UnityWebRequest>);
            public get Allocator(): UnityEngine.ResourceManagement.Util.IAllocationStrategy;
            public set Allocator(value: UnityEngine.ResourceManagement.Util.IAllocationStrategy);
            public get ResourceProviders(): System.Collections.Generic.IList$1<UnityEngine.ResourceManagement.ResourceProviders.IResourceProvider>;
            public get CertificateHandlerInstance(): UnityEngine.Networking.CertificateHandler;
            public set CertificateHandlerInstance(value: UnityEngine.Networking.CertificateHandler);
            public TransformInternalId ($location: UnityEngine.ResourceManagement.ResourceLocations.IResourceLocation) : string
            public AddUpdateReceiver ($receiver: UnityEngine.ResourceManagement.IUpdateReceiver) : void
            public RemoveUpdateReciever ($receiver: UnityEngine.ResourceManagement.IUpdateReceiver) : void
            public GetResourceProvider ($t: System.Type, $location: UnityEngine.ResourceManagement.ResourceLocations.IResourceLocation) : UnityEngine.ResourceManagement.ResourceProviders.IResourceProvider
            public Release ($handle: UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle) : void
            public Acquire ($handle: UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle) : void
            public CreateGenericGroupOperation ($operations: System.Collections.Generic.List$1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle>, $releasedCachedOpOnComplete?: boolean) : UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle$1<System.Collections.Generic.IList$1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle>>
            public ProvideScene ($sceneProvider: UnityEngine.ResourceManagement.ResourceProviders.ISceneProvider, $location: UnityEngine.ResourceManagement.ResourceLocations.IResourceLocation, $loadSceneMode: UnityEngine.SceneManagement.LoadSceneMode, $activateOnLoad: boolean, $priority: number) : UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle$1<UnityEngine.ResourceManagement.ResourceProviders.SceneInstance>
            public ProvideScene ($sceneProvider: UnityEngine.ResourceManagement.ResourceProviders.ISceneProvider, $location: UnityEngine.ResourceManagement.ResourceLocations.IResourceLocation, $loadSceneParameters: UnityEngine.SceneManagement.LoadSceneParameters, $activateOnLoad: boolean, $priority: number) : UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle$1<UnityEngine.ResourceManagement.ResourceProviders.SceneInstance>
            public ProvideScene ($sceneProvider: UnityEngine.ResourceManagement.ResourceProviders.ISceneProvider, $location: UnityEngine.ResourceManagement.ResourceLocations.IResourceLocation, $loadSceneParameters: UnityEngine.SceneManagement.LoadSceneParameters, $releaseMode: UnityEngine.ResourceManagement.ResourceProviders.SceneReleaseMode, $activateOnLoad: boolean, $priority: number) : UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle$1<UnityEngine.ResourceManagement.ResourceProviders.SceneInstance>
            public ReleaseScene ($sceneProvider: UnityEngine.ResourceManagement.ResourceProviders.ISceneProvider, $sceneLoadHandle: UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle$1<UnityEngine.ResourceManagement.ResourceProviders.SceneInstance>) : UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle$1<UnityEngine.ResourceManagement.ResourceProviders.SceneInstance>
            public ProvideInstance ($provider: UnityEngine.ResourceManagement.ResourceProviders.IInstanceProvider, $location: UnityEngine.ResourceManagement.ResourceLocations.IResourceLocation, $instantiateParameters: UnityEngine.ResourceManagement.ResourceProviders.InstantiationParameters) : UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle$1<UnityEngine.GameObject>
            public CleanupSceneInstances ($scene: UnityEngine.SceneManagement.Scene) : void
            public Dispose () : void
            public constructor ($alloc?: UnityEngine.ResourceManagement.Util.IAllocationStrategy)
        }
        interface IUpdateReceiver
        {
            Update ($unscaledDeltaTime: number) : void
        }
        class WebRequestQueueOperation extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public Result : UnityEngine.Networking.UnityWebRequestAsyncOperation
            public OnComplete : System.Action$1<UnityEngine.Networking.UnityWebRequestAsyncOperation>
            public get IsDone(): boolean;
            public get WebRequest(): UnityEngine.Networking.UnityWebRequest;
            public constructor ($request: UnityEngine.Networking.UnityWebRequest)
        }
        class WebRequestQueue extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public static SetMaxConcurrentRequests ($maxRequests: number) : void
            public static QueueRequest ($request: UnityEngine.Networking.UnityWebRequest) : UnityEngine.ResourceManagement.WebRequestQueueOperation
            public static WaitForRequestToBeActive ($request: UnityEngine.ResourceManagement.WebRequestQueueOperation, $millisecondsTimeout: number) : void
        }
    }
    namespace UnityEngine.ResourceManagement.Util {
        interface IInitializableObject
        {
            Initialize ($id: string, $data: string) : boolean
            InitializeAsync ($rm: UnityEngine.ResourceManagement.ResourceManager, $id: string, $data: string) : UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle$1<boolean>
        }
        class ObjectInitializationData extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
            public get Id(): string;
            public get ObjectType(): UnityEngine.ResourceManagement.Util.SerializedType;
            public get Data(): string;
            public GetAsyncInitHandle ($rm: UnityEngine.ResourceManagement.ResourceManager, $idOverride?: string) : UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle
            public static CreateSerializedInitializationData ($objectType: System.Type, $id?: string, $dataObject?: any) : UnityEngine.ResourceManagement.Util.ObjectInitializationData
            public GetRuntimeTypes () : System.Array$1<System.Type>
        }
        interface IAllocationStrategy
        {
            New ($type: System.Type, $typeHash: number) : any
            Release ($typeHash: number, $obj: any) : void
        }
        class UnityWebRequestResult extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public get Error(): string;
            public set Error(value: string);
            public get ResponseCode(): bigint;
            public get Result(): UnityEngine.Networking.UnityWebRequest.Result;
            public get Method(): string;
            public get Url(): string;
            public ShouldRetryDownloadError () : boolean
            public constructor ($request: UnityEngine.Networking.UnityWebRequest)
        }
        class ComponentSingleton$1<T> extends UnityEngine.MonoBehaviour
        {
            protected [__keep_incompatibility]: never;
            public static get Exists(): any;
            public static get Instance(): any;
            public static DestroySingleton () : any
        }
        interface IObjectInitializationDataProvider
        {
            Name : string
            CreateObjectInitializationData () : UnityEngine.ResourceManagement.Util.ObjectInitializationData
        }
        class DefaultAllocationStrategy extends System.Object implements UnityEngine.ResourceManagement.Util.IAllocationStrategy
        {
            protected [__keep_incompatibility]: never;
            public New ($type: System.Type, $typeHash: number) : any
            public Release ($typeHash: number, $obj: any) : void
            public constructor ()
        }
        class LRUCacheAllocationStrategy extends System.Object implements UnityEngine.ResourceManagement.Util.IAllocationStrategy
        {
            protected [__keep_incompatibility]: never;
            public New ($type: System.Type, $typeHash: number) : any
            public Release ($typeHash: number, $obj: any) : void
            public constructor ($poolMaxSize: number, $poolCapacity: number, $poolCacheMaxSize: number, $initialPoolCacheCapacity: number)
        }
        class SerializedTypeRestrictionAttribute extends System.Attribute implements System.Runtime.InteropServices._Attribute
        {
            protected [__keep_incompatibility]: never;
            public type : System.Type
            public constructor ()
        }
        class LinkedListNodeCache$1<T> extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public Acquire ($val: T) : System.Collections.Generic.LinkedListNode$1<T>
            public Release ($node: System.Collections.Generic.LinkedListNode$1<T>) : void
            public constructor ()
        }
        class SerializedType extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
            public get AssemblyName(): string;
            public get ClassName(): string;
            public get Value(): System.Type;
            public set Value(value: System.Type);
            public get ValueChanged(): boolean;
            public set ValueChanged(value: boolean);
        }
        class ResourceManagerConfig extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public static ExtractKeyAndSubKey ($keyObj: any, $mainKey: $Ref<string>, $subKey: $Ref<string>) : boolean
            public static IsPathRemote ($path: string) : boolean
            public static StripQueryParameters ($path: string) : string
            public static ShouldPathUseWebRequest ($path: string) : boolean
            public static CreateArrayResult ($type: System.Type, $allAssets: System.Array$1<UnityEngine.Object>) : System.Array
            public static CreateListResult ($type: System.Type, $allAssets: System.Array$1<UnityEngine.Object>) : System.Collections.IList
        }
        class UnityWebRequestUtilities extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public static RequestHasErrors ($webReq: UnityEngine.Networking.UnityWebRequest, $result: $Ref<UnityEngine.ResourceManagement.Util.UnityWebRequestResult>) : boolean
            public static IsAssetBundleDownloaded ($op: UnityEngine.Networking.UnityWebRequestAsyncOperation) : boolean
            public constructor ()
        }
    }
    namespace UnityEngine.AddressableAssets.ResourceProviders {
        class ContentCatalogProvider extends UnityEngine.ResourceManagement.ResourceProviders.ResourceProviderBase implements UnityEngine.ResourceManagement.ResourceProviders.IResourceProvider, UnityEngine.ResourceManagement.Util.IInitializableObject
        {
            protected [__keep_incompatibility]: never;
            public DisableCatalogUpdateOnStart : boolean
            public IsLocalCatalogInBundle : boolean
            public constructor ($resourceManagerInstance: UnityEngine.ResourceManagement.ResourceManager)
        }
    }
    namespace UnityEngine.AddressableAssets.Initialization {
        class AddressablesRuntimeProperties extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public static SetPropertyValue ($name: string, $val: string) : void
            public static ClearCachedPropertyValues () : void
            public static EvaluateProperty ($name: string) : string
            public static EvaluateString ($input: string) : string
            public static EvaluateString ($inputString: string, $startDelimiter: number, $endDelimiter: number, $varFunc: System.Func$2<string, string>) : string
        }
        class CacheInitialization extends System.Object implements UnityEngine.ResourceManagement.Util.IInitializableObject
        {
            protected [__keep_incompatibility]: never;
            public static get RootPath(): string;
            public Initialize ($id: string, $dataStr: string) : boolean
            public InitializeAsync ($rm: UnityEngine.ResourceManagement.ResourceManager, $id: string, $data: string) : UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle$1<boolean>
            public constructor ()
            public Initialize ($id: string, $data: string) : boolean
        }
        class CacheInitializationData extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public get CompressionEnabled(): boolean;
            public set CompressionEnabled(value: boolean);
            public get CacheDirectoryOverride(): string;
            public set CacheDirectoryOverride(value: string);
            public get LimitCacheSize(): boolean;
            public set LimitCacheSize(value: boolean);
            public get MaximumCacheSize(): bigint;
            public set MaximumCacheSize(value: bigint);
            public constructor ()
        }
        class ResourceManagerRuntimeData extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public static kCatalogAddress : string
            public get BuildTarget(): string;
            public set BuildTarget(value: string);
            public get SettingsHash(): string;
            public set SettingsHash(value: string);
            public get CatalogLocations(): System.Collections.Generic.List$1<UnityEngine.AddressableAssets.ResourceLocators.ResourceLocationData>;
            public get LogResourceManagerExceptions(): boolean;
            public set LogResourceManagerExceptions(value: boolean);
            public get InitializationObjects(): System.Collections.Generic.List$1<UnityEngine.ResourceManagement.Util.ObjectInitializationData>;
            public get DisableCatalogUpdateOnStartup(): boolean;
            public set DisableCatalogUpdateOnStartup(value: boolean);
            public get IsLocalCatalogInBundle(): boolean;
            public set IsLocalCatalogInBundle(value: boolean);
            public get CertificateHandlerType(): System.Type;
            public set CertificateHandlerType(value: System.Type);
            public get AddressablesVersion(): string;
            public set AddressablesVersion(value: string);
            public get MaxConcurrentWebRequests(): number;
            public set MaxConcurrentWebRequests(value: number);
            public get CatalogRequestsTimeout(): number;
            public set CatalogRequestsTimeout(value: number);
            public constructor ()
        }
    }
    namespace UnityEngine.AddressableAssets.ResourceProviders.ContentCatalogProvider {
        enum DependencyHashIndex
        { Remote = 0, Cache = 1, Local = 2, Count = 3 }
    }
    namespace UnityEngine.ResourceManagement.Exceptions {
        class ResourceManagerException extends System.Exception implements System.Runtime.Serialization.ISerializable, System.Runtime.InteropServices._Exception
        {
            protected [__keep_incompatibility]: never;
            public constructor ()
            public constructor ($message: string)
            public constructor ($message: string, $innerException: System.Exception)
        }
        class UnknownResourceProviderException extends UnityEngine.ResourceManagement.Exceptions.ResourceManagerException implements System.Runtime.Serialization.ISerializable, System.Runtime.InteropServices._Exception
        {
            protected [__keep_incompatibility]: never;
            public get Location(): UnityEngine.ResourceManagement.ResourceLocations.IResourceLocation;
            public get Message(): string;
            public constructor ($location: UnityEngine.ResourceManagement.ResourceLocations.IResourceLocation)
            public constructor ()
            public constructor ($message: string)
            public constructor ($message: string, $innerException: System.Exception)
        }
        class OperationException extends System.Exception implements System.Runtime.Serialization.ISerializable, System.Runtime.InteropServices._Exception
        {
            protected [__keep_incompatibility]: never;
            public constructor ($message: string, $innerException?: System.Exception)
        }
        class ProviderException extends UnityEngine.ResourceManagement.Exceptions.OperationException implements System.Runtime.Serialization.ISerializable, System.Runtime.InteropServices._Exception
        {
            protected [__keep_incompatibility]: never;
            public get Location(): UnityEngine.ResourceManagement.ResourceLocations.IResourceLocation;
            public constructor ($message: string, $location?: UnityEngine.ResourceManagement.ResourceLocations.IResourceLocation, $innerException?: System.Exception)
            public constructor ($message: string, $innerException?: System.Exception)
        }
        class RemoteProviderException extends UnityEngine.ResourceManagement.Exceptions.ProviderException implements System.Runtime.Serialization.ISerializable, System.Runtime.InteropServices._Exception
        {
            protected [__keep_incompatibility]: never;
            public get Message(): string;
            public get WebRequestResult(): UnityEngine.ResourceManagement.Util.UnityWebRequestResult;
            public constructor ($message: string, $location?: UnityEngine.ResourceManagement.ResourceLocations.IResourceLocation, $uwrResult?: UnityEngine.ResourceManagement.Util.UnityWebRequestResult, $innerException?: System.Exception)
            public constructor ($message: string, $location?: UnityEngine.ResourceManagement.ResourceLocations.IResourceLocation, $innerException?: System.Exception)
            public constructor ($message: string, $innerException?: System.Exception)
        }
    }
    namespace UnityEngine.ResourceManagement.ResourceProviders.AssetBundleResource {
        enum LoadType
        { None = 0, Local = 1, Web = 2 }
    }
    namespace UnityEngine.ResourceManagement.ResourceProviders.Simulation {
        class VirtualAssetBundleEntry extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public get Name(): string;
            public get Size(): bigint;
            public get AssetPath(): string;
            public set AssetPath(value: string);
            public constructor ()
            public constructor ($name: string, $size: bigint)
        }
        class VirtualAssetBundle extends System.Object implements UnityEngine.ResourceManagement.ResourceProviders.IAssetBundleResource, UnityEngine.ISerializationCallbackReceiver
        {
            protected [__keep_incompatibility]: never;
            public get Name(): string;
            public get Assets(): System.Collections.Generic.List$1<UnityEngine.ResourceManagement.ResourceProviders.Simulation.VirtualAssetBundleEntry>;
            public get PercentComplete(): number;
            public SetSize ($dataSize: bigint, $headerSize: bigint) : void
            public OnBeforeSerialize () : void
            public OnAfterDeserialize () : void
            public GetAssetBundle () : UnityEngine.AssetBundle
            public constructor ()
            public constructor ($name: string, $local: boolean, $crc: number, $hash: string)
        }
        class VirtualAssetBundleProvider extends UnityEngine.ResourceManagement.ResourceProviders.ResourceProviderBase implements UnityEngine.ResourceManagement.ResourceProviders.IResourceProvider, UnityEngine.ResourceManagement.Util.IInitializableObject, UnityEngine.ResourceManagement.IUpdateReceiver
        {
            protected [__keep_incompatibility]: never;
            public constructor ($data: UnityEngine.ResourceManagement.ResourceProviders.Simulation.VirtualAssetBundleRuntimeData)
            public Update ($unscaledDeltaTime: number) : void
        }
        class VirtualAssetBundleRuntimeData extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public get AssetBundles(): System.Collections.Generic.List$1<UnityEngine.ResourceManagement.ResourceProviders.Simulation.VirtualAssetBundle>;
            public get RemoteLoadSpeed(): bigint;
            public get LocalLoadSpeed(): bigint;
            public constructor ()
            public constructor ($localSpeed: bigint, $remoteSpeed: bigint)
        }
        class VirtualAssetBundleRequestOptions extends UnityEngine.ResourceManagement.ResourceProviders.AssetBundleRequestOptions implements UnityEngine.ResourceManagement.ResourceLocations.ILocationSizeData
        {
            protected [__keep_incompatibility]: never;
            public constructor ()
        }
        class VirtualBundledAssetProvider extends UnityEngine.ResourceManagement.ResourceProviders.ResourceProviderBase implements UnityEngine.ResourceManagement.ResourceProviders.IResourceProvider, UnityEngine.ResourceManagement.Util.IInitializableObject
        {
            protected [__keep_incompatibility]: never;
            public constructor ()
        }
    }
    namespace UnityEngine.ResourceManagement.Profiling {
        class EngineEmitter extends System.Object implements UnityEngine.ResourceManagement.Profiling.IProfilerEmitter
        {
            protected [__keep_incompatibility]: never;
            public get IsEnabled(): boolean;
            public EmitFrameMetaData ($id: System.Guid, $tag: number, $data: System.Array) : void
            public InitialiseCallbacks ($d: System.Action$1<number>) : void
            public constructor ()
        }
        interface IProfilerEmitter
        {
        }
    }
    namespace UnityEngine.ResourceManagement.ResourceManager {
        enum DiagnosticEventType
        { AsyncOperationFail = 0, AsyncOperationCreate = 1, AsyncOperationPercentComplete = 2, AsyncOperationComplete = 3, AsyncOperationReferenceCount = 4, AsyncOperationDestroy = 5 }
    }
    namespace UnityEngine.UI.Button {
        class ButtonClickedEvent extends UnityEngine.Events.UnityEvent implements UnityEngine.ISerializationCallbackReceiver
        {
            protected [__keep_incompatibility]: never;
            public constructor ()
        }
    }
    namespace UnityEngine.UI.DefaultControls {
        interface IFactoryControls
        {
            CreateGameObject ($name: string, ...components: System.Type[]) : UnityEngine.GameObject
        }
        class Resources extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
            public standard : UnityEngine.Sprite
            public background : UnityEngine.Sprite
            public inputField : UnityEngine.Sprite
            public knob : UnityEngine.Sprite
            public checkmark : UnityEngine.Sprite
            public dropdown : UnityEngine.Sprite
            public mask : UnityEngine.Sprite
        }
    }
    namespace UnityEngine.UI.Dropdown {
        class OptionData extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public get text(): string;
            public set text(value: string);
            public get image(): UnityEngine.Sprite;
            public set image(value: UnityEngine.Sprite);
            public constructor ()
            public constructor ($text: string)
            public constructor ($image: UnityEngine.Sprite)
            public constructor ($text: string, $image: UnityEngine.Sprite)
        }
        class DropdownEvent extends UnityEngine.Events.UnityEvent$1<number> implements UnityEngine.ISerializationCallbackReceiver
        {
            protected [__keep_incompatibility]: never;
            public constructor ()
        }
        class OptionDataList extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public get options(): System.Collections.Generic.List$1<UnityEngine.UI.Dropdown.OptionData>;
            public set options(value: System.Collections.Generic.List$1<UnityEngine.UI.Dropdown.OptionData>);
            public constructor ()
        }
    }
    namespace UnityEngine.UI.GraphicRaycaster {
        enum BlockingObjects
        { None = 0, TwoD = 1, ThreeD = 2, All = 3 }
    }
    namespace UnityEngine.UI.Image {
        enum Type
        { Simple = 0, Sliced = 1, Tiled = 2, Filled = 3 }
        enum FillMethod
        { Horizontal = 0, Vertical = 1, Radial90 = 2, Radial180 = 3, Radial360 = 4 }
        enum OriginHorizontal
        { Left = 0, Right = 1 }
        enum OriginVertical
        { Bottom = 0, Top = 1 }
        enum Origin90
        { BottomLeft = 0, TopLeft = 1, TopRight = 2, BottomRight = 3 }
        enum Origin180
        { Bottom = 0, Left = 1, Top = 2, Right = 3 }
        enum Origin360
        { Bottom = 0, Right = 1, Top = 2, Left = 3 }
    }
    namespace UnityEngine.UI.InputField {
        class EndEditEvent extends UnityEngine.Events.UnityEvent$1<string> implements UnityEngine.ISerializationCallbackReceiver
        {
            protected [__keep_incompatibility]: never;
            public constructor ()
        }
        class SubmitEvent extends UnityEngine.Events.UnityEvent$1<string> implements UnityEngine.ISerializationCallbackReceiver
        {
            protected [__keep_incompatibility]: never;
            public constructor ()
        }
        class OnChangeEvent extends UnityEngine.Events.UnityEvent$1<string> implements UnityEngine.ISerializationCallbackReceiver
        {
            protected [__keep_incompatibility]: never;
            public constructor ()
        }
        interface OnValidateInput
        { 
        (text: string, charIndex: number, addedChar: number) : number; 
        Invoke?: (text: string, charIndex: number, addedChar: number) => number;
        }
        var OnValidateInput: { new (func: (text: string, charIndex: number, addedChar: number) => number): OnValidateInput; }
        enum ContentType
        { Standard = 0, Autocorrected = 1, IntegerNumber = 2, DecimalNumber = 3, Alphanumeric = 4, Name = 5, EmailAddress = 6, Password = 7, Pin = 8, Custom = 9 }
        enum LineType
        { SingleLine = 0, MultiLineSubmit = 1, MultiLineNewline = 2 }
        enum InputType
        { Standard = 0, AutoCorrect = 1, Password = 2 }
        enum CharacterValidation
        { None = 0, Integer = 1, Decimal = 2, Alphanumeric = 3, Name = 4, EmailAddress = 5 }
    }
    namespace UnityEngine.UI.AspectRatioFitter {
        enum AspectMode
        { None = 0, WidthControlsHeight = 1, HeightControlsWidth = 2, FitInParent = 3, EnvelopeParent = 4 }
    }
    namespace UnityEngine.UI.CanvasScaler {
        enum ScaleMode
        { ConstantPixelSize = 0, ScaleWithScreenSize = 1, ConstantPhysicalSize = 2 }
        enum ScreenMatchMode
        { MatchWidthOrHeight = 0, Expand = 1, Shrink = 2 }
        enum Unit
        { Centimeters = 0, Millimeters = 1, Inches = 2, Points = 3, Picas = 4 }
    }
    namespace UnityEngine.UI.ContentSizeFitter {
        enum FitMode
        { Unconstrained = 0, MinSize = 1, PreferredSize = 2 }
    }
    namespace UnityEngine.UI.GridLayoutGroup {
        enum Corner
        { UpperLeft = 0, UpperRight = 1, LowerLeft = 2, LowerRight = 3 }
        enum Axis
        { Horizontal = 0, Vertical = 1 }
        enum Constraint
        { Flexible = 0, FixedColumnCount = 1, FixedRowCount = 2 }
    }
    namespace UnityEngine.UI.MaskableGraphic {
        class CullStateChangedEvent extends UnityEngine.Events.UnityEvent$1<boolean> implements UnityEngine.ISerializationCallbackReceiver
        {
            protected [__keep_incompatibility]: never;
            public constructor ()
        }
    }
    namespace UnityEngine.UI.Navigation {
        enum Mode
        { None = 0, Horizontal = 1, Vertical = 2, Automatic = 3, Explicit = 4 }
    }
    namespace UnityEngine.UI.Scrollbar {
        enum Direction
        { LeftToRight = 0, RightToLeft = 1, BottomToTop = 2, TopToBottom = 3 }
        class ScrollEvent extends UnityEngine.Events.UnityEvent$1<number> implements UnityEngine.ISerializationCallbackReceiver
        {
            protected [__keep_incompatibility]: never;
            public constructor ()
        }
    }
    namespace UnityEngine.UI.ScrollRect {
        enum MovementType
        { Unrestricted = 0, Elastic = 1, Clamped = 2 }
        enum ScrollbarVisibility
        { Permanent = 0, AutoHide = 1, AutoHideAndExpandViewport = 2 }
        class ScrollRectEvent extends UnityEngine.Events.UnityEvent$1<UnityEngine.Vector2> implements UnityEngine.ISerializationCallbackReceiver
        {
            protected [__keep_incompatibility]: never;
            public constructor ()
        }
    }
    namespace UnityEngine.UI.Selectable {
        enum Transition
        { None = 0, ColorTint = 1, SpriteSwap = 2, Animation = 3 }
    }
    namespace UnityEngine.UI.Slider {
        enum Direction
        { LeftToRight = 0, RightToLeft = 1, BottomToTop = 2, TopToBottom = 3 }
        class SliderEvent extends UnityEngine.Events.UnityEvent$1<number> implements UnityEngine.ISerializationCallbackReceiver
        {
            protected [__keep_incompatibility]: never;
            public constructor ()
        }
    }
    namespace UnityEngine.UI.Toggle {
        enum ToggleTransition
        { None = 0, Fade = 1 }
        class ToggleEvent extends UnityEngine.Events.UnityEvent$1<boolean> implements UnityEngine.ISerializationCallbackReceiver
        {
            protected [__keep_incompatibility]: never;
            public constructor ()
        }
    }
    namespace UnityEngine.UIElements {
        class PanelEventHandler extends UnityEngine.EventSystems.UIBehaviour implements UnityEngine.EventSystems.IPointerClickHandler, UnityEngine.EventSystems.ISubmitHandler, UnityEngine.EventSystems.ICancelHandler, UnityEngine.EventSystems.IEventSystemHandler, UnityEngine.EventSystems.IScrollHandler, UnityEngine.EventSystems.IPointerMoveHandler, UnityEngine.UIElements.IRuntimePanelComponent, UnityEngine.EventSystems.IPointerEnterHandler, UnityEngine.EventSystems.IPointerExitHandler, UnityEngine.EventSystems.ISelectHandler, UnityEngine.EventSystems.IDeselectHandler, UnityEngine.EventSystems.IPointerDownHandler, UnityEngine.EventSystems.IMoveHandler, UnityEngine.EventSystems.IPointerUpHandler
        {
            protected [__keep_incompatibility]: never;
            public get panel(): UnityEngine.UIElements.IPanel;
            public set panel(value: UnityEngine.UIElements.IPanel);
            public OnSelect ($eventData: UnityEngine.EventSystems.BaseEventData) : void
            public OnDeselect ($eventData: UnityEngine.EventSystems.BaseEventData) : void
            public OnPointerMove ($eventData: UnityEngine.EventSystems.PointerEventData) : void
            public OnPointerUp ($eventData: UnityEngine.EventSystems.PointerEventData) : void
            public OnPointerDown ($eventData: UnityEngine.EventSystems.PointerEventData) : void
            public OnPointerExit ($eventData: UnityEngine.EventSystems.PointerEventData) : void
            public OnPointerEnter ($eventData: UnityEngine.EventSystems.PointerEventData) : void
            public OnPointerClick ($eventData: UnityEngine.EventSystems.PointerEventData) : void
            public OnSubmit ($eventData: UnityEngine.EventSystems.BaseEventData) : void
            public OnCancel ($eventData: UnityEngine.EventSystems.BaseEventData) : void
            public OnMove ($eventData: UnityEngine.EventSystems.AxisEventData) : void
            public OnScroll ($eventData: UnityEngine.EventSystems.PointerEventData) : void
            public constructor ()
        }
        class PanelRaycaster extends UnityEngine.EventSystems.BaseRaycaster implements UnityEngine.UIElements.IRuntimePanelComponent
        {
            protected [__keep_incompatibility]: never;
            public get panel(): UnityEngine.UIElements.IPanel;
            public set panel(value: UnityEngine.UIElements.IPanel);
            public get sortOrderPriority(): number;
            public get renderOrderPriority(): number;
            public get eventCamera(): UnityEngine.Camera;
            public constructor ()
        }
    }
    namespace UnityEngine.EventSystems.PointerEventData {
        enum InputButton
        { Left = 0, Right = 1, Middle = 2 }
        enum FramePressState
        { Pressed = 0, Released = 1, PressedAndReleased = 2, NotChanged = 3 }
    }
    namespace UnityEngine.EventSystems.EventTrigger {
        class Entry extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public eventID : UnityEngine.EventSystems.EventTriggerType
            public callback : UnityEngine.EventSystems.EventTrigger.TriggerEvent
            public constructor ()
        }
        class TriggerEvent extends UnityEngine.Events.UnityEvent$1<UnityEngine.EventSystems.BaseEventData> implements UnityEngine.ISerializationCallbackReceiver
        {
            protected [__keep_incompatibility]: never;
            public constructor ()
        }
    }
    namespace UnityEngine.EventSystems.ExecuteEvents {
        interface EventFunction$1<T1>
        { 
        (handler: T1, eventData: UnityEngine.EventSystems.BaseEventData) : void; 
        Invoke?: (handler: T1, eventData: UnityEngine.EventSystems.BaseEventData) => void;
        }
    }
    namespace UnityEngine.EventSystems.StandaloneInputModule {
        enum InputMode
        { Mouse = 0, Buttons = 1 }
    }
    namespace UnityEngine.EventSystems.PointerInputModule {
        class MouseButtonEventData extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public buttonState : UnityEngine.EventSystems.PointerEventData.FramePressState
            public buttonData : UnityEngine.EventSystems.PointerEventData
            public PressedThisFrame () : boolean
            public ReleasedThisFrame () : boolean
            public constructor ()
        }
    }
}
