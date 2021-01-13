require('./example/var');

console.log('require.cache 속성 : 파일명, 속성값 : 각 파일의 모듈 객체')
console.log(require.cache);
console.log('require.main은 해당 파일(첫 실행시)의 모듈을 가리킨다.');
console.log(require.main);
console.log(require.main === module);
