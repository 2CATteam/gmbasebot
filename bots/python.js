const fs = require('fs');
const https = require('https')
const sender = require('./sender.js')

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
            sender(err.toString())
        });
        subProcess.stdout.on('data', function(data) {
            sender(data.toString())
        });
	}
}