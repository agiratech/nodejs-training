var async = require('async');
async.series([
    function(callback) {
        setTimeout(function()
        {
            callback(null, 'one');
        }, 100)
        
    },
    function(callback) {
        setTimeout(function()
        {
            callback(null, 'two')
        }, 50)
        
    }
],
function(err, results) {
    console.log(results)
});

async.series({
    one: function(callback) {
        setTimeout(function() {
            callback(null, 1);
        }, 200);
    },
    two: function(callback){
        setTimeout(function() {
            callback(null, 2);
        }, 100);
    }
}, function(err, results) {
    console.log(results)
});