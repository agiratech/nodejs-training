var express = require('express');
var router = express.Router();
var app = express();
var bodyParser = require("body-parser");
var bcrypt = require('bcryptjs');
var model= require('../models/customer.model')
var ObjectId=require('mongodb').ObjectId
var validations=require('../services/validations')

function makecomment(req,res){
	model.search(req.headers.token,"token","customers",function(result){
		model.search(ObjectId(req.body.postid),"_id","post",function(result1){
			if(result1.length==0){
				res.json({status:400,response:"invalid postid to comment "})
			}
			else{
				if(validations.empty(req.body.comment)){
					res.json({status:400,response:"comment cannot be empty"})
				}
				else{
					var datetime = new Date();
					req.body.datetime=datetime;					
					req.body.customerid=result[0]._id;					
					model.insert(req.body,"comments")
					res.json({status:200,response:"successfully commented"})
				}
			}
		})
	})
}

function updatecomment(req,res){
	if(!validations.mongoid(req.body.commentid)){
		res.json({status:400,response:"not a valid comment id to  update"})
	}
	else {
		model.search(ObjectId(req.body.commentid),"_id","comments",function(result){
			if(result.length==0){
				res.json({status:400,response:"not a valid comment id to  update"})
			}
			else {
				model.search(req.headers.token,"token","customers",function(result1){
					if(result1[0]._id!=result[0].customerid){
						res.json({status:400,response:"not a valid user to update that comment"})
					}
					else if(validations.empty(req.body.comment)){
						res.json({status:400,response:"comment cannot be empty"})
					}
					else{
						var datetime = new Date();
						req.body.updatetime=datetime;
						var myquery = { _id:new ObjectId(req.body.commentid) };
						var newvalues = {$set: {comment: req.body.title,message:req.body.message,updatetime:req.body.updatetime} };
						model.update(myquery,newvalues,"post")
						res.json({status:200,response:"successfully post updated"}) 	
					}
				})
			}
		})
	}
}

module.exports = {makecomment,updatecomment};