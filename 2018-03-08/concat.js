var dir = ['/home/rajeshkumarj/Node_js','/home/rajeshkumarj/Node_js/node_modules','/home/rajeshkumarj/Node_js/check'];
async.concat(openFiles, function(item,callback){
  fs.readFile(item, function(err,data){
    callback(null, data)
  })

}, function(err, files) {
    console.log(files);
});
