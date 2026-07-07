import { ImageResponse } from "next/og";
import { getCaseStudy } from "@/data/projects";

export const runtime = "edge";
export const alt = "Case study — Anna Chester";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage({ params }: { params: { slug: string } }) {
  const study = getCaseStudy(params.slug);
  const kicker = study?.kicker ?? "Full-Stack Software Engineer";
  const title = study?.title ?? "Anna Chester";

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
        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#9bbd82"
          }}
        >
          {kicker}
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 68,
            lineHeight: 1.05,
            fontWeight: 600,
            maxWidth: 980,
            letterSpacing: -1
          }}
        >
          {title}
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
          <span style={{ color: "#e7cf9c" }}>annachester.dev/work</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
