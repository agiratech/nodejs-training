var fs = require('fs');
var path = require('path')
const { URL } = require('url');
 fs.readFile('message.txt', (err, data) => {
 	if (err) 
 		throw err;
		
 	console.log("Content :  " + data);
 });
 console.log('read finished')

// var contents = fs.readFileSync('message.txt', 'utf8');
// console.log(contents);
// console.log('all finished')

// #####################################################################################################

// var filepath = /home/aishwarya/nodejs/message.txt'
// console.log(path.basename(filepath)) //last portion of path
// console.log(path.dirname(filepath)) //directory name of path
// console.log(path.extname(filepath)) //extension of path
// console.log(path.format({        // method returns a path string from an object
//   root: '/ignored',
//   dir: /home/aishwarya/nodejs',
//   base: 'file.txt'
// }))

// console.log(path.isAbsolute(filepath)); //determines if a path is absolute path or not(true or false)

// console.log(path.join('/foo', 'bar', 'baz/asdf')) //forms path from small path segments with platform specific delimiter
// console.log(path.join(''))
// console.log(path.normalize('/foo/bar//baz/asdf/quux/..'))
// console.log(path.parse(/home/aishwarya/nodejs/file.txt'))
// console.log(filepath.split(path.sep))
// console.log(path.resolve('foo/bar')) //method resolves a sequence of paths or path segments into an absolute path.

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$44

// var readline = require('readline');
// var fs = require('fs');

// var myInterface = readline.createInterface({
//   input: fs.createReadStream('message.txt')
// });

// var lineno = 0;
// myInterface.on('line', function (line) {
//   lineno++;
//   console.log('Line number ' + lineno + ': ' + line);
// });

// myInterface.on('close', function() {
//   console.log('goodbye!');
  
// });

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

// const myURL = new URL('https://example.org/abc/xyz?123');
// console.log(myURL.hostname);
// console.log(myURL.href);
// console.log(myURL.pathname);
// console.log(myURL.protocol);
// console.log(myURL.search);


var http = require('http');
var url = require('url');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var q = url.parse(req.url, true).query;
  var txt = q.year + " " + q.month;
  res.end(txt);
}).listen(8080);