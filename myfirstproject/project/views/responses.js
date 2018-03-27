	
	var jsonObj = {
	status : 400,
	response : "" ,
    message :""

	}
exports.getresult=function(){
	return jsonObj;
}
exports.updateresponse=function(res){
	jsonObj.response=res;
}
exports.updatemessage=function(mes){
	jsonObj.message+=mes;
}
exports.updatestatus=function(sta){
	jsonObj.status=sta;
}