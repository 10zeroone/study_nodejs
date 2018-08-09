// HTTP 앱서버 구성
// 요청이 오면 Hello World를 출력하는 서버 구성
var http = require('http'); 
http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type' : 'text/html'});
	res.end( '<h3>Hello World<h3>');
}).listen(8085, '127.0.0.1'); 
console.log( 'Server running at http://127.0.0.1:8085/'); 