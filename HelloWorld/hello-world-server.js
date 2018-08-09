// 자동 생성된 서버 프로그램 코드입니다.

// http 모듈(프로토콜)을 사용
var http = require('http');

// 서버생성
// http 모듈을 이용하여 요청(req)과 응답(res) 객체를 인자로 받아서 서버를 생성합니다.
http.createServer(function handler(req, res) {
	// 컨텐츠 타입 지정
    res.writeHead(200, {'Content-Type': 'text/plain'});
    // 요청한 클라이언트에게 아래 문자열을 보냅니다.
    res.end('Hello World\n');
 // 서버 주소와 포트 설정
}).listen(1337, '127.0.0.1');

// 콘솔에 메시지를 출력합니다.
console.log('Server running at http://127.0.0.1:1337/');
