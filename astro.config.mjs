import mdx from '@astrojs/mdx'
import vercel from '@astrojs/vercel/serverless'
import { defineConfig } from 'astro/config'
import UnoCSS from 'unocss/astro'

import prettyCode from 'rehype-pretty-code'
const prettyCodeOptions = {
	theme: 'rose-pine-moon',
}

// https://astro.build/config
export default defineConfig({
	site: 'https://migueldaipre.dev',
	i18n: {
		defaultLocale: 'pt-BR',
		locales: ['pt-BR', 'en'],
	},
	integrations: [
		UnoCSS({
			injectReset: true,
		}),
		mdx({
			syntaxHighlight: false,
			rehypePlugins: [[prettyCode, prettyCodeOptions]],
		}),
	],
	output: 'server',
	adapter: vercel({
		imageService: true,
	}),
})
