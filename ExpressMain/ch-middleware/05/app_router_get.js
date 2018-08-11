/**
 * http://usejsdoc.org/
 */
var express = require("express");
var http = require("http");
var path = require("path");

var app = express();


// static 미들웨어 설정
// 프로젝트의 public을 static화(root화)시켜서 바로 접근할 수 있도록 설정하는 것입니다.
//app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, '../../public')));

// get방식 요청에 대한 라우팅
// /login, 요청에 대한 처리를 할 콜백 함수를 만들어줍니다.
app.get("/login", function(req, res){
	console.log("user login");
	
	var uId = req.param("uId");
	var uPw = req.param("uPw");
	
	res.writeHead("200", {"Content-Type":"text/html;charset=utf8"});
	res.write("User ID :" + uId);
	res.write("<br>");
	res.write("User PW :" + uPw);
	res.write("<br>");
	res.write("Welcome Get - " + uId + " !!!");
	res.write("<br>");
	res.write("<a href='/login_get.html'> LogIn </a>");
	res.end();
});

http.createServer(app).listen(3000, function(){
	console.log("server start!!");
});