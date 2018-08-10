/**
 * http://usejsdoc.org/

hello.txt
Hello
 */



var fs = require("fs");

// 비동기식 파일 읽기
fs.readFile("hello.txt", "utf-8", function(err, data){
	console.log(data);
});
console.log("readFile end");



/*
출력결과

readFile end
hello!

readFile()함수로 읽은 내용이 먼저 출력되는 것이 아니라 console.log의 내용이 먼저 출력되고 있습니다.
왜냐하면 비동기로 읽기 때문에 readFile()함수 동작중에  console.log()가 실행이 완료되어 졌기 때문입니다.

*/