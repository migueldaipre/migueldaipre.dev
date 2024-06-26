import { getCollection } from 'astro:content'

export const getPosts = async () =>
	(await getCollection('posts'))
		.filter(post => !post.data.isDraft)
		.sort((a, b) => b.data.publishedAt.valueOf() - a.data.publishedAt.valueOf())
		.map(post => ({ ...post.data, slug: post.slug }))

export const latestPosts = async (limit: number) =>
	(await getPosts()).slice(0, limit)
