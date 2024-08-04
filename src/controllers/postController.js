const { getFilteredPosts } = require('../services/postService');

exports.getPosts = (req, res) => {
	try {
		const { platform, startDate, endDate } = req.query;
		const posts = getFilteredPosts({ platform, startDate, endDate });
		res.status(200).json(posts);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'Server error' });
	}
};
