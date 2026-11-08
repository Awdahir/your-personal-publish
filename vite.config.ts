// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    // Prerender every route (crawls links from /) so each page — including every
    // essay and insight — ships as static HTML with its own meta tags.
    prerender: { enabled: true, crawlLinks: true, failOnError: false, concurrency: 1 },
  },
  vite: {
    build: {
      // Nitro copies public/ into .output/public itself; letting Vite also copy
      // (and empty) that directory races Nitro's copy and corrupts the build.
      copyPublicDir: false,
    },
  },
});
