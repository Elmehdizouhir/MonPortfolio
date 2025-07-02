// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/MonPortfolio/", // nom EXACT du repo GitHub
  plugins: [react()],
});
