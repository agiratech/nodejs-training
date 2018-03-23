var dbconn = require('../model/dbconnect.js')
var auth = require('../control/auth.js')
var user_C = require('../control/user_create.js')
var user_R = require('../control/user_read.js')
var user_U = require('../control/user_update.js')
var user_D = require('../control/user_delete.js')
var user_P = require('../control/user_profile.js')
var user_lin = require('../control/user_login.js')
var user_lout = require('../control/user_logout.js')
var express = require('express');
var router = express();

router.post('/signup',auth.check,function(req,res){
	var result = res.locals.result
	var body = req.body
	var token = req.headers.token
	user_C.user_create(req,res,result)
	
}); 

router.delete('/delete',auth.check,function(req,res){
	var result = res.locals.result
	var body = req.body
	var token = req.headers.token
	user_D.user_delete(req,res,result)
	
}); 

router.put('/update',auth.check,function(req,res){
	var result = res.locals.result
	var body = req.body
	var token = req.headers.token
	user_U.user_update(req,res,result)
	
}); 

router.get('/view',auth.check,function(req,res){
	var result = res.locals.result
	var body = req.body
	var token = req.headers.token
	user_R.user_read(req,res,result)
	
});

router.get('/profile',auth.check,function(req,res){
	var result = res.locals.result
	var body = req.body
	var token = req.headers.token
	user_P.user_profile(req,res,result)
	
});

router.post('/login',function(req,res){
	var body = req.body
	var token = req.headers.token
	user_lin.user_login(req,res)
	
});

router.put('/logout',auth.check,function(req,res){
	var result = res.locals.result
	var body = req.body
	var token = req.headers.token
	user_lout.user_logout(req,res,result)
	
});

module.exports = router;