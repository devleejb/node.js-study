const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
	// 마스터 프로세스인 경우
	console.log(`Master Process: ${process.pid}`);
	
	// CPU 코어 갯수만큼 워커를 생성한다.
	for (let i = 0; i < numCPUs; i += 1) {
		cluster.fork();
	}
	
	// 워커가 종료되었을 때 
	cluster.on('exit', (worker, code, signal) => {
		console.log(`${worker.process.pid} 종료`);
		console.log(code, signal);
	})
} else {
	// 워커들이 포트에서 대기
	http.createServer((req, res) => {
		res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
		res.end('Hello');
	}).listen(3000);
	
	console.log(`${process.pid} 실행`);
}