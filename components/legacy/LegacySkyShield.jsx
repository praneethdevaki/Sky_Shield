"use client";

import Script from "next/script";

export default function LegacySkyShield({ markup }) {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: markup }} />
      <Script src="https://unpkg.com/maplibre-gl@5.24.0/dist/maplibre-gl.js" strategy="afterInteractive" />
      <Script src="/legacy/sky-shield-app.js" strategy="afterInteractive" />
    </>
  );
}
