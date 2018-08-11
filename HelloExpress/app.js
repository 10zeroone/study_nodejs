
/**
 * Module dependencies.
 */

// 모듈 가져오기
var express = require('express')
  , routes = require('./routes') // 모듈명을 붙이지 않으면 그 안의 index.js가 선택되어 집니다.
  , user = require('./routes/user') // user 모듈 선택하여 가져오기
  , http = require('http') // 내부 모듈/외부모듈 등 가져오기
  , path = require('path');

// express를 실행 한 후 app에 저장합니다.
var app = express();

// all environments
// app객체에 set()함수로 환경설정을 합니다.
app.set('port', process.env.PORT || 3000);
// __dirname 전역변수(현 프로젝트의 경로가 저장되어 있습니다.)를 사용하여 경로 설정
app.set('views', __dirname + '/views');
// view engine을 jade로 설정
app.set('view engine', 'jade');

// use(): 미들웨어를 사용(등록)하기 위한 메소드
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// 해당 요청에 대한 라우팅 설정
app.get('/', routes.index);
app.get('/users', user.list);

// 서버 구동
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
