const curl = require('curl')
const jsdom = require("jsdom")
const https = require('https')
const regex = /^\/define\s(.+)/i;
const sender = require('./sender.js').send

exports.helpString = "/define [word] will try to define that word!"

exports.checkMessage = function(message) {
	if (!regex.test(message.text)) { return }
	var word = message.text.match(regex)[1]
	word = word.replace(/\s/g, "+");
	const url = "https://www.google.com/search?q=define+" + word;
	curl.get(url, null, function(err, resp, body) {
		if (resp.statusCode == 200) {
			const {JSDOM} = jsdom;
			const dom = new JSDOM(body);
			const $ = (require('jquery'))(dom.window);
			const dict = $('#main').children().eq(3)//$(".yc7KLc")//.closest('.lr_dct_ent');
			if (dict.find('.BNeawe.deIvCb.AP7Wnd').length == 0) { return }
			var toReturn = dict.find('.BNeawe.deIvCb.AP7Wnd').text() + '\n'
			dict.find(".BNeawe.s3v9rd.AP7Wnd").eq(0).children().each((index, element) => {
				if ($(element).find('li').length > 0) {
					var i = 1
					$(element).find('li').each((item, litem) => {
						toReturn += ' ' + i + ': ' + $(litem).text() + '\n'
						i++
					})
				}
				else {
					if ($(element).find('.r0bn4c.rQMQod').length > 0) {
						toReturn += '\n' + $(element).text() + '\n'
					}
					else {
						toReturn += ' 1: ' + $(element).text() + '\n'
					}
				}
				return true
			})
			sender(toReturn)
		}
		else {
			console.log(err)
			console.log("Failed to make request")
		}
	})
}