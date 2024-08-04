const { addKeyword, getKeywords } = require('../services/keywordService');

exports.addKeyword = (req, res) => {
	try {
		const { keyword } = req.body;
		addKeyword(keyword);
		res.status(201).json({ message: 'Keyword added' });
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'Server error' });
	}
};

exports.getKeywords = (req, res) => {
	try {
		const keywords = getKeywords();
		res.status(200).json(keywords);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'Server error' });
	}
};
