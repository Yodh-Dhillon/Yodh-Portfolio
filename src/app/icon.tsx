import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
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
          borderRadius: "50%",
          background: "linear-gradient(135deg, #D9A441, #C98A2C)",
          fontFamily: "serif",
          fontWeight: 700,
          fontSize: 15,
          color: "#160D0E",
        }}
      >
        YD
      </div>
    ),
    { ...size }
  );
}