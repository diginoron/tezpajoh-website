/**
 * Runtime smoke test for DYNAMIC pages — pages that read searchParams (like
 * /blog pagination) are server-rendered at request time and ship NO
 * prerendered .html in the build output, so build-output checks
 * (tests/smoke.schema.mjs) and the DOD-gate postbuild canonical scan
 * silently skip them (gap caught 2026-11-02: /blog had no canonical).
 * Boots `next start` on a scratch port and checks, per route:
 *   1. HTTP 200
 *   2. non-empty <title>
 *   3. <link rel="canonical"> whose href contains the expected path
 * Run after `npm run build` (the DOD gate and CI order build before test).
 */
import { spawn } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

// Route -> path its canonical href must contain
const DYNAMIC_ROUTES = [
  { route: '/blog', canonicalIncludes: '/blog' },
];

const NEXT_BIN = path.join(process.cwd(), 'node_modules', 'next', 'dist', 'bin', 'next');
const BUILD_ID = path.join(process.cwd(), '.next', 'BUILD_ID');
const PORTS = [3179, 3189];
const BOOT_TIMEOUT_MS = 60_000;
const REQUEST_TIMEOUT_MS = 15_000;

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

if (!fs.existsSync(BUILD_ID)) {
  console.error('[FAIL] runtime: no production build found (.next/BUILD_ID missing) — run "npm run build" first');
  process.exit(1);
}

async function tryFetch(url) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);
  try {
    return await fetch(url, { signal: controller.signal });
  } finally {
    clearTimeout(timer);
  }
}

// Resolve once the server answers any HTTP status; null on boot timeout.
async function waitForServer(port) {
  const deadline = Date.now() + BOOT_TIMEOUT_MS;
  while (Date.now() < deadline) {
    try {
      return await tryFetch(`http://127.0.0.1:${port}/`);
    } catch {
      await sleep(1000);
    }
  }
  return null;
}

function startServer(port) {
  return spawn(process.execPath, [NEXT_BIN, 'start', '-p', String(port)], {
    cwd: process.cwd(),
    stdio: 'ignore',
  });
}

function extract(html, regex) {
  const match = html.match(regex);
  return match ? match[1] : null;
}

const failures = [];
let server = null;
let port = null;

try {
  for (const candidate of PORTS) {
    server = startServer(candidate);
    if ((await waitForServer(candidate)) !== null) {
      port = candidate;
      break;
    }
    server.kill();
    server = null;
    await sleep(1000);
  }
  if (port === null) {
    console.error(`[FAIL] runtime: next start did not come up on any port (${PORTS.join(', ')})`);
    process.exit(1);
  }

  for (const { route, canonicalIncludes } of DYNAMIC_ROUTES) {
    const res = await tryFetch(`http://127.0.0.1:${port}${route}`);
    if (res.status !== 200) {
      failures.push(`${route}: HTTP ${res.status} (expected 200)`);
      continue;
    }
    const html = await res.text();
    const title = extract(html, /<title>(.*?)<\/title>/i);
    if (!title || title.trim() === '') {
      failures.push(`${route}: <title> is empty or missing`);
    }
    const canonicalTag = html.match(/<link[^>]*rel=["']canonical["'][^>]*>/i);
    const canonicalHref = canonicalTag ? extract(canonicalTag[0], /href=["']([^"']*)["']/i) : null;
    if (!canonicalHref || !canonicalHref.includes(canonicalIncludes)) {
      failures.push(`${route}: canonical missing or does not include "${canonicalIncludes}"`);
    }
  }
} finally {
  if (server) {
    server.kill();
    await sleep(500);
  }
}

if (failures.length > 0) {
  for (const failure of failures) console.error(`[FAIL] runtime: ${failure}`);
  process.exit(1);
}

console.log(`[OK]   runtime: ${DYNAMIC_ROUTES.length}/${DYNAMIC_ROUTES.length} dynamic routes with title + canonical (port ${port})`);
