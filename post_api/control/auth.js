var dbconn = require('../model/dbconnect.js')
var resjson ={
    "status": 0,
    "type": "a",
    "details": {
      "description": "",
      "posts": []
    }
  }

exports.check = function (req,res,next) {
    var token = req.headers.token
    dbconn.get().collection("users").findOne({"token": token},function(err,result){
		if(err) throw err;

		if (result === null || req.headers.token.length == 0){
            resjson.details.description ="please login to Continue "
            resjson.type ="Error"
            resjson.status = 404
              res.send(resjson);
        }
    if (result != null) 
        {
            res.locals.result = result
        	next()
        }
    });
}