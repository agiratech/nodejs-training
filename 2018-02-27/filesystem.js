var http = require('http');
var url = require('url');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('Hello World!</br>');
  res.write(req.url + '</br>' );
  var q = url.parse(req.url, true).query;
  var txt = q.year + " " + q.month;
  res.write(txt);
  res.end();
}).listen(8080);		
console.log("server running in http://localhost:8080/?year=2017&month=July");	


//http://localhost:8080/?year=2017&month=July


//FILE SYSTEM try outs....

var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {

  // append text to the file
  fs.appendFile('sample.txt','this is Rajesh', function(err){
  if (err) throw err;
  console.log("updated");
  });


  // read the contents of the file
  fs.readFile('sample.txt',function (err, data){
  if (err) throw err;
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(data);
  res.end();
  });


  //  write into the file
  fs.writeFile('sample.txt','Hello...content is written', function(err){
  if (err) throw err;
  console.log("file Written");
  });

  // file open

  fs.open('sample.txt', 'w', function (err, file) {
  if (err) throw err;
  console.log('Saved!');
  });


  //unlink or delete

  fs.unlink('sample.txt', function (err) {
  if (err) throw err;
  console.log('File deleted!');
  }); 
  
  // renmane 

  fs.rename('sample.txt', 'sample1.txt', function (err) {
  if (err) throw err;
  console.log('File Renamed!');
  });




}).listen(8080);		
console.log("server running in http://localhost:8080/");	


//http://localhost:8080/?year=2017&month=July


