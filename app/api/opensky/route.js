import { fetchOpenSkyStateVectors } from "../../../lib/airspace/opensky";

export const dynamic = "force-dynamic";

export async function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: corsHeaders(),
  });
}

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const regionKey = searchParams.get("region") || "europe";
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 9000);

  try {
    const result = await fetchOpenSkyStateVectors(regionKey, {
      signal: controller.signal,
    });

    if (!result.ok) {
      return jsonResponse(
        {
          ok: false,
          source: "OpenSky",
          message: result.message,
        },
        result.status,
      );
    }

    return jsonResponse({
      ok: true,
      proxied: true,
      region: regionKey,
      latency_ms: result.latency_ms,
      payload: result.payload,
    });
  } catch (error) {
    return jsonResponse(
      {
        ok: false,
        source: "OpenSky",
        message: error.name === "AbortError" ? "OpenSky request timed out" : error.message,
      },
      502,
    );
  } finally {
    clearTimeout(timeout);
  }
}

function corsHeaders() {
  return {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Cache-Control": "no-store",
  };
}

function jsonResponse(payload, status = 200) {
  return Response.json(payload, {
    status,
    headers: corsHeaders(),
  });
}
