const regex = /^(press|type) (.+) to/i;

exports.checkMessage = function(message)
{
	if (regex.test(message.text))
	{
		console.log(message.text.match(regex));
		return message.text.match(regex)[1];
	}
}