var ObjectId = require('mongodb').ObjectId;
var dbconn = require('../model/dbconnect.js')

exports.user_profile = function(req,res,result){
	var resjson ={
  "status": 0,
  "type": "a",
  "details": {
    "user_details": {},
    "description": "",
    "posts": []
  }
}
  var myobj = req.headers.token
  var myquery = { "token": myobj };
  console.log(myobj)
  var result = res.locals.result
      user_id = result._id
    console.log(user_id)
    dbconn.get().collection("users").findOne(myquery,{"password":0}, function(err, obj) {
      if (err) throw err;
  	  resjson.details.user_details = obj
      if(!err){
      dbconn.get().collection("posts").find({"user_id":user_id}).sort({"date_time": -1}).toArray(function(err, obj) { 
        console.log(obj.length)
        if (obj.length === 0) {
          resjson.details.description =" there is no post, posted by this user"
          resjson.type ="Success"
          resjson.status = 200
          res.send(resjson)
        }
        if(obj.length >0){
          console.log("elsepart")
	        resjson.details.description ="You have been posted "+ obj.length +" posts so far"
          resjson.details.posts.push(obj)
          resjson.type ="Success"
        resjson.status = 200
        res.send(resjson)
        }
      })
      }
    });
}
