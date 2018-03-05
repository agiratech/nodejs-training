
var fs = require("fs");
fs.open("vamsi.txt", 'w+', function(err, fd) {
   if (err) {
      return console.error(err);	
   }
   console.log("Data is written")
fs.write(fd, 'This is vamsi', 0);
console.log("File changed")
});
