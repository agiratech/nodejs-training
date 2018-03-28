var doctorModel = require('../models/doctor.model');
var ObjectId = require('mongodb').ObjectId;

function pat_create(req,res,next){
  console.log('inside pat_create')
	var patId = {_id:new ObjectId(req.body.id)}
	var collectionName = "patient"

	patientModel.getDoctorByToken(collectionName,patId,function(result){
			console.log('inside patientmodel')
			var docId = {_id:new ObjectId(result.doctor_id)}
			patientModel.getDoctorByToken('doctor',docId,function(result1){
                result.doctor_name=result1.doctor_name
                result.designation = result1.designation
                result.username = result1.username
                result.gender = result1.gender
                var hosId = {_id:new ObjectId(result1.hospital_id)}
			    patientModel.getDoctorByToken('hospital',hosId,function(result2){
                    result.hospital_name=result2.hospital_name
            var chargeId = {_id:new ObjectId(result.charge_id)}
            patientModel.getDoctorByToken('charge',chargeId,function(result3){
                result.charge_name=result3.charge_name
                result.level_no = result3.level_no
				    res.json(result)
			    })
	        });
        });
    });
}
module.exports = pat_create