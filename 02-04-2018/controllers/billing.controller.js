var express = require('express');
var router = express.Router();
var app = express();
var bodyParser = require("body-parser");
var model= require('../models/doctor.model')
var objId=require('mongodb').ObjectId
var validator=require('../services/validation')
var userMessage=require('../services/message')

function billingCreate(req,res) {
  var auth = res.locals.result;
  var doctor_id = auth[0]._id;
  req.body.hospital_id = auth[0].hospital_id;
  req.body.doctor_id = doctor_id;
    if(validator.alpha(req.body.patient_name) && validator.length(req.body.patient_name)) {
      if(validator.alpha(req.body.gender)) {
        if(validator.mongoId(req.body.charge_id)) {
					var searchParam ={"_id" : objId(req.body.charge_id)}
          model.find("charge",searchParam,function(chargeDetails) {
						req.body.charge_id=chargeDetails[0]._id;
						if(chargeDetails.length==1) {
							if(validator.empty(req.body.description)) {
								model.insert("patient",req.body,function(bodyDetails) {
									res.send(bodyDetails)
								});
							}
							else {
								userMessage[0].message
								res.send(userMessage[0])
							}
						}
						else {
							userMessage[1].message
							res.send(userMessage[1])
						}
        	});
        }
        else {
					userMessage[2].message
					res.send(userMessage[2])
        }
      }
      else {
				userMessage[3].message
				res.send(userMessage[3])
      }
    }
    else {
			userMessage[4].message
			res.send(userMessage[4])
    }
}


function billingDelete(req,res) {
  var result = res.locals.result;
  var doctor_id=result[0]._id;
	var Tolerable = objId("5aaa628e9ae2a2a642b7495c");
	var Discharge = objId("5ab2529411da7b228100cd15");
	if(!validator.mongoId(req.body.patient_id))
	{
		userMessage[5].message
		res.send(userMessage[5])	
	}
	else {
		var searchParam = {_id : objId(req.body.patient_id)}
		model.find("patient",searchParam,function(patientDetails) {
			if(patientDetails.length==1) {
				if(patientDetails[0].doctor_id.equals(doctor_id)) {
					if(patientDetails[0].charge_id.equals(Tolerable) || patientDetails[0].charge_id.equals(Discharge))
					{
						model.delete(searchParam)
						userMessage[6].message
						res.send(userMessage[6])
					}
					else {
						userMessage[7].message
						res.send(userMessage[7])
					}
				}
				else {
					userMessage[8].message
					res.send(userMessage[8])
				}
			}
			else {
				userMessage[9].message
				res.send(userMessage[9])
			}
		});
	}
}

function billingRead(req,res) {
	var auth = res.locals.result;
	if(!validator.mongoId(req.body.patient_id)) {
		userMessage[5].message
		res.send(userMessage[5])
	}
	else {
		var searchParam = {"_id":objId(req.body.patient_id)}
		model.find("patient",searchParam,function(patientDetails) {
			if(patientDetails.length==1) {
				if(auth[0].hospital_id.equals(patientDetails[0].hospital_id)) {
					res.json(patientDetails)
				}
				else {
					userMessage[10].message
					res.send(userMessage[10])
				}
			}
			else {
				userMessage[9].message
				res.send(userMessage[9])
			}
	  });
	}
}
function billingUpdate (req,res) {
	var auth = res.locals.result;
  var transfer = objId("5ab379ca41dd4f406d94669a");
	if(!validator.mongoId(req.body.patient_id)) {
		userMessage[5].message
		res.send(userMessage[5])
	}
	else {
		var searchParam = {"_id":objId(req.body.patient_id)}
		model.find("patient",searchParam,function(patientDetails) {
			if(patientDetails.length==1) {
				if(patientDetails[0].doctor_id.equals(auth[0]._id) || patientDetails[0].charge_id.equals(transfer)) {
					if(validator.alpha(req.body.patient_name) && validator.length(req.body.patient_name)) {
						if(validator.mongoId(req.body.charge_id)) {
							var charge_id = objId(req.body.charge_id);
							var searchParam1={_id : charge_id}
							model.find("charge",searchParam1,function(chargeDetails) {
								if(chargeDetails.length==1) {
									if(validator.empty(req.body.description) && validator.length(req.body.description)) {
										var matchset={ _id : objId(req.body.patient_id) }
										var update ={patient_name: req.body.patient_name,
										charge_id: objId(req.body.charge_id),description:req.body.description,
										doctor_id:auth[0]._id, hospital_id: auth[0].hospital_id }
										model.update("patient",matchset,update)
										userMessage[11].message
										res.send(userMessage[11])
									}
									else {
										userMessage[12].message
										res.send(userMessage[12])
									}
								}
								else {
									userMessage[9].message
									res.send(userMessage[9])
								}
							});
						}
						else {
							userMessage[13].message
							res.send(userMessage[13])
						}
					}
					else {
						userMessage[4].message
						res.send(userMessage[4])
					}	
				}
				else {
					userMessage[7].message
					res.send(userMessage[7])
				}
			}
			else {
				userMessage[14].message
				res.send(userMessage[14])
			}
		});
	}
}
module.exports = {billingCreate,billingDelete,billingRead,billingUpdate};