// Copies the nitro prerendered static output (.output/public) into dist/
// so standard static hosting pipelines find dist/index.html after `npm run build`.
import { cpSync, rmSync, existsSync } from "node:fs";

const src = ".output/public";
const dst = "dist";

if (!existsSync(src)) {
  console.warn(`[copy-dist] ${src} not found, skipping`);
  process.exit(0);
}

rmSync(dst, { recursive: true, force: true });
cpSync(src, dst, { recursive: true });
console.log(`[copy-dist] copied ${src} -> ${dst}`);
