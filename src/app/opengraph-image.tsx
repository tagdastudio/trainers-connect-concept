import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "Trainers Connect — India's trainers. One powerful network.";
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
          background: "#12211a",
          color: "#f4efe4",
          padding: 72,
          fontFamily: "Georgia, serif",
          position: "relative",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 18, letterSpacing: 4, textTransform: "uppercase", color: "#a7b4a0" }}>
          <span>India&apos;s trainer network</span>
          <span>Est. 2026</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ fontSize: 108, lineHeight: 0.95, letterSpacing: -4 }}>India&apos;s trainers.</span>
          <span style={{ fontSize: 108, lineHeight: 0.95, letterSpacing: -4, fontStyle: "italic", color: "#c79a3b" }}>One powerful network.</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", borderTop: "1px solid rgba(244,239,228,0.25)", paddingTop: 24, fontSize: 22 }}>
          <span style={{ fontFamily: "Arial, sans-serif" }}>Trainers Connect · Search. Discover. Connect.</span>
          <span style={{ color: "#c79a3b" }}>trainersconnect.in</span>
        </div>
      </div>
    ),
    size,
  );
}
