var dbconn = require('../config/mongoconnect.js')

exports.create = function(collection_name,data){	
	dbconn.get().collection(collection_name).insertOne(data, function(err, res){
		if (err) throw err
	})
}

exports.user_logincheck = function(data,callback){	
	dbconn.get().collection("users").findOne({"username": data.username,"password":data.password},function(err,res){
		if (err) throw err
		callback(res)
	})
}
exports.user_read = function(callback){	
	dbconn.get().collection("users").find({},{"password":0,"token":0}).toArray(function(err, result) {
		if (err) throw err;
		callback(result)
	})
}
exports.user_list = function(username,callback){	
	dbconn.get().collection("users").find({"username": username}).toArray(function(err, result){
		if (err) throw err;
		callback(result)
	})
}

exports.update = function(collection_name,qset,newvalues){
	console.log(collection_name,qset,newvalues)	
	dbconn.get().collection(collection_name).update(qset,newvalues)
}

exports.delete = function(collection_name,qset,callback){
	dbconn.get().collection(collection_name).deleteOne(qset, function(err, obj) {
		if (err) throw err;
		if(!err){
			callback()
		}
	})
}
exports.deleteposts = function(collection_name,qset,callback){
	dbconn.get().collection("posts").deleteMany({"user_id":user_id}, function(err, res) {
		if (err) throw err;
		if(!err){
			callback(res)
		}
	})
}
exports.findOne = function(collection_name,data,callback){	
	dbconn.get().collection("posts").findOne(data,function(err,res){
	if (err) throw err
	callback(res)
	})
}

exports.post_read = function(callback){	
	dbconn.get().collection("posts").find({},{"_id":0}).sort({"date_time": -1}).toArray(function(err, result) {
		if(err) throw err
		if(result.length >0){
			callback(result)
		}
	})
}
exports.user_profile = function(myquery,callback){	
	dbconn.get().collection("users").findOne(myquery,{"password":0}, function(err, result) {
		if(err) throw err
		callback(result)
	})
}

exports.user_posts = function(user_id,callback){	
	dbconn.get().collection("posts").find({"user_id":user_id}).sort({"date_time": -1}).toArray(function(err, result) {
		if(err) throw err
		callback(result)
	})
}
