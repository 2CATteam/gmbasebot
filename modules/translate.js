const https = require('https')
const translate = require('translate')
const sender = require('../sender.js').send;

const translateRegex = /^\/translate\s"(.+)"\s(\S+)\s?(\S+)?/i;

exports.mod = class translator {
	constructor() {
		this.helpString = "/translate \"[something]\" [country code] will translate something to a different language, using Yandex.\n"
		this.name = "translate"
	}

	checkMessage(message) {
		const yandexKey = process.env.YANDEX_KEY;
		if (translateRegex.test(message.text) && yandexKey) {
		        const matches = message.text.match(translateRegex)
        		const text = matches[1]
	        	var fromFlag = 'en'
	        	var toFlag = matches[2]
				if (toFlag == 'en') {
					fromFlag = 'la'
				}
	        	if (matches.length > 3) {
				if (matches[3] != undefined) {
        		        	fromFlag = matches[2]
	        		        toFlag = matches[3]
				}
        		}
			try {
				translate(text, { from: fromFlag, to: toFlag, engine: 'yandex', key: yandexKey } ).then((result) => {
					sender(result)
				})
			} catch(err) {
				console.log(err)
			}
			return true
		} else return false
	}
}
