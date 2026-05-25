# SKY SHIELD Product Requirements Document

Version: 0.1  
Date: 2026-05-07  
Status: Planning PRD for website and prototype  
Product name: SKY SHIELD  
Working tagline: Physics-Aware AI Integrity Monitor for Connected Aerospace Systems

## 1. Executive Summary

SKY SHIELD is a futuristic web-based aerospace cyber-defense command center. It demonstrates how an aircraft's live flight state can be monitored for signs of sensor corruption, GPS spoofing, unsafe AI recommendations, and suspicious control patterns.

The product should not feel like a generic startup landing page. The first experience should feel like an operational system: a live airspace map, moving aircraft, telemetry panels, anomaly scores, alert streams, and a threat simulation mode that shows SKY SHIELD detecting and responding to attacks.

The first version will combine:

- Real public aviation data, such as aircraft position, altitude, velocity, heading, vertical rate, callsign, timestamps, and weather.
- Derived integrity checks, such as stale data detection, speed jumps, altitude inconsistency, route deviation, vertical-rate anomalies, and flight-phase classification.
- Simulated internal aircraft and cybersecurity data, such as GPS spoofing, barometric injection, inertial sensor corruption, AI flight recommendations, engine parameters, structural loads, and pilot-control biometrics.
- A future ML layer that can replace or augment the initial rule-based scoring.

The key product story:

> Modern aircraft increasingly depend on software, sensor feeds, and AI-assisted decisions. A cyberattacker may not need to hack the aircraft network directly. They can deceive trusted inputs, such as GPS or altitude data, and cause automated systems to make unsafe recommendations. SKY SHIELD acts as a runtime integrity monitor that checks both the data going into AI systems and the safety of the outputs coming out.

## 2. Background for New Readers

### 2.1 What Is the Problem?

Modern aviation systems increasingly use AI/ML and automation for:

- Collision avoidance support
- Automated landing support
- Flight optimization
- Route optimization
- Terrain awareness
- Predictive maintenance
- Cockpit and ground decision support

These systems depend on sensor inputs. Examples include:

- GPS/GNSS position
- Barometric altitude
- Inertial navigation data
- Airspeed
- Heading
- Vertical rate
- Weather
- Aircraft state
- Engine and fuel data

If the input data is manipulated, corrupted, spoofed, delayed, or made inconsistent, the downstream AI or automation layer can still produce a confident output. This is dangerous because the system can appear normal while being deceived.

### 2.2 Why This Matters Now

There is growing concern around aviation cybersecurity and GNSS interference.

- OPSGROUP's 2024 GPS Spoofing Workgroup reported a major rise in GPS spoofing, including an average of about 1,500 spoofed flights per day in affected periods.
- EASA and IATA have publicly described GNSS spoofing and jamming as a safety concern requiring short, medium, and long-term mitigations.
- EASA NPA 2025-07 proposes detailed specifications and guidance for AI trustworthiness in aviation.
- Thales and aviation cybersecurity reporting have highlighted a sharp rise in cyberattacks against the aviation sector.

SKY SHIELD sits at the intersection of these trends:

- Aviation cyber defense
- AI assurance
- Real-time anomaly detection
- Runtime monitoring
- Physics-based safety validation
- Fleet-wide cyber intelligence

### 2.3 What Is SKY SHIELD?

SKY SHIELD is a software-based runtime integrity monitor that sits conceptually between aircraft sensor feeds and AI/ML decision systems.

It checks:

1. Whether incoming sensor data is trustworthy.
2. Whether the AI system's output is physically possible and safe.
3. Whether control inputs look human and authorized.
4. Whether similar anomalies are appearing across a fleet.

The website is the visual prototype of this idea.

### 2.4 Current Defense Gap

The original proposal identifies three common defense patterns and their limitations:

- Adversarial training helps models resist known attacks, but may fail against novel attack patterns.
- Static threshold checks can flag extreme values, but may miss subtle or coordinated anomalies where each individual reading still looks plausible.
- Hardware redundancy can cross-check multiple sensors, but may struggle if several feeds are compromised together or if the downstream AI still receives a coherent but false state.

The key gap SKY SHIELD targets:

- Existing tools can track flights, monitor systems, or validate data in isolated ways.
- The project thesis is that no widely deployed product provides a clear runtime monitor that watches both live aircraft AI inputs and AI output behavior during flight.
- SKY SHIELD's differentiator is runtime, multi-layer assurance: input integrity plus physics-constrained output validation plus pilot-behavior checks plus fleet intelligence.

### 2.5 Original Solution Layers

The original SKY SHIELD idea has four conceptual layers:

1. Input Integrity Layer  
   Checks whether incoming sensor data is plausible for the current flight phase and consistent with other available signals.

2. Physics Output Layer  
   Checks whether an AI recommendation is physically possible, operationally safe, and consistent with independent evidence.

3. Behavioral Biometrics Layer  
   Checks whether control-input patterns look like a verified human pilot rather than injected or machine-generated commands.

4. Fleet Intelligence Layer  
   Shares threat signatures across aircraft or fleet-monitoring systems while preserving raw data privacy through a federated-learning-style approach.

## 3. Product Vision

The website should make a viewer believe they are looking at the future of aviation cyber-defense.

It should show:

- Live aircraft being tracked on a map or globe.
- Telemetry updating in near real time.
- An aircraft selected for deeper inspection.
- An integrity score calculated from live and simulated signals.
- A GPS spoofing attack being injected into the scenario.
- SKY SHIELD detecting the attack.
- The system rejecting or quarantining unsafe AI recommendations.
- A pilot-facing alert being generated.
- A fleet-monitoring dashboard learning from the event.
- A forensic event log capturing evidence.

The product should communicate three ideas immediately:

1. SKY SHIELD is live.
2. SKY SHIELD is safety-aware.
3. SKY SHIELD goes beyond normal flight tracking by adding cyber integrity and physics validation.

## 4. Product Goals

### 4.1 Primary Goals

- Build a futuristic web command center for SKY SHIELD.
- Demonstrate real-time public flight tracking.
- Show how live flight-state data can feed an integrity monitoring engine.
- Add simulated cyberattack scenarios that can be understood by non-technical viewers.
- Provide a strong base for future ML model development.
- Help the team present the idea in competitions, demos, and stakeholder reviews.

### 4.2 Secondary Goals

- Create a reusable architecture for future ML experiments.
- Support replay mode so demos work even when live APIs are slow or unavailable.
- Generate clear forensic logs for each anomaly.
- Show potential regulator, manufacturer, airline, and pilot value.
- Make it easy to explain which data is real, which is derived, and which is simulated.

### 4.3 Non-Goals for the First Version

The first version will not:

- Control a real aircraft.
- Connect to certified avionics.
- Replace pilots, air traffic control, dispatchers, or certified safety systems.
- Claim certified detection performance.
- Claim access to private airline, aircraft, cockpit, or manufacturer data.
- Use real pilot biometric data.
- Use real engine, fuel, structural-load, or flight-control bus data unless later obtained through simulation or authorized partnerships.

## 5. Target Users

### 5.1 Primary Demo Viewers

These are the people who must understand the concept quickly:

- Competition judges
- Academic mentors
- Aerospace innovation reviewers
- Airbus or aviation-industry stakeholders
- Professors and technical evaluators
- Student teammates joining the project later

Needs:

- Understand the problem without aviation expertise.
- See live tracking quickly.
- See an attack scenario clearly.
- Understand why SKY SHIELD is different from normal flight trackers.
- Understand what can be built now and what will be ML later.

### 5.2 Future Operational Users

These are not the first users, but the interface should imply value for them:

- Pilots
- Airline operations teams
- Maintenance teams
- Aircraft manufacturers
- Aviation regulators
- Fleet-monitoring centers
- Cybersecurity operations centers

Needs:

- Clear anomaly classification.
- Low cognitive load.
- Evidence logs.
- Actionable alerts.
- Fleet-wide threat visibility.
- Traceability and auditability.

### 5.3 Stakeholder Benefits

Pilots:

- Plain-language cockpit alerts.
- Recommended actions within seconds.
- Reduced cognitive load compared with noisy, unexplained alerts.
- Clear difference between sensor fault, data corruption, and suspected cyber anomaly.

Maintenance teams:

- Full forensic event logs after a flight.
- Sensor anomaly timelines.
- Evidence for post-flight investigation.
- Better separation between hardware fault and suspected data manipulation.

Aircraft manufacturers:

- Anonymized patterns showing emerging attack vectors.
- Evidence for improving AI assurance and future avionics design.
- Prototype path for software integration without requiring new aircraft hardware in the demo.

Regulators and compliance teams:

- Traceable runtime assurance concept.
- Evidence logs tied to each decision.
- Alignment with the direction of EASA AI trustworthiness work.

Airline and fleet operations teams:

- Fleet-wide anomaly visibility.
- Faster recognition when the same threat pattern appears across multiple aircraft.
- Reduced operational cost from spoofing-induced diversions, unnecessary alerts, and avoidable maintenance investigations.

Environmental and commercial impact:

- Better trusted-data handling may reduce unnecessary diversions and inefficient routing.
- Even small operational efficiency improvements can matter at fleet scale.
- A no-new-hardware software prototype is easier to demonstrate and iterate.

## 6. Product Principles

1. The first screen is the product.  
   Avoid a generic landing page. Start with the live command center.

