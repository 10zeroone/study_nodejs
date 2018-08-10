/**
 * http://usejsdoc.org/
 */

var util = require("util");

// events 모듈의 EventEmitter 객체를 생성합니다.
var eventEmitter = require("events").EventEmitter;

// 동일한 코드
//var events = require("events");
//var eventEmitter = events.EventEmitter;



function TemObj(){
	// fire 이벤트 발생시 이벤트핸들러함수에 이벤트 연결
	this.on("fire", function(){
		console.log("fire event!");
	});
}


// eventEmitter를 상속한 TemObj를 생성합니다. 
// eventEmitter를 상속를 상속받았으므로 이벤트 객체입니다.
util.inherits(TemObj, eventEmitter);

// 이벤트 객체 생성
var obj = new TemObj();

// 10초 후 실행
var fireTime = setTimeout(function(){
	console.log("fire event after 10second");
	// fire 이벤트 전달
	obj.emit("fire");
}, 10000);