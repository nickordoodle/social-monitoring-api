const { matchKeywords } = require('./keywordService');
let posts = [];

exports.addPost = (post) => {
	posts.push(post);
};

/**
 * Returns all filtered posts based on the current in memory keywords
 * @param platform - the social platform ie. Twitter, Reddit
 * @param startDate - the start date for the filter ie. 2024-02-01
 * @param endDate - the end date for the filter ie. 2024-03-01
 * @returns {Array} - the filtered posts
 */
exports.getFilteredPosts = ({ platform, startDate, endDate }) => {
	return posts.filter(post => {
		const matchesPlatform = platform ? post.platform === platform : true;
		const matchesStartDate = startDate ? new Date(post.timestamp) >= new Date(startDate) : true;
		const matchesEndDate = endDate ? new Date(post.timestamp) <= new Date(endDate) : true;
		const matchesKeywords = matchKeywords(post.content);
		return matchesPlatform && matchesStartDate && matchesEndDate && matchesKeywords;
	});
};
