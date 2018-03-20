var express = require("express");
var router = express.Router();
var mongo=require('./mongo')



router.post('/', function(req, res) {
	    
	mongo.get().collection("customers").find({"userid":req.body.userid}).toArray(function(err, result) {
	    
	    if (err) throw err;
	    
	    if(result.length==0){

	    	res.send("not a valid  username")

	    }

	    else if(result[0].token==""){

	    	res.send("you have already logout")

	    }


	    else {
	    	var myquery = { userid:req.body.userid };
	    	var newvalues = {$set: {token: ""} };

	    	mongo.get().collection("customers").updateOne(myquery, newvalues, function(err, res1) {
	    	
		    	if (err) throw err;

		    	console.log("1 document updated");
		    	res.send("successfully logout");
		    	    	
    		});
    	}
    	

	});

});



module.exports = router;



