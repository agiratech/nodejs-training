var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var dbo=null;

exports.conection=function(){
	if(dbo!=null) return 
  	MongoClient.connect(url, function(err, db) {
	  	if (err) throw err;
	  	dbo = db.db("mydb");
	});
}

exports.get = function (){
	return dbo;	
}
