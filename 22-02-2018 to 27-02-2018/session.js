var http = require("http");
http.createServer(function (request, response)
{
  	response.writeHead(250,{'Content-Type': 'text/plain'});
  		response.end('Hello World\n');
  		}).listen(8080);
		console.log('Server running at http://127.0.0.1:8080');
		const name = 'aishwarya';
		console.warn(`This is your last warning ${name}`);
		console.error(new Error('This is an error.'));

var aish = require('http');
var host = '127.0.0.1'
var port = 3000
var server = aish.createServer((request, response) => {
  response.writeHead(200, {"Content-Type": "text/plain"});
   // response.writeHead(200, "text/plain");
     console.log("server Working");
       response.end('Server Working Successfully');
       });
       server.listen(port,host, (error) => {  
         if (error) {
               return console.log('Error occured : ', error );
                 }
                 console.log('server is listening on ' + host + ':'+ port);
                 });	

console.log('aishu')
