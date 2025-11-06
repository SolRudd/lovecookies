import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      // ✅ Entry point for SDK
      entry: path.resolve(__dirname, "src/main.tsx"),
      name: "LoveCookies",
      fileName: (format) => `lovecookies.${format}.js`,
      formats: ["umd"],
    },
    rollupOptions: {
      // ✅ Keep React external so it’s not bundled into the SDK
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
        // ✅ Don’t inject global CSS or fonts from Tailwind into the host page
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith(".css")) {
            return "index.css"; // ensures clean static CSS filename
          }
          return "[name].[ext]";
        },
      },
    },
    cssCodeSplit: true, // ✅ Separate CSS from JS
    emptyOutDir: true, // ✅ Clean /dist before each build
    sourcemap: false,
  },
  // ✅ Ensures proper React handling for builds
  esbuild: {
    jsxInject: `import React from 'react'`,
  },
});
