var validator = require('validator');
var bcrypt = require('bcryptjs');

exports.alpha= function(req,res) {
  if(validator.isAlpha(req)) {
    return true;
  }
  else {
    return false;
  }
}
exports.number= function(req,res) {
  if(validator.isNumeric(req)) {
    return true;
  }
  else {
    return false;
  }
}
exports.email= function(req,res) {
  if(validator.isEmail(req)) {
    return true;
  }
  else
  {
    return false;
  }
}
exports.length= function(req,res) {
  if((req.length)>=5) {
    return true;
  }
  else {
    return false;
  }
}
exports.confirm_password = function(req,req1,res) {
  if(req==req1) {
    return true;
  }
  else {
    return false;
  }
}
exports.empty = function(req,res) {
  if(req!=undefined && req!="") {
    return true;
  }
  else {
    return false;
  }
}
exports.id = function(req,res) {
  if(validator.isMongoId(req)) {
    return true;
  }
  else {
    return false; 
  }
}
exports.mongo_id = function(req) {
  if(req==undefined || (!validator.isMongoId(req))) {
    return false
  }
  else {
    return true
  }
}
exports.encrypt_password = function(req,callback) {
  bcrypt.hash(req, 8, function(err, hash) {
    console.log(hash)
    callback(hash);
  })
}