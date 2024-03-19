type Social = {
	label: string
	link: string
}

interface Presentation {
	mail: string
	socials: Social[]
}

export const presentation: Presentation = {
	mail: 'migueldaipre@gmail.com',
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
