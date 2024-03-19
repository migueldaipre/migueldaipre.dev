import mdx from '@astrojs/mdx'
import vercel from '@astrojs/vercel/serverless'
import { defineConfig } from 'astro/config'
import UnoCSS from 'unocss/astro'

// https://astro.build/config
export default defineConfig({
	site: 'https://migueldaipre.dev',
	i18n: {
		defaultLocale: 'pt-BR',
		locales: ['en', 'pt-BR'],
	},
	integrations: [
		UnoCSS({
			injectReset: true,
		}),
		mdx(),
	],
	output: 'server',
	adapter: vercel({
		imageService: true,
	}),
})
