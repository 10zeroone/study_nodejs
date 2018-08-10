/**
 * http://usejsdoc.org/
 */

var fs = require("fs");

// 비동기식 파일 읽기
fs.readFile("hello.txt", "utf-8", function(err, data){
	console.log(data);
});
console.log("readFile end");

//비동기식 파일 쓰기
fs.writeFile("hello_world.txt", "hello world!", function(err){
	console.log("err : " + err);
});
console.log("writeFile end");

//동기식 파일 읽기
fs.readFileSync("hello.txt", "utf-8");
console.log("readFileSync end");

//동기식 파일 쓰기
fs.writeFileSync("hello_world.txt", "hello world!");
console.log("writeFileSync end");