const elements = {
  attackButton: document.querySelector("#attack-button"),
  eventList: document.querySelector("#event-list"),
  verdict: document.querySelector("#verdict"),
  verdictCopy: document.querySelector("#verdict-copy"),
  inputScore: document.querySelector("#input-score"),
  physicsScore: document.querySelector("#physics-score"),
  behaviorScore: document.querySelector("#behavior-score"),
  inputMeter: document.querySelector("#input-meter"),
  physicsMeter: document.querySelector("#physics-meter"),
  behaviorMeter: document.querySelector("#behavior-meter"),
  aircraftCount: document.querySelector("#aircraft-count"),
  aircraftTrend: document.querySelector("#aircraft-trend"),
  aircraftContext: document.querySelector("#aircraft-context"),
  navAircraftCount: document.querySelector("#nav-aircraft-count"),
  statusAircraftCount: document.querySelector("#status-aircraft-count"),
  statusAnomalies: document.querySelector("#status-anomalies"),
  statusLatency: document.querySelector("#status-latency"),
  feedStatusNote: document.querySelector("#feed-status-note"),
  trackedNote: document.querySelector("#tracked-note"),
  anomalyNote: document.querySelector("#anomaly-note"),
  latencyNote: document.querySelector("#latency-note"),
  feedMode: document.querySelector("#feed-mode"),
  feedHealthLabel: document.querySelector("#feed-health-label"),
  fleetScore: document.querySelector("#fleet-score"),
  fleetTrend: document.querySelector("#fleet-trend"),
  fleetContext: document.querySelector("#fleet-context"),
  watchCount: document.querySelector("#watch-count"),
  watchTrend: document.querySelector("#watch-trend"),
  watchContext: document.querySelector("#watch-context"),
  flightLayer: document.querySelector("#flight-layer"),
  flightStrip: document.querySelector("#flight-strip"),
  regionSelect: document.querySelector("#region-select"),
  altitudeFilter: document.querySelector("#altitude-filter"),
  speedFilter: document.querySelector("#speed-filter"),
  anomalyFilter: document.querySelector("#anomaly-filter"),
  callsignSearch: document.querySelector("#callsign-search"),
  searchButton: document.querySelector("#search-button"),
  refreshLive: document.querySelector("#refresh-live"),
  viewToggle: document.querySelector("#view-toggle"),
  mapStage: document.querySelector("#maplibre-stage"),
  regionCaption: document.querySelector("#region-caption"),
  dataOriginCaption: document.querySelector("#data-origin-caption"),
  selectedCallsign: document.querySelector("#selected-callsign"),
  selectedMeta: document.querySelector("#selected-meta"),
  selectedSourceBadge: document.querySelector("#selected-source-badge"),
  selectedPhaseBadge: document.querySelector("#selected-phase-badge"),
  selectedHealthBadge: document.querySelector("#selected-health-badge"),
  selectedCheckNote: document.querySelector("#selected-check-note"),
  routeOriginCode: document.querySelector("#route-origin-code"),
  routeOriginLabel: document.querySelector("#route-origin-label"),
  routeOriginTime: document.querySelector("#route-origin-time"),
  routeDestinationCode: document.querySelector("#route-destination-code"),
  routeDestinationLabel: document.querySelector("#route-destination-label"),
  routeDestinationTime: document.querySelector("#route-destination-time"),
  telemetryContact: document.querySelector("#telemetry-contact"),
  telemetrySpeed: document.querySelector("#telemetry-speed"),
  telemetryAltitude: document.querySelector("#telemetry-altitude"),
  telemetryVertical: document.querySelector("#telemetry-vertical"),
  telemetryHeading: document.querySelector("#telemetry-heading"),
  telemetrySquawk: document.querySelector("#telemetry-squawk"),
  telemetrySource: document.querySelector("#telemetry-source"),
  navTargets: document.querySelectorAll("[data-section-target]"),
  jumpTargets: document.querySelectorAll("[data-jump-target]"),
  lensSourceBadge: document.querySelector("#lens-source-badge"),
  lensCallsign: document.querySelector("#lens-callsign"),
  lensVerdict: document.querySelector("#lens-verdict"),
  lensPhase: document.querySelector("#lens-phase"),
  lensIdentityCallsign: document.querySelector("#lens-identity-callsign"),
  lensIdentityCountry: document.querySelector("#lens-identity-country"),
  lensIcao: document.querySelector("#lens-icao"),
  lensPositionSource: document.querySelector("#lens-position-source"),
  lensLastContact: document.querySelector("#lens-last-contact"),
  lensSquawk: document.querySelector("#lens-squawk"),
  lensTelemetrySource: document.querySelector("#lens-telemetry-source"),
  lensLatitude: document.querySelector("#lens-latitude"),
  lensLongitude: document.querySelector("#lens-longitude"),
  lensAltitude: document.querySelector("#lens-altitude"),
  lensSpeed: document.querySelector("#lens-speed"),
  lensHeading: document.querySelector("#lens-heading"),
  lensVerticalRate: document.querySelector("#lens-vertical-rate"),
  lensAltitudeLive: document.querySelector("#lens-altitude-live"),
  lensSpeedLive: document.querySelector("#lens-speed-live"),
  lensVerticalLive: document.querySelector("#lens-vertical-live"),
  lensHeadingLive: document.querySelector("#lens-heading-live"),
  lensAltitudeChart: document.querySelector("#lens-altitude-chart"),
  lensSpeedChart: document.querySelector("#lens-speed-chart"),
  lensVerticalChart: document.querySelector("#lens-vertical-chart"),
  lensHeadingChart: document.querySelector("#lens-heading-chart"),
  lensCheckList: document.querySelector("#lens-check-list"),
  lensRiskLabel: document.querySelector("#lens-risk-label"),
  lensSummaryCopy: document.querySelector("#lens-summary-copy"),
  lensInputMeter: document.querySelector("#lens-input-meter"),
  lensPhysicsMeter: document.querySelector("#lens-physics-meter"),
  lensBehaviorMeter: document.querySelector("#lens-behavior-meter"),
  lensInputScore: document.querySelector("#lens-input-score"),
  lensPhysicsScore: document.querySelector("#lens-physics-score"),
  lensBehaviorScore: document.querySelector("#lens-behavior-score"),
  engineSource: document.querySelector("#engine-source"),
  engineCallsign: document.querySelector("#engine-callsign"),
  engineVerdict: document.querySelector("#engine-verdict"),
  enginePipelineSource: document.querySelector("#engine-pipeline-source"),
  enginePipelineVerdict: document.querySelector("#engine-pipeline-verdict"),
  engineInputStatus: document.querySelector("#engine-input-status"),
  enginePhysicsStatus: document.querySelector("#engine-physics-status"),
  engineBehaviorStatus: document.querySelector("#engine-behavior-status"),
  engineFleetStatus: document.querySelector("#engine-fleet-status"),
  engineInputMeter: document.querySelector("#engine-input-meter"),
  enginePhysicsMeter: document.querySelector("#engine-physics-meter"),
  engineBehaviorMeter: document.querySelector("#engine-behavior-meter"),
  engineFleetMeter: document.querySelector("#engine-fleet-meter"),
  engineInputScore: document.querySelector("#engine-input-score"),
  enginePhysicsScore: document.querySelector("#engine-physics-score"),
  engineBehaviorScore: document.querySelector("#engine-behavior-score"),
  engineFleetScore: document.querySelector("#engine-fleet-score"),
  engineRuleList: document.querySelector("#engine-rule-list"),
  engineGateStatus: document.querySelector("#engine-gate-status"),
  engineSummary: document.querySelector("#engine-summary"),
  engineGateLabel: document.querySelector("#engine-gate-label"),
  engineRiskLabel: document.querySelector("#engine-risk-label"),
  threatMode: document.querySelector("#threat-mode"),
  threatIntensity: document.querySelector("#threat-intensity"),
  threatIntensityValue: document.querySelector("#threat-intensity-value"),
  threatDuration: document.querySelector("#threat-duration"),
  threatStart: document.querySelector("#threat-start"),
  threatPause: document.querySelector("#threat-pause"),
  threatReset: document.querySelector("#threat-reset"),
  threatModeStatus: document.querySelector("#threat-mode-status"),
  threatCallsign: document.querySelector("#threat-callsign"),
  threatVerdictStatus: document.querySelector("#threat-verdict-status"),
  threatStage: document.querySelector("#threat-stage"),
  threatTrackSvg: document.querySelector("#threat-track-svg"),
  threatGate: document.querySelector("#threat-gate"),
  threatDivergence: document.querySelector("#threat-divergence"),
  threatOffset: document.querySelector("#threat-offset"),
  threatGateState: document.querySelector("#threat-gate-state"),
  threatGnssStatus: document.querySelector("#threat-gnss-status"),
  threatBaroStatus: document.querySelector("#threat-baro-status"),
  threatInsStatus: document.querySelector("#threat-ins-status"),
  threatAiStatus: document.querySelector("#threat-ai-status"),
  threatProgressLabel: document.querySelector("#threat-progress-label"),
  threatTimeline: document.querySelector("#threat-timeline"),
  fleetSourceLabel: document.querySelector("#fleet-source-label"),
  fleetSelectedSignature: document.querySelector("#fleet-selected-signature"),
  fleetSharingStatus: document.querySelector("#fleet-sharing-status"),
  fleetRegionState: document.querySelector("#fleet-region-state"),
  fleetRegionGrid: document.querySelector("#fleet-region-grid"),
  fleetSignatureCount: document.querySelector("#fleet-signature-count"),
  fleetSignatureList: document.querySelector("#fleet-signature-list"),
  fleetAffectedCount: document.querySelector("#fleet-affected-count"),
  fleetAffectedList: document.querySelector("#fleet-affected-list"),
  fleetRawDataStatus: document.querySelector("#fleet-raw-data-status"),
  fleetSignatureStatus: document.querySelector("#fleet-signature-status"),
  fleetBaselineStatus: document.querySelector("#fleet-baseline-status"),
  fleetBaselineMeter: document.querySelector("#fleet-baseline-meter"),
  fleetBaselineScore: document.querySelector("#fleet-baseline-score"),
  fleetSummary: document.querySelector("#fleet-summary"),
  evidenceSource: document.querySelector("#evidence-source"),
  evidenceCount: document.querySelector("#evidence-count"),
  evidenceRiskStatus: document.querySelector("#evidence-risk-status"),
  evidenceStreamWindow: document.querySelector("#evidence-stream-window"),
  evidenceLogList: document.querySelector("#evidence-log-list"),
  evidenceCaseId: document.querySelector("#evidence-case-id"),
  evidenceAircraft: document.querySelector("#evidence-aircraft"),
  evidenceLabel: document.querySelector("#evidence-label"),
  evidenceSourceClass: document.querySelector("#evidence-source-class"),
  evidenceReviewState: document.querySelector("#evidence-review-state"),
  evidenceJson: document.querySelector("#evidence-json"),
  evidenceSourceList: document.querySelector("#evidence-source-list"),
  evidenceExportStatus: document.querySelector("#evidence-export-status"),
  evidenceExportMeter: document.querySelector("#evidence-export-meter"),
  evidenceExportScore: document.querySelector("#evidence-export-score"),
  evidenceExportCopy: document.querySelector("#evidence-export-copy"),
  modelDatasetStatus: document.querySelector("#model-dataset-status"),
  modelReadinessStatus: document.querySelector("#model-readiness-status"),
  modelGateStatus: document.querySelector("#model-gate-status"),
  modelReadinessMeter: document.querySelector("#model-readiness-meter"),
  modelReadinessScore: document.querySelector("#model-readiness-score"),
  modelReadinessCopy: document.querySelector("#model-readiness-copy"),
  modelFeatureCount: document.querySelector("#model-feature-count"),
  modelFeatureList: document.querySelector("#model-feature-list"),
  modelLabelStatus: document.querySelector("#model-label-status"),
  modelLabelList: document.querySelector("#model-label-list"),
  modelSchemaStatus: document.querySelector("#model-schema-status"),
  modelSchemaPreview: document.querySelector("#model-schema-preview"),
};

