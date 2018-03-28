var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var dbo=null;
exports.connection=function()
{
    if(dbo!=null) return 

  MongoClient.connect(url, function(err, db)
 	{
	   if (err) throw err;
	   dbo = db.db("hospital_api");
	});
}
var get = function (){
    return dbo;
}
exports.find=function(search,callback)
{
	get().collection("hospital").find(search).toArray(function(err,result)
	{
		// console.log(collections)
		// console.log(key)
		// console.log(value)
		if(err) throw err;
		console.log(result)
		callback(result)
	})
}
exports.insert=function(collection,req,callback)
{
	get().collection(collection).insertOne(req, function(err,result)
    {
    if(err) throw err;
    callback(req)
    });
}
