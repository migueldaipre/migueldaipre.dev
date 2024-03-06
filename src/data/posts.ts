import { getCollection } from 'astro:content'

export const posts = (await getCollection('posts'))
  .sort((a, b) => b.data.publishedAt.valueOf() - a.data.publishedAt.valueOf())
  .map(post => ({ ...post.data, slug: post.slug }))

export const latestPosts = (limit: number) => posts.slice(0, limit)