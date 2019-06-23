const gulagsRegex = /^\/gulag\s?@(.+?)\s?(-?\d+\.?\d*)?\s?$/i;
const pardonRegex = /^\/pardon\s?@(.+?)\s?$/i;
const reportRegex = /^\/report/i;
var gulag = require('./res/gulags.json');
var fs = require('fs');

exports.checkMessage = function(message)
{
	if (gulagsRegex.test(message.text))
	{
		return gulagify(message);
	}
	else if (pardonRegex.test(message.text))
	{
		return pardon(message);
	}
	else if (reportRegex.test(message.text))
	{
		return sendReport();
	}
}

function gulagify(prompt) {
	var message = prompt.text;
	var key = message.match(gulagsRegex)[1];
	var num = 1;
	console.log("Gulag info:");
	console.log(message);
	if (message.match(gulagsRegex)[2])
	{
		console.log(message.match(gulagsRegex)[2]);
		num = parseFloat(message.match(gulagsRegex)[2]);
		console.log(num);
	}
	console.log(key);
	if (gulag[key])
	{
		gulag[key] = gulag[key] + num;
	}
	else
	{
		gulag[key] = num;
	}
	fs.writeFileSync('./res/gulags.json', JSON.stringify(gulag), 'utf-8');
	var toSend = key;
	toSend += " has been sent to the gulag. They are now serving ";
	toSend += gulag[key];
	toSend += " lifetimes";
	/*if (prestiges[key] > 0)
	{
		toSend += " in a level ";
		toSend += prestiges[key];
		toSend += " gulag";
	}*/
	toSend += "!";
	console.log(gulag);
	return toSend;
}

function pardon(prompt) {
	let message = prompt.text;
	var key = message.match(pardonRegex)[1];
	if (gulag[key])
	{
		gulag[key] = 0;
		fs.writeFileSync('gulags.json', JSON.stringify(gulag), 'utf-8');
		return key + " has been graciously pardoned!";
	}
	else
	{
		return key + " is not in the gulag!";
	}
}

function sendReport() {
	var toSend = "Lifetimes in Gulag: \n\n";
	for (person in gulag)
	{
		if (person && gulag[person] > 0)
		{
			toSend += person;
			toSend += ": ";
			toSend += gulag[person];
			toSend += "\n";
		}
	}
	if (toSend.length > 25) {
		return toSend;
	}
	else {
		return "The gulags are empty, Comrade!";
	}
}