import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  output: "static",
  // Cloudflare canonicalises directory indexes WITH a trailing slash and 308s
  // the slash-less form. Emitting flat files instead means the URLs we actually
  // publish (canonical, hreflang, sitemap, internal links — all slash-less)
  // are the ones served, with no redirect.
  build: { format: "file" },
  adapter: cloudflare({
    imageService: "compile"
  }),
  trailingSlash: "never",
  vite: {
    plugins: [tailwindcss()]
  }
});