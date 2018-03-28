var mongod= require('../config/mongo')
// function getDoctorByToken(token){
	exports.getDoctorByToken=function(collectionName,getParam,callback) {
			mongod.get().collection(collectionName).findOne(getParam,function(err,result)
			{
					if(err) throw err;
					console.log(result)

					if (result)  
					{
							console.log('Nested if')
							callback(result)
							// res.json({message:'Unauthorised user. Please login again'})
					} else 
					{
							console.log('else inside nested if')
							callback('zero records')
							// res.locals.result = result;
							// next()
					}
			});
	}