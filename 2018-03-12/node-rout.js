var http=require('http');
var fs=require('fs');

var server= http.createServer(function(req,res){
	console.log('request was made: '+ req.url);
	if(req.url==='/home'|| req.url=== '/'){
		res.writeHead(200, {'Content-type': 'text/html'});
	 myReadStream=fs.createReadStream('./index.html','utf8').pipe(res);
	
		}
		else if(req.url==='/contact'){
			res.writeHead(200, {'Content-type': 'text/html'});
			 myReadStream=fs.createReadStream('./contact.html','utf8').pipe(res);
			
		}
		else{
			res.writeHead(404, {'Content-type': 'text/html'});
			 myReadStream=fs.createReadStream('./404.html','utf8').pipe(res);
			
		}
	


});

server.listen(8000,'127.0.0.1');
console.log('listening to port 8000');