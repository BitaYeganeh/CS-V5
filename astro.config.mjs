// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import vercel from "@astrojs/vercel";
import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";
import svelte from "@astrojs/svelte";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://cybersecurity.fi",
  prefetch: true,
  trailingSlash: "never",
  experimental: {
    clientPrerender: true,
  },
  integrations: [
    react(),
    markdoc(),
    svelte(),
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en',
          fi: 'fi',
        },
      },
      filter: (page) =>
        !page.includes('/api/') &&
        !page.includes('/admin/') &&
        !page.includes('?') &&
        !page.includes('/design-system') &&
        !page.includes('/button-showcase') &&
        !page.includes('/demo'),
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': '/src',
        '@data': '/src/data',
        '@common': '/src/components/common',
        '@megaMenu': '/src/components/common/MegaMenu',
        '@images': '/src/assets/images',
        '@layout': '/src/layout',
        '@ui': '/src/components/ui',
        '@sections': '/src/components/sections',
        '@styles': '/src/assets/styles',
        '@utils': '/src/utils',
      },
    },
  },
  output: "static", // Changed from "server" to "static" for Vercel deployment
  adapter: vercel(), // Using default Vercel adapter for static sites
  // Remove server config for static builds
});
