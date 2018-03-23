var ObjectId = require('mongodb').ObjectId;
var dbconn = require('../model/dbconnect.js')
var validator = require('validator');
var flag = 0;
var Cryptr = require('cryptr'),
cryptr = new Cryptr('RajeshKumar');


exports.user_create = function(req,res,result){
	var mynewobj = {}
	var resjson ={
  "status": 0,
  "type": "a",
  "details": {
    "description": "",
    "validations": []
  }
}
var flag = 0;
var myobj = req.body
var count = Object.keys(myobj).length;
	// myobj.password = cryptr.encrypt(myobj.password)
  	dbconn.get().collection("users").find({"username": req.body.username}).toArray(function(err, result){
  		if (err) throw error;
	if(result.length > 0){
		// console.log(result.length)
		resjson.details.validations.push("Username already exists")
		flag = 1;
        resjson.type ="Error"
        resjson.status = 404
        // res.send(resjson);
	}
	if(true){
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
	mynewobj.first_name = myobj.first_name
	}
	else if(i === "last_name"){
		count -= 1;
		console.log("lname")
		if ( !validator.isAlpha(myobj.last_name) && myobj.last_name !=""){
			flag = 1;
			resjson.details.validations.push("Enter the Last name properly")
	}
	mynewobj.last_name = myobj.last_name
	}
	else if(i === "username"){
		count -= 1;
		console.log("uname")
		if (myobj.username === '' || myobj.username === undefined || myobj.username.length < 5){
			flag = 1;
			resjson.details.validations.push("Enter the username properly")
	}
	mynewobj.username = myobj.username
	}
	else if(i === "confirm_password"){
		count -= 1;
		console.log("confpwd")
		console.log()
		console.log("confpwd")
		if (myobj.password !=  myobj.confirm_password){
			flag = 1;
			resjson.details.validations.push("Password mismatch")
	}
	}
	else if(i === "password"){
		count -= 1;
		console.log("pwd")
		if (myobj.password === '' || myobj.password === undefined || myobj.password.length < 5){
			flag = 1;
			resjson.details.validations.push("Enter the password properly, atleast 5 characters")
	}
	mynewobj.password = myobj.password
	}
    console.log(count)
}
	if(resjson.details.validations.length !=0 || flag==1){
		res.json(resjson);
	}
if (count == 0 && flag== 0){
	mynewobj.password = cryptr.encrypt(myobj.password)
	dbconn.get().collection("users").insertOne(mynewobj, function(err, res){
		if (err) throw err
	})
    resjson.details.validations= [];
    resjson.details.description ="This user account has been Created"
    resjson.type ="Success"
    resjson.status = 200
    res.json(resjson);
    }	
    if (count != 0 && flag == 0){
		resjson.details.description ="please enter only required fields"
		resjson.type ="Error"
    	resjson.status = 400
 		res.json(resjson);
    }

}
  	})
}
