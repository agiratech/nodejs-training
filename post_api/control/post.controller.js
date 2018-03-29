var post_model = require('../model/api_model.js')
var validation = require('../service/validation.js')
var output = require('../view/display.js')
var moment = require('moment');
var ObjectId = require('mongodb').ObjectId;
const isHex = require('is-hex')
var mynewobj = {}
var validations = []
function post_create(req,res){
	var result = res.locals.result
	var myobj = req.body
	var token = req.headers.token
	var curr_uname = result.username
	var curr_id = result._id
	var count = Object.keys(myobj).length;
	var date = moment().format('LLL');
	for(i in myobj){
    if(i == "title"){
      count = count - 1;
			if (validation.title(myobj.title)){
				validations.push("Please enter the Title of the post")
			}
		}
		if(i == "message"){
        	count = count - 1;
			if (validation.title(myobj.message)){
				console.log("checking message") 
				validations.push("Please enter some message")
			}
		}
	}
	if(validations.length !=0){
		output.display(0,"",validations,[],function(resjson){
 		res.send(resjson)})
	}
	if (count == 0 && validations.length== 0){
		console.log("entered")
		myobj.date_time = date
		myobj.user_id = curr_id
  	post_model.create("posts",myobj)
 		output.display(1,"Post has been created",[],[],function(resjson){
 		res.send(resjson)})
	}
	if (count != 0 && validations.length == 0){
		output.display(0,"please enter only required fields",[],[],function(resjson){
		res.send(resjson)})
  }
}
function post_delete(req,res){
	var myobj = req.body
	var token = req.headers.token
	var result = res.locals.result
	if (result != null && myobj.post_id.length == 24 && isHex(myobj.post_id)){
		var curr_uname = result.username
		var curr_id = new ObjectId(result._id)
		p_id = new ObjectId(req.body.post_id)
		var qset = {"_id": p_id}
		post_model.findOne("posts",qset,function(result){
			if(result === null){
				output.display(0,"There is no such post to delete",[],[],function(resjson){
 				res.send(resjson)})
			}
			else{
				var p_userid = new ObjectId(result.user_id)
				console.log(result.user_id)
				console.log("post found")
				console.log(curr_id)
				var qset = {"_id": p_id,"user_id":curr_id}
				post_model.findOne("posts",qset,function(result){
					if(result === null){
				 		output.display(0,"This post is not created by this user",[],[],function(resjson){
 						res.send(resjson)})
					}
					if(result != null){
						var qset = {"_id": p_id}
						post_model.delete("posts",qset,function(err,result){
				 		output.display(1,"Post has been deleted",[],[],function(resjson){
 						res.send(resjson)})
						})
					}
				})
			}
		})
	}
	else{
		output.display(0,"There is no such post to delete",[],[],function(resjson){
	 	res.send(resjson)})
	}
}

function post_read(req,res){
	var result = res.locals.result
	var token = req.headers.token	
	var curr_uname = result.username
	var curr_id = new ObjectId(result._id)
	post_model.post_read(function(result){
  	output.display(1,result.length +" posts so far",[],result,function(resjson){
		res.send(resjson)}) 
  })
}

function post_update(req,res){
	var validations = []
	var date = moment().format('LLL');
	var myobj = req.body
	var token = req.headers.token
	var result = res.locals.result
	if(myobj.post_id == undefined){
	output.display(0,"please enter the post id",[],[],function(resjson){
	res.send(resjson)})
	}
	if (result != null && myobj.post_id.length == 24 && isHex(myobj.post_id)){
		var curr_uname = result.username
		var curr_id = result._id
		var count = Object.keys(myobj).length;
		// p_id = "ObjectId('" + req.body.post_id + "')"
		p_id = new ObjectId(req.body.post_id)
		var qset = {"_id": p_id}
		post_model.findOne("posts",qset,function(result){
			if(result === null){
				output.display(0,"There is no such post to update",[],[],function(resjson){
				res.send(resjson)})
			}
			else{
				for(i in myobj){
					if(i === "title"){
						count = count - 1;
						mynewobj.title = myobj.title
						if (validation.title(myobj.title)){
							console.log("checking Title") 
							validations.push("Please enter some Title")
						}
					}	
					if(i === "message"){
						count = count - 1;
						mynewobj.message = myobj.message
						if (validation.title(myobj.message)){
							console.log("checking message") 
							validations.push("Please enter some message")
						}
					}
				}
				if(validations.length !=0){
					output.display(0,"",validations,[],function(resjson){
					res.send(resjson)})
				}
				if (count == 1 && validations.length== 0){
					console.log("entered")
					console.log(new ObjectId(req.body.post_id))
					var qset = {"_id": p_id,"user_id": curr_id}
					post_model.findOne("posts",qset,function(result){
						if(result === null){
							output.display(0,"This post is not created by this user",[],[],function(resjson){
							res.send(resjson)})
						}
						else{
							var qset = {"_id": p_id,}
							var newvalues = {$push: {"updated_time": date}, $set: mynewobj}
							post_model.update("posts",qset,newvalues)
							output.display(1,"Post has been updated",[],[],function(resjson){
							res.send(resjson)})
						}
					}) 
				}
				if (count != 1 && validations.length==0){
					output.display(0,"Enter only required fields",[],[],function(resjson){
					res.send(resjson)})
				}
			}
		})
	}
	else{
		output.display(0,"There is no such post to update",[],[],function(resjson){
		res.send(resjson)})
	}
}

module.exports = {post_create,post_delete,post_read,post_update}