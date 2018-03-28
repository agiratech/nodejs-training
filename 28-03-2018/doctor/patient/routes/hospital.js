var express = require('express');
var app = express();

var MongoClient = require('mongodb').MongoClient;

var url="mongodb://127.0.0.1:27017/hospital_api";
var dbo;

MongoClient.connect(url, function (err, db) {

  if (err) throw err;

    dbo=db.db("hospital_api");

});

app.get( '/', function(req,res) {
	// console.log(req.headers,'11111111')

  dbo.collection("doctor").find({$or:[{"doctor_name":"Dr.Karthigesan AM"}, {"gender":"Female"}]}).toArray(function (err, result) {

    if (err) throw err;
    res.send(result);
    // console.log("Server running at http://127.0.0.1:8081");

  });
// app.post('/patient', function(req, res)
// {
// console.log(req.header, 'Hello World')
// dbo.collection("patient".find({}).toArray(function(err, result)
// {
//   if (err) throw err;
//   res.send(result);
// }));
// })
});
app.listen(8081);
console.log("Api is running at http://127.0.0.1:8081")


