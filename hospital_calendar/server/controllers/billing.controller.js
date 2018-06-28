var express = require('express');
var router = express.Router();
var app = express();
var bodyParser = require("body-parser");
var model= require('../models/doctor.model')
var objId=require('mongodb').ObjectId
var validator=require('../services/validation')
var userMessage=require('../services/message')
var moment= require('moment')
const fs = require('fs');
const readline = require('readline');
const {google} = require('googleapis');
// If modifying these scopes, delete credentials.json.
const SCOPES = ["https://www.googleapis.com/auth/calendar"];
const TOKEN_PATH = 'credentials.json';
function billingGet(req, res)
{
  model.find("charge", {}, function(chargeDetails) {
    res.send(chargeDetails);
})
}
function billGetlevel(req, res)
{
  model.find("charge", {"levels": req.body.levels}, function(chargeDetails2) {
    res.send(chargeDetails2);
    console.log(chargeDetails2)
})
}

function billingGetid(req, res)
{
  console.log(req.body.charge_id)
  console.log("******************************")
  model.find("charge", {"_id":objId(req.body.charge_id)}, function(chargeDetails1) {
    res.send(chargeDetails1);
    console.log(chargeDetails1)
})
}

function billingListDet(req, res)
{
  var auth = res.locals.result;
  // var transfer = objId("5ab379ca41dd4f406d94669a");
  model.find("patient", {doctor_id : auth[0]._id}, function(patientDetails) {
    // if(auth[0]._id == objId)
    res.send(patientDetails);
    console.log("Patient",patientDetails)
})
}

function billingCreate(req,res) {
try {
const content = fs.readFileSync("/home/aishwarya/node_project/hospital/server/controllers/client_secret.json");
authorize(JSON.parse(content), listEvents);
} catch (err) {
return console.log('Error loading client secret file:', err);
}

/**
* Create an OAuth2 client with the given credentials, and then execute the
* given callback function.
* @param {Object} credentials The authorization client credentials.
* @param {function} callback The callback to call with the authorized client.
* @return {function} if error in reading credentials.json asks for a new one.
*/
function authorize(credentials, callback) {
const {client_secret, client_id, redirect_uris} = credentials.installed;
let token = {};
const oAuth2Client = new google.auth.OAuth2(
client_id, client_secret, redirect_uris[0]);

// Check if we have previously stored a token.
try {
token = fs.readFileSync(TOKEN_PATH);
} catch (err) {
return getAccessToken(oAuth2Client, callback);
}
oAuth2Client.setCredentials(JSON.parse(token));
callback(oAuth2Client);
}

/**
* Get and store new token after prompting for user authorization, and then
* execute the given callback with the authorized OAuth2 client.
* @param {google.auth.OAuth2} oAuth2Client The OAuth2 client to get token for.
* @param {getEventsCallback} callback The callback for the authorized client.
*/
function getAccessToken(oAuth2Client, callback) {
const authUrl = oAuth2Client.generateAuthUrl({
access_type: 'offline',
scope: SCOPES,
});
console.log('Authorize this app by visiting this url:', authUrl);
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout,
});
rl.question('Enter the code from that page here: ', (code) => {
rl.close();
oAuth2Client.getToken(code, (err, token) => {
if (err) return callback(err);
oAuth2Client.setCredentials(token);
// Store the token to disk for later program executions
try {
fs.writeFileSync(TOKEN_PATH, JSON.stringify(token));
console.log('Token stored to', TOKEN_PATH);
} catch (err) {
console.error(err);
}
callback(oAuth2Client);
});
});
}

/**
* Lists the next 10 events on the user's primary calendar.
* @param {google.auth.OAuth2} auth An authorized OAuth2 client.
*/
function listEvents(auth) {
const calendar = google.calendar({version: 'v3', auth});
  console.log(calendar.events,'qqqqqqqqqqq')
  // billingGetid();
var event = {
'summary': req.body.patient_name +' '+req.body.chargeName +' '+ req.body.level_no,
    'description': req.body.patient_name +' '+ req.body.chargeName +' '+ req.body.description,
'start': {
'dateTime': moment(req.body.date).format(),
'timeZone': 'America/Los_Angeles',
},
'end': {
      'dateTime': moment(req.body.date).format(),
'timeZone': 'America/Los_Angeles',
    },
    'attendees': [
      {'email': req.body.username}
    ],
'reminders': {
'useDefault': false,
'overrides': [
{'method': 'email', 'minutes': 24 * 60},
{'method': 'popup', 'minutes': 10},
],
},
  };
  console.log('hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh',event)
calendar.events.insert({
auth: auth,
calendarId: 'primary',
resource: event,
}, function(err, event) {
if (err) {
console.log('There was an error contacting the Calendar service: ' + err);
return;
}
console.log('Event created: %s', JSON.parse(event));
});
var auth = res.locals.result;
  var doctor_id = auth[0]._id;
  var date = moment(req.body.date).format();
  var username;
req.body.hospital_id = auth[0].hospital_id;
  req.body.doctor_id = doctor_id;
  req.body.date = date;
  req.body.username = username;
if(validator.alpha(req.body.patient_name) && validator.length(req.body.patient_name)) {
if(validator.alpha(req.body.gender)) {
        if(validator.empty(req.body.date)){
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
                                userMessage[29].message
                                res.send(userMessage[29])
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
                                    }

function billingDelete(req,res) {
var result = res.locals.result;
var doctor_id=result[0]._id;
  var Tolerable = objId("5b28b7a25d9bd2fb87d9b4e1");
  var Discharge = objId("5b28b7265d9bd2fb87d9b4db");
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
      console.log(patientDetails)
      if(patientDetails.length==1) {
        // var transfer = objId("5ab379ca41dd4f406d94669a");
        if(auth[0].hospital_id.equals(patientDetails[0].hospital_id) || patientDetails[0].charge_id.equals(transfer)) {
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
var transfer = objId("5b28b73b5d9bd2fb87d9b4de");
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
function patient_list(req, res)
{
  model.find("patient",{}, function(patientDetails) {
    console.log("Patient details",patientDetails)
    res.send(patientDetails);
})
}
module.exports = {billingCreate,billingDelete,billingRead,billingUpdate,billingGet,billingGetid,billingListDet,patient_list};
