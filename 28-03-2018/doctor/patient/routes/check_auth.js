var mongod= require('./mongo')


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