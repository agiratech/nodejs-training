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
		if(!validations.mongoid(req.body.postid)){
			res.json({status:400,response:"not a valid post id to comment"})
		}
		else {
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
		}
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
					if(!(result1[0]._id.equals(result[0].customerid))){
						res.json({status:400,response:"not a valid user to update that comment"})
					}
					else if(validations.empty(req.body.comment)){
						res.json({status:400,response:"comment cannot be empty"})
					}
					else{
						var datetime = new Date();
						req.body.updatetime=datetime;
						var myquery = { _id:new ObjectId(req.body.commentid) };
						var newvalues = {$set: {comment: req.body.comment,updatetime:req.body.updatetime} };
						model.update(myquery,newvalues,"comments")
						res.json({status:200,response:"successfully comment updated"}) 	
					}
				})
			}
		})
	}
}

function deletecomment(req,res){
	if(!validations.mongoid(req.body.commentid)){
		res.json({status:400,response:"not a valid comment id to  delete"})
	}
	else{	
		model.search(ObjectId(req.body.commentid),"_id","comments",function(result){
			if(result.length==0){	
				res.json({status:400,response:"comment id entered is invalid please try with valid postid"})
			}
			else{
				model.search(ObjectId(result[0].customerid),"_id","customers",function(result1){
					if(result1[0].token!=req.headers.token){
						res.json({status:400,response:"not a valid user token to update "})
					}
					else{
						var myquery = { _id: new ObjectId(req.body.commentid) };
						model.remove(myquery,"comments");
						res.json({status:200,response:"succesfully comment deleted "})
					}
				})
			}	
		});
	}
}

module.exports = {makecomment,updatecomment,deletecomment};