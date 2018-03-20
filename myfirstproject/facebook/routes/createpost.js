var express = require("express");
var router = express.Router();
var mongo=require('./mongo')
var validator = require('validator');


router.post('/', function(req, res) {
	
	var jsonObj = {
	status : 400,
	response : "something went wrong" ,
	post : {
		userid:"",
		title : "" ,
		message: "",
		datetime: ""

	}
	}
	

	if(req.body.userid==undefined||req.body.userid==""){
		jsonObj.post.userid = "user id cannot be empty" ;
		res.send(jsonObj)
	}

	else{

		mongo.get().collection("customers").find({"userid":req.body.userid}).toArray(function(err, result) {
		    if (err) throw err;

		    if(result.length==0){
		    	jsonObj.post.userid="username is invalid";
		    	res.send(jsonObj)

		    }
		    else if (result[0].token==null||result[0].token==undefined||result[0].token==""){
		    	jsonObj.post.userid=req.body.userid;
		    	jsonObj.response="please login to post";
		    	res.send(jsonObj)
		    }
		    else {
		    	jsonObj.post.userid=req.body.userid;
		    		var temp1=true;
		    		var temp2=true;	    	
		    	if(req.body.title==""||req.body.title==undefined){
		    		jsonObj.post.title="title field cannot be empty";
		    		temp1=false;

		    	}
		    	else {
		    		jsonObj.post.title=req.body.title
		    	}

		    	if(req.body.message==""||req.body.message==undefined){
		    		jsonObj.post.message="message cannot be empty";
		    		temp2=false;
		    	}
		    	else {
		    		jsonObj.post.message=req.body.message;
		    	}
		    	console.log(temp1)
		    	console.log(temp2)
		    	if(temp1 && temp2){
		    		var datetime = new Date();
    				req.body.datetime=datetime;
    				jsonObj.status=200;
					jsonObj.response="success";
					jsonObj.post.datetime=req.body.datetime;

			    	mongo.get().collection("post").insertOne(req.body, function(err, res1) {

					    if (err) throw err;
					    
					});
		    	}
		    	res.send(jsonObj)
		   	}

		});

	}

});


module.exports = router;
