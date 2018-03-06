//ASYNC_SOME
var filePath = "/home/aishwarya/nodejs-training"
async.some(['hii.txt','news.txt','test.js'], function(filePath, callback) {
    fs.access(filePath, function(err) {
        callback(null, !err)
    });
}, function(err, result) {
    // if result is true then at least one of the files exists
    console.log(result);
});