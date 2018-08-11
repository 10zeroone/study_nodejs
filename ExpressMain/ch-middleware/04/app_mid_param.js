/**
요청 파라미터


클라이언트 요청 URL
http://127.0.0.1:3000?info=codedragon
 */

var express = require("express");
var http = require("http");
var path = require("path");

var app = express();

app.use(function(req, res, next){
	console.log("use middleware");
	
	// 요청시 파라미터로 전달된 값을 
	// 요청 파라이미터를 통해(req.param()함수를 통해) "info"인자에 저장된 값을 추출해 paramInfo 저장합니다.
	var paramInfo = req.param("info");
	
	res.writeHead("200", {"Content-Type":"text/html;charset=utf8"});
	// 요청시 받은 info파라미터의 값 출력
	res.write("paramInfo : " + paramInfo);
	res.end();
});

http.createServer(app).listen(3000, function(){
	console.log("server start!!");
});