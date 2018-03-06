var async = require('async');
async.parallel([
    function(callback) {
        setTimeout(function() {
            callback(null, 'hi.txt');
        }, 200);
    },
    function(callback) {
        setTimeout(function() {
            callback(null, 'message.txt');
        }, 1);
    }
],
// optional callback
function(err, results) {
    // the results array will equal ['one','two'] even though
    // the second function had a shorter timeout.
    console.log(results);
});

// an example using an object instead of an array
async.parallel({
    one: function(callback) {
        setTimeout(function() {
            callback(null, 1);
        }, 50);
    },
    two: function(callback) {
        setTimeout(function() {
            callback(null, 2);
        }, 1);
    }
}, function(err, results) {
    // results is now equals to: {one: 1, two: 2}
    console.log(results)
});