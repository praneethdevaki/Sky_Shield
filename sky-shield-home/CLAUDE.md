# CLAUDE.md — SKY SHIELD Project Context

> Read this entire file before touching any code.
> This file combines the product PRD and a live design audit session.
> When in doubt about intent, refer to Section 2 (Product Vision) and Section 6 (Design System).

---

## 1. Project Files

```
/Users/praneethdevaki/Documents/New project/sky-shield-home/
├── index.html       ← main page markup
├── styles.css       ← all styles
├── app.js           ← interactivity, spoofing simulation, nav logic
└── assets/
    └── sky-shield-hero-aircraft.png   ← generated aviation hero image
```

Stack: **Vanilla HTML + CSS + JS**. No framework, no bundler.
Dev:
- Preferred: run `node sky-shield-home/server.js` from `/Users/praneethdevaki/Documents/New project` and open `http://127.0.0.1:4173`.
- Fallback: open `index.html` directly in browser. Live API requests may be less reliable in `file://` mode.
- Local server includes `/api/opensky?region=...` proxy for OpenSky public state vectors.

---

## 2. What SKY SHIELD Is

SKY SHIELD is a **futuristic aviation cyber-defense command center** — not a marketing landing page.

The product story:
> Modern aircraft increasingly depend on AI-assisted decisions fed by sensor inputs. A cyberattacker doesn't need to hack the aircraft directly — they can deceive trusted inputs like GPS or altitude data, causing automated systems to make unsafe recommendations. SKY SHIELD is a runtime integrity monitor that checks both the data going *into* AI systems and the safety of the outputs coming *out*.

Working tagline: **"Physics-Aware AI Integrity Monitor for Connected Aerospace Systems"**
Hero tagline: **"Airspace verified. Threats neutralised."**

The product communicates three things immediately:
1. SKY SHIELD is **live** — real aircraft, real telemetry
2. SKY SHIELD is **safety-aware** — it knows what is physically possible
3. SKY SHIELD goes **beyond flight tracking** — it adds cyber integrity and physics validation

### Primary demo audience
Competition judges, academic mentors, aerospace innovation reviewers, Airbus/industry stakeholders, professors. They must understand the problem without aviation expertise and see an attack scenario clearly within 30 seconds.

### What it is NOT (v1)
- Not connected to certified avionics
- Not controlling real aircraft
- Not using real pilot biometric data
- Not claiming certified detection performance

---

## 3. Architecture — The Four Integrity Layers

SKY SHIELD has four conceptual layers. Always reflect these in UI labels and copy.

| Layer | Name | What It Checks |
|---|---|---|
| 1 | Input Integrity Layer | Whether incoming sensor data is plausible for the current flight phase |
| 2 | Physics Output Layer | Whether an AI recommendation is physically possible and operationally safe |
| 3 | Behavioral Biometrics Layer | Whether control-input patterns look human (simulated in v1) |
| 4 | Fleet Intelligence Layer | Whether similar anomalies are appearing across a fleet |

### Verdict types (use these exact strings in code and UI)
- `ALL_OK`
- `SENSOR_FAULT`
- `DATA_CORRUPTION`
- `CYBER_ANOMALY`
- `PHYSICS_VIOLATION`
- `CONTROL_INJECTION_SUSPECTED`

### Severity color mapping
```
Green  → normal
Yellow → warning
Orange → serious
Red    → critical / cyber anomaly
```

---

## 4. Navigation — Confirmed Structure

Current nav style: **Flight Line** (underline-based, transparent). After design audit the following corrections must be applied.

### Nav items (in order)
1. Live Airspace — default active page
2. Flight Lens
3. Integrity Engine
4. Threat Sim
5. Fleet

### Right cluster (left to right)
- `NOMINAL` status with pulsing green dot
- `LIVE FEED` button with pulsing amber dot (DM Mono font)
- `429` aircraft count as a **separate muted badge** — NOT inside the Live Feed button

### Logo block
- Shield SVG icon (amber stroke, no fill)
- `SKY SHIELD` in DM Mono, 13px, letter-spacing 0.12em
- **Remove** the `Runtime integrity monitor` subtitle — illegible at small size, move to hero section if needed

### Active state — CORRECTED
Old 1px orange underline was too weak. Use this instead:
```css
.nav-link.active {
  background: rgba(196, 120, 48, 0.10);
  border: 0.5px solid rgba(196, 120, 48, 0.22);
  color: #f0c07a;
  border-radius: 7px;
}
```

### Nav container — CORRECTED
```css
.top-nav {
  height: 56px;
  background: rgba(12, 13, 16, 0.92);
  border-bottom: 0.5px solid rgba(255, 255, 255, 0.09);
}
```

---

## 5. Information Architecture — All Pages

