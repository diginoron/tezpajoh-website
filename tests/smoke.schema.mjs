/**
 * Build-output smoke test — guards against SEO-critical artifacts silently
 * missing from the production build:
 *   1. JSON-LD schemas absent from prerendered HTML (e.g. wrapping them in
 *      next/head inside App Router, which never renders — caught 2026-10-18).
 *   2. Missing or wrong <link rel="canonical"> in prerendered HTML.
 *   3. Missing routes in the built sitemap — this Next version emits the
 *      app-router sitemap route as .next/server/app/sitemap.xml.body, not a
 *      plain sitemap.xml (caught 2026-11-02).
 * Run after `npm run build` (the DOD gate and CI order build before test).
 */
import fs from 'node:fs';
import path from 'node:path';

const BUILD_DIR = path.join(process.cwd(), '.next', 'server', 'app');

// Relative to .next/server/app — every page that must ship at least one schema
const EXPECTED_PAGES = [
  'services/accounting-thesis.html',
  'services/architecture-thesis.html',
  'services/article-writing-acceptance.html',
  'services/civil-engineering-thesis.html',
  'services/computer-engineering-ai-thesis.html',
  'services/economics-thesis.html',
  'services/electrical-engineering-thesis.html',
  'services/industrial-engineering-thesis.html',
  'services/international-university-thesis.html',
  'services/law-thesis.html',
  'services/management-thesis.html',
  'services/psychology-thesis.html',
  'services/sociology-thesis.html',
  'services/art-research-thesis.html',
  'services/geography-urban-planning-thesis.html',
  'services/persian-literature-thesis.html',
  'blog/professional-thesis-1405.html',
  'blog/ai-thesis-methods.html',
];

const SCHEMA_MARKER = 'application/ld+json';
const CANONICAL_TAG_RE = /<link[^>]*rel=["']canonical["'][^>]*>/i;

function fileExists(p) {
  try { return fs.statSync(p).isFile(); } catch { return false; }
}

function routeOf(pageRel) {
  return '/' + pageRel.replace(/\.html$/, '');
}

// Next.js writes the app-router sitemap route as sitemap.xml.body (+ .meta);
// fall back to the plain-file and static-export locations for resilience.
function readBuiltSitemap() {
  const candidates = [
    path.join(BUILD_DIR, 'sitemap.xml.body'),
    path.join(BUILD_DIR, 'sitemap.xml'),
    path.join(process.cwd(), 'out', 'sitemap.xml'),
  ];
  for (const candidate of candidates) {
    if (fileExists(candidate)) return fs.readFileSync(candidate, 'utf8');
  }
  return null;
}

let schemaFailures = 0;
let canonicalFailures = 0;
let totalSchemas = 0;
for (const rel of EXPECTED_PAGES) {
  const route = routeOf(rel);
  const abs = path.join(BUILD_DIR, rel);
  if (!fileExists(abs)) {
    console.error(`[FAIL] ${rel}: not found in build output (run "npm run build" first)`);
    schemaFailures++;
    canonicalFailures++;
    continue;
  }
  const html = fs.readFileSync(abs, 'utf8');

  const count = html.split(SCHEMA_MARKER).length - 1;
  totalSchemas += count;
  if (count === 0) {
    console.error(`[FAIL] ${rel}: 0 JSON-LD schemas in prerendered HTML — schema must be a direct JSX <script>, never inside next/head`);
    schemaFailures++;
  } else {
    console.log(`[OK]   ${rel}: ${count} JSON-LD schema(s)`);
  }

  const canonicalTag = html.match(CANONICAL_TAG_RE);
  if (!canonicalTag || !canonicalTag[0].includes(route)) {
    console.error(`[FAIL] ${rel}: canonical link missing or pointing elsewhere (expected href to contain ${route})`);
    canonicalFailures++;
  } else {
    console.log(`[OK]   ${rel}: canonical -> ${route}`);
  }
}

// Every expected page route must be listed in the built sitemap (as <loc>…</loc>)
const sitemap = readBuiltSitemap();
let sitemapOk = false;
if (sitemap === null) {
  console.error('[FAIL] sitemap: no built sitemap found (looked for .next/server/app/sitemap.xml.body, .next/server/app/sitemap.xml, out/sitemap.xml) — run "npm run build" first');
} else {
  const missingRoutes = EXPECTED_PAGES.map(routeOf).filter((route) => !sitemap.includes(`${route}</loc>`));
  if (missingRoutes.length > 0) {
    console.error(`[FAIL] sitemap: ${missingRoutes.length} route(s) missing -> ${missingRoutes.join(', ')}`);
  } else {
    sitemapOk = true;
    console.log(`[OK]   sitemap: all ${EXPECTED_PAGES.length} expected routes present`);
  }
}

const checksFailed = schemaFailures + canonicalFailures + (sitemapOk ? 0 : 1);
console.log(
  `\n${EXPECTED_PAGES.length - schemaFailures}/${EXPECTED_PAGES.length} pages with JSON-LD (${totalSchemas} schemas), ` +
  `${EXPECTED_PAGES.length - canonicalFailures}/${EXPECTED_PAGES.length} with canonical, ` +
  `sitemap: ${sitemapOk ? 'OK' : 'FAIL'}`
);
process.exit(checksFailed > 0 ? 1 : 0);