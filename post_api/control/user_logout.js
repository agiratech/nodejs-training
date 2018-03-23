var dbconn = require('../model/dbconnect.js')
var resjson ={
  "status": 0,
  "type": "a",
  "details": {
    "description": "a"
  }
}

exports.user_logout = function(req,res,result){
	var myobj = req.headers.token
	console.log(myobj)
      console.log(result)
  			dbconn.get().collection("users").update({"token" : myobj },{$set:{"token": ""}})
				resjson.details.description ="The user is Logged out Successfully"
        resjson.type ="Success"
        resjson.status = 200
        res.json(resjson)
}