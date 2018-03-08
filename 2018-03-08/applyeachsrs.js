var openFiles = ['test.html', 'code.js', 'chk.js'];
var a1 = function(item,callback){
  console.log(item+" from a1")
  fs.stat(item, function(err,stats){
    if (err){ callback("err file name")}
    else{
      console.log(stats);
    } 
  })
  callback()
}

var a2 = function(item,callback){
  console.log(item+" from a2")
  fs.readFile(item, function(err,data){
    if (err){ callback("err file name")}
    else {
      console.log(data.toString() + '\n\n\n');
    }
  })
  callback()
}

// var buckets = [1,2,3];
async.eachSeries(openFiles,async.applyEachSeries([a1,a2]), function(err){
  console.log(err);
})
console.log("completed")