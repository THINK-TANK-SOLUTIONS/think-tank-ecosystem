import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const src = join(root, "node_modules/@electric-sql/pglite/dist");
// Vercel and Netlify (nitro "netlify" preset) server bundle locations.
const dests = [
  join(root, ".vercel/output/functions/__server.func/_libs"),
  join(root, ".netlify/functions-internal/server/_libs"),
];

for (const dest of dests) {
  if (!existsSync(dest)) continue;
  mkdirSync(dest, { recursive: true });
  for (const name of ["pglite.data", "pglite.wasm", "initdb.wasm"]) {
    const from = join(src, name);
    if (existsSync(from)) copyFileSync(from, join(dest, name));
  }
}
