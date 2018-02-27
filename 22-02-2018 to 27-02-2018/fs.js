var fileSystem = require("fs");
 
var filedata = fileSystem.readFileSync('hi.txt');
 
console.log(filedata.toString());
 
console.log ("Program has successfully ended!");