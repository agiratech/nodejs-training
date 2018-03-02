
var fs = require('fs');
fs.readdir('webs', function(err, data){
	if (err){
		console.log(err);
	}
	var n = data.length;
	for(let i =0;i<n;i++){
		console.log(data[i]);
		console.log("\n")
	}
	
	console.log(__dirname);
});
