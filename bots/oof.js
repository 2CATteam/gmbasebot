const dasaniRegex = /dasani/i;
	
const ozarkaRegex = /ozarka/i;
	
const pureLifeRegex = /(pure life)|(nestle)/i;
	
const aquafinaRegex = /aquafina/i;
	
const badRegex = /(ozarka)|(pure life)|(nestle)|(smart water)|(fiji)/i;

exports.checkMessage = function(message)
{
	if (regex.test(message.text))
	{
		return "OOF";
	}
}