const regex = /^f$/i;
const sender = require('./sender.js')

exports.checkMessage = function(message)
{
	console.log(message.sender_type)
	if (regex.test(message.text) && Math.random() < 0.2 && message.sender_type == "user")
	{
		console.log("F this");
		sender("F");
	}
}