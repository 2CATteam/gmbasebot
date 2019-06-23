const regex = /^(press|type) (.+) to/i;

exports.checkMessage(message)
{
	if (regex.test(message.text))
	{
		return message.text.match(regex)[1];
	}
}