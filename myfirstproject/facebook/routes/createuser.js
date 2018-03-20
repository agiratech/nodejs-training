var express = require('express');
var router = express.Router();
var mongo=require('./mongo')

var validator = require('validator');

router.post('/', function(req, res) {

	mongo.get().collection("customers").find({"userid":req.body.userid}).toArray(function(err, result) {
	    
	    if (err) throw err;

	    if(result.length>0){

	    	res.send("username already taken please enter differnt username ")
	    }

	    else if(req.body.fname==undefined||(!validator.isAlpha(req.body.fname))){

	   	res.send("please enter only alphabets as fname ")

	   }

	   else if(req.body.lname==undefined||(!validator.isAlpha(req.body.lname))){

	   	res.send("please enter only alphabets as lname ")

	   }

	   else if(req.body.userid==undefined||(!validator.isAlphanumeric(req.body.userid))){

	   	res.send("please enter only alphanemric as user name ")

	   }

	    else if(req.body.pwd==undefined||req.body.pwd.length<6){

	   	res.send("please enter atleast  6 charcaters as password ")

	   }

	   else{
			var bcrypt = require('bcryptjs');
			var salt = bcrypt.genSaltSync(10);
			var hash = bcrypt.hashSync(req.body.pwd, salt);
			req.body.pwd=hash;

		    mongo.get().collection("customers").insertOne(req.body, function(err, res) {

			    if (err) throw err;
			    console.log("1 document inserted");

			});

		    res.send(req.body);
		}
 
	});


});

   

module.exports = router;
