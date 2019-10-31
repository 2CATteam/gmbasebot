const eg = require('./sender.js').send;
import GoogleImageSearch from 'free-google-image-search'
const eggg = /^\/egg/ig;

exports.helpString = "/egg"

exports.checkMessage = function(egggg) {
	console.log(egggg.text)
	if (!eggg.test(egggg.text)) { 
		console.log("Not a match");
		return;
	}
	GoogleImageSearch.searchImage("egg").then((egg) => {
		console.log("finished!")
		console.log(egg)
	})
}