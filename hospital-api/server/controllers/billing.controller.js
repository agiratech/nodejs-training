'use strict';
var express = require('express');
var router = express.Router();
var app = express();
var bodyParser = require("body-parser");
var validator = require('validator');
var randtoken = require('rand-token');
var model = require('../models/doctor.model')
var ObjectId = require('mongodb').ObjectId
var validate = require('../services/validation')
var error = require('../services/message')

function billing_create(req, res) {
	var auth_data = res.locals.result;
	var doctor_id = auth_data[0]._id;
	req.body.hospital_id = auth_data[0].hospital_id;
	req.body.doctor_id = doctor_id;
	if (validate.empty(req.body.patient_name) && validate.alpha(req.body.patient_name) && validate.length(req.body.patient_name)) {
		if (validate.alpha(req.body.gender)) {
			if (validate.mongo_id(req.body.charge_id)) {
				var searchParam = { "_id": ObjectId(req.body.charge_id) }
				model.find("charge", searchParam, function (charge_data) {
					req.body.charge_id = charge_data[0]._id;
					if (charge_data.length == 1) {
						if (validate.empty(req.body.description) && validate.alpha(req.body.description)) {
							model.insert("patient", req.body, function (body_data) {
								res.send(body_data)
							})
						}
						else {
							error[0].message = "you should describe the problem of patient"
							res.send(error[0])
						}
					}
					else {
						error[0].message = "patient charge not exist"
						res.send(error[0])
					}
				})
			}
			else {
				error[0].message = "you should enter valid charge_id"
				res.send(error[0])
			}
		}
		else {
			error[0].message = "you should enter valid gender"
			res.send(error[0])
		}
	}
	else {
		error[0].message = "Patient name is not valid"
		res.send(error[0])
	}
}

function billing_delete(req, res) {
	var result = res.locals.result;
	var doctor_id = result[0]._id;
	var tolerable = ObjectId("5aaa628e9ae2a2a642b7495c");
	if (!validate.mongo_id(req.body.patient_id)) {
		error[0].message = "you must give a valid patient_id"
		res.send(error[0])
	}
	else {
		var searchParam = { _id: ObjectId(req.body.patient_id) }
		model.find("patient", searchParam, function (patient_data) {
			if (patient_data.length == 1) {
				if (patient_data[0].doctor_id.equals(doctor_id)) {
					if (patient_data[0].charge_id.equals(tolerable)) {
						model.delete(searchParam)
						error[1].message = "patient record deleted"
						res.send(error[1])
					}
					else {
						error[0].message = "still patient is not cured, so no access to delete"
						res.send(error[0])
					}
				}
				else {
					error[0].message = "it is not your patient"
					res.send(error[0])
				}
			}
			else {
				error[0].message = "patient id not exist"
				res.send(error[0])
			}
		})
	}
}

function billing_read(req, res) {
	var auth_data = res.locals.result;
	if (!validate.mongo_id(req.body.patient_id)) {
		error[0].message = "you must give a valid patient_id"
		res.send(error[0])
	}
	else {
		var searchParam = { "_id": ObjectId(req.body.patient_id) }
		model.find("patient", searchParam, function (patient_data) {
			console.log(patient_data)
			if (patient_data.length == 1) {
				if (auth_data[0].hospital_id.equals(patient_data[0].hospital_id)) {
					res.json(patient_data)
				}
				else {
					error[0].message = "doctors from same hospital only have the access to Patient database"
					res.send(error[0])
				}
			}
			else {
				error[0].message = "patient id not exist"
				res.send(error[0])
			}
		})
	}
}
function billing_update(req, res) {
	var auth_data = res.locals.result;
	var transfer = ObjectId("5ab243ac73959deb3ad79fec");
	if (!validate.mongo_id(req.body.patient_id)) {
		error[0].message = "you must give a valid patient_id"
		res.send(error[0])
	}
	else {
		var searchParam = { "_id": ObjectId(req.body.patient_id) }
		model.find("patient", searchParam, function (patient_data) {
			if (patient_data.length == 1) {
				if (patient_data[0].doctor_id.equals(auth_data[0]._id) || patient_data[0].charge_id.equals(transfer)) {
					if (validate.empty(req.body.patient_name) && validate.alpha(req.body.patient_name) && validate.length(req.body.patient_name)) {
						if (validate.mongo_id(req.body.charge_id)) {
							var charge_id = ObjectId(req.body.charge_id);
							var searchParam1 = { _id: charge_id }
							model.find("charge", searchParam1, function (charge_data) {
								if (charge_data.length == 1) {
									if (validate.empty(req.body.description) && validate.length(req.body.description)) {
										var matchset = { _id: ObjectId(req.body.patient_id) }
										var updateset = {
											patient_name: req.body.patient_name,
											charge_id: ObjectId(req.body.charge_id), description: req.body.description,
											doctor_id: auth_data[0]._id, hospital_id: auth_data[0].hospital_id
										}
										model.update("patient", matchset, updateset)
										error[1].message = "record updated successfully";
										res.send(error[1])
									}
									else {
										error[0].message = "you should enter description"
										res.send(error[0])
									}
								}
								else {
									error[0].message = "patient id not exist"
									res.send(error[0])
								}
							})
						}
						else {
							error[0].message = "Patient charge is not valid"
							res.send(error[0])
						}
					}
					else {
						error[0].message = "patient name is not valid"
						res.send(error[0])
					}
				}
				else {
					error[0].message = "you are not allowed to access this patient record"
					res.send(error[0])
				}
			}
			else {
				error[0].message = "Patient id not found"
				res.send(error[0])
			}
		})
	}
}
module.exports = { billing_create, billing_delete, billing_read, billing_update };