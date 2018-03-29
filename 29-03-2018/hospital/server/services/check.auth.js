var mongo= require('../config/mongo')
var validator = require('./validation')
var error = require('./message')
var model = require('../models/doctor.model')
exports.check = function (req,res,next) {
	if (!validator.empty(req.headers.token)) {
		error[0].message = "Please enter the valid token"
		res.send(error[0])
	}
	else {
		var searchParam = {"token" : req.headers.token}
		model.find("doctor", searchParam, function(result)
	{
		if(result.length == 0)	{
			error[0].message = "Unauthorised user!!!"
			res.send(error[0])
		}
		else	{
			res.locals.result = result;
			next();
		}

	});

	}
}
