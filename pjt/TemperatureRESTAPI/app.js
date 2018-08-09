//URL 라우팅을 위해 라우터 객체를 설정하는 부분
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// index는 routes 폴더의 index.js 파일로 URL 라우팅을 위한 라우팅 객체를 생성합니다.
// 브라우저나 개방형 API를 쓰는 애플리케이션에서 URL을 주면 핸들러로 넘어가는데, 그 핸들러를 설정하는 파일이 바로 routes/index 파일입니다.
var index = require('./routes/index');
// var routes = require('./routes/index');

var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
// app.js 파일은 JSON 포맷을 사용하여 전송됩니다. 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
// app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