const regions = {
  europe: {
    label: "Europe corridor",
    lamin: 42,
    lomin: -10,
    lamax: 58,
    lomax: 18,
    route: ["LON", "DUB"],
    labels: ["UK, London", "UAE, Dubai"],
    times: ["UTC +00:00", "UTC +04:00"],
  },
  gulf: {
    label: "Gulf corridor",
    lamin: 15,
    lomin: 39,
    lamax: 32,
    lomax: 58,
    route: ["DOH", "DXB"],
    labels: ["Qatar, Doha", "UAE, Dubai"],
    times: ["UTC +03:00", "UTC +04:00"],
  },
  singapore: {
    label: "Singapore FIR",
    lamin: -6,
    lomin: 94,
    lamax: 10,
    lomax: 112,
    route: ["SIN", "BKK"],
    labels: ["Singapore", "Thailand, Bangkok"],
    times: ["UTC +08:00", "UTC +07:00"],
  },
  atlantic: {
    label: "North Atlantic",
    lamin: 40,
    lomin: -75,
    lamax: 58,
    lomax: -5,
    route: ["JFK", "LHR"],
    labels: ["US, New York", "UK, London"],
    times: ["UTC -05:00", "UTC +00:00"],
  },
};

const replayTemplates = [
  {
    callsign: "UAE74W",
    icao24: "8964a1",
    country: "United Arab Emirates",
    x: 18,
    y: 44,
    altitudeFt: 36000,
    speedKnots: 472,
    heading: 74,
    verticalFtMin: 0,
    squawk: "3021",
    status: "normal",
  },
  {
    callsign: "AF221",
    icao24: "3944f2",
    country: "France",
    x: 44,
    y: 37,
    altitudeFt: 24100,
    speedKnots: 401,
    heading: 126,
    verticalFtMin: -3100,
    squawk: "4130",
    status: "watch",
    anomaly: "Vertical-rate variance above corridor baseline.",
  },
  {
    callsign: "BA930",
    icao24: "400a7b",
    country: "United Kingdom",
    x: 64,
    y: 51,
    altitudeFt: 33200,
    speedKnots: 458,
    heading: 103,
    verticalFtMin: 180,
    squawk: "2264",
    status: "normal",
  },
  {
    callsign: "DLH4VT",
    icao24: "3c65c9",
    country: "Germany",
    x: 79,
    y: 30,
    altitudeFt: 38700,
    speedKnots: 512,
    heading: 238,
    verticalFtMin: 280,
    squawk: "5721",
    status: "normal",
  },
  {
    callsign: "RYR22",
    icao24: "4ca6fb",
    country: "Ireland",
    x: 30,
    y: 62,
    altitudeFt: 9100,
    speedKnots: 278,
    heading: 91,
    verticalFtMin: 1180,
    squawk: "7000",
    status: "watch",
    anomaly: "Climb profile close to low-altitude speed threshold.",
  },
  {
    callsign: "KLM1605",
    icao24: "484b2a",
    country: "Netherlands",
    x: 58,
    y: 73,
    altitudeFt: 29500,
    speedKnots: 443,
    heading: 151,
    verticalFtMin: -90,
    squawk: "6150",
    status: "normal",
  },
  {
    callsign: "SAS451",
    icao24: "4ac8e3",
    country: "Sweden",
    x: 38,
    y: 24,
    altitudeFt: 34100,
    speedKnots: 466,
    heading: 177,
    verticalFtMin: 60,
    squawk: "5541",
    status: "normal",
  },
  {
    callsign: "IBE32H",
    icao24: "342396",
    country: "Spain",
    x: 16,
    y: 70,
    altitudeFt: 18800,
    speedKnots: 392,
    heading: 42,
    verticalFtMin: 1540,
    squawk: "0452",
    status: "watch",
    anomaly: "Climb profile requires cross-check against corridor baseline.",
  },
  {
    callsign: "QTR52K",
    icao24: "06a11f",
    country: "Qatar",
    x: 88,
    y: 58,
    altitudeFt: 40500,
    speedKnots: 501,
    heading: 293,
    verticalFtMin: -120,
    squawk: "6340",
    status: "normal",
  },
  {
    callsign: "EZY19P",
    icao24: "406f7a",
    country: "United Kingdom",
    x: 48,
    y: 83,
    altitudeFt: 12100,
    speedKnots: 286,
    heading: 214,
    verticalFtMin: -760,
    squawk: "1126",
    status: "normal",
  },
];

const attackEvents = [
  {
    id: "UAE74W",
    text: "GPS drift detected against independent track evidence.",
    tone: "alert",
  },
  {
    id: "UAE74W",
    text: "Physics layer rejected unsafe descent recommendation.",
    tone: "alert",
  },
  {
    id: "FLEET",
    text: "Threat signature queued for fleet intelligence update.",
    tone: "watch",
  },
];

const airspaceState = {
  regionKey: "europe",
  flights: [],
  selectedId: null,
  dataOrigin: "REPLAY · SIMULATED",
  latencyMs: null,
  lastUpdate: null,
  requestId: 0,
};

const threatModes = {
  "gps-drift": {
    label: "GPS DRIFT",
    sensor: "GNSS",
    timeline: "GPS position drifts away from verified motion.",
  },
  "gps-jump": {
    label: "GPS JUMP",
    sensor: "GNSS",
    timeline: "GPS position jumps to an impossible location.",
  },
  "barometric-injection": {
    label: "BARO INJECTION",
    sensor: "BARO",
    timeline: "Barometric altitude is injected with a false value.",
  },
  "stale-replay": {
    label: "STALE REPLAY",
    sensor: "GNSS",
    timeline: "A delayed position stream is replayed as fresh data.",
  },
  "ai-output-attack": {
    label: "AI OUTPUT ATTACK",
    sensor: "AI",
    timeline: "AI recommendation conflicts with verified aircraft state.",
  },
  "control-injection": {
    label: "CONTROL INJECTION",
    sensor: "BEHAVIOR",
    timeline: "Control rhythm becomes too mechanical for a human pilot.",
  },
};

const threatState = {
  active: false,
  paused: false,
  mode: "gps-drift",
  intensity: 55,
  duration: 45,
  progress: 0,
};

const mapState = {
  map: null,
  ready: false,
  retries: 0,
  view: "globe",
  pendingMapView: false,
  markers: new Map(),
};

function escapeHTML(value) {
  return String(value ?? "").replace(/[&<>"']/g, (char) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return entities[char];
  });
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function numberOrNull(value) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : null;
}

function timeStamp() {
  return `${new Date().toISOString().slice(11, 16)}Z`;
}

function syncSectionNavigation(targetId) {
  elements.navTargets.forEach((button) => {
    button.classList.toggle("active", button.dataset.sectionTarget === targetId);
  });
}

function scrollToSection(targetId) {
  const section = document.querySelector(`#${targetId}`);
  if (!section) return;
  syncSectionNavigation(targetId);
  section.scrollIntoView({ behavior: "smooth", block: "start" });
}

function currentRegion() {
  return regions[airspaceState.regionKey] || regions.europe;
}

function isLivePublicMode() {
  return airspaceState.dataOrigin === "LIVE · PUBLIC";
}

function computedFleetIntegrity(total, watchTotal) {
  if (!total) return 94;
  if (isLivePublicMode()) {
    return Math.round(((total - watchTotal) / total) * 100);
  }

  return clamp(96 - watchTotal * 4, 82, 99);
}

function projectPosition(flight) {
  const region = currentRegion();
  const x = ((flight.lon - region.lomin) / (region.lomax - region.lomin)) * 100;
  const y = (1 - (flight.lat - region.lamin) / (region.lamax - region.lamin)) * 100;

  return {
    x: clamp(x, 2, 98),
    y: clamp(y, 4, 96),
  };
}

function buildReplayFlights(regionKey) {
  const region = regions[regionKey] || regions.europe;
  const phase = (Date.now() / 1000) % 60;

  return replayTemplates.map((template, index) => {
    const driftX = Math.sin(phase / 7 + index) * 1.8;
    const driftY = Math.cos(phase / 9 + index) * 1.4;
    const x = clamp(template.x + driftX, 5, 95);
    const y = clamp(template.y + driftY, 7, 93);
    const lon = region.lomin + (x / 100) * (region.lomax - region.lomin);
    const lat = region.lamax - (y / 100) * (region.lamax - region.lamin);
    const ageSec = 6 + ((Math.round(phase) + index * 7) % 22);
    const status = template.status;
    const anomalies =
      status === "normal"
        ? []
        : [
            {
              label: template.anomaly || "Replay anomaly queued for analyst review.",
              severity: "watch",
            },
          ];

    return {
      ...template,
      id: template.icao24,
      lat,
      lon,
      x,
      y,
      ageSec,
      onGround: false,
      positionSource: "replay",
      source: "REPLAY · SIMULATED",
      phase: classifyFlightPhase({
        altitudeFt: template.altitudeFt,
        verticalFtMin: template.verticalFtMin,
        onGround: false,
      }),
      anomalies,
      status,
    };
  });
}

function classifyFlightPhase(flight) {
  if (flight.onGround) return "ground";
  if (flight.altitudeFt < 3000 && flight.verticalFtMin > 500) return "takeoff";
  if (flight.altitudeFt < 4500 && flight.verticalFtMin < -500) return "approach";
  if (flight.verticalFtMin > 600) return "climb";
  if (flight.verticalFtMin < -600) return "descent";
  return "cruise";
}

function evaluateFlight(flight) {
  const anomalies = [];

  if (flight.ageSec > 90) {
    anomalies.push({
      label: "Position update stale beyond public-feed tolerance.",
      severity: flight.ageSec > 180 ? "critical" : "watch",
    });
  }

  if (!flight.onGround && flight.altitudeFt > 10000 && Math.abs(flight.verticalFtMin) > 2800) {
    anomalies.push({
      label: "Vertical-rate variance above cruise-phase baseline.",
      severity: "watch",
    });
  }

  if (!flight.onGround && flight.speedKnots > 540) {
    anomalies.push({
      label: "Ground-speed spike outside normal corridor envelope.",
      severity: "watch",
    });
  }

  if (!flight.onGround && flight.altitudeFt < 700 && flight.speedKnots > 230) {
    anomalies.push({
      label: "Low-altitude speed inconsistent with approach safety band.",
      severity: "critical",
    });
  }

  return anomalies;
}

function normalizeOpenSkyState(state) {
  const lon = numberOrNull(state[5]);
  const lat = numberOrNull(state[6]);

  if (lat === null || lon === null) return null;

  const icao24 = String(state[0] || "unknown").trim().toLowerCase();
  const callsign = String(state[1] || icao24.toUpperCase()).trim() || icao24.toUpperCase();
  const lastContact = numberOrNull(state[4]) || numberOrNull(state[3]) || Date.now() / 1000;
  const ageSec = Math.max(0, Math.round(Date.now() / 1000 - lastContact));
  const altitudeMeters = numberOrNull(state[7]) ?? numberOrNull(state[13]) ?? 0;
  const altitudeFt = Math.round(altitudeMeters * 3.28084);
  const speedKnots = Math.round((numberOrNull(state[9]) || 0) * 1.94384);
  const heading = Math.round(numberOrNull(state[10]) || 0);
  const verticalFtMin = Math.round((numberOrNull(state[11]) || 0) * 196.8504);
  const onGround = Boolean(state[8]);
  const squawk = state[14] || "----";
  const positionSource = state[16] === 0 ? "ADS-B" : state[16] === 1 ? "ASTERIX" : "MLAT";

  const flight = {
    id: icao24,
    icao24,
    callsign,
    country: state[2] || "Unknown origin",
    lat,
    lon,
    altitudeFt,
    speedKnots,
    heading,
    verticalFtMin,
    squawk,
    onGround,
    ageSec,
    positionSource,
    source: "LIVE · PUBLIC",
  };

  const anomalies = evaluateFlight(flight);
  const hasCritical = anomalies.some((item) => item.severity === "critical");

  return {
    ...flight,
    phase: classifyFlightPhase(flight),
    anomalies,
    status: hasCritical ? "critical" : anomalies.length ? "watch" : "normal",
  };
}

