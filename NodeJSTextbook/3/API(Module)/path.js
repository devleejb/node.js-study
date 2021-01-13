const path = require('path');
const fileName = __filename;


console.log(path.sep);
console.log(path.delimiter);

console.log(path.dirname(fileName));
console.log(path.extname(fileName));
console.log(path.basename(fileName));

console.log(path.parse(fileName));
console.log(path.format(path.parse(fileName)));

console.log(path.normalize('C://users\\\ljb'));

console.log(path.isAbsolute('C:\\'));
console.log(path.isAbsolute('../'));


console.log(path.relative(fileName, '/workspace'));

console.log(path.join('C:\\', '\\users'));
console.log(path.resolve('C:\\', '\\users'));


