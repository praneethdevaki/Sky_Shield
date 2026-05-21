const http = require("node:http");
const fs = require("node:fs/promises");
const path = require("node:path");
const { URL } = require("node:url");

const root = __dirname;
const port = Number(process.env.PORT || 4173);
const host = process.env.HOST || "127.0.0.1";

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
};

const regions = {
  europe: { lamin: 42, lomin: -10, lamax: 58, lomax: 18 },
  gulf: { lamin: 15, lomin: 39, lamax: 32, lomax: 58 },
  singapore: { lamin: -6, lomin: 94, lamax: 10, lomax: 112 },
  atlantic: { lamin: 40, lomin: -75, lamax: 58, lomax: -5 },
};

function sendJson(res, statusCode, payload) {
  res.writeHead(statusCode, {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store",
    "Access-Control-Allow-Origin": "*",
  });
  res.end(JSON.stringify(payload));
}

function safeStaticPath(urlPath) {
  const decodedPath = decodeURIComponent(urlPath === "/" ? "/index.html" : urlPath);
  const resolvedPath = path.normalize(path.join(root, decodedPath));

  if (!resolvedPath.startsWith(root)) {
    return null;
  }

  return resolvedPath;
}

async function proxyOpenSky(reqUrl, res) {
  const regionKey = reqUrl.searchParams.get("region") || "europe";
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
    const response = await fetch(upstreamUrl, {
      headers: {
        Accept: "application/json",
        "User-Agent": "SKY-SHIELD-local-prototype/0.1",
      },
      signal: controller.signal,
    });

    if (!response.ok) {
      sendJson(res, response.status, {
        ok: false,
        source: "OpenSky",
        message: `OpenSky responded with ${response.status}`,
      });
      return;
    }

    const payload = await response.json();
    sendJson(res, 200, {
      ok: true,
      proxied: true,
      region: regionKey,
      latency_ms: Date.now() - started,
      payload,
    });
  } catch (error) {
    sendJson(res, 502, {
      ok: false,
      source: "OpenSky",
      message: error.name === "AbortError" ? "OpenSky request timed out" : error.message,
    });
  } finally {
    clearTimeout(timeout);
  }
}

async function serveStatic(reqUrl, res) {
  const filePath = safeStaticPath(reqUrl.pathname);

  if (!filePath) {
    res.writeHead(403);
    res.end("Forbidden");
    return;
  }

  try {
    const data = await fs.readFile(filePath);
    const contentType = mimeTypes[path.extname(filePath)] || "application/octet-stream";
    res.writeHead(200, {
      "Content-Type": contentType,
      "Cache-Control": "no-store",
    });
    res.end(data);
  } catch (error) {
    res.writeHead(error.code === "ENOENT" ? 404 : 500, {
      "Content-Type": "text/plain; charset=utf-8",
    });
    res.end(error.code === "ENOENT" ? "Not found" : "Server error");
  }
}

const server = http.createServer(async (req, res) => {
  const reqUrl = new URL(req.url, `http://${req.headers.host || "localhost"}`);

  if (req.method === "OPTIONS") {
    res.writeHead(204, {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    });
    res.end();
    return;
  }

  if (req.method !== "GET") {
    res.writeHead(405);
    res.end("Method not allowed");
    return;
  }

  if (reqUrl.pathname === "/api/opensky") {
    await proxyOpenSky(reqUrl, res);
    return;
  }

  await serveStatic(reqUrl, res);
});

server.listen(port, host, () => {
  console.log(`SKY SHIELD running at http://${host}:${port}`);
});
