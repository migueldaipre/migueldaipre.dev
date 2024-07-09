import { getCollection, getEntry } from 'astro:content'
import { renderOG } from '@utils/renderOG'

import type { APIRoute } from 'astro'

export const prerender = true

export async function getStaticPaths() {
	const posts = await getCollection('posts')
	return posts.map(post => {
		const [lang, ...slug] = post.slug.split('/')

		return {
			params: { lang, slug: slug.join('/') || undefined },
			props: { post },
		}
	})
}

export const GET: APIRoute = async function get({ params }) {
	const post = await getEntry('posts', `${params.lang}/${params.slug}`)
	return renderOG(post?.data.title ?? '', post?.data.description)
}
