//ASYNC_FILTERSERIES
var filePath = "/home/aishwarya/nodejs/"
async.filterSeries(['hi.txt','message.txt','news.txt'], function(filePath, callback) {
    fs.access(filePath, function(err) {
        callback(null, !err)
    });
}, function(err, results) {
    // results now equals an array of the existing files
    console.log(results);
});
