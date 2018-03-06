//ASYNC_SORTBY
var async = require("async");
var fs = require("fs");
async.sortBy(['hi.txt','message.txt','new.txt'], function(file, callback) {
    fs.stat(file, function(err, stats) {
        callback(err, stats.mtime);
    });
}, function(err, results) {
    // results is now the original array of files sorted by
    // modified date
    console.log(results);
});

//By modifying the callback parameter the
//sorting order can be influenced:

//ASCENDING ORDER
async.sortBy(['a', 'b', 'q', 'c', 'f'], function(x, callback) {
	console.log(x);
    callback(null, x);
}, function(err,result) {
   	console.log(result);
    // result callback
});

//DESCENDING ORDER
async.sortBy([1,9,3,5], function(x, callback) {
	console.log(x);
    callback(null, x*-1);    //<- x*-1 instead of x, turns the order around
}, function(err,result) {
    // result callback
    console.log(result);
});
