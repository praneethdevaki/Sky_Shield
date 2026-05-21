const regions = {
  europe: { lamin: 42, lomin: -10, lamax: 58, lomax: 18 },
  gulf: { lamin: 15, lomin: 39, lamax: 32, lomax: 58 },
  singapore: { lamin: -6, lomin: 94, lamax: 10, lomax: 112 },
  atlantic: { lamin: 40, lomin: -75, lamax: 58, lomax: -5 },
};

module.exports = async function handler(request, response) {
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  response.setHeader("Access-Control-Allow-Headers", "Content-Type");
  response.setHeader("Cache-Control", "no-store");

  if (request.method === "OPTIONS") {
    response.status(204).end();
    return;
  }

  if (request.method !== "GET") {
    response.status(405).json({ ok: false, message: "Method not allowed" });
    return;
  }

  const regionKey = request.query.region || "europe";
  const region = regions[regionKey] || regions.europe;
  const params = new URLSearchParams({
    lamin: String(region.lamin),
    lomin: String(region.lomin),
    lamax: String(region.lamax),
    lomax: String(region.lomax),
  });
  const upstreamUrl = `https://opensky-network.org/api/states/all?${params.toString()}`;
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 9000);
  const started = Date.now();

  try {
    const upstream = await fetch(upstreamUrl, {
      headers: {
        Accept: "application/json",
        "User-Agent": "SKY-SHIELD-vercel-prototype/0.1",
      },
      signal: controller.signal,
    });

    if (!upstream.ok) {
      response.status(upstream.status).json({
        ok: false,
        source: "OpenSky",
        message: `OpenSky responded with ${upstream.status}`,
      });
      return;
    }

    const payload = await upstream.json();
    response.status(200).json({
      ok: true,
      proxied: true,
      region: regionKey,
      latency_ms: Date.now() - started,
      payload,
    });
  } catch (error) {
    response.status(502).json({
      ok: false,
      source: "OpenSky",
      message: error.name === "AbortError" ? "OpenSky request timed out" : error.message,
    });
  } finally {
    clearTimeout(timeout);
  }
};
