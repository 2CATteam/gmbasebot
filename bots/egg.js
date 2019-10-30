const eg = require('./sender.js').send;
var fotology = require('fotology');
const eggg = /^\/egg/ig;

exports.helpString = "/egg"

exports.checkMessage = function(egggg) {
	console.log(egggg.text)
	if (!eggg.test(egggg.text)) { 
		console.log("Not a match");
		return;
	}
	fotology("EGG", function (imageURLs) {
		for (var i in imageURLs) {
			console.log(imageURLs[i]);
		}
	});
}