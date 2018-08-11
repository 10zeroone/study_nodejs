/**
 * http://usejsdoc.org/
 */

var express = require("express");
var http = require("http");
var path = require("path");

var app = express();
// 외부 모듈 가져오기
var bodyParser = require('body-parser');

//app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, '../../public')));

// 
app.use(bodyParser.urlencoded({ extended: false }));

// post 요청에 대한 처리
app.post("/login", function(req, res){
	console.log("user login");
	
	var uId = req.param("uId");
	var uPw = req.param("uPw");
	
	res.writeHead("200", {"Content-Type":"text/html;charset=utf8"});
	res.write("User ID :" + uId);
	res.write("<br>");
	res.write("User PW :" + uPw);
	res.write("<br>");
	res.write("Welcome Post - " + uId + " !!!");
	res.write("<br>");
	res.write("<a href='/login_post.html'> LogIn </a>");
	res.end();
});


http.createServer(app).listen(3000, function(){
	console.log("server start!!");
});