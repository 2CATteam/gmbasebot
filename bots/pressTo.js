const regex = /^(press|type|say)\s?(.+)\s?(to)?/i;
const sender = require('./sender.js').send

exports.helpString = "If told to press something or to say something, I'll say it! Say yes."

exports.checkMessage = function(message)
{
	if (regex.test(message.text))
	{
		console.log(message.text.match(regex));
		sender(message.text.match(regex)[2]);
	}
}