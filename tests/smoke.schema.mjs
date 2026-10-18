/**
 * Schema smoke test — guards against JSON-LD silently missing from the
 * prerendered HTML (e.g. wrapping it in next/head inside App Router, which
 * never renders — caught 2026-10-18). Scans the production build output
 * (.next/server/app) for every page below and fails if no
 * application/ld+json script is present.
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
  'services/economics-thesis.html',
  'services/electrical-engineering-thesis.html',
  'services/industrial-engineering-thesis.html',
  'services/international-university-thesis.html',
  'services/law-thesis.html',
  'services/management-thesis.html',
  'blog/professional-thesis-1405.html',
];

const SCHEMA_MARKER = 'application/ld+json';

function fileExists(p) {
  try { return fs.statSync(p).isFile(); } catch { return false; }
}

let failures = 0;
let totalSchemas = 0;
for (const rel of EXPECTED_PAGES) {
  const abs = path.join(BUILD_DIR, rel);
  if (!fileExists(abs)) {
    console.error(`[FAIL] ${rel}: not found in build output (run "npm run build" first)`);
    failures++;
    continue;
  }
  const html = fs.readFileSync(abs, 'utf8');
  const count = html.split(SCHEMA_MARKER).length - 1;
  totalSchemas += count;
  if (count === 0) {
    console.error(`[FAIL] ${rel}: 0 JSON-LD schemas in prerendered HTML — schema must be a direct JSX <script>, never inside next/head`);
    failures++;
  } else {
    console.log(`[OK]   ${rel}: ${count} JSON-LD schema(s)`);
  }
}

console.log(`\n${EXPECTED_PAGES.length - failures}/${EXPECTED_PAGES.length} pages passed, ${totalSchemas} schemas total`);
process.exit(failures > 0 ? 1 : 0);