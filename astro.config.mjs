import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import vercel from '@astrojs/vercel/serverless'

import { defineConfig } from 'astro/config'
import prettyCode from 'rehype-pretty-code'
import UnoCSS from 'unocss/astro'

const prettyCodeOptions = {
	theme: 'rose-pine-moon',
}

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
		webAnalytics: {
			enabled: true,
		},
	}),
})
