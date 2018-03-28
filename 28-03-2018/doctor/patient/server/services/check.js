// var express =require( 'express')
// const router = express.Router();
// var authenticationController = require('../controllers/authentication.controller')

// router.route('/checkauthentication').get(authenticationController) 
//     // console.log('qqqqqqqqqqqqqq')
//     // res.json({status:true});



// module.exports = router;


var mongod= require('../config/mongo')


exports.check = function (req,res,next) {
 mongod.get().collection("doctor").find({"token":req.headers.token}).toArray(function(err,result)
	{
		if(err) throw err;
		console.log(result)

		if (result.length == 0)  
		{
			res.json({message:'Unauthorised user. Please login again'})
        } else 
        {
			res.locals.result = result;
        	next()
        }
    });
}