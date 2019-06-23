const regex = /^b\s?i\s?g/i;

exports.checkMessage(message)
{
	if (regex.test(message.text))
	{
		return "OOF";
	}
}