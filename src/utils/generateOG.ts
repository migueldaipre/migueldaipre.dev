import fs from 'node:fs/promises'
import satori from 'satori'
import { html } from 'satori-html'

function generateMarkup(title: string) {
	return html`<div style="height: 100%; width: 100%;display: flex; flex-direction: column; align-items: flex-start; justify-content: space-between; background-color: #131313; background-image: radial-gradient(circle, rgba(8,48,64,1) 0%, rgba(19,19,19,1) 85%); padding: 40;"><h1 style="font-size: 60; font-weight: 700; font-family: 'CabinetGrotesk-Bold'; color: white;">${title}</h1><div style="display: flex; gap: 5; flex-direction: column; justify-content: center;"><div style="display: flex; font-size: 20; font-weight: 700; color: white; font-family: 'Satoshi-Bold';">Miguel Daipré</div><div style="display: flex; font-size: 16; font-weight: 300; color: #D1D1D1; font-family: 'Satoshi-Regular';">https://migueldaipre.dev</div></div></div>`
}

export async function generateOG(title: string, description?: string) {
	const satoshiRegular = await fs.readFile(
		'./public/fonts/satoshi/Satoshi-Regular.otf',
	)
	const satoshiBold = await fs.readFile(
		'./public/fonts/satoshi/Satoshi-Bold.otf',
	)
	const cabinetBold = await fs.readFile(
		'./public/fonts/cabinet/CabinetGrotesk-Bold.otf',
	)

	return await satori(generateMarkup(title), {
		width: 800,
		height: 400,
		fonts: [
			{ name: 'Satoshi-Regular', weight: 300, data: satoshiRegular },
			{ name: 'Satoshi-Bold', weight: 700, data: satoshiBold },
			{ name: 'CabinetGrotesk-Bold', weight: 700, data: cabinetBold },
		],
	})
}
