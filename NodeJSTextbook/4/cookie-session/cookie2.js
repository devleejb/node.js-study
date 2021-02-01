const http = require('http');
const fs = require('fs').promises;
const url = require('url');
const qs = require('querystring');

const parseCookies = (cookie = '') => {
	// 문자열을 객체로 바꾸어주는 함수이다.
	return cookie
		.split(';')
		.map(v => v.split('='))
		.reduce((acc, [k, v]) => {
		acc[k.trim()] = decodeURIComponent(v);
		return acc;
	}, {});
}

http.createServer(async (req, res) => {
	const cookies = parseCookies(req.headers.cookie);
	
	// 클라이언트가 로그인을 요청한다.
	if (req.url.startsWith('/login')) {
		const { query } = url.parse(req.url);
		const { name } = qs.parse(query);
		const expires = new Date();
		
		// 유효 시간을 5분으로 설정한다.
		expires.setMinutes(expires.getMinutes() + 5);
		
		// 헤더에 리다이렉트 주소, 쿠키, 클라이언트가 설정한 이름과 유효 시간을 적는다.
		res.writeHead(302, {
			Location: '/',
			'Set-Cookie': `name=${encodeURIComponent(name)}; Expires=${expires.toGMTString()}; HttpOnly; Path=/`,
		});
		// Location은 리다이렉트 주소이다.
		// 헤더에는 한글을 사용할 수 없으므로 encodeURIComponent 함수를 사용한다.
		
		res.end();
	} else if (cookies.name) {
		// url이 /login으로 시작하지 않는 경우
		// 쿠키에 이름이 설정이 되었다면 사용자의 이름에 대한 정보를 응답한다.
		res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
		res.end(`${cookies.name}님 안녕하세요.`);
	} else {
		// 상대가 로그인하지 않은 경우 로그인 창을 응답한다.
		try {
			const data = await fs.readFile('./cookie2.html');
			
			res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
			
			res.end(data);
		} catch (err) {
			res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
			
			res.end(err.message);
		}
	}
}).listen(3000);