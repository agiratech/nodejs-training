var fs = require('fs');

var writeStream = fs.createWriteStream('stream.txt');
writeStream.write("this is written by write stream ");
writeStream.write("stream file");
writeStream.end();


var readStream = fs.createReadStream('stream.txt');
readStream.on('data', function (read){
	console.log(read.toString());
});

