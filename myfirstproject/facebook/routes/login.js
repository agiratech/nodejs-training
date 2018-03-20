var express = require("express");
var router = express.Router();
var bcrypt = require('bcryptjs');
var mongo=require('./mongo')

router.post('/', function(req, res) {

		if(req.body.userid==undefined||req.body.userid==""){

			res.send("please enter a username")
		}

		else if(req.body.pwd==undefined||req.body.pwd==""){

			res.send("please enter a password")
		}
	   
	   else {
		  	mongo.get().collection("customers").find({"userid":req.body.userid}).toArray(function(err, result) {
		    	
		    	if (err) throw err;

			    if(result.length==0){
			    	res.send("user name not exists  ");
				}

				bcrypt.compare(req.body.pwd,result[0].pwd , function(err, res1) {
			    	
			    	if(res1==false){

			    		res.send("please enter correct password ");

			    	}

					else if ((result[0].token==undefined)||result[0].token==""){

						require('crypto').randomBytes(48, function(err, buffer) {

					  			var token1 = buffer.toString('hex');
						  		var myquery = { userid:req.body.userid };
						  		var newvalues = {$set: {token: token1} };

						  		mongo.get().collection("customers").updateOne(myquery, newvalues, function(err, res) {
							    	
							    	if (err) throw err;
							    	console.log("1 document updated");  

						  		});

						});

				    	res.send("succesfully login")

		    		}

				   	else{

			    		res.send("you have already login please logout and try again ");
			    		
					}
				});
			});

		}
});

module.exports = router;




