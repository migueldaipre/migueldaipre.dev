import mdx from '@astrojs/mdx';
import vercel from '@astrojs/vercel/serverless';
import sitemap from '@astrojs/sitemap';

import { defineConfig } from 'astro/config';
import UnoCSS from 'unocss/astro';
import prettyCode from 'rehype-pretty-code';

const prettyCodeOptions = {
  theme: 'rose-pine-moon',
};

// https://astro.build/config
export default defineConfig({
  site: 'https://migueldaipre.dev',
  i18n: {
    defaultLocale: 'pt-br',
    locales: ['pt-br', 'en'],
    routing: {
      redirectToDefaultLocale: true,
      prefixDefaultLocale: true,
    },
  },
  integrations: [
    UnoCSS({
      injectReset: true,
    }),
    mdx({
      syntaxHighlight: false,
      rehypePlugins: [[prettyCode, prettyCodeOptions]],
    }),
    sitemap(),
  ],
  output: 'server',
  adapter: vercel({
    imageService: true,
  }),
});
