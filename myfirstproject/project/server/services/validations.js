var validator = require('validator');

exports.validatename=function(fname){

	if(fname==undefined||(!validator.isAlpha(fname))){
	    
		return false 

	   }
	else {
		return true;
	}
}


exports.validateuserid=function(uid){

	if(uid==undefined||(!validator.isAlphanumeric(uid))){
	    
		return false 

	   }
	else {
		
		return true;
	}
}

exports.validatepassword=function(pwd){

	if(pwd==undefined||pwd.length<6){
	    
		return false 

	   }
	else {
		return true;
	}
}

exports.matchpassword=function(pwd,cpwd){

	if(pwd==cpwd){
		return true;
	}
	else{
		return false;
	}

}
exports.generateEncryptedPassword=function(pwd){

	var bcrypt = require('bcryptjs');
	var salt = bcrypt.genSaltSync(10);
	return bcrypt.hashSync(pwd, salt);

}

exports.empty=function(value){
    if(value==undefined||value==""){
        return true;
    }

    else{
        return false 
    }
}

	
