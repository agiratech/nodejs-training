var fileSystem = require("fs");
 
fileSystem.readFile('hi.txt', function(error, filedata) {
	if (error){
		return console.error(error);
	}
	console.log(filedata.toString());
});
 
console.log("Program has successfully ended");