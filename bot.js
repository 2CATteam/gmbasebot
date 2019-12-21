require('dotenv').config()
const http = require('http');
const server = http.createServer();

var modules = []

const fileRegex = /^[^.].+.js/

console.log('Starting bot!')

require('fs').readdirSync('./modules').forEach((file) => {
	if (fileRegex.test(file)) {
		let ClassFile = require('./modules/' + file)
		let toAdd = new ClassFile.mod()
		console.log(' Added new module: ' + toAdd.name)
		modules.push(toAdd)
	}
})

const Help = require('./help.js')

modules.push(new Help.mod(modules))
console.log('Added all modules!')

server.on('request', (request, response) => {
	console.log('Request!');
	const method = request.method;
	var data = null;
	switch (method) {
		case 'GET':
			console.log('Starting GET!');
			response.writeHead(200);
			response.end('Nice GET request!');
			break;
		case 'POST':
			var body = [];
			request.on('data', chunk => {
				body.push(chunk.toString())
			});
			request.on('end', chunk => {
				let message = JSON.parse(body[0]);
				checkMessages(message);
				response.writeHead(200);
				response.end();
			});
			break;
	}
});

function checkMessages(message) {
	console.log('Checking messages for an incoming message');
	console.log(message)
	for (var module in modules)
	{
		if (modules[module].checkMessage(message)) {
			console.log('Message is being handled by ' + modules[module].name)
		}
	}
}

server.listen(process.env.PORT);

console.log("Beginning to listen on port " + process.env.PORT);
