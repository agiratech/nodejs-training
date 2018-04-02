var validator = require('validator');
var bcrypt = require('bcryptjs');

function alpha(req, res) {
	if (validator.isAlpha(req)) {
		return true;
	}
	else {
		return false;
	}
}
function number(req, res) {
	if (validator.isNumeric(req)) {
		return true;
	}
	else {
		return false;
	}
}
function email(req, res) {
	if (validator.isEmail(req)) {
		return true;
	}
	else {
		return false;
	}
}
function length(req, res) {
	if ((req.length) >= 5) {
		return true;
	}
	else {
		return false;
	}
}
function confirm_password(req, req1, res) {
	if (req == req1) {
		return true;
	}
	else {
		return false;
	}
}
function empty(req, res) {
	if (req != undefined && req != "") {
		return true;
	}
	else {
		return false;
	}
}
function mongo_id(req) {
	if (req == undefined || (!validator.isMongoId(req))) {
		return false
	}
	else {
		return true
	}
}
function encrypt_password(req, callback) {
	bcrypt.hash(req, 8, function (err, hash) {
		console.log(hash)
		callback(hash);
	})
}
module.exports = { alpha, number, email, length, confirm_password, empty, mongo_id, encrypt_password }