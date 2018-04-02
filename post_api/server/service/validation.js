var validator = require('validator');
function first_name(check){
	if(check === '' || check === undefined || !validator.isAlpha(check)){
		return true
	}
	else {return false}
}
function last_name(check){
	if( !validator.isAlpha(check) && check !=""){
		return true
	}
	else {return false}
}
function username(check){
	if(check === '' || check === undefined || check.length < 5){
		return true
	}
	else {return false}
}
function password(check){
	if(check === '' || check === undefined || check.length < 5){
		return true
	}
	else {return false}
}
function title(check){
	if(check === '' || check === undefined){
		return true
	}
	else {return false}
}

module.exports = {title,password,username,last_name,first_name}