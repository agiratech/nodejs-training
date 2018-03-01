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
//*******************************************************************************