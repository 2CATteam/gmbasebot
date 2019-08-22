const https = require('https')
const sender = require('./sender.js').send;

const translateRegex = /^\/translate\s"(.+)"\s(\S+)\s?(\S+)?/i;

exports.helpString = "/translate \"[something]\" [country code] will translate something to a different language, using Yandex.\n"

exports.checkMessage = function(message) {
	if (translateRegex.test(message.text) && process.env.YANDEX_KEY) {
        const matches = message.text.match(translateRegex)
        const text = encodeURI(matches[1])
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
        const options = {
            hostname: "translate.yandex.net",
            path: `/api/v1.5/tr.json/translate?key=${process.env.YANDEX_KEY}&text=${text}&lang=${fromFlag + "-" + toFlag}`,
            method: "POST"
        }
        console.log(options)
        var req = https.request(options, (res) => {
            res.on('data', (d) => {
                try {
                    const toSend = JSON.parse(d.toString()).text
                    sender(toSend)
                } catch (err) {
					console.log(d.toString())
                    sender("There was an issue translating that. Please try again but better this time.")
                }
            })
        })
        req.on('error', (e) => {
            console.log(e)
        })
        req.end()
	}
}