function openSkyUrl(region) {
  if (window.location.protocol !== "file:") {
    const regionKey = encodeURIComponent(airspaceState.regionKey);
    return `/api/opensky?region=${regionKey}`;
  }

  const params = new URLSearchParams({
    lamin: region.lamin,
    lomin: region.lomin,
    lamax: region.lamax,
    lomax: region.lomax,
  });

  return `https://opensky-network.org/api/states/all?${params.toString()}`;
}

async function fetchOpenSkyFlights(region) {
  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), 8500);
  const started = performance.now();

  try {
    const response = await fetch(openSkyUrl(region), {
      cache: "no-store",
      signal: controller.signal,
    });

    if (!response.ok) {
      throw new Error(`OpenSky responded ${response.status}`);
    }

    const data = await response.json();
    const statesPayload = data.proxied ? data.payload : data;
    const states = Array.isArray(statesPayload.states) ? statesPayload.states : [];
    const flights = states
      .map(normalizeOpenSkyState)
      .filter(Boolean)
      .filter((flight) => {
        return (
          flight.lat >= region.lamin &&
          flight.lat <= region.lamax &&
          flight.lon >= region.lomin &&
          flight.lon <= region.lomax
        );
      })
      .slice(0, 80);

    if (!flights.length) {
      throw new Error("OpenSky returned no aircraft for this region");
    }

    return {
      flights,
      latencyMs: Math.round(performance.now() - started),
    };
  } finally {
    window.clearTimeout(timeout);
  }
}

function attackButtonMarkup(active) {
  return `
    <svg><use href="#icon-alert"></use></svg>
    ${active ? "Reset Spoofing Demo" : "Simulate GPS Spoofing"}
  `;
}

function renderEvents(events) {
  elements.eventList.innerHTML = events
    .map(
      (event) => `
      <li>
        <svg class="${escapeHTML(event.tone)}"><use href="#icon-plane"></use></svg>
        <div>
          <strong>${escapeHTML(event.id)}</strong>
          <p>${escapeHTML(event.text)}</p>
        </div>
        <time>${timeStamp()}</time>
      </li>
    `,
    )
    .join("");
}

function setScores(values) {
  elements.inputScore.textContent = values.input;
  elements.physicsScore.textContent = values.physics;
  elements.behaviorScore.textContent = values.behavior;
  elements.inputMeter.value = values.input;
  elements.physicsMeter.value = values.physics;
  elements.behaviorMeter.value = values.behavior;
  elements.fleetScore.textContent = `${values.fleet}%`;
  elements.watchCount.textContent = values.watch;
}

function filteredFlights() {
  const searchTerm = elements.callsignSearch.value.trim().toLowerCase();
  const altitudeFilter = elements.altitudeFilter.value;
  const speedFilter = elements.speedFilter.value;
  const anomalyFilter = elements.anomalyFilter.value;

  return airspaceState.flights.filter((flight) => {
    const matchesSearch =
      !searchTerm ||
      flight.callsign.toLowerCase().includes(searchTerm) ||
      flight.icao24.toLowerCase().includes(searchTerm);

    const matchesAltitude =
      altitudeFilter === "all" ||
      (altitudeFilter === "ground" && flight.onGround) ||
      (altitudeFilter === "low" && !flight.onGround && flight.altitudeFt < 10000) ||
      (altitudeFilter === "cruise" && flight.altitudeFt >= 10000);

    const matchesSpeed =
      speedFilter === "all" ||
      (speedFilter === "slow" && flight.speedKnots < 250) ||
      (speedFilter === "normal" && flight.speedKnots >= 250 && flight.speedKnots <= 480) ||
      (speedFilter === "fast" && flight.speedKnots > 480);

    const matchesAnomaly =
      anomalyFilter === "all" ||
      (anomalyFilter === "normal" && flight.status === "normal") ||
      (anomalyFilter === "watch" && flight.status !== "normal");

    return matchesSearch && matchesAltitude && matchesSpeed && matchesAnomaly;
  });
}

function selectVisibleFlight(flights) {
  if (airspaceState.selectedId && flights.some((flight) => flight.id === airspaceState.selectedId)) {
    return;
  }

  const watchFlight = flights.find((flight) => flight.status !== "normal");
  airspaceState.selectedId = (watchFlight || flights[0] || {}).id || null;
}

function renderFlightLayer(flights) {
  if (!flights.length) {
    elements.flightLayer.innerHTML = `
      <div class="empty-airspace">
        <strong>No vectors match filters</strong>
        <span>Widen the filters or refresh the feed.</span>
      </div>
    `;
    return;
  }

  elements.flightLayer.innerHTML = flights
    .slice(0, 42)
    .map((flight) => {
      const projected = projectPosition(flight);
      const selectedClass = flight.id === airspaceState.selectedId ? "selected" : "";

      return `
        <button
          class="live-flight-marker ${escapeHTML(flight.status)} ${selectedClass}"
          data-flight-id="${escapeHTML(flight.id)}"
          style="--x: ${projected.x}%; --y: ${projected.y}%; --heading: ${flight.heading}deg;"
          type="button"
          aria-label="Select ${escapeHTML(flight.callsign)}"
        >
          <span class="marker-trail"></span>
          <svg><use href="#icon-plane"></use></svg>
          <span class="marker-label">${escapeHTML(flight.callsign)}</span>
        </button>
      `;
    })
    .join("");

  elements.flightLayer.querySelectorAll("[data-flight-id]").forEach((marker) => {
    marker.addEventListener("click", () => {
      airspaceState.selectedId = marker.dataset.flightId;
      refreshVisibleAirspace();
    });
  });
}

function renderFlightStrip(flights) {
  const items = flights.slice(0, 3);

  if (!items.length) {
    elements.flightStrip.innerHTML = `
      <article>
        <svg><use href="#icon-alert"></use></svg>
        <div>
          <strong>No vector</strong>
          <span>Filters returned empty</span>
        </div>
        <small>Idle</small>
      </article>
    `;
    return;
  }

  elements.flightStrip.innerHTML = items
    .map((flight) => {
      const statusLabel = flight.status === "normal" ? "Normal" : flight.status === "critical" ? "Critical" : "Watch";
      const subline = `${Math.round(flight.altitudeFt / 100)} FL · ${flight.speedKnots} kt`;

      return `
        <article class="${flight.id === airspaceState.selectedId ? "selected" : ""}" data-flight-card="${escapeHTML(flight.id)}">
          <svg><use href="#icon-plane"></use></svg>
          <div>
            <strong>${escapeHTML(flight.callsign)}</strong>
            <span>${escapeHTML(subline)}</span>
          </div>
          <small>${statusLabel}</small>
        </article>
      `;
    })
    .join("");

  elements.flightStrip.querySelectorAll("[data-flight-card]").forEach((card) => {
    card.addEventListener("click", () => {
      airspaceState.selectedId = card.dataset.flightCard;
      refreshVisibleAirspace();
    });
  });
}

function formatAltitude(feet) {
  return `${Math.round(feet).toLocaleString()} ft`;
}

function formatVertical(value) {
  const sign = value > 0 ? "+" : "";
  return `${sign}${Math.round(value).toLocaleString()} fpm`;
}

function formatCoordinate(value, axis) {
  const direction = axis === "lat" ? (value >= 0 ? "N" : "S") : value >= 0 ? "E" : "W";
  return `${Math.abs(value).toFixed(3)}° ${direction}`;
}

function regionCamera(region = currentRegion()) {
  const center = [(region.lomin + region.lomax) / 2, (region.lamin + region.lamax) / 2];
  const regionWidth = Math.abs(region.lomax - region.lomin);
  const zoom = regionWidth > 50 ? 1.42 : regionWidth > 24 ? 1.86 : 2.18;

  return {
    center,
    zoom,
  };
}

function airspaceGlobeStyle() {
  return {
    version: 8,
    projection: {
      type: "globe",
    },
    sources: {
      satellite: {
        type: "raster",
        tiles: ["https://tiles.maps.eox.at/wmts/1.0.0/s2cloudless-2020_3857/default/g/{z}/{y}/{x}.jpg"],
        tileSize: 256,
        attribution: "Sentinel-2 cloudless by EOX",
      },
    },
    layers: [
      {
        id: "satellite",
        type: "raster",
        source: "satellite",
        paint: {
          "raster-opacity": 0.92,
          "raster-saturation": -0.18,
          "raster-contrast": 0.1,
          "raster-brightness-min": 0.03,
          "raster-brightness-max": 0.86,
        },
      },
    ],
    sky: {
      "atmosphere-blend": [
        "interpolate",
        ["linear"],
        ["zoom"],
        0,
        1,
        5,
        1,
        7,
        0,
      ],
    },
    light: {
      anchor: "map",
      position: [1.5, 90, 80],
    },
  };
}

function regionBoundaryFeature() {
  const region = currentRegion();

  return {
    type: "Feature",
    properties: {
      label: region.label,
    },
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [region.lomin, region.lamin],
          [region.lomax, region.lamin],
          [region.lomax, region.lamax],
          [region.lomin, region.lamax],
          [region.lomin, region.lamin],
        ],
      ],
    },
  };
}

function flightTrailFeature(flight) {
  const region = currentRegion();
  const heading = (flight.heading * Math.PI) / 180;
  const length = clamp(flight.speedKnots / 430, 0.45, 1.35);
  const lngSpan = (region.lomax - region.lomin) * 0.045 * length;
  const latSpan = (region.lamax - region.lamin) * 0.045 * length;
  const startLng = flight.lon - Math.sin(heading) * lngSpan;
  const startLat = flight.lat - Math.cos(heading) * latSpan;

  return {
    type: "Feature",
    properties: {
      id: flight.id,
      status: flight.status,
      selected: flight.id === airspaceState.selectedId,
    },
    geometry: {
      type: "LineString",
      coordinates: [
        [startLng, startLat],
        [flight.lon, flight.lat],
      ],
    },
  };
}

function addAirspaceMapLayers() {
  if (!mapState.map || mapState.map.getSource("airspace-region")) return;

  mapState.map.addSource("airspace-region", {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: [regionBoundaryFeature()],
    },
  });

  mapState.map.addSource("flight-trails", {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: [],
    },
  });

  mapState.map.addLayer({
    id: "airspace-region-fill",
    type: "fill",
    source: "airspace-region",
    paint: {
      "fill-color": "#c97830",
      "fill-opacity": 0.08,
    },
  });

  mapState.map.addLayer({
    id: "airspace-region-outline",
    type: "line",
    source: "airspace-region",
    paint: {
      "line-color": "#f0c07a",
      "line-opacity": 0.54,
      "line-width": 1.4,
      "line-dasharray": [2, 2],
    },
  });

  mapState.map.addLayer({
    id: "flight-trails-line",
    type: "line",
    source: "flight-trails",
    paint: {
      "line-color": [
        "match",
        ["get", "status"],
        "critical",
        "#f06060",
        "watch",
        "#f0c07a",
        "#5cdf8a",
      ],
      "line-opacity": ["case", ["boolean", ["get", "selected"], false], 0.95, 0.46],
      "line-width": ["case", ["boolean", ["get", "selected"], false], 3.6, 2],
    },
  });
}

function updateAirspaceMapRegion() {
  if (!mapState.ready || !mapState.map) return;

  const camera = regionCamera();
  const regionSource = mapState.map.getSource("airspace-region");
  if (regionSource) {
    regionSource.setData({
      type: "FeatureCollection",
      features: [regionBoundaryFeature()],
    });
  }

  if (mapState.view !== "map") return;

  mapState.map.stop();
  mapState.map.jumpTo({
    center: camera.center,
    zoom: camera.zoom,
    pitch: 0,
    bearing: -10,
  });
}

