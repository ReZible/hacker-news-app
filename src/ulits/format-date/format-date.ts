function formatDateFromTimeStamp(timeStamp: number, options: Intl.DateTimeFormatOptions) {
	const date = new Date(timeStamp);
	return date.toLocaleDateString('en-US', options);
}

export { formatDateFromTimeStamp };
