import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "RapidTags - AI-Powered Hashtag Generator";
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
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#252525",
          backgroundImage:
            "radial-gradient(circle at 25% 25%, #404040 0%, transparent 50%), radial-gradient(circle at 75% 75%, #404040 0%, transparent 50%)",
        }}
      >
        {/* Main Content Container */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "80px",
            textAlign: "center",
          }}
        >
          {/* Logo */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "120px",
              height: "120px",
              backgroundColor: "#ffffff",
              borderRadius: "24px",
              marginBottom: "40px",
              boxShadow: "0 0 40px rgba(255, 255, 255, 0.1)",
            }}
          >
            <div
              style={{
                width: "60px",
                height: "60px",
                color: "#000000",
              }}
            >
              #
            </div>
          </div>

          {/* Brand Name */}
          <h1
            style={{
              fontSize: "72px",
              fontWeight: "700",
              color: "#ffffff",
              margin: "0 0 20px 0",
              letterSpacing: "-0.02em",
            }}
          >
            RapidTags
          </h1>

          {/* Tagline */}
          <p
            style={{
              fontSize: "32px",
              color: "#a1a1aa",
              margin: "0 0 40px 0",
              fontWeight: "400",
            }}
          >
            AI-Powered Hashtag Generator
          </p>

          {/* Sample Hashtags */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "16px",
              justifyContent: "center",
              maxWidth: "800px",
            }}
          >
            {[
              "#AI",
              "#SocialMedia",
              "#Marketing",
              "#Instagram",
              "#Growth",
              "#Content",
            ].map((tag) => (
              <span
                key={tag}
                style={{
                  padding: "12px 24px",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  borderRadius: "50px",
                  color: "#ffffff",
                  fontSize: "24px",
                  fontWeight: "500",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Text */}
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            fontSize: "20px",
            color: "#71717a",
          }}
        >
          Generate perfect hashtags for all social media platforms
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
