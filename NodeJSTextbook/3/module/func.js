const {odd, even} = require('./var'); // 확장자 생략 가능

function checkOddOrEven(num) {
	if (num % 2 == 0) return even;
	else return odd;
} 

module.exports = checkOddOrEven;