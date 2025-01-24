import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const ReactCompilerConfig = {
  target: "19",
};

// https://vite.dev/config/
export default defineConfig({
  base: "/mosaic-maker/",
  build: {
    outDir: "build",
    sourcemap: true,
    minify: false,
    emptyOutDir: true,
  },
  esbuild: {
    minifyIdentifiers: false,
  },
  plugins: [
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler", ReactCompilerConfig]],
      },
    }),
    tailwindcss(),
  ],
});
