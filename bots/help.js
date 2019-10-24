const regex = /^\/help/i;
const sender = require('./sender.js').send

exports.help = class helpGener {
	
	constructor(arr) {
		this.name = 'help'
		this.helpString = "Here are all the commands I can respond to: \n\n"
		for (var i = 0; i < arr.length; i++) {
			this.helpString += arr[i].helpString + "\n"
		}
		this.helpString += "\nHope that wasn't too much! Remember, you can always type /help to read this again! Have fun!"
	}
	
	checkMessage(message) {
		if (regex.test(message.content))
		{
			sender(this.helpString)
		}
	}
}