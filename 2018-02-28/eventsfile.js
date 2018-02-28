var fs = require('fs');
const EventEmitter = require('events');
const myEmitter = new EventEmitter()


myEmitter.on('event',function ()  {
    fs.readFile('sample.txt', function(err, data){
    	console.log(data.toString());
    });

});
function fun(z,m){
	return z+m;
}
console.log('rajesh');
myEmitter.emit('event');
console.log('rajesh');