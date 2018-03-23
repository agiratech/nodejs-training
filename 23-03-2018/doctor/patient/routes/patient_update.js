var express = require('express');
// var router = express.Router();
var app = express();
var bodyParser = require("body-parser");
var validator = require('validator');
var mongod= require('./mongo')
var auth=require('./check_auth')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.post('/',auth.check, function(req,res)
{

var jsn = {"message" : "", 
"type" : "", 
"status" : 0}
//An object that contains response local variables scoped to the request,
// and therefore available only to the view(s) rendered during that request / response cycle.
var result = res.locals.result;
var doctor_id=result[0].username;
var patient_name = req.body.patient_name;
var charge_name = req.body.charge_name;
if(req.body.patient_id=="undefined" || req.body.patient_id=="" || req.body.patient_id==null)
{
jsn.message = "Enter the patient_id to update the record"
jsn.type = "error"
jsn.status = 400
res.json(jsn)
}else{
mongod.get().collection("patient").find({"patient_id":req.body.patient_id}).toArray(function(err,result1)
{
if(result1.length==1)
{
console.log(result)
if(result1[0].username==doctor_id || result1[0].charge_name=="transfer")
{
console.log("enter")
if((validator.isAlpha(patient_name)) && (patient_name.length>=3))
{
if(validator.isAlpha(charge_name))
{
mongod.get().collection("charge").find({charge_name : req.body.charge_name}).toArray(function (err, result2)
{
if(result1.length==1)
{
if(err) throw err;

mongod.get().collection("patient").updateOne({ patient_id : req.body.patient_id },
{
$set: {patient_name: req.body.patient_name,
charge_name: req.body.charge_name, 
doctor_name: result[0].doctor_name,
doctor_id:result[0]._id ,
hospital_name:result[0].hospital_name,
hospital_id:result[0].hospital_id,
username:result[0].username
}
}
)
res.send("Updation successful")
}
else
{
jsn.message = "Patient charge is invalid"
jsn.type = "error"
jsn.status = "400"
res.json(jsn)
}
})
}else{
jsn.message = "Enter a valid charge with alphabets"
jsn.type = "error"
jsn.status = "400"
res.json(jsn)
}
}else{
jsn.message = "Enter a valid patient_name"
jsn.type = "error"
jsn.status = "400"
res.json(jsn)
}
}else{
jsn.message = "Access deniel"
jsn.type = "error"
jsn.status = "400"
res.json(jsn)
}
}else{
jsn.message = "Record not found"
jsn.type = "error"
jsn.status = "400"
res.json(jsn)
}
})
}
})

module.exports = app;