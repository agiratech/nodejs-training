var ObjectId = require('mongodb').ObjectId;
var dbconn = require('../model/dbconnect.js')
var randtoken = require('rand-token');
var Cryptr = require('cryptr'),
cryptr = new Cryptr('RajeshKumar');
var resjson ={
  "status": 0,
  "type": "a",
  "details": {
    "description": "a"
  }
}
exports.user_login = function(req,res){
	var myobj = req.body
	myobj.password = cryptr.encrypt(myobj.password)
	dbconn.get().collection("users").findOne({"username": req.body.username,"password":req.body.password},function(err, result){
  		if (err) throw error;
  		if(result != null){
        var temp = result.password
  		  // var check = result.token
        var dbpassword = temp
        console.log(dbpassword)
        var token = randtoken.generate(20);
          if(result.token != undefined){
        if(result.token != ""){
        resjson.details.description ="user already Logged in"
        resjson.type ="Error"
        resjson.status = 404
        res.send(resjson)
      }
      if(result.token == ""){
  			dbconn.get().collection("users").update({"username": req.body.username},{$set:{"token": token}})
        resjson.details.description =req.body.username + " is Online"
        resjson.type ="Success"
        resjson.status = 200
        res.send(resjson)
      }
  	}
    if(result.token == undefined){
        dbconn.get().collection("users").update({"username": req.body.username},{$set:{"token": token}})
        resjson.details.description =req.body.username + " is Online"
        resjson.type ="Success"
        resjson.status = 200
        res.send(resjson)
      }

  }
      if(result == null ){
        resjson.details.description ="you are not an authourized user"
        resjson.type ="Error"
        resjson.status = 404
        res.send(resjson)
      }
  })
}
