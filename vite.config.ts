import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/main.tsx"),
      name: "LoveCookies",
      fileName: (format) => `lovecookies.${format}.js`,
      formats: ["umd"], // build one universal JS file
    },
    rollupOptions: {
      // Bundle React so it works standalone (WordPress, Webflow, etc.)
      external: [],
      output: {
        assetFileNames: (assetInfo) =>
          assetInfo.name?.endsWith(".css") ? "index.css" : "[name].[ext]",
      },
    },
    cssCodeSplit: true,
    emptyOutDir: true,
    sourcemap: false,
  },
  define: {
    "process.env.NODE_ENV": JSON.stringify("production"), // ✅ fix "process is not defined"
    global: "window", // ✅ fix "global is not defined"
  },
});
