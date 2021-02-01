const http = require('http');

http.createServer((req, res) => {
	console.log(req.headers.cookie);
	
	res.writeHead(200, { 'Set-Cookie': 'mycookie=test'});
	res.end();
}).listen(3000);