| Tab | Purpose | Priority |
|---|---|---|
| Live Airspace | First screen. Full-screen map/globe with live aircraft. | P0 — built |
| Flight Lens | Deep inspection of one selected aircraft. | P0 |
| Integrity Engine | Shows the SKY SHIELD scoring logic visually. | P1 |
| Threat Sim | GPS spoofing demo. Most memorable feature. | P0 — partial |
| Fleet | Fleet-wide anomaly heatmap and federated learning story. | P1 |
| Evidence Log | Audit trail for every anomaly event. | P1 |
| Model Lab | Placeholder for future ML work. Honest about rules vs ML. | P2 |

---

## 6. Design System

### Fonts
```css
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Mono:wght@400;500&display=swap');
```
- **Syne** — nav labels, headings, body copy
- **DM Mono** — logo, status indicators, metric values, badges, evidence log, anything data-terminal in feel

### Color tokens
```css
--bg-primary:        #0c0d10;
--bg-surface:        rgba(255, 255, 255, 0.03);
--border-subtle:     rgba(255, 255, 255, 0.08);
--border-medium:     rgba(255, 255, 255, 0.12);

--amber:             #c97830;
--amber-text:        #f0c07a;
--amber-fill:        rgba(196, 120, 48, 0.10);
--amber-border:      rgba(196, 120, 48, 0.22);

--text-primary:      #f0ece4;
--text-secondary:    rgba(220, 210, 195, 0.48);
--text-muted:        rgba(220, 210, 195, 0.28);

--status-nominal:    #5cdf8a;
--status-warning:    #f0c07a;
--status-critical:   #f06060;
```

### Type scale
```
Headline:  52px, weight 800, line-height 1.08, letter-spacing 0
Subline:   18px, weight 500, color: rgba(196, 120, 48, 0.8)   ← new, bridges size gap
Body:      14px, weight 400, line-height 1.65
Nav:       13px, weight 500, letter-spacing 0
Mono data: DM Mono, 11–13px
```

### Aesthetic direction
- Tactical precision / aerospace ops center — not a SaaS startup, not a marketing site
- Dark near-black backgrounds with amber accents
- Feels like air traffic control: precise, serious, data-dense
- Subtle animations only: pulsing status dots, smooth hover transitions
- Avoid: purple gradients, generic SaaS card layouts, fake charts unrelated to telemetry, decorative hero sections

---

## 7. Design Audit — 11 Issues, All Must Be Fixed

Identified in design review on 2026-05-11. Do not reintroduce these.

### Critical
| # | Fault | Fix |
|---|---|---|
| 1 | Stats panel has no context — "28 threats" could mean anything | Add trend arrows, threshold labels, and severity color (green/amber/red) per metric |
| 2 | Hero has no grid — stats card was floating/absolute | Use CSS grid: headline cols 1–7, stats card cols 9–12 |

### Major
| # | Fault | Fix |
|---|---|---|
| 3 | Nav icons mismatched in stroke weight and arbitrary in meaning | Remove all nav icons. Label-only links |
| 4 | "2026" pill is a meaningless year tag | Replace with `v2.6 · LIVE` version badge, styled differently from feature tags |
| 5 | Active state was a 1px underline | Use amber filled pill — see Section 4 |
| 6 | Extreme type jump: ~80px headline to 16px body, nothing between | Add 18px subline between headline and body |
| 7 | Nav blends into hero with no scroll separation | Solid nav bg + bottom border — see Section 4 |

### Minor
| # | Fault | Fix |
|---|---|---|
| 8 | "Realtime" — wrong | "Real-time" (hyphenated) everywhere in copy and code |
| 9 | "Live feed 429 aircraft" crammed in one pill | Separate: `LIVE FEED` button + `429` muted badge beside it |
| 10 | Logo subtitle "Runtime integrity monitor" illegible in nav | Remove from nav |
| 11 | Stats card border invisible against dark bg | `border: 0.5px solid rgba(255,255,255,0.10)` + `background: rgba(255,255,255,0.03)` |

---

## 8. Hero Section — Correct Spec

### Copy (corrected)
```
Tags:      AI ASSURANCE  ·  FLIGHT TRACKING  ·  CYBER INTEGRITY  ·  v2.6 · LIVE
Headline:  Real-time flight tracking with a cyber integrity layer.
Subline:   Airspace verified. Threats neutralised.
Body:      A premium aviation dashboard that tracks live aircraft, simulates GPS
           spoofing, and shows how SKY SHIELD verifies data before AI
           recommendations become trusted.
```

### Stats card — correct spec
| Metric | Value | Color | Trend | Context |
|---|---|---|---|---|
| Aircraft tracked | 425 | amber `#f0c07a` | ↑ 6% green | vs 401 last hr |
| Fleet integrity | 94% | green `#5cdf8a` | → stable | target: 95% |
| Threat watch | 28 | red `#f06060` | ↑ HIGH red | threshold: 30 |

