import { defineCollection, z } from 'astro:content'

const posts = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		publishedAt: z
			.string()
			.or(z.date())
			.transform(val => new Date(val)),
		updatedAt: z
			.string()
			.optional()
			.transform(str => (str ? new Date(str) : undefined)),
		heroImage: z.string().optional(),
		tags: z.array(z.string()).default(['others']),
		author: z.string().optional(),
		isDraft: z.boolean().default(false),
		lang: z.enum(['pt-br', 'en']).default('pt-br'),
	}),
})

export const collections = {
	posts,
}
