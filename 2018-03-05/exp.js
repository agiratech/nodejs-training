var express = require('express')
var url = require('url')
var app = express()
 
app.get('/', function (req, res) {
  console.log(req);
  res.send('Hello World')
  // res.write(req.toString());
  res.end();
})

app.get('/Rajesh', function (req, res) {
  res.send('Rajesh is sleeping')
  res.end();
})
 
app.listen(3003)