const http = require('http');
const https = require('https');

const server = http.createServer();

const insult = require("./bots/insult");
const comp = require("./bots/comp");
const oof = require("./bots/oof");
const F = require("./bots/F");
const help = require("./bots/help");
const pressTo = require("./bots/pressTo");
const dasani = require("./bots/dasani");
const python = require("./bots/python");

let bots = [insult, comp, oof, F, pressTo, python];

var helper = new help(bots)
bots.push(helper)

server.on('request', (request, response) => {
	console.log('Request!');
	const method = request.method;
	var data = null;
	switch (method) {
		case 'GET':
			console.log('Starting GET!');
			response.end('Nice GET request!');
			break;
		case 'POST':
			console.log('Starting POST!');
			var body = [];
			request.on('data', chunk => {
				console.log('Found data!');
				console.log(chunk.toString());
				body.push(chunk.toString());
			});
			request.on('end', chunk => {
				console.log('Ending parsing!');
				console.log(body.toString());
				let message = JSON.parse(body[0]);
				checkMessages(message);
				response.writeHead(200);
				response.end();
			});
			break;
	}
});

function checkMessages(message) {
	console.log('Checking messages');
	for (var i = 0; i < bots.length; i++)
	{
		bots[i].checkMessage(message);
	}
}

server.listen(process.env.PORT);

console.log("Beginning to listen");