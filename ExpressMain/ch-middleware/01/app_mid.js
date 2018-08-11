
// 모듈 가져오기
var express = require("express");
var http = require("http");
var path = require("path");

// express 실행 후 app변수에 저장
var app = express();


// 요청이 오면 수행되는 미들웨어 부분입니다.
// use()함수로 미들웨어로 사용할 콜백함수를 등록
app.use(function(req, res, next){
	console.log("use middleware");
	
	// 헤더정보 설정
	res.writeHead("200", {"Content-Type":"text/html;charset=utf8"});
	res.end("MIDDLEWARE!!");
});

// 서버 실행
http.createServer(app).listen(3000, function(){
	console.log("server start!!");
});