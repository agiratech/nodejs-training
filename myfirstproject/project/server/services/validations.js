var validator = require('validator');

function validatename(fname) {
	if(fname==undefined||(!validator.isAlpha(fname))) {
		return false 
	}
	else {
		return true;
	}
}

function validateuserid(uid) {
	if(uid==undefined||(!validator.isAlphanumeric(uid))) {
		return false 
  }
	else {
		return true;
	}
}

function validatepassword(pwd) {
	if(pwd==undefined||pwd.length<6){  
		return false 
	}
	else {
		return true;
	}
}

function matchpassword(pwd,cpwd) {
	if(pwd==cpwd){
		return true;
	}
	else{
		return false;
	}
}

function generateEncryptedPassword(pwd) {
	var bcrypt = require('bcryptjs');
	var salt = bcrypt.genSaltSync(10);
	return bcrypt.hashSync(pwd, salt);

}

function empty(value){
	if(value==undefined||value==""){
		return true;
	}
	else{
		return false 
	}
}

function mongoid(id){
	if(id==undefined||(!validator.isMongoId(id))){
		return false
	}
	else {
		return true
	}
}
module.exports={validatename,validateuserid,validatepassword,matchpassword,generateEncryptedPassword,mongoid,empty}