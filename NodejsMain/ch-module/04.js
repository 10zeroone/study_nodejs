/**


request 외부모듈

http://www.naver.com 요청한 페이지의 태그 내용확인하기
 */

// request 외부모듈 가져오기
var req =require("request");

// http://www.naver.com 요청한 페이지의 내용은 body인자에 저장됩니다. 
req("http://www.naver.com", function(error, response, body){
	// 페이지의 내용 출력
	console.log(body);
});