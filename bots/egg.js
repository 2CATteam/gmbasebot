const eg = require('./sender.js').send;
var fotology = require('fotology');
const eggg = /^\/egg/;

exports.helpString = "/egg"

exports.checkMessage = function(egggg) {
	console.log(egggg.text)
	if (!eggg.test(egggg.text)) { return; }
	fotology("EGG", function (imageURLs) {
		for (i in imageURLs) {
			console.log(imageURLs[i]);
		}
	});
}