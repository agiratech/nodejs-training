exports.display = function(err,description,validations,posts,callback){
	var resjson ={
	  "status": 0,
	  "type": "",
	  "details": {
	    "description": "",
	    "validations": [],
	    "posts": []
	  }
	}
	if(err == 1){
		resjson.status = 200
		resjson.type = "Success"
	}
	if(err == 0){
		resjson.status = 400
		resjson.type = "Error"
	}
	resjson.details.description = description
	if(validations.length == 0){
		delete resjson.details.validations
	}
	else{
		resjson.details.validations.push(validations)
	}
	if(posts.length == 0){
		delete resjson.details.posts
	}
	else{
		resjson.details.posts.push(posts)
	}
	console.log(resjson)
	callback(resjson)
}