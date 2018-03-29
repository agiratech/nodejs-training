var express = require('express');
var app = express();
var router = express.Router();
var bodyParser = require("body-parser");
var Cryptr = require('cryptr'),
		cryptr = new Cryptr('myTotalySecretKey');
var model = require('../models/doctor.model')
var objId = require('mongodb').ObjectId
var validator = require('../services/validation')
var error = require('../services/message')
function signup(req, res)	{
	if(validator.alpha(req.body.doctor_name) && validator.length(req.body.doctor_name))	{
		if(validator.mongoId(req.body.hospital_id)){
			var searchParam1 = {_id:objId(req.body.hospital_id)}
			model.find("hospital", searchParam1, function(hospitalDetails){
				if(hospitalDetails.length == 1)	{
					req.body.hospital_id = hospitalDetails[0]._id;
					if(validator.alpha(req.body.gender)) {
						if(validator.alpha(req.body.designation)) {
							if(validator.username(req.body.username))	{
								var searchParam2={username:req.body.username}
								model.find("doctor", searchParam2, function(doctorDetails){
									if(doctorDetails.length == 0)	{
										if(validator.length(req.body.pwd) && validator.empty(req.body.pwd))	{
											if(validator.conpwd(req.body.pwd,req.body.conpwd) && validator.empty(req.body.conpwd)) {
												validator.encpwd(req.body.pwd,function(passwordDetails)	{
													delete req.body.conpwd;
													req.body.pwd=passwordDetails;
													model.insert("doctor",req.body,function(bodyDetails) {
														res.send(bodyDetails)
													});
												});
											}
											else {
												error[0].message="Password mismatch"
												res.send(error[0])
											}	
										}
										else {
											error[0].message="Password length invalid"
											res.send(error[0])
										}
									}
									else {
										error[0].message="Doctor with similar username already exists"
										res.send(error[0])
									}
								});	
							}
							else {
								error[0].message="Enter the username in a valid format"
								res.send(error[0])
							}
						}
						else {
							error[0].message="Please enter the designation in an alpha format"
							res.send(error[0])
						}
					}
					else {
						error[0].message="Enter a valid gender"
						res.send(error[0])
					}
				}
				else {
					error[0].message="The entered hospital id does not exist"
					res.send(error[0])
				}
			});
		}
		else {
			error[0].message="Please enter a valid ObjectId for the hospital"
			res.send(error[0])
		}
	}
	else {
		error[0].message="Please enter a valid doctor_name"
		res.send(error[0])
	}
}

function login(req,res)	{
	var searchParam = {username:req.body.username}
	model.find("doctor",searchParam,(function(userDetails) {
    if (userDetails.length==0) {
			error[0].message="Invalid username"
			res.send(error[0])
		}
			else {
				var crypt = userDetails[0].pwd;
				req.body.pwd = cryptr.encrypt(req.body.pwd);
					if(crypt == req.body.pwd) {
						if(!validator.empty(userDetails[0].token)) {
							require('crypto').randomBytes(20, function(err, buffer) {
							var	token1 = buffer.toString('hex');	
							var matchset={ username : req.body.username }
							var update ={ token: token1 }
							model.update("doctor",matchset,update)
							error[1].message="Successfully logged in";
							res.send(error[1])
						});
						}
						else {
							error[0].message="The doctor is already logged in. Please logout to login again"
							res.send(error[0])
						}
					}
					else {
						error[0].message="Invalid password"
						res.send(error[0])
					}
			}
		}));
}


function logout(req,res) {
	var matchset={ token : req.headers.token }
	var update ={ token: "" }
	model.update("doctor",matchset,update) 
	error[1].message="Successfully Logged Out";
  res.send(error[1])
}



function doctorUpdate(req,res) {
	var auth = res.locals.result;
	console.log(auth)
	var searchParam = {"username":auth.username}
	if(validator.username(req.body.newUsername)) {
		var searchParam1={username:req.body.newUsername}
		model.find("doctor",searchParam1,function(usernameDetails) {
			if (usernameDetails.length==0) {
				if(validator.alpha(req.body.doctor_name) && validator.length(req.body.doctor_name)) {
					if(validator.alpha(req.body.designation) && validator.length(req.body.designation)) {
						if(validator.empty(req.body.pwd) && validator.length(req.body.pwd)) {
							if(validator.conpwd(req.body.pwd,req.body.conpwd)) {
								req.body.pwd=validator.encpwd(req.body.pwd,function(encryptedDetails) {
									delete req.body.conpwd;
									req.body.pwd=encryptedDetails;
									var matchset={ _id : auth[0]._id }
									var update ={username:req.body.newUsername,doctor_name:req.body.doctor_name, 
															pwd:req.body.pwd, designation:req.body.designation };
									model.update("doctor",matchset,update)
									error[1].message="Record are updated successfully";
									res.send(error[1])
								});
							}
							else {
								error[0].message="Password mismatch"
								res.send(error[0])
							}
						}
						else {
							error[0].message="Password length invalid"
							res.send(error[0])
						}
					}
					else {
						error[0].message="Please enter the designation in an alpha format"
						res.send(error[0])
					}
				}
				else {
					error[0].message="Please enter a valid doctor_name"
					res.send(error[0])
				}
			}
			else {
				error[0].message="Doctor with similar username already exists"
				res.send(error[0])
			}
		})
	}
	else {
		error[0].message="Enter the username in a valid format"
		res.send(error[0])
	}
}
module.exports = {signup,login,logout,doctorUpdate};