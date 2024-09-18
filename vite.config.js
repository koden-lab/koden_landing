// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        development:resolve(__dirname, "services/development.html"),
        marketing:resolve(__dirname, "services/marketing.html"),
      },
    },
  },
});
