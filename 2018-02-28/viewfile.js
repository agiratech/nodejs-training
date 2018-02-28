var http = require('http');
var fs = require('fs');
var { URL } = require('url')
http.createServer(function (req, res) {
fs.readFile(new URL('file://localhost/home/rajeshkumarj/Node_js/sample.txt'),function (err,data){
	res.write(data);
	res.end();
});
}).listen(8080);
console.log("server running in http://localhost:8080");





var http = require('http');
var fs = require('fs');
var { URL } = require('url')
http.createServer(function (req, res) {
var data = fs.readFileSync(new URL('file://localhost/home/rajeshkumarj/Node_js/sample.txt'));
	res.write(data);
	res.end();

}).listen(8080);
console.log("server running in http://localhost:8080");

