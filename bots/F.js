const regex = /^f$/i;

exports.checkMessage = function(message)
{
	console.log(message.sender_type)
	if (regex.test(message.text) && Math.random() < 0.9 && message.sender_type == "user")
	{
		console.log("F this");
		return "F";
	}
}