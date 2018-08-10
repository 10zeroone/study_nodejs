/**
 * http://usejsdoc.org/
 */

var util = require("util");
var eventEmitter = require("events").EventEmitter;

function TemObj(){
	this.on("fire", function(){
		console.log("fire event!");
	});
}

util.inherits(TemObj, eventEmitter);

var obj = new TemObj();

var fireTime = setTimeout(function(){
	console.log("fire event after 3second");
	obj.emit("fire");
}, 3000);