function createMapMarker(flight) {
  const markerElement = document.createElement("button");
  markerElement.type = "button";
  markerElement.className = "map-aircraft-marker";
  markerElement.innerHTML = `
    <span class="map-marker-icon">
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" stroke="none" d="M12 1.7c.8 0 1.4 1 1.4 2.2v4.6l7.2 4.4c.5.3.8.8.8 1.4v1.4c0 .5-.5.8-.9.6l-7.1-2.2v3.2l2.4 2.1c.3.2.4.5.4.9v.9c0 .4-.4.7-.8.6L12 20.6l-3.4 1.2c-.4.1-.8-.2-.8-.6v-.9c0-.4.1-.7.4-.9l2.4-2.1v-3.2l-7.1 2.2c-.4.2-.9-.1-.9-.6v-1.4c0-.6.3-1.1.8-1.4l7.2-4.4V3.9c0-1.2.6-2.2 1.4-2.2Z"></path>
        <path d="M12 3.6v16.2M8.7 13.5l3.3-.9 3.3.9"></path>
      </svg>
    </span>
    <span class="map-marker-label"></span>
  `;
  markerElement.addEventListener("click", () => {
    airspaceState.selectedId = flight.id;
    refreshVisibleAirspace();
  });

  return new maplibregl.Marker({
    element: markerElement,
    anchor: "center",
  });
}

function renderMapFlights(flights) {
  if (!mapState.ready || !mapState.map || mapState.view !== "map") return;

  const visibleFlights = flights.slice(0, 42);
  const visibleIds = new Set(visibleFlights.map((flight) => flight.id));
  const trailSource = mapState.map.getSource("flight-trails");

  if (trailSource) {
    trailSource.setData({
      type: "FeatureCollection",
      features: visibleFlights.map(flightTrailFeature),
    });
  }

  mapState.markers.forEach((marker, id) => {
    if (!visibleIds.has(id)) {
      marker.remove();
      mapState.markers.delete(id);
    }
  });

  visibleFlights.forEach((flight) => {
    let marker = mapState.markers.get(flight.id);
    if (!marker) {
      marker = createMapMarker(flight);
      marker.setLngLat([flight.lon, flight.lat]);
      marker.addTo(mapState.map);
      mapState.markers.set(flight.id, marker);
    }

    const markerElement = marker.getElement();
    markerElement.className = `map-aircraft-marker ${flight.status} ${
      flight.id === airspaceState.selectedId ? "selected" : ""
    }`;
    markerElement.style.setProperty("--heading", `${flight.heading}deg`);
    markerElement.setAttribute("aria-label", `Select ${flight.callsign}`);
    markerElement.querySelector(".map-marker-label").textContent = flight.callsign;
    marker.setLngLat([flight.lon, flight.lat]);
  });
}

function initAirspaceMap() {
  if (!elements.mapStage || mapState.map) return;

  if (!window.maplibregl) {
    if (mapState.retries < 80) {
      mapState.retries += 1;
      window.setTimeout(initAirspaceMap, 100);
    }
    return;
  }

  const camera = regionCamera();
  mapState.map = new maplibregl.Map({
    container: elements.mapStage,
    style: airspaceGlobeStyle(),
    center: camera.center,
    zoom: camera.zoom,
    pitch: 0,
    bearing: -10,
    attributionControl: false,
    cooperativeGestures: true,
  });

  mapState.map.addControl(
    new maplibregl.AttributionControl({
      compact: true,
    }),
    "bottom-right",
  );

  mapState.map.on("load", () => {
    mapState.ready = true;
    document.body.classList.add("maplibre-ready");
    addAirspaceMapLayers();
    if (mapState.pendingMapView) {
      setAirspaceView("map");
    }
  });
}

function setAirspaceView(view) {
  mapState.view = view;
  document.body.classList.toggle("airspace-map-view", view === "map");

  if (view !== "map") {
    mapState.pendingMapView = false;
    elements.viewToggle.textContent = "Map";
    return;
  }

  elements.viewToggle.textContent = mapState.ready ? "Globe" : "Loading";
  if (!mapState.map) {
    mapState.pendingMapView = true;
    initAirspaceMap();
    return;
  }

  if (!mapState.ready) {
    mapState.pendingMapView = true;
    return;
  }

  mapState.pendingMapView = false;
  elements.viewToggle.textContent = "Globe";
  mapState.map.resize();
  updateAirspaceMapRegion();
  renderMapFlights(filteredFlights());
}

function toggleAirspaceView() {
  setAirspaceView(mapState.view === "map" ? "globe" : "map");
}

function stableSeed(text) {
  return String(text)
    .split("")
    .reduce((total, char) => total + char.charCodeAt(0), 0);
}

function telemetrySeries(flight, field) {
  const seed = stableSeed(`${flight.icao24}-${field}`);
  const points = 24;
  const values = [];

  for (let index = 0; index < points; index += 1) {
    const wave = Math.sin((index + seed) / 3.2);
    const drift = Math.cos((index + seed) / 6.4);

    if (field === "altitude") {
      values.push(flight.altitudeFt - flight.verticalFtMin * 0.07 * (points - index) + wave * 180 + drift * 90);
    }

    if (field === "speed") {
      values.push(flight.speedKnots + wave * 8 + drift * 4);
    }

    if (field === "vertical") {
      values.push(flight.verticalFtMin + wave * 210 + drift * 90);
    }

    if (field === "heading") {
      values.push((flight.heading + wave * 10 + drift * 4 + 360) % 360);
    }
  }

  return values;
}

function renderSparkline(svg, values, tone = "normal") {
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min || 1;
  const width = 180;
  const height = 64;
  const points = values
    .map((value, index) => {
      const x = (index / (values.length - 1)) * width;
      const y = height - ((value - min) / range) * 46 - 9;
      return `${x.toFixed(2)},${y.toFixed(2)}`;
    })
    .join(" ");

  svg.innerHTML = `
    <line x1="0" y1="54" x2="180" y2="54" class="chart-baseline"></line>
    <polyline class="chart-line ${tone}" points="${points}"></polyline>
  `;
}

function integrityChecksForFlight(flight) {
  const checks = [];
  const staleTone = flight.ageSec > 180 ? "critical" : flight.ageSec > 90 ? "warn" : "pass";
  const verticalWatch = !flight.onGround && flight.altitudeFt > 10000 && Math.abs(flight.verticalFtMin) > 2800;
  const speedWatch =
    (!flight.onGround && flight.speedKnots > 540) ||
    (!flight.onGround && flight.altitudeFt < 700 && flight.speedKnots > 230);
  const phaseWatch =
    (flight.phase === "cruise" && Math.abs(flight.verticalFtMin) > 2800) ||
    (flight.phase === "approach" && flight.speedKnots > 250);

  checks.push({
    tone: staleTone,
    title: "Position staleness",
    copy:
      staleTone === "pass"
        ? `Last contact is ${flight.ageSec}s ago, inside the public-feed tolerance.`
        : `Last contact is ${flight.ageSec}s ago and needs freshness review.`,
  });

  checks.push({
    tone: verticalWatch ? "warn" : "pass",
    title: "Vertical-rate envelope",
    copy: verticalWatch
      ? "Vertical-rate variance is outside the cruise corridor baseline."
      : "Vertical-rate remains coherent with current phase.",
  });

  checks.push({
    tone: speedWatch ? "critical" : "pass",
    title: "Speed and altitude envelope",
    copy: speedWatch
      ? "Speed/altitude combination is outside prototype safety bounds."
      : "Speed and altitude are plausible for the current vector.",
  });

  checks.push({
    tone: phaseWatch ? "warn" : "pass",
    title: "Flight-phase coherence",
    copy: phaseWatch
      ? "Phase classification conflicts with one motion signal."
      : `Computed phase ${flight.phase.toUpperCase()} matches the current telemetry.`,
  });

  checks.push({
    tone: "pass",
    title: "Data-source labeling",
    copy:
      flight.source === "LIVE · PUBLIC"
        ? "Source is labeled as public OpenSky state-vector data."
        : "Source is labeled as replay simulation for demo reliability.",
  });

  return checks;
}

function threatTimelineSteps(modeKey) {
  const mode = threatModes[modeKey] || threatModes["gps-drift"];

  return [
    {
      title: "Normal monitoring",
      copy: "Aircraft state is coherent before attack injection.",
    },
    {
      title: "Threat injected",
      copy: mode.timeline,
    },
    {
      title: "Evidence mismatch",
      copy: "SKY SHIELD compares spoofed input against altitude, motion, and phase evidence.",
    },
    {
      title: "Unsafe recommendation",
      copy: "AI output becomes unsafe because one trusted input is no longer trustworthy.",
    },
    {
      title: "Physics gate blocks",
      copy: "Physics Output layer rejects the recommendation and quarantines the result.",
    },
    {
      title: "Fleet signature queued",
      copy: "Threat pattern is prepared for fleet intelligence sharing.",
    },
  ];
}

function threatProgressIndex() {
  const steps = threatTimelineSteps(threatState.mode);
  if (!threatState.active) return 0;
  return clamp(Math.floor((threatState.progress / 100) * steps.length), 0, steps.length - 1);
}

function threatGateState() {
  if (!threatState.active) return "ALLOW";
  if (threatState.progress < 35) return "REVIEW";
  return "QUARANTINE";
}

function renderThreatTimeline() {
  const steps = threatTimelineSteps(threatState.mode);
  const activeIndex = threatProgressIndex();

  elements.threatTimeline.innerHTML = steps
    .map((step, index) => {
      const stateClass = index < activeIndex ? "done" : index === activeIndex ? "active" : "";
      return `
        <li class="${stateClass}">
          <span></span>
          <div>
            <strong>${escapeHTML(step.title)}</strong>
            <p>${escapeHTML(step.copy)}</p>
          </div>
        </li>
      `;
    })
    .join("");
}

function renderThreatTrack(flight) {
  const progressRatio = threatState.active ? threatState.progress / 100 : 0;
  const intensityRatio = threatState.intensity / 100;
  const mode = threatModes[threatState.mode] || threatModes["gps-drift"];
  const offset = Math.round(progressRatio * intensityRatio * (mode.sensor === "BARO" ? 1200 : 2200));
  const divergence = (progressRatio * intensityRatio * (mode.sensor === "BARO" ? 5.2 : 18.4)).toFixed(1);
  const verified = [
    [72, 222],
    [170, 190],
    [284, 166],
    [410, 139],
    [546, 112],
    [648, 86],
  ];
  const drift = threatState.mode === "gps-jump" ? 90 : threatState.mode === "stale-replay" ? -45 : 64;
  const vertical = threatState.mode === "barometric-injection" ? -82 : threatState.mode === "control-injection" ? 38 : -54;
  const spoofed = verified.map(([x, y], index) => {
    const weight = index / (verified.length - 1);
    const shock = threatState.mode === "gps-jump" && index > 2 ? 60 : 0;
    return [x + (drift + shock) * weight * progressRatio * intensityRatio, y + vertical * weight * progressRatio * intensityRatio];
  });
  const verifiedPoints = verified.map((point) => point.join(",")).join(" ");
  const spoofedPoints = spoofed.map((point) => point.map((value) => value.toFixed(1)).join(",")).join(" ");
  const currentVerified = verified[Math.min(verified.length - 1, Math.max(0, Math.round(progressRatio * (verified.length - 1))))];
  const currentSpoofed = spoofed[Math.min(spoofed.length - 1, Math.max(0, Math.round(progressRatio * (spoofed.length - 1))))];

  elements.threatTrackSvg.innerHTML = `
    <defs>
      <linearGradient id="threat-grid-fade" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stop-color="rgba(240, 192, 122, 0)" />
        <stop offset="1" stop-color="rgba(240, 192, 122, 0.42)" />
      </linearGradient>
    </defs>
    <path class="threat-map-line" d="M36 252 C170 196 328 224 456 162 S650 74 704 104"></path>
    <polyline class="verified-track" points="${verifiedPoints}"></polyline>
    <polyline class="spoofed-track" points="${spoofedPoints}"></polyline>
    <circle class="verified-node" cx="${currentVerified[0]}" cy="${currentVerified[1]}" r="8"></circle>
    <circle class="spoofed-node" cx="${currentSpoofed[0]}" cy="${currentSpoofed[1]}" r="8"></circle>
    <text x="72" y="246">VERIFIED</text>
    <text x="510" y="66">SPOOFED</text>
    <text x="32" y="34">${escapeHTML(flight.callsign)} · ${escapeHTML(mode.label)}</text>
  `;
  elements.threatDivergence.textContent = `${divergence} NM`;
  elements.threatOffset.textContent = `${offset.toLocaleString()} m`;
}

