// var doctorModel = require('../models/doctor.model');
// var ObjectId = require('mongodb').ObjectId;

// function login(req,res,next){
//   console.log('inside login')
// 	// var searchParam = {username:req.body.username,pwd:req.body.pwd}
// 	var docId = {_id:new ObjectId(req.body.id)}
// 	var collectionName = "doctor"
// 	// console.log(searchParam)
// 	doctorModel.getDoctorByToken(collectionName,docId,function(result){
// 			console.log('inside doctormodel')
// 			// if(err){
// 			//     res.end("error")
// 			// }
// 			// res.send(result.hospital_id)
// 			var hosId = {hospital_id:result.hospital_id}
// 			doctorModel.getDoctorByToken('hospital',hosId,function(result1){
// 				result.hospital_name=result1.hospital_name
// 				res.json(result)
// 			})
// 	});
// }
// module.exports = login

var doctorModel = require('../models/doctor.model');


function login(req,res){
  console.log('inside login')
	var searchParam = {username:req.body.username,pwd:req.body.pwd}
	var collectionName = "doctor"
	console.log(searchParam)
	doctorModel.getDoctorByToken(collectionName,searchParam,function(result){
			console.log('inside doctormodel')
			// if(err){
			//     res.end("error")
			// }
			res.send(result)
	});
}
module.exports = {login}





var doctorModel = require('../models/doctor.model');
var ObjectId = require('mongodb').ObjectId;

function login(req,res,next){
  console.log('inside login')
	// var searchParam = {username:req.body.username,pwd:req.body.pwd}
	var docId = {_id:new ObjectId(req.body.id)}
	var collectionName = "doctor"
	// var collectionName1 = "patient"
	// console.log(searchParam)


	doctorModel.getDoctorByToken(collectionName,docId,function(result){
			console.log('inside doctormodel')
			// if(err){
			//     res.end("error")
			// }
			// res.send(result.hospital_id)
			// var hosId = {hospital_id:result.hospital_id}
			var hosId = {hospital_id:new ObjectId(result._id)}

			doctorModel.getDoctorByToken('hospital',hosId,function(result1){
				result.hospital_name=result1.hospital_name
				res.json(result)
			})
	});
}
module.exports = login



// var doctorModel = require('../models/doctor.model');
// var ObjectId = require('mongodb').ObjectId;

// function login(req,res,next){
//   console.log('inside login')
// 	// var searchParam = {username:req.body.username,pwd:req.body.pwd}
// 	var docId = {_id:new ObjectId(req.body.id)}
// 	var collectionName = "doctor"
// 	// var collectionName1 = "patient"
// 	// console.log(searchParam)


// 	doctorModel.getDoctorByToken(collectionName,docId,function(result){
// 			console.log('inside doctormodel')
// 			// if(err){
// 			//     res.end("error")
// 			// }
// 			// res.send(result.hospital_id)
// 			var hosId = {hospital_id:result.hospital_id}
// 			doctorModel.getDoctorByToken('hospital',hosId,function(result1){
// 				result.hospital_name=result1.hospital_name
// 				res.json(result)
// 			})
// 	});
// }
// module.exports = login












var doctorModel = require('../models/doctor.model');
var ObjectId = require('mongodb').ObjectId;

function login(req,res,next){
  console.log('inside login')
	// var searchParam = {username:req.body.username,pwd:req.body.pwd}
	var docId = {_id:new ObjectId(req.body.id)}
	var collectionName = "doctor"
	// console.log(searchParam)
	doctorModel.getDoctorByToken(collectionName,docId,function(result){
			console.log('inside doctormodel')
			// if(err){
			//     res.end("error")
			// }
			// res.send(result.hospital_id)
			var hosId = {hospital_id:result.hospital_id}
			doctorModel.getDoctorByToken('hospital',hosId,function(result1){
				result.hospital_name=result1.hospital_name
				res.json(result)
			})
	});
}
module.exports = login







var doctorModel = require('../models/doctor.model');


function login(req,res,next){
  console.log('inside login')
	var searchParam = {username:req.body.username,pwd:req.body.pwd}
	var collectionName = "doctor"
	console.log(searchParam)
	doctorModel.getDoctorByToken(collectionName,searchParam,function(result){
			console.log('inside doctormodel')
			// if(err){
			//     res.end("error")
			// }
			res.send(result)
	});
}
module.exports = login
