import { resolveAirspaceRegion } from "./regions";

export function openSkyStatesUrl(regionKey) {
  const region = resolveAirspaceRegion(regionKey);
  const params = new URLSearchParams({
    lamin: String(region.lamin),
    lomin: String(region.lomin),
    lamax: String(region.lamax),
    lomax: String(region.lomax),
  });

  return `https://opensky-network.org/api/states/all?${params.toString()}`;
}

export async function fetchOpenSkyStateVectors(regionKey, { signal } = {}) {
  const started = Date.now();
  const response = await fetch(openSkyStatesUrl(regionKey), {
    headers: {
      Accept: "application/json",
      "User-Agent": "SKY-SHIELD-next-prototype/0.2",
    },
    signal,
  });

  if (!response.ok) {
    return {
      ok: false,
      status: response.status,
      message: `OpenSky responded with ${response.status}`,
    };
  }

  return {
    ok: true,
    latency_ms: Date.now() - started,
    payload: await response.json(),
  };
}
