const https = require('https')

exports.send = function send(image) {
	const botId = process.env.BOT_ID;
	
	const options = {
		hostname: 'api.groupme.com',
		path: '/v3/bots/post',
		method: 'POST'
	};

	const body = {
		bot_id: botId,
		text: "egg",
		attachments: [
			{
				"type": "image",
				"url": image
			}
		]
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