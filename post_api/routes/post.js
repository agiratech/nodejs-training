var dbconn = require('../model/dbconnect.js')
var auth = require('../control/auth.js')
var posts_C = require('../control/post_create.js')
var posts_R = require('../control/post_read.js')
var posts_U = require('../control/post_update.js')
var posts_D = require('../control/post_delete.js')
var express = require('express');
var router = express();

router.post('/create',auth.check,function(req,res){
	var result = res.locals.result
	var body = req.body
	var token = req.headers.token
	posts_C.post_create(req,res,result)
	
}); 

router.delete('/delete',auth.check,function(req,res){
	var result = res.locals.result
	var body = req.body
	var token = req.headers.token
	posts_D.post_delete(req,res,result)
	
}); 

router.put('/update',auth.check,function(req,res){
	var result = res.locals.result
	var body = req.body
	var token = req.headers.token
	posts_U.post_update(req,res,result)
	
}); 

router.get('/view',auth.check,function(req,res){
	var result = res.locals.result
	var body = req.body
	var token = req.headers.token
	posts_R.post_read(req,res,result)
	
});

module.exports = router;