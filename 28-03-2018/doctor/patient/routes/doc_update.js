var express = require('express');
var app = express();
var mongod = require('./mongo');
var bodyParser = require("body-parser");
var validator = require('validator');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
var Cryptr = require('cryptr'),
    cryptr = new Cryptr('myTotalySecretKey');
var jsn
app.post('/', function(req,res) {

  var doctor_name = req.body.doctor_name;
  var hospital_id = req.body.hospital_id;
  var gender = req.body.gender;
  var designation = req.body.designation;
  var token = req.body.token;
  var username = req.body.username;
  var pwd = req.body.pwd;
  var conpwd = req.body.conpwd;
  req.body.pwd = cryptr.encrypt(req.body.pwd);

  if((validator.isAlpha(doctor_name)) && (doctor_name.length>=3 ))
  {
    console.log(doctor_name);
  } else {
    res.send("Enter a valid name")
  }
  if((hospital_id=="undefined") || (hospital_id==""))
    res.send("Enter valid hospital id")
  if((gender == "undefined") || (gender == ""))
     res.send("Enter the valid gender")
  if(!validator.isAlpha(designation))
     res.send("Enter designation in an alpha format")
  mongod.get().collection("doctor").find({"username": username}).toArray( function(err, result)
  {
    if(err)
    {
      res.send(err)
    }
    else
    {
      console.log(result)
      if(result.length != 0)
      {
        console.log('username already taken')
        res.end("Username already exists")
      }
      else{
        
        console.log('inside null if')
        if(validator.isEmail(username))
        {
          console.log(username);
         
        } else {
              res.end("Enter username in an email format")
              }
      
          if(pwd.length>=4)
        {
          console.log("Password is of correct length");
        } else {

        res.end("Password length invalid")
              }
      if(conpwd == pwd)
      {
        mongod.get().collection("doctor").insertOne(req.body, function(err,result){
          if(err) throw err;
          res.end("signup successful");
        });        
      }
      else{
        var jsn = {"error":"Please re-enter the password",
    "status":400}
        res.end(jsn)
      }
    
    }
  }    
  });
});
module.exports = app;