2. Be honest about data.  
   Clearly separate real public data, derived data, simulated data, and future partner data.

3. Make anomalies visual.  
   Users should see drift, spoofing, blocked recommendations, and integrity decay visually.

4. Keep the pilot safe.  
   The product should frame SKY SHIELD as an advisory and integrity-quarantine system for prototype purposes, not an autonomous flight-control replacement.

5. Show physics as the differentiator.  
   The strongest concept is not just detecting weird input. It is checking whether an AI recommendation is physically and operationally safe.

6. Always support demo mode.  
   Live aviation APIs can be rate-limited or delayed. The prototype must include replay and simulation.

## 7. Terminology

Aircraft state vector: A snapshot of an aircraft's live state, including position, velocity, heading, altitude, vertical rate, and timestamps.

ADS-B: Automatic Dependent Surveillance-Broadcast. A surveillance technology where aircraft broadcast position and movement data.

GNSS: Global Navigation Satellite System. Includes GPS and similar satellite-navigation systems.

GPS spoofing: A false GPS signal is transmitted so a receiver believes it is somewhere else.

GPS jamming: A signal blocks or disrupts GPS reception.

Barometric altitude: Altitude estimated using atmospheric pressure.

Geometric altitude: Altitude estimated relative to a geometric model of Earth, often from GNSS.

INS: Inertial Navigation System, which uses motion sensors to estimate aircraft movement.

Flight phase: A stage of flight, such as ground, takeoff, climb, cruise, descent, approach, or landing.

Runtime assurance: Monitoring a system while it is operating, instead of only testing before deployment.

Integrity score: A score from 0 to 100 estimating whether data and decisions appear trustworthy.

Cyber anomaly: A pattern suggesting possible intentional manipulation rather than random sensor fault.

## 8. Data Strategy

The data strategy is split into four categories:

1. Real public data available now.
2. Derived data calculated by SKY SHIELD.
3. Simulated data for demo and ML training.
4. Future premium or partner data.

### 8.1 Real Public Data Available Now

| Data Category | Possible Source | Fields We Can Use | Use in Product | Notes |
| --- | --- | --- | --- | --- |
| Live aircraft state | OpenSky Network REST API | ICAO24, callsign, origin country, longitude, latitude, barometric altitude, geometric altitude, velocity, heading, vertical rate, on-ground flag, squawk, timestamps, position source | Live Airspace map, Flight Lens, basic integrity checks | Good for academic/research demo. Rate limits apply. |
| Aviation weather | NOAA Aviation Weather Data API | METAR, TAF, wind, visibility, sky condition, temperature, dew point, altimeter setting, airport weather | Weather overlay, flight risk context, approach conditions | Worldwide METAR/TAF available. Use limited request scope and caching. |
| Airport data | OurAirports CSV datasets | Airport name, ICAO/IATA where available, coordinates, country, region, elevation, runways, runway dimensions, navaids | Nearest airport, runway context, airport search, map overlays | Public domain style open data, updated regularly. |
| Flight status and richer tracking | FlightAware AeroAPI | Current flight status, tracks, ETA, historical tracks, alerts, route and airport-based queries | Future richer commercial version | Paid, usage-based, better than free sources for reliability. |
| Commercial real-time flight data | Aviationstack | Flight status, airline, flight number, departure/arrival airport, aircraft, schedule, route data | Optional richer demo if API key available | Free tier exists but limits are small. Paid tiers needed for serious usage. |

### 8.2 Real Data Fields We Can Track in the First Prototype

From OpenSky-like state vectors:

- Aircraft ICAO24 identifier
- Callsign, if available
- Origin country
- Latitude
- Longitude
- Barometric altitude
- Geometric altitude
- Velocity over ground
- Heading
- Vertical rate
- On-ground status
- Squawk code, if available
- Last contact timestamp
- Last position update timestamp
- Position source

From weather APIs:

- Wind direction
- Wind speed
- Visibility
- Cloud layer
- Temperature
- Dew point
- Altimeter setting
- METAR raw report
- TAF raw forecast
- Weather update time

From airport datasets:

- Airport name
- ICAO/IATA identifiers
- Airport coordinates
- Elevation
- Runway length
- Runway width
- Runway heading identifiers
- Runway surface
- Airport type
- Navaid locations

### 8.3 Derived Data SKY SHIELD Can Calculate

These are not directly provided by the APIs but can be computed:

- Flight phase: ground, takeoff, climb, cruise, descent, approach.
- Track trail: previous aircraft positions over time.
- Position freshness: whether the latest update is stale.
- Speed jump: sudden unrealistic change in velocity.
- Heading jump: sudden unrealistic change in direction.
- Vertical-rate anomaly: climb or descent rate outside expected range for phase.
- Altitude disagreement: difference between barometric and geometric altitude.
- Smoothness score: whether trajectory changes are continuous.
- Nearest airport.
- Distance from nearest airport.
- Weather proximity risk.
- Estimated route direction.
- Basic risk score.
- Integrity score.
- Alert severity.

### 8.4 Simulated Data Required for the Demo

Public APIs will not provide many internal aircraft signals. These should be simulated in the prototype:

- Raw GPS channel details.
- INS raw values.
- Barometric sensor stream as an independent raw feed.
- Engine parameters.
- Fuel flow.
- Structural load.
- Flight-control actuator commands.
- AI/ML decision recommendations.
- Pilot joystick or yoke control-input signature.
- Authenticated pilot identity.
- Cyberattack injection stream.
- Federated-learning update packets.

Simulated data should be clearly labeled in code and, when needed, in demo material. The site can still present the simulation as part of the SKY SHIELD prototype because it demonstrates how the product would behave if connected to richer aircraft systems later.

### 8.5 Future Partner Data

If the project becomes more serious, future data could come from:

- Flight simulator data from X-Plane.
- NASA XPlaneConnect for real-time simulated aircraft state.
- ADS-B receiver hardware.
- Commercial APIs.
- Airline operations datasets.
- Manufacturer test data.
- Synthetic datasets generated from realistic flight dynamics.

## 9. Information Architecture

The product should use a top taskbar with operational tabs, not generic website navigation.

Recommended top navigation:

1. Live Airspace
2. Flight Lens
3. Integrity Engine
4. Threat Simulation
5. Fleet Intelligence
6. Evidence Log
7. Model Lab

Optional utility items:

- Data Sources
- Settings
- Demo Mode toggle
- System Health indicator

## 10. Detailed Feature Requirements

### 10.1 Live Airspace

Purpose:

The first screen. Shows that SKY SHIELD tracks aircraft in near real time.

Core features:

- Full-screen map or 3D globe.
- Live aircraft icons.
- Aircraft movement updates every 5 to 15 seconds, depending on API limits.
- Aircraft trails.
- Region selector.
- Search by callsign or aircraft identifier.
- Filter by altitude band.
- Filter by speed range.
- Filter by anomaly status.
- System status strip showing:
  - Live feed status
  - Aircraft tracked
  - Active anomalies
  - Data latency
  - Weather feed status
  - Replay or live mode

Visual behavior:

- Normal aircraft: cool neutral color.
- Low-risk anomaly: yellow.
- Medium-risk anomaly: orange.
- High-risk cyber anomaly: red.
- Selected aircraft: bright outline and trail.
- Spoofed track: show a diverging ghost trail.

Acceptance criteria:

- A user can open the page and see aircraft on a map.
- Aircraft update without manual refresh.
- Selecting an aircraft opens a summary panel.
- The page can run in replay mode if live API data fails.
- The UI clearly shows whether data is live or replayed.

### 10.2 Flight Lens

Purpose:

Deep inspection of one selected aircraft.

Core features:

- Aircraft identity panel:
  - Callsign
  - ICAO24
  - Origin country
  - Last contact
  - Current status
- Telemetry panel:
  - Latitude
  - Longitude
  - Barometric altitude
  - Geometric altitude
  - Ground speed
  - Heading
  - Vertical rate
  - Squawk
  - On-ground status
- Flight phase classification.
- Telemetry charts:
  - Altitude over time
  - Speed over time
  - Vertical rate over time
  - Heading over time
- Nearby context:
  - Nearest airport
  - Nearby weather station
  - Latest METAR
  - Weather risk badges
- SKY SHIELD summary:
  - Input integrity score
  - Physics safety score
  - Behavioral confidence, simulated in v1
  - Final verdict

Acceptance criteria:

- User can select any live aircraft and inspect its data.
- Data freshness is visible.
- Missing fields are handled gracefully.
- A selected flight can be handed into Threat Simulation.

### 10.3 Integrity Engine

Purpose:

Show the SKY SHIELD logic that transforms telemetry into trust decisions.

Core layers:

1. Input Integrity Layer
2. Physics Output Layer
3. Behavioral Biometrics Layer
4. Final Verdict Layer

Input Integrity Layer:

- Compares incoming data against expected behavior for the flight phase.
- Checks cross-sensor consistency when multiple sources are available.
- Scores each signal.
- Classifies events.

Example input checks:

- Is the position update stale?
- Did speed jump too quickly?
- Did heading change too sharply?
- Is vertical rate reasonable for the flight phase?
- Is barometric altitude diverging unusually from geometric altitude?
- Is the aircraft near an airport but at an unexpected altitude/speed?

Physics Output Layer:

