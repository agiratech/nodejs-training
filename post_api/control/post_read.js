var ObjectId = require('mongodb').ObjectId;
var dbconn = require('../model/dbconnect.js')
exports.post_read = function(req,res,result){
	var resjson ={
  "status": 0,
  "type": "",
  "details": {
    "description": "",
    "posts": []
  }
}
	var result = res.locals.result
	var token = req.headers.token	
		var curr_uname = result.username
		var curr_id = new ObjectId(result._id)
		dbconn.get().collection("posts").find({},{"_id":0}).sort({"date_time": -1}).toArray(function(err, result) {
    	if (err) throw err;
    	if(result.length >0){
		resjson.details.description =result.length +" posts so far"
          resjson.details.posts.push(result)
          resjson.type ="Success"
        resjson.status = 200
        res.send(resjson)  
        }  
  		})


}