import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "SpinPickOnline - Free Random Picker Wheel Online";
export const size = {
    width: 1200,
    height: 630,
};
export const contentType = "image/png";

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "linear-gradient(135deg, #1e3a5f 0%, #3b1f6e 50%, #6b21a8 100%)",
                    fontFamily: "Inter, sans-serif",
                    position: "relative",
                    overflow: "hidden",
                }}
            >
                {/* Background decoration circles */}
                <div
                    style={{
                        position: "absolute",
                        top: "-100px",
                        right: "-100px",
                        width: "400px",
                        height: "400px",
                        borderRadius: "50%",
                        background: "rgba(139, 92, 246, 0.15)",
                        display: "flex",
                    }}
                />
                <div
                    style={{
                        position: "absolute",
                        bottom: "-80px",
                        left: "-80px",
                        width: "300px",
                        height: "300px",
                        borderRadius: "50%",
                        background: "rgba(59, 130, 246, 0.15)",
                        display: "flex",
                    }}
                />

                {/* Wheel illustration */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginRight: "60px",
                        position: "relative",
                    }}
                >
                    {/* Outer ring */}
                    <div
                        style={{
                            width: "280px",
                            height: "280px",
                            borderRadius: "50%",
                            background: "conic-gradient(from 0deg, #ef4444, #f97316, #eab308, #22c55e, #3b82f6, #8b5cf6, #ec4899, #ef4444)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            boxShadow: "0 0 60px rgba(139, 92, 246, 0.4), 0 0 120px rgba(59, 130, 246, 0.2)",
                        }}
                    >
                        {/* Inner circle */}
                        <div
                            style={{
                                width: "80px",
                                height: "80px",
                                borderRadius: "50%",
                                background: "linear-gradient(135deg, #ffffff, #f0f0f0)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
                            }}
                        >
                            <div
                                style={{
                                    fontSize: "28px",
                                    display: "flex",
                                }}
                            >
                                🎯
                            </div>
                        </div>
                    </div>

                    {/* Pointer */}
                    <div
                        style={{
                            position: "absolute",
                            top: "-10px",
                            left: "50%",
                            transform: "translateX(-50%)",
                            width: "0",
                            height: "0",
                            borderLeft: "15px solid transparent",
                            borderRight: "15px solid transparent",
                            borderTop: "25px solid #ffffff",
                            display: "flex",
                            filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.3))",
                        }}
                    />
                </div>

                {/* Text content */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        maxWidth: "550px",
                    }}
                >
                    <div
                        style={{
                            fontSize: "56px",
                            fontWeight: 800,
                            color: "#ffffff",
                            lineHeight: 1.1,
                            marginBottom: "16px",
                            display: "flex",
                        }}
                    >
                        SpinPickOnline
                    </div>
                    <div
                        style={{
                            fontSize: "28px",
                            fontWeight: 500,
                            color: "rgba(255, 255, 255, 0.85)",
                            lineHeight: 1.4,
                            marginBottom: "24px",
                            display: "flex",
                        }}
                    >
                        Free Random Picker Wheel
                    </div>
                    <div
                        style={{
                            display: "flex",
                            gap: "12px",
                        }}
                    >
                        {["🎲 Fair", "⚡ Fast", "📱 Mobile", "🔒 Private"].map(
                            (tag) => (
                                <div
                                    key={tag}
                                    style={{
                                        background: "rgba(255, 255, 255, 0.15)",
                                        border: "1px solid rgba(255, 255, 255, 0.25)",
                                        borderRadius: "20px",
                                        padding: "6px 16px",
                                        fontSize: "16px",
                                        color: "#ffffff",
                                        display: "flex",
                                    }}
                                >
                                    {tag}
                                </div>
                            )
                        )}
                    </div>
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}
