const fs = require('fs').promises;

fs.writeFile('./writeMe.txt', "WRITEME")
	.then(() => {
		return fs.readFile('./writeMe.txt');
	})
	.then((data) => {
		console.log(data.toString());
	})
	.catch((err) => {
	console.error(err);
	});