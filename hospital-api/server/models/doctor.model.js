var express = require('express');
var router = express.Router();
var mongo = require('../config/mongo.connect')
var error = require('../services/message')

router.find = function (collection, search, callback) {
	mongo.get().collection(collection).find(search).toArray(function (err, result) {
		if (err) throw err;
		callback(result)
	})
}
router.insert = function (collection, req, callback) {
	mongo.get().collection(collection).insertOne(req, function (err, result) {
		if (err) throw err;
		callback(req)
	});
}
router.update = function (collection, match, updateset) {
	mongo.get().collection(collection).updateOne
		(match, { $set: updateset })
}
router.delete = function (query) {
	mongo.get().collection("patient").remove(query, function (err, obj) {
		if (err) throw err;
	});
}
module.exports = router;