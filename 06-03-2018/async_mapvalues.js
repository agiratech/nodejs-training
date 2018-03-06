//ASYNC_MAPVALUES
async.mapValues({
    f1: 'hi.txt',
    f2: 'message.txt',
    f3: 'new.txt'
}, function (file, key, callback) {
  fs.stat(file, callback);
}, function(err, result) {
	console.log(result)
});