import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#12211a",
          borderRadius: 6,
        }}
      >
        <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
          <circle cx="11" cy="16" r="7.25" stroke="#f4efe4" strokeWidth="1.4" />
          <circle cx="21" cy="16" r="7.25" stroke="#c79a3b" strokeWidth="1.4" />
          <circle cx="16" cy="16" r="1.9" fill="#bf4a26" />
        </svg>
      </div>
    ),
    size,
  );
}
