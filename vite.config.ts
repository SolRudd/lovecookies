import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  define: {
    // 👇 ensures React and libraries see "production"
    "process.env.NODE_ENV": JSON.stringify("production"),
    // 👇 prevents “process is not defined” in the browser
    global: "window",
    process: {
      env: {
        NODE_ENV: "production",
      },
    },
  },
  plugins: [react()],
  build: {
    lib: {
      entry: "src/index.tsx",
      name: "LoveCookies",
      fileName: (format) => `lovecookies.${format}.js`,
      formats: ["umd", "es"],
    },
    cssCodeSplit: false, // ✅ inline Tailwind CSS
    outDir: "dist",
    emptyOutDir: true,
    sourcemap: false,
  },
});
