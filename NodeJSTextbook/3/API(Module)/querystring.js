const url = require('url');
const querystring = require('querystring');

const parsedUrl = url.parse('https://ide-run.goorm.io/workspace/NodeJS?language=kor#');

console.log(querystring.parse(parsedUrl.query));
console.log(querystring.stringify(querystring.parse(parsedUrl.query)));