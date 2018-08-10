/**
 * http://usejsdoc.org/
 */


var fs = require("fs");

//비동기식 파일 쓰기
fs.writeFile("hello_world.txt", "hello world!", function(err){
	console.log("err : " + err);
});
console.log("writeFile end");





/*
출력결과

writeFile end
err : null


writeFile()함수로 읽은 내용이 먼저 출력되는 것이 아니라 console.log의 내용이 먼저 출력되고 있습니다.
왜냐하면 비동기로 읽기 때문에 writeFile()함수 동작중에  console.log()가 실행이 완료되어 졌기 때문입니다.

*/