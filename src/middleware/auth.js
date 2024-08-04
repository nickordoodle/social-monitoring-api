const authMiddleware = (req, res, next) => {
	const authHeader = req.headers.authorization;
	if (!authHeader) {
		return res.status(401).json({ message: 'Missing authorization header' });
	}
	
	const encodedCredentials = authHeader.split(' ')[1];
	const decodedCredentials = Buffer.from(encodedCredentials, 'base64').toString();
	const [username, password] = decodedCredentials.split(':');
	
	// NOTE: This is done inline for simplicity. In a real-world application,
	// you would check the credentials against a database or some other form of storage.
	if (username === 'test' && password === 'testpassword123') {
		next();
	} else {
		res.status(401).json({ message: 'Invalid credentials' });
	}
};

module.exports = authMiddleware;
