var fs = require('fs');
var EventEmitter = require('events');
var event = new EventEmitter();
event.on('add',function(a,b){
	let c = a+b;
	console.log(c);
	if (c==10){
fs.readFile('sample.txt', function (err, data) {
    
    if (err) {
        return console.error(err);
    }
    console.log(data.toString());
});	
	}
	else{
		console.log("the file cannot be opened bcuz the result is not equal to 10");
	}
});
event.emit('add', 5, 5);