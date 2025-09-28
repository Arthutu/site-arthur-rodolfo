import { defineConfig } from "astro/config";
import icon from "astro-icon";

import vercel from "@astrojs/vercel";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  integrations: [icon()],
  output: "server",

  adapter: vercel({
      webAnalytics: { enabled: true },
      speedInsights: { enabled: true },
  }),

  trailingSlash: "never",

  vite: {
    plugins: [tailwindcss()]
  }
});