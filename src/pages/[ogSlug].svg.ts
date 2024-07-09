import { getCollection } from 'astro:content'
import { generatePostOG } from '@utils/generatePostOG'

import type {
	APIContext,
	InferGetStaticParamsType,
	InferGetStaticPropsType,
} from 'astro'

// export const prerender = true

export async function getStaticPaths() {
	const posts = await getCollection('posts', ({ data }) => !data.isDraft)
	return posts
		.filter(({ data }) => !data.ogImage)
		.map(({ data }) => ({
			// Pass the title of the post so we can use it in the API route and as a static path
			params: { title: data.title, ogSlug: data.ogSlug },
		}))
}

type Params = InferGetStaticParamsType<typeof getStaticPaths>
type Props = InferGetStaticPropsType<typeof getStaticPaths>

export const get = async ({ params }: APIContext<Props, Params>) => {
	const svg = await generatePostOG(params.title)
	return new Response(svg, {
		status: 200,
		headers: { 'Content-Type': 'image/svg' },
	})
}
