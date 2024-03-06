import { defineConfig } from 'astro/config';
import UnoCSS from 'unocss/astro';
import vercel from '@astrojs/vercel/serverless';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  integrations: [
    UnoCSS({
      injectReset: true,
    }),
    mdx(),
  ],
  output: 'server',
  adapter: vercel(),
});
