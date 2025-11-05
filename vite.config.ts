import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// ✅ SDK Build Configuration (for both ES & UMD outputs)
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: "src/index.ts", // main SDK entry file (not your app)
      name: "LoveCookies",
      fileName: (format) => `lovecookies.${format}.js`,
      formats: ["umd", "es"],
    },
    rollupOptions: {
      // Don’t bundle React/Framer/etc. so SDK stays small
      external: ["react", "react-dom", "framer-motion"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "framer-motion": "framerMotion",
        },
      },
    },
    outDir: "dist",
    emptyOutDir: true,
    sourcemap: true, // optional: helps with debugging builds
  },
});