function renderThreatSensors() {
  const active = threatState.active;
  const gate = threatGateState();
  const mode = threatModes[threatState.mode] || threatModes["gps-drift"];
  const degraded = active && threatState.progress > 15;
  const blocked = active && threatState.progress >= 35;

  elements.threatGnssStatus.textContent =
    degraded && mode.sensor === "GNSS" ? (threatState.mode === "stale-replay" ? "STALE" : "SPOOFED") : "NOMINAL";
  elements.threatBaroStatus.textContent = degraded && mode.sensor === "BARO" ? "INJECTED" : "MATCH";
  elements.threatInsStatus.textContent = degraded && ["GNSS", "BARO"].includes(mode.sensor) ? "MISMATCH" : "MATCH";
  elements.threatAiStatus.textContent = blocked ? "BLOCK" : gate;

  [elements.threatGnssStatus, elements.threatBaroStatus, elements.threatInsStatus, elements.threatAiStatus].forEach(
    (item) => {
      item.className = "";
      if (["SPOOFED", "INJECTED", "BLOCK"].includes(item.textContent)) item.classList.add("critical");
      if (["STALE", "MISMATCH", "REVIEW"].includes(item.textContent)) item.classList.add("watch");
      if (["NOMINAL", "MATCH", "ALLOW"].includes(item.textContent)) item.classList.add("normal");
    },
  );
}

function renderThreatSim(flight = selectedFlight()) {
  if (!flight) return;

  const mode = threatModes[threatState.mode] || threatModes["gps-drift"];
  const gate = threatGateState();
  const activeIndex = threatProgressIndex();
  const steps = threatTimelineSteps(threatState.mode);
  const verdict = !threatState.active
    ? "READY"
    : gate === "QUARANTINE"
      ? "CYBER_ANOMALY"
      : gate === "REVIEW"
        ? "WATCH"
        : "RUNNING";

  elements.threatMode.value = threatState.mode;
  elements.threatIntensity.value = threatState.intensity;
  elements.threatIntensityValue.textContent = `${threatState.intensity}%`;
  elements.threatDuration.value = String(threatState.duration);
  elements.threatModeStatus.textContent = mode.label;
  elements.threatCallsign.textContent = flight.callsign;
  elements.threatVerdictStatus.textContent = verdict;
  elements.threatVerdictStatus.className = gate === "QUARANTINE" ? "critical" : gate === "REVIEW" ? "watch" : "normal";
  elements.threatStage.textContent = threatState.paused ? "PAUSED" : threatState.active ? steps[activeIndex].title.toUpperCase() : "STANDBY";
  elements.threatGate.textContent =
    gate === "QUARANTINE" ? "TRUSTED_OUTPUT_BLOCKED" : gate === "REVIEW" ? "TRUSTED_OUTPUT_REVIEW" : "TRUSTED_OUTPUT_ALLOWED";
  elements.threatGateState.textContent = gate;
  elements.threatGateState.className = gate === "QUARANTINE" ? "critical" : gate === "REVIEW" ? "watch" : "normal";
  elements.threatProgressLabel.textContent = `${Math.round(threatState.progress)}%`;
  elements.threatPause.textContent = threatState.paused ? "Resume" : "Pause";
  renderThreatTrack(flight);
  renderThreatSensors();
  renderThreatTimeline();
  renderFleetIntelligence(flight);
  renderEvidenceLog(flight);
}

function fleetThreatSignature(modeKey = threatState.mode) {
  const signatures = {
    "gps-drift": {
      key: "GPS_DRIFT_SIGNATURE",
      label: "GPS drift signature",
      sensor: "GNSS",
      copy: "Slow position drift diverges from verified aircraft motion.",
    },
    "gps-jump": {
      key: "GPS_JUMP_DISPLACEMENT",
      label: "GPS jump displacement",
      sensor: "GNSS",
      copy: "Sudden position displacement conflicts with speed and heading limits.",
    },
    "barometric-injection": {
      key: "BARO_INJECTION_PATTERN",
      label: "Barometric injection pattern",
      sensor: "BARO",
      copy: "Altitude evidence separates from position and phase expectations.",
    },
    "stale-replay": {
      key: "STALE_REPLAY_CLUSTER",
      label: "Stale replay cluster",
      sensor: "GNSS",
      copy: "A delayed state-vector pattern is replayed as if it were fresh.",
    },
    "ai-output-attack": {
      key: "AI_OUTPUT_CONFLICT",
      label: "AI output conflict",
      sensor: "AI",
      copy: "Recommendation conflicts with verified physics and operational state.",
    },
    "control-injection": {
      key: "CONTROL_RHYTHM_ANOMALY",
      label: "Control rhythm anomaly",
      sensor: "BEHAVIOR",
      copy: "Control-input rhythm becomes too mechanical for normal operations.",
    },
  };

  return signatures[modeKey] || signatures["gps-drift"];
}

function fleetSignatureCatalog() {
  const activeSignature = fleetThreatSignature();
  const catalog = [
    fleetThreatSignature("gps-drift"),
    fleetThreatSignature("barometric-injection"),
    fleetThreatSignature("stale-replay"),
    fleetThreatSignature("control-injection"),
  ];

  if (!catalog.some((signature) => signature.key === activeSignature.key)) {
    catalog.unshift(activeSignature);
  }

  return catalog.slice(0, 4);
}

function fleetStageStatus() {
  if (!threatState.active) return "STANDBY";
  if (threatState.progress < 30) return "LOCAL DETECTION";
  if (threatState.progress < 62) return "SIGNATURE SHARING";
  if (threatState.progress < 100) return "BASELINE REVIEW";
  return "BASELINE UPDATED";
}

function fleetAffectedFlights(flight) {
  const selected = flight || selectedFlight();
  const unique = new Map();
  const addFlight = (item) => {
    if (item?.id && !unique.has(item.id)) unique.set(item.id, item);
  };

  addFlight(selected);
  airspaceState.flights.filter((item) => item.status !== "normal").forEach(addFlight);

  if (threatState.active) {
    airspaceState.flights
      .filter((item) => item.status === "normal")
      .slice(0, 4)
      .forEach(addFlight);
  }

  return Array.from(unique.values()).slice(0, threatState.active ? 6 : 4);
}

function fleetRegionSummaries() {
  const total = airspaceState.flights.length;
  const watchTotal = airspaceState.flights.filter((flight) => flight.status !== "normal").length;
  const signatureSeed = stableSeed(fleetThreatSignature().key);

  return Object.entries(regions).map(([regionKey, region], index) => {
    const isCurrent = regionKey === airspaceState.regionKey;
    const seededWatch = Math.max(0, (stableSeed(regionKey) + total + index) % 4);
    const activeBoost = threatState.active && (isCurrent || index === signatureSeed % 4) ? 2 + Math.round(threatState.progress / 34) : 0;
    const count = isCurrent ? watchTotal + activeBoost : seededWatch + activeBoost;
    const score = clamp(18 + count * 17 + (isCurrent ? 8 : 0), 8, 96);
    const tone = score >= 70 ? "critical" : score >= 42 ? "watch" : "normal";

    return {
      label: region.label,
      count,
      score,
      tone,
      current: isCurrent,
    };
  });
}

function renderFleetIntelligence(flight = selectedFlight()) {
  if (!flight) return;

  const activeSignature = fleetThreatSignature();
  const signatures = fleetSignatureCatalog();
  const affected = fleetAffectedFlights(flight);
  const active = threatState.active;
  const stage = fleetStageStatus();
  const watchTotal = airspaceState.flights.filter((item) => item.status !== "normal").length;
  const baselineProgress = active ? clamp(Math.round(18 + threatState.progress * 0.82), 18, 100) : clamp(12 + watchTotal * 9, 12, 58);
  const sourceLabel = airspaceState.dataOrigin === "LIVE · PUBLIC" ? "COMPUTED FROM LIVE PUBLIC FEED" : "COMPUTED FROM REPLAY VECTORS";

  elements.fleetSourceLabel.textContent = sourceLabel;
  elements.fleetSelectedSignature.textContent = active ? activeSignature.key : "BASELINE_MONITOR";
  elements.fleetSharingStatus.textContent = stage;
  elements.fleetSharingStatus.className = active
    ? threatState.progress >= 62
      ? "critical"
      : "watch"
    : "normal";
  elements.fleetRegionState.textContent = currentRegion().label;
  elements.fleetSignatureCount.textContent = `${signatures.length} TRACKED`;
  elements.fleetAffectedCount.textContent = `${affected.length} TRACKS`;
  elements.fleetBaselineMeter.value = baselineProgress;
  elements.fleetBaselineScore.textContent = `${baselineProgress}%`;

  elements.fleetRegionGrid.innerHTML = fleetRegionSummaries()
    .map(
      (region) => `
        <div class="${region.tone} ${region.current ? "current" : ""}">
          <span>${escapeHTML(region.label)}</span>
          <strong>${region.count} watch</strong>
          <meter min="0" max="100" value="${region.score}"></meter>
          <small>${region.tone === "critical" ? "cluster risk" : region.tone === "watch" ? "watch" : "baseline"}</small>
        </div>
      `,
    )
    .join("");

  elements.fleetSignatureList.innerHTML = signatures
    .map((signature) => {
      const isActive = active && signature.key === activeSignature.key;
      const status = isActive ? stage : watchTotal > 0 ? "MONITORED" : "READY";
      const tone = isActive ? (threatState.progress >= 62 ? "critical" : "watch") : "normal";

      return `
        <div class="${tone}">
          <span></span>
          <div>
            <strong>${escapeHTML(signature.key)}</strong>
            <p>${escapeHTML(signature.copy)}</p>
          </div>
          <small>${escapeHTML(status)}</small>
        </div>
      `;
    })
    .join("");

  elements.fleetAffectedList.innerHTML = affected
    .map((item) => {
      const isSelected = item.id === flight.id;
      const tone = active && isSelected ? "critical" : item.status === "normal" ? "normal" : "watch";
      const status = active && isSelected ? "SOURCE" : item.status === "normal" ? "BASELINE" : "WATCH";

      return `
        <div class="${tone}">
          <span>${escapeHTML(item.callsign.slice(0, 2).toUpperCase())}</span>
          <div>
            <strong>${escapeHTML(item.callsign)}</strong>
            <p>${escapeHTML(item.phase.toUpperCase())} · ${escapeHTML(item.positionSource.toUpperCase())} · ${item.speedKnots} kt</p>
          </div>
          <small>${status}</small>
        </div>
      `;
    })
    .join("");

  elements.fleetRawDataStatus.textContent =
    "Raw lat/lon, altitude, speed, and sensor-like simulation values remain in the browser demo.";
  elements.fleetSignatureStatus.textContent = active
    ? `${activeSignature.key} is being prepared from ${flight.callsign} and nearby watch tracks.`
    : `${watchTotal} watch track${watchTotal === 1 ? "" : "s"} are available for fleet-level comparison.`;
  elements.fleetBaselineStatus.textContent = active
    ? stage === "BASELINE UPDATED"
      ? "Prototype baseline update is complete and ready for evidence logging."
      : "Prototype baseline update is queued for analyst review before any future ML training."
    : "Baseline monitor is idle until a Threat Sim or live anomaly creates a new signature.";
  elements.fleetSummary.textContent = active
    ? `${activeSignature.label} from ${flight.callsign} is driving regional heat, affected-aircraft review, and the federated update queue.`
    : "Fleet Intelligence is in monitoring mode. Run Threat Sim to show how a local anomaly becomes a shared threat signature.";
}

