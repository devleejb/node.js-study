const {
	Worker, isMainThread, parentPort
} = require('worker_threads');

if (isMainThread) {
	const worker = new Worker(__filename);
	
	worker.on('message', (message) => {
		console.log(message);
	});
	worker.on('exit', () => {
		console.log('exit!');
	})
	worker.postMessage('hi');
} else {
	parentPort.on('message', (message) => {
		console.log(message);
		parentPort.postMessage('hello');
		parentPort.close();
	})
}