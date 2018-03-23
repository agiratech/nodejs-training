var dbconn = require('../model/dbconnect.js')
var resjson ={
    "status": 0,
    "type": "",
    "details": {
      "description": "",
      "validations": []
    }
  }
 flag = 0;
var ObjectId = require('mongodb').ObjectId;
const isHex = require('is-hex')
exports.post_delete = function(req,res,result){
	var myobj = req.body
	var token = req.headers.token
	var result = res.locals.result
	if (result != null && myobj.post_id.length == 24 && isHex(myobj.post_id)){
		var curr_uname = result.username
		var curr_id = new ObjectId(result._id)
		// var count = Object.keys(myobj).length;
		// p_id = "ObjectId('" + req.body.post_id + "')"
		p_id = new ObjectId(req.body.post_id)
		// console.log(p_id)
		dbconn.get().collection("posts").findOne({"_id": p_id},function(err,result){
			console.log(result)
			if(result === null){
				resjson.details.description ="There is no such post to delete"
				resjson.type ="Error"
		    	resjson.status = 400
				res.send(resjson)
			}
			else{
				var p_userid = new ObjectId(result.user_id)
				console.log(result.user_id)
				console.log("post found")
				console.log(curr_id)
				dbconn.get().collection("posts").findOne({"_id": p_id,"user_id":curr_id},function(err,result){
					if(result === null){
						resjson.details.description ="This post is not created by this user"
						resjson.type ="Error"
				    	resjson.status = 400
				 		res.json(resjson);
					}
					if(result != null){
						dbconn.get().collection("posts").deleteOne({"_id": p_id},function(err,result){
						resjson.details.description ="Post has been deleted"
						resjson.type ="Success"
				    	resjson.status = 200
				 		res.json(resjson);
						})
					}

				})


	}
})

}
else{
	resjson.details.description ="There is no such post to delete"
	resjson.type ="Error"
	resjson.status = 400
	res.send(resjson)
}
}