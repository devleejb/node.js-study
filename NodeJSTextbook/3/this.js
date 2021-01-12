// 최상위 scope에서의 this는 module.exports(exports)
console.log(this); // {}
console.log(this === module.exports); // true
console.log(this === exports); // true

// 함수 선언문 내의 this는 global
function whatIsThis() {
	console.log(this); // global
	console.log(this === global); // true
}

whatIsThis();