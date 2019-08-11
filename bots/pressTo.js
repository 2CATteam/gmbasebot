const regex = /^(press|type) (.+) to/i;
const sender = require('./sender.js')

exports.checkMessage = function(message)
{
	if (regex.test(message.text))
	{
		console.log(message.text.match(regex));
		sender(message.text.match(regex)[2]);
	}
}