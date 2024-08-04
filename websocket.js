let clients = [];

const notifyClients = (post) => {
	clients.forEach(client => {
		if (client.readyState === client.OPEN) {
			client.send(JSON.stringify(post));
		}
	});
};

module.exports = (wss) => {
	wss.on('connection', (ws) => {
		clients.push(ws);
		
		ws.on('close', () => {
			clients = clients.filter(client => client !== ws);
		});
	});
};

module.exports.notifyClients = notifyClients;
