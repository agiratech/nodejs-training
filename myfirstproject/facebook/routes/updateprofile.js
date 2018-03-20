var express = require("express");
var router = express.Router();
var mongo=require('./mongo')
var validator = require('validator');


router.put('/', function(req, res) {

	if(req.body.userid==undefined||req.body.userid==""){
		res.send("please enter a username")
	}

	else{

	  	mongo.get().collection("customers").find({"userid":req.body.userid}).toArray(function(err, result) {
		    if (err) throw err;

		    if(result.length==0){
		    	res.send("user name not exists  ");

		    }

		    else if (result[0].token==null||result[0].token==undefined||result[0].token==""){
		    	res.send("please login to update your profile ")
		    }
		    else{
		    	if(req.body.fname!=undefined&&(!validator.isAlpha(req.body.fname))){
   					res.send("please enter only alphabets as fname ")
   					
   				}
   				else if(req.body.lname!=undefined&&(!validator.isAlpha(req.body.lname))){
   					res.send("please enter only alphabets as lname ")
   				}
   				else if(req.body.pwd!=undefined&&req.body.pwd.length<6){
   					res.send("please enter atleast  6 charcaters as password ")
   				}
   				else{
   					if(req.body.fname!=undefined){
		    		
		    		
			    		var myquery = { userid:req.body.userid };
			  			var newvalues = {$set: {fname: req.body.fname} };
			  			mongo.get().collection("customers").updateOne(myquery, newvalues, function(err, res1) {
			    		if (err) throw err;
			    		console.log("1 document updated");
			    		});
		    		}
		    		if(req.body.lname!=undefined){
			    		
			    		var myquery = { userid:req.body.userid };
			  			var newvalues = {$set: {lname: req.body.lname} };
			  			mongo.get().collection("customers").updateOne(myquery, newvalues, function(err, res2) {
			    		if (err) throw err;
			    		console.log("1 document updated");
			    		});
			    	}
			    	if(req.body.pwd!=undefined){
			    		var bcrypt = require('bcryptjs');
						var salt = bcrypt.genSaltSync(10);
						var hash = bcrypt.hashSync(req.body.pwd, salt);
						req.body.pwd=hash;
			    		var myquery = { userid:req.body.userid };
			  			var newvalues = {$set: {pwd: req.body.pwd} };
			  			mongo.get().collection("customers").updateOne(myquery, newvalues, function(err, res3) {
			    		if (err) throw err;
			    		console.log("1 document updated");
			    		});
			    	}

   				}
		    	
   				
		    }
		});
	}
	
});

module.exports = router;