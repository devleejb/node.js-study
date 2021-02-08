const http2 = require('http2');
const fs = require('fs');

// 첫 번째 인수 : 인증서에 관련된 옵션 객체
// 두 번째 인수 : 서버 로직
http2.createSecureSever({
	cert: fs.readFileSync('도메인 인증서 경로'),
	key: fs.readFileSync('도메인 비밀키 경로'),
	ca: [
		fs.readFileSync('상위 인증서 경로'),
		fs.readFileSync('상위 인증서 경로'),
	],
}, (req, res) => {
	res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
	res.write('<h1>Hello Node!</h1>');
	res.end('<p>Hello Server!</p>');
}).listen(443);
// http와 달리 https의 기본 포트는 443이다.