- Evaluates whether an AI recommendation is physically and operationally safe.
- Uses deterministic rules first.
- Later can incorporate aircraft-specific performance envelopes.

Example physics checks:

- Reject steep descent during stable cruise unless emergency context exists.
- Reject climb/descent rates that exceed plausible aircraft limits.
- Reject impossible turn-rate or speed-change commands.
- Reject recommendations that conflict with independent physical evidence.

Behavioral Biometrics Layer:

- Simulated in the first version.
- Learns or represents a pilot control signature.
- Detects non-human patterns such as:
  - Too-perfect input rhythm
  - High-frequency control oscillation
  - Unrealistic precision
  - Repeated mechanical timing

Final Verdict Layer:

Possible verdicts:

- ALL_OK
- SENSOR_FAULT
- DATA_CORRUPTION
- CYBER_ANOMALY
- PHYSICS_VIOLATION
- CONTROL_INJECTION_SUSPECTED

Severity levels:

- Green: normal
- Yellow: warning
- Orange: serious
- Red: critical

Acceptance criteria:

- The engine produces a readable verdict for each monitored aircraft.
- Each verdict has a reason.
- Each alert links to evidence in the Evidence Log.
- Rules are modular so ML can replace or augment them later.

### 10.4 Threat Simulation

Purpose:

Make the product memorable. This is where viewers see SKY SHIELD in action.

Core scenario:

Human vs Firewall demonstration:

1. Normal aircraft is monitored.
2. GPS spoofing attack begins.
3. GPS position drifts away from barometric/INS-consistent reality.
4. AI recommendation becomes unsafe.
5. SKY SHIELD detects the inconsistency.
6. Physics layer rejects the unsafe recommendation.
7. Cockpit alert is generated.
8. Fleet intelligence receives the new threat signature.

Attack modes:

- GPS drift: aircraft position slowly moves away from expected track.
- GPS jump: sudden impossible position jump.
- Barometric injection: false altitude reading.
- Coordinated multi-sensor corruption: multiple simulated sensors agree with the fake state.
- Signal delay: stale but plausible data is replayed.
- AI output attack: unsafe recommendation generated from corrupted inputs.
- Control injection: non-human control-command rhythm appears.

Controls:

- Select aircraft.
- Select attack type.
- Set attack intensity.
- Set attack start time.
- Set duration.
- Start, pause, reset.
- Compare "traditional checks only" vs "SKY SHIELD multi-layer checks."

Visual requirements:

- Show real/expected track and spoofed track.
- Show affected sensor cards pulsing or degrading.
- Show integrity score falling.
- Show physics validation blocking unsafe output.
- Show event timeline filling in real time.

Acceptance criteria:

- A non-technical viewer can understand the attack in under 30 seconds.
- The simulation can run without external API dependence.
- The demo has a reset button.
- The demo can be recorded for a pitch video.

### 10.5 Fleet Intelligence

Purpose:

Show how one aircraft's anomaly can become fleet-wide cyber intelligence.

Core features:

- Fleet map.
- Regional anomaly heatmap.
- Active threat signatures.
- Number of affected aircraft.
- Shared intelligence timeline.
- Federated learning simulation.

Federated learning story:

- Each aircraft keeps raw data local.
- The aircraft shares threat signatures or model updates.
- The fleet-level model improves without centralizing raw flight data.

Prototype behavior:

- Simulate three aircraft encountering different attack patterns.
- Show local anomaly detection.
- Aggregate signatures into a fleet-wide threat profile.
- Push updated baseline to other aircraft in the simulation.

Acceptance criteria:

- The page shows how local detections become fleet intelligence.
- No raw aircraft data needs to be uploaded in the demo.
- The page makes privacy-preserving learning understandable.

### 10.6 Evidence Log

Purpose:

Create an audit trail for every anomaly.

Core features:

- Timeline of all events.
- Search and filters.
- Event detail drawer.
- Export as JSON or PDF later.
- Severity, aircraft, timestamp, layer, and verdict.

Each event should include:

- Event ID
- Aircraft identifier
- Callsign
- Timestamp
- Flight phase
- Layer that detected it
- Sensor fields involved
- Integrity score before and after
- Verdict
- Explanation
- Recommended action
- Raw or simulated source marker

Example event:

