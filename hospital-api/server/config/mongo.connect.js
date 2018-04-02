var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var dbo = null;

router.connection = function () {
  if (dbo != null) return

  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    dbo = db.db("hospital_api");
    console.log("connection established")
  });
}

router.get = function () {
  return dbo;
}
module.exports = router;