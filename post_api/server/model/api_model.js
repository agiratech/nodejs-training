var dbconn = require('../config/mongo.connect.js')
function create(collection_name,data){	
	dbconn.get().collection(collection_name).insertOne(data, function(err, res){
		if (err) throw err
	})
}
function user_logincheck(data,callback){	
	dbconn.get().collection("users").findOne({"username": data.username,"password":data.password},function(err,res){
		if (err) throw err
		callback(res)
	})
}
function user_read(callback){	
	dbconn.get().collection("users").find({},{"password":0,"token":0}).toArray(function(err, result) {
		if (err) throw err;
		callback(result)
	})
}
function user_list(username,callback){	
	dbconn.get().collection("users").find({"username": username}).toArray(function(err, result){
		if (err) throw err;
		callback(result)
	})
}
function update(collection_name,qset,newvalues){
	console.log(collection_name,qset,newvalues)	
	dbconn.get().collection(collection_name).update(qset,newvalues)
}
function deletes(collection_name,qset,callback){
	dbconn.get().collection(collection_name).deleteOne(qset, function(err, obj) {
		if (err) throw err;
		if(!err){
			callback()
		}
	})
}
function deleteposts(collection_name,qset,callback){
	dbconn.get().collection("posts").deleteMany({"user_id":user_id}, function(err, res) {
		if (err) throw err;
		if(!err){
			callback(res)
		}
	})
}
function findOne(collection_name,data,callback){	
	dbconn.get().collection("posts").findOne(data,function(err,res){
	if (err) throw err
	callback(res)
	})
}
function post_read(callback){	
	dbconn.get().collection("posts").find({},{"_id":0}).sort({"date_time": -1}).toArray(function(err, result) {
		if(err) throw err
		if(result.length >0){
			callback(result)
		}
	})
}
function user_profile(myquery,callback){	
	dbconn.get().collection("users").findOne(myquery,{"password":0}, function(err, result) {
		if(err) throw err
		callback(result)
	})
}
function user_posts(user_id,callback){	
	dbconn.get().collection("posts").find({"user_id":user_id}).sort({"date_time": -1}).toArray(function(err, result) {
		if(err) throw err
		callback(result)
	})
}
module.exports = {create,user_logincheck,user_read,user_list,update,deletes,deleteposts,findOne,post_read,user_profile,user_posts}