---

## 9. Live Airspace — Feature Requirements

- Full-screen map or 3D globe
- Live aircraft icons updating every 5–15 seconds (OpenSky API)
- Aircraft trails, region selector, callsign search
- Filters: altitude band, speed range, anomaly status
- Status strip: live feed status, aircraft tracked, active anomalies, data latency, replay/live mode

Aircraft color coding:
```
Normal              → cool neutral
Low-risk anomaly    → yellow
Medium-risk         → orange
High-risk / cyber   → red
Selected            → bright outline + trail
Spoofed track       → diverging ghost trail
```

Must run in **replay mode** when live API is unavailable.

---

## 10. Flight Lens — Feature Requirements

Panels for a selected aircraft:
- **Identity:** callsign, ICAO24, origin country, last contact, status
- **Telemetry:** lat, lon, baro altitude, geo altitude, ground speed, heading, vertical rate, squawk, on-ground
- **Flight phase** (computed): ground / takeoff / climb / cruise / descent / approach
- **Charts:** altitude over time, speed over time, vertical rate over time, heading over time
- **Nearby:** nearest airport, METAR, weather risk badges
- **SKY SHIELD summary:** input integrity score, physics safety score, behavioral confidence (simulated), final verdict

---

## 11. Integrity Engine — Feature Requirements

Show the four layers as live-scoring panels.

**Input Integrity checks:**
- Position update staleness
- Speed jump detection
- Heading jump detection
- Vertical rate anomaly for flight phase
- Barometric vs geometric altitude disagreement
- Approach phase unexpected altitude/speed

**Physics Output checks:**
- Reject steep descent during stable cruise
- Reject climb/descent exceeding aircraft limits
- Reject impossible turn rate or speed change
- Reject recommendations conflicting with physical evidence

**Behavioral Biometrics (simulated):**
- Too-perfect input rhythm
- High-frequency control oscillation
- Unrealistic precision
- Repeated mechanical timing

Rules must be modular — each one can be replaced by ML later. Make this explicit in the UI with a `RULE-BASED` / `ML-READY` label per check.

---

## 12. Threat Simulation — Feature Requirements

Most important demo feature. Non-technical viewer must understand the attack in under 30 seconds.

**Simulation sequence:**
1. Normal aircraft monitored
2. GPS spoofing begins
3. GPS position drifts from baro/INS reality
4. AI recommendation becomes unsafe
5. SKY SHIELD detects inconsistency
6. Physics layer rejects the recommendation
7. Cockpit alert generated
8. Fleet intelligence receives new threat signature

**Attack modes:**
- GPS drift (slow position drift away from expected track)
- GPS jump (sudden impossible position jump)
- Barometric injection (false altitude reading)
- Coordinated multi-sensor corruption
- Signal delay / stale replay
- AI output attack
- Control injection (non-human input rhythm)

**Controls:** aircraft selector, attack type, intensity, start time, duration, start / pause / reset

**Visual requirements:** real track vs spoofed track, sensor cards degrading, integrity score falling, physics block triggering, event timeline filling in real time

Must run without external API. Must have reset button. Must be recordable for a pitch video.

---

## 13. Fleet Intelligence — Feature Requirements

- Fleet map with regional anomaly heatmap
- Active threat signatures, number of affected aircraft
- Shared intelligence timeline
- Federated learning simulation (each aircraft keeps raw data local, shares only threat signatures)

Prototype behavior: simulate three aircraft with different attack patterns, show local detection, aggregate into fleet-wide threat profile, push updated baseline to other simulated aircraft.

---

## 14. Evidence Log — Event Schema

Every anomaly must produce a log entry:

```json
{
  "event_id": "evt_YYYYMMDD_NNNNN",
  "aircraft_id": "icao24_hex",
  "callsign": "SKY245",
  "timestamp_utc": "2026-05-07T10:24:31Z",
  "flight_phase": "cruise",
  "layer": "physics_output",
  "verdict": "PHYSICS_VIOLATION",
  "severity": "red",
  "input_integrity_score": 42,
  "physics_score": 8,
  "explanation": "AI recommendation requested steep descent during stable cruise without matching emergency evidence.",
  "recommended_action": "Reject recommendation, maintain current flight plan, alert pilot and fleet monitoring.",
  "data_origin": "simulated_attack_overlay"
}
```

Logs must be usable later as ML training labels.

---

## 15. Data Strategy — What Is Real vs Simulated

Always label data origin clearly in the UI.

