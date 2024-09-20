// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        development:resolve(__dirname, "services/development.html"),
        nosotros:resolve(__dirname, "nosotros.html"),
        marketing:resolve(__dirname, "services/marketing.html"),
        blockchain:resolve(__dirname, "services/blockchain.html"),
        erp:resolve(__dirname, "services/erp.html"),
        crm:resolve(__dirname, "services/crm.html"),
      },
    },
  },
});
