const { addPost } = require('../services/postService');
const { matchKeywords } = require('../services/keywordService');
const { notifyClients } = require('../../websocket');

const platforms = ['Twitter', 'Reddit'];

const getRandomDateInRange = (start, end) => {
	const startDate = new Date(start).getTime();
	const endDate = new Date(end).getTime();
	const randomDate = new Date(startDate + Math.random() * (endDate - startDate));
	return randomDate.toISOString();
};

const generateRandomPost = () => {
	const startDate = '2024-01-01T00:00:00Z';
	const endDate = '2024-12-31T23:59:59Z';
	return {
		post_id: Math.random().toString(36).substr(2, 9),
		platform: platforms[Math.floor(Math.random() * platforms.length)],
		timestamp: getRandomDateInRange(startDate, endDate),
		content: `This is a mock post about ${Math.random().toString(36).substr(2, 5)}`,
		user_id: Math.random().toString(36).substr(2, 9)
	};
};

const generatePosts = () => {
	setInterval(() => {
		const post = generateRandomPost();
		addPost(post);
		if (matchKeywords(post.content)) {
			notifyClients(post);
		}
	}, 1000); // generate a post every second
};

module.exports = { generatePosts };
