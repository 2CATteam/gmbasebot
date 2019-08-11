const regex = /^b\s?i\s?g/i;

const sender = require('./sender.js').send

exports.helpString = "If you say BIG, I'll say OOF!"

exports.checkMessage = function(message)
{
	if (regex.test(message.text))
	{
		sender("OOF");
	}
}