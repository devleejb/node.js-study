const obj = {
	outside: {
		inside: {
			key: 'LJB'
		}
	}
};

console.time('time');

console.log('This is log.');
console.log('Hi', 1, true);

console.table([{name: 'LJB', age: 23}, {name: 'Anonymous', age: 30}]);

console.dir(obj, {colors: true, depth: 1});

function b() {
	console.trace("Error Detected!");
}

function a() {
	b();
}

a();

console.timeEnd('time');