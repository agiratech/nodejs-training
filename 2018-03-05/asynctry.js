var async = require('async');
var fs = require('fs')
var openFiles = ['firsst.js', 'ccode.js', 'chk.js'];

var readFile = function (data,callback) {
	
		// console.log(data);
		fs.readFile(data, function (err,data){
			// if (err) throw err
			console.log(data);
		})

	callback();
}

async.each(openFiles, readFile, function(err){
  // if(err) throw err;

});



async.each(openFiles, function(data, callback){
	console.log('fileName:'+data+'\n');
	// callback();
	if( data.length > 32 ) {
      console.log('This file name is too long');
      callback('name too long');
    } else {
      console.log('File processed');
      callback();
    }
}, function(err) {
    if( err ) {
      console.log(err)
      console.log('A file failed to process');
    } else {
      console.log('All files have been processed successfully');
    }
});





async.each(saveFile, function() {
	console.log("file saved");
});

assuming openFiles is an array of file names
async.each(openFiles, function(data, callback) {

    console.log('Processing file ' + data);

    if( data.length > 32 ) {
      console.log('This file name is too long');
      callback('File name too long');
    } else {
      // Do work to process file here
      console.log('File processed');
      callback();
    }
}, function(err) {
    if( err ) {
      console.log('A file failed to process');
    } else {
      console.log('All files have been processed successfully');
    }
});



var fs = require('fs')
var async = require('async-each');
async(['first.js', 'code.js', 'chk.js'], fs.readFile, function(error, contents) {
  if (error) console.error(error);
  console.log('Contents for a, b and c:', contents.toString());
});