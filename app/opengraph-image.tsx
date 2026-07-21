import { ImageResponse } from "next/og";

// Generated 1200x630 social-share card. Replaces the old portrait Profile.png
// OG image, which cropped badly into the 1.91:1 card slot. Uses Satori's
// default font (no external font fetch) for build robustness.
// Edge runtime: @vercel/og fails to prerender on the Node runtime during
// `next build` (Invalid URL in fileURLToPath); edge avoids that path.
export const runtime = "edge";

export const alt = "Themba Ngobeni — Java Developer at FNB";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0a0a0a",
          padding: "72px 80px",
          position: "relative",
        }}
      >
        {/* Top gold hairline */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 4,
            background: "linear-gradient(90deg, #c8a05a 0%, #b86840 100%)",
          }}
        />

        {/* Faint oversized monogram, top-right */}
        <div
          style={{
            position: "absolute",
            top: 40,
            right: 70,
            fontSize: 360,
            fontWeight: 700,
            color: "rgba(200,160,90,0.07)",
            lineHeight: 1,
          }}
        >
          TN
        </div>

        {/* Eyebrow */}
        <div
          style={{
            display: "flex",
            fontSize: 24,
            letterSpacing: 8,
            textTransform: "uppercase",
            color: "#c8a05a",
          }}
        >
          Portfolio
        </div>

        {/* Name + role */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 108,
              fontWeight: 700,
              color: "#ede9e1",
              letterSpacing: -3,
              lineHeight: 1.05,
            }}
          >
            Themba Ngobeni
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 24,
              fontSize: 36,
              color: "#8f8a82",
              maxWidth: 900,
            }}
          >
            Java Developer at FNB — scalable banking microservices &amp; backend
            architecture.
          </div>
        </div>

        {/* Footer row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 24,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#7d786f",
          }}
        >
          <div style={{ display: "flex" }}>thembangobeni.vercel.app</div>
          <div style={{ display: "flex", color: "#c8a05a" }}>
            Johannesburg, ZA
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
