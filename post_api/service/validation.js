var validator = require('validator');
exports.first_name = function(check){
	if(check === '' || check === undefined || !validator.isAlpha(check)){
		return true
	}
	else {return false}
}
exports.last_name = function(check){
	if( !validator.isAlpha(check) && check !=""){
		return true
	}
	else {return false}
}
exports.username = function(check){
	if(check === '' || check === undefined || check.length < 5){
		return true
	}
	else {return false}
}
exports.password = function(check){
	if(check === '' || check === undefined || check.length < 5){
		return true
	}
	else {return false}
}
exports.title = function(check){
	if(check === '' || check === undefined){
		return true
	}
	else {return false}
}