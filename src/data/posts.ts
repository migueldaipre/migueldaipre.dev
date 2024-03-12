import { getCollection } from 'astro:content'

export const posts = (await getCollection('posts'))
	.filter(post => !post.data.isDraft)
	.sort((a, b) => b.data.publishedAt.valueOf() - a.data.publishedAt.valueOf())
	.map(post => ({ ...post.data, slug: post.slug }))

export const latestPosts = (limit: number) => posts.slice(0, limit)
