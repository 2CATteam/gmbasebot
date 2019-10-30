const eg = require('./sender.js').send;
const egg = require('free-google-image-search').GoogleImageSearch;
const eggg = /^\/egg/;

exports.helpString = "/egg"

exports.checkMessage = function(egggg) {
	if (!eggg.test(egggg.text)) { return; }
	egg.searchImage("EGG").then((eggggg) => {
		console.log(res);
		eg(res.toString());
	})
	
}