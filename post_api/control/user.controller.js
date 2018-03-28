var randtoken = require('rand-token');
var user_model = require('../model/api_model.js')
var validation = require('../service/validation.js')
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
exports.user_login = function(req,res){
	var myobj = req.body
	myobj.password = cryptr.encrypt(myobj.password)
	var token = randtoken.generate(20);
	var qset = {"username": myobj.username}
  var newvalues = { $set: {"token": token} }; 
	user_model.user_logincheck(myobj,function(result){
  		if(result != null){
        var dbpassword = result.password
        if(result.token != undefined){
        if(result.token != ""){
        resjson.details.description ="user already Logged in"
        resjson.type ="Error"
        resjson.status = 404
        res.send(resjson)
      }
      if(result.token == ""){
      	user_model.update("users",qset,newvalues)
        resjson.details.description =req.body.username + " is Online"
        resjson.type ="Success"
        resjson.status = 200
        res.send(resjson)
      }
  	}
    if(result.token == undefined){
      	user_model.update("users",qset,newvalues)
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
exports.user_delete = function(req,res){
  var result = res.locals.result
  var myobj = req.headers.token
  var myquery = { "token": myobj };
  console.log(myobj)
    console.log(result)
    user_id = result._id
    console.log(user_id)
    user_model.delete("users",myquery,function(){
      user_model.deleteposts("users",myquery,function(obj){ 
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
    })
}
exports.user_logout = function(req,res){
	var token = req.headers.token
	var qset = {"token": token}
  var newvalues = { $set: {"token": ""} };
		console.log(token)
  		user_model.update("users",qset,newvalues)
		resjson.details.description ="The user is Logged out Successfully"
        resjson.type ="Success"
        resjson.status = 200
        res.json(resjson)
}
exports.user_read = function(req,res){
	user_model.user_read(function(result) {
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
exports.user_update = function(req,res){
	resjson.details.description = ""
	resjson.details.validations.length = 0
  var myobj = req.body
  var qset = {"token": req.headers.token}
  var newvalues = { $set: myobj };
  var count = Object.keys(myobj).length;
  for(i in myobj){
			resjson.type ="Error"
        	resjson.status = 404
			console.log(i)
	if(i === "first_name"){
		count = count - 1;
		console.log("fname")
	 	if (validation.first_name(myobj.first_name)){
			resjson.details.validations.push("Enter the First name properly")
	}
	}
	else if(i === "last_name"){
		count -= 1;
		console.log("lname")
		if (validation.last_name(myobj.last_name)){
			resjson.details.validations.push("Enter the Last name properly")
	}
	}
	else if(i === "username"){
		count -= 1;
		console.log("uname")
			resjson.details.validations.push("Username Cannot be changed")
	}
	else if(i === "password"){
		count -= 1;
		console.log("pwd")
		if (validation.password(myobj.password)){
			resjson.details.validations.push("Enter the password properly, atleast 5 characters")
	}
}
    console.log(count)
}
	if(resjson.details.validations.length !=0){
		res.send(resjson);
	}
	if (count == 0 && resjson.details.validations.length== 0){
	myobj.password = cryptr.encrypt(myobj.password)
	user_model.update("users",qset,newvalues)
    resjson.details.description ="This user account has been updated"
    resjson.type ="Success"
    resjson.status = 200
    res.send(resjson);
    }
    if (count != 0 && resjson.details.validations.length == 0){
		resjson.details.description ="please enter only required fields"
		resjson.type ="Error"
    	resjson.status = 400
 		res.send(resjson);
    }
}
exports.user_create = function(req,res){
	resjson.details.description = ""
  resjson.details.validations.length = 0
	console.log(req.body.username)
	var mynewobj = {}
	var myobj = req.body
	var count = Object.keys(myobj).length;
  user_model.user_list(req.body.username,function(result) {
  		console.log(result.length)
	if(result.length > 0){
		resjson.details.validations.push("Username already exists")
        resjson.type ="Error"
        resjson.status = 404
	}
		for(i in myobj){
			resjson.type ="Error"
        	resjson.status = 404
	if(i === "first_name"){
			count = count - 1;
	 if (validation.first_name(myobj.first_name)){
		resjson.details.validations.push("Enter the First name properly")
	}
	mynewobj.first_name = myobj.first_name
	}
	else if(i === "last_name"){
		count -= 1;
		if (validation.last_name(myobj.last_name)){
			resjson.details.validations.push("Enter the Last name properly")
	}
	mynewobj.last_name = myobj.last_name
	}
	else if(i === "username"){
		count -= 1;
		if (validation.username(myobj.username)){
			resjson.details.validations.push("Enter the username properly")
	}
	mynewobj.username = myobj.username
	}
	else if(i === "confirm_password"){
		count -= 1;
		if (myobj.password !=  myobj.confirm_password){
			resjson.details.validations.push("Password mismatch")
	}
	}
	else if(i === "password"){
		count -= 1;
		if (validation.password(myobj.password)){
			resjson.details.validations.push("Enter the password properly, atleast 5 characters")
	}
	mynewobj.password = myobj.password
	}
    console.log(count)
}
	if(resjson.details.validations.length !=0){
		res.json(resjson);
	}
if (count == 0 && resjson.details.validations.length== 0){
	mynewobj.password = cryptr.encrypt(myobj.password)
	user_model.create("users",mynewobj)
    resjson.details.validations= [];
    resjson.details.description ="This user account has been Created"
    resjson.type ="Success"
    resjson.status = 200
    res.json(resjson);
    }	
    if (count != 0 && resjson.details.validations.length == 0){
		resjson.details.description ="please enter only required fields"
		resjson.type ="Error"
    	resjson.status = 400
 		res.json(resjson);
    }
  	})
}
