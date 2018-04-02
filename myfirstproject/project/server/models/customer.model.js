var mongo=require('../config/mongo.connection.js')

function search(value,field,collection,callback) {
  mongo.get().collection(collection).find({[field]:value}).toArray(function(err, result) {
		if (err) throw err;
		callback(result)
  });
}

function insert(record,collection) {
	mongo.get().collection(collection).insertOne(record, function(err, res) {
		if (err) throw err;
	});
}

function update(oldvalues,newvalues,collection) {
	mongo.get().collection(collection).updateOne(oldvalues, newvalues, function(err, res) {
		if (err) throw err;
	});
}

function remove(myquery,collection) { 
	mongo.get().collection(collection).remove(myquery, function(err, obj) {
		if (err) throw err;
	});
}

function removeall(myquery,collection) {
	mongo.get().collection(collection).deleteMany(myquery, function(err, obj) {
		if (err) throw err;
	});
}

module.exports={search,insert,update,remove,removeall}