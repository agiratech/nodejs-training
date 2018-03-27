var mongo=require('../config/mongo.connection.js')

exports.search=function(value,field,collection,callback){

   mongo.get().collection(collection).find({[field]:value}).toArray(function(err, result) {

        if (err) throw err;
        callback(result)
    });
}


exports.insert=function(record,collection){

	
	mongo.get().collection(collection).insertOne(record, function(err, res) {

		if (err) throw err;

	});

}

exports.update=function(oldvalues,newvalues,collection){
    mongo.get().collection(collection).updateOne(oldvalues, newvalues, function(err, res) {
							    	
        if (err) throw err;
        console.log("1 document updated");  

      });
}


