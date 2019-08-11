const regex = /^(press|type) (.+) to/i;
const sender = require('./sender.js').send

exports.helpString = "If told to press [something] to [something], I'll press it!"

exports.checkMessage = function(message)
{
	if (regex.test(message.text))
	{
		console.log(message.text.match(regex));
		sender(message.text.match(regex)[2]);
	}
}