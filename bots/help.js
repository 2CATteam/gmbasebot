const regex = /^\/help/i;

const helpString = `Here are all the commands I can respond to:

/roast [something] will generate a random insult
/comp [something] will generate a random compliment
/help will bring up this message again.

I'll also react to certain things you say!
If told to press something to do something, I'll press it!
If your group is throwing some Fs in the chat, I may join in!
And, most importantly, if you say BIG, I say OOF

Hope that wasn't too much! Remember, you can always type /help to read this again! Have fun!`;

exports.checkMessage = function(message)
{
	if (regex.test(message.text))
	{
		return helpString;
	}
}