/**
페이지 redirect

 */

var express = require("express");
var http = require("http");
var path = require("path");

var app = express();


app.use(function(req, res, next){
	console.log("use middleware redirect");
	
	// response객체의 redirect속성에 이동할 URL을 지정합니다.
	res.redirect("http://codedragon.tistory.com");
});

// 서버 실행
http.createServer(app).listen(3000, function(){
	console.log("server start!!");
});