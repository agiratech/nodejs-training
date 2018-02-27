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