```json
{
  "event_id": "evt_20260507_00042",
  "aircraft_id": "abc123",
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

Acceptance criteria:

- Every alert visible in the UI has a corresponding log entry.
- Logs are understandable without reading the code.
- Logs can be used later as ML labels or training examples.

### 10.7 Model Lab

Purpose:

Prepare for later ML work without blocking the first demo.

Core features:

- Dataset browser.
- Feature list.
- Scenario labels.
- Model version cards.
- Basic evaluation charts.
- Rules vs ML comparison.
- Confusion matrix later.
- Replay selected scenario through a model.

Initial ML candidates:

- Isolation Forest for anomaly detection.
- One-Class SVM for unusual states.
- Kalman filter residuals for trajectory consistency.
- Autoencoder for multi-sensor anomaly detection.
- Sequence model for abnormal trajectories.
- Classifier for flight-phase detection.
- Pilot-input signature classifier from joystick or X-Plane data.

Acceptance criteria:

- The page can exist initially as a planned ML workspace.
- It should not fake model accuracy before models exist.
- It should make clear which logic is rule-based today and ML-based later.

## 11. Recommended Visual Direction

### 11.1 Overall Style

The product should feel like:

- Aerospace operations center
- Cybersecurity command console
- High-trust cockpit support system
- Futuristic but credible

Avoid:

- Generic SaaS cards everywhere
- Marketing landing page layout
- Overly decorative hero sections
- Fake charts with no relationship to telemetry
- UI text explaining every feature like a tutorial

### 11.2 First-Viewport Layout

The first viewport should include:

- Full-screen map or 3D globe.
- Top command taskbar with product name and tabs.
- Live system strip.
- Left filter rail.
- Right aircraft/integrity drawer.
- Bottom event stream.

The user should immediately see live aircraft and system activity.

### 11.3 Visual Motifs

Use:

- Aircraft trails
- Signal cones
- Sensor health bars
- Integrity rings
- Timeline pulses
- Route deviation ghost lines
- Severity-coded alerts
- Small cockpit-alert preview
- Fleet propagation animation

Do not rely only on charts. The visual story should show cause and effect.

## 12. Realtime Flight Tracking Plan

### 12.1 MVP Realtime Approach

1. Backend queries OpenSky state vectors for a selected region.
2. Backend normalizes state vectors.
3. Backend stores recent positions in memory or database.
4. Backend computes derived fields and rule-based scores.
5. Frontend subscribes through WebSockets or Server-Sent Events.
6. Frontend updates map, panels, and event stream.

### 12.2 Suggested Regions for Demo

Choose one or two regions to avoid too much data:

- Singapore and Southeast Asia
- United Kingdom and Western Europe
- India and Middle East corridor
- Airbus-relevant European airspace
- Around a specific airport such as Singapore Changi, Heathrow, Toulouse, Frankfurt, or Dubai

### 12.3 Update Rate

Recommended initial update rate:

- API polling: every 10 to 15 seconds.
- Frontend animation: interpolate smoothly between updates.
- Weather refresh: every 1 to 5 minutes.
- Airport data: static import, refresh manually or daily.

### 12.4 Replay Mode

Replay mode is mandatory.

Reasons:

- Public APIs can fail.
- Rate limits can interrupt demos.
- Some regions may have sparse aircraft at demo time.
- Attack scenarios need controlled timing.

Replay mode should:

- Use previously recorded state vectors.
- Play forward at 1x, 2x, 5x, or 10x.
- Allow attack injection at known moments.
- Look visually identical to live mode except for a clear "REPLAY" label.

## 13. System Architecture

### 13.1 Recommended Tech Stack

Frontend:

- React or Next.js
- TypeScript
- MapLibre GL, Mapbox, or CesiumJS
- WebSockets or Server-Sent Events
- Charting library for telemetry timelines

Backend:

- Python FastAPI
- Python data pipeline modules
- Pandas for processing and logs
- Pydantic for schemas
- Async workers for API polling

Storage:

- PostgreSQL with PostGIS later
- SQLite for first prototype if speed matters
- Redis for caching live feed and session state later
- Local JSON/Parquet files for replay recordings

ML later:

- scikit-learn
- PyTorch if sequence models are needed
- MLflow or simple model registry later

Simulation:

- Pure Python simulator first
- X-Plane 12 plus NASA XPlaneConnect later

### 13.2 Logical Modules

- Data ingestion
- Data normalization
- Flight-state store
- Derived feature engine
- Integrity rule engine
- Threat simulation engine
- Event log service
- Realtime streaming service
- Frontend map renderer
- Frontend dashboard panels
- ML experiment service later

### 13.3 Data Flow

1. Live API or replay file provides aircraft state.
2. Normalizer converts the data into SKY SHIELD's internal schema.
3. Feature engine computes derived fields.
4. Integrity engine scores the aircraft state.
5. Threat simulation engine optionally modifies or overlays signals.
6. Physics layer validates recommendations.
7. Event service records alerts.
8. Streaming service sends updates to the UI.
9. UI renders map, telemetry, verdicts, and event log.

## 14. Suggested Internal Data Schemas

### 14.1 Aircraft State

```json
{
  "aircraft_id": "abc123",
  "callsign": "SKY245",
  "origin_country": "Singapore",
  "timestamp_utc": "2026-05-07T10:20:00Z",
  "latitude": 1.3521,
  "longitude": 103.8198,
  "barometric_altitude_m": 10972,
  "geometric_altitude_m": 11125,
  "velocity_mps": 236,
  "heading_deg": 82,
  "vertical_rate_mps": 0.4,
  "on_ground": false,
  "squawk": "1234",
  "source": "opensky_live"
}
```

### 14.2 Integrity Verdict

```json
{
  "aircraft_id": "abc123",
  "timestamp_utc": "2026-05-07T10:20:00Z",
  "flight_phase": "cruise",
  "input_integrity_score": 92,
  "physics_score": 98,
  "behavioral_confidence": 100,
  "final_score": 95,
  "verdict": "ALL_OK",
  "severity": "green",
  "reasons": [
    "Position updates are fresh",
    "Altitude trend is stable",
    "Velocity is consistent with cruise phase"
  ]
}
```

### 14.3 Attack Scenario

```json
{
  "scenario_id": "gps_drift_001",
  "name": "Gradual GPS Drift",
  "target_aircraft_id": "abc123",
  "attack_type": "GPS_SPOOFING",
  "start_after_seconds": 20,
  "duration_seconds": 90,
  "intensity": 0.7,
  "affected_signals": ["gps_latitude", "gps_longitude"],
  "expected_detection_layers": ["input_integrity", "physics_output"]
}
```

## 15. ML Roadmap

### 15.1 Why Not Start With ML?

ML should not be the first dependency because:

- Real labeled aviation cyberattack datasets are hard to obtain.
- A convincing demo can be built with rules and simulation first.
- Rules are easier to explain to judges and mentors.
- ML needs clean data pipelines and labels.
- The website can collect the right data for ML later.

### 15.2 Phase 1 ML Preparation

Build the system so every event is logged with:

- Raw state
- Derived features
- Scenario label
- Attack type, if simulated
- Detection result
- Score
- Final verdict

This creates training data.

### 15.3 Phase 2 ML Models

Possible first ML models:

- Isolation Forest on flight-state features.
- Autoencoder on multi-sensor streams.
- Kalman filter residual thresholding.
- Flight-phase classifier.
- GPS drift detector.
- Sensor disagreement classifier.

### 15.4 Phase 3 ML Evaluation

Metrics:

- Detection rate
- False positive rate
- Time to detection
- Detection latency
- Severity classification accuracy
- Attack-type classification accuracy
- Rules-only vs rules-plus-ML comparison

## 16. Prototype Roadmap

### Phase 0: PRD and Story Alignment

Deliverables:

- Product requirements document.
- Clear demo story.
- Data-source decision.
- Page/tab structure.
- Scope boundary between real and simulated data.

Success criteria:

- Anyone can understand SKY SHIELD without prior context.
- Team agrees what the first website must show.

### Phase 1: Static High-Fidelity Command Center

Deliverables:

- Frontend shell.
- Top taskbar.
- Full-screen map visual.
- Mock aircraft.
- Mock telemetry panel.
- Mock event stream.
- Mock integrity scoring.

Success criteria:

- Looks like a futuristic product.
- Demo story is visible even without live data.

### Phase 2: Live Airspace Integration

Deliverables:

- Backend OpenSky ingestion.
- Aircraft map markers.
- Selected aircraft telemetry.
- Data freshness indicators.
- Basic replay recording.

Success criteria:

- Site tracks real aircraft in near real time.
- Viewer can click an aircraft and inspect live data.

### Phase 3: Integrity Rule Engine

Deliverables:

- Flight phase classifier.
- Stale data checks.
- Speed jump checks.
- Heading jump checks.
- Vertical-rate checks.
- Altitude disagreement checks.
- Integrity score.
- Evidence log entries.

Success criteria:

- Each aircraft has an explainable status.
- Anomalies create visible event logs.

### Phase 4: Threat Simulation

Deliverables:

- GPS spoofing simulation.
- Barometric injection simulation.
- Coordinated sensor corruption simulation.
- Unsafe AI recommendation simulation.
- Physics output validation.
- Cockpit alert preview.

Success criteria:

- The demo clearly shows SKY SHIELD detecting and responding to an attack.

### Phase 5: Fleet Intelligence

Deliverables:

- Fleet-level anomaly dashboard.
- Regional heatmap.
- Federated learning animation.
- Multi-aircraft attack scenario.

Success criteria:

- Viewers understand how one aircraft's anomaly can improve fleet-wide defense.

### Phase 6: Model Lab

Deliverables:

- Dataset export.
- Feature table.
- Baseline anomaly model.
- Rules vs ML comparison.
- Model evaluation dashboard.

Success criteria:

- The team can begin serious ML work without rebuilding the product.

## 17. Demo Narrative

Recommended three-minute demo:

1. Open SKY SHIELD.
2. Show live aircraft moving on the map.
3. Select one aircraft.
4. Show telemetry and current integrity score.
5. Start "GPS Spoofing Attack" in Threat Simulation.
6. Watch the spoofed GPS ghost trail diverge.
7. Input integrity score drops.
8. AI recommendation becomes unsafe.
9. Physics Output Layer rejects the recommendation.
10. Cockpit alert appears.
11. Evidence Log captures the event.
12. Fleet Intelligence shares the threat signature.
13. Close with Model Lab showing how this becomes future ML training data.

## 18. Key Product Copy

Short description:

SKY SHIELD is a real-time integrity monitor for connected aerospace systems, combining live flight tracking, cyber anomaly detection, physics-based AI validation, and fleet-wide threat intelligence.

One-sentence pitch:

SKY SHIELD helps detect when aircraft AI systems are being deceived by corrupted sensor data, then validates whether AI recommendations are physically safe before they reach critical decision pathways.

Plain-English explanation:

Normal flight trackers show where aircraft are. SKY SHIELD asks whether the data and decisions behind those aircraft can be trusted.

Demo disclaimer:

This prototype uses live public flight-state data combined with simulated aircraft-internal and cyberattack data to demonstrate the SKY SHIELD concept.

## 19. Risks and Mitigations

| Risk | Impact | Mitigation |
| --- | --- | --- |
| Public flight API rate limits | Demo may fail or update slowly | Add replay mode and cache live data. |
| Missing aircraft fields | Some telemetry cards may be blank | Use graceful fallback states. |
| Overclaiming real aircraft access | Credibility risk | Clearly separate real, derived, simulated, and future data. |
| ML not ready | Product may seem incomplete | Start with rule-based integrity engine and label it clearly. |
| UI feels like generic dashboard | Weak pitch impact | Make the map/globe and simulation the main experience. |
| Too many features | Team may overcommit | Build in phases and always keep a demo-ready version. |
| Aviation safety claims | Legal and credibility risk | Present as prototype and research concept, not certified product. |

## 20. Success Metrics

Demo success:

- Viewer understands the concept in under 60 seconds.
- Viewer sees real aircraft being tracked.
- Viewer can explain the difference between a flight tracker and SKY SHIELD.
- Viewer understands the GPS spoofing scenario.
- Viewer sees evidence of detection, physics validation, and fleet sharing.

Technical success:

- Live data updates reliably.
- Replay mode works offline.
- Integrity rules produce explainable results.
- Event logs capture every anomaly.
- Codebase is modular enough for ML integration.

Future ML success:

- Labeled scenario data can be exported.
- Model inputs are well-defined.
- Baseline model can be compared against rules.
- Detection latency can be measured.

## 21. Open Questions

- Which region should be the primary live demo region?
- Should the first visual map be a 2D map or 3D Cesium globe?
- Will the team use X-Plane 12 for Round 2, or start with pure Python simulation?
- Does the team have access to any premium aviation API keys?
- What is the exact competition submission format?
- How much time can each team member commit weekly?
- Should the first ML work focus on GPS spoofing or broader anomaly detection?
- Who owns frontend, backend, simulation, ML, and presentation?

## 22. Immediate Action Plan

Recommended next steps:

1. Build the full Evidence Log page.
2. Prepare Model Lab and ML data export placeholders.
3. Decide whether the procedural globe should become MapLibre GL, Mapbox, or CesiumJS.
4. Add NOAA weather and OurAirports static airport data when the live data layer is ready for expansion.
5. Start ML feature design using the rule outputs, threat signatures, and evidence logs as labels.

Recommended team split:

- Frontend owner: map, command center, tabs, telemetry panels.
- Backend owner: APIs, ingestion, streaming, storage.
- Simulation owner: attack scenarios, replay mode, synthetic sensors.
- Integrity owner: rules, scoring, physics checks.
- ML owner: feature design, labels, baseline models.
- Presentation owner: demo script, video, explanation, PRD alignment.

## 23. References

- OpenSky Network REST API: https://openskynetwork.github.io/opensky-api/rest.html
- OpenSky StateVector fields: https://openskynetwork.github.io/opensky-api/javadoc/org/opensky/model/StateVector.html
- NOAA Aviation Weather Data API: https://aviationweather.gov/data/api/
- OurAirports open data: https://ourairports.com/data/
- OurAirports data dictionary: https://ourairports.com/help/data-dictionary.html
- NASA XPlaneConnect: https://github.com/nasa/XPlaneConnect
- FlightAware AeroAPI: https://www.flightaware.com/commercial/aeroapi
- Aviationstack API documentation: https://aviationstack.com/documentation
- EASA NPA 2025-07: https://www.easa.europa.eu/en/document-library/notices-of-proposed-amendment/npa-2025-07
- EASA and IATA GNSS spoofing/jamming workshop: https://www.easa.europa.eu/en/newsroom-and-events/press-releases/easa-partners-iata-counter-aviation-safety-threat-gnss-spoofing
- OPSGROUP GPS Spoofing Workgroup report article: https://ops.group/blog/gps-spoofing-final-report/
- Thales aviation cyber threat reporting: https://cds.thalesgroup.com/en/hot-topics/cyber-attacks-aviation-have-increased-600-financial-and-state-interests-among-causes
- Airbus Brand Centre colours: https://www.brand.airbus.com/en/asset-library/colours
- Airbus Brand Centre typography: https://www.brand.airbus.com/en/asset-library/typography
- Airbus digital experience and design system overview: https://www.brand.airbus.com/en/digital-experience
- Airbus Skywise graphic guidelines: https://www.brand.airbus.com/en/guidelines/sub-identities/skywise
- Skywise public website: https://www.skywise.com/en

## 24. UI Direction and Progress Log

### 24.1 Superseded UI Direction from 2026-05-07

The home page should be treated as the product interface, not a marketing landing page. The first attempted direction made the first screen look like an active aerospace cyber-defense command center.

Status: rejected by user on 2026-05-07. The direction felt too generic/futuristic and not close enough to the premium aviation-dashboard reference now selected.

Airbus-inspired design cues:

- Use Inter for web UI, matching Airbus guidance for websites, applications, and mobile applications.
- Use Airbus/Skywise-inspired deep blue foundations, especially the Skywise-style dark radial background direction from `#00205b` toward `#011133`.
- Use a restrained operational palette: cyan for active data, green for nominal status, amber/orange for watch states, and red for cyber or physics violations.
- Use precise, compact enterprise controls rather than large decorative marketing sections.
- Use thin key lines, grid/map structures, data-flow dots, telemetry panels, and system-status strips.
- Do not use official Airbus logos, restricted assets, or downloaded brand files unless the team has permission. The first prototype should be visually compatible with Airbus/Skywise design language without impersonating official Airbus software.

