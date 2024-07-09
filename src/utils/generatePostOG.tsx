import satori from 'satori'
import { og } from './og'

export async function generatePostOG(title: string) {
	return await satori(og(title), { width: 800, height: 400, fonts: [] })
}
