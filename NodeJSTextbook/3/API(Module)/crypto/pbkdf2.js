const crypto = require('crypto');

crypto.randomBytes(64, (err, buf) => {
	const salt = buf.toString('base64');
	
	console.log(salt);
	
	crypto.pbkdf2('password', salt, 10000, 64, 'sha512', (err, key) => {
		console.log(key.toString('base64'));	
	});
});