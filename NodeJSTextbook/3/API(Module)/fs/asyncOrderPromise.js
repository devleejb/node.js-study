const fs = require('fs').promises;

fs.readFile('./readMe.txt')
	.then((data) => {
		console.log('1번', data.toString());
		
		return fs.readFile('./readMe.txt');
	})
	.then((data) => {
		console.log('2번', data.toString());
		
		return fs.readFile('./readMe.txt');
	})
	.then((data) => {
		console.log('3번', data.toString());	
	})
	.catch((err) => {
		console.error(err); 
	});