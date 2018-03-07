async.reduceRight([1,2,3], 8, function(memo, item, callback) {
    process.nextTick(function() {
        console.log(item)
        console.log(memo)
        callback(null, memo + item)
    });
}, function(err, result) {
     console.log(result)
});

//*************************************************************************************//

async.reduce([1,2,3], 8, function(memo, item, callback) {
    process.nextTick(function() {
        console.log(item)
        console.log(memo)
        callback(null, memo + item)
    });
}, function(err, result) {
     console.log(result)
});