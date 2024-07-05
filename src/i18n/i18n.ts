import english from './en.json'
import portugues from './pt.json'

export const Languages = {
	pt: 'pt-br',
	en: 'en',
}

export type LanguagesType = keyof typeof Languages

export const showDefaultLang = true
export const defaultLang = Languages.pt
export const supportedLangs = [Languages.pt, Languages.en]

const translations = {
	[Languages.pt]: portugues,
	[Languages.en]: english,
}

export function useTranslations(lang: string | undefined = defaultLang) {
	return function t(key: keyof (typeof translations)[typeof lang]) {
		return translations[lang]?.[key] ?? translations[defaultLang][key]
	}
}

export function getLangFromUrl(url: URL) {
	const [, lang] = url.pathname.split('/')
	if (lang in Languages) return lang as keyof typeof Languages
	return defaultLang
}
