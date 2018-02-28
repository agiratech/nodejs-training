   //All read operations, unlink, rename, mkdir 
// readFile Synchronous and Asynchronous
var fs = require("fs");

// Asynchronous read
fs.readFile('hi.txt', function (err, data) {
  if (err) {
      return console.error(err);
  }
  console.log("Asynchronous read: " + data.toString());
});

// Synchronous read
var data = fs.readFileSync('hi.txt')
  console.log("Asynchronous read: " + data.toString());

Asynchronous - Opening File  

var fs = require("fs");  
    // Asynchronous - Opening File  
    console.log("Going to open file!");  
    fs.open('hi.txt', 'rs+', function(err, fd) {  
       if (err) {  
           return console.error(err);  
       }  
      console.log("File opened successfully!");       
    });  

var readStream = fs.createReadStream('message.txt');
readStream.on('data', function (chunk) {
      console.log(chunk.toString())
      console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^6')
   
  })
  .on('end', function () {
    console.log('file ended');
  });

  fs.access('/home/aishwarya/nodejs/28-02-2018',function(err){
    if(err && err.code === 'ENOENT'){
        fs.mkdir('/home/aishwarya/nodejs/28-02-2018',function(err){
            if (err ) {
                return console.error(err);
            }
            console.log("Directory created successfully!");
        })
    }
    else{
        fs.readdir("/home/aishwarya/nodejs/28-02-2018",function(err, files){
            if (err) {
            return console.error(err);
            }
            files.forEach( function (file){
            console.log( file );
            });
        });
    }
});

fs.rename('message1.txt', 'message.txt', (err) => {
	if (err)
		throw err;
	console.log('File renamed successfully');
});

fs.renameSync('data.txt', 'new_data.txt');

fs.unlink('message.txt', (err) => {
	if (err) 
		throw err;
	console.log('It\'s Deleted!');
})
console.log("This method is ");
