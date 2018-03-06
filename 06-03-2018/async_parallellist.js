var async = require('async');

var tasks = [
    function(callback) {
        setTimeout(function() {
            callback(null, 'hi.txt');
        }, 200);
    },
    function(callback) {
        setTimeout(function() {
            callback(null, 'message.txt');
        }, 100);
    },


// optional callback
// function(err, results) {
//     // the results array will equal ['one','two'] even though
//     // the second function had a shorter timeout.
//     console.log(results);
// };

// an example using an object instead of an array
// async.parallel({
    function(callback) {
        setTimeout(function() {
            callback(null, 1);
        }, 50);
    },
     function(callback) {
        setTimeout(function() {
            callback(null, 2);
        }, 100);
    }]
// }, function(err, results) {
//     // results is now equals to: {one: 1, two: 2}
async.parallelLimit(tasks, 1, function (err, results) {
    console.log(results)
// });
});