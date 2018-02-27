var http = require('http');

var server = http.createServer(function(req, res) {
res.writeHead(200, {"Content-Type": "text/html"});
res.end('My first program using <strong> http </strong> module!');
});
server.listen(8080);


