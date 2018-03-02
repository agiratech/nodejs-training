 var fs = require("fs");
// var buf = new Buffer(150);

// console.log("Going to open an existing file");
// fs.open('hi.txt', 'r+', function(err, fd) {
//    if (err) {
//       return console.error(err);
//    }
//    console.log("File opened successfully!");
//    console.log("Going to read the file");
//    fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
//       if (err){
//          console.log(err);
//       }
//       console.log(bytes + " bytes read");
      
//       // Print only read bytes to avoid junk.
//       if(bytes > 0){
//          console.log(buf.slice(0, bytes).toString());
//       }
//    });
// });
//***************************************************************************************************************************
//Asynchronous readdir
// const Path = require('path');

// fs.readdir('01-03-2018', function(err, data){
// 	if (err){
// 		console.log(err);

// 	}
// 	console.log(data);
// 	var s = __dirname
// 	console.log(s);
// } );


//***************************************************************************************************************************
//Synchronous readdir
// const Path = require('path');

// fs.readdirSync('01-03-2018')
// 	var s = __dirname
// 	console.log(s);
//***************************************************************************************************************************
//Asynchronous write
// fs.open("new.txt", 'w+', function(err, fd) {
//    if (err) {
//       return console.error(err);
//    }
//    console.log("Data is written")
// fs.write(fd, 'This is node js programming', 0, function(err, data)
// {
// if (err)
// {
// 	console.error(err);
// }
// console.log(data);
// console.log("File changed")
// });
// });
//***************************************************************************************************************************
//Synchronous write
fs.open("new.txt", 'w+', function(err, fd) {
   if (err) {
      return console.error(err);	
   }
   console.log("Data is written")
fs.write(fd, 'This is node js programming aish', 0);
console.log("File changed")
});

