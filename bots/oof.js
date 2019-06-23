const regex = /^b\s?i\s?g/i;

exports.checkMessage = function(message)
{
	if (regex.test(message.text))
	{
		return "OOF";
	}
}