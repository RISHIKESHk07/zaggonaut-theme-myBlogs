// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

defineConfig(
  {
    site: 'https://RISHIKESHk07.github.io',
    base: '/zaggonaut-theme-myBlogs'
  }
)


// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  }
});

