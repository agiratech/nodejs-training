'use strict';
var express = require('express');
var router = express.Router();
var app = express();
var bodyParser = require("body-parser");
var validator = require('validator');
var bcrypt = require('bcryptjs');
var randtoken = require('rand-token');
var model= require('../models/doctor.model')
var ObjectId=require('mongodb').ObjectId
var validate=require('../services/validation')
var error=require('../services/message')

function signup(req, res) {
	if(validate.alpha(req.body.name) && validate.length(req.body.name) && validate.empty(req.body.name)) {
		if(validate.mongo_id(req.body.hospital_id)) {
			var searchParam = {_id:ObjectId(req.body.hospital_id)}
			model.find("hospital",searchParam,function(hospital_data) {
				if (hospital_data.length == 1) {
					req.body.hospital_id = hospital_data[0]._id;
					if(validate.alpha(req.body.gender) && validate.empty(req.body.gender)) {
						if(validate.alpha(req.body.designation) && validate.length(req.body.designation) && validate.empty(req.body.designation)) {
							if(validate.email(req.body.email) && validate.empty(req.body.email)) {
								var searchParam1={email:req.body.email}
								model.find("doctor",searchParam1,function(doctor_data) {
									if (doctor_data.length == 0) {
										if(validate.length(req.body.password) && validate.empty(req.body.password)) {
											if(validate.confirm_password(req.body.password,req.body.confirm_password) && validate.empty(req.body.confirm_password)) {
												validate.encrypt_password(req.body.password,function(password_data) {
													delete req.body.confirm_password;
													req.body.password=password_data;
													model.insert("doctor",req.body,function(body_data) {
														res.send(body_data)
													})
												})
											}
											else {
												error[0].message="password didnot match"
												res.send(error[0])
											}
										}
										else {
											error[0].message="password entered is not valid"
											res.send(error[0])	
										}
									}
									else {
										error[0].message="doctor with same mailid already exist"
										res.send(error[0])	
									}
								})
							}
							else {
								error[0].message="enter a valid email"
								res.send(error[0])	
							}
						}
						else {
							error[0].message="enter a valid designation"
							res.send(error[0])	
						}
					}
					else {
						error[0].message="enter a gender"
						res.send(error[0])	
					}
				}
				else {
					error[0].message="hospital_id does not exist"
					res.send(error[0])	
				}
			})
		}
		else {
			error[0].message="enter a valid hospital_id (ObjectID)"
			res.send(error[0])
		}
	}
	else {
		error[0].message="enter a proper name"
		res.send(error[0])	
	}
}

function login(req,res) {
	var searchParam = {email:req.body.email}
	model.find("doctor",searchParam,(function(user_data) {
    if (user_data.length==0) {
			error[0].message="email is invalid!!"
			res.send(error[0])
    }
    else {
      var hash = user_data[0].password;
      bcrypt.compare(req.body.password, hash, function(err, encrypt_data) {
        if(encrypt_data == true) {
          if(!validate.empty(user_data[0].token)) {
						var token1 = randtoken.generate(10);
						var matchset={ email : req.body.email }
						var updateset ={ token: token1 }
						model.update("doctor",matchset,updateset)
						error[1].message="logged in successfully";
						res.send(error[1])
          }
          else {
						error[0].message="already logged in"
						res.send(error[0])
          }
        }
        else {
					error[0].message="password is invalid"
					res.send(error[0])
        }
      });
    }
  }))
}

function logout(req,res) {
	var matchset={ token : req.headers.token }
	var updateset ={ token: "" }
	model.update("doctor",matchset,updateset) 
	error[1].message="logged out successfully";
  res.send(error[1])
}

function doctor_update(req,res) {
  var auth_data = res.locals.result;
	var searchParam = {"email":auth_data[0].email}
	if(validate.email(req.body.new_email)) {
		var searchParam1={email:req.body.new_email}
		model.find("doctor",searchParam1,function(email_data) {
			if (email_data.length==0) {
				if(validate.empty(req.body.name) && validate.alpha(req.body.name) && validate.length(req.body.name)) {
					if(validate.empty(req.body.designation) && validate.alpha(req.body.designation) && validate.length(req.body.designation)) {
						if(validate.empty(req.body.password) && validate.length(req.body.password)) {
							if(validate.confirm_password(req.body.password,req.body.confirm_password)) {
								req.body.password=validate.encrypt_password(req.body.password,function(encrypt_data) {
									delete req.body.confirm_password;
									req.body.password=encrypt_data;
									var matchset={ _id : auth_data[0]._id }
									var updateset ={email:req.body.new_email,name:req.body.name, password:req.body.password, designation:req.body.designation };
									model.update("doctor",matchset,updateset)
									error[1].message="record updated successfully";
									res.send(error[1])
								})
							}
							else {
								error[0].message="password mismatch"
								res.send(error[0])
							}
						}
						else {
							error[0].message="enter a proper password"
							res.send(error[0])
						}
					}
					else {
						error[0].message="enter a proper designation"
						res.send(error[0])
					}
				}
				else {
					error[0].message="enter a proper name"
					res.send(error[0])
				}
			}
			else {
				error[0].message="email already taken, try different one"
				res.send(error[0])
			}
		})
	}
	else {
		error[0].message="enter a proper email"
		res.send(error[0])
	}
}
module.exports = {signup,login,logout,doctor_update};
// export default { getDoctors };