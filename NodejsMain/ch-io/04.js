/**
 * http://usejsdoc.org/
 */
var fs = require("fs");

//동기식 파일 쓰기




try {
  fs.writeFileSync("hello_world.txt", "Hello World!", { encoding: 'utf8' });
  
} catch(err) {
  // An error occurred
  console.error(err);
}
console.log("writeFileSync end");




//------------------------------------------------------------
//fs.writeFileSync("hello_world.txt", "hello world!");
//console.log("writeFileSync end");