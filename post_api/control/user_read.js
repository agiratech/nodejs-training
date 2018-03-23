var ObjectId = require('mongodb').ObjectId;
var dbconn = require('../model/dbconnect.js')
var resjson ={
  "status": 0,
  "type": "a",
  "details": {
    "description": "a"
  }
}

exports.user_read = function(req,res,result){
	dbconn.get().collection("users").find({},{"password":0,"token":0}).toArray(function(err, result) {
    if (err) throw err;
    if (result.length > 0 ){
    	resjson.details.description =result
        resjson.type ="Success"
        resjson.status = 200
        res.send(result)
    }
    else{
    	resjson.details.description ="There is no user to show"
        resjson.type ="Error"
        resjson.status = 401        
	    res.send(result)
    }
  });
}