setInterval(() => {
	console.log('hi');
	
	try {
		throw new Error('Error!');
	} catch (err) {
		console.error(err);
	}
}, 1000);

// 에러가 발생해도 멈추지 않고, 계속 실행됨!