var http = require("http");
http.createServer(function (request, response)
{
	response.writeHead(250,'text/plain');
	response.end('Hello World\n');
}).listen(8081);
console.log('Server running at http://127.0.0.1:8081');
const name = 'aishwarya';
console.warn(`This is your last warning ${name}`);
// console.error(new Error('This is an error.'));
exports.myDateTime = function(){
	return Date();
};