Home page layout direction:

- Top taskbar: `Live Airspace`, `Flight Lens`, `Integrity Engine`, `Threat Simulation`, `Fleet Intelligence`, `Evidence Log`, `Model Lab`.
- First viewport: full command-center shell.
- Left rail: mission controls, region selector, live/replay mode, data-source health, attack scenario action.
- Center: live airspace map/globe stage with aircraft markers, trails, integrity envelope, and spoofing vector overlay.
- Right rail: selected aircraft telemetry, input integrity score, physics score, behavioral confidence, final SKY SHIELD verdict.
- Bottom rail: runtime evidence log.

### 24.2 Superseded Implementation Progress on 2026-05-07

Created a dependency-free static homepage prototype:

- `/Users/praneethdevaki/Documents/New project/sky-shield-home/index.html`
- `/Users/praneethdevaki/Documents/New project/sky-shield-home/styles.css`
- `/Users/praneethdevaki/Documents/New project/sky-shield-home/app.js`

The first homepage prototype included:

- Full-screen SKY SHIELD command center.
- Airbus/Skywise-inspired dark blue visual system.
- Top operational taskbar.
- Live status strip with aircraft count and latency.
- Procedural airspace map stage with aircraft markers and trails.
- Selected-flight integrity panel.
- Runtime evidence log.
- Interactive `Start Spoofing Demo` button that changes the UI into a cyber-anomaly state, lowers integrity/physics scores, shows the spoof vector, and inserts evidence events.

Validation completed:

- JavaScript syntax check passed with Node.
- Could not render an automated Playwright screenshot because Playwright is not installed in the local runtime.

### 24.3 Behance Reference Analysis on 2026-05-07

User-provided reference:

- Behance project: `Flight tracking system / dashboard UI`
- Creator shown by Behance search/page metadata: Sona Suryan
- URL: https://www.behance.net/gallery/247017915/Flight-tracking-system-dashboard-UI/modules/1428242033

Important design lessons from the reference:

- The visual language is premium aviation product UI, not sci-fi command center UI.
- Palette is restrained: white, black, soft gray, deep charcoal, and one strong aviation-orange accent.
- Typography uses Inter with clean hierarchy, frequent medium/semibold weights, and clear numerical readability.
- The core app screen is map-first: a large map dominates, with orange aircraft markers and route traces.
- Navigation appears as a compact left vertical icon rail, not a large sidebar.
- Search is a floating pill control at the top of the map with a dropdown and orange circular search action.
- The selected-flight experience sits in a right-side details panel with aircraft identifier, route, aircraft visual, progress line, times, and expandable data groups.
- The reference supports both light and dark modes; the dark mode uses a grayscale map, charcoal panels, white text, and orange highlights.
- The page has editorial aviation imagery in the case-study presentation, but the actual app interface remains compact, data-driven, and usable.
- Rounded corners are present but should be kept restrained in our implementation to stay professional and compatible with our UI guidelines.
- Do not copy or reuse the Behance images or project assets. Use the reference for design direction only.

New home-page direction:

- Use a light map-first dashboard as the default home screen.
- Keep orange as the primary accent for aircraft, route progress, selected states, and call-to-action controls.
- Use black/dark panels selectively for contrast and cyber-anomaly mode.
- Replace the top-heavy taskbar with a compact left icon rail, while retaining the same page concepts behind the icons.
- Keep the first page focused on live flight tracking plus SKY SHIELD integrity overlay.

### 24.4 Implementation Progress After Behance Pivot on 2026-05-07

Rebuilt the static homepage prototype to follow the Behance-inspired direction:

- `/Users/praneethdevaki/Documents/New project/sky-shield-home/index.html`
- `/Users/praneethdevaki/Documents/New project/sky-shield-home/styles.css`
- `/Users/praneethdevaki/Documents/New project/sky-shield-home/app.js`

Current homepage capabilities after redesign:

- Centered premium aviation dashboard preview.
- Light grayscale map surface.
- Orange aircraft markers and dashed route lines.
- Compact left icon rail for app sections.
- Floating search and flight-number selector.
- Right selected-flight panel with aircraft details, route summary, timing data, integrity verdict, and expandable data groups.
- Lower section with runtime evidence log, punctuality-style chart card, and concise feature explanation.
- Interactive `Simulate GPS Spoofing` button that switches to dark anomaly mode, updates verdict text, lowers integrity scores, and changes evidence-log entries.

Validation completed:

- JavaScript syntax check passed with Node.
- Automated screenshot still unavailable because Playwright or another local browser renderer is not installed in the runtime.

### 24.5 Next UI Steps

Recommended next steps:

1. Review the redesigned static home page in the in-app browser.
2. Decide whether the real map should be MapLibre GL, Mapbox, or CesiumJS.
3. Replace the procedural map with real aircraft plotting once the home-page look is approved.
4. Create the first real data adapter for OpenSky state vectors.
5. Add replay data so the demo remains reliable without live API access.
6. Build `Flight Lens` after the home page because it reuses the selected-aircraft panel.

### 24.6 Homepage Rebuild with Generated Assets on 2026-05-07

User feedback:

- The previous homepage still looked half-cooked.
- The page needed stronger aviation imagery or flight vectors.
- The page needed either a live globe simulation or a more convincing live flight simulation.
- The left rail icons should not be triangle placeholders.
- The page needed more widgets and a fuller dashboard feel.

Actions completed:

- Generated a premium grayscale aviation hero image using the built-in image generation tool.
- Saved the project-bound generated image to:
  - `/Users/praneethdevaki/Documents/New project/sky-shield-home/assets/sky-shield-hero-aircraft.png`
- Rebuilt the homepage around the generated aircraft/cloud image, using it as the editorial hero backdrop.
- Replaced placeholder triangle icons with inline SVG icons for:
  - aircraft
  - globe
  - shield/integrity
  - radar/threat simulation
  - activity/fleet intelligence
  - evidence log
  - data/model lab
  - settings
  - search
  - alert
- Added an animated live globe simulation with orbiting aircraft and flight paths.
- Added a stronger dashboard structure:
  - top nav and live-feed status
  - hero metric widgets
  - left icon rail
  - floating search and mode controls
  - live globe simulation
  - flight vector strip
  - selected-flight details
  - route progress card
  - time grid
  - integrity verdict
  - integrity-layer meters
  - GPS spoofing simulation button
  - punctuality widget
  - data source widget
  - runtime evidence log
- Kept the Behance-inspired palette of black, white, soft gray, deep charcoal, and aviation orange.
- Preserved the interactive spoofing state: the `Simulate GPS Spoofing` button now switches the dashboard into a darker anomaly mode, lowers scores, updates verdict copy, and rewrites the evidence log.

Validation completed:

- JavaScript syntax check passed with Node.
- Static scan found no `TODO`, `FIXME`, placeholder `href="#"`, `triangle`, or `letter-spacing` strings in the homepage files.

Generated asset prompt used:

