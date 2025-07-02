Shader "Unlit/RT_Transparent_Overlay"
{
    Properties
    {
        _MainTex ("Texture", 2D) = "white" {}   // built-in reference
        _BaseMap("BaseMap", 2D) = "white" {}    // URP reference
    }

    SubShader     // ----------- URP first (if running in URP) ----------
    {
        Tags { "RenderPipeline"="UniversalPipeline"
               "Queue"="Overlay"
               "RenderType"="Transparent"
               "IgnoreProjector"="True"
               "PreviewType"="Plane" }

        Pass
        {
            Name "Overlay"
            Tags { "LightMode" = "UniversalForward" }

            Blend      SrcAlpha OneMinusSrcAlpha
            ZWrite     Off
            ZTest      Always
            Cull       Off

            HLSLPROGRAM
            #pragma vertex vert
            #pragma fragment frag
            #include "Packages/com.unity.render-pipelines.universal/ShaderLibrary/Core.hlsl"

            TEXTURE2D(_BaseMap);      SAMPLER(sampler_BaseMap);

            struct Attributes
            {
                float4 positionOS : POSITION;
                float2 uv         : TEXCOORD0;
            };

            struct Varyings
            {
                float4 positionHCS : SV_POSITION;
                float2 uv          : TEXCOORD0;
            };

            Varyings vert (Attributes v)
            {
                Varyings o;
                o.positionHCS = TransformObjectToHClip(v.positionOS);
                o.uv          = v.uv;
                return o;
            }

            half4 frag (Varyings i) : SV_Target
            {
                return SAMPLE_TEXTURE2D(_BaseMap, sampler_BaseMap, i.uv);
            }
            ENDHLSL
        }
    }

    SubShader     // ----------- built-in fallback ----------------------
    {
        Tags { "Queue"="Overlay"
               "RenderType"="Transparent"
               "IgnoreProjector"="True"
               "PreviewType"="Plane" }

        LOD 100

        Pass
        {
            Blend      SrcAlpha OneMinusSrcAlpha
            ZWrite     Off
            ZTest      Always
            Cull       Off

            CGPROGRAM
            #pragma vertex vert
            #pragma fragment frag
            #include "UnityCG.cginc"

            sampler2D _MainTex;
            float4    _MainTex_ST;

            struct appdata
            {
                float4 vertex : POSITION;
                float2 uv     : TEXCOORD0;
            };

            struct v2f
            {
                float4 pos : SV_POSITION;
                float2 uv  : TEXCOORD0;
            };

            v2f vert (appdata v)
            {
                v2f o;
                o.pos = UnityObjectToClipPos(v.vertex);
                o.uv  = TRANSFORM_TEX(v.uv, _MainTex);
                return o;
            }

            fixed4 frag (v2f i) : SV_Target
            {
                return tex2D(_MainTex, i.uv);
            }
            ENDCG
        }
    }
}
