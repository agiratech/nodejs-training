var http = require('http');
var fs = require('fs');
console.log('Server will listen at : http://127.0.0.1:3000 ');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'application/json'});
    let json_response = {
        status : 200 , 
        message : 'succssful' , 
        result : [ 'sunday' , 'monday' , 'tuesday' , 'wednesday' ] , 
        code : 2000
    }
    console.log('Server Running');
    res.write( JSON.stringify(json_response) ); 
    res.end();
}).listen(3000);


//2

var http = require('http');
var fs = require('fs');
console.log('Server will listen at : http://127.0.0.1:3000 ');
http.createServer( (req, res)=> {
    console.log("Port Number : 3000");
    res.writeHead(200, {"Content-Type": "application/pdf"});
     
    fs.readFile('MongoDBNotesForProfessionals.pdf', (err,data) => {
        if (err) throw err;        
            res.write(data);
            res.end();       
    });
}).listen(3000);


//3

    res.writeHead(200, {'Content-Type': 'audio/mp3'});
    fs.exists('hall_of_fame.mp3',function(exists){
        if(exists)
        {
            var rstream = fs.createReadStream('hall_of_fame.mp3');
            rstream.pipe(res);
        }
        else
        {
            res.end("Its a 404");
        }
    });
