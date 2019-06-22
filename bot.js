const https = require('https');

const server = https.createServer();

const insult = require("./bots/insult");
const comp = require("./bots/comp")

let bots = [insult, comp];

server.on('request', (request, response) => {
	console.log(states);
	const method = request.method;
	var data = null;
	switch (method) {
		case 'GET':
			response.end('Nice GET request!');
			break;
		case 'POST':
			console.log('Starting POST!');
			var body = [];
			request.on('data', chunk => {
				console.log('Found data!');
				console.log(chunk.toString());
				body.push(chunk.toString());
			});
			request.on('end', chunk => {
				console.log('Ending parsing!');
				console.log(body.toString());
				let message = JSON.parse(body[0]);
				checkMessages(message);
				this.res.writeHead(200);
				response.end();
			});
			break;
	}
});

function checkMessages(message) {
	for (var i = 0; i < bots.length; i++)
	{
		let toSend = bots[i].checkMessage(message);
		sendMessage(toSend);
	}
}

function sendMessage(messageText) {
	const botId = process.env.BOT_ID;
	
	const options = {
		hostname: 'api.groupme.com',
		path: '/v3/bots/post',
		method: 'POST'
	};

	const body = {
		bot_id: botId,
		text: messageText
	};

	
	const botRequest = https.request(options, function(response) {
		if (response.statusCode !== 202) {
			console.log('Bad status ' + response.statusCode);
		}
	});
	
	botRequest.on('error', function(error) {
		console.log(JSON.stringify(error));
	});

	botRequest.on('timeout', function(error) {
		console.log('Timeout ' + JSON.stringify(error));
	});
	botRequest.end(JSON.stringify(body));
};

server.listen(process.env.PORT);