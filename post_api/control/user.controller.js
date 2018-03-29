var randtoken = require('rand-token');
var user_model = require('../model/api_model.js')
var validation = require('../service/validation.js')
var output = require('../view/display.js')
var Cryptr = require('cryptr'),
cryptr = new Cryptr('RajeshKumar');
function user_login(req,res){
  var myobj = req.body
  myobj.password = cryptr.encrypt(myobj.password)
  var token = randtoken.generate(20);
  var qset = {"username": myobj.username}
  var newvalues = { $set: {"token": token} }; 
  user_model.user_logincheck(myobj,function(result){
    if(result != null){
      var dbpassword = result.password
      if(result.token != undefined){
        if(result.token != ""){
          output.display(0,"user already Logged in",[],[],function(resjson){
          res.send(resjson)})
        }
        if(result.token == ""){
          user_model.update("users",qset,newvalues)
          output.display(1,req.body.username + " is Online",[],[],function(resjson){
          res.send(resjson)})
        }
      }
      if(result.token == undefined){
        user_model.update("users",qset,newvalues)
        output.display(1,req.body.username + " is Online",[],[],function(resjson){
        res.send(resjson)})
      }
    }
    if(result == null ){
      output.display(0,"you are not an authourized user",[],[],function(resjson){
      res.send(resjson)})
    }
  })
}
function user_delete(req,res){
  var result = res.locals.result
  var myobj = req.headers.token
  var myquery = { "token": myobj };
  user_id = result._id
  user_model.delete("users",myquery,function(){
    user_model.deleteposts("users",myquery,function(obj){ 
      console.log(obj.result.n)
      if (obj.result.n === 0) {
        output.display(1,"User is deleted but, there is no post by this user to delete",[],[],function(resjson){
        res.send(resjson)})
      }
      if(obj.result.n >0){
        output.display(1,"Your user account and "+ obj.result.n +" post associated with this account has been deleted Successfully",[],[],function(resjson){
        res.send(resjson)})
      }
    })
  })
}
function user_logout(req,res){
  var token = req.headers.token
  var qset = {"token": token}
  var newvalues = { $set: {"token": ""} };
  user_model.update("users",qset,newvalues)
  output.display(1,"The user is Logged out Successfully",[],[],function(resjson){
  res.send(resjson)})
}
function user_read(req,res){
  user_model.user_read(function(result) {
    if (result.length > 0 ){
      output.display(1,result,[],[],function(resjson){
      res.send(resjson)})
    }
    else{       
      output.display(1,"There is no user to show",[],[],function(resjson){
      res.send(resjson)})
    }
  });
}
function user_update(req,res){
  var validations = []
  var myobj = req.body
  var qset = {"token": req.headers.token}
  var newvalues = { $set: myobj };
  var count = Object.keys(myobj).length;
  for(i in myobj){
    if(i === "first_name"){
      count = count - 1;
      if (validation.first_name(myobj.first_name)){
        validations.push("Enter the First name properly")
      }
    }
    else if(i === "last_name"){
      count -= 1;
      if (validation.last_name(myobj.last_name)){
        validations.push("Enter the Last name properly")
      }
    }
    else if(i === "username"){
      count -= 1;
      validations.push("Username Cannot be changed")
    }
    else if(i === "password"){
      count -= 1;
      if (validation.password(myobj.password)){
      validations.push("Enter the password properly, atleast 5 characters")
      }
    }
    console.log(count)
  }
  if(validations.length !=0){
    output.display(0,"",validations,[],function(resjson){
    res.send(resjson)})
  }
  if (count == 0 && validations.length== 0){
    myobj.password = cryptr.encrypt(myobj.password)
    user_model.update("users",qset,newvalues)
    output.display(1,"This user account has been updated",[],[],function(resjson){
    res.send(resjson)})
  }
  if (count != 0 && validations.length == 0){
    output.display(0,"please enter only required fields",[],[],function(resjson){
    res.send(resjson)})
  }
}
function user_create(req,res){
  var validations = []
  var mynewobj = {}
  var myobj = req.body
  var count = Object.keys(myobj).length;
  user_model.user_list(req.body.username,function(result) {
    if(result.length > 0){
      validations.push("Username already exists")
    }
    for(i in myobj){
      if(i === "first_name"){
        count = count - 1;
        if (validation.first_name(myobj.first_name)){
          validations.push("Enter the First name properly")
        }
        mynewobj.first_name = myobj.first_name
      }
      else if(i === "last_name"){
        count -= 1;
        if (validation.last_name(myobj.last_name)){
          validations.push("Enter the Last name properly")
        }
        mynewobj.last_name = myobj.last_name
      }
      else if(i === "username"){
        count -= 1;
        if (validation.username(myobj.username)){
          validations.push("Enter the username properly")
        }
        mynewobj.username = myobj.username
      }
      else if(i === "confirm_password"){
        count -= 1;
        if (myobj.password !=  myobj.confirm_password){
          validations.push("Password mismatch")
        }
      }
      else if(i === "password"){
        count -= 1;
        if (validation.password(myobj.password)){
          validations.push("Enter the password properly, atleast 5 characters")
        }
        mynewobj.password = myobj.password
      }
      console.log(count)
    }
    if(validations.length !=0){
      output.display(0,"",validations,[],function(resjson){
      res.send(resjson)})
    }
    if (count == 0 && resjson.details.validations.length== 0){
      mynewobj.password = cryptr.encrypt(myobj.password)
      user_model.create("users",mynewobj)
      output.display(1,"This user account has been Created",[],[],function(resjson){
      res.send(resjson)})
    } 
    if (count != 0 && resjson.details.validations.length == 0){
      output.display(0,"please enter only required fields",[],[],function(resjson){
      res.send(resjson)})
    }
  })
}
function user_profile(req,res,result){
  var user_details
  var myobj = req.headers.token
  var myquery = { "token": myobj };
  console.log(myobj)
  var result = res.locals.result
  user_id = result._id
  console.log(user_id)
  user_model.user_profile(myquery,function(details) {
    user_details = details
    user_model.user_posts(user_id,function(posts) {
      if (posts.length === 0) {
        posts.unshift(" there is no post, posted by this user")
        output.display(1,user_details,[],posts,function(resjson){
        res.send(resjson)})
      }
      if(posts.length >0){
        console.log("elsepart")
        posts.unshift("You have been posted "+ posts.length +" posts so far")
        output.display(1,user_details,[],posts,function(resjson){
        res.send(resjson)})
      }
    })
  });
}
module.exports = {user_login,user_delete,user_logout,user_read,user_update,user_create,user_profile}