
// 외부모듈
// exports 객체를 명시해 주어야 외부에서 해당 모듈을 끌어와 사용할 수 있습니다.
// exports 객체에 필요한 외부 모듈을 만들어서 사용하게 됩니다.

// 인자로 들어온 두 인자 사이값을 모두 더해서 반환하는 함수입니다.
exports.execution = function(num1, num2){
	var result = 0;
	for(var i=num1; i <= num2; i++){
		result += i;
	}
	
	return result;
};