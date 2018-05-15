var express = require('express');
var app = express();
var router = express.Router();
var bodyParser = require("body-parser");
var Cryptr = require('cryptr'),
		cryptr = new Cryptr('myTotalySecretKey');
var model = require('../models/doctor.model')
var objId = require('mongodb').ObjectId
var validator = require('../services/validation')
var userMessage = require('../services/message')
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
												userMessage[15].message
												res.send(userMessage[15])
											}	
										}
										else {
											userMessage[16].message
											res.send(userMessage[16])
										}
									}
									else {
										userMessage[17].message
										res.send(userMessage[17])
									}
								});	
							}
							else {
								userMessage[18].message
								res.send(userMessage[18])
							}
						}
						else {
							userMessage[19].message
							res.send(userMessage[19])
						}
					}
					else {
						userMessage[3].message
						res.send(userMessage[3])
					}
				}
				else {
					userMessage[20].message
					res.send(userMessage[20])
				}
			});
		}
		else {
			userMessage[21].message
			res.send(userMessage[21])
		}
	}
	else {
		userMessage[22].message
		res.send(userMessage[22])
	}
}

function login(req,res)	{
	var searchParam = {username:req.body.username}
	model.find("doctor",searchParam,(function(userDetails) {
    if (userDetails.length==0) {
			userMessage[23].message
			res.send(userMessage[23])
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
							userMessage[24].message
							userMessage[24].token = token1
							res.send(userMessage[24])
						});
						}
						else {
							userMessage[25].message
							res.send(userMessage[25])
						}
					}
					else {
						userMessage[26].message
						res.send(userMessage[26])
					}
			}
		}));
}


function logout(req,res) {
	var matchset={ token : req.headers.token }
	var update ={ token: "" }
	model.update("doctor",matchset,update) 
	userMessage[27].message
  res.send(userMessage[27])
}



function doctorUpdate(req,res) {
	console.log(req.body,'req.body')
	if(validator.username(req.body.username)) {
		var searchParam1={username:req.body.username}
		model.find("doctor",searchParam1,function(usernameDetails) {
				if(validator.alpha(req.body.doctor_name) && validator.length(req.body.doctor_name)) {
					if(validator.alpha(req.body.designation) && validator.length(req.body.designation)) {
						if(validator.empty(req.body.pwd) && validator.length(req.body.pwd)) {
							if(validator.conpwd(req.body.pwd,req.body.conpwd)) {
								req.body.pwd=validator.encpwd(req.body.pwd,function(encryptedDetails) {
									delete req.body.conpwd;
									req.body.pwd=encryptedDetails;
									var matchset={ token : req.headers.token }
									var update ={username:req.body.username,doctor_name:req.body.doctor_name, 
															pwd:req.body.pwd, designation:req.body.designation };
									model.update("doctor",matchset,update)
									userMessage[28].message
									res.send(userMessage[28])
								});
							}
							else {
								userMessage[15].message
								res.send(userMessage[15])
							}
						}
						else {
							userMessage[16].message
							res.send(userMessage[16])
						}
					}
					else {
						userMessage[19].message
						res.send(userMessage[19])
					}
				}
				else {
					userMessage[22].message
					res.send(userMessage[22])
				}
		})
	}
	else {
		userMessage[18].message
		res.send(userMessage[18])
	}
}


function hospital_list(req, res)
{
	model.find("hospital", {}, function(hospitalDetails) {
		res.send(hospitalDetails);
})
}

function doctor_list(req, res)
{
	console.log("333333333333333333333333",req.headers.token)
	model.find("doctor", {token:req.headers.token}, function(doctorDetails) {
		console.log(doctorDetails)
		res.send(doctorDetails);
})
}
module.exports = {signup,login,logout,doctorUpdate, hospital_list, doctor_list};
