const http = require('http');
const fs = require('fs').promises;

http.createServer(async (req, res) => {
	try {
		console.log(req.method, req.url);
		
		// GET Method
		if (req.method === 'GET') {
			if (res.url === '/') {
				// restFront.html 파일을 응답한다.
				const data = await fs.readFile('./restFront.html');
				
				res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
				
				return res.end(data);
			} else if (req.url === '/about') {
				// about.html 파일을 응답한다.
				const data = await fs.readFile('./about.html');
			
				res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
			
				return res.end(data);
			}
		} 
		
		try {
			const data = await fs.readFile(`.${req.url}`);
			
			return res.end(data);
		} catch (err) { 
			// restFront.html, about.html 이외에 다른 파일을 요청했고, 그 파일은 존재하지 않는다.
		}
		
		// status code 404
		res.writeHead(404);
		
		return res.end();
	} catch (err) {
		// 500 : Internal Server Error
		res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
			
		return res.end(err.message);		
	}
}).listen(3000);