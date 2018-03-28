var validator = require('validator');
var bcrypt = require('bcryptjs');

exports.name= function(req,res)
{
	if(validator.isAlpha(req))
	{
		return true;
	}
	else
	{
		return false;
	}
}
exports.number= function(req,res)
{
	if(validator.isNumeric(req))
	{
		return true;
	}
	else
	{
		return false;
	}
}
exports.email= function(req,res)
{
	if(validator.isEmail(req))
	{
		return true;
	}
	else
	{
		return false;
	}
}
exports.length= function(request,res)
{
	if((request.length)>=5)
	{
		return true;
	}
	else
	{
		return false;
	}
}
exports.confirm_password = function(req,req1,res)
{
	if(req==req1)
	{
		return true;
	}
	else
	{
		return false;
	}
}
exports.empty = function(req,res)
{
	if(req!=undefined && req!="")
	{
		return true;
	}
	else
	{
		return false;
	}
}
exports.encrypt_password = function(req,callback)
{
	bcrypt.hash(req, 8, function(err, hash)
		{
			res=hash;
			console.log(res)
			callback(res);
		})
}