function evidenceTone(tone) {
  if (tone === "critical") return "critical";
  if (tone === "warn" || tone === "watch") return "watch";
  return "pass";
}

function integrityLabelForFlight(flight) {
  if (document.body.classList.contains("attack-active")) return "CYBER_ANOMALY";
  if (!flight) return "PENDING";
  if (flight.status === "critical") return "DATA_CORRUPTION";
  if (flight.status === "watch") return "SENSOR_FAULT";
  return "ALL_OK";
}

function riskLabelForFlight(flight) {
  if (document.body.classList.contains("attack-active")) return "HIGH RISK";
  if (!flight) return "LOW RISK";
  if (flight.status === "critical") return "HIGH RISK";
  if (flight.status === "watch") return "WATCH";
  return "LOW RISK";
}

function reviewStateForFlight(flight) {
  if (document.body.classList.contains("attack-active")) return "QUARANTINE";
  if (!flight) return "PENDING";
  if (flight.status === "critical") return "ANALYST_REVIEW";
  if (flight.status === "watch") return "WATCH_REVIEW";
  return "AUTO_ACCEPTED";
}

function sourceClassForFlight(flight) {
  if (!flight) return "unknown";
  return flight.source === "LIVE · PUBLIC" ? "public_adsb" : "replay_simulation";
}

function buildEvidenceRecords(flight) {
  if (!flight) return [];

  const sourceLabel = flight.source === "LIVE · PUBLIC" ? "LIVE · PUBLIC" : "REPLAY · SIMULATED";
  const records = [
    {
      type: "STATE_VECTOR",
      tone: "pass",
      title: `${flight.callsign} vector accepted`,
      copy: `${formatAltitude(flight.altitudeFt)}, ${flight.speedKnots} kt, ${flight.phase.toUpperCase()} phase from ${sourceLabel}.`,
    },
    {
      type: "SOURCE_LABEL",
      tone: "pass",
      title: "Data source classified before scoring",
      copy:
        flight.source === "LIVE · PUBLIC"
          ? "Public OpenSky state vector is labeled separately from simulated data."
          : "Replay simulation is clearly labeled before integrity scoring.",
    },
  ];

  engineRuleBank(flight).forEach((rule) => {
    records.push({
      type: rule.layer.toUpperCase().replace(/\s+/g, "_"),
      tone: evidenceTone(rule.tone),
      title: rule.title,
      copy: rule.copy,
    });
  });

  if (document.body.classList.contains("attack-active")) {
    const signature = fleetThreatSignature();
    records.unshift({
      type: "CYBER_SCENARIO",
      tone: "critical",
      title: `${signature.label} injected`,
      copy: `${flight.callsign} is running a simulated ${signature.label.toLowerCase()} scenario for demo evidence capture.`,
    });
    records.push({
      type: "PHYSICS_GATE",
      tone: "critical",
      title: "Trusted output quarantined",
      copy: "Physics and input-integrity conflict blocks unsafe AI recommendations.",
    });
    records.push({
      type: "FLEET_QUEUE",
      tone: "watch",
      title: "Fleet signature queued",
      copy: `${signature.key} is prepared for fleet-level review without sharing raw telemetry.`,
    });
  }

  return records.slice(0, 10);
}

function buildTrainingRow(flight, records) {
  const scores = document.body.classList.contains("attack-active")
    ? { input: 31, physics: 18, behavior: 79, fleet: 61 }
    : scoresForFlight(flight);

  return {
    schema_version: "sky-shield.prototype.v1",
    record_id: `SS-${currentRegion().label.toUpperCase().replace(/[^A-Z0-9]+/g, "-")}-${flight.callsign}`,
    created_utc: new Date().toISOString(),
    source_class: sourceClassForFlight(flight),
    region: currentRegion().label,
    aircraft: {
      callsign: flight.callsign,
      icao24: flight.icao24.toUpperCase(),
      country: flight.country,
    },
    features: {
      altitude_ft: flight.altitudeFt,
      ground_speed_kt: flight.speedKnots,
      vertical_rate_fpm: flight.verticalFtMin,
      heading_deg: flight.heading,
      last_contact_sec: flight.ageSec,
      input_integrity_score: scores.input,
      physics_score: scores.physics,
      behavioral_score: scores.behavior,
      fleet_integrity_score: scores.fleet,
      active_watch_tracks: airspaceState.flights.filter((item) => item.status !== "normal").length,
    },
    labels: {
      integrity_label: integrityLabelForFlight(flight),
      risk_label: riskLabelForFlight(flight),
      review_state: reviewStateForFlight(flight),
      synthetic_attack: document.body.classList.contains("attack-active"),
      attack_mode: document.body.classList.contains("attack-active") ? threatModes[threatState.mode].label : null,
    },
    evidence_types: records.map((record) => record.type),
  };
}

function renderEvidenceLog(flight = selectedFlight()) {
  if (!flight) return;

  const records = buildEvidenceRecords(flight);
  const trainingRow = buildTrainingRow(flight, records);
  const riskLabel = riskLabelForFlight(flight);
  const riskClass = riskLabel === "HIGH RISK" ? "critical" : riskLabel === "WATCH" ? "watch" : "normal";
  const exportScore = document.body.classList.contains("attack-active")
    ? 72
    : clamp(34 + records.filter((record) => record.tone !== "pass").length * 12, 34, 68);

  elements.evidenceSource.textContent = flight.source === "LIVE · PUBLIC" ? "LIVE · PUBLIC" : "REPLAY · SIMULATED";
  elements.evidenceCount.textContent = `${records.length} RECORDS`;
  elements.evidenceRiskStatus.textContent = riskLabel;
  elements.evidenceRiskStatus.className = riskClass;
  elements.evidenceStreamWindow.textContent = document.body.classList.contains("attack-active")
    ? "ATTACK SCENARIO"
    : "LATEST VECTOR";
  elements.evidenceCaseId.textContent = trainingRow.record_id;
  elements.evidenceAircraft.textContent = `${flight.callsign} · ${flight.icao24.toUpperCase()}`;
  elements.evidenceLabel.textContent = integrityLabelForFlight(flight);
  elements.evidenceSourceClass.textContent = sourceClassForFlight(flight).toUpperCase();
  elements.evidenceReviewState.textContent = reviewStateForFlight(flight);
  elements.evidenceJson.textContent = JSON.stringify(trainingRow, null, 2);
  elements.evidenceExportStatus.textContent = document.body.classList.contains("attack-active")
    ? "ATTACK LABEL READY"
    : "RULE LABELS";
  elements.evidenceExportMeter.value = exportScore;
  elements.evidenceExportScore.textContent = `${exportScore}%`;
  elements.evidenceExportCopy.textContent = document.body.classList.contains("attack-active")
    ? "Simulated attack evidence is labeled for future offline model experiments."
    : "Rule-generated labels are available, but analyst review is still required before ML training.";

  elements.evidenceLogList.innerHTML = records
    .map(
      (record) => `
        <div class="${record.tone}">
          <span></span>
          <div>
            <small>${escapeHTML(record.type)}</small>
            <strong>${escapeHTML(record.title)}</strong>
            <p>${escapeHTML(record.copy)}</p>
          </div>
          <time>${timeStamp()}</time>
        </div>
      `,
    )
    .join("");

  elements.evidenceSourceList.innerHTML = [
    {
      index: "01",
      title: flight.source === "LIVE · PUBLIC" ? "OpenSky public state vector" : "Replay state vector",
      copy:
        flight.source === "LIVE · PUBLIC"
          ? "Public ADS-B style state data, not certified avionics."
          : "Seeded demo vector used when public feed is unavailable.",
    },
    {
      index: "02",
      title: "Derived integrity checks",
      copy: "Freshness, phase, speed, altitude, and vertical-rate rules computed in the browser.",
    },
    {
      index: "03",
      title: "Simulated cyber signals",
      copy: "Spoofed GPS, behavioral rhythm, and sensor degradation remain local demo signals.",
    },
  ]
    .map(
      (item) => `
        <div>
          <span>${item.index}</span>
          <div>
            <strong>${escapeHTML(item.title)}</strong>
            <p>${escapeHTML(item.copy)}</p>
          </div>
        </div>
      `,
    )
    .join("");

  renderModelLab(flight, records, trainingRow);
}

function renderModelLab(flight = selectedFlight(), records = buildEvidenceRecords(flight), trainingRow = null) {
  if (!flight) return;

  const row = trainingRow || buildTrainingRow(flight, records);
  const active = document.body.classList.contains("attack-active");
  const labelCount = records.filter((record) => record.tone !== "pass").length + (active ? 2 : 0);
  const readinessScore = clamp(26 + records.length * 4 + labelCount * 8, 30, active ? 86 : 70);
  const features = [
    ["altitude_ft", formatAltitude(flight.altitudeFt), "Altitude envelope and phase context."],
    ["ground_speed_kt", `${flight.speedKnots} kt`, "Speed plausibility against altitude and phase."],
    ["vertical_rate_fpm", formatVertical(flight.verticalFtMin), "Climb/descent envelope and anomaly signal."],
    ["heading_deg", `${flight.heading}°`, "Track continuity and turn-rate input."],
    ["last_contact_sec", `${flight.ageSec}s`, "State-vector freshness and replay risk."],
    ["source_class", sourceClassForFlight(flight), "Separates public, replay, and future partner data."],
  ];
  const labels = [
    {
      label: integrityLabelForFlight(flight),
      copy: active
        ? "Synthetic cyber anomaly label generated by Threat Sim."
        : "Rule-generated label based on the selected aircraft checks.",
      tone: active || flight.status === "critical" ? "critical" : flight.status === "watch" ? "watch" : "pass",
      tag: active ? "SIMULATED" : "RULE",
    },
    {
      label: reviewStateForFlight(flight),
      copy: "Human review state before any future training row is trusted.",
      tone: reviewStateForFlight(flight) === "AUTO_ACCEPTED" ? "pass" : "watch",
      tag: "GOVERNANCE",
    },
  ];

  elements.modelDatasetStatus.textContent = `${labelCount + 1} LABELS`;
  elements.modelReadinessStatus.textContent = active ? "ATTACK DATA READY" : "DATASET BUILDING";
  elements.modelReadinessStatus.className = active ? "watch" : "normal";
  elements.modelGateStatus.textContent = active ? "ML-READY EXPORT" : "RULE-BASED";
  elements.modelReadinessMeter.value = readinessScore;
  elements.modelReadinessScore.textContent = `${readinessScore}%`;
  elements.modelReadinessCopy.textContent = active
    ? "Threat Sim has created a high-signal synthetic label, but training still belongs offline."
    : "The current page is producing candidate rows; more reviewed evidence is needed before model training.";
  elements.modelFeatureCount.textContent = `${features.length} FEATURES`;
  elements.modelLabelStatus.textContent = active ? "ATTACK LABEL" : "RULE LABEL";
  elements.modelSchemaStatus.textContent = active ? "ATTACK JSONL" : "JSONL READY";
  elements.modelSchemaPreview.textContent = JSON.stringify(row, null, 2);

  elements.modelFeatureList.innerHTML = features
    .map(
      ([name, value, copy], index) => `
        <div>
          <span>${String(index + 1).padStart(2, "0")}</span>
          <div>
            <strong>${escapeHTML(name)} · ${escapeHTML(value)}</strong>
            <p>${escapeHTML(copy)}</p>
          </div>
        </div>
      `,
    )
    .join("");

  elements.modelLabelList.innerHTML = labels
    .map(
      (item) => `
        <div class="${item.tone}">
          <span></span>
          <div>
            <strong>${escapeHTML(item.label)}</strong>
            <p>${escapeHTML(item.copy)}</p>
          </div>
          <small>${escapeHTML(item.tag)}</small>
        </div>
      `,
    )
    .join("");
}

function startThreatSimulation() {
  threatState.active = true;
  threatState.paused = false;
  if (threatState.progress >= 100) {
    threatState.progress = 0;
  }
  setAttackMode(true);
  renderThreatSim();
}

