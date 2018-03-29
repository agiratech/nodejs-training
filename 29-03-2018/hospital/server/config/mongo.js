// var express = require('express');
// var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var dbo=null;

exports.connection=function(){
  if(dbo!=null) return 
  console.log("Please wait for the connection to be established")
  MongoClient.connect(url, function(err, db){
  if (err) throw err;
   dbo = db.db("hospital_api");
   console.log('Database connection established')
  });
}
exports.get = function (){
    return dbo;
}