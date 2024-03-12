export function formatPublishedDate(date: Date) {
	return new Intl.DateTimeFormat().format(date)
}