| Type | UI Label | Source |
|---|---|---|
| Live public data | `LIVE · PUBLIC` | OpenSky Network, NOAA METAR, OurAirports |
| Derived / computed | `COMPUTED` | SKY SHIELD rules engine |
| Simulated for demo | `SIMULATED` | Local JS simulation |
| Future partner data | (not in v1) | X-Plane, ADS-B hardware, airline ops datasets |

**Simulated fields** (never claim these are real):
GPS channel raw values, INS raw values, barometric sensor stream, engine parameters, fuel flow, structural load, flight-control actuator commands, AI/ML recommendations, pilot control-input signature, cyberattack injection stream, federated learning update packets.

---

## 16. Product Principles — Always Follow These

1. **The first screen is the product.** No generic landing page. Start with the live command center.
2. **Be honest about data.** Clearly separate real, derived, simulated, and future data.
3. **Make anomalies visual.** Drift, spoofing, blocked recommendations, and integrity decay must be visible.
4. **Keep the pilot safe.** SKY SHIELD is advisory and integrity-quarantine — not autonomous flight control.
5. **Show physics as the differentiator.** The key concept: checking whether an AI recommendation is physically and operationally safe.
6. **Always support demo mode.** Live APIs can fail. Replay and simulation must always work.

---

## 17. Implementation Status (as of 2026-05-21)

**Completed:**
- Static homepage with aviation hero image (aircraft over clouds)
- Animated live globe simulation with orbiting aircraft and flight paths
- Top nav (Flight Line style): Live Airspace, Flight Lens, Integrity Engine, Threat Sim, Fleet, Evidence Log, Model Lab
- Left icon rail for section navigation
- Floating search, region, refresh, and filter controls
- Live Airspace status strip for feed mode, tracked aircraft, anomalies, and latency
- OpenSky Network fetch path for public state vectors, updating every 15 seconds
- Replay-safe simulation fallback when live public data is unavailable
- Dynamic aircraft markers, trails, callsign labels, flight strip cards, selected-flight telemetry, and evidence log
- Polished replay/live labels so fallback mode reads as intentional demo mode, not a broken live feed
- Selected-flight source, phase, health badges, and computed-check note
- Selected-flight details panel, route progress card, telemetry grid, integrity verdict
- Flight Lens section built and wired to the currently selected aircraft
- Flight Lens includes identity, telemetry, generated telemetry-history charts, integrity checks, and SKY SHIELD summary scores
- Integrity Engine section built and wired to the currently selected aircraft
- Integrity Engine includes the four conceptual layers, a pipeline visual, rule bank, and AI recommendation gate
- Threat Sim section built and wired to the currently selected aircraft
- Threat Sim includes attack mode controls, verified-vs-spoofed track visual, sensor degradation cards, and an attack timeline
- Existing spoofing button now starts/resets the Threat Sim state so Live Airspace, Flight Lens, and Integrity Engine respond together
- Fleet Intelligence section built and wired to the currently selected aircraft and Threat Sim state
- Fleet Intelligence includes regional anomaly heatmap, threat signatures, affected aircraft, and federated update simulation
- Evidence Log section built and wired to selected aircraft, source labels, integrity rules, Threat Sim, and model-ready record previews
- Model Lab section built as an honest ML-readiness surface with candidate features, label queue, offline ML roadmap, and JSONL-style training row preview
- Removed the temporary Data & Compute UI section; data/compute work should now be handled as backend/service code, not a dashboard tab
- Live Airspace now keeps the procedural globe as the default visual and adds a MapLibre satellite globe toggle for real map mode
- MapLibre now initializes on demand when map mode is requested, which keeps the default globe clean and avoids idle MapLibre console errors
- Flight icons now use a shared top-down airliner silhouette across globe markers, MapLibre markers, flight cards, selected-flight UI, event rows, and Flight Lens identity
- Aircraft icons no longer use circular badges; selected states use larger silhouettes, orange/critical coloring, card/rail accents, and drop-shadow glow instead
- Top nav and side rail jump between Live Airspace, Flight Lens, Integrity Engine, Threat Sim, Fleet, Evidence Log, and Model Lab
- Local Node server/proxy added at `sky-shield-home/server.js`
- Frontend uses `/api/opensky` when opened from `http://127.0.0.1:4173`; direct OpenSky fetch remains the `file://` fallback path
- Integrity-layer meters
- GPS spoofing simulation button (dark anomaly mode, lowers scores, updates evidence log)
- Punctuality widget, data source widget, runtime evidence log
- Design audit fixes from Section 7 are applied to the homepage/nav
- Responsive behavior: desktop / medium / mobile
- JavaScript syntax validated ✓

**Next steps (priority order):**
1. Backend/data-compute layer for persisted evidence records and API normalization
2. API strategy for production-grade flight/weather/airport data sources
3. Later ML code path using Evidence Log / Model Lab exports
