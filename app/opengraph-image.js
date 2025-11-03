import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630
};

export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#080811",
          backgroundImage:
            "radial-gradient(circle at 20% 0%, rgba(255, 45, 85, 0.25) 0%, transparent 60%)",
          color: "#f4f4f8",
          position: "relative"
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 800,
            letterSpacing: 2,
            textTransform: "uppercase",
            textAlign: "center"
          }}
        >
          Stranger Things Recap
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 48,
            fontSize: 28,
            opacity: 0.9
          }}
        >
          Sinopsis tiap season • Bahasa Indonesia
        </div>
      </div>
    ),
    size
  );
}