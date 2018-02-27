
//sequence events
var events = require('events');
var eventEmitter = new events.EventEmitter();

eventEmitter.on('event', () => {
	console.log("event Occurred\n")
});
eventEmitter.emit('event');
eventEmitter.emit('event');
eventEmitter.emit('event');

// event that occur once
var events = require('events');
var eventEmitter = new events.EventEmitter();

eventEmitter.once('event', () => {
	console.log("event Occurred\n")
});
eventEmitter.emit('event');
eventEmitter.emit('event');
eventEmitter.emit('event');

//addition using events
var events = require('events');
var eventEmitter = new events.EventEmitter();

eventEmitter.on('event', (a,b) => {
	console.log((a+b))
});
eventEmitter.emit('event',5,6);

//using this keyword

var events = require('events');
var eventEmitter = new events.EventEmitter();

eventEmitter.on('event', function (a,b) {
	console.log((a+b), this)
});
eventEmitter.emit('event',5,6);

//events with this keyword

var events = require('events');
var eventEmitter = new events.EventEmitter();

eventEmitter.on('event', (a,b) => {
	console.log((a+b), this)
});
eventEmitter.on('event2', (a,b) => {
	console.log((a+b), this)
});
eventEmitter.emit('event',5,6);
eventEmitter.emit('event2',5,6);