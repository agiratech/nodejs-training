var validations=require('./validations')
var model=require('../models/customer.model')

exports.check = function (req, res, next) {
	if (validations.empty(req.headers.token)) {
		res.json({status:400,response:"token cannot be empty or undefined "});
	} 
	else {
		model.search(req.headers.token,"token","customers",function(result){
			if(result.length==0) {
				res.json({status:400,response:"token is invalid"})
			}
			else {
				next()
			}
	  })
  }
}