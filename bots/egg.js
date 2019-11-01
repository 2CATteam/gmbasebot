const eg = require('./imagesender.js').send;
const egg = /^\/egg/ig;
const eggs = require('./res/paths.json').paths

exports.helpString = "/egg"

exports.checkMessage = function(eggg) {
	if (!egg.test(eggg.text)) { return; }
	let egggg = Math.floor(Math.random() * paths.length);
	eg(paths[egggg])
}