/**
직접 만든 모듈

사용자가 직접 모듈을 만들어 기능 호출을 통해 프로그램을 구현합니다.

// sum 객체의 execution의 정의한 함수를 외부모듈로 만들고 이를 불러와서 사용합니다.

01Step2.js			프로그램
sumNum.js			외부모듈

 */

// 해당 경로의 모듈을 가져옵니다.
// .js확장자를 맨 모듈명으로 해당 모듈을 가져옵니다.
var sum = require("./sumNum");


console.log(sum.execution(0, 10));