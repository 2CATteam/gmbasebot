const fs = require('fs');
const https = require('https')

const regex = /^\/compile\s?python\s?\n+/i;

exports.checkMessage = function(message)
{
	if (regex.test(message.text))
	{
		var code = message.text
        var string = message.text.match(regex)[0]
        code = code.substring(string.length, code.length)
        var name = "./python/"
        dateName = new Date()
        name += dateName.getTime().toString()
        name += ".py"
		console.log("Writing code")
		if (!fs.existsSync("./python")){
			fs.mkdirSync("./python");
		}
        fs.writeFileSync(name, code, 'utf-8')
		console.log("Wrote code")
        var spawn = require("child_process").spawn;
        var subProcess = spawn('python', [name])
        subProcess.stderr.on('data', (err) => {
            sendMessage(err.toString())
        });
        subProcess.stdout.on('data', function(data) {
            sendMessage(data.toString())
        });
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