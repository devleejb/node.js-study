const express = require('express');
const path = require('path');

const app = express();

// 세팅명과 값을 저장한다.
app.set('port', process.env.PORT || 3000);

// 주소에 대한 GET 요청이 되었을 때의 동작을 설정한다.
app.get('/', (req, res) => {
	// res.send('Hello, Express');
	res.sendFile(path.join(__dirname, '/index.html'));
	// path를 이용하여 경로를 설정한다.
});

// 포트를 연결하고 서버를 실행한다.
app.listen(app.get('port'), () => {
	console.log(app.get('port'));
});