type Social = {
	label: string
	link: string
}

interface Presentation {
	mail: string
	title: string
	description: string
	socials: Social[]
}

export const presentation: Presentation = {
	mail: 'migueldaipre@gmail.com',
	title: 'Hi, I am Miguel 👋',
	description:
		'I am a Brazilian React Native Developer and OSS Contributor with over about 7 years of experience. I am currently working with React Native and Typescript. I am also passionate about Open Source.',
	socials: [
		{
			label: 'GitHub',
			link: 'https://github.com/migueldaipre',
		},
		{
			label: 'LinkedIn',
			link: 'https://www.linkedin.com/in/migueldaipre',
		},
		{
			label: 'Twitter',
			link: 'https://twitter.com/migueldaipre',
		},
	],
}
