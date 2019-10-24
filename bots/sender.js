const https = require('https')

exports.send = function send(messageText) {
	if (messageText.length > 500) {
		send(messageText.substring(0, 499))
		send(messageTest.substring(500, messageText.length))
	}
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