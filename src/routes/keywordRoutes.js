const express = require('express');
const router = express.Router();
const { addKeyword, getKeywords } = require('../controllers/keywordController');

router.post('/', addKeyword);
router.get('/', getKeywords);

module.exports = router;
