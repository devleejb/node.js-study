const http = require('http');
const fs = require('fs').promises;

const users = {};

http.createServer(async (req, res) => {
	try {
		console.log(req.method, req.url);
		
		// GET Method
		if (req.method === 'GET') {
			if (req.url === '/') {
				// restFront.html 파일을 응답한다.
				const data = await fs.readFile('./restFront.html');
			
				res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
				
				return res.end(data);
			} else if (req.url === '/about') {
				// about.html 파일을 응답한다.
				const data = await fs.readFile('./about.html');
			
				res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
			
				return res.end(data);
			} else if (req.url === '/users') {
				res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8'});
				
				return res.end(JSON.stringify(users));
			}
			
			try {
			const data = await fs.readFile(`.${req.url}`);
			
			return res.end(data);
			} catch (err) { 
			// restFront.html, about.html 이외에 다른 파일을 요청했고, 그 파일은 존재하지 않는다.
			}
		} else if (req.method === 'POST') {
			if (req.url === '/user') {
				let body = '';
				
				// 요청의 body를 스트림 형식으로 받는다.
				req.on('data', (data) => {
					body += data;
				});
				
				// 요청을 모두 받았다면, JSON을 분석하여 클라이언트가 요청한 유저를 등록한다.
				return req.on('end', () => {
					console.log(body);
					
					const { name } = JSON.parse(body);
					const id = Date.now();
					
					users[id] = name;
					
					res.writeHead(201);
					res.end('등록 성공');
				});
			}
		} else if (req.method === 'PUT') {
			// 서버의 자원을 요청에 들어있는 자원으로 치환을 요청하였다.
			if (req.url.startsWith('/user/')) {
				const key = req.url.split('/')[2];
				let body = '';
				
				req.on('data', (data) => {
					body += data;
				});
				
				return req.on('end', () => {
					console.log(body);
					
					const { name } = JSON.parse(body);
					
					// 요청한 키의 유저 이름을 치환한다.
					users[key] = name;
					
					return res.end(JSON.stringify(users));
				});
			}
		} else if (req.method === 'DELETE') {
			// 서버의 자원을 삭제 요청하였다.
			if (req.url.startsWith('/user/')) {
				const key = req.url.split('/')[2];
				
				delete users[key];
				
				return res.end(JSON.stringify(users));
			}
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