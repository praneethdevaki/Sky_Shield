# SKY SHIELD

SKY SHIELD is a futuristic aviation integrity dashboard prototype. It combines live/replay flight tracking, cyber integrity checks, threat simulation, fleet-signature review, evidence logging, and an honest ML-readiness surface.

The current build is a browser-based prototype with a local Node server. It is designed for demos and product exploration, not certified flight operations.

## What It Includes

- Live Airspace dashboard with procedural globe and optional MapLibre satellite globe mode
- OpenSky public flight-data proxy with replay-safe fallback
- Aircraft search, filters, selected-flight telemetry, route context, and integrity scores
- Flight Lens forensic view for the currently selected aircraft
- Integrity Engine with rule-bank checks and trusted-output gate states
- Threat Sim for GPS drift, GPS jump, stale replay, barometric injection, AI-output conflict, and control-injection scenarios
- Fleet Intelligence with regional heatmap, signatures, affected aircraft, and federated-update simulation
- Evidence Log with runtime audit records and JSON-style training row preview
- Model Lab with candidate features, rule/simulated labels, offline ML roadmap, and explicit no-production-model status

## Project Structure

```text
.
├── README.md
├── SKY_SHIELD_Product_Requirements_Document.md
└── sky-shield-home/
    ├── CLAUDE.md
    ├── app.js
    ├── assets/
    ├── index.html
    ├── server.js
    └── styles.css
```

## Run Locally

From the repo root:

```bash
node sky-shield-home/server.js
```

Then open:

```text
http://127.0.0.1:4173/
```

The local server also exposes:

```text
/api/opensky
```

That endpoint proxies OpenSky public state vectors for the selected demo region. If live public data fails or is unavailable, the frontend falls back to replay-safe simulation.

## Data Honesty

SKY SHIELD separates data classes in the UI:

- `LIVE · PUBLIC`: public OpenSky flight state vectors
- `REPLAY · SIMULATED`: local replay vectors for reliable demos
- `COMPUTED`: browser-side rule calculations
- `SIMULATED`: cyber scenario and future-ML signals

No production ML model is currently running. Model Lab is a planning and dataset-readiness surface for future offline ML work.

## Documentation

- Product and implementation details: `SKY_SHIELD_Product_Requirements_Document.md`
- Build notes and working context: `sky-shield-home/CLAUDE.md`

## Validation Commands

```bash
node --check sky-shield-home/app.js
node --check sky-shield-home/server.js
```

