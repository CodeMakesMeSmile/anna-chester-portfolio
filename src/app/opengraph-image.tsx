import { ImageResponse } from "next/og";

// Twilight-greenhouse social card. This is what recruiters see when the link is
// shared on LinkedIn, Slack, or email. Runs on the edge (Vercel's recommended
// runtime for OG images) so it's generated on demand and cached.
export const runtime = "edge";
export const alt = "Anna Chester — Full-Stack Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "linear-gradient(135deg, #0b1410 0%, #0f1a15 55%, #101b16 100%)",
          color: "#eef0e8",
          fontFamily: "sans-serif"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "22px" }}>
          <div
            style={{
              display: "flex",
              height: 64,
              width: 64,
              borderRadius: 18,
              background: "#eef0e8",
              color: "#0b1410",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 28,
              fontWeight: 700
            }}
          >
            AC
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 22,
              letterSpacing: 6,
              textTransform: "uppercase",
              color: "#9bbd82"
            }}
          >
            Full-Stack Software Engineer
          </div>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 76,
            lineHeight: 1.05,
            fontWeight: 600,
            maxWidth: 960,
            letterSpacing: -1
          }}
        >
          I build systems that grow from idea to impact.
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 26,
            color: "#a9b3a4"
          }}
        >
          <div style={{ display: "flex", fontSize: 30, color: "#eef0e8" }}>Anna Chester</div>
          <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
            <span>web · mobile · backend</span>
            <span style={{ color: "#e7cf9c" }}>annachester.dev</span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
