/**

직접 만든 모듈(module.exports)


02.js				메인 프로그램
sumNumObj.js		모듈

 */


// 외부 모듈 사용
var sum = require("./sumNumObj");

// 외부 모듈 호출
console.log(sum.execution(0, 10)); // 55
console.log(sum.executionOdd(0, 10)); // 25
