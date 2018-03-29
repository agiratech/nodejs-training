var express = require('express');
var router = express.Router();
var app = express();
var bodyParser = require("body-parser");
var model= require('../models/doctor.model')
var objId=require('mongodb').ObjectId
var validator=require('../services/validation')
var error=require('../services/message')

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
								error[0].message="Problem description of the patient is to be provided"
								res.send(error[0])
							}
						}
						else {
							error[0].message="Entered charge does not exist. Please enter valid charge of the patient"
							res.send(error[0])
						}
        	});
        }
        else {
					error[0].message="Please enter valid charge_id"
					res.send(error[0])
        }
      }
      else {
				error[0].message="Enter a valid gender"
				res.send(error[0])
      }
    }
    else {
			error[0].message="Please enter a valid patient_name"
			res.send(error[0])
    }
}


function billingDelete(req,res) {
  var result = res.locals.result;
  var doctor_id=result[0]._id;
	var Tolerable = objId("5aaa628e9ae2a2a642b7495c");
	if(!validator.mongoId(req.body.patient_id))
	{
		error[0].message="Enter a valid patient_id"
		res.send(error[0])	
	}
	else {
		var searchParam = {_id : objId(req.body.patient_id)}
		model.find("patient",searchParam,function(patientDetails) {
			if(patientDetails.length==1) {
				if(patientDetails[0].doctor_id.equals(doctor_id)) {
					if(patientDetails[0].charge_id.equals(Tolerable))
					{
						model.delete(searchParam)
						error[1].message="Patient record deleted successfully"
						res.send(error[1])
					}
					else {
						error[0].message="Access denied"
						res.send(error[0])
					}
				}
				else {
					error[0].message="Patient does not belong to the current doctor signed in"
					res.send(error[0])
				}
			}
			else {
				error[0].message="Patient_id does not exist"
				res.send(error[0])
			}
		});
	}
}

function billingRead(req,res) {
	var auth = res.locals.result;
	if(!validator.mongoId(req.body.patient_id)) {
		error[0].message="Enter a valid patient_id"
		res.send(error[0])
	}
	else {
		var searchParam = {"_id":objId(req.body.patient_id)}
		model.find("patient",searchParam,function(patientDetails) {
			if(patientDetails.length==1) {
				if(auth[0].hospital_id.equals(patientDetails[0].hospital_id)) {
					res.json(patientDetails)
				}
				else {
					error[0].message="Doctor belonging to the same hospital can access the patient database"
					res.send(error[0])
				}
			}
			else {
				error[0].message="Patient_id does not exist"
				res.send(error[0])
			}
	  });
	}
}
function billingUpdate (req,res) {
	var auth = res.locals.result;
  var transfer = objId("5ab379ca41dd4f406d94669a");
	if(!validator.mongoId(req.body.patient_id)) {
		error[0].message="Enter a valid patient_id"
		res.send(error[0])
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
										error[1].message="One record updated successfully";
										res.send(error[1])
									}
									else {
										error[0].message="The current problem description of the patient is to be provided"
										res.send(error[0])
									}
								}
								else {
									error[0].message="Patient_id does not exist"
									res.send(error[0])
								}
							});
						}
						else {
							error[0].message="Patient charge is not valid"
							res.send(error[0])
						}
					}
					else {
						error[0].message="patient name is not valid"
						res.send(error[0])
					}	
				}
				else {
					error[0].message="Access deniel"
					res.send(error[0])
				}
			}
			else {
				error[0].message="Patient id not found"
				res.send(error[0])
			}
		});
	}
}
module.exports = {billingCreate,billingDelete,billingRead,billingUpdate};