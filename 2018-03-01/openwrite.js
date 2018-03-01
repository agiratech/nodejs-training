//to open file

var fs = require('fs');

fs.open('hello.txt', 'w', function (err, file) {

  if (err) throw err;

  console.log('Saved!');

}); 


//write to file

fs.writeFile('hello.txt', 'Hello content!', function (err) {

  if (err) throw err;

  console.log('Saved!');

}); 
