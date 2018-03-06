var async = require('async');
var fs = require('fs')


var openFiles = ['firsst.js', 'ccode.js', 'chk.js'];

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


//*************************************************************************************//


async.eachLimit(openFiles, 2, function(data, callback){
	console.log('fileName:'+data+'\n');
	// callback();
	if( data.length > 32 ) {
      console.log('This file name is too long');
      callback('A name too long Error');
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

//*************************************************************************************//

async.eachSeries(openFiles, function(data, callback){
  console.log('fileName:'+data+'\n');
  // console.log('callback:'+callback+'\n');
  // callback();
  if( data.length > 32 ) {
      console.log('This file name is too long');
      callback('A name too long Error');
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




//*************************************************************************************//