```text
Create a premium grayscale aviation hero image: a modern passenger jet banking above dense clouds, photographed from above and slightly behind, with cinematic soft light, realistic cloud texture, high-end aerospace product presentation mood. Wide 16:9 landscape, aircraft positioned in the upper-right third with generous negative space on the left and lower area for UI overlays, subtle depth and atmospheric haze. Refined monochrome black/white/soft gray with a tiny warm orange reflection allowed only as an accent. No logos, no airline branding, no text, no watermark, no UI mockup, no people, no distorted aircraft anatomy, no fantasy sci-fi elements.
```

### 24.7 Superseded Top Navigation Options on 2026-05-11

User feedback:

- The top menu in the hero was too pill-heavy and visually dominant.
- The navigation needed a more polished premium aviation-dashboard treatment.
- User asked for a couple of design options for the top menu.

Actions completed:

- Reworked the top navigation markup in:
  - `/Users/praneethdevaki/Documents/New project/sky-shield-home/index.html`
  - `/Users/praneethdevaki/Documents/New project/sky-shield-home/styles.css`
  - `/Users/praneethdevaki/Documents/New project/sky-shield-home/app.js`
- Added icon-supported top menu items:
  - `Live Airspace`
  - `Flight Lens`
  - `Integrity Engine`
  - `Threat Sim`
  - `Fleet`
- Added a more compact brand lockup with:
  - SKY SHIELD mark
  - product name
  - `Runtime integrity monitor` subtitle
- Added live status content with:
  - live indicator dot
  - `Live feed`
  - aircraft count
- Added an in-page `Menu option` switcher so the team can compare three top navigation styles directly in the browser:
  - `A. Command Dock`: recommended default; compact glass command bar with grouped nav buttons.
  - `B. Flight Line`: lighter underline-style nav with less chrome and more editorial breathing room.
  - `C. Ops Bar`: denser operations-console segmented bar for a more dashboard-heavy feel.

Status: superseded by user feedback on 2026-05-11. The menu-option switcher was removed, and `Flight Line` became the default navigation design.

Validation completed:

- JavaScript syntax check passed with Node.
- Static scan found no `TODO`, `FIXME`, placeholder `href="#"`, `triangle`, or `letter-spacing` strings in the homepage files.

### 24.8 Finalized Flight Line Navigation on 2026-05-11

User feedback:

- Remove the `Menu option` selector completely.
- Use the `Flight Line` navigation option as the default website design.
- Improve the design and make the site and nav responsive.

Actions completed:

- Removed the `Menu option` panel from:
  - `/Users/praneethdevaki/Documents/New project/sky-shield-home/index.html`
- Removed the nav-style switcher JavaScript from:
  - `/Users/praneethdevaki/Documents/New project/sky-shield-home/app.js`
- Removed the old `nav-line`, `nav-ops`, and `nav-option-panel` CSS branches from:
  - `/Users/praneethdevaki/Documents/New project/sky-shield-home/styles.css`
- Promoted the `Flight Line` treatment into the default `.top-nav` design.
- Updated the top navigation to use:
  - subtle top and bottom rules
  - transparent aviation-style line navigation
  - orange active underline
  - circular SKY SHIELD mark
  - compact live-feed status pill
  - horizontally scrollable nav items on smaller viewports

Responsive behavior:

- Desktop: brand, nav, and live-feed status sit in one clean horizontal flight line.
- Medium screens: brand and live-feed status remain on the first row; nav drops to a second row with horizontal scrolling.
- Mobile: nav becomes a compact card-like header with hidden secondary subtitle text, smaller controls, and a scrollable flight-line nav row.

Validation completed:

- JavaScript syntax check passed with Node.
- Static scan found no `nav-option`, `data-nav-style`, `nav-line`, `nav-ops`, `setNavStyle`, `TODO`, `FIXME`, placeholder `href="#"`, `triangle`, or `letter-spacing` strings in the homepage files.

### 24.9 Step 1 and Step 2 Wrap-Up on 2026-05-12

User request:

- Wrap up the first two next steps quickly:
  - Step 1: polish the current homepage and responsive navigation.
  - Step 2: build the real Live Airspace data path.

Actions completed:

- Updated `/Users/praneethdevaki/Documents/New project/sky-shield-home/index.html` with a more operational Live Airspace interface:
  - callsign / ICAO search
  - region selector
  - manual refresh
  - feed status strip
  - altitude, speed, and anomaly filters
  - dynamic aircraft vector layer
  - dynamic flight summary strip
  - selected-flight telemetry fields
- Updated `/Users/praneethdevaki/Documents/New project/sky-shield-home/app.js` with the first real data integration path:
  - OpenSky Network REST fetch for live public aircraft state vectors
  - automatic refresh every 15 seconds
  - timeout and failure handling
  - replay-safe simulation fallback when OpenSky is blocked, unavailable, empty, or slow
  - normalization for callsign, ICAO24, country, latitude, longitude, altitude, velocity, heading, vertical rate, squawk, last contact, and position source
  - basic computed integrity checks for stale updates, cruise vertical-rate variance, speed spike, and low-altitude speed inconsistency
  - dynamic verdict, integrity scores, fleet score, anomaly count, and evidence log updates
- Updated `/Users/praneethdevaki/Documents/New project/sky-shield-home/styles.css` with responsive UI polish:
  - responsive top nav behavior
  - command-center feed strip and filters
  - aircraft markers with trails, labels, normal/watch/critical color states, and selected state
  - responsive globe spacing so overlays, markers, flight cards, and details do not collide on mobile
  - telemetry grid styling for the selected aircraft panel
- Updated `/Users/praneethdevaki/Documents/New project/sky-shield-home/CLAUDE.md` so future work starts from the current state instead of the older next-step list.

Data honesty decisions:

- Live OpenSky aircraft data is labeled `LIVE · PUBLIC`.
- Local replay fallback data is labeled `REPLAY · SIMULATED`.
- Derived scoring and verdict behavior remains rule-based and should be treated as computed prototype logic, not certified aviation performance.

Validation completed:

- JavaScript syntax check passed with Node using `node --check sky-shield-home/app.js`.
- Current implementation can run from the existing static `index.html`; no framework, bundler, or server is required.

### 24.10 Navigation Row Fix on 2026-05-12

User feedback:

- The top navigation was appearing across three rows in the browser.

Cause:

- The responsive grid breakpoint allowed the nav links to span a full row before the right-side status cluster was placed. CSS grid auto-placement then pushed the status cluster into a third row.

Actions completed:

- Updated `/Users/praneethdevaki/Documents/New project/sky-shield-home/styles.css`.
- Added explicit grid areas for the top navigation:
  - `brand`
  - `nav`
  - `status`
- Kept brand, nav, and status on one row for wider/tablet widths.
- Added a clean two-row fallback below 960px:
  - row 1: brand and status
  - row 2: scrollable nav links
- Removed the accidental three-row layout path.

Validation completed:

- JavaScript syntax check passed with Node.
- CSS brace balance check passed.

### 24.11 Live Airspace Dashboard Polish on 2026-05-12

User feedback:

- Navigation is fixed.
- Finish polishing the Live Airspace dashboard before moving to the next page.

Actions completed:

- Updated `/Users/praneethdevaki/Documents/New project/sky-shield-home/index.html`.
- Updated `/Users/praneethdevaki/Documents/New project/sky-shield-home/styles.css`.
- Updated `/Users/praneethdevaki/Documents/New project/sky-shield-home/app.js`.
- Improved replay mode presentation so a fallback count no longer reads like a broken live feed:
  - nav aircraft badge now shows `live` or `replay`
  - hero aircraft metric now explains whether the count is OpenSky live data or replay demo vectors
  - feed health status now shows `REPLAY` when the page is in fallback mode instead of incorrectly showing `WATCH`
- Made the status strip feel more like an aviation command console:
  - darker glass cards
  - source notes under each metric
  - clearer latency, anomaly, and tracked-vector labels
- Added more seeded replay vectors so demo mode has a fuller airspace view while still being clearly labeled as simulated.
- Improved the selected-flight panel:
  - source badge: `LIVE · PUBLIC` or `REPLAY · SIMULATED`
  - flight phase badge
  - health/verdict badge
  - computed-check explanation
  - clearer telemetry source labeling
- Adjusted the fleet integrity metric so replay mode uses a prototype demo baseline while live mode still computes from the public feed.

Data honesty decisions:

- Replay data remains explicitly labeled `REPLAY · SIMULATED`.
- Live OpenSky data remains labeled `LIVE · PUBLIC`.
- The selected-flight computed-check copy is described as a prototype computed check, not certified aviation performance.

Validation completed:

- JavaScript syntax check passed with Node.
- Confirmed all `app.js` ID selectors exist in `index.html`.
- CSS brace balance check passed.

### 24.24 Next.js Migration Foundation on 2026-05-25

User request:

- Start the first advisor-feedback step ASAP: restructure the repo and migrate the project toward Next.js with heavy modularization.

Actions completed:

- Added a Next.js app foundation at the repository root.
- Added `package.json`, `package-lock.json`, and `next.config.mjs`.
- Added App Router files:
  - `/app/layout.jsx`
  - `/app/page.jsx`
  - `/app/api/opensky/route.js`
- Added `components/legacy/LegacySkyShield.jsx`.
- Added shared airspace modules:
  - `/lib/airspace/regions.js`
  - `/lib/airspace/opensky.js`
- Added public runtime assets:
  - `/public/assets/sky-shield-hero-aircraft.png`
  - `/public/legacy/sky-shield-app.js`
