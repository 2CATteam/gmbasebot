const insultArray = require('./res/insultArray.json');
const regex = /^\/roast\s?/i;
const spamRegex = /^(\/comp\s?|\/roast\s?){4,}/i;
const sender = require('./sender.js').send

exports.helpString = "/roast [something] will generate a random insult!"

exports.checkMessage = function(message) {
	if (regex.test(message.text) && !spamRegex.test(message.text))
	{
		var toReturn = message.text.substring(6,message.text.length);
		toReturn += ", you ";
		if (Math.random() < 0.1 || message.text.includes("magickeyroast"))
		{
			for (var i = 0; i < insultArray.firstInsultArray.length; i++)
			{
				toReturn += insultArray.firstInsultArray[i];
				toReturn += ", ";
			}
			randomInt = Math.floor(Math.random() * insultArray.secondInsultArray.length);
			toReturn = toReturn.slice(0, -2) + " ";
			toReturn += insultArray.secondInsultArray[randomInt];
			toReturn += "!";
		}
		else
		{
			let num = Math.ceil(Math.random() * 4);
			for (var i = 0; i < num; i++)
					{
					randomInt = Math.floor(Math.random() * insultArray.firstInsultArray.length);
							toReturn += insultArray.firstInsultArray[randomInt];
							toReturn += ", ";
					}
					randomInt = Math.floor(Math.random() * insultArray.secondInsultArray.length);
					toReturn = toReturn.slice(0, -2) + " ";
					toReturn += insultArray.secondInsultArray[randomInt];
			toReturn += "!";
		}
		sender(toReturn);
	}
	return null;
}