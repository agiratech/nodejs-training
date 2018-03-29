var dbconn = require('../config/mongoconnect.js')
var output = require('../view/display.js')

exports.check = function (req,res,next) {
  var token = req.headers.token
  dbconn.get().collection("users").findOne({"token": token},function(err,result){
  	if(err) throw err;
  	if (result === null || req.headers.token.length == 0){
      output.display(0,"please login to Continue",[],[],function(resjson){
      res.send(resjson)})
    }
    if (result != null){
      res.locals.result = result
      next()
    }
  });
}