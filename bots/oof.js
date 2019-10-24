const regex = /^b\s?i\s?g/i;
const creeper = /^creeper$/i;
const dislike = /^\/dislide$/i;

const sender = require('./sender.js').send

exports.helpString = "If you say BIG, I'll say OOF!"

exports.checkMessage = function(message)
{
	if (regex.test(message.text))
	{
		sender("OOF");
	}
	if (creeper.test(message.text))
	{
		sender("AW MAN");
	}
	if (dislike.test(message.text)) {
		sender("Your dislike has been noted and recorded.")
	}
}