var ObjectId = require('mongodb').ObjectId;
var dbconn = require('../model/dbconnect.js')
var moment = require('moment');
var validator = require('validator');
var db;
const isHex = require('is-hex')
var resjson ={
  "status": 0,
  "type": "a",
  "details": {
    "description": "",
    "validations": []
  }
}
var mynewobj = {}
var flag = 0;

exports.post_update = function(req,res,result){
	var date = moment().format('LLL');
	var myobj = req.body
	var token = req.headers.token
	var result = res.locals.result
	if(myobj.post_id == undefined){
		resjson.details.description ="please enter the post id"
				resjson.type ="Error"
		    	resjson.status = 400
				res.send(resjson)
	}
	if (result != null && myobj.post_id.length == 24 && isHex(myobj.post_id)){
		var curr_uname = result.username
		var curr_id = result._id
		var count = Object.keys(myobj).length;
		// p_id = "ObjectId('" + req.body.post_id + "')"
		p_id = new ObjectId(req.body.post_id)
		dbconn.get().collection("posts").findOne({"_id": p_id},function(err,result){
			if(result === null){
				resjson.details.description ="There is no such post to update"
				resjson.type ="Error"
		    	resjson.status = 400
				res.send(resjson)
			}
			else
			{
				for(i in myobj){
					if(i === "title"){
						count = count - 1;
						mynewobj.title = myobj.title
						if (myobj.title ==="" || myobj.title === undefined){
							flag = 1
							console.log("checking Title") 
							resjson.details.validations.push("Please enter some Title")
							}
						}	
					if(i === "message"){
						count = count - 1;
						mynewobj.message = myobj.message
						if (myobj.message ==="" || myobj.message === undefined){
							flag = 1
							console.log("checking message") 
							resjson.details.validations.push("Please enter some message")
							}
					}
}
	if(resjson.details.validations.length !=0 || flag == 1){
		res.send(resjson);
	}
	
	if (count == 1 && flag== 0){
		console.log("entered")
		
		// mynewobj.updated_time.push(date)
		// myobj.user_id = curr_id
		console.log(new ObjectId(req.body.post_id))
    	dbconn.get().collection("posts").findOne({"_id": p_id,"user_id": curr_id}, function(err,result){
    		if(result === null){
    			resjson.details.description ="This post is not created by this user"
				resjson.type ="Error"
		    	resjson.status = 400
		 		res.json(resjson);
    		}
    		else{
    			dbconn.get().collection("posts").updateOne({"_id": p_id,},{$push: {"updated_time": date}, $set: mynewobj})
    			resjson.details.description ="Post has been updated"
				resjson.type ="Success"
		    	resjson.status = 200
		 		res.json(resjson);
    		}
    	}) 
    	
		}
		if (count != 1){
			resjson.details.description ="Enter only required fields"
			resjson.type ="Error"
	    	resjson.status = 400
	 		res.json(resjson);
		}
}
})
}
else{
	resjson.details.description ="There is no such post to update"
	resjson.type ="Error"
	resjson.status = 400
	res.send(resjson)
}
}
