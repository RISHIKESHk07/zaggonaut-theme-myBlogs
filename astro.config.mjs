// astro.config.mjs
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: 'https://RISHIKESHk07.github.io',
  base: '/zaggonaut-theme-myBlogs/', // <-- IMPORTANT: leading and trailing slash
  integrations: [tailwind()],
});


