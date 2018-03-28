var express = require('express');
var app = express();
var bodyParser = require("body-parser");
var mongod = require('./mongo');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
var Cryptr = require('cryptr'),
    cryptr = new Cryptr('myTotalySecretKey');
app.post('/', function(req,res) {
    var username = req.body.username;
if(username=="undefined" || username == "")
{
    res.end("Please enter the username")
}
req.body.pwd = cryptr.encrypt(req.body.pwd);

  mongod.get().collection("doctor").find({"username":username}).toArray(function(err,result){
    if(err) throw err;
    console.log(result[0].username);
    if(result.length==0){
        res.send("username not exists")
    }
    else if(req.body.pwd!=result[0].pwd){
        res.send("password mismatch")
    }
    else{
        require('crypto').randomBytes(20, function(err, buffer) {
        var token1 = buffer.toString('hex');
        var myquery = { username:req.body.username };
  		var newvalues = {$set: {"token": token1} };
  		mongod.get().collection("doctor").updateOne(myquery, newvalues, function(err, res1) {
    	if (err) throw err;
        console.log("One document updated");
          });
          res.send("successully login")
        });
    }
      });
}); 
module.exports = app;