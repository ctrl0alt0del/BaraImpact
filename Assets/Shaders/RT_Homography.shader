Shader "Hidden/RT_Homography"
{
    Properties
    {
        _MainTex ("Source", 2D) = "white" {}   // ← keep only the texture
    }

    SubShader
    {
        Tags { "RenderType"="Opaque" "Queue"="Overlay" }
        Cull Off ZWrite Off ZTest Always

        Pass
        {
            CGPROGRAM
            #pragma vertex Vert
            #pragma fragment Frag
            #include "UnityCG.cginc"

            sampler2D   _MainTex;
            float4x4    _H;                     // the homography you upload

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

            v2f Vert (appdata v)
            {
                v2f o;
                o.pos = UnityObjectToClipPos(v.vertex);
                o.uv  = v.uv;
                return o;
            }

            fixed4 Frag (v2f i) : SV_Target
            {
                float4 p  = float4(i.uv, 0.0, 1.0);
                float3 q  = mul(_H, p).xyz;      // (x', y', w)
                float  w  = max(abs(q.z), 1e-6); // avoid div-by-0
                float2 uv = q.xy / w;

                if (any(uv < 0.0) || any(uv > 1.0))
                    discard;

                return tex2D(_MainTex, uv);
            }
            ENDCG
        }
    }
    FallBack Off
}
