var express = require('express');
var app = express();
var mongod = require('./mongo');
var bodyParser = require("body-parser");
var validator = require('validator');
var auth = require('./check_auth')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.post('/', auth.check, function(req,res) {
  var jsn = {"message" : "", "type" : "", "status" : 0}
  var result = res.locals.result;
  var patient_id = req.body.patient_id;
  var patient_name = req.body.patient_name;
  var patient_gender = req.body.gender;
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
 if((validator.isAlpha(patient_name)) && (patient_name.length>=3 ))
  {
    console.log(patient_name);
  } else {
    jsn.message = "Enter a valid name"
    jsn.type = "error"
    jsn.status = "400"
    res.send(jsn)
  }
  if((validator.isNumeric(patient_id)) && (patient_id.length>=1 ))
  {
    mongod.get().collection("patient").find({"patient_id": req.body.patient_id}).toArray(function (err, result2)
    {
      if(err)
      {
        res.end(err)
      }else{
        console.log(result2)}
        if(result2.length != 0)
        {
          console.log('Patient with the similar id already')
          jsn = {"message":"Patient with the similar id already exists","type" : "error",
      "status":400}
          res.json(jsn)
        }else{     
          console.log('Record created with unique id')
            }
          });
        }
 if((patient_gender == "undefined") || (patient_gender == ""))
  {
    jsn.message = "Enter the valid gender"
    jsn.type = "error"
    jsn.status = "400"
    res.send(jsn)
  }
  if(validator.isAlpha(charge_name))
  {
    mongod.get().collection("charge").find({"charge_name" : req.body.charge_name}).toArray(function (err, result3)
    {
      if(result3.length==1)
      {
        mongod.get().collection("patient").insertOne(req.body, function(err,result)
        {
          if(err) throw err;
          res.send(req.body);
          });
      }else{
      jsn.message = "Patient charge is invalid"
      jsn.type = "error"
      jsn.status = "400"
      res.json(jsn)
      }
      });
      }
});
module.exports = app;



