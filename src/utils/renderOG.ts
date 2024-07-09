import { generateOG } from './generateOG'

export async function renderOG(title: string, description?: string) {
	const svg = await generateOG(title, description)

	return new Response(svg, {
		status: 200,
		headers: { 'Content-Type': 'image/svg' },
	})
}
