var express = require('express');
var router = express.Router();
var app = express();
var bodyParser = require("body-parser");
var validator = require('validator');
var mongod= require('./mongo')
var auth=require('./check_auth')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


router.post('/', auth.check, function(req,res)
{
var jsn = {"message" : "", 
"type" : "", 
"status" : 0}
var result = res.locals.result;
var patient_id = req.body.patient_id;
var patient_name = req.body.patient_name;
var charge_name = req.body.charge_name;
var doctor_id = result[0]._id;
req.body.doctor_id = doctor_id;
var username = result[0].username;
req.body.username = username;
var hospital_id = result[0].hospital_id;
req.body.hospital_id = hospital_id;
var doctor_name = result[0].doctor_name;
req.body.doctor_name = doctor_name;
var hospital_name = result[0].hospital_name;
req.body.hospital_name = hospital_name;
if(validator.isNumeric(patient_id) && (patient_id.length>=1))
{
console.log("patient details")
mongod.get().collection("patient").find({patient_id : req.body.patient_id}).toArray(function (err, result)
{
if(result.length==0)
{
if((validator.isAlpha(patient_name)) && (patient_name.length>=3))
{
if(validator.isAlpha(charge_name))
{
mongod.get().collection("charge").find({charge_name : req.body.charge_name}).toArray(function (err, result2)
{
if(result2.length==1)
{
mongod.get().collection("patient").insertOne(req.body, function(err,result)
{
if(err) throw err;
res.send(req.body);
});
}
else
{

jsn.message = "Patient charge is invalid"
jsn.type = "error"
jsn.status = "400"
res.json(jsn)
}
})
}
else
{
jsn.message = "Enter a valid patient_name"
jsn.type = "error"
jsn.status = "400"
res.json(jsn)
}
}
else
{
jsn.message = "Please enter the valid length of the patient_id"
jsn.type = "error"
jsn.status = "400"
res.json(jsn)
}
}
else
{
jsn.message = "Patient with the similar id already exists"
jsn.type = "error"
jsn.status = 400
res.json(jsn)
}
})
}
else
{
jsn.message = "Patient_id must atleast contain 1 numeric value"
jsn.type = "error"
jsn.status = 400
res.json(jsn)
}

})

module.exports = router;


