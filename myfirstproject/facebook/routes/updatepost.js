var express = require("express");
var router = express.Router();
var mongo=require('./mongo')
var validator = require('validator');
var ObjectId=require('mongodb').ObjectId

router.put('/', function(req, res) {
	
	var jsonObj = {
	status : 400,
	response : "something went wrong" ,
	post : {
		postid:"",
		title : "" ,
		message: "",
		datetime: ""

	}
	}

	if(req.body.postid==undefined||req.body.postid==""){

		jsonObj.post.postid = "post id cannot be empty" ;
		res.send(jsonObj)

	}

	else{
		mongo.get().collection("post").find({"_id":new ObjectId(req.body.postid)}).toArray(function(err, result) {
		    if (err) throw err;
		    // console.log(result)

		    if(result.length==0){		    	
		    	jsonObj.post.postid="dont have the post to edit ";
		    	res.send(jsonObj)
		    }

		    else{

		    	mongo.get().collection("customers").find({"userid":result[0].userid}).toArray(function(err, result1) {
			    	if (err) throw err;

			    	var temp1=true,temp2=true,temp3=true;

			    	if(result1[0].token==undefined||result1[0].token==""){
			    		jsonObj.response="please login to update the post  ";
			    		temp1=false;
			    	}

			    	if(req.body.title!=undefined&&req.body.title==""){
			    		jsonObj.post.title="title cannot be empty";
			    		temp2=false;
			    	}
			    	else if(req.body.title==""){
			    		req.body.title=result[0].title;
			    		jsonObj.post.title=req.body.title;

			    	}
			    	else {
			    		jsonObj.post.title=req.body.title;
			    	}

			    	if(req.body.message!=undefined&&req.body.message==""){
			    		jsonObj.post.message="message cannot be empty";
			    		temp3=false;
			    	}
			    	else if (req.body.message==""){
			    		req.body.message=result[0].message;
			    		jsonObj.post.message=req.body.message;

			    	}
			    	else{
			    		jsonObj.post.message=req.body.message;
			    	}

			    	if(temp1&&temp2&&temp3){
			    		var datetime = new Date();
	    				req.body.updatetime=datetime;
	    				jsonObj.post.datetime=req.body.updatetime;
	    				jsonObj.status=200;
						jsonObj.response="success";


						var myquery = { _id:new ObjectId(req.body.postid) };
			  			var newvalues = {$set: {title: req.body.title,message:req.body.message,datetime:req.body.updatetime} };
			  			mongo.get().collection("post").updateOne(myquery, newvalues, function(err, res1) {
			    		if (err) throw err;
			    		console.log("1 document updated");
			    		});


			    	}
			    	res.send(jsonObj)


		    	});

		    }
		});

	}
});	
module.exports = router;