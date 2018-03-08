var async = require('async');
var fs = require('fs');

async.map(['01-03-2018', 'message.txt'], function(file, callback){
fs.stat(file, function(err, stats){
	callback(err, stats)	
});
 
},  
  function(err, results) {

    console.log(results);
});