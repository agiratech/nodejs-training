var dt = require("./next");
var http = require("http");
http.createServer(function (request, response)
{

var fs = require('fs');
// var rs = fs.createReadStream('./next.js');
var rs = fs.readFileSync('./next.js');
// rs.on('open', function () {
  console.log('The file is open');
  console.log(rs.toString());
  response.writeHead(250,'text/plain');
  response.end(rs.toString());
}).listen(8081);
// }
console.log('Server running at http://127.0.0.1:8081');

