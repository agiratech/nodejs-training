
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
  if(validator.isNumeric(patient_id) && (patient_id.length>=5))
    {
    console.log("ll")
    mongo.get().collection("patient").find({patient_id : req.body.patient_id}).toArray(function (err, result)
    {
     if(result.length==0)
      {
       if((validator.isAlpha(patient_name)) && (patient_name.length>=3))
        {
          if(validator.isAlpha(charge_level))
           {
           mongo.get().collection("charge").find({charge_level : req.body.charge_level}).toArray(function (err, result2)
            {
             // console.log(result2)
             if(result2.length==1)
            {
             mongo.get().collection("patient").insertOne(req.body, function(err,result)
            {
            if(err) throw err;
            res.send(req.body);
            });
          }
           else
             {
             jsn.message = "not found";
             jsn.status = 400
             jsn.error = "Patient charge is not valid"
             res.json(jsn)
             }
                        })
            }
             else
              {
              jsn.message = "alphabets only allowed";
              jsn.status = 400
              jsn.error = "Patient charge level can only contain alphabets"
              res.json(jsn)
              }
        }
             else
                {
                 jsn.message = "patient name should contain only characters";
                 jsn.status = 400
                 jsn.error = "Patient name is not valid"
                 res.json(jsn)
                }
            }
            else
            {
                jsn.message = "try with unique id";
                jsn.status = 400
                jsn.error = "patient_id already exist"
                res.json(jsn)
            }
        })
    }
    else
    {
        jsn.message = "it should contain atleast 5 numbers";
        jsn.status = 400
        jsn.error = "patient_id is invalid"
        res.json(jsn)
    }

})

module.exports = app;