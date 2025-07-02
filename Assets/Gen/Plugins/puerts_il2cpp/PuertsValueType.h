// Auto Gen

#if !__SNC__
#ifndef __has_feature 
#define __has_feature(x) 0 
#endif
#endif

#if _MSC_VER
typedef wchar_t Il2CppChar;
#elif __has_feature(cxx_unicode_literals)
typedef char16_t Il2CppChar;
#else
typedef uint16_t Il2CppChar;
#endif

namespace puerts
{

// Object
struct O
{
    union
    {
        struct
        {
        };
        uint8_t __padding[1];
    };
};
    
// IAsyncResult
struct o
{
    union
    {
        struct
        {
        };
        uint8_t __padding[1];
    };
};
    
// StreamingContextStates
struct i4
{
    int32_t p0;
};
    
// StreamingContext
struct S_Oi4_
{
    Il2CppObject* p0;
    int32_t p1;
};
    
// RuntimeTypeHandle
struct S_p_
{
    void* p0;
};
    
// String
struct s
{
    int32_t p0;
    Il2CppChar p1;
};
    
// NativeOverlapped
struct S_ppi4i4p_
{
    void* p0;
    void* p1;
    int32_t p2;
    int32_t p3;
    void* p4;
};
    
// ProcessingMode
struct u1
{
    uint8_t p0;
};
    
// DateTime
struct S_u8_
{
    uint64_t p0;
};
    
// Guid
struct S_i4i2i2u1u1u1u1u1u1u1u1_
{
    int32_t p0;
    int16_t p1;
    int16_t p2;
    uint8_t p3;
    uint8_t p4;
    uint8_t p5;
    uint8_t p6;
    uint8_t p7;
    uint8_t p8;
    uint8_t p9;
    uint8_t p10;
};
    
// T
struct S__
{
    union
    {
        struct
        {
        };
        uint8_t __padding[1];
    };
};
    
// AsyncGPUReadbackRequest
struct S_pi4_
{
    void* p0;
    int32_t p1;
};
    
// Vector4
struct S_r4r4r4r4_
{
    float p0;
    float p1;
    float p2;
    float p3;
};
    
// Matrix4x4
struct S_r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4_
{
    float p0;
    float p1;
    float p2;
    float p3;
    float p4;
    float p5;
    float p6;
    float p7;
    float p8;
    float p9;
    float p10;
    float p11;
    float p12;
    float p13;
    float p14;
    float p15;
};
    
// SphericalHarmonicsL2
struct S_r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4_
{
    float p0;
    float p1;
    float p2;
    float p3;
    float p4;
    float p5;
    float p6;
    float p7;
    float p8;
    float p9;
    float p10;
    float p11;
    float p12;
    float p13;
    float p14;
    float p15;
    float p16;
    float p17;
    float p18;
    float p19;
    float p20;
    float p21;
    float p22;
    float p23;
    float p24;
    float p25;
    float p26;
};
    
// ReflectionProbeBlendInfo
struct S_or4_
{
    Il2CppObject* p0;
    float p1;
};
    
// VertexAttributeDescriptor
struct S_i4i4i4i4_
{
    int32_t p0;
    int32_t p1;
    int32_t p2;
    int32_t p3;
};
    
// Vector3
struct S_r4r4r4_
{
    float p0;
    float p1;
    float p2;
};
    
// Color32
struct S_i4u1u1u1u1_
{
    int32_t p0;
    uint8_t p1;
    uint8_t p2;
    uint8_t p3;
    uint8_t p4;
};
    
// Vector2
struct S_r4r4_
{
    float p0;
    float p1;
};
    
// Bounds
struct S_S_r4r4r4_S_r4r4r4__
{
    struct S_r4r4r4_ p0;
    struct S_r4r4r4_ p1;
};
    
// SubMeshDescriptor
struct S_S_S_r4r4r4_S_r4r4r4__i4i4i4i4i4i4_
{
    struct S_S_r4r4r4_S_r4r4r4__ p0;
    int32_t p1;
    int32_t p2;
    int32_t p3;
    int32_t p4;
    int32_t p5;
    int32_t p6;
};
    
// BoneWeight
struct S_r4r4r4r4i4i4i4i4_
{
    float p0;
    float p1;
    float p2;
    float p3;
    int32_t p4;
    int32_t p5;
    int32_t p6;
    int32_t p7;
};
    
// AccessibilityRole
struct u2
{
    uint16_t p0;
};
    
// AnimatorClipInfo
struct S_i4r4_
{
    int32_t p0;
    float p1;
};
    
// KeyValuePair`2
struct S_oo_
{
    Il2CppObject* p0;
    Il2CppObject* p1;
};
    
// ProfilerRecorderSample
struct S_i8i8i8_
{
    int64_t p0;
    int64_t p1;
    int64_t p2;
};
    
// CullingGroupEvent
struct S_i4u1u1_
{
    int32_t p0;
    uint8_t p1;
    uint8_t p2;
};
    
// CustomRenderTextureUpdateZone
struct S_S_r4r4r4_S_r4r4r4_r4i4b_
{
    struct S_r4r4r4_ p0;
    struct S_r4r4r4_ p1;
    float p2;
    int32_t p3;
    bool p4;
};
    
// AwaitableAndFrameIndex
struct S_oi4_
{
    Il2CppObject* p0;
    int32_t p1;
};
    
// TimeSpan
struct S_i8_
{
    int64_t p0;
};
    
// PhraseRecognizedEventArgs
struct S_i4osS_u8_S_i8__
{
    int32_t p0;
    Il2CppObject* p1;
    Il2CppString* p2;
    struct S_u8_ p3;
    struct S_i8_ p4;
};
    
// PhotoCaptureResult
struct S_i4i8_
{
    int32_t p0;
    int64_t p1;
};
    
// PlayableGraph
struct S_pu4_
{
    void* p0;
    uint32_t p1;
};
    
// AtomicSafetyHandle
struct S_pi4i4_
{
    void* p0;
    int32_t p1;
    int32_t p2;
};
    
// NativeArray`1
struct S_Pvi4i4i4S_pi4i4_i4_
{
    void* p0;
    int32_t p1;
    int32_t p2;
    int32_t p3;
    struct S_pi4i4_ p4;
    int32_t p5;
};
    
// LODParameters
struct S_i4S_r4r4r4_r4r4i4_
{
    int32_t p0;
    struct S_r4r4r4_ p1;
    float p2;
    float p3;
    int32_t p4;
};
    
// BatchCullingContext
struct S_S_Pvi4i4i4S_pi4i4_i4_S_Pvi4i4i4S_pi4i4_i4_S_i4S_r4r4r4_r4r4i4_S_r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4_i4i4i4S_u8_u4u8u2u1i4i4p_
{
    struct S_Pvi4i4i4S_pi4i4_i4_ p0;
    struct S_Pvi4i4i4S_pi4i4_i4_ p1;
    struct S_i4S_r4r4r4_r4r4i4_ p2;
    struct S_r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4_ p3;
    int32_t p4;
    int32_t p5;
    int32_t p6;
    struct S_u8_ p7;
    uint32_t p8;
    uint64_t p9;
    uint16_t p10;
    uint8_t p11;
    int32_t p12;
    int32_t p13;
    void* p14;
};
    
// BatchCullingOutput
struct S_S_Pvi4i4i4S_pi4i4_i4_S_Pvi4i4i4S_pi4i4_i4__
{
    struct S_Pvi4i4i4S_pi4i4_i4_ p0;
    struct S_Pvi4i4i4S_pi4i4_i4_ p1;
};
    
// RendererList
struct S_pu4u4u4u4_
{
    void* p0;
    uint32_t p1;
    uint32_t p2;
    uint32_t p3;
    uint32_t p4;
};
    
// PassIdentifier
struct S_u4u4_
{
    uint32_t p0;
    uint32_t p1;
};
    
// ShaderVariant
struct S_oS_u4u4_o_
{
    Il2CppObject* p0;
    struct S_u4u4_ p1;
    Il2CppObject* p2;
};
    
// RenderTargetBlendState
struct S_u1u1u1u1u1u1u1u1_
{
    uint8_t p0;
    uint8_t p1;
    uint8_t p2;
    uint8_t p3;
    uint8_t p4;
    uint8_t p5;
    uint8_t p6;
    uint8_t p7;
};
    
// BlendState
struct S_S_u1u1u1u1u1u1u1u1_S_u1u1u1u1u1u1u1u1_S_u1u1u1u1u1u1u1u1_S_u1u1u1u1u1u1u1u1_S_u1u1u1u1u1u1u1u1_S_u1u1u1u1u1u1u1u1_S_u1u1u1u1u1u1u1u1_S_u1u1u1u1u1u1u1u1_u1u1i2_
{
    struct S_u1u1u1u1u1u1u1u1_ p0;
    struct S_u1u1u1u1u1u1u1u1_ p1;
    struct S_u1u1u1u1u1u1u1u1_ p2;
    struct S_u1u1u1u1u1u1u1u1_ p3;
    struct S_u1u1u1u1u1u1u1u1_ p4;
    struct S_u1u1u1u1u1u1u1u1_ p5;
    struct S_u1u1u1u1u1u1u1u1_ p6;
    struct S_u1u1u1u1u1u1u1u1_ p7;
    uint8_t p8;
    uint8_t p9;
    int16_t p10;
};
    
// RasterState
struct S_i4i4r4u1u1u1u1_
{
    int32_t p0;
    int32_t p1;
    float p2;
    uint8_t p3;
    uint8_t p4;
    uint8_t p5;
    uint8_t p6;
};
    
// DepthState
struct S_u1i1_
{
    uint8_t p0;
    int8_t p1;
};
    
// StencilState
struct S_u1u1u1u1u1u1u1u1u1u1u1u1_
{
    uint8_t p0;
    uint8_t p1;
    uint8_t p2;
    uint8_t p3;
    uint8_t p4;
    uint8_t p5;
    uint8_t p6;
    uint8_t p7;
    uint8_t p8;
    uint8_t p9;
    uint8_t p10;
    uint8_t p11;
};
    
// RenderStateBlock
struct S_S_S_u1u1u1u1u1u1u1u1_S_u1u1u1u1u1u1u1u1_S_u1u1u1u1u1u1u1u1_S_u1u1u1u1u1u1u1u1_S_u1u1u1u1u1u1u1u1_S_u1u1u1u1u1u1u1u1_S_u1u1u1u1u1u1u1u1_S_u1u1u1u1u1u1u1u1_u1u1i2_S_i4i4r4u1u1u1u1_S_u1i1_S_u1u1u1u1u1u1u1u1u1u1u1u1_i4i4_
{
    struct S_S_u1u1u1u1u1u1u1u1_S_u1u1u1u1u1u1u1u1_S_u1u1u1u1u1u1u1u1_S_u1u1u1u1u1u1u1u1_S_u1u1u1u1u1u1u1u1_S_u1u1u1u1u1u1u1u1_S_u1u1u1u1u1u1u1u1_S_u1u1u1u1u1u1u1u1_u1u1i2_ p0;
    struct S_i4i4r4u1u1u1u1_ p1;
    struct S_u1i1_ p2;
    struct S_u1u1u1u1u1u1u1u1u1u1u1u1_ p3;
    int32_t p4;
    int32_t p5;
};
    
// GraphicsState
struct S_oooS_S_S_u1u1u1u1u1u1u1u1_S_u1u1u1u1u1u1u1u1_S_u1u1u1u1u1u1u1u1_S_u1u1u1u1u1u1u1u1_S_u1u1u1u1u1u1u1u1_S_u1u1u1u1u1u1u1u1_S_u1u1u1u1u1u1u1u1_S_u1u1u1u1u1u1u1u1_u1u1i2_S_i4i4r4u1u1u1u1_S_u1i1_S_u1u1u1u1u1u1u1u1u1u1u1u1_i4i4_i4i4i4i4i4r4r4i4i4i4i4i4bbbb_
{
    Il2CppObject* p0;
    Il2CppObject* p1;
    Il2CppObject* p2;
    struct S_S_S_u1u1u1u1u1u1u1u1_S_u1u1u1u1u1u1u1u1_S_u1u1u1u1u1u1u1u1_S_u1u1u1u1u1u1u1u1_S_u1u1u1u1u1u1u1u1_S_u1u1u1u1u1u1u1u1_S_u1u1u1u1u1u1u1u1_S_u1u1u1u1u1u1u1u1_u1u1i2_S_i4i4r4u1u1u1u1_S_u1i1_S_u1u1u1u1u1u1u1u1u1u1u1u1_i4i4_ p3;
    int32_t p4;
    int32_t p5;
    int32_t p6;
    int32_t p7;
    int32_t p8;
    float p9;
    float p10;
    int32_t p11;
    int32_t p12;
    int32_t p13;
    int32_t p14;
    int32_t p15;
    bool p16;
    bool p17;
    bool p18;
    bool p19;
};
    
// Range
struct S_i4i4_
{
    int32_t p0;
    int32_t p1;
};
    
// HierarchyNodeFlags
struct u4
{
    uint32_t p0;
};
    
// GlyphMetrics
struct S_r4r4r4r4r4_
{
    float p0;
    float p1;
    float p2;
    float p3;
    float p4;
};
    
// MultipleSubstitutionRecord
struct S_u4o_
{
    uint32_t p0;
    Il2CppObject* p1;
};
    
// LigatureSubstitutionRecord
struct S_ou4_
{
    Il2CppObject* p0;
    uint32_t p1;
};
    
// GlyphAdjustmentRecord
struct S_u4S_r4r4r4r4__
{
    uint32_t p0;
    struct S_r4r4r4r4_ p1;
};
    
// GlyphPairAdjustmentRecord
struct S_S_u4S_r4r4r4r4__S_u4S_r4r4r4r4__i4_
{
    struct S_u4S_r4r4r4r4__ p0;
    struct S_u4S_r4r4r4r4__ p1;
    int32_t p2;
};
    
// MarkToBaseAdjustmentRecord
struct S_u4S_r4r4_u4S_r4r4__
{
    uint32_t p0;
    struct S_r4r4_ p1;
    uint32_t p2;
    struct S_r4r4_ p3;
};
    
// FontAssetCreationEditorSettings
struct S_si4i4r4i4i4i4i4i4i4sssi4r4i4b_
{
    Il2CppString* p0;
    int32_t p1;
    int32_t p2;
    float p3;
    int32_t p4;
    int32_t p5;
    int32_t p6;
    int32_t p7;
    int32_t p8;
    int32_t p9;
    Il2CppString* p10;
    Il2CppString* p11;
    Il2CppString* p12;
    int32_t p13;
    float p14;
    int32_t p15;
    bool p16;
};
    
// FaceInfo
struct S_i4ssr4r4i4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4_
{
    int32_t p0;
    Il2CppString* p1;
    Il2CppString* p2;
    float p3;
    float p4;
    int32_t p5;
    float p6;
    float p7;
    float p8;
    float p9;
    float p10;
    float p11;
    float p12;
    float p13;
    float p14;
    float p15;
    float p16;
    float p17;
    float p18;
    float p19;
    float p20;
};
    
// Particle
struct S_S_r4r4r4_S_r4r4r4_S_r4r4r4_S_r4r4r4_S_r4r4r4_S_r4r4r4_S_r4r4r4_S_r4r4r4_S_i4u1u1u1u1_u4u4r4r4i4r4r4u4_
{
    struct S_r4r4r4_ p0;
    struct S_r4r4r4_ p1;
    struct S_r4r4r4_ p2;
    struct S_r4r4r4_ p3;
    struct S_r4r4r4_ p4;
    struct S_r4r4r4_ p5;
    struct S_r4r4r4_ p6;
    struct S_r4r4r4_ p7;
    struct S_i4u1u1u1u1_ p8;
    uint32_t p9;
    uint32_t p10;
    float p11;
    float p12;
    int32_t p13;
    float p14;
    float p15;
    uint32_t p16;
};
    
// ContactPoint
struct S_S_r4r4r4_S_r4r4r4_S_r4r4r4_i4i4r4_
{
    struct S_r4r4r4_ p0;
    struct S_r4r4r4_ p1;
    struct S_r4r4r4_ p2;
    int32_t p3;
    int32_t p4;
    float p5;
};
    
// ContactPoint2D
struct S_S_r4r4_S_r4r4_S_r4r4_r4r4r4r4r4i4i4i4i4i4_
{
    struct S_r4r4_ p0;
    struct S_r4r4_ p1;
    struct S_r4r4_ p2;
    float p3;
    float p4;
    float p5;
    float p6;
    float p7;
    int32_t p8;
    int32_t p9;
    int32_t p10;
    int32_t p11;
    int32_t p12;
};
    
// PhysicsShape2D
struct S_i4r4i4i4i4i4S_r4r4_S_r4r4__
{
    int32_t p0;
    float p1;
    int32_t p2;
    int32_t p3;
    int32_t p4;
    int32_t p5;
    struct S_r4r4_ p6;
    struct S_r4r4_ p7;
};
    
// RaycastHit2D
struct S_S_r4r4_S_r4r4_S_r4r4_r4r4i4_
{
    struct S_r4r4_ p0;
    struct S_r4r4_ p1;
    struct S_r4r4_ p2;
    float p3;
    float p4;
    int32_t p5;
};
    
// PropertyPathPart
struct S_i4si4O_
{
    int32_t p0;
    Il2CppString* p1;
    int32_t p2;
    Il2CppObject* p3;
};
    
// UIVertex
struct S_S_r4r4r4_S_r4r4r4_S_r4r4r4r4_S_i4u1u1u1u1_S_r4r4r4r4_S_r4r4r4r4_S_r4r4r4r4_S_r4r4r4r4__
{
    struct S_r4r4r4_ p0;
    struct S_r4r4r4_ p1;
    struct S_r4r4r4r4_ p2;
    struct S_i4u1u1u1u1_ p3;
    struct S_r4r4r4r4_ p4;
    struct S_r4r4r4r4_ p5;
    struct S_r4r4r4r4_ p6;
    struct S_r4r4r4r4_ p7;
};
    
// UICharInfo
struct S_S_r4r4_r4_
{
    struct S_r4r4_ p0;
    float p1;
};
    
// UILineInfo
struct S_i4i4r4r4_
{
    int32_t p0;
    int32_t p1;
    float p2;
    float p3;
};
    
// SerializedCommand
struct S_i4ppi4i4i4oi4S_r4r4r4r4_S_r4r4r4r4__
{
    int32_t p0;
    void* p1;
    void* p2;
    int32_t p3;
    int32_t p4;
    int32_t p5;
    Il2CppObject* p6;
    int32_t p7;
    struct S_r4r4r4r4_ p8;
    struct S_r4r4r4r4_ p9;
};
    
// BMPAlloc
struct S_i4u2u1u1_
{
    int32_t p0;
    uint16_t p1;
    uint8_t p2;
    uint8_t p3;
};
    
// RenderChainVEData
struct S_ooooooi4i4i4u4oooobbbbi4i4i4ooS_r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4_S_i4u2u1u1_S_i4u2u1u1_S_i4u2u1u1_S_i4u2u1u1_S_i4u2u1u1_S_i4u2u1u1_S_i4u2u1u1_S_i4u2u1u1_S_i4u2u1u1_S_i4u2u1u1_S_i4u2u1u1_r4r4obb_
{
    Il2CppObject* p0;
    Il2CppObject* p1;
    Il2CppObject* p2;
    Il2CppObject* p3;
    Il2CppObject* p4;
    Il2CppObject* p5;
    int32_t p6;
    int32_t p7;
    int32_t p8;
    uint32_t p9;
    Il2CppObject* p10;
    Il2CppObject* p11;
    Il2CppObject* p12;
    Il2CppObject* p13;
    bool p14;
    bool p15;
    bool p16;
    bool p17;
    int32_t p18;
    int32_t p19;
    int32_t p20;
    Il2CppObject* p21;
    Il2CppObject* p22;
    struct S_r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4_ p23;
    struct S_i4u2u1u1_ p24;
    struct S_i4u2u1u1_ p25;
    struct S_i4u2u1u1_ p26;
    struct S_i4u2u1u1_ p27;
    struct S_i4u2u1u1_ p28;
    struct S_i4u2u1u1_ p29;
    struct S_i4u2u1u1_ p30;
    struct S_i4u2u1u1_ p31;
    struct S_i4u2u1u1_ p32;
    struct S_i4u2u1u1_ p33;
    struct S_i4u2u1u1_ p34;
    float p35;
    float p36;
    Il2CppObject* p37;
    bool p38;
    bool p39;
};
    
// LayoutDataStore
struct S_i4PS_i4i4i4Pi4PS_i4i4i4i4PS_Pu1____
{
    int32_t p0;
    struct S_i4i4i4Pi4PS_i4i4i4i4PS_Pu1___* p1;
};
    
// LayoutDataAccess
struct S_i4S_i4PS_i4i4i4Pi4PS_i4i4i4i4PS_Pu1____S_i4PS_i4i4i4Pi4PS_i4i4i4i4PS_Pu1_____
{
    int32_t p0;
    struct S_i4PS_i4i4i4Pi4PS_i4i4i4i4PS_Pu1____ p1;
    struct S_i4PS_i4i4i4Pi4PS_i4i4i4i4PS_Pu1____ p2;
};
    
// LayoutNode
struct S_S_i4S_i4PS_i4i4i4Pi4PS_i4i4i4i4PS_Pu1____S_i4PS_i4i4i4Pi4PS_i4i4i4i4PS_Pu1_____S_i4i4__
{
    struct S_i4S_i4PS_i4i4i4Pi4PS_i4i4i4i4PS_Pu1____S_i4PS_i4i4i4Pi4PS_i4i4i4i4PS_Pu1_____ p0;
    struct S_i4i4_ p1;
};
    
// StyleDataRef`1
struct S_o_
{
    Il2CppObject* p0;
};
    
// ComputedStyle
struct S_S_o_S_o_S_o_S_o_S_o_S_o_oi8r4o_
{
    struct S_o_ p0;
    struct S_o_ p1;
    struct S_o_ p2;
    struct S_o_ p3;
    struct S_o_ p4;
    struct S_o_ p5;
    Il2CppObject* p6;
    int64_t p7;
    float p8;
    Il2CppObject* p9;
};
    
// PropertyPath
struct S_S_i4si4O_S_i4si4O_S_i4si4O_S_i4si4O_oi4_
{
    struct S_i4si4O_ p0;
    struct S_i4si4O_ p1;
    struct S_i4si4O_ p2;
    struct S_i4si4O_ p3;
    Il2CppObject* p4;
    int32_t p5;
};
    
// TimeValue
struct S_r4i4_
{
    float p0;
    int32_t p1;
};
    
// StylePropertyName
struct S_i4s_
{
    int32_t p0;
    Il2CppString* p1;
};
    
// EasingFunction
struct S_i4_
{
    int32_t p0;
};
    
// StylePropertyValue
struct S_oS_i4i4__
{
    Il2CppObject* p0;
    struct S_i4i4_ p1;
};
    
// StyleVariable
struct S_soo_
{
    Il2CppString* p0;
    Il2CppObject* p1;
    Il2CppObject* p2;
};
    
// Page
struct S_S_Pvi4i4i4S_pi4i4_i4_i4_
{
    struct S_Pvi4i4i4S_pi4i4_i4_ p0;
    int32_t p1;
};
    
// NativeSlice`1
struct S_Pu1i4i4i4i4S_pi4i4__
{
    uint8_t* p0;
    int32_t p1;
    int32_t p2;
    int32_t p3;
    int32_t p4;
    struct S_pi4i4_ p5;
};
    
// UnsafeMeshGenerationNode
struct S_S_p__
{
    struct S_p_ p0;
};
    
// Painter2DJobData
struct S_S_S_p__i4_
{
    struct S_S_p__ p0;
    int32_t p1;
};
    
// PanelClearSettings
struct S_bbS_r4r4r4r4__
{
    bool p0;
    bool p1;
    struct S_r4r4r4r4_ p2;
};
    
// BindingId
struct S_S_S_i4si4O_S_i4si4O_S_i4si4O_S_i4si4O_oi4_s_
{
    struct S_S_i4si4O_S_i4si4O_S_i4si4O_S_i4si4O_oi4_ p0;
    Il2CppString* p1;
};
    
// BindingTarget
struct S_oS_S_S_i4si4O_S_i4si4O_S_i4si4O_S_i4si4O_oi4_s__
{
    Il2CppObject* p0;
    struct S_S_S_i4si4O_S_i4si4O_S_i4si4O_S_i4si4O_oi4_s_ p1;
};
    
// DataSourceContext
struct S_OS_S_i4si4O_S_i4si4O_S_i4si4O_S_i4si4O_oi4__
{
    Il2CppObject* p0;
    struct S_S_i4si4O_S_i4si4O_S_i4si4O_S_i4si4O_oi4_ p1;
};
    
// Nullable`1
struct N_bS_i4s__
{
    bool hasValue;
    struct S_i4s_ p1;
};
    
// BindablePropertyChangedEventArgs
struct S_S_S_S_i4si4O_S_i4si4O_S_i4si4O_S_i4si4O_oi4_s__
{
    struct S_S_S_i4si4O_S_i4si4O_S_i4si4O_S_i4si4O_oi4_s_ p0;
};
    
// ChangesFromUI
struct S_i8oo_
{
    int64_t p0;
    Il2CppObject* p1;
    Il2CppObject* p2;
};
    
// UsingEntry
struct S_sso_
{
    Il2CppString* p0;
    Il2CppString* p1;
    Il2CppObject* p2;
};
    
// AttributeOverride
struct S_soss_
{
    Il2CppString* p0;
    Il2CppObject* p1;
    Il2CppString* p2;
    Il2CppString* p3;
};
    
// UxmlSerializedDataOverride
struct S_i4oo_
{
    int32_t p0;
    Il2CppObject* p1;
    Il2CppObject* p2;
};
    
// SerializedDataOverrideRange
struct S_oi4o_
{
    Il2CppObject* p0;
    int32_t p1;
    Il2CppObject* p2;
};
    
// SlotUsageEntry
struct S_si4_
{
    Il2CppString* p0;
    int32_t p1;
};
    
// UxmlObjectEntry
struct S_i4o_
{
    int32_t p0;
    Il2CppObject* p1;
};
    
// AssetEntry
struct S_ssS_i4_i4o_
{
    Il2CppString* p0;
    Il2CppString* p1;
    struct S_i4_ p2;
    int32_t p3;
    Il2CppObject* p4;
};
    
// UxmlNamespaceDefinition
struct S_ss_
{
    Il2CppString* p0;
    Il2CppString* p1;
};
    
// TimerState
struct S_i8i8_
{
    int64_t p0;
    int64_t p1;
};
    
// TextureInfo
struct S_obi4_
{
    Il2CppObject* p0;
    bool p1;
    int32_t p2;
};
    
// ValueTuple`3
struct S_i4i4s_
{
    int32_t p0;
    int32_t p1;
    Il2CppString* p2;
};
    
// MeshGenerationNode
struct S_S_S_p__S_pi4i4__
{
    struct S_S_p__ p0;
    struct S_pi4i4_ p1;
};
    
// NativeTextInfo
struct S_oi4i4_
{
    Il2CppObject* p0;
    int32_t p1;
    int32_t p2;
};
    
// StyleValueManaged
struct S_i4i4O_
{
    int32_t p0;
    int32_t p1;
    Il2CppObject* p2;
};
    
// BackgroundPosition
struct S_i4S_r4i4__
{
    int32_t p0;
    struct S_r4i4_ p1;
};
    
// StyleValue
struct S_i4i4r4S_r4i4_S_r4r4r4r4_S_p_S_i4S_r4i4__S_i4i4__
{
    int32_t p0;
    int32_t p1;
    float p2;
    struct S_r4i4_ p3;
    struct S_r4r4r4r4_ p4;
    struct S_p_ p5;
    struct S_i4S_r4i4__ p6;
    struct S_i4i4_ p7;
};
    
// Background
struct S_oooo_
{
    Il2CppObject* p0;
    Il2CppObject* p1;
    Il2CppObject* p2;
    Il2CppObject* p3;
};
    
// StartDragArgs
struct S_si4ooo_
{
    Il2CppString* p0;
    int32_t p1;
    Il2CppObject* p2;
    Il2CppObject* p3;
    Il2CppObject* p4;
};
    
// SetupDragAndDropArgs
struct S_ooS_si4ooo__
{
    Il2CppObject* p0;
    Il2CppObject* p1;
    struct S_si4ooo_ p2;
};
    
// DragAndDropArgs
struct S_Oi4i4i4i4o_
{
    Il2CppObject* p0;
    int32_t p1;
    int32_t p2;
    int32_t p3;
    int32_t p4;
    Il2CppObject* p5;
};
    
// HandleDragAndDropArgs
struct S_S_Oi4i4i4i4o_S_r4r4__
{
    struct S_Oi4i4i4i4o_ p0;
    struct S_r4r4_ p1;
};
    
// ColumnState
struct S_i4sr4S_r4i4_b_
{
    int32_t p0;
    Il2CppString* p1;
    float p2;
    struct S_r4i4_ p3;
    bool p4;
};
    
// Vector3Int
struct S_i4i4i4_
{
    int32_t p0;
    int32_t p1;
    int32_t p2;
};
    
// StyleSelectorPart
struct S_si4O_
{
    Il2CppString* p0;
    int32_t p1;
    Il2CppObject* p2;
};
    
// VFXExposedProperty
struct S_so_
{
    Il2CppString* p0;
    Il2CppObject* p1;
};
    
// InputDevice
struct S_u8b_
{
    uint64_t p0;
    bool p1;
};
    
// InputFeatureUsage
struct S_su4_
{
    Il2CppString* p0;
    uint32_t p1;
};
    
// Bone
struct S_u8u4_
{
    uint64_t p0;
    uint32_t p1;
};
    
// MeshId
struct S_u8u8_
{
    uint64_t p0;
    uint64_t p1;
};
    
// MeshInfo
struct S_S_u8u8_i4i4_
{
    struct S_u8u8_ p0;
    int32_t p1;
    int32_t p2;
};
    
// MeshGenerationResult
struct S_S_u8u8_ooi4i4u8S_r4r4r4_S_r4r4r4r4_S_r4r4r4__
{
    struct S_u8u8_ p0;
    Il2CppObject* p1;
    Il2CppObject* p2;
    int32_t p3;
    int32_t p4;
    uint64_t p5;
    struct S_r4r4r4_ p6;
    struct S_r4r4r4r4_ p7;
    struct S_r4r4r4_ p8;
};
    
// DataModeChangeEventArgs
struct S_i4b_
{
    int32_t p0;
    bool p1;
};
    
// EventInterests
struct S_bbb_
{
    bool p0;
    bool p1;
    bool p2;
};
    
// Nullable`1
struct N_bi4_
{
    bool hasValue;
    int32_t p1;
};
    
// FlowEvent
struct S_i4u4u1_
{
    int32_t p0;
    uint32_t p1;
    uint8_t p2;
};
    
// MarkerInfo
struct S_i4u2u2so_
{
    int32_t p0;
    uint16_t p1;
    uint16_t p2;
    Il2CppString* p3;
    Il2CppObject* p4;
};
    
// ProfilerCategoryInfo
struct S_u2S_i4u1u1u1u1_su2_
{
    uint16_t p0;
    struct S_i4u1u1u1u1_ p1;
    Il2CppString* p2;
    uint16_t p3;
};
    
// LabelLayoutData
struct S_S_r4r4r4r4_r4_
{
    struct S_r4r4r4r4_ p0;
    float p1;
};
    
// EditorCurveBinding
struct S_sosi4i4i4i4i4i4i4_
{
    Il2CppString* p0;
    Il2CppObject* p1;
    Il2CppString* p2;
    int32_t p3;
    int32_t p4;
    int32_t p5;
    int32_t p6;
    int32_t p7;
    int32_t p8;
    int32_t p9;
};
    
// Nullable`1
struct N_bS_sosi4i4i4i4i4i4i4__
{
    bool hasValue;
    struct S_sosi4i4i4i4i4i4i4_ p1;
};
    
// Nullable`1
struct N_br4_
{
    bool hasValue;
    float p1;
};
    
// Keyframe
struct S_r4r4r4r4i4i4r4r4_
{
    float p0;
    float p1;
    float p2;
    float p3;
    int32_t p4;
    int32_t p5;
    float p6;
    float p7;
};
    
// DrawElement
struct S_S_r4r4r4r4_S_r4r4r4r4_o_
{
    struct S_r4r4r4r4_ p0;
    struct S_r4r4r4r4_ p1;
    Il2CppObject* p2;
};
    
// CameraMode
struct S_i4ssb_
{
    int32_t p0;
    Il2CppString* p1;
    Il2CppString* p2;
    bool p3;
};
    
// TextureResource
struct S_r4s_
{
    float p0;
    Il2CppString* p1;
};
    
// CommandHint
struct i8
{
    int64_t p0;
};
    
// ShortcutBindingChangedEventArgs
struct S_sS_o_S_o__
{
    Il2CppString* p0;
    struct S_o_ p1;
    struct S_o_ p2;
};
    
// GUID
struct S_u4u4u4u4_
{
    uint32_t p0;
    uint32_t p1;
    uint32_t p2;
    uint32_t p3;
};
    
// GlobalObjectId
struct S_S_u8u8_S_u4u4u4u4_i4_
{
    struct S_u8u8_ p0;
    struct S_u4u4u4u4_ p1;
    int32_t p2;
};
    
// ObjectSelectorTargetInfo
struct S_S_S_u8u8_S_u4u4u4u4_i4_oo_
{
    struct S_S_u8u8_S_u4u4u4u4_i4_ p0;
    Il2CppObject* p1;
    Il2CppObject* p2;
};
    
// BuildStartedMessageRaw
struct S_i4i4S_i4__
{
    int32_t p0;
    int32_t p1;
    struct S_i4_ p2;
};
    
// BuildStartedMessage
struct S_S_i4i4S_i4___
{
    struct S_i4i4S_i4__ p0;
};
    
// NodeInfoMessageRaw
struct S_i4S_i4_S_i4_S_i4_S_i4_S_i4_S_i4__
{
    int32_t p0;
    struct S_i4_ p1;
    struct S_i4_ p2;
    struct S_i4_ p3;
    struct S_i4_ p4;
    struct S_i4_ p5;
    struct S_i4_ p6;
};
    
// NodeInfo
struct S_oS_i4S_i4_S_i4_S_i4_S_i4_S_i4_S_i4___
{
    Il2CppObject* p0;
    struct S_i4S_i4_S_i4_S_i4_S_i4_S_i4_S_i4__ p1;
};
    
// Nullable`1
struct N_bS_oS_i4S_i4_S_i4_S_i4_S_i4_S_i4_S_i4____
{
    bool hasValue;
    struct S_oS_i4S_i4_S_i4_S_i4_S_i4_S_i4_S_i4___ p1;
};
    
// NodeEnqueuedMessage
struct S_S_oS_i4S_i4_S_i4_S_i4_S_i4_S_i4_S_i4___N_bS_oS_i4S_i4_S_i4_S_i4_S_i4_S_i4_S_i4_____
{
    struct S_oS_i4S_i4_S_i4_S_i4_S_i4_S_i4_S_i4___ p0;
    struct N_bS_oS_i4S_i4_S_i4_S_i4_S_i4_S_i4_S_i4____ p1;
};
    
// NodeStartedMessage
struct S_S_i4i4_S_oS_i4S_i4_S_i4_S_i4_S_i4_S_i4_S_i4___i4_
{
    struct S_i4i4_ p0;
    struct S_oS_i4S_i4_S_i4_S_i4_S_i4_S_i4_S_i4___ p1;
    int32_t p2;
};
    
// NodeUpToDateMessage
struct S_S_oS_i4S_i4_S_i4_S_i4_S_i4_S_i4_S_i4____
{
    struct S_oS_i4S_i4_S_i4_S_i4_S_i4_S_i4_S_i4___ p0;
};
    
// NodeFinishedMessageRaw
struct S_i4i4i4i4S_i4_S_i4__
{
    int32_t p0;
    int32_t p1;
    int32_t p2;
    int32_t p3;
    struct S_i4_ p4;
    struct S_i4_ p5;
};
    
// NodeFinishedMessage
struct S_oS_i4i4i4i4S_i4_S_i4__S_oS_i4S_i4_S_i4_S_i4_S_i4_S_i4_S_i4____
{
    Il2CppObject* p0;
    struct S_i4i4i4i4S_i4_S_i4__ p1;
    struct S_oS_i4S_i4_S_i4_S_i4_S_i4_S_i4_S_i4___ p2;
};
    
// BuildFinishedMessageRaw
struct S_i4S_i4__
{
    int32_t p0;
    struct S_i4_ p1;
};
    
// BuildFinishedMessage
struct S_oS_i4S_i4___
{
    Il2CppObject* p0;
    struct S_i4S_i4__ p1;
};
    
// RPCActionMessageRaw
struct S_i4S_i4_S_i4__
{
    int32_t p0;
    struct S_i4_ p1;
    struct S_i4_ p2;
};
    
// RPCActionMessage
struct S_oS_i4S_i4_S_i4___
{
    Il2CppObject* p0;
    struct S_i4S_i4_S_i4__ p1;
};
    
// UnityVersion
struct S_bi4i4i4i4i4s_
{
    bool p0;
    int32_t p1;
    int32_t p2;
    int32_t p3;
    int32_t p4;
    int32_t p5;
    Il2CppString* p6;
};
    
// SemVersion
struct S_bi4i4i4ss_
{
    bool p0;
    int32_t p1;
    int32_t p2;
    int32_t p3;
    Il2CppString* p4;
    Il2CppString* p5;
};
    
// SerializedDependency
struct S_sosi4_
{
    Il2CppString* p0;
    Il2CppObject* p1;
    Il2CppString* p2;
    int32_t p3;
};
    
// ObjectIdentifier
struct S_S_u4u4u4u4_i8i4s_
{
    struct S_u4u4u4u4_ p0;
    int64_t p1;
    int32_t p2;
    Il2CppString* p3;
};
    
// PostprocessorInfo
struct S_sob_
{
    Il2CppString* p0;
    Il2CppObject* p1;
    bool p2;
};
    
// ChildAnimatorState
struct S_oS_r4r4r4__
{
    Il2CppObject* p0;
    struct S_r4r4r4_ p1;
};
    
// TouchEvent
struct S_i4S_r4r4_i4_
{
    int32_t p0;
    struct S_r4r4_ p1;
    int32_t p2;
};
    
// NodeCreationContext
struct S_S_r4r4_oi4_
{
    struct S_r4r4_ p0;
    Il2CppObject* p1;
    int32_t p2;
};
    
// GraphViewChange
struct S_oooS_r4r4__
{
    Il2CppObject* p0;
    Il2CppObject* p1;
    Il2CppObject* p2;
    struct S_r4r4_ p3;
};
    
// Line2
struct S_S_r4r4_S_r4r4__
{
    struct S_r4r4_ p0;
    struct S_r4r4_ p1;
};
    
// GraphViewChoice
struct S_ooi4b_
{
    Il2CppObject* p0;
    Il2CppObject* p1;
    int32_t p2;
    bool p3;
};
    
// SearchExpressionContext
struct S_S_oooo_ooi4_
{
    struct S_oooo_ p0;
    Il2CppObject* p1;
    Il2CppObject* p2;
    int32_t p3;
};
    
// SearchColumnEventArgs
struct S_oooObS_r4r4r4r4_bb_
{
    Il2CppObject* p0;
    Il2CppObject* p1;
    Il2CppObject* p2;
    Il2CppObject* p3;
    bool p4;
    struct S_r4r4r4r4_ p5;
    bool p6;
    bool p7;
};
    
// SearchColumnCompareArgs
struct S_S_oooObS_r4r4r4r4_bb_S_oooObS_r4r4r4r4_bb_b_
{
    struct S_oooObS_r4r4r4r4_bb_ p0;
    struct S_oooObS_r4r4r4r4_bb_ p1;
    bool p2;
};
    
// StringView
struct S_si4i4_
{
    Il2CppString* p0;
    int32_t p1;
    int32_t p2;
};
    
// SearchExpressionEvaluator
struct S_sssoi4_
{
    Il2CppString* p0;
    Il2CppString* p1;
    Il2CppString* p2;
    Il2CppObject* p3;
    int32_t p4;
};
    
// SearchSessionContext
struct S_ooS_u8u8__
{
    Il2CppObject* p0;
    Il2CppObject* p1;
    struct S_u8u8_ p2;
};
    
// SearchGlobalEventHandlerContainer
struct S_i4oOi4_
{
    int32_t p0;
    Il2CppObject* p1;
    Il2CppObject* p2;
    int32_t p3;
};
    
// SearchPreviewKey
struct S_i4i4S_r4r4__
{
    int32_t p0;
    int32_t p1;
    struct S_r4r4_ p2;
};
    
// SearchPreview
struct S_S_i4i4S_r4r4__oS_u8__
{
    struct S_i4i4S_r4r4__ p0;
    Il2CppObject* p1;
    struct S_u8_ p2;
};
    
// QueryFilterOperator
struct S_osi4o_
{
    Il2CppObject* p0;
    Il2CppString* p1;
    int32_t p2;
    Il2CppObject* p3;
};
    
// FilterOperatorContext
struct S_oS_osi4o_S_si4i4_S_si4i4__
{
    Il2CppObject* p0;
    struct S_osi4o_ p1;
    struct S_si4i4_ p2;
    struct S_si4i4_ p3;
};
    
// QueryTokenHandler
struct S_ooi4i4o_
{
    Il2CppObject* p0;
    Il2CppObject* p1;
    int32_t p2;
    int32_t p3;
    Il2CppObject* p4;
};
    
// SearchDocumentList
struct S_i4i4i4i4i4pi4_
{
    int32_t p0;
    int32_t p1;
    int32_t p2;
    int32_t p3;
    int32_t p4;
    void* p5;
    int32_t p6;
};
    
// SearchIndexEntry
struct S_i8i4u1i4r8S_i4i4i4i4i4pi4__
{
    int64_t p0;
    int32_t p1;
    uint8_t p2;
    int32_t p3;
    double p4;
    struct S_i4i4i4i4i4pi4_ p5;
};
    
// SearchDocument
struct S_si4ssi4_
{
    Il2CppString* p0;
    int32_t p1;
    Il2CppString* p2;
    Il2CppString* p3;
    int32_t p4;
};
    
// SearchNativeReadOnlyArray`1
struct S_S_Pvi4i4i4S_pi4i4_i4__
{
    struct S_Pvi4i4i4S_pi4i4_i4_ p0;
};
    
// PropertyDatabaseRecordKey
struct S_u8S_u8u8__
{
    uint64_t p0;
    struct S_u8u8_ p1;
};
    
// PropertyDatabaseVolatileRecordValue
struct S_O_
{
    Il2CppObject* p0;
};
    
// PropertyDatabaseVolatileRecord
struct S_S_u8S_u8u8__bS_O__
{
    struct S_u8S_u8u8__ p0;
    bool p1;
    struct S_O_ p2;
};
    
// PropertyDatabaseRecordValue
struct S_u1u4u4u4u4u4u4u4u4_
{
    uint8_t p0;
    uint32_t p1;
    uint32_t p2;
    uint32_t p3;
    uint32_t p4;
    uint32_t p5;
    uint32_t p6;
    uint32_t p7;
    uint32_t p8;
};
    
// PropertyDatabaseRecord
struct S_S_u8S_u8u8__u1S_u1u4u4u4u4u4u4u4u4__
{
    struct S_u8S_u8u8__ p0;
    uint8_t p1;
    struct S_u1u4u4u4u4u4u4u4u4_ p2;
};
    
// PropertyStringTableHeader
struct S_i4i4i4i4i4_
{
    int32_t p0;
    int32_t p1;
    int32_t p2;
    int32_t p3;
    int32_t p4;
};
    
// ParsingState
struct S_oi4i4oboooi4i4oi4i4sobboi4bb_
{
    Il2CppObject* p0;
    int32_t p1;
    int32_t p2;
    Il2CppObject* p3;
    bool p4;
    Il2CppObject* p5;
    Il2CppObject* p6;
    Il2CppObject* p7;
    int32_t p8;
    int32_t p9;
    Il2CppObject* p10;
    int32_t p11;
    int32_t p12;
    Il2CppString* p13;
    Il2CppObject* p14;
    bool p15;
    bool p16;
    Il2CppObject* p17;
    int32_t p18;
    bool p19;
    bool p20;
};
    
// Memory`1
struct S_Oi4i4_
{
    Il2CppObject* p0;
    int32_t p1;
    int32_t p2;
};
    
// SslApplicationProtocol
struct S_S_Oi4i4__
{
    struct S_Oi4i4_ p0;
};
    
// Flags
struct u8
{
    uint64_t p0;
};
    
// AuthorizationState
struct S_obbi4_
{
    Il2CppObject* p0;
    bool p1;
    bool p2;
    int32_t p3;
};
    
// ObjectReferenceStack
struct S_i4ooo_
{
    int32_t p0;
    Il2CppObject* p1;
    Il2CppObject* p2;
    Il2CppObject* p3;
};
    
// MetadataToken
struct S_u4_
{
    uint32_t p0;
};
    
// AttributeValue
struct S_or4r4S_r4r4r4_S_r4r4r4__
{
    Il2CppObject* p0;
    float p1;
    float p2;
    struct S_r4r4r4_ p3;
    struct S_r4r4r4_ p4;
};
    
// ModifierEvaluatedData
struct S_oi4r4_
{
    Il2CppObject* p0;
    int32_t p1;
    float p2;
};
    
// GraphicsDefaultValues
struct S_S_r4r4r4r4_r4r4S_r4r4r4_r4S_r4r4r4_S_r4r4__
{
    struct S_r4r4r4r4_ p0;
    float p1;
    float p2;
    struct S_r4r4r4_ p3;
    float p4;
    struct S_r4r4r4_ p5;
    struct S_r4r4_ p6;
};
    
// InputStateBlock
struct S_S_i4_u4u4u4_
{
    struct S_i4_ p0;
    uint32_t p1;
    uint32_t p2;
    uint32_t p3;
};
    
// PrimitiveValue
struct S_i4bcu1i1i2u2i4u4i8u8r4r8_
{
    int32_t p0;
    bool p1;
    Il2CppChar p2;
    uint8_t p3;
    int8_t p4;
    int16_t p5;
    uint16_t p6;
    int32_t p7;
    uint32_t p8;
    int64_t p9;
    uint64_t p10;
    float p11;
    double p12;
};
    
// NamedValue
struct S_sS_i4bcu1i1i2u2i4u4i8u8r4r8__
{
    Il2CppString* p0;
    struct S_i4bcu1i1i2u2i4u4i8u8r4r8_ p1;
};
    
// NameAndParameters
struct S_sS_oi4i4__
{
    Il2CppString* p0;
    struct S_oi4i4_ p1;
};
    
// InputBinding
struct S_sssssssi4sss_
{
    Il2CppString* p0;
    Il2CppString* p1;
    Il2CppString* p2;
    Il2CppString* p3;
    Il2CppString* p4;
    Il2CppString* p5;
    Il2CppString* p6;
    int32_t p7;
    Il2CppString* p8;
    Il2CppString* p9;
    Il2CppString* p10;
};
    
// InputDeviceDescription
struct S_sssssss_
{
    Il2CppString* p0;
    Il2CppString* p1;
    Il2CppString* p2;
    Il2CppString* p3;
    Il2CppString* p4;
    Il2CppString* p5;
    Il2CppString* p6;
};
    
// Nullable`1
struct N_bS_sssssssi4sss__
{
    bool hasValue;
    struct S_sssssssi4sss_ p1;
};
    
// CallbackArray`1
struct S_bS_i4oo_S_i4oo_S_i4oo__
{
    bool p0;
    struct S_i4oo_ p1;
    struct S_i4oo_ p2;
    struct S_i4oo_ p3;
};
    
// DeviceArray
struct S_bi4o_
{
    bool p0;
    int32_t p1;
    Il2CppObject* p2;
};
    
// RaycastResult
struct S_oor4r4i4i4i4i4i4S_r4r4r4_S_r4r4r4_S_r4r4_i4_
{
    Il2CppObject* p0;
    Il2CppObject* p1;
    float p2;
    float p3;
    int32_t p4;
    int32_t p5;
    int32_t p6;
    int32_t p7;
    int32_t p8;
    struct S_r4r4r4_ p9;
    struct S_r4r4r4_ p10;
    struct S_r4r4_ p11;
    int32_t p12;
};
    
// ButtonState
struct S_bi4r4S_oor4r4i4i4i4i4i4S_r4r4r4_S_r4r4r4_S_r4r4_i4_ooooS_r4r4_r4i4bbb_
{
    bool p0;
    int32_t p1;
    float p2;
    struct S_oor4r4i4i4i4i4i4S_r4r4r4_S_r4r4r4_S_r4r4_i4_ p3;
    Il2CppObject* p4;
    Il2CppObject* p5;
    Il2CppObject* p6;
    Il2CppObject* p7;
    struct S_r4r4_ p8;
    float p9;
    int32_t p10;
    bool p11;
    bool p12;
    bool p13;
};
    
// PointerModel
struct S_bS_bi4r4S_oor4r4i4i4i4i4i4S_r4r4r4_S_r4r4r4_S_r4r4_i4_ooooS_r4r4_r4i4bbb_S_bi4r4S_oor4r4i4i4i4i4i4S_r4r4r4_S_r4r4r4_S_r4r4_i4_ooooS_r4r4_r4i4bbb_S_bi4r4S_oor4r4i4i4i4i4i4S_r4r4r4_S_r4r4r4_S_r4r4_i4_ooooS_r4r4_r4i4bbb_oS_r4r4_S_r4r4_S_r4r4r4_S_r4r4r4r4_r4r4r4r4S_r4r4__
{
    bool p0;
    struct S_bi4r4S_oor4r4i4i4i4i4i4S_r4r4r4_S_r4r4r4_S_r4r4_i4_ooooS_r4r4_r4i4bbb_ p1;
    struct S_bi4r4S_oor4r4i4i4i4i4i4S_r4r4r4_S_r4r4r4_S_r4r4_i4_ooooS_r4r4_r4i4bbb_ p2;
    struct S_bi4r4S_oor4r4i4i4i4i4i4S_r4r4r4_S_r4r4r4_S_r4r4_i4_ooooS_r4r4_r4i4bbb_ p3;
    Il2CppObject* p4;
    struct S_r4r4_ p5;
    struct S_r4r4_ p6;
    struct S_r4r4r4_ p7;
    struct S_r4r4r4r4_ p8;
    float p9;
    float p10;
    float p11;
    float p12;
    struct S_r4r4_ p13;
};
    
// InputEventPtr
struct S_PS_S_i4u2u2r8i4___
{
    struct S_S_i4u2u2r8i4__* p0;
};
    
// Plane
struct S_S_r4r4r4_r4_
{
    struct S_r4r4r4_ p0;
    float p1;
};
    
// LazyMemberRegisterInfo
struct S_bsi4bb_
{
    bool p0;
    Il2CppString* p1;
    int32_t p2;
    bool p3;
    bool p4;
};
    
// AsyncOperationHandle
struct S_oi4s_
{
    Il2CppObject* p0;
    int32_t p1;
    Il2CppString* p2;
};
    
// InstantiationParameters
struct S_S_r4r4r4_S_r4r4r4r4_obb_
{
    struct S_r4r4r4_ p0;
    struct S_r4r4r4r4_ p1;
    Il2CppObject* p2;
    bool p3;
    bool p4;
};
    
// DeferredCallbackRegisterRequest
struct S_ob_
{
    Il2CppObject* p0;
    bool p1;
};
    
// StyleSheetImportError
struct S_i4i4ssi4b_
{
    int32_t p0;
    int32_t p1;
    Il2CppString* p2;
    Il2CppString* p3;
    int32_t p4;
    bool p5;
};
    
// ValueTuple`2
struct S_oO_
{
    Il2CppObject* p0;
    Il2CppObject* p1;
};
    
// SerializedType
struct S_ssob_
{
    Il2CppString* p0;
    Il2CppString* p1;
    Il2CppObject* p2;
    bool p3;
};
    
// ObjectInitializationData
struct S_sS_ssob_so_
{
    Il2CppString* p0;
    struct S_ssob_ p1;
    Il2CppString* p2;
    Il2CppObject* p3;
};
    
// AssetSummary
struct S_i4i4u8_
{
    int32_t p0;
    int32_t p1;
    uint64_t p2;
};
    
// AssetBundleBuild
struct S_ssoo_
{
    Il2CppString* p0;
    Il2CppString* p1;
    Il2CppObject* p2;
    Il2CppObject* p3;
};
    
// ResourceFile
struct S_ssb_
{
    Il2CppString* p0;
    Il2CppString* p1;
    bool p2;
};
    
// ResultData
struct S_sss_
{
    Il2CppString* p0;
    Il2CppString* p1;
    Il2CppString* p2;
};
    
// CheckDupeResult
struct S_ossS_u4u4u4u4__
{
    Il2CppObject* p0;
    Il2CppString* p1;
    Il2CppString* p2;
    struct S_u4u4u4u4_ p3;
};
    
// Entry
struct S_ssss_
{
    Il2CppString* p0;
    Il2CppString* p1;
    Il2CppString* p2;
    Il2CppString* p3;
};
    
// NavMeshBuildSource
struct S_S_r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4_S_r4r4r4_i4i4i4i4i4_
{
    struct S_r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4_ p0;
    struct S_r4r4r4_ p1;
    int32_t p2;
    int32_t p3;
    int32_t p4;
    int32_t p5;
    int32_t p6;
};
    
// NavMeshBuildMarkup
struct S_i4i4i4i4i4i4i4i4_
{
    int32_t p0;
    int32_t p1;
    int32_t p2;
    int32_t p3;
    int32_t p4;
    int32_t p5;
    int32_t p6;
    int32_t p7;
};
    
// AsyncBakeOperation
struct S_oooi4_
{
    Il2CppObject* p0;
    Il2CppObject* p1;
    Il2CppObject* p2;
    int32_t p3;
};
    
// PrioritySettings
struct S_bi4_
{
    bool p0;
    int32_t p1;
};
    
// PointD
struct S_r8r8_
{
    double p0;
    double p1;
};
    
// CinemachineBlendDefinition
struct S_i4r4o_
{
    int32_t p0;
    float p1;
    Il2CppObject* p2;
};
    
// Instruction
struct S_oS_i4r4o_r4_
{
    Il2CppObject* p0;
    struct S_i4r4o_ p1;
    float p2;
};
    
// quaternion
struct S_S_r4r4r4r4__
{
    struct S_r4r4r4r4_ p0;
};
    
// BezierKnot
struct S_S_r4r4r4_S_r4r4r4_S_r4r4r4_S_S_r4r4r4r4___
{
    struct S_r4r4r4_ p0;
    struct S_r4r4r4_ p1;
    struct S_r4r4r4_ p2;
    struct S_S_r4r4r4r4__ p3;
};
    
// DataPoint`1
struct S_r4S_r4r4r4r4__
{
    float p0;
    struct S_r4r4r4r4_ p1;
};
    
// DataPoint`1
struct S_r4o_
{
    float p0;
    Il2CppObject* p1;
};
    
// RollData
struct S_r4_
{
    float p0;
};
    
// DataPoint`1
struct S_r4S_r4__
{
    float p0;
    struct S_r4_ p1;
};
    
// AxisDescriptor
struct S_osi4_
{
    Il2CppObject* p0;
    Il2CppString* p1;
    int32_t p2;
};
    
// Item
struct S_oS_r4r4r4_r4_
{
    Il2CppObject* p0;
    struct S_r4r4r4_ p1;
    float p2;
};
    
// DataPoint`1
struct S_r4S_oS_r4r4r4_r4__
{
    float p0;
    struct S_oS_r4r4r4_r4_ p1;
};
    
// Heading
struct S_i4i4r4_
{
    int32_t p0;
    int32_t p1;
    float p2;
};
    
// Recentering
struct S_br4r4r4r4r4i4i4_
{
    bool p0;
    float p1;
    float p2;
    float p3;
    float p4;
    float p5;
    int32_t p6;
    int32_t p7;
};
    
// AxisState
struct S_r4i4r4r4r4sr4br4r4bS_br4r4r4r4r4i4i4_r4r4i4oi4bb_
{
    float p0;
    int32_t p1;
    float p2;
    float p3;
    float p4;
    Il2CppString* p5;
    float p6;
    bool p7;
    float p8;
    float p9;
    bool p10;
    struct S_br4r4r4r4r4i4i4_ p11;
    float p12;
    float p13;
    int32_t p14;
    Il2CppObject* p15;
    int32_t p16;
    bool p17;
    bool p18;
};
    
// Tracker
struct S_S_r4r4r4_S_r4r4r4r4_S_r4r4r4r4_S_r4r4r4_o_
{
    struct S_r4r4r4_ p0;
    struct S_r4r4r4r4_ p1;
    struct S_r4r4r4r4_ p2;
    struct S_r4r4r4_ p3;
    Il2CppObject* p4;
};
    
// LegacyLensSettings
struct S_r4r4r4r4r4i4i4S_r4r4_S_r4r4_r4i4r4r4i4S_r4r4_r4r4_
{
    float p0;
    float p1;
    float p2;
    float p3;
    float p4;
    int32_t p5;
    int32_t p6;
    struct S_r4r4_ p7;
    struct S_r4r4_ p8;
    float p9;
    int32_t p10;
    float p11;
    float p12;
    int32_t p13;
    struct S_r4r4_ p14;
    float p15;
    float p16;
};
    
// LegacyTransitionParams
struct S_i4bo_
{
    int32_t p0;
    bool p1;
    Il2CppObject* p2;
};
    
// PhysicalSettings
struct S_i4S_r4r4_S_r4r4_r4i4r4r4i4S_r4r4_r4r4_
{
    int32_t p0;
    struct S_r4r4_ p1;
    struct S_r4r4_ p2;
    float p3;
    int32_t p4;
    float p5;
    float p6;
    int32_t p7;
    struct S_r4r4_ p8;
    float p9;
    float p10;
};
    
// LensSettings
struct S_r4r4r4r4r4i4S_i4S_r4r4_S_r4r4_r4i4r4r4i4S_r4r4_r4r4_bbr4o_
{
    float p0;
    float p1;
    float p2;
    float p3;
    float p4;
    int32_t p5;
    struct S_i4S_r4r4_S_r4r4_r4i4r4r4i4S_r4r4_r4r4_ p6;
    bool p7;
    bool p8;
    float p9;
    Il2CppObject* p10;
};
    
// CustomBlendableItems
struct S_S_or4_S_or4_S_or4_S_or4_oi4_
{
    struct S_or4_ p0;
    struct S_or4_ p1;
    struct S_or4_ p2;
    struct S_or4_ p3;
    Il2CppObject* p4;
    int32_t p5;
};
    
// CameraState
struct S_S_r4r4r4r4r4i4S_i4S_r4r4_S_r4r4_r4i4r4r4i4S_r4r4_r4r4_bbr4o_S_r4r4r4_S_r4r4r4_S_r4r4r4_S_r4r4r4r4_S_r4r4r4r4_r4S_r4r4r4_S_r4r4r4r4_i4S_S_or4_S_or4_S_or4_S_or4_oi4__
{
    struct S_r4r4r4r4r4i4S_i4S_r4r4_S_r4r4_r4i4r4r4i4S_r4r4_r4r4_bbr4o_ p0;
    struct S_r4r4r4_ p1;
    struct S_r4r4r4_ p2;
    struct S_r4r4r4_ p3;
    struct S_r4r4r4r4_ p4;
    struct S_r4r4r4r4_ p5;
    float p6;
    struct S_r4r4r4_ p7;
    struct S_r4r4r4r4_ p8;
    int32_t p9;
    struct S_S_or4_S_or4_S_or4_S_or4_oi4_ p10;
};
    
// EnvelopeDefinition
struct S_oor4r4r4bb_
{
    Il2CppObject* p0;
    Il2CppObject* p1;
    float p2;
    float p3;
    float p4;
    bool p5;
    bool p6;
};
    
// Preset
struct S_sr4_
{
    Il2CppString* p0;
    float p1;
};
    
// Preset
struct S_sr4S_i4S_r4r4_S_r4r4_r4i4r4r4i4S_r4r4_r4r4__
{
    Il2CppString* p0;
    float p1;
    struct S_i4S_r4r4_S_r4r4_r4i4r4r4i4S_r4r4_r4r4_ p2;
};
    
// AllocatorHandle
struct S_u2u2_
{
    uint16_t p0;
    uint16_t p1;
};
    
// Range
struct S_pi4S_u2u2__
{
    void* p0;
    int32_t p1;
    struct S_u2u2_ p2;
};
    
// Block
struct S_S_pi4S_u2u2__i4i4u1u1u2u4_
{
    struct S_pi4S_u2u2__ p0;
    int32_t p1;
    int32_t p2;
    uint8_t p3;
    uint8_t p4;
    uint16_t p5;
    uint32_t p6;
};
    
// <buffer>e__FixedBuffer
struct S_c_
{
    Il2CppChar p0;
};
    
// IMECompositionString
struct S_i4S_c__
{
    int32_t p0;
    struct S_c_ p1;
};
    
// ControlItem
struct S_S_ss_S_ss_S_ss_sssS_oi4i4_S_oi4i4_S_oi4i4_S_oi4i4_u4u4u4S_i4_i4i4S_i4bcu1i1i2u2i4u4i8u8r4r8_S_i4bcu1i1i2u2i4u4i8u8r4r8_S_i4bcu1i1i2u2i4u4i8u8r4r8__
{
    struct S_ss_ p0;
    struct S_ss_ p1;
    struct S_ss_ p2;
    Il2CppString* p3;
    Il2CppString* p4;
    Il2CppString* p5;
    struct S_oi4i4_ p6;
    struct S_oi4i4_ p7;
    struct S_oi4i4_ p8;
    struct S_oi4i4_ p9;
    uint32_t p10;
    uint32_t p11;
    uint32_t p12;
    struct S_i4_ p13;
    int32_t p14;
    int32_t p15;
    struct S_i4bcu1i1i2u2i4u4i8u8r4r8_ p16;
    struct S_i4bcu1i1i2u2i4u4i8u8r4r8_ p17;
    struct S_i4bcu1i1i2u2i4u4i8u8r4r8_ p18;
};
    
// LayoutMatcher
struct S_S_ss_S_o__
{
    struct S_ss_ p0;
    struct S_o_ p1;
};
    
// InputDeviceCommand
struct S_S_i4_i4_
{
    struct S_i4_ p0;
    int32_t p1;
};
    
// InputEventBuffer
struct S_S_Pvi4i4i4S_pi4i4_i4_i8i4b_
{
    struct S_Pvi4i4i4S_pi4i4_i4_ p0;
    int64_t p1;
    int32_t p2;
    bool p3;
};
    
// StateChangeMonitorTimeout
struct S_or8oi8i4_
{
    Il2CppObject* p0;
    double p1;
    Il2CppObject* p2;
    int64_t p3;
    int32_t p4;
};
    
// UsageHint
struct S_s_
{
    Il2CppString* p0;
};
    
// XRFeatureDescriptor
struct S_soi4u4_
{
    Il2CppString* p0;
    Il2CppObject* p1;
    int32_t p2;
    uint32_t p3;
};
    
// RaycastHitData
struct S_oS_r4r4r4_S_r4r4_r4_
{
    Il2CppObject* p0;
    struct S_r4r4r4_ p1;
    struct S_r4r4_ p2;
    float p3;
};
    
// Record
struct S_oi4u4_
{
    Il2CppObject* p0;
    int32_t p1;
    uint32_t p2;
};
    
// InputControlList`1
struct S_i4S_Pvi4i4i4S_pi4i4_i4_i4_
{
    int32_t p0;
    struct S_Pvi4i4i4S_pi4i4_i4_ p1;
    int32_t p2;
};
    
// DeviceInfo
struct S_i4sS_i4_i4s_
{
    int32_t p0;
    Il2CppString* p1;
    struct S_i4_ p2;
    int32_t p3;
    Il2CppString* p4;
};
    
// UnmanagedMemory
struct S_Pvi4i4i4i4i4i4PS_u1u1u1u2r8r8u2u2r4u4u4u4u4u4i4i4i4i4_PS_u1u1u1u1u1u1u2u2u2u2u2r8i4i4_PS_u2u1u1r4r8r8r8r4r4i8_Pr4Pr4Pi4Pu2Pu2Pi4Pu2bPS_i4i4i4i4i4i4i4i4i4i4i4i4__
{
    void* p0;
    int32_t p1;
    int32_t p2;
    int32_t p3;
    int32_t p4;
    int32_t p5;
    int32_t p6;
    struct S_u1u1u1u2r8r8u2u2r4u4u4u4u4u4i4i4i4i4_* p7;
    struct S_u1u1u1u1u1u1u2u2u2u2u2r8i4i4_* p8;
    struct S_u2u1u1r4r8r8r8r4r4i8_* p9;
    float* p10;
    float* p11;
    int32_t* p12;
    uint16_t* p13;
    uint16_t* p14;
    int32_t* p15;
    uint16_t* p16;
    bool p17;
    struct S_i4i4i4i4i4i4i4i4i4i4i4i4_* p18;
};
    
// PairedUser
struct S_i4u8ss_
{
    int32_t p0;
    uint64_t p1;
    Il2CppString* p2;
    Il2CppString* p3;
};
    
// AnalyticsEventData
struct S_sO_
{
    Il2CppString* p0;
    Il2CppObject* p1;
};
    
// Nullable`1
struct N_br8_
{
    bool hasValue;
    double p1;
};
    
// Nullable`1
struct N_bS_r4r4__
{
    bool hasValue;
    struct S_r4r4_ p1;
};
    
// MaterialHeaderScopeItem
struct S_ou4os_
{
    Il2CppObject* p0;
    uint32_t p1;
    Il2CppObject* p2;
    Il2CppString* p3;
};
    
// ScriptableRenderContext
struct S_pS_pi4i4__
{
    void* p0;
    struct S_pi4i4_ p1;
};
    
// ValueTuple`2
struct S_OS_oi4__
{
    Il2CppObject* p0;
    struct S_oi4_ p1;
};
    
// RenderTargetIdentifier
struct S_i4i4i4pi4i4i4_
{
    int32_t p0;
    int32_t p1;
    int32_t p2;
    void* p3;
    int32_t p4;
    int32_t p5;
    int32_t p6;
};
    
// RTHandleProperties
struct S_S_i4i4_S_i4i4_S_i4i4_S_i4i4_S_r4r4r4r4__
{
    struct S_i4i4_ p0;
    struct S_i4i4_ p1;
    struct S_i4i4_ p2;
    struct S_i4i4_ p3;
    struct S_r4r4r4r4_ p4;
};
    
// ResourceHandle
struct S_u4i4i4_
{
    uint32_t p0;
    int32_t p1;
    int32_t p2;
};
    
// RendererListHandle
struct S_i4bi4_
{
    int32_t p0;
    bool p1;
    int32_t p2;
};
    
// TextureHandle
struct S_S_u4i4i4_b_
{
    struct S_u4i4i4_ p0;
    bool p1;
};
    
// ValueTuple`2
struct S_S_S_u4i4i4_b_i4_
{
    struct S_S_u4i4i4_b_ p0;
    int32_t p1;
};
    
// CullingResults
struct S_pPS_PS_i4S_r4r4r4r4_S_r4r4r4r4_S_r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4_r4r4i4i4_PS_i4S_r4r4r4r4_S_r4r4r4r4_S_r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4_r4r4i4i4_PS_S_S_r4r4r4_S_r4r4r4__S_r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4_S_r4r4r4r4_S_r4r4r4_r4i4i4i4i4_i4i4i4_S_pi4i4__
{
    void* p0;
    struct S_PS_i4S_r4r4r4r4_S_r4r4r4r4_S_r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4_r4r4i4i4_PS_i4S_r4r4r4r4_S_r4r4r4r4_S_r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4_r4r4i4i4_PS_S_S_r4r4r4_S_r4r4r4__S_r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4_S_r4r4r4r4_S_r4r4r4_r4i4i4i4i4_i4i4i4_* p1;
    struct S_pi4i4_ p2;
};
    
// SortingSettings
struct S_S_r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4_S_r4r4r4_S_r4r4r4_i4i4_
{
    struct S_r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4_ p0;
    struct S_r4r4r4_ p1;
    struct S_r4r4r4_ p2;
    int32_t p3;
    int32_t p4;
};
    
// DrawingSettings
struct S_S_S_r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4_S_r4r4r4_S_r4r4r4_i4i4_S_i4_i4i4i4i4i4i4i4i4i4i4_
{
    struct S_S_r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4_S_r4r4r4_S_r4r4r4_i4i4_ p0;
    struct S_i4_ p1;
    int32_t p2;
    int32_t p3;
    int32_t p4;
    int32_t p5;
    int32_t p6;
    int32_t p7;
    int32_t p8;
    int32_t p9;
    int32_t p10;
    int32_t p11;
};
    
// SortingLayerRange
struct S_i2i2_
{
    int16_t p0;
    int16_t p1;
};
    
// FilteringSettings
struct S_S_i4i4_i4u4u4i4i4S_i2i2__
{
    struct S_i4i4_ p0;
    int32_t p1;
    uint32_t p2;
    uint32_t p3;
    int32_t p4;
    int32_t p5;
    struct S_i2i2_ p6;
};
    
// Nullable`1
struct N_bS_Pvi4i4i4S_pi4i4_i4__
{
    bool hasValue;
    struct S_Pvi4i4i4S_pi4i4_i4_ p1;
};
    
// RendererListParams
struct S_S_pPS_PS_i4S_r4r4r4r4_S_r4r4r4r4_S_r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4_r4r4i4i4_PS_i4S_r4r4r4r4_S_r4r4r4r4_S_r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4_r4r4i4i4_PS_S_S_r4r4r4_S_r4r4r4__S_r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4_S_r4r4r4r4_S_r4r4r4_r4i4i4i4i4_i4i4i4_S_pi4i4__S_S_S_r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4_S_r4r4r4_S_r4r4r4_i4i4_S_i4_i4i4i4i4i4i4i4i4i4i4_S_S_i4i4_i4u4u4i4i4S_i2i2__S_i4_bN_bS_Pvi4i4i4S_pi4i4_i4__N_bS_Pvi4i4i4S_pi4i4_i4___
{
    struct S_pPS_PS_i4S_r4r4r4r4_S_r4r4r4r4_S_r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4_r4r4i4i4_PS_i4S_r4r4r4r4_S_r4r4r4r4_S_r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4_r4r4i4i4_PS_S_S_r4r4r4_S_r4r4r4__S_r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4_S_r4r4r4r4_S_r4r4r4_r4i4i4i4i4_i4i4i4_S_pi4i4__ p0;
    struct S_S_S_r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4_S_r4r4r4_S_r4r4r4_i4i4_S_i4_i4i4i4i4i4i4i4i4i4i4_ p1;
    struct S_S_i4i4_i4u4u4i4i4S_i2i2__ p2;
    struct S_i4_ p3;
    bool p4;
    struct N_bS_Pvi4i4i4S_pi4i4_i4__ p5;
    struct N_bS_Pvi4i4i4S_pi4i4_i4__ p6;
};
    
// RendererListResource
struct S_S_S_pPS_PS_i4S_r4r4r4r4_S_r4r4r4r4_S_r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4_r4r4i4i4_PS_i4S_r4r4r4r4_S_r4r4r4r4_S_r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4_r4r4i4i4_PS_S_S_r4r4r4_S_r4r4r4__S_r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4_S_r4r4r4r4_S_r4r4r4_r4i4i4i4i4_i4i4i4_S_pi4i4__S_S_S_r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4_S_r4r4r4_S_r4r4r4_i4i4_S_i4_i4i4i4i4i4i4i4i4i4i4_S_S_i4i4_i4u4u4i4i4S_i2i2__S_i4_bN_bS_Pvi4i4i4S_pi4i4_i4__N_bS_Pvi4i4i4S_pi4i4_i4___S_pu4u4u4u4__
{
    struct S_S_pPS_PS_i4S_r4r4r4r4_S_r4r4r4r4_S_r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4_r4r4i4i4_PS_i4S_r4r4r4r4_S_r4r4r4r4_S_r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4_r4r4i4i4_PS_S_S_r4r4r4_S_r4r4r4__S_r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4_S_r4r4r4r4_S_r4r4r4_r4i4i4i4i4_i4i4i4_S_pi4i4__S_S_S_r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4_S_r4r4r4_S_r4r4r4_i4i4_S_i4_i4i4i4i4i4i4i4i4i4i4_S_S_i4i4_i4u4u4i4i4S_i2i2__S_i4_bN_bS_Pvi4i4i4S_pi4i4_i4__N_bS_Pvi4i4i4S_pi4i4_i4___ p0;
    struct S_pu4u4u4u4_ p1;
};
    
// RendererListLegacyResource
struct S_S_pu4u4u4u4_b_
{
    struct S_pu4u4u4u4_ p0;
    bool p1;
};
    
// TextureAccess
struct S_S_S_u4i4i4_b_i4i4i4_
{
    struct S_S_u4i4i4_b_ p0;
    int32_t p1;
    int32_t p2;
    int32_t p3;
};
    
// FixedAttachmentArray`1
struct S_S_i4i4_S_i4i4_S_i4i4_S_i4i4_S_i4i4_S_i4i4_S_i4i4_S_i4i4_i4_
{
    struct S_i4i4_ p0;
    struct S_i4i4_ p1;
    struct S_i4i4_ p2;
    struct S_i4i4_ p3;
    struct S_i4i4_ p4;
    struct S_i4i4_ p5;
    struct S_i4i4_ p6;
    struct S_i4i4_ p7;
    int32_t p8;
};
    
// FixedAttachmentArray`1
struct S_S_i4i4i4i4_S_i4i4i4i4_S_i4i4i4i4_S_i4i4i4i4_S_i4i4i4i4_S_i4i4i4i4_S_i4i4i4i4_S_i4i4i4i4_i4_
{
    struct S_i4i4i4i4_ p0;
    struct S_i4i4i4i4_ p1;
    struct S_i4i4i4i4_ p2;
    struct S_i4i4i4i4_ p3;
    struct S_i4i4i4i4_ p4;
    struct S_i4i4i4i4_ p5;
    struct S_i4i4i4i4_ p6;
    struct S_i4i4i4i4_ p7;
    int32_t p8;
};
    
// PassFragmentData
struct S_S_u4i4i4_i4i4i4_
{
    struct S_u4i4i4_ p0;
    int32_t p1;
    int32_t p2;
    int32_t p3;
};
    
// FixedAttachmentArray`1
struct S_S_S_u4i4i4_i4i4i4_S_S_u4i4i4_i4i4i4_S_S_u4i4i4_i4i4i4_S_S_u4i4i4_i4i4i4_S_S_u4i4i4_i4i4i4_S_S_u4i4i4_i4i4i4_S_S_u4i4i4_i4i4i4_S_S_u4i4i4_i4i4i4_i4_
{
    struct S_S_u4i4i4_i4i4i4_ p0;
    struct S_S_u4i4i4_i4i4i4_ p1;
    struct S_S_u4i4i4_i4i4i4_ p2;
    struct S_S_u4i4i4_i4i4i4_ p3;
    struct S_S_u4i4i4_i4i4i4_ p4;
    struct S_S_u4i4i4_i4i4i4_ p5;
    struct S_S_u4i4i4_i4i4i4_ p6;
    struct S_S_u4i4i4_i4i4i4_ p7;
    int32_t p8;
};
    
// NativePassAttachment
struct S_S_u4i4i4_i4i4bi4i4_
{
    struct S_u4i4i4_ p0;
    int32_t p1;
    int32_t p2;
    bool p3;
    int32_t p4;
    int32_t p5;
};
    
// FixedAttachmentArray`1
struct S_S_S_u4i4i4_i4i4bi4i4_S_S_u4i4i4_i4i4bi4i4_S_S_u4i4i4_i4i4bi4i4_S_S_u4i4i4_i4i4bi4i4_S_S_u4i4i4_i4i4bi4i4_S_S_u4i4i4_i4i4bi4i4_S_S_u4i4i4_i4i4bi4i4_S_S_u4i4i4_i4i4bi4i4_i4_
{
    struct S_S_u4i4i4_i4i4bi4i4_ p0;
    struct S_S_u4i4i4_i4i4bi4i4_ p1;
    struct S_S_u4i4i4_i4i4bi4i4_ p2;
    struct S_S_u4i4i4_i4i4bi4i4_ p3;
    struct S_S_u4i4i4_i4i4bi4i4_ p4;
    struct S_S_u4i4i4_i4i4bi4i4_ p5;
    struct S_S_u4i4i4_i4i4bi4i4_ p6;
    struct S_S_u4i4i4_i4i4bi4i4_ p7;
    int32_t p8;
};
    
// NativePassData
struct S_S_S_i4i4_S_i4i4_S_i4i4_S_i4i4_S_i4i4_S_i4i4_S_i4i4_S_i4i4_i4_S_S_i4i4i4i4_S_i4i4i4i4_S_i4i4i4i4_S_i4i4i4i4_S_i4i4i4i4_S_i4i4i4i4_S_i4i4i4i4_S_i4i4i4i4_i4_S_i4i4_S_S_S_u4i4i4_i4i4i4_S_S_u4i4i4_i4i4i4_S_S_u4i4i4_i4i4i4_S_S_u4i4i4_i4i4i4_S_S_u4i4i4_i4i4i4_S_S_u4i4i4_i4i4i4_S_S_u4i4i4_i4i4i4_S_S_u4i4i4_i4i4i4_i4_S_S_S_u4i4i4_i4i4bi4i4_S_S_u4i4i4_i4i4bi4i4_S_S_u4i4i4_i4i4bi4i4_S_S_u4i4i4_i4i4bi4i4_S_S_u4i4i4_i4i4bi4i4_S_S_u4i4i4_i4i4bi4i4_S_S_u4i4i4_i4i4bi4i4_S_S_u4i4i4_i4i4bi4i4_i4_i4i4i4i4i4i4i4i4i4i4bbbi4i4i4_
{
    struct S_S_i4i4_S_i4i4_S_i4i4_S_i4i4_S_i4i4_S_i4i4_S_i4i4_S_i4i4_i4_ p0;
    struct S_S_i4i4i4i4_S_i4i4i4i4_S_i4i4i4i4_S_i4i4i4i4_S_i4i4i4i4_S_i4i4i4i4_S_i4i4i4i4_S_i4i4i4i4_i4_ p1;
    struct S_i4i4_ p2;
    struct S_S_S_u4i4i4_i4i4i4_S_S_u4i4i4_i4i4i4_S_S_u4i4i4_i4i4i4_S_S_u4i4i4_i4i4i4_S_S_u4i4i4_i4i4i4_S_S_u4i4i4_i4i4i4_S_S_u4i4i4_i4i4i4_S_S_u4i4i4_i4i4i4_i4_ p3;
    struct S_S_S_u4i4i4_i4i4bi4i4_S_S_u4i4i4_i4i4bi4i4_S_S_u4i4i4_i4i4bi4i4_S_S_u4i4i4_i4i4bi4i4_S_S_u4i4i4_i4i4bi4i4_S_S_u4i4i4_i4i4bi4i4_S_S_u4i4i4_i4i4bi4i4_S_S_u4i4i4_i4i4bi4i4_i4_ p4;
    int32_t p5;
    int32_t p6;
    int32_t p7;
    int32_t p8;
    int32_t p9;
    int32_t p10;
    int32_t p11;
    int32_t p12;
    int32_t p13;
    int32_t p14;
    bool p15;
    bool p16;
    bool p17;
    int32_t p18;
    int32_t p19;
    int32_t p20;
};
    
// CompiledPassInfo
struct S_si4ooS_pi4i4_ooi4i4i4bbbbbbbbb_
{
    Il2CppString* p0;
    int32_t p1;
    Il2CppObject* p2;
    Il2CppObject* p3;
    struct S_pi4i4_ p4;
    Il2CppObject* p5;
    Il2CppObject* p6;
    int32_t p7;
    int32_t p8;
    int32_t p9;
    bool p10;
    bool p11;
    bool p12;
    bool p13;
    bool p14;
    bool p15;
    bool p16;
    bool p17;
    bool p18;
};
    
// HashEntry`1
struct S_i4i4o_
{
    int32_t p0;
    int32_t p1;
    Il2CppObject* p2;
};
    
// PassData
struct S_si4oobbi4i4i4boo_
{
    Il2CppString* p0;
    int32_t p1;
    Il2CppObject* p2;
    Il2CppObject* p3;
    bool p4;
    bool p5;
    int32_t p6;
    int32_t p7;
    int32_t p8;
    bool p9;
    Il2CppObject* p10;
    Il2CppObject* p11;
};
    
// ResourceData
struct S_sbi4i4ooboo_
{
    Il2CppString* p0;
    bool p1;
    int32_t p2;
    int32_t p3;
    Il2CppObject* p4;
    Il2CppObject* p5;
    bool p6;
    Il2CppObject* p7;
    Il2CppObject* p8;
};
    
// XRView
struct S_S_r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4_S_r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4_S_r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4_S_r4r4r4r4_oi4S_r4r4_b_
{
    struct S_r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4_ p0;
    struct S_r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4_ p1;
    struct S_r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4_ p2;
    struct S_r4r4r4r4_ p3;
    Il2CppObject* p4;
    int32_t p5;
    struct S_r4r4_ p6;
    bool p7;
};
    
// FrameTimeSample
struct S_r4r4r4r4r4r4_
{
    float p0;
    float p1;
    float p2;
    float p3;
    float p4;
    float p5;
};
    
// CellStreamingScratchBufferLayout
struct S_i4i4i4i4i4i4i4i4i4i4i4i4i4i4i4i4i4i4i4i4i4i4i4i4i4i4i4i4_
{
    int32_t p0;
    int32_t p1;
    int32_t p2;
    int32_t p3;
    int32_t p4;
    int32_t p5;
    int32_t p6;
    int32_t p7;
    int32_t p8;
    int32_t p9;
    int32_t p10;
    int32_t p11;
    int32_t p12;
    int32_t p13;
    int32_t p14;
    int32_t p15;
    int32_t p16;
    int32_t p17;
    int32_t p18;
    int32_t p19;
    int32_t p20;
    int32_t p21;
    int32_t p22;
    int32_t p23;
    int32_t p24;
    int32_t p25;
    int32_t p26;
    int32_t p27;
};
    
// PerScenarioData
struct S_S_Pvi4i4i4S_pi4i4_i4_S_Pvi4i4i4S_pi4i4_i4_S_Pvi4i4i4S_pi4i4_i4_S_Pvi4i4i4S_pi4i4_i4_S_Pvi4i4i4S_pi4i4_i4_S_Pvi4i4i4S_pi4i4_i4_S_Pvi4i4i4S_pi4i4_i4_S_Pvi4i4i4S_pi4i4_i4__
{
    struct S_Pvi4i4i4S_pi4i4_i4_ p0;
    struct S_Pvi4i4i4S_pi4i4_i4_ p1;
    struct S_Pvi4i4i4S_pi4i4_i4_ p2;
    struct S_Pvi4i4i4S_pi4i4_i4_ p3;
    struct S_Pvi4i4i4S_pi4i4_i4_ p4;
    struct S_Pvi4i4i4S_pi4i4_i4_ p5;
    struct S_Pvi4i4i4S_pi4i4_i4_ p6;
    struct S_Pvi4i4i4S_pi4i4_i4_ p7;
};
    
// ObsoleteSerializablePerScenarioDataItem
struct S_sS_i4oo__
{
    Il2CppString* p0;
    struct S_i4oo_ p1;
};
    
// GPUDrivenRendererGroupDataNative
struct S_Pi4PS_S_r4r4r4_S_r4r4r4__PS_r4r4r4r4_Pi4Pu4Pi4Pi4PS_u4_Pi4Pi4Pi2Pi4Pi2Pi4Pi4PS_u8_i4Pi4i4PS_r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4_PS_r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4_Pi4i4Pi4Pi2Pi4i4PS_S_S_r4r4r4_S_r4r4r4__i4i4i4i4i4i4_i4Pi4i4Pi4PS_u4_Pi4i4_
{
    int32_t* p0;
    struct S_S_r4r4r4_S_r4r4r4__* p1;
    struct S_r4r4r4r4_* p2;
    int32_t* p3;
    uint32_t* p4;
    int32_t* p5;
    int32_t* p6;
    struct S_u4_* p7;
    int32_t* p8;
    int32_t* p9;
    int16_t* p10;
    int32_t* p11;
    int16_t* p12;
    int32_t* p13;
    int32_t* p14;
    struct S_u8_* p15;
    int32_t p16;
    int32_t* p17;
    int32_t p18;
    struct S_r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4_* p19;
    struct S_r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4_* p20;
    int32_t* p21;
    int32_t p22;
    int32_t* p23;
    int16_t* p24;
    int32_t* p25;
    int32_t p26;
    struct S_S_S_r4r4r4_S_r4r4r4__i4i4i4i4i4i4_* p27;
    int32_t p28;
    int32_t* p29;
    int32_t p30;
    int32_t* p31;
    struct S_u4_* p32;
    int32_t* p33;
    int32_t p34;
};
    
// GPUDrivenRendererGroupData
struct S_S_Pvi4i4i4S_pi4i4_i4_S_Pvi4i4i4S_pi4i4_i4_S_Pvi4i4i4S_pi4i4_i4_S_Pvi4i4i4S_pi4i4_i4_S_Pvi4i4i4S_pi4i4_i4_S_Pvi4i4i4S_pi4i4_i4_S_Pvi4i4i4S_pi4i4_i4_S_Pvi4i4i4S_pi4i4_i4_S_Pvi4i4i4S_pi4i4_i4_S_Pvi4i4i4S_pi4i4_i4_S_Pvi4i4i4S_pi4i4_i4_S_Pvi4i4i4S_pi4i4_i4_S_Pvi4i4i4S_pi4i4_i4_S_Pvi4i4i4S_pi4i4_i4_S_Pvi4i4i4S_pi4i4_i4_S_Pvi4i4i4S_pi4i4_i4_S_Pvi4i4i4S_pi4i4_i4_S_Pvi4i4i4S_pi4i4_i4_S_Pvi4i4i4S_pi4i4_i4_S_Pvi4i4i4S_pi4i4_i4_S_Pvi4i4i4S_pi4i4_i4_S_Pvi4i4i4S_pi4i4_i4_S_Pvi4i4i4S_pi4i4_i4_S_Pvi4i4i4S_pi4i4_i4_S_Pvi4i4i4S_pi4i4_i4_S_Pvi4i4i4S_pi4i4_i4_S_Pvi4i4i4S_pi4i4_i4_S_Pvi4i4i4S_pi4i4_i4__
{
    struct S_Pvi4i4i4S_pi4i4_i4_ p0;
    struct S_Pvi4i4i4S_pi4i4_i4_ p1;
    struct S_Pvi4i4i4S_pi4i4_i4_ p2;
    struct S_Pvi4i4i4S_pi4i4_i4_ p3;
    struct S_Pvi4i4i4S_pi4i4_i4_ p4;
    struct S_Pvi4i4i4S_pi4i4_i4_ p5;
    struct S_Pvi4i4i4S_pi4i4_i4_ p6;
    struct S_Pvi4i4i4S_pi4i4_i4_ p7;
    struct S_Pvi4i4i4S_pi4i4_i4_ p8;
    struct S_Pvi4i4i4S_pi4i4_i4_ p9;
    struct S_Pvi4i4i4S_pi4i4_i4_ p10;
    struct S_Pvi4i4i4S_pi4i4_i4_ p11;
    struct S_Pvi4i4i4S_pi4i4_i4_ p12;
    struct S_Pvi4i4i4S_pi4i4_i4_ p13;
    struct S_Pvi4i4i4S_pi4i4_i4_ p14;
    struct S_Pvi4i4i4S_pi4i4_i4_ p15;
    struct S_Pvi4i4i4S_pi4i4_i4_ p16;
    struct S_Pvi4i4i4S_pi4i4_i4_ p17;
    struct S_Pvi4i4i4S_pi4i4_i4_ p18;
    struct S_Pvi4i4i4S_pi4i4_i4_ p19;
    struct S_Pvi4i4i4S_pi4i4_i4_ p20;
    struct S_Pvi4i4i4S_pi4i4_i4_ p21;
    struct S_Pvi4i4i4S_pi4i4_i4_ p22;
    struct S_Pvi4i4i4S_pi4i4_i4_ p23;
    struct S_Pvi4i4i4S_pi4i4_i4_ p24;
    struct S_Pvi4i4i4S_pi4i4_i4_ p25;
    struct S_Pvi4i4i4S_pi4i4_i4_ p26;
    struct S_Pvi4i4i4S_pi4i4_i4_ p27;
};
    
// GPUDrivenLODGroupDataNative
struct S_Pi4Pi4Pi4Pi4PS_r4r4r4_Pr4Pi2PbPu1i4Pi4i4Pi2Pr4Pr4i4_
{
    int32_t* p0;
    int32_t* p1;
    int32_t* p2;
    int32_t* p3;
    struct S_r4r4r4_* p4;
    float* p5;
    int16_t* p6;
    bool* p7;
    uint8_t* p8;
    int32_t p9;
    int32_t* p10;
    int32_t p11;
    int16_t* p12;
    float* p13;
    float* p14;
    int32_t p15;
};
    
// GPUDrivenLODGroupData
struct S_S_Pvi4i4i4S_pi4i4_i4_S_Pvi4i4i4S_pi4i4_i4_S_Pvi4i4i4S_pi4i4_i4_S_Pvi4i4i4S_pi4i4_i4_S_Pvi4i4i4S_pi4i4_i4_S_Pvi4i4i4S_pi4i4_i4_S_Pvi4i4i4S_pi4i4_i4_S_Pvi4i4i4S_pi4i4_i4_S_Pvi4i4i4S_pi4i4_i4_S_Pvi4i4i4S_pi4i4_i4_S_Pvi4i4i4S_pi4i4_i4_S_Pvi4i4i4S_pi4i4_i4_S_Pvi4i4i4S_pi4i4_i4__
{
    struct S_Pvi4i4i4S_pi4i4_i4_ p0;
    struct S_Pvi4i4i4S_pi4i4_i4_ p1;
    struct S_Pvi4i4i4S_pi4i4_i4_ p2;
    struct S_Pvi4i4i4S_pi4i4_i4_ p3;
    struct S_Pvi4i4i4S_pi4i4_i4_ p4;
    struct S_Pvi4i4i4S_pi4i4_i4_ p5;
    struct S_Pvi4i4i4S_pi4i4_i4_ p6;
    struct S_Pvi4i4i4S_pi4i4_i4_ p7;
    struct S_Pvi4i4i4S_pi4i4_i4_ p8;
    struct S_Pvi4i4i4S_pi4i4_i4_ p9;
    struct S_Pvi4i4i4S_pi4i4_i4_ p10;
    struct S_Pvi4i4i4S_pi4i4_i4_ p11;
    struct S_Pvi4i4i4S_pi4i4_i4_ p12;
};
    
// OccluderContext
struct S_i4S_i4i4_S_Pvi4i4i4S_pi4i4_i4_i4S_Pvi4i4i4S_pi4i4_i4_S_i4i4_S_i4i4_oi4oboS_Pvi4i4i4S_pi4i4_i4__
{
    int32_t p0;
    struct S_i4i4_ p1;
    struct S_Pvi4i4i4S_pi4i4_i4_ p2;
    int32_t p3;
    struct S_Pvi4i4i4S_pi4i4_i4_ p4;
    struct S_i4i4_ p5;
    struct S_i4i4_ p6;
    Il2CppObject* p7;
    int32_t p8;
    Il2CppObject* p9;
    bool p10;
    Il2CppObject* p11;
    struct S_Pvi4i4i4S_pi4i4_i4_ p12;
};
    
// JobHandle
struct S_u8i4i4p_
{
    uint64_t p0;
    int32_t p1;
    int32_t p2;
    void* p3;
};
    
// TypeDispatchData
struct S_oS_Pvi4i4i4S_pi4i4_i4_S_Pvi4i4i4S_pi4i4_i4__
{
    Il2CppObject* p0;
    struct S_Pvi4i4i4S_pi4i4_i4_ p1;
    struct S_Pvi4i4i4S_pi4i4_i4_ p2;
};
    
// TransformDispatchData
struct S_S_Pvi4i4i4S_pi4i4_i4_S_Pvi4i4i4S_pi4i4_i4_S_Pvi4i4i4S_pi4i4_i4_S_Pvi4i4i4S_pi4i4_i4_S_Pvi4i4i4S_pi4i4_i4_S_Pvi4i4i4S_pi4i4_i4__
{
    struct S_Pvi4i4i4S_pi4i4_i4_ p0;
    struct S_Pvi4i4i4S_pi4i4_i4_ p1;
    struct S_Pvi4i4i4S_pi4i4_i4_ p2;
    struct S_Pvi4i4i4S_pi4i4_i4_ p3;
    struct S_Pvi4i4i4S_pi4i4_i4_ p4;
    struct S_Pvi4i4i4S_pi4i4_i4_ p5;
};
    
// CombinedChunks
struct S_ooooi4b_
{
    Il2CppObject* p0;
    Il2CppObject* p1;
    Il2CppObject* p2;
    Il2CppObject* p3;
    int32_t p4;
    bool p5;
};
    
// BundleDetails
struct S_su4so_
{
    Il2CppString* p0;
    uint32_t p1;
    Il2CppString* p2;
    Il2CppObject* p3;
};
    
// BuildUsageTagGlobal
struct S_u4u4u4u4u4bbbbbbb_
{
    uint32_t p0;
    uint32_t p1;
    uint32_t p2;
    uint32_t p3;
    uint32_t p4;
    bool p5;
    bool p6;
    bool p7;
    bool p8;
    bool p9;
    bool p10;
    bool p11;
};
    
// CustomContent
struct S_S_u4u4u4u4_o_
{
    struct S_u4u4u4u4_ p0;
    Il2CppObject* p1;
};
    
// LogEntry
struct S_i4r8i4s_
{
    int32_t p0;
    double p1;
    int32_t p2;
    Il2CppString* p3;
};
    
// ObjectTypes
struct S_S_S_u4u4u4u4_i8i4s_o_
{
    struct S_S_u4u4u4u4_i8i4s_ p0;
    Il2CppObject* p1;
};
    
// HLSLProperty
struct S_si4i4i4o_
{
    Il2CppString* p0;
    int32_t p1;
    int32_t p2;
    int32_t p3;
    Il2CppObject* p4;
};
    
// TextureInfo
struct S_si4i4b_
{
    Il2CppString* p0;
    int32_t p1;
    int32_t p2;
    bool p3;
};
    
// JsonRef`1
struct S_os_
{
    Il2CppObject* p0;
    Il2CppString* p1;
};
    
// KeywordEntry
struct S_i4ss_
{
    int32_t p0;
    Il2CppString* p1;
    Il2CppString* p2;
};
    
// DrawState
struct S_bS_r4r4r4r4__
{
    bool p0;
    struct S_r4r4r4r4_ p1;
};
    
// ParentGroupChange
struct S_ooo_
{
    Il2CppObject* p0;
    Il2CppObject* p1;
    Il2CppObject* p2;
};
    
// SlotReference
struct S_S_os_i4_
{
    struct S_os_ p0;
    int32_t p1;
};
    
// ShaderMessage
struct S_sssi4i4i4_
{
    Il2CppString* p0;
    Il2CppString* p1;
    Il2CppString* p2;
    int32_t p3;
    int32_t p4;
    int32_t p5;
};
    
// StructData
struct S_S_r4r4r4r4_S_r4r4r4r4_r4bS_r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4__
{
    struct S_r4r4r4r4_ p0;
    struct S_r4r4r4r4_ p1;
    float p2;
    bool p3;
    struct S_r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4_ p4;
};
    
// PreviewProperty
struct S_si4S_oooo_S_S_r4r4r4r4_S_r4r4r4r4_r4bS_r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4__i4_
{
    Il2CppString* p0;
    int32_t p1;
    struct S_oooo_ p2;
    struct S_S_r4r4r4r4_S_r4r4r4r4_r4bS_r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4__ p3;
    int32_t p4;
};
    
// JSONSerializedElement
struct S_S_s_s_
{
    struct S_s_ p0;
    Il2CppString* p1;
};
    
// InstantiableItem
struct S_oor4r4_
{
    Il2CppObject* p0;
    Il2CppObject* p1;
    float p2;
    float p3;
};
    
// SplineInfo
struct S_ooi4_
{
    Il2CppObject* p0;
    Il2CppObject* p1;
    int32_t p2;
};
    
// SelectableTangent
struct S_S_ooi4_i4i4_
{
    struct S_ooi4_ p0;
    int32_t p1;
    int32_t p2;
};
    
// FontAssetCreationSettings
struct S_ssi4i4i4i4i4i4i4i4i4sssi4r4i4b_
{
    Il2CppString* p0;
    Il2CppString* p1;
    int32_t p2;
    int32_t p3;
    int32_t p4;
    int32_t p5;
    int32_t p6;
    int32_t p7;
    int32_t p8;
    int32_t p9;
    int32_t p10;
    Il2CppString* p11;
    Il2CppString* p12;
    Il2CppString* p13;
    int32_t p14;
    float p15;
    int32_t p16;
    bool p17;
};
    
// HighlightState
struct S_S_i4u1u1u1u1_S_r4r4r4r4__
{
    struct S_i4u1u1u1u1_ p0;
    struct S_r4r4r4r4_ p1;
};
    
// VertexGradient
struct S_S_r4r4r4r4_S_r4r4r4r4_S_r4r4r4r4_S_r4r4r4r4__
{
    struct S_r4r4r4r4_ p0;
    struct S_r4r4r4r4_ p1;
    struct S_r4r4r4r4_ p2;
    struct S_r4r4r4r4_ p3;
};
    
// TMP_TextProcessingStack`1
struct S_oi4r4i4i4i4_
{
    Il2CppObject* p0;
    int32_t p1;
    float p2;
    int32_t p3;
    int32_t p4;
    int32_t p5;
};
    
// TMP_TextProcessingStack`1
struct S_oi4i4i4i4i4_
{
    Il2CppObject* p0;
    int32_t p1;
    int32_t p2;
    int32_t p3;
    int32_t p4;
    int32_t p5;
};
    
// TMP_FontStyleStack
struct S_u1u1u1u1u1u1u1u1u1u1_
{
    uint8_t p0;
    uint8_t p1;
    uint8_t p2;
    uint8_t p3;
    uint8_t p4;
    uint8_t p5;
    uint8_t p6;
    uint8_t p7;
    uint8_t p8;
    uint8_t p9;
};
    
// TMP_TextProcessingStack`1
struct S_oi4S_i4u1u1u1u1_i4i4i4_
{
    Il2CppObject* p0;
    int32_t p1;
    struct S_i4u1u1u1u1_ p2;
    int32_t p3;
    int32_t p4;
    int32_t p5;
};
    
// TMP_TextProcessingStack`1
struct S_oi4S_S_i4u1u1u1u1_S_r4r4r4r4__i4i4i4_
{
    Il2CppObject* p0;
    int32_t p1;
    struct S_S_i4u1u1u1u1_S_r4r4r4r4__ p2;
    int32_t p3;
    int32_t p4;
    int32_t p5;
};
    
// TMP_TextProcessingStack`1
struct S_oi4oi4i4i4_
{
    Il2CppObject* p0;
    int32_t p1;
    Il2CppObject* p2;
    int32_t p3;
    int32_t p4;
    int32_t p5;
};
    
// Nullable`1
struct N_bb_
{
    bool hasValue;
    bool p1;
};
    
// MarkerList
struct S_oobb_
{
    Il2CppObject* p0;
    Il2CppObject* p1;
    bool p2;
    bool p3;
};
    
// Entry
struct S_i8i8o_
{
    int64_t p0;
    int64_t p1;
    Il2CppObject* p2;
};
    
// IntervalTreeNode
struct S_i8i4i4i4i4_
{
    int64_t p0;
    int32_t p1;
    int32_t p2;
    int32_t p3;
    int32_t p4;
};
    
// Playable
struct S_S_pu4__
{
    struct S_pu4_ p0;
};
    
// NotificationFlags
struct i2
{
    int16_t p0;
};
    
// NotificationEntry
struct S_r8obi2_
{
    double p0;
    Il2CppObject* p1;
    bool p2;
    int16_t p3;
};
    
// SemanticVersion
struct S_i4i4i4si4_
{
    int32_t p0;
    int32_t p1;
    int32_t p2;
    Il2CppString* p3;
    int32_t p4;
};
    
// CursorRect
struct S_S_r4r4r4r4_i4_
{
    struct S_r4r4r4r4_ p0;
    int32_t p1;
};
    
// UpdatedItem
struct S_sb_
{
    Il2CppString* p0;
    bool p1;
};
    
// Decimal
struct S_i4i4i4i4u8_
{
    int32_t p0;
    int32_t p1;
    int32_t p2;
    int32_t p3;
    uint64_t p4;
};
    
// PurgeFileTypeRequest
struct S_sS_u8__
{
    Il2CppString* p0;
    struct S_u8_ p1;
};
    
// Nullable`1
struct N_bi8_
{
    bool hasValue;
    int64_t p1;
};
    
// DateTimeOffset
struct S_S_u8_i2_
{
    struct S_u8_ p0;
    int16_t p1;
};
    
// Nullable`1
struct N_bS_S_u8_i2__
{
    bool hasValue;
    struct S_S_u8_i2_ p1;
};
    
// BranchRequest
struct S_i8s_
{
    int64_t p0;
    Il2CppString* p1;
};
    
// DirectoryConflictResolutionData
struct S_oooi4s_
{
    Il2CppObject* p0;
    Il2CppObject* p1;
    Il2CppObject* p2;
    int32_t p3;
    Il2CppString* p4;
};
    
// DownloadedSegment
struct S_S_u4u4_i8u8b_
{
    struct S_u4u4_ p0;
    int64_t p1;
    uint64_t p2;
    bool p3;
};
    
// Byte*
struct Pu1
{
    union
    {
        struct
        {
        };
        uint8_t __padding[1];
    };
};
    
// NamespaceEntry
struct S_si4i4o_
{
    Il2CppString* p0;
    int32_t p1;
    int32_t p2;
    Il2CppObject* p3;
};
    
// CapturedVariable
struct S_ssu1_
{
    Il2CppString* p0;
    Il2CppString* p1;
    uint8_t p2;
};
    
// LocalVariableEntry
struct S_i4si4_
{
    int32_t p0;
    Il2CppString* p1;
    int32_t p2;
};
    
// JsonPosition
struct S_i4i4sb_
{
    int32_t p0;
    int32_t p1;
    Il2CppString* p2;
    bool p3;
};
    
// BsonType
struct i1
{
    int8_t p0;
};
    
// RiderInfo
struct S_bssos_
{
    bool p0;
    Il2CppString* p1;
    Il2CppString* p2;
    Il2CppObject* p3;
    Il2CppString* p4;
};
    
// ΊΉΊΉΉΉΉΉΉΊΉΊΊΉΊΉΉΊΊΉΉΊΊΉΉΊΉΉΊΊΊΉΉΉΊΊΉΉΊΊΊΊΉΉΉΉΉ
struct S_S_r4r4r4_S_r4r4r4r4_S_r4r4r4__
{
    struct S_r4r4r4_ p0;
    struct S_r4r4r4r4_ p1;
    struct S_r4r4r4_ p2;
};
    
// ΉΉΊΉΊΉΊΉΉΉΊΉΊΉΊΊΉΉΊΊΉΊΉΊΊΉΊΉΉΉΉΉΉΊΊΊΉΊΊΊΉΊΊΉΉΉΊ
struct S_sS_S_r4r4r4_S_r4r4r4r4_S_r4r4r4___
{
    Il2CppString* p0;
    struct S_S_r4r4r4_S_r4r4r4r4_S_r4r4r4__ p1;
};
    
// ComponentProperty
struct S_oobsoobr4_
{
    Il2CppObject* p0;
    Il2CppObject* p1;
    bool p2;
    Il2CppString* p3;
    Il2CppObject* p4;
    Il2CppObject* p5;
    bool p6;
    float p7;
};
    
// Span`1
struct S_S_p_i4_
{
    struct S_p_ p0;
    int32_t p1;
};
    
// DebugScreenCapture
struct S_S_Pvi4i4i4S_pi4i4_i4_i4i4i4_
{
    struct S_Pvi4i4i4S_pi4i4_i4_ p0;
    int32_t p1;
    int32_t p2;
    int32_t p3;
};
    
// AsyncReadManagerRequestMetric
struct S_ssu8u8u8u8u4bi4i4i4i4r8r8r8_
{
    Il2CppString* p0;
    Il2CppString* p1;
    uint64_t p2;
    uint64_t p3;
    uint64_t p4;
    uint64_t p5;
    uint32_t p6;
    bool p7;
    int32_t p8;
    int32_t p9;
    int32_t p10;
    int32_t p11;
    double p12;
    double p13;
    double p14;
};
    
// DisplayInfo
struct S_u8i4i4S_u4u4_S_i4i4i4i4_s_
{
    uint64_t p0;
    int32_t p1;
    int32_t p2;
    struct S_u4u4_ p3;
    struct S_i4i4i4i4_ p4;
    Il2CppString* p5;
};
    
// ParticleCollisionEvent
struct S_S_r4r4r4_S_r4r4r4_S_r4r4r4_i4_
{
    struct S_r4r4r4_ p0;
    struct S_r4r4r4_ p1;
    struct S_r4r4r4_ p2;
    int32_t p3;
};
    
// ReadOnly
struct S_Pvi4S_pi4i4__
{
    void* p0;
    int32_t p1;
    struct S_pi4i4_ p2;
};
    
// VFXBatchedEffectInfo
struct S_ou4u4u4u4u4u4u8u8_
{
    Il2CppObject* p0;
    uint32_t p1;
    uint32_t p2;
    uint32_t p3;
    uint32_t p4;
    uint32_t p5;
    uint32_t p6;
    uint64_t p7;
    uint64_t p8;
};
    
// XRNodeState
struct S_i4i4S_r4r4r4_S_r4r4r4r4_S_r4r4r4_S_r4r4r4_S_r4r4r4_S_r4r4r4_i4u8_
{
    int32_t p0;
    int32_t p1;
    struct S_r4r4r4_ p2;
    struct S_r4r4r4r4_ p3;
    struct S_r4r4r4_ p4;
    struct S_r4r4r4_ p5;
    struct S_r4r4r4_ p6;
    struct S_r4r4r4_ p7;
    int32_t p8;
    uint64_t p9;
};
    
// BuildPlayerOptions
struct S_ossi4i4i4i4o_
{
    Il2CppObject* p0;
    Il2CppString* p1;
    Il2CppString* p2;
    int32_t p3;
    int32_t p4;
    int32_t p5;
    int32_t p6;
    Il2CppObject* p7;
};
    
// VirtualMachineInformation
struct S_i4i4i4i4i4i4_
{
    int32_t p0;
    int32_t p1;
    int32_t p2;
    int32_t p3;
    int32_t p4;
    int32_t p5;
};
    
// SubSceneInfo
struct S_oS_i4_osS_i4u1u1u1u1__
{
    Il2CppObject* p0;
    struct S_i4_ p1;
    Il2CppObject* p2;
    Il2CppString* p3;
    struct S_i4u1u1u1u1_ p4;
};
    
// AssetState
struct S_S_u4u4u4u4_S_u8u8__
{
    struct S_u4u4u4u4_ p0;
    struct S_u8u8_ p1;
};
    
// ShaderSnippetData
struct S_i4i4sS_u4u4__
{
    int32_t p0;
    int32_t p1;
    Il2CppString* p2;
    struct S_u4u4_ p3;
};
    
// RenderTextureDescriptor
struct S_i4i4i4i4i4i4i4i4i4i4i4i4i4_
{
    int32_t p0;
    int32_t p1;
    int32_t p2;
    int32_t p3;
    int32_t p4;
    int32_t p5;
    int32_t p6;
    int32_t p7;
    int32_t p8;
    int32_t p9;
    int32_t p10;
    int32_t p11;
    int32_t p12;
};
    
// <m_CullingPlanes>e__FixedBuffer
struct S_u1_
{
    uint8_t p0;
};
    
// CoreCameraValues
struct S_i4u4i4_
{
    int32_t p0;
    uint32_t p1;
    int32_t p2;
};
    
// CameraProperties
struct S_S_r4r4r4r4_S_r4r4r4_r4r4r4r4r4S_r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4_S_r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4_S_r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4_S_r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4_S_r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4_S_r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4_S_r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4_S_r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4_S_r4r4r4_S_r4r4r4_S_r4r4r4_S_r4r4r4_S_r4r4r4_r4u4S_u1_S_u1_r4S_r4r4r4_S_r4_i4S_i4u4i4_u4i4i4b_
{
    struct S_r4r4r4r4_ p0;
    struct S_r4r4r4_ p1;
    float p2;
    float p3;
    float p4;
    float p5;
    float p6;
    struct S_r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4_ p7;
    struct S_r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4_ p8;
    struct S_r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4_ p9;
    struct S_r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4_ p10;
    struct S_r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4_ p11;
    struct S_r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4_ p12;
    struct S_r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4_ p13;
    struct S_r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4_ p14;
    struct S_r4r4r4_ p15;
    struct S_r4r4r4_ p16;
    struct S_r4r4r4_ p17;
    struct S_r4r4r4_ p18;
    struct S_r4r4r4_ p19;
    float p20;
    uint32_t p21;
    struct S_u1_ p22;
    struct S_u1_ p23;
    float p24;
    struct S_r4r4r4_ p25;
    struct S_r4_ p26;
    int32_t p27;
    struct S_i4u4i4_ p28;
    uint32_t p29;
    int32_t p30;
    int32_t p31;
    bool p32;
};
    
// ScriptableCullingParameters
struct S_S_i4S_r4r4r4_r4r4i4_S_u1_i4u4u8u8S_r4_i4S_r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4_S_r4r4r4_r4r4i4i4S_S_r4r4r4r4_S_r4r4r4_r4r4r4r4r4S_r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4_S_r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4_S_r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4_S_r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4_S_r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4_S_r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4_S_r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4_S_r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4_S_r4r4r4_S_r4r4r4_S_r4r4r4_S_r4r4r4_S_r4r4r4_r4u4S_u1_S_u1_r4S_r4r4r4_S_r4_i4S_i4u4i4_u4i4i4b_r4i4S_r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4_S_r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4_r4i4bi4_
{
    struct S_i4S_r4r4r4_r4r4i4_ p0;
    struct S_u1_ p1;
    int32_t p2;
    uint32_t p3;
    uint64_t p4;
    uint64_t p5;
    struct S_r4_ p6;
    int32_t p7;
    struct S_r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4_ p8;
    struct S_r4r4r4_ p9;
    float p10;
    float p11;
    int32_t p12;
    int32_t p13;
    struct S_S_r4r4r4r4_S_r4r4r4_r4r4r4r4r4S_r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4_S_r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4_S_r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4_S_r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4_S_r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4_S_r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4_S_r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4_S_r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4_S_r4r4r4_S_r4r4r4_S_r4r4r4_S_r4r4r4_S_r4r4r4_r4u4S_u1_S_u1_r4S_r4r4r4_S_r4_i4S_i4u4i4_u4i4i4b_ p14;
    float p15;
    int32_t p16;
    struct S_r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4_ p17;
    struct S_r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4_ p18;
    float p19;
    int32_t p20;
    bool p21;
    int32_t p22;
};
    
// XRRenderPass
struct S_pi4S_i4i4i4pi4i4i4_S_i4i4i4i4i4i4i4i4i4i4i4i4i4_i4i4bS_i4i4i4pi4i4i4_S_i4i4i4i4i4i4i4i4i4i4i4i4i4_bi4p_
{
    void* p0;
    int32_t p1;
    struct S_i4i4i4pi4i4i4_ p2;
    struct S_i4i4i4i4i4i4i4i4i4i4i4i4i4_ p3;
    int32_t p4;
    int32_t p5;
    bool p6;
    struct S_i4i4i4pi4i4i4_ p7;
    struct S_i4i4i4i4i4i4i4i4i4i4i4i4i4_ p8;
    bool p9;
    int32_t p10;
    void* p11;
};
    
// XRPassCreateInfo
struct S_S_i4i4i4pi4i4i4_S_i4i4i4i4i4i4i4i4i4i4i4i4i4_S_i4i4i4pi4i4i4_S_i4i4i4i4i4i4i4i4i4i4i4i4i4_S_S_i4S_r4r4r4_r4r4i4_S_u1_i4u4u8u8S_r4_i4S_r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4_S_r4r4r4_r4r4i4i4S_S_r4r4r4r4_S_r4r4r4_r4r4r4r4r4S_r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4_S_r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4_S_r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4_S_r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4_S_r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4_S_r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4_S_r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4_S_r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4_S_r4r4r4_S_r4r4r4_S_r4r4r4_S_r4r4r4_S_r4r4r4_r4u4S_u1_S_u1_r4S_r4r4r4_S_r4_i4S_i4u4i4_u4i4i4b_r4i4S_r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4_S_r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4_r4i4bi4_or4i4i4pi4i4bbS_pi4S_i4i4i4pi4i4i4_S_i4i4i4i4i4i4i4i4i4i4i4i4i4_i4i4bS_i4i4i4pi4i4i4_S_i4i4i4i4i4i4i4i4i4i4i4i4i4_bi4p__
{
    struct S_i4i4i4pi4i4i4_ p0;
    struct S_i4i4i4i4i4i4i4i4i4i4i4i4i4_ p1;
    struct S_i4i4i4pi4i4i4_ p2;
    struct S_i4i4i4i4i4i4i4i4i4i4i4i4i4_ p3;
    struct S_S_i4S_r4r4r4_r4r4i4_S_u1_i4u4u8u8S_r4_i4S_r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4_S_r4r4r4_r4r4i4i4S_S_r4r4r4r4_S_r4r4r4_r4r4r4r4r4S_r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4_S_r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4_S_r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4_S_r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4_S_r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4_S_r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4_S_r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4_S_r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4_S_r4r4r4_S_r4r4r4_S_r4r4r4_S_r4r4r4_S_r4r4r4_r4u4S_u1_S_u1_r4S_r4r4r4_S_r4_i4S_i4u4i4_u4i4i4b_r4i4S_r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4_S_r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4_r4i4bi4_ p4;
    Il2CppObject* p5;
    float p6;
    int32_t p7;
    int32_t p8;
    void* p9;
    int32_t p10;
    int32_t p11;
    bool p12;
    bool p13;
    struct S_pi4S_i4i4i4pi4i4i4_S_i4i4i4i4i4i4i4i4i4i4i4i4i4_i4i4bS_i4i4i4pi4i4i4_S_i4i4i4i4i4i4i4i4i4i4i4i4i4_bi4p_ p14;
};
    
// EventHook
struct S_sOO_
{
    Il2CppString* p0;
    Il2CppObject* p1;
    Il2CppObject* p2;
};
    
// fsVersionedType
struct S_oso_
{
    Il2CppObject* p0;
    Il2CppString* p1;
    Il2CppObject* p2;
};
    
// RawRepository
struct S_S_u4u4_o_
{
    struct S_u4u4_ p0;
    Il2CppObject* p1;
};
    
// PathOptions
struct S_i4i4i4i4bS_r4r4r4_or4bS_r4r4r4r4_bobbbS_r4r4r4r4_r4bb_
{
    int32_t p0;
    int32_t p1;
    int32_t p2;
    int32_t p3;
    bool p4;
    struct S_r4r4r4_ p5;
    Il2CppObject* p6;
    float p7;
    bool p8;
    struct S_r4r4r4r4_ p9;
    bool p10;
    Il2CppObject* p11;
    bool p12;
    bool p13;
    bool p14;
    struct S_r4r4r4r4_ p15;
    float p16;
    bool p17;
    bool p18;
};
    
// Touch
struct S_oS_oi4u4__
{
    Il2CppObject* p0;
    struct S_oi4u4_ p1;
};
    
// Navigation
struct S_i4boooo_
{
    int32_t p0;
    bool p1;
    Il2CppObject* p2;
    Il2CppObject* p3;
    Il2CppObject* p4;
    Il2CppObject* p5;
};
    
// ColorBlock
struct S_S_r4r4r4r4_S_r4r4r4r4_S_r4r4r4r4_S_r4r4r4r4_S_r4r4r4r4_r4r4_
{
    struct S_r4r4r4r4_ p0;
    struct S_r4r4r4r4_ p1;
    struct S_r4r4r4r4_ p2;
    struct S_r4r4r4r4_ p3;
    struct S_r4r4r4r4_ p4;
    float p5;
    float p6;
};
    
// Nullable`1
struct N_bS_u8__
{
    bool hasValue;
    struct S_u8_ p1;
};
    
// VersionInfo
struct S_Oi8_
{
    Il2CppObject* p0;
    int64_t p1;
};
    
// MatchResultInfo
struct S_bi4i4_
{
    bool p0;
    int32_t p1;
    int32_t p2;
};
    
// State
struct S_oS_i4_i4r4r4_
{
    Il2CppObject* p0;
    struct S_i4_ p1;
    int32_t p2;
    float p3;
    float p4;
};
    
// Alloc
struct S_u4u4Ob_
{
    uint32_t p0;
    uint32_t p1;
    Il2CppObject* p2;
    bool p3;
};
    
// AllocToFree
struct S_S_u4u4Ob_ob_
{
    struct S_u4u4Ob_ p0;
    Il2CppObject* p1;
    bool p2;
};
    
// AllocToUpdate
struct S_u4u4oS_u4u4Ob_S_u4u4Ob_ob_
{
    uint32_t p0;
    uint32_t p1;
    Il2CppObject* p2;
    struct S_u4u4Ob_ p3;
    struct S_u4u4Ob_ p4;
    Il2CppObject* p5;
    bool p6;
};
    
// Page
struct S_u2u2i4_
{
    uint16_t p0;
    uint16_t p1;
    int32_t p2;
};
    
// SearchProposition
struct S_sssi4i4osS_r4r4r4r4_oi4O_
{
    Il2CppString* p0;
    Il2CppString* p1;
    Il2CppString* p2;
    int32_t p3;
    int32_t p4;
    Il2CppObject* p5;
    Il2CppString* p6;
    struct S_r4r4r4r4_ p7;
    Il2CppObject* p8;
    int32_t p9;
    Il2CppObject* p10;
};
    
// EvalHandlerArgs
struct S_sObi4ooO_
{
    Il2CppString* p0;
    Il2CppObject* p1;
    bool p2;
    int32_t p3;
    Il2CppObject* p4;
    Il2CppObject* p5;
    Il2CppObject* p6;
};
    
// unitytls_errorstate
struct S_u4u4u8_
{
    uint32_t p0;
    uint32_t p1;
    uint64_t p2;
};
    
// Void
struct v
{
    union
    {
        struct
        {
        };
        uint8_t __padding[1];
    };
};
    
// unitytls_tlsctx_callbacks
struct S_ooPv_
{
    Il2CppObject* p0;
    Il2CppObject* p1;
    void* p2;
};
    
// SerializedLocation
struct S_su8u8_
{
    Il2CppString* p0;
    uint64_t p1;
    uint64_t p2;
};
    
// ObjectSerializedInfo
struct S_S_S_u4u4u4u4_i8i4s_S_su8u8_S_su8u8__
{
    struct S_S_u4u4u4u4_i8i4s_ p0;
    struct S_su8u8_ p1;
    struct S_su8u8_ p2;
};
    
// BindingOverrideJson
struct S_sssss_
{
    Il2CppString* p0;
    Il2CppString* p1;
    Il2CppString* p2;
    Il2CppString* p3;
    Il2CppString* p4;
};
    
// Volume
struct S_S_r4r4r4_S_r4r4r4_S_r4r4r4_S_r4r4r4_r4r4_
{
    struct S_r4r4r4_ p0;
    struct S_r4r4r4_ p1;
    struct S_r4r4r4_ p2;
    struct S_r4r4r4_ p3;
    float p4;
    float p5;
};
    
// ValueTuple`3
struct S_S_S_r4r4r4_S_r4r4r4_S_r4r4r4_S_r4r4r4_r4r4_S_S_r4r4r4_S_r4r4r4__o_
{
    struct S_S_r4r4r4_S_r4r4r4_S_r4r4r4_S_r4r4r4_r4r4_ p0;
    struct S_S_r4r4r4_S_r4r4r4__ p1;
    Il2CppObject* p2;
};
    
// BakingCell
struct S_S_i4i4i4_i4oooooooooooi4i4i4ooS_S_r4r4r4_S_r4r4r4___
{
    struct S_i4i4i4_ p0;
    int32_t p1;
    Il2CppObject* p2;
    Il2CppObject* p3;
    Il2CppObject* p4;
    Il2CppObject* p5;
    Il2CppObject* p6;
    Il2CppObject* p7;
    Il2CppObject* p8;
    Il2CppObject* p9;
    Il2CppObject* p10;
    Il2CppObject* p11;
    Il2CppObject* p12;
    int32_t p13;
    int32_t p14;
    int32_t p15;
    Il2CppObject* p16;
    Il2CppObject* p17;
    struct S_S_r4r4r4_S_r4r4r4__ p18;
};
    
// ValueTuple`2
struct S_oS_S_r4r4r4_S_r4r4r4___
{
    Il2CppObject* p0;
    struct S_S_r4r4r4_S_r4r4r4__ p1;
};
    
// ValueTuple`2
struct S_S_r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4_S_S_r4r4r4_S_r4r4r4___
{
    struct S_r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4_ p0;
    struct S_S_r4r4r4_S_r4r4r4__ p1;
};
    
// TerrainContributor
struct S_oS_S_r4r4r4_S_r4r4r4__S_S_r4r4r4_S_r4r4r4__o_
{
    Il2CppObject* p0;
    struct S_S_r4r4r4_S_r4r4r4__ p1;
    struct S_S_r4r4r4_S_r4r4r4__ p2;
    Il2CppObject* p3;
};
    
// ValueTuple`3
struct S_oS_S_r4r4r4_S_r4r4r4_S_r4r4r4_S_r4r4r4_r4r4_S_S_r4r4r4_S_r4r4r4___
{
    Il2CppObject* p0;
    struct S_S_r4r4r4_S_r4r4r4_S_r4r4r4_S_r4r4r4_r4r4_ p1;
    struct S_S_r4r4r4_S_r4r4r4__ p2;
};
    
// OccluderSubviewUpdate
struct S_i4i4S_i4i4_S_r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4_S_r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4_S_r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4_S_r4r4r4__
{
    int32_t p0;
    int32_t p1;
    struct S_i4i4_ p2;
    struct S_r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4_ p3;
    struct S_r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4_ p4;
    struct S_r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4_ p5;
    struct S_r4r4r4_ p6;
};
    
// DelegateInfo
struct S_i4oor4_
{
    int32_t p0;
    Il2CppObject* p1;
    Il2CppObject* p2;
    float p3;
};
    
// FunctionPair
struct S_ssi4_
{
    Il2CppString* p0;
    Il2CppString* p1;
    int32_t p2;
};
    
// Frame
struct S_sS_r4r4r4r4_bbS_r4r4r4r4_S_r4r4_S_r4r4__
{
    Il2CppString* p0;
    struct S_r4r4r4r4_ p1;
    bool p2;
    bool p3;
    struct S_r4r4r4r4_ p4;
    struct S_r4r4_ p5;
    struct S_r4r4_ p6;
};
    
// Entry
struct S_Oi8i8S_r4r4r4r4__
{
    Il2CppObject* p0;
    int64_t p1;
    int64_t p2;
    struct S_r4r4r4r4_ p3;
};
    
// Entry
struct S_i8i8S_Oi8i8S_r4r4r4r4___
{
    int64_t p0;
    int64_t p1;
    struct S_Oi8i8S_r4r4r4r4__ p2;
};
    
// MarkerOverlay
struct S_oS_r4r4r4r4_bbo_
{
    Il2CppObject* p0;
    struct S_r4r4r4r4_ p1;
    bool p2;
    bool p3;
    Il2CppObject* p4;
};
    
// ClipBlends
struct S_i4S_r4r4r4r4_i4S_r4r4r4r4__
{
    int32_t p0;
    struct S_r4r4r4r4_ p1;
    int32_t p2;
    struct S_r4r4r4r4_ p3;
};
    
// ClipDrawOptions
struct S_obsbsS_r4r4r4r4__
{
    Il2CppObject* p0;
    bool p1;
    Il2CppString* p2;
    bool p3;
    Il2CppString* p4;
    struct S_r4r4r4r4_ p5;
};
    
// ClipDrawData
struct S_oS_r4r4r4r4_S_r4r4r4r4_S_r4r4r4r4_S_r4r4r4r4_sbbr8r8ooobbi4oS_i4S_r4r4r4r4_i4S_r4r4r4r4__S_obsbsS_r4r4r4r4__o_
{
    Il2CppObject* p0;
    struct S_r4r4r4r4_ p1;
    struct S_r4r4r4r4_ p2;
    struct S_r4r4r4r4_ p3;
    struct S_r4r4r4r4_ p4;
    Il2CppString* p5;
    bool p6;
    bool p7;
    double p8;
    double p9;
    Il2CppObject* p10;
    Il2CppObject* p11;
    Il2CppObject* p12;
    bool p13;
    bool p14;
    int32_t p15;
    Il2CppObject* p16;
    struct S_i4S_r4r4r4r4_i4S_r4r4r4r4__ p17;
    struct S_obsbsS_r4r4r4r4__ p18;
    Il2CppObject* p19;
};
    
// OverlayDrawer
struct S_i4S_r4r4r4r4_soS_r4r4r4r4_oo_
{
    int32_t p0;
    struct S_r4r4r4r4_ p1;
    Il2CppString* p2;
    Il2CppObject* p3;
    struct S_r4r4r4r4_ p4;
    Il2CppObject* p5;
    Il2CppObject* p6;
};
    
// KeyBase
struct S_i4i2_
{
    int32_t p0;
    int16_t p1;
};
    
// KeyFloat
struct S_r4r4r4r4r4i4_
{
    float p0;
    float p1;
    float p2;
    float p3;
    float p4;
    int32_t p5;
};
    
// Key`1
struct S_S_i4i2_S_r4r4r4r4r4i4__
{
    struct S_i4i2_ p0;
    struct S_r4r4r4r4r4i4_ p1;
};
    
// Key`1
struct S_S_i4i2_S_o__
{
    struct S_i4i2_ p0;
    struct S_o_ p1;
};
    
// ΉΊΊΉΊΊΊΊΉΊΉΉΊΉΉΊΉΊΊΉΊΉΊΉΉΊΊΉΉΉΉΊΊΉΊΉΉΊΉΉΊΊΉΊΊΊΊ
struct S_sS_r4r4r4_S_r4r4r4r4__
{
    Il2CppString* p0;
    struct S_r4r4r4_ p1;
    struct S_r4r4r4r4_ p2;
};
    
// ΉΊΉΉΊΉΊΊΉΊΉΊΉΊΊΊΉΉΉΊΊΉΊΉΉΉΉΊΊΉΊΉΊΊΊΉΉΉΉΊΊΉΉΊΉΉΉ
struct S_S_r4r4r4_S_r4r4r4r4__
{
    struct S_r4r4r4_ p0;
    struct S_r4r4r4r4_ p1;
};
    
// ΊΉΊΊΊΊΉΉΊΊΊΊΉΊΉΉΉΉΉΊΉΉΉΊΊΉΊΊΊΊΊΊΊΉΉΊΊΉΉΊΊΉΊΊΊΊΊ
struct S_oS_S_r4r4r4_S_r4r4r4r4__S_S_r4r4r4_S_r4r4r4r4__S_S_r4r4r4_S_r4r4r4r4__S_S_r4r4r4_S_r4r4r4r4__S_S_r4r4r4_S_r4r4r4r4___
{
    Il2CppObject* p0;
    struct S_S_r4r4r4_S_r4r4r4r4__ p1;
    struct S_S_r4r4r4_S_r4r4r4r4__ p2;
    struct S_S_r4r4r4_S_r4r4r4r4__ p3;
    struct S_S_r4r4r4_S_r4r4r4r4__ p4;
    struct S_S_r4r4r4_S_r4r4r4r4__ p5;
};
    
// ΊΉΊΊΊΊΉΊΊΊΊΉΉΉΊΊΊΉΉΊΉΉΉΊΉΊΉΊΉΉΊΊΊΉΉΉΊΉΊΊΊΊΊΉΊΊΊ
struct S_i4bbbss_
{
    int32_t p0;
    bool p1;
    bool p2;
    bool p3;
    Il2CppString* p4;
    Il2CppString* p5;
};
    
// Color2
struct S_S_r4r4r4r4_S_r4r4r4r4__
{
    struct S_r4r4r4r4_ p0;
    struct S_r4r4r4r4_ p1;
};
    
// Nullable`1
struct N_bS_i4i4__
{
    bool hasValue;
    struct S_i4i4_ p1;
};
    
// ActiveBuildStatus
struct S_sN_bS_i4i4___
{
    Il2CppString* p0;
    struct N_bS_i4i4__ p1;
};
    
// ParseResult`1
struct S_bo_
{
    bool p0;
    Il2CppObject* p1;
};
    
// SocketReceiveMessageFromResult
struct S_i4i4oS_oi4__
{
    int32_t p0;
    int32_t p1;
    Il2CppObject* p2;
    struct S_oi4_ p3;
};
    
// ValueTuple`5
struct S_obboo_
{
    Il2CppObject* p0;
    bool p1;
    bool p2;
    Il2CppObject* p3;
    Il2CppObject* p4;
};
    
// ValueWebSocketReceiveResult
struct S_u4i4_
{
    uint32_t p0;
    int32_t p1;
};
    
// DownloadStatus
struct S_i8i8b_
{
    int64_t p0;
    int64_t p1;
    bool p2;
};
    
// SceneInstance
struct S_S_i4_bo_
{
    struct S_i4_ p0;
    bool p1;
    Il2CppObject* p2;
};
    
// UniTask
struct S_oi2_
{
    Il2CppObject* p0;
    int16_t p1;
};
    
// InputAxis&
struct PS_r4r4S_r4r4_bS_br4r4_i4S_r4br4r4__
{
    union
    {
        struct
        {
        };
        uint8_t __padding[1];
    };
};
    
// InlinedArray`1
struct S_i4S_ss_o_
{
    int32_t p0;
    struct S_ss_ p1;
    Il2CppObject* p2;
};
    
// Nullable`1
struct N_bS_i4i4i4i4u8__
{
    bool hasValue;
    struct S_i4i4i4i4u8_ p1;
};
    
// UniTask`1
struct S_ooi2_
{
    Il2CppObject* p0;
    Il2CppObject* p1;
    int16_t p2;
};
    
// UniTask`1
struct S_obi2_
{
    Il2CppObject* p0;
    bool p1;
    int16_t p2;
};
    
// UniTask`1
struct S_oi4i2_
{
    Il2CppObject* p0;
    int32_t p1;
    int16_t p2;
};
    
// UniTask`1
struct S_oi8i2_
{
    Il2CppObject* p0;
    int64_t p1;
    int16_t p2;
};
    
// UniTask`1
struct S_or4i2_
{
    Il2CppObject* p0;
    float p1;
    int16_t p2;
};
    
// UniTask`1
struct S_or8i2_
{
    Il2CppObject* p0;
    double p1;
    int16_t p2;
};
    
// UniTask`1
struct S_oS_i4i4i4i4u8_i2_
{
    Il2CppObject* p0;
    struct S_i4i4i4i4u8_ p1;
    int16_t p2;
};
    
// UniTask`1
struct S_oN_bi4_i2_
{
    Il2CppObject* p0;
    struct N_bi4_ p1;
    int16_t p2;
};
    
// UniTask`1
struct S_oN_bi8_i2_
{
    Il2CppObject* p0;
    struct N_bi8_ p1;
    int16_t p2;
};
    
// UniTask`1
struct S_oN_br4_i2_
{
    Il2CppObject* p0;
    struct N_br4_ p1;
    int16_t p2;
};
    
// UniTask`1
struct S_oN_br8_i2_
{
    Il2CppObject* p0;
    struct N_br8_ p1;
    int16_t p2;
};
    
// UniTask`1
struct S_oN_bS_i4i4i4i4u8__i2_
{
    Il2CppObject* p0;
    struct N_bS_i4i4i4i4u8__ p1;
    int16_t p2;
};
    
// Nullable`1
struct N_bS_Oi4__
{
    bool hasValue;
    struct S_Oi4_ p1;
};
    
// unitytls_key*
struct PS__
{
    union
    {
        struct
        {
        };
        uint8_t __padding[1];
    };
};
    
// Char*
struct Pc
{
    union
    {
        struct
        {
        };
        uint8_t __padding[1];
    };
};
    

}

