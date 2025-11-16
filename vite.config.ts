import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { readFileSync } from "fs";
import type { Plugin, PluginContext } from "rollup";

function emitBannerCss(): Plugin {
  return {
    name: "lovecookies-banner-css",
    generateBundle(this: PluginContext) {
      const cssPath = resolve(__dirname, "src/ui/banner.css");
      const source = readFileSync(cssPath, "utf8");
      this.emitFile({
        type: "asset",
        fileName: "lovecookies.css",
        source,
      });
    },
  };
}

export default defineConfig({
  plugins: [react(), emitBannerCss()],
  define: {
    "process.env.NODE_ENV": JSON.stringify("production"),
    process: "undefined",
  },
  resolve: {
    conditions: ["browser"],
    mainFields: ["browser", "module", "jsnext:main", "jsnext"],
  },
  optimizeDeps: {
    esbuildOptions: {
      define: {
        "process.env.NODE_ENV": '"production"',
        process: "undefined",
      },
    },
  },
  build: {
    target: "es2017",
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "LoveCookies",
      formats: ["iife"],
      fileName: "lovecookies.umd",
    },
    outDir: "dist",
    cssCodeSplit: true,
    rollupOptions: {
      external: [],
      output: {
        format: "iife",
        name: "LoveCookies",
        exports: "named",
        inlineDynamicImports: true,
        esModule: false,
        globals: {},
        entryFileNames: "lovecookies.umd.js",
      },
    },
  },
});
