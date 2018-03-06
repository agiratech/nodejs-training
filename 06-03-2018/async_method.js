//ASYNC_SORTBY
var async = require("async");
var fs = require("fs");
// async.sortBy(['hi.txt','message.txt','new.txt'], function(file, callback) {
//     fs.stat(file, function(err, stats) {
//         callback(err, stats.mtime);
//     });
// }, function(err, results) {
//     // results is now the original array of files sorted by
//     // modified date
//     console.log(results);
// });

// By modifying the callback parameter the
// sorting order can be influenced:

// ascending order
// async.sortBy(['a', 'b', 'q', 'c', 'f'], function(x, callback) {
// 	console.log(x);
//     callback(null, x);
// }, function(err,result) {
//    	console.log(result);
//     // result callback
// });

// descending order
// async.sortBy([1,9,3,5], function(x, callback) {
// 	console.log(x);
//     callback(null, x*-1);    //<- x*-1 instead of x, turns the order around
// }, function(err,result) {
//     // result callback
//     console.log(result);
// });
//ASYNC_FILTERSERIES
// var filePath = "/home/aishwarya/nodejs/"
// async.filterSeries(['hi.txt','message.txt','news.txt'], function(filePath, callback) {
//     fs.access(filePath, function(err) {
//         callback(null, !err)
//     });
// }, function(err, results) {
//     // results now equals an array of the existing files
//     console.log(results);
// });
//ASYNC_DURING
// var count = 0;
// async.during(
//     function (callback) {
//         return callback(null, count <= 5);
//     },
//     function (callback) {
//         count++;
//         setTimeout(callback, 1000);
//         console.log("The result is executed in every 1000 milliseconds and the number of iterations are : " +count)
//     },
//     function (err) {
//         // 5 seconds have passed
//     }
// );
//ASYNC_MAPVALUES
// async.mapValues({
//     f1: 'hi.txt',
//     f2: 'message.txt',
//     f3: 'new.txt'
// }, function (file, key, callback) {
//   fs.stat(file, callback);
// }, function(err, result) {
// 	console.log(result)
// });
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