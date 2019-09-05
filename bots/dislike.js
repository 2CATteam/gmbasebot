const regex = /^\/dislike/i;

exports.checkMessage = function(message)
{
	if (regex.test(message.text))
	{
		return "Your dislike has been noted and recorded.";
	}
}