/**
 * http://usejsdoc.org/
 */


// 노드가 기본적으로 제공해주는 os모듈을 가져옵니다. 
var os = require("os");

// os 모듈에 대한 정보가 객체로 출력됩니다.
console.log(os);

console.log("=======================================");

// os 모듈의 특정 내용만 출력하기
console.log("os.hostname() : " + os.hostname());
console.log("os.type() : " + os.type());
console.log("os.platform() : " + os.platform());
console.log("os.uptime() : " + os.uptime());
console.log("os.networkInterfaces() : " + os.networkInterfaces());
