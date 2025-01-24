import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const ReactCompilerConfig = {
  target: "19",
};

// https://vite.dev/config/
export default defineConfig({
  base: "/mosaic-maker/",
  plugins: [
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler", ReactCompilerConfig]],
      },
    }),
  ],
  build: {
    sourcemap: true,
    minify: false,
  },
  esbuild: {
    minifyIdentifiers: false,
  },
});
