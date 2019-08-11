const regex = /^f$/i;
const sender = require('./sender.js').send
exports.helpString = "If your group is throwing some Fs in the chat, I may join in!"

exports.checkMessage = function(message)
{
	console.log(message.sender_type)
	if (regex.test(message.text) && Math.random() < 0.2 && message.sender_type == "user")
	{
		console.log("F this");
		sender("F");
	}
}