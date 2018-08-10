/**

하나의 프로그램안에 모든 기능이 들어간 프로그램

01Step1.js
 */
 

// sum 객체 생성
var sum = {};

// sum 객체의 execution에 함수를 정의하여 설정합니다.
// 인자로 들어온 두 인자 사이값을 모두 더해서 반환하는 함수입니다.
sum.execution = function(num1, num2){
	var result = 0;
	for(var i=num1; i <= num2; i++){
		result += i;
	}
	
	return result;
};

// 실행결과를 확인
console.log(sum.execution(0, 10)); // 55

