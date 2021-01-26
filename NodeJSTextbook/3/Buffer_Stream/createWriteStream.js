const fs = require('fs');

const writeStream = fs.createWriteStream('./writeMe.txt');

// end 메소드가 실행되면 finish 이벤트 발생
writeStream.on('finish', () => {
	console.log('완료');
})

writeStream.write('글');
writeStream.write('글2');
writeStream.end();