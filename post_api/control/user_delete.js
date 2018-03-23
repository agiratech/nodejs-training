var ObjectId = require('mongodb').ObjectId;
var dbconn = require('../model/dbconnect.js')
exports.user_delete = function(req,res,result){
var resjson ={
  "status": 0,
  "type": "a",
  "details": {
    "description": ""
  }
}
  var result = res.locals.result
  var myobj = req.headers.token
  var myquery = { "token": myobj };
  console.log(myobj)
    console.log(result)
    user_id = result._id
    console.log(user_id)
    dbconn.get().collection("users").deleteOne(myquery, function(err, obj) {
      if (err) throw err;
  	console.log("entered")
      if(!err){
      dbconn.get().collection("posts").deleteMany({"user_id":user_id}, function(err, obj) { 
        console.log(obj.result.n)
        if (obj.result.n === 0) {
          resjson.details.description ="User is deleted but, there is no post by this user to delete"
          resjson.type ="Success"
          resjson.status = 200
          res.send(resjson)
        }
        if(obj.result.n >0){
          console.log("elsepart")
	    resjson.details.description ="Your user account and "+ obj.result.n +" post associated with this account has been deleted Successfully"
      resjson.type ="Success"
        resjson.status = 200
        res.send(resjson)
        }
      })
        
      }
    });
}