setImmediate(() => {
	console.log('immediate');
});

process.nextTick(() => {
	console.log('nextTick');
});

setTimeout(() => {
	console.log('timeOut');
});

Promise.resolve().then(() => console.log('promise'));

