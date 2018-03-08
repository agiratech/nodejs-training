var async = require("async");
var fs = require("fs");
async.parallel([
    async.reflect(function(callback) {
        // do some stuff ...
        callback(null, 'one');
    }),
    async.reflect(function(callback) {
        // do some more stuff but error ...
        callback('bad stuff happened');
    }),
    async.reflect(function(callback) {
        // do some more stuff ...
        callback(null, 'two');
    })
],
// optional callback
function(err, results) {
    
    console.log(results);
});
