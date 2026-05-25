import "./globals.css";

export const metadata = {
  title: "SKY SHIELD | Flight Integrity Dashboard",
  description: "Flight integrity dashboard prototype with live/replay ADS-B, threat simulation, and ML-readiness views.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://unpkg.com/maplibre-gl@5.24.0/dist/maplibre-gl.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
