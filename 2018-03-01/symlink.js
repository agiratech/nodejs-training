
//changing modes of file

var fs = require('fs');
fs.chmod('sample.txt', 0777, function (err){
    if (err) throw err;
});
    console.log("changed");

// symlink and append


var fs = require('fs');
fs.symlink('sample.txt','link.txt', function (err, data){

    if (err) throw err;
});
    console.log("changed");


var fs = require('fs');
fs.appendFile('sample.txt','\nthis is appended to the file', function (err, data){
    if (err) throw err;
});
    console.log("text appended");



    //watch

   var fs = require('fs');
fs.watch('samp2.txt', function(){
    // if (err) throw err;
    console.log("file tracking");
    var f = fs.readFileSync("samp2.txt");
    console.log("the file changed at"+ Date() + "\n" ,f.toString());
});
console.log("started");