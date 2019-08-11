const regex = /^\/help/i;
const sender = require('./sender.js').send

exports = class helpGener {
	constructor(arr) {
		this.helpString = "Here are all the commands I can respond to: \n\n"
		for var module in arr {
			this.helpString += module.help + "\n"
		}
		this.helpString += "\nHope that wasn't too much! Remember, you can always type /help to read this again! Have fun!"
	}
	
	function checkMessage(message) {
		if (regex.test(message.text))
		{
			sender(this.helpString);
		}
	}
}