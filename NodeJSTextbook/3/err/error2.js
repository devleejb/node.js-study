process.on('uncaughtException', (err) => {
	console.error(err);
});

setInterval(() => {
	throw new Error('Error!');
}, 1000);

setTimeout(() => {
	console.log('hi');
}, 2000);