import sharp from 'sharp'
import { generateOG } from './generateOG'

export async function renderOG(title: string, description?: string) {
	const svg = await generateOG(title, description)
	const png = await sharp(Buffer.from(svg)).png().toBuffer()

	return new Response(png, {
		status: 200,
		headers: { 'Content-Type': 'image/png' },
	})
}
