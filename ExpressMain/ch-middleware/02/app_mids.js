

// 
var express = require("express");
var http = require("http");
var path = require("path");

var app = express();

// 미들웨어 설정 1
app.use(function(req, res, next){
	console.log("use middleware-01");
	
	// 응답객체의 info 속성을 설정합니다.
	res.info = "express server middleware";
	
	// 다음 미들웨어 실행을 위해 next()함수를 호출합니다.
	next(); 
});


//미들웨어 설정 2
app.use(function(req, res, next){
	console.log("use middleware-02");
	
	res.writeHead("200", {"Content-Type":"text/html;charset=utf8"});
	
	// 출력으로 res.info 속성에 있는 값을 보여줍니다.
	res.end(res.info);
});

http.createServer(app).listen(3000, function(){
	console.log("server start!!!");
});