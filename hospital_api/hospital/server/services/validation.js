var validator = require('validator');
var Cryptr = require('cryptr'),
    cryptr = new Cryptr('myTotalySecretKey');

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
exports.username= function(req,res) {
  if(validator.isEmail(req)) {
    return true;
  }
  else
  {
    return false;
  }
}
exports.length= function(req,res) {
  if((req.length)>=3) {
    return true;
  }
  else {
    return false;
  }
}
exports.conpwd = function(req,req1,res) {
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
exports.mongoId = function(req) {
  if(req==undefined || (!validator.isMongoId(req))) {
    return false
  }
  else {
    return true
  }
}
exports.encpwd = function(req,callback) {
    req = cryptr.encrypt(req);
    callback(req);
}
