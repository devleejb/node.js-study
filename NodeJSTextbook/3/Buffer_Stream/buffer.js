const buffer = Buffer.from('버퍼');

console.log(buffer);
console.log(buffer.length);
console.log(buffer.toString());

const array = [Buffer.from('1'), Buffer.from('2'), Buffer.from('3')];

console.log(Buffer.concat(array).toString());

console.log(Buffer.alloc(5));