var async = require('async');
var fs = require('fs')

var filePath = '/home/rajeshkumarj/Node_js';
async.filter(['code.js','first.js','sample.txt'], function(filePath, callback) {
// async.filter(['code.js','first.js','samp.txt'], function(filePath, callback) {
    fs.access(filePath, function(err) {
        callback(null, !err)
    });
}, function(err, result) {
      console.log(result)
});

//*************************************************************************************//

var filePath = '/home/rajeshkumarj/Node_js';
async.filterSeries(['code.js','first.js','sample.txt'], function(filePath, callback) {
    fs.access(filePath, function(err) {
        callback(null, !err)
    });
}, function(err, result) {
      console.log(result)
});

//*************************************************************************************//

var filePath = '/home/rajeshkumarj/Node_js';
async.filterLimit(['code.js','first.js','sample.txt'], 1, function(filePath, callback) {
    fs.access(filePath, function(err) {
        callback(null, !err)
    });
}, function(err, result) {
      console.log(result)
});
