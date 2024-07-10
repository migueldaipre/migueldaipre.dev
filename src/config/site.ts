interface SiteConfig {
	title: string
	description: string
	imageOg: string
	author: string
}

export const sitesConfig: Record<'pt-br' | 'en', SiteConfig> = {
	en: {
		title: 'Miguel Daipré - React Native Developer',
		description: 'I am a Senior React Native Developer and OSS Contributor',
		imageOg: 'og.jpg',
		author: 'Miguel Daipré',
	},
	'pt-br': {
		title: 'Miguel Daipré - Desenvolvedor React Native',
		description:
			'Desenvolvedor React Native Especialista e colaborador Open Source',
		imageOg: 'og.jpg',
		author: 'Miguel Daipré',
	},
}
