var express = require('express');
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
var mongod = require('./mongo');
var Cryptr = require('cryptr'),
cryptr = new Cryptr('myTotalySecretKey');
app.post('/', function(req,res) {
var token = req.headers.token;
mongod.get().collection("doctor").find({"token":token}).toArray(function(err,result){
if(err) throw err;

if(result.length == 0) {
res.send("Please login again to logout")
} else {           
var token1 = "";
var myquery = { token:req.headers.token };
var newvalues = {$set: {token: token1} };
mongod.get().collection("doctor").updateOne(myquery, newvalues, function(err, res1) {
if (err) {
res.send(err)
}
console.log("One document updated");
res.send("successully logged out")
});  
}
});
});
module.exports = app;