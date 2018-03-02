var reg = /ab*/;
var reg = new RegExp('ab*');
console.log(reg);

var fs = require('fs');
var filename = 'sample.txt';
var str = fs.readFileSync(filename).toString();
var pattern = /<(\"[^\"]*\"|'[^']*'|[^'\">])*>/gim;

var myarray = str.match( pattern );
var len = myarray.length;
console.log(pattern);
console.log("Occurrences of pattern in the string is : " + len);





var str = 'rjbitdemo@gmail.com'
var pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

var res = str.match( pattern );
if(res){
	console.log("Valid email address");
}else{
	console.log("Please enter a valid email address");
}



									

var pattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;;
var pattern = /^[a-fA-F0-9]+$/g;
var pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

// console.count('default');
// console.count('remo');
// console.count('rj');
// console.countReset('remo');
// console.count('remo');
// console.count('rj');
// console.count();	


// console.error("error log\n error")
var check = /\d/
console.log(check.test("21"))