const eg = require('../imagesender.js').send;
const egg = /^\/egg/ig;
const eggs = require('./res/paths.json').paths

exports.mod = class egggggggggg {
	constructor() {
		this.helpString = "/egg"
		this.name = "egg"
	}

	checkMessage(eggg) {
		if (!egg.test(eggg.text)) { return false }
		let egggg = Math.floor(Math.random() * eggs.length);
		eg(eggs[egggg])
		return true
	}
}
