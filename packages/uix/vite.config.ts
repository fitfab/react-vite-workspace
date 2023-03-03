import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/main.ts"),
      formats: ["es"],
      name: "uix",
    },
    rollupOptions: {
      external: ["react"],
      output: {
        globals: {
          React: "react",
        },
      },
    },
  },
  plugins: [react(), dts()],
});
