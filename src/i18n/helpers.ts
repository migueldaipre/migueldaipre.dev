import { Languages, defaultLang, showDefaultLang } from './i18n'
import type { LanguagesType } from './i18n'

export function changeLanguage(lang: LanguagesType, path: string) {
	const languagePrefixes = Object.values(Languages)
	const hasLanguagePrefix = languagePrefixes.some(prefix =>
		path.includes(prefix),
	)

	let newPath = path
	if (hasLanguagePrefix) {
		newPath = path.replace(new RegExp(`/${languagePrefixes.join('|')}`), '')
	}

	return !showDefaultLang && lang === defaultLang ? newPath : `/${lang}${path}`
}
