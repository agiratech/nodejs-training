//event example

var events = require('events');
var eventEmitter = new events.EventEmitter();
var connectHandler = function () {
   console.log('connection succesful.');
   setTimeout(function() {
	console.log('in function Rajesh');
}, 5000);
   eventEmitter.emit('data_received');
}
eventEmitter.on('connection', connectHandler);
 eventEmitter.on('data_received', function(){
   console.log('data received succesfully.');
}); 
eventEmitter.emit('connection'); 
console.log("Program Ended.");