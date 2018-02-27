var events = require('events');
var eventEmitter = new events.EventEmitter();

eventEmitter.on('event', () => {
	console.log("event Occurred")
});
eventEmitter.emit('event');