const regex = /^f$/i;

exports.checkMessage(message)
{
	if (regex.test(message.text) && Math.random() < 0.2 && message.sender_type == "user")
	{
		return "F";
	}
}