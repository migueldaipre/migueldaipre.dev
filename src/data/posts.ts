import { getCollection } from 'astro:content'

export const getPosts = async (lang: string = 'pt-br') =>
	(await getCollection('posts'))
		.filter(post => !post.data.isDraft && post.data.lang === lang)
		.sort((a, b) => b.data.publishedAt.valueOf() - a.data.publishedAt.valueOf())
		.map(post => ({ ...post.data, slug: post.slug.split('/')[1], }))

export const latestPosts = async (limit: number, lang: string = 'pt-br') =>
	(await getPosts(lang)).slice(0, limit)
