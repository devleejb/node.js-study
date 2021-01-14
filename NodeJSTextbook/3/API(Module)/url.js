const url = require('url');
const {URL} = url; // url 모듈 내에 URL 객체 존재

const address = 'https://ide-run.goorm.io/workspace/NodeJS?language=kor#';
const myURL = new URL(address);

// WHATWG 방식
console.log(myURL);
console.log(url.format(myURL));

// 기존 노드 방식
console.log(url.parse(address));
console.log(url.format(url.parse(address)));

// searchParams
console.log(myURL.searchParams);

myURL.searchParams.append('page', '3');
myURL.searchParams.append('category', 'IT');
myURL.searchParams.append('category', 'Study');

console.log(myURL.searchParams.getAll('category'));
console.log(myURL.searchParams.get('category'));

console.log(myURL.searchParams.keys());
console.log(myURL.searchParams.values());

myURL.searchParams.set('category', 'null');
console.log(myURL.searchParams.getAll('category'));

console.log(myURL.searchParams.toString());



