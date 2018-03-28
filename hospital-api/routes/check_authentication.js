var mongo= require('./mongoconnect')
										/*token validation*/
exports.check = function (req,res,next) {
	if(req.headers.token==undefined || req.headers.token=="" || req.headers.token==null)
	{
		res.json({message:'you must enter a valid token'})
	}else{
		mongo.get().collection("doctor").find({"token":req.headers.token}).toArray(function(err,result)
			{
				if(err) throw err;
				console.log(result.length)

				if (result.length == 0)  
				{
					res.json({message:'you must login first'})
		        } else 
		        {
		        	res.locals.result = result;
		        	next()
		        }
		    });
		}
	}