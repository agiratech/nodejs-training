var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var dbo=null;
exports.connection=function(){
  if(dbo!=null) return 
  MongoClient.connect(url, function(err, db) {
  	if (err) throw err;
  	dbo = db.db("postapi_db");
  	console.log("connected")
	});
}

exports.get = function (){
  return dbo;
}