function resetThreatSimulation() {
  threatState.active = false;
  threatState.paused = false;
  threatState.progress = 0;
  setAttackMode(false);
  renderThreatSim();
}

function toggleThreatPause() {
  if (!threatState.active) return;
  threatState.paused = !threatState.paused;
  renderThreatSim();
}

function tickThreatSimulation() {
  if (!threatState.active || threatState.paused) return;

  threatState.progress = clamp(threatState.progress + 100 / threatState.duration, 0, 100);
  if (threatState.progress >= 100) {
    threatState.paused = true;
  }
  renderThreatSim();
  renderFlightLens(selectedFlight());
}

function syncThreatSettingsFromControls() {
  threatState.mode = elements.threatMode.value;
  threatState.intensity = Number(elements.threatIntensity.value);
  threatState.duration = Number(elements.threatDuration.value);
  renderThreatSim();
}

function statusFromTone(tone) {
  if (tone === "critical") return "BLOCK";
  if (tone === "warn") return "WATCH";
  return "PASS";
}

function engineRuleBank(flight) {
  const staleTone = flight.ageSec > 180 ? "critical" : flight.ageSec > 90 ? "warn" : "pass";
  const verticalTone =
    !flight.onGround && flight.altitudeFt > 10000 && Math.abs(flight.verticalFtMin) > 2800 ? "warn" : "pass";
  const speedTone =
    (!flight.onGround && flight.speedKnots > 540) ||
    (!flight.onGround && flight.altitudeFt < 700 && flight.speedKnots > 230)
      ? "critical"
      : "pass";
  const phaseTone =
    (flight.phase === "cruise" && Math.abs(flight.verticalFtMin) > 2800) ||
    (flight.phase === "approach" && flight.speedKnots > 250)
      ? "warn"
      : "pass";
  const fleetAnomalyCount = airspaceState.flights.filter((item) => item.status !== "normal").length;
  const fleetTone = fleetAnomalyCount >= 5 ? "warn" : "pass";
  const attackActive = document.body.classList.contains("attack-active");

  return [
    {
      layer: "Input Integrity",
      tone: staleTone,
      title: "Position update freshness",
      copy:
        staleTone === "pass"
          ? `Last contact ${flight.ageSec}s ago is inside tolerance.`
          : `Last contact ${flight.ageSec}s ago needs freshness review.`,
      tag: "RULE-BASED",
    },
    {
      layer: "Input Integrity",
      tone: verticalTone,
      title: "Vertical-rate envelope",
      copy:
        verticalTone === "pass"
          ? "Vertical rate matches the computed flight phase."
          : "Vertical-rate variance conflicts with cruise baseline.",
      tag: "ML-READY",
    },
    {
      layer: "Physics Output",
      tone: speedTone,
      title: "Speed and altitude physics",
      copy:
        speedTone === "pass"
          ? "Speed and altitude combination is physically plausible."
          : "Speed/altitude combination should quarantine unsafe AI output.",
      tag: "RULE-BASED",
    },
    {
      layer: "Physics Output",
      tone: phaseTone,
      title: "Phase coherence",
      copy:
        phaseTone === "pass"
          ? `${flight.phase.toUpperCase()} phase matches aircraft motion.`
          : "Flight phase and motion signals require review before trusting AI output.",
      tag: "ML-READY",
    },
    {
      layer: "Behavioral Signal",
      tone: attackActive ? "critical" : "pass",
      title: "Control rhythm confidence",
      copy: attackActive
        ? "Spoofing demo simulates non-human control consistency."
        : "Behavioral signal is simulated and held in nominal confidence for v1.",
      tag: "SIMULATED",
    },
    {
      layer: "Fleet Intelligence",
      tone: fleetTone,
      title: "Fleet anomaly clustering",
      copy:
        fleetTone === "pass"
          ? `${fleetAnomalyCount} active watch signatures in current airspace.`
          : `${fleetAnomalyCount} watch signatures may indicate shared fleet pattern.`,
      tag: "COMPUTED",
    },
    {
      layer: "Data Governance",
      tone: "pass",
      title: "Source labeling",
      copy:
        flight.source === "LIVE · PUBLIC"
          ? "Vector is labeled as OpenSky public data before scoring."
          : "Vector is labeled as replay simulation before scoring.",
      tag: "REQUIRED",
    },
  ];
}

function selectedFlight() {
  return (
    airspaceState.flights.find((flight) => flight.id === airspaceState.selectedId) ||
    airspaceState.flights[0] ||
    null
  );
}

function scoresForFlight(flight) {
  const watchTotal = airspaceState.flights.filter((item) => item.status !== "normal").length;
  const fleet = computedFleetIntegrity(airspaceState.flights.length, watchTotal);

  if (!flight) {
    return { input: 96, physics: 98, behavior: 91, fleet, watch: watchTotal };
  }

  if (flight.status === "critical") {
    return { input: 46, physics: 52, behavior: 80, fleet, watch: watchTotal };
  }

  if (flight.status === "watch") {
    return { input: 74, physics: 86, behavior: 88, fleet, watch: watchTotal };
  }

  return { input: 96, physics: 98, behavior: 91, fleet, watch: watchTotal };
}

function renderSelectedFlight(flight) {
  if (!flight) return;

  const region = currentRegion();
  const primaryAnomaly = flight.anomalies[0];
  const sourceLabel = flight.source === "LIVE · PUBLIC" ? "LIVE · PUBLIC" : "REPLAY · SIMULATED";
  const healthLabel =
    flight.status === "critical" ? "DATA_CORRUPTION" : flight.status === "watch" ? "SENSOR_FAULT" : "ALL_OK";

  elements.selectedCallsign.textContent = flight.callsign;
  elements.selectedMeta.textContent = `${flight.country} · ${flight.icao24.toUpperCase()} · ${flight.phase.toUpperCase()}`;
  elements.selectedSourceBadge.textContent = sourceLabel;
  elements.selectedPhaseBadge.textContent = flight.phase.toUpperCase();
  elements.selectedHealthBadge.textContent = healthLabel;
  elements.selectedHealthBadge.className = flight.status;
  elements.selectedCheckNote.textContent =
    primaryAnomaly?.label || "Position, altitude, velocity, and phase are coherent in the current vector.";
  elements.routeOriginCode.textContent = region.route[0];
  elements.routeOriginLabel.textContent = region.labels[0];
  elements.routeOriginTime.textContent = region.times[0];
  elements.routeDestinationCode.textContent = region.route[1];
  elements.routeDestinationLabel.textContent = region.labels[1];
  elements.routeDestinationTime.textContent = region.times[1];
  elements.telemetryContact.textContent = `${flight.ageSec}s ago`;
  elements.telemetrySpeed.textContent = `${flight.speedKnots} kt`;
  elements.telemetryAltitude.textContent = formatAltitude(flight.altitudeFt);
  elements.telemetryVertical.textContent = formatVertical(flight.verticalFtMin);
  elements.telemetryHeading.textContent = `${flight.heading}°`;
  elements.telemetrySquawk.textContent = flight.squawk || "----";
  elements.telemetrySource.textContent = sourceLabel;
  renderFlightLens(flight);
  renderThreatSim(flight);
  renderFleetIntelligence(flight);
  renderEvidenceLog(flight);

  if (!document.body.classList.contains("attack-active")) {
    if (flight.status === "critical") {
      elements.verdict.textContent = "DATA_CORRUPTION";
      elements.verdictCopy.textContent =
        primaryAnomaly?.label || "Public state vector needs immediate integrity review.";
    } else if (flight.status === "watch") {
      elements.verdict.textContent = "SENSOR_FAULT";
      elements.verdictCopy.textContent =
        primaryAnomaly?.label || "Track is plausible, but one integrity check is outside baseline.";
    } else {
      elements.verdict.textContent = "ALL_OK";
      elements.verdictCopy.textContent = "Live track, altitude, and phase remain coherent.";
    }

    setScores(scoresForFlight(flight));
  }
}

function renderFlightLens(flight) {
  if (!flight) return;

  const sourceLabel = flight.source === "LIVE · PUBLIC" ? "LIVE · PUBLIC" : "REPLAY · SIMULATED";
  const scores = document.body.classList.contains("attack-active")
    ? { input: 31, physics: 18, behavior: 79 }
    : scoresForFlight(flight);
  const verdictLabel = document.body.classList.contains("attack-active")
    ? "CYBER_ANOMALY"
    : flight.status === "critical"
      ? "DATA_CORRUPTION"
      : flight.status === "watch"
        ? "SENSOR_FAULT"
        : "ALL_OK";
  const riskLabel = document.body.classList.contains("attack-active")
    ? "HIGH RISK"
    : flight.status === "critical"
      ? "HIGH RISK"
      : flight.status === "watch"
        ? "WATCH"
        : "LOW RISK";
  const primaryAnomaly = flight.anomalies[0];
  const chartTone = flight.status === "critical" ? "critical" : flight.status === "watch" ? "watch" : "normal";
  const altitudeSeries = telemetrySeries(flight, "altitude");
  const speedSeries = telemetrySeries(flight, "speed");
  const verticalSeries = telemetrySeries(flight, "vertical");
  const headingSeries = telemetrySeries(flight, "heading");

  elements.lensSourceBadge.textContent = sourceLabel;
  elements.lensCallsign.textContent = flight.callsign;
  elements.lensVerdict.textContent = verdictLabel;
  elements.lensVerdict.className = flight.status;
  elements.lensPhase.textContent = flight.phase.toUpperCase();
  elements.lensIdentityCallsign.textContent = flight.callsign;
  elements.lensIdentityCountry.textContent = flight.country;
  elements.lensIcao.textContent = flight.icao24.toUpperCase();
  elements.lensPositionSource.textContent = flight.positionSource.toUpperCase();
  elements.lensLastContact.textContent = `${flight.ageSec}s ago`;
  elements.lensSquawk.textContent = flight.squawk || "----";
  elements.lensTelemetrySource.textContent = sourceLabel;
  elements.lensLatitude.textContent = formatCoordinate(flight.lat, "lat");
  elements.lensLongitude.textContent = formatCoordinate(flight.lon, "lon");
  elements.lensAltitude.textContent = formatAltitude(flight.altitudeFt);
  elements.lensSpeed.textContent = `${flight.speedKnots} kt`;
  elements.lensHeading.textContent = `${flight.heading}°`;
  elements.lensVerticalRate.textContent = formatVertical(flight.verticalFtMin);
  elements.lensAltitudeLive.textContent = formatAltitude(flight.altitudeFt);
  elements.lensSpeedLive.textContent = `${flight.speedKnots} kt`;
  elements.lensVerticalLive.textContent = formatVertical(flight.verticalFtMin);
  elements.lensHeadingLive.textContent = `${flight.heading}°`;
  elements.lensRiskLabel.textContent = riskLabel;
  elements.lensRiskLabel.className = `lens-risk-label ${flight.status}`;
  elements.lensSummaryCopy.textContent =
    primaryAnomaly?.label || "Position, altitude, speed, and phase remain coherent.";
  elements.lensInputMeter.value = scores.input;
  elements.lensPhysicsMeter.value = scores.physics;
  elements.lensBehaviorMeter.value = scores.behavior;
  elements.lensInputScore.textContent = scores.input;
  elements.lensPhysicsScore.textContent = scores.physics;
  elements.lensBehaviorScore.textContent = scores.behavior;

  renderSparkline(elements.lensAltitudeChart, altitudeSeries, chartTone);
  renderSparkline(elements.lensSpeedChart, speedSeries, chartTone);
  renderSparkline(elements.lensVerticalChart, verticalSeries, chartTone);
  renderSparkline(elements.lensHeadingChart, headingSeries, chartTone);

  elements.lensCheckList.innerHTML = integrityChecksForFlight(flight)
    .map(
      (check) => `
        <div class="${check.tone}">
          <span></span>
          <div>
            <strong>${escapeHTML(check.title)}</strong>
            <p>${escapeHTML(check.copy)}</p>
          </div>
        </div>
      `,
    )
    .join("");

  renderIntegrityEngine(flight, scores, verdictLabel, riskLabel);
}

