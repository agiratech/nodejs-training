

async.reject(['cqode.js','first.js','sample.txt'], function(filePath, callback) {
// async.filter(['code.js','first.js','samp.txt'], function(filePath, callback) {
    fs.access(filePath, function(err) {
        callback(null, !err)
    });
}, function(err, result) {
      console.log(result)
});



async.rejectLimit(['cqode.js','first.js','sample.txt'],2, function(filePath, callback) {
// async.filter(['code.js','first.js','samp.txt'], function(filePath, callback) {
    fs.access(filePath, function(err) {
        callback(null, !err)
    });
}, function(err, result) {
      console.log(result)
});




async.rejectSeries(['cqode.js','first.js','sample.txt'], function(filePath, callback) {
// async.filter(['code.js','first.js','samp.txt'], function(filePath, callback) {
    fs.access(filePath, function(err) {
        callback(null, !err)
    });
}, function(err, result) {
      console.log(result)
});
