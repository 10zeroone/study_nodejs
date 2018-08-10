/**
module.exports 사용하여 모듈 정의

*/

// Step 1: 객체 생성
var sumNum = {};



// Step 2: 객체의 속성으로 기능 구현
// 인자로 들어온 두 인자 사이값을 모두 더해서 반환하는 함수입니다.
sumNum.execution = function(num1, num2){
	var result = 0;
	for(var i=num1; i <= num2; i++){
		result += i;
	}
	
	return result;
};

// 홀수만 더하는 함수
sumNum.executionOdd = function(num1, num2){
	var result = 0;
	for(var i=num1; i <= num2; i++){
		if(i % 2 != 0) 
			result += i;
	}
	
	return result;
};


//Step 3: module.exports에 구현한 객체 저장
module.exports = sumNum;