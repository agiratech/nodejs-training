var ObjectId = require('mongodb').ObjectId;
var dbconn = require('../model/dbconnect.js')
var validator = require('validator');
var Cryptr = require('cryptr'),
cryptr = new Cryptr('RajeshKumar');
var resjson ={
  "status": 0,
  "type": "a",
  "details": {
    "description": "",
    "validations": []
  }
}

exports.user_update = function(req,res,result){
  var myquery = { token: req.headers.token };
  var myobj = req.body
  var newvalues = { $set: myobj };
  var count = Object.keys(myobj).length;
  console.log(req.headers.token.length)
  var flag = 0;
  for(i in myobj){
			resjson.type ="Error"
        	resjson.status = 404
			console.log(i)
	if(i === "first_name"){
		count = count - 1;
		console.log("fname")
	 	if (myobj.first_name === '' || myobj.first_name === undefined || !validator.isAlpha(myobj.first_name)){
	 		flag = 1;
			resjson.details.validations.push("Enter the First name properly")
	}
	}
	else if(i === "last_name"){
		count -= 1;
		console.log("lname")
		if ( !validator.isAlpha(myobj.last_name) && myobj.last_name !=""){
			flag = 1;
			resjson.details.validations.push("Enter the Last name properly")
	}
	}
	else if(i === "username"){
		count -= 1;
		console.log("uname")
			flag = 1;
			resjson.details.validations.push("Username Cannot be changed")
	}
	else if(i === "password"){
		count -= 1;
		console.log("pwd")
		if (myobj.password === '' || myobj.password === undefined || myobj.password.length < 5){
			flag = 1;
			resjson.details.validations.push("Enter the password properly, atleast 5 characters")
	}
	myobj.password = cryptr.encrypt(myobj.password)
}
    console.log(count)
}
	if(resjson.details.validations.length !=0 || flag == 1){
		res.send(resjson);
	}
	if (count == 0 && flag== 0){
	dbconn.get().collection("users").update({"token": req.headers.token},{$set: myobj})
    // delete resjson.details.validations;
    resjson.details.description ="This user account has been updated"
    resjson.type ="Success"
    resjson.status = 200
    res.send(resjson);
    }
    if (count != 0){
		resjson.details.description ="please enter only required fields"
		resjson.type ="Error"
    	resjson.status = 400
 		res.send(resjson);
    }




}
