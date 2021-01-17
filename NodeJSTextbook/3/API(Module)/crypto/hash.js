const crypto = require('crypto');

console.log(crypto.createHash('sha512').update('password').digest('base64'));
console.log(crypto.createHash('sha512').update('password').digest('hex'));
console.log(crypto.createHash('sha512').update('password').digest('latin1'));