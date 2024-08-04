const express = require('express');
const bodyParser = require('body-parser');
const keywordRoutes = require('./src/routes/keywordRoutes');
const postRoutes = require('./src/routes/postRoutes');
const { generatePosts } = require('./src/utils/dataGenerator');
const { WebSocketServer } = require('ws');
const authMiddleware = require('./src/middleware/auth');
const loggerMiddleware = require('./src/middleware/logger');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(loggerMiddleware);

app.use('/api/keywords', authMiddleware, keywordRoutes);
app.use('/api/posts', authMiddleware, postRoutes);

const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// WebSocket setup
const wss = new WebSocketServer({ server });
require('./websocket')(wss);

// Start generating posts
generatePosts();
