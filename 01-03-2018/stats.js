var fs = require('fs');
//*******************************************************************************
fs.stat('hello.txt', function (err, stats) {
    if (err) {
        return console.error(err);
    }
    console.log(stats);
    console.log("isFile ? " + stats.isFile());
    console.log("isDirectory ? " + stats.isDirectory());  
    console.log("isBlockDevice ? " + stats.isBlockDevice());  
    console.log("isCharacterDevice ? " + stats.isCharacterDevice());  
    console.log("isSymbolicLink ? " + stats.isSymbolicLink());  
    console.log("isFIFO ? " + stats.isFIFO());  
    console.log("isSocket ? " + stats.isSocket());  

 });
//*******************************************************************************
//Rename Asynchronous
fs.rename('message1.txt', 'message.txt', (err) => {
    if (err)
        throw err;
    console.log('File renamed successfully');
});
//Rename Synchronous
fs.renameSync('message1.txt', 'message.txt');
console.log('File renamed successfully')
// *******************************************************************************
//Copying one file to the other
fs.copyFile('hi.txt', 'new.txt', (err) => {
    if (err) throw err;
    console.log('source.txt was copied to destination.txt');
});
// *******************************************************************************
//Watch Asynchronous
fs.watch(filePath, function() {
    console.log('File Changed ...');
    file = fs.readFileSync(filePath);
    console.log('File content at : ' + new Date() + ' is \n' + file);
});
// *******************************************************************************
// Lstat
fs.lstat('hi.txt', function(err, stats) {
    console.log(stats.isSymbolicLink());
});
