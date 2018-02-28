var fs = require('fs');
// console.log(fs.readFileSync('/home/rajeshkumarj/Node_js/sample.txt','utf-8'));
	f = fs.stat('/home/rajeshkumarj/Node_js/sample.txt', function (err, stats){
		console.log(stats.isFile());
		console.log(stats.isDirectory());
		console.log(stats);		
	});