function renderIntegrityEngine(flight, scores, verdictLabel, riskLabel) {
  if (!flight) return;

  const sourceLabel = flight.source === "LIVE · PUBLIC" ? "LIVE · PUBLIC" : "REPLAY · SIMULATED";
  const rules = engineRuleBank(flight);
  const hasCritical = document.body.classList.contains("attack-active") || rules.some((rule) => rule.tone === "critical");
  const hasWarn = rules.some((rule) => rule.tone === "warn");
  const watchTotal = airspaceState.flights.filter((item) => item.status !== "normal").length;
  const fleetScore = computedFleetIntegrity(airspaceState.flights.length, watchTotal);
  const inputTone = rules
    .filter((rule) => rule.layer === "Input Integrity")
    .reduce((tone, rule) => (rule.tone === "critical" ? "critical" : tone === "pass" ? rule.tone : tone), "pass");
  const physicsTone = rules
    .filter((rule) => rule.layer === "Physics Output")
    .reduce((tone, rule) => (rule.tone === "critical" ? "critical" : tone === "pass" ? rule.tone : tone), "pass");

  elements.engineSource.textContent = sourceLabel;
  elements.engineCallsign.textContent = flight.callsign;
  elements.engineVerdict.textContent = verdictLabel;
  elements.engineVerdict.className = flight.status;
  elements.enginePipelineSource.textContent =
    sourceLabel === "LIVE · PUBLIC" ? "OpenSky public vector received." : "Replay vector received for demo reliability.";
  elements.enginePipelineVerdict.textContent = hasCritical
    ? "AI output quarantined until physics and input conflicts are resolved."
    : hasWarn
      ? "AI output requires analyst review before trusted use."
      : "AI output allowed only after integrity pass.";
  elements.engineInputStatus.textContent = statusFromTone(inputTone);
  elements.enginePhysicsStatus.textContent = statusFromTone(physicsTone);
  elements.engineBehaviorStatus.textContent = document.body.classList.contains("attack-active") ? "BLOCK" : "SIMULATED";
  elements.engineFleetStatus.textContent = watchTotal > 0 ? "WATCH" : "CLEAR";
  elements.engineInputMeter.value = scores.input;
  elements.enginePhysicsMeter.value = scores.physics;
  elements.engineBehaviorMeter.value = scores.behavior;
  elements.engineFleetMeter.value = fleetScore;
  elements.engineInputScore.textContent = scores.input;
  elements.enginePhysicsScore.textContent = scores.physics;
  elements.engineBehaviorScore.textContent = scores.behavior;
  elements.engineFleetScore.textContent = fleetScore;
  elements.engineGateStatus.textContent = hasCritical ? "QUARANTINE" : hasWarn ? "REVIEW" : "ALLOW";
  elements.engineGateStatus.className = hasCritical ? "critical" : hasWarn ? "watch" : "normal";
  elements.engineGateLabel.textContent = hasCritical
    ? "TRUSTED_OUTPUT_BLOCKED"
    : hasWarn
      ? "TRUSTED_OUTPUT_REVIEW"
      : "TRUSTED_OUTPUT_ALLOWED";
  elements.engineRiskLabel.textContent = riskLabel;
  elements.engineRiskLabel.className = hasCritical ? "critical" : hasWarn ? "watch" : "normal";
  elements.engineSummary.textContent = hasCritical
    ? "SKY SHIELD detects a high-risk integrity conflict. Unsafe AI recommendations are quarantined."
    : hasWarn
      ? "SKY SHIELD keeps the aircraft under review because one or more checks need analyst attention."
      : "Current vector is coherent. AI recommendation remains eligible for trusted review.";
  elements.engineRuleList.innerHTML = rules
    .map(
      (rule) => `
        <div class="${rule.tone}">
          <span></span>
          <div>
            <small>${escapeHTML(rule.layer)}</small>
            <strong>${escapeHTML(rule.title)}</strong>
            <p>${escapeHTML(rule.copy)}</p>
          </div>
          <em>${escapeHTML(rule.tag)}</em>
        </div>
      `,
    )
    .join("");
}

function renderAirspaceEvents() {
  if (document.body.classList.contains("attack-active")) return;

  const anomalyEvents = airspaceState.flights
    .filter((flight) => flight.anomalies.length)
    .slice(0, 3)
    .map((flight) => ({
      id: flight.callsign,
      text: flight.anomalies[0].label,
      tone: flight.status === "critical" ? "alert" : "watch",
    }));

  const nominalEvents = airspaceState.flights.slice(0, 3).map((flight) => ({
    id: flight.callsign,
    text: `${flight.phase} profile coherent with ${flight.positionSource} state vector.`,
    tone: "",
  }));

  renderEvents(anomalyEvents.length ? anomalyEvents : nominalEvents);
}

function updateSummaryMetrics() {
  const total = airspaceState.flights.length;
  const watchTotal = airspaceState.flights.filter((flight) => flight.status !== "normal").length;
  const liveMode = isLivePublicMode();
  const fleetIntegrity = computedFleetIntegrity(total, watchTotal);
  const latencyLabel =
    airspaceState.latencyMs === null
      ? "--"
      : airspaceState.latencyMs === 0
        ? "replay"
        : `${airspaceState.latencyMs} ms`;

  elements.aircraftCount.textContent = total;
  elements.navAircraftCount.textContent = liveMode ? `${total} live` : `${total} replay`;
  elements.statusAircraftCount.textContent = liveMode ? total : `${total} vectors`;
  elements.statusAnomalies.textContent = watchTotal;
  elements.statusLatency.textContent = latencyLabel;
  elements.feedMode.textContent = airspaceState.dataOrigin;
  elements.feedHealthLabel.textContent = liveMode ? (watchTotal > 0 ? "WATCH" : "NOMINAL") : "REPLAY";
  elements.feedStatusNote.textContent = liveMode ? "OpenSky public state vectors" : "Demo mode after live-feed fallback";
  elements.trackedNote.textContent = liveMode ? "public aircraft state vectors" : "seeded demo aircraft vectors";
  elements.anomalyNote.textContent = liveMode ? "computed from public feed" : "scripted integrity cases";
  elements.latencyNote.textContent = liveMode ? "OpenSky request latency" : "local replay refresh";
  elements.aircraftTrend.textContent = liveMode ? "LIVE" : "DEMO";
  elements.aircraftTrend.className = `metric-trend ${liveMode ? "trend-up" : "trend-stable"}`;
  elements.aircraftContext.textContent = liveMode ? `OpenSky · ${currentRegion().label}` : "replay demo vectors";
  elements.fleetTrend.textContent = liveMode ? "computed" : "demo baseline";
  elements.fleetContext.textContent = liveMode ? "public-feed integrity ratio" : "prototype score, not certified";
  elements.watchTrend.textContent = watchTotal > 0 ? (liveMode ? "WATCH" : "SCRIPTED") : "CLEAR";
  elements.watchTrend.className = `metric-trend ${watchTotal > 0 ? "trend-warn" : "trend-stable"}`;
  elements.watchContext.textContent = liveMode ? "computed public-feed anomalies" : "replay integrity cases";
  if (!document.body.classList.contains("attack-active")) {
    elements.fleetScore.textContent = `${fleetIntegrity}%`;
    elements.watchCount.textContent = watchTotal;
  }
  elements.regionCaption.textContent = currentRegion().label;
  elements.dataOriginCaption.textContent =
    airspaceState.dataOrigin === "LIVE · PUBLIC"
      ? "OpenSky public state vectors"
      : "Replay-safe simulation overlay";
  renderFleetIntelligence();
}

function refreshVisibleAirspace() {
  const visible = filteredFlights();
  selectVisibleFlight(visible);
  renderFlightLayer(visible);
  renderFlightStrip(visible);
  renderSelectedFlight(selectedFlight());
  renderMapFlights(visible);
}

function applyAirspace(flights, dataOrigin, latencyMs) {
  airspaceState.flights = flights
    .slice()
    .sort((a, b) => {
      const rank = { critical: 0, watch: 1, normal: 2 };
      return rank[a.status] - rank[b.status] || a.callsign.localeCompare(b.callsign);
    });
  airspaceState.dataOrigin = dataOrigin;
  airspaceState.latencyMs = latencyMs;
  airspaceState.lastUpdate = new Date();

  updateSummaryMetrics();
  refreshVisibleAirspace();
  renderAirspaceEvents();
}

async function refreshLiveAirspace() {
  const requestId = airspaceState.requestId + 1;
  airspaceState.requestId = requestId;
  elements.feedMode.textContent = "CONNECTING";
  elements.statusLatency.textContent = "--";

  const region = currentRegion();

  try {
    const result = await fetchOpenSkyFlights(region);
    if (requestId !== airspaceState.requestId) return;
    applyAirspace(result.flights, "LIVE · PUBLIC", result.latencyMs);
  } catch (error) {
    if (requestId !== airspaceState.requestId) return;
    applyAirspace(buildReplayFlights(airspaceState.regionKey), "REPLAY · SIMULATED", 0);
  }
}

function setAttackMode(active) {
  document.body.classList.toggle("attack-active", active);
  elements.attackButton.innerHTML = attackButtonMarkup(active);

  if (active) {
    elements.verdict.textContent = "CYBER_ANOMALY";
    elements.verdictCopy.textContent =
      "GPS state is diverging from verified flight evidence. AI output is quarantined.";
    setScores({ input: 31, physics: 18, behavior: 79, fleet: 61, watch: 41 });
    renderEvents(attackEvents);
    renderFlightLens(selectedFlight());
    return;
  }

  renderSelectedFlight(selectedFlight());
  renderAirspaceEvents();
}

function tickReplayMotion() {
  if (airspaceState.dataOrigin !== "REPLAY · SIMULATED") {
    renderSelectedFlight(selectedFlight());
    return;
  }

  applyAirspace(buildReplayFlights(airspaceState.regionKey), "REPLAY · SIMULATED", 0);
}

elements.attackButton.innerHTML = attackButtonMarkup(false);
elements.attackButton.addEventListener("click", () => {
  if (document.body.classList.contains("attack-active")) {
    resetThreatSimulation();
    return;
  }

  startThreatSimulation();
});

elements.refreshLive.addEventListener("click", refreshLiveAirspace);
elements.viewToggle.addEventListener("click", toggleAirspaceView);
elements.regionSelect.addEventListener("change", () => {
  airspaceState.regionKey = elements.regionSelect.value;
  airspaceState.selectedId = null;
  updateAirspaceMapRegion();
  refreshLiveAirspace();
});

[elements.altitudeFilter, elements.speedFilter, elements.anomalyFilter].forEach((filter) => {
  filter.addEventListener("change", refreshVisibleAirspace);
});

elements.callsignSearch.addEventListener("input", refreshVisibleAirspace);
elements.searchButton.addEventListener("click", refreshVisibleAirspace);

elements.threatStart.addEventListener("click", startThreatSimulation);
elements.threatPause.addEventListener("click", toggleThreatPause);
elements.threatReset.addEventListener("click", resetThreatSimulation);
elements.threatMode.addEventListener("change", syncThreatSettingsFromControls);
elements.threatIntensity.addEventListener("input", syncThreatSettingsFromControls);
elements.threatDuration.addEventListener("change", syncThreatSettingsFromControls);

elements.navTargets.forEach((button) => {
  button.addEventListener("click", () => {
    scrollToSection(button.dataset.sectionTarget);
  });
});

elements.jumpTargets.forEach((button) => {
  button.addEventListener("click", () => {
    scrollToSection(button.dataset.jumpTarget);
  });
});

applyAirspace(buildReplayFlights(airspaceState.regionKey), "REPLAY · SIMULATED", 0);
refreshLiveAirspace();
window.setInterval(refreshLiveAirspace, 15000);
window.setInterval(tickReplayMotion, 2800);
window.setInterval(tickThreatSimulation, 1000);
