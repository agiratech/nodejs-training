var dbconn = require('../model/dbconnect.js')
var resjson ={
    "status": 0,
    "type": "",
    "details": {
      "description": "",
      "validations": []
    }
  }
 flag = 0;
var moment = require('moment');
var date = moment().format('LLL');
var validator = require('validator');
var ObjectId = require('mongodb').ObjectId;


exports.post_create = function(req,res,result){
		var myobj = req.body
		console.log(myobj)
		var token = req.headers.token
		var curr_uname = result.username
		var curr_id = result._id
		var count = Object.keys(myobj).length;
		console.log(curr_uname) 
		console.log(curr_id) 
		console.log(resjson) 
for(i in myobj)
	{
		resjson.type ="Error"
        resjson.status = 404
        if(i == "title"){
        	count = count - 1;
	if (myobj.title === '' || myobj.title === undefined){
		flag =1
		console.log("checking title") 
		resjson.details.validations.push("Please enter the Title of the post")
	}}
	if(i == "title"){
        	count = count - 1;
	if (myobj.message ==="" || myobj.message === undefined){
		flag = 1
		console.log("checking message") 
		resjson.details.validations.push("Please enter some message")
	}}
	}
	if(resjson.details.validations.length !=0){
		res.send(resjson);
	}
	if (count == 0 && flag== 0){
	console.log("entered")
		myobj.date_time = date
		myobj.user_id = curr_id
		console.log(myobj)
  		dbconn.get().collection("posts").insertOne(myobj, function(err, res) {
    	if (err) throw err;
  		});
		resjson.details.description ="Post has been created"
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