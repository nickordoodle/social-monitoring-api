const keywords = [];

exports.addKeyword = (keyword) => {
	if (!keywords.includes(keyword.toLowerCase())) {
		keywords.push(keyword.toLowerCase());
	}
}

exports.getKeywords = () => {
	return keywords;
}

/**
 * Check if the text contains any of the keywords including partial
 * case-insensitive match
 * @param text - Text to match
 * @returns {boolean} - true if the text contains any of the keywords, false otherwise
 */
exports.matchKeywords = (text) => {
	const lowerCaseText = text.toLowerCase();
	return keywords.some(keyword => new RegExp(keyword, 'i').test(lowerCaseText));
}