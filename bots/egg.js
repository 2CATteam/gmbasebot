const eg = require('./sender.js').send;
const egg = require('free-google-image-search').GoogleImageSearch
const eggg = /^\/egg/ig;

exports.helpString = "/egg"

exports.checkMessage = function(egggg) {
	console.log("Testing")
	console.log(egggg.text)
	if (!eggg.test(egggg.text)) { 
		console.log("Not a match");
		return;
	}
	egg.searchImage("egg").then((eggggg) => {
		console.log("finished!")
		console.log(eggggg)
	}).catch((err) => {
		console.error(err)
	})
}