- Copied the current visual CSS into `/app/globals.css`.
- Kept `/sky-shield-home/` as the legacy visual baseline while the UI is converted section-by-section into smaller React modules.
- Removed the old Vercel static build configuration and old standalone Vercel function:
  - deleted `/vercel.json`
  - deleted `/api/opensky.js`
- Moved the live `/api/opensky` behavior into the Next.js API route.
- Added an npm override for `postcss@8.5.10` after audit flagged the transitive Next.js PostCSS dependency.

Architecture decision:

- This migration intentionally preserves the current SKY SHIELD UI first.
- The app now runs through Next.js, but the existing dashboard markup and browser interaction script are mounted through `LegacySkyShield`.
- This gives the next build steps a modular app shell without risking a visual regression during the migration.
- Future steps should convert one section at a time into real React components:
  - Live Airspace
  - Cesium 3D airspace
  - Replay timeline
  - Selected aircraft panel
  - Threat Sim
  - Evidence Log
  - Model Lab

Validation completed:

- `npm run check` passed.
- `npm run build` passed with Next.js 15.5.18.
- `npm audit --audit-level=moderate --omit=dev` returned zero vulnerabilities after the PostCSS override.
- Local Next.js app returned HTTP `200` at `http://127.0.0.1:3000/`.
- Local Next.js `/api/opensky?region=europe` returned live OpenSky payload data.
- Browser verification confirmed the migrated Next.js app renders the SKY SHIELD dashboard with no fresh console errors.

### 24.23 Remaining Product Sections Build on 2026-05-21

User request:

- Resume the remaining roadmap work after Live Airspace, Flight Lens, Integrity Engine, Threat Sim, and Fleet Intelligence were completed.

Actions completed:

- Updated `/Users/praneethdevaki/Documents/New project/sky-shield-home/index.html`.
- Updated `/Users/praneethdevaki/Documents/New project/sky-shield-home/styles.css`.
- Updated `/Users/praneethdevaki/Documents/New project/sky-shield-home/app.js`.
- Updated `/Users/praneethdevaki/Documents/New project/sky-shield-home/CLAUDE.md`.
- Added top navigation items for:
  - Evidence Log
  - Model Lab
- Wired side-rail icons for:
  - Evidence Log
  - Model Lab
- Added a full `Evidence Log` section with:
  - runtime evidence stream
  - selected case summary
  - source-class labeling
  - review state
  - JSON evidence/training row preview
  - provenance list
  - ML training export readiness meter
- Added a full `Model Lab` section with:
  - no-production-model status
  - ML readiness gate
  - candidate feature list
  - rule/simulated label queue
  - offline ML roadmap
  - JSONL-style training row preview
- Connected Evidence Log and Model Lab to:
  - selected aircraft
  - live vs replay data origin
  - rule-based integrity checks
  - Threat Sim attack state
  - Fleet Intelligence signature context
- Updated the Evidence widget `See All Data` button so it jumps to the full Evidence Log section.
- Changed MapLibre initialization so the MapLibre globe initializes only when map mode is requested, keeping the default procedural globe lightweight and preventing idle MapLibre console noise.

Data honesty decisions:

- Model Lab explicitly states that no production ML model is running.
- Candidate features are derived from the current selected vector and prototype integrity scores.
- Labels are rule-generated or simulated attack labels until analyst review and real dataset governance exist.
- Evidence Log records are prototype audit records, not certified flight-data records.

Validation completed:

- JavaScript syntax check passed with Node.
- Confirmed all `app.js` ID selectors exist in `index.html`.
- CSS brace balance check passed.
- Local server returned HTTP `200` for the updated page.
- Browser verification confirmed Evidence Log renders.
- Browser verification confirmed Model Lab renders.
- Browser verification confirmed the MapLibre satellite globe still loads on demand.
- Browser console check returned no fresh errors after the MapLibre initialization change.

### 24.22 Aircraft Icon Badge Removal on 2026-05-12

User request:

- Remove the circular badge around aircraft icons.
- Increase the aircraft silhouette so the plane itself fills the same visual space.
- Update selected-state CSS so selected icons no longer depend on circular backgrounds.

Actions completed:

- Updated `/Users/praneethdevaki/Documents/New project/sky-shield-home/styles.css`.
- Removed circular aircraft icon treatments from:
  - procedural globe aircraft markers
  - MapLibre aircraft markers
  - flight strip cards
  - selected-flight header
  - route progress aircraft
  - runtime evidence log aircraft rows
  - Flight Lens identity aircraft
  - active Live Airspace side-rail aircraft icon
- Increased aircraft silhouette sizing across those surfaces.
- Reworked selected states to use:
  - orange/critical icon color
  - drop-shadow glow
  - selected card border/shadow
  - side-rail accent bar
- Kept non-aircraft controls, such as search and standard UI buttons, unchanged.

Design decision:

- Aircraft icons should read as actual plane silhouettes, not as circular badges.
- Selection should be visible without adding a circular container around the aircraft.

Validation completed:

- JavaScript syntax check passed with Node.
- Confirmed all `app.js` ID selectors exist in `index.html`.
- CSS brace balance check passed.
- Local server returned HTTP `200` for the updated page.
- Browser verification showed aircraft-only icons on the Live Airspace globe/map surface, flight cards, selected-flight card, and side rail.

### 24.17 Fleet Intelligence Build on 2026-05-12

User request:

- Move to the next section of the build and finish the missing Fleet Intelligence surface.

Actions completed:

- Updated `/Users/praneethdevaki/Documents/New project/sky-shield-home/index.html`.
- Updated `/Users/praneethdevaki/Documents/New project/sky-shield-home/styles.css`.
- Updated `/Users/praneethdevaki/Documents/New project/sky-shield-home/app.js`.
- Restored `Fleet` as a top navigation item.
- Wired the side-rail Fleet Intelligence activity icon to the new section.
- Added a real `Fleet Intelligence` section after Threat Sim.
- Added regional anomaly heatmap cards for monitored corridors.
- Added active threat signature cards:
  - `GPS_DRIFT_SIGNATURE`
  - `BARO_INJECTION_PATTERN`
  - `STALE_REPLAY_CLUSTER`
  - `CONTROL_RHYTHM_ANOMALY`
- Added selected/affected aircraft review tied to the current aircraft and watchlist.
- Added federated update story:
  - raw telemetry stays local
  - threat signature is extracted
  - baseline update is queued/reviewed/completed based on Threat Sim progress
- Connected Fleet Intelligence to the existing Threat Sim state so active simulations change:
  - selected signature
  - sharing status
  - affected aircraft count
  - regional heat
  - baseline update progress
Data honesty decisions:

- Fleet Intelligence is still prototype computation, not a certified airline fleet product.
- Federated learning is represented as a simulation story and baseline-update queue, not a real deployed ML training pipeline.
- Raw telemetry sharing is explicitly avoided in the UI copy.

Validation completed:

- JavaScript syntax check passed with Node.
- Confirmed all `app.js` ID selectors exist in `index.html`.
- CSS brace balance check passed.

### 24.19 Globe and MapLibre Toggle on 2026-05-12

User clarification:

- After the MapLibre upgrade, the expected globe was no longer visible.

Actions completed:

- Restored the procedural globe as the default Live Airspace visual.
- Kept MapLibre available as an optional real-map mode behind a `Map` / `Globe` toggle.
- Added the MapLibre container as a progressive enhancement instead of a silent replacement for the globe.
- Preserved existing replay aircraft markers on the globe.
- Gated MapLibre marker and camera updates so map code only runs when map mode is active.

Validation completed:

- JavaScript syntax check passed with Node.
- Confirmed all `app.js` ID selectors exist in `index.html`.
- CSS brace balance check passed.
- Browser reload shows the globe by default.
- Browser toggle from `Map` to `Globe` works without fresh console errors.

### 24.20 MapLibre Satellite Globe Style on 2026-05-12

User request:

- Use MapLibre's globe style so the map mode looks like an actual globe instead of a flat outline map.

Actions completed:

- Updated MapLibre style configuration to use globe projection.
- Replaced the demo vector style with satellite raster imagery.
- Added atmosphere/vignette treatment so the map mode reads as an Earth globe.
- Retained aircraft markers, selected-flight styling, trails, region boundary, and the `Map` / `Globe` toggle.
- Adjusted map camera zoom/pitch for a curved globe view over the selected airspace region.

Validation completed:

- JavaScript syntax check passed with Node.
- Confirmed all `app.js` ID selectors exist in `index.html`.
- CSS brace balance check passed.
- Browser verification showed satellite globe mode with no fresh console errors.

### 24.21 Aircraft Icon Upgrade on 2026-05-12

User request:

- Replace the generic triangular flight marker with an actual plane-like icon.

Actions completed:

- Replaced the global `icon-plane` SVG with a shared top-down airliner silhouette.
- Replaced the separate inline MapLibre marker SVG with the same aircraft silhouette.
- Tuned SVG fill/stroke behavior so the icon reads clearly at small marker sizes.
- Applied the same aircraft shape across:
  - procedural globe markers
  - MapLibre satellite globe markers
  - flight strip cards
  - selected-flight panel
  - route progress indicator
  - animated orbit aircraft

Validation completed:

- JavaScript syntax check passed with Node.
- Confirmed all `app.js` ID selectors exist in `index.html`.
- CSS brace balance check passed.
- Browser verification showed the new aircraft silhouette in both globe mode and MapLibre globe mode with no fresh console errors.

### 24.13 Local Server and OpenSky Proxy on 2026-05-12

User request:

- Move away from `file://` behavior and make API usage more reliable with a local server/proxy.

Actions completed:

- Added `/Users/praneethdevaki/Documents/New project/sky-shield-home/server.js`.
- Server behavior:
  - serves the static SKY SHIELD site from `sky-shield-home`
  - binds locally to `127.0.0.1`
  - defaults to port `4173`
  - exposes `GET /api/opensky?region=europe|gulf|singapore|atlantic`
  - forwards the request to OpenSky using the selected region bounding box
  - returns JSON with proxy metadata and the upstream OpenSky payload
  - returns structured JSON errors if OpenSky times out, rate-limits, or fails
- Updated `/Users/praneethdevaki/Documents/New project/sky-shield-home/app.js`.
- Frontend behavior:
  - when opened over `http://127.0.0.1:4173`, OpenSky requests use `/api/opensky`
  - when opened as `file://`, the old direct OpenSky request remains as fallback
  - replay mode still activates if the proxy receives an upstream error such as rate limiting

Validation completed:

- JavaScript syntax check passed for `app.js`.
- JavaScript syntax check passed for `server.js`.
- Confirmed all `app.js` ID selectors exist in `index.html`.
- Local static page responded with HTTP `200`.
- Local `app.js` responded with HTTP `200`.
- Local OpenSky proxy endpoint responded; upstream OpenSky returned HTTP `429` during the test, so the application correctly remains replay-safe when live public data is rate-limited.

Run command:

```bash
node sky-shield-home/server.js
```

Local URL:

```text
http://127.0.0.1:4173
```

### 24.14 Integrity Engine Build on 2026-05-12

User request:

- Proceed with the next recommended section: Integrity Engine.

Actions completed:

- Updated `/Users/praneethdevaki/Documents/New project/sky-shield-home/index.html`.
- Updated `/Users/praneethdevaki/Documents/New project/sky-shield-home/styles.css`.
- Updated `/Users/praneethdevaki/Documents/New project/sky-shield-home/app.js`.
- Added a real `Integrity Engine` section below Flight Lens.
- Wired top navigation and side rail buttons so:
  - `Live Airspace` scrolls to the live dashboard.
  - `Flight Lens` scrolls to the selected-aircraft forensic view.
  - `Integrity Engine` scrolls to the rule analysis section.
  - active navigation state stays synchronized.
- Integrity Engine now displays the four SKY SHIELD conceptual layers:
  - Input Integrity
  - Physics Output
  - Behavioral Signal
  - Fleet Intelligence
- Added a pipeline visual:
  - State Vector
  - Input Checks
  - Physics Gate
  - Trusted Verdict
- Added a dynamic rule bank connected to the selected aircraft:
  - position update freshness
  - vertical-rate envelope
  - speed and altitude physics
  - phase coherence
  - control rhythm confidence
  - fleet anomaly clustering
  - data-source labeling
- Added an AI recommendation gate with:
  - `ALLOW`
  - `REVIEW`
  - `QUARANTINE`
  - corresponding trusted-output labels
- Engine state updates when:
  - a new aircraft is selected in Live Airspace
  - replay/live mode changes
  - the spoofing demo is toggled

Data honesty decisions:

- Current checks are explicitly `RULE-BASED`.
- Future-model readiness is labeled `ML-READY` without claiming ML is already implemented.
- Behavioral signal remains simulated in v1.
- Fleet intelligence is computed from the current visible prototype airspace, not an actual airline fleet.

Validation completed:

- JavaScript syntax check passed with Node.
- Confirmed all `app.js` ID selectors exist in `index.html`.
- CSS brace balance check passed.
- Local server returned HTTP `200` for the updated page.

### 24.18 Data & Compute UI Removal on 2026-05-12

User clarification:

- "Data and compute" means backend/data-processing code behind the existing UI, not a visible dashboard section.
- For now, remove the Data & Compute UI and return to the roadmap for remaining product sections.

Actions completed:

- Updated `/Users/praneethdevaki/Documents/New project/sky-shield-home/index.html`.
- Updated `/Users/praneethdevaki/Documents/New project/sky-shield-home/styles.css`.
- Updated `/Users/praneethdevaki/Documents/New project/sky-shield-home/app.js`.
- Removed the top-nav `Data & Compute` item.
- Removed the side-rail Data & Compute/database button.
- Removed the full `Data & Compute` section markup.
- Removed Data & Compute-specific JavaScript selectors, render function, and render calls.
- Removed Data & Compute-specific CSS and responsive rules.
- Preserved the real data path already needed by the app:
  - local Node server
  - `/api/opensky` proxy
  - OpenSky fallback behavior
  - client-side integrity computation that currently powers Live Airspace, Flight Lens, Integrity Engine, Threat Sim, and Fleet Intelligence

Validation completed:

- JavaScript syntax check passed with Node.
- Confirmed all `app.js` ID selectors exist in `index.html`.
- CSS brace balance check passed.

### 24.15 Threat Sim Build on 2026-05-12

User request:

- Proceed with the next recommended section: Threat Sim.

Actions completed:

- Updated `/Users/praneethdevaki/Documents/New project/sky-shield-home/index.html`.
- Updated `/Users/praneethdevaki/Documents/New project/sky-shield-home/styles.css`.
- Updated `/Users/praneethdevaki/Documents/New project/sky-shield-home/app.js`.
- Added a real `Threat Sim` section below Integrity Engine.
- Wired top navigation and side rail buttons so:
  - `Live Airspace` scrolls to the live dashboard.
  - `Flight Lens` scrolls to the selected-aircraft forensic view.
  - `Integrity Engine` scrolls to the rule analysis section.
  - `Threat Sim` scrolls to the attack scenario section.
  - active navigation state stays synchronized.
- Added attack controls:
  - attack mode selector
  - intensity slider
  - duration selector
  - start button
  - pause/resume button
  - reset button
- Added supported attack modes:
  - GPS drift
  - GPS jump
  - Barometric injection
  - Stale replay
  - AI output attack
  - Control injection
- Added verified-vs-spoofed track visual:
  - verified motion line
  - spoofed input line
  - divergence readout
  - GPS offset readout
  - gate-state readout
- Added sensor degradation cards:
  - GNSS
  - Barometric
  - INS cross-check
  - AI Gate
- Added attack timeline:
  - normal monitoring
  - threat injected
  - evidence mismatch
  - unsafe recommendation
  - physics gate blocks
  - fleet signature queued
- Connected Threat Sim to existing product state:
  - existing spoofing button now starts/resets the Threat Sim state
  - Flight Lens responds when the attack starts
  - Integrity Engine changes to `QUARANTINE`/blocked output behavior
  - Evidence Log updates with cyber anomaly events

Data honesty decisions:

- Threat Sim is explicitly simulated.
- Verified/spoofed paths are generated locally for demo clarity.
- The section does not claim real aircraft control, certified detection, or real avionics access.

Validation completed:

- JavaScript syntax check passed with Node.
- Confirmed all `app.js` ID selectors exist in `index.html`.
- CSS brace balance check passed.
- Local server returned HTTP `200` for the updated page.

### 24.12 Flight Lens Build on 2026-05-12

User request:

- Proceed with the next recommended step after Live Airspace: build Flight Lens using the selected aircraft from the dashboard.

Actions completed:

- Updated `/Users/praneethdevaki/Documents/New project/sky-shield-home/index.html`.
- Updated `/Users/praneethdevaki/Documents/New project/sky-shield-home/styles.css`.
- Updated `/Users/praneethdevaki/Documents/New project/sky-shield-home/app.js`.
- Added a real `Flight Lens` section below Live Airspace.
- Wired top navigation and side rail buttons so:
  - `Live Airspace` scrolls to the live dashboard.
  - `Flight Lens` scrolls to the detailed aircraft view.
  - active navigation state stays synchronized between the top nav and side rail.
- Connected Flight Lens to the selected aircraft data model from Live Airspace.
- Flight Lens now displays:
  - callsign
  - ICAO24
  - origin country
  - source label: `LIVE · PUBLIC` or `REPLAY · SIMULATED`
  - position source
  - last contact
  - squawk
  - latitude and longitude
  - altitude
  - speed
  - heading
  - vertical rate
  - computed flight phase
  - SKY SHIELD verdict/risk label
- Added generated telemetry-history mini charts for:
  - altitude
  - speed
  - vertical rate
  - heading
- Added visible integrity check cards:
  - position staleness
  - vertical-rate envelope
  - speed and altitude envelope
  - flight-phase coherence
  - data-source labeling
- Added Flight Lens summary scores:
  - Input Integrity
  - Physics Safety
  - Behavioral Confidence

Data honesty decisions:

- Charts are generated client-side from the current selected vector and should be treated as prototype telemetry history, not archived real flight history.
- Rule checks are labeled `RULE-BASED · ML-READY` to preserve the future ML story without claiming ML is already present.
- Live public and replay simulated source labels remain visible in the detailed view.

Validation completed:

- JavaScript syntax check passed with Node.
- Confirmed all `app.js` ID selectors exist in `index.html`.
- CSS brace balance check passed.
