var express = require('express');
var app = express();
var mongod = require('./mongo');
var bodyParser = require("body-parser");
var validator = require('validator');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
var Cryptr = require('cryptr'),
    cryptr = new Cryptr('myTotalySecretKey');
app.post('/', function(req,res) {
  var jsn
  var doctor_name = req.body.doctor_name;
  var hospital_id = req.body.hospital_id;
  var gender = req.body.gender;
  var designation = req.body.designation;
  var token = req.body.token;
  var username = req.body.username;
  var pwd = req.body.pwd;
  var conpwd = req.body.conpwd;
  // req.body.sss= "jjj";
  // console.log(req.body.sss)
  req.body.pwd = cryptr.encrypt(req.body.pwd);
  if((validator.isAlpha(doctor_name)) && (doctor_name.length>=3 ))
  {
    console.log(doctor_name);
  } else {
    jsn = {"message":"Please enter a valid name", "type" : "error",
    "status":400}
        res.json(jsn)
  }
  if((hospital_id =="undefined") || (hospital_id =="")){
    jsn = {"message":"Please enter the valid hospital id", "type" : "error",
    "status":400}
        res.json(jsn)
    }else{
    mongod.get().collection("hospital").find({"hospital_id" : hospital_id}).toArray(function(err, result1){
      console.log("result1", result1)
      req.body.hospital_name = result1[0].hospital_name
    });
      }
  if((gender == "undefined") || (gender == "")){
  jsn = {"message":"Please enter the valid gender","type" : "error",
    "status":400}
        res.json(jsn)
  }
  if(!validator.isAlpha(designation)){
  jsn = {"message":"Please enter designation in an alpha format","type" : "error",
    "status":400}
        res.json(jsn)
      }
   mongod.get().collection("doctor").find({"username": username}).toArray( function(err, result2)
  {
    if(err)
    {
      res.send(err)
    }else{
      console.log(result2)
      if(result.length != 0)
      {
        console.log('username already taken')
        jsn = {"message":"Username already exists","type" : "error",
    "status":400}
        res.json(jsn)
      }else{     
        console.log('inside null if')
        if(validator.isEmail(username))
        {
          console.log(username);
        } else {
          jsn = {"message":"Please enter username in an email format","type" : "error",
    "status":400}
        res.json(jsn)
              }
          if(pwd.length>=4)
        {
          console.log("Password is of correct length");
        } else {
          jsn = {"message":"Password length invalid","type" : "error",
    "status":400}
        res.json(jsn)
              }
      if(conpwd == pwd)
      {
        delete req.body.conpwd;
        mongod.get().collection("doctor").insertOne(req.body, function(err,result3){
          if(err) throw err;
          jsn = {"message":"signup successful","type" : "success",
    "status":200}
          res.json(jsn);
        });        
      }else{
         jsn = {"message":"Please re-enter the password","type" : "error",
    "status":400}
        res.json(jsn)
      }
    }
  }    
  });
});
module.exports = app;