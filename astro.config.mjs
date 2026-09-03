import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

const isDev = process.argv.includes("dev");

export default defineConfig({
  site: "https://andydavid.com",
  output: "static",
  cacheDir: isDev ? "./node_modules/.astro-dev" : "./node_modules/.astro-build",
  integrations: [sitemap()],
});
