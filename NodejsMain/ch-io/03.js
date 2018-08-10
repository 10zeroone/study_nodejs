/**
 * http://usejsdoc.org/
 */
var fs = require("fs");




//동기식 파일 읽기
var data = fs.readFileSync("hello.txt", "utf-8");
console.log(data);

console.log("readFileSync end");



/*
출력결과
hello!
readFileSync end

동기식이기 때문에 파일 읽기 작업이 끝난 후 console.log()가 수행됩니다.

*/