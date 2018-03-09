rajeshkumarj@rajeshkumarj-desktop:~$ mongo
MongoDB shell version v3.6.3
connecting to: mongodb://127.0.0.1:27017
MongoDB server version: 3.6.3
Server has startup warnings: 
2018-03-09T11:28:16.636+0530 I STORAGE  [initandlisten] 
2018-03-09T11:28:16.636+0530 I STORAGE  [initandlisten] ** WARNING: Using the XFS filesystem is strongly recommended with the WiredTiger storage engine
2018-03-09T11:28:16.636+0530 I STORAGE  [initandlisten] **          See http://dochub.mongodb.org/core/prodnotes-filesystem
2018-03-09T11:28:18.065+0530 I CONTROL  [initandlisten] 
2018-03-09T11:28:18.065+0530 I CONTROL  [initandlisten] ** WARNING: Access control is not enabled for the database.
2018-03-09T11:28:18.065+0530 I CONTROL  [initandlisten] **          Read and write access to data and configuration is unrestricted.
2018-03-09T11:28:18.065+0530 I CONTROL  [initandlisten] 
> db.stats()
{
	"db" : "test",
	"collections" : 0,
	"views" : 0,
	"objects" : 0,
	"avgObjSize" : 0,
	"dataSize" : 0,
	"storageSize" : 0,
	"numExtents" : 0,
	"indexes" : 0,
	"indexSize" : 0,
	"fileSize" : 0,
	"fsUsedSize" : 0,
	"fsTotalSize" : 0,
	"ok" : 1
}
> use samp
switched to db samp
> db
samp
> --help
NaN
> exit
bye
rajeshkumarj@rajeshkumarj-desktop:~$ mongo --help
MongoDB shell version v3.6.3
usage: mongo [options] [db address] [file names (ending in .js)]
db address can be:
  foo                   foo database on local machine
  192.168.0.5/foo       foo database on 192.168.0.5 machine
  192.168.0.5:9999/foo  foo database on 192.168.0.5 machine on port 9999
Options:
  --shell                             run the shell after executing files
  --nodb                              don't connect to mongod on startup - no 
                                      'db address' arg expected
  --norc                              will not run the ".mongorc.js" file on 
                                      start up
  --quiet                             be less chatty
  --port arg                          port to connect to
  --host arg                          server to connect to
  --eval arg                          evaluate javascript
  -h [ --help ]                       show this usage information
  --version                           show version information
  --verbose                           increase verbosity
  --ipv6                              enable IPv6 support (disabled by default)
  --disableJavaScriptJIT              disable the Javascript Just In Time 
                                      compiler
  --disableJavaScriptProtection       allow automatic JavaScript function 
                                      marshalling
  --ssl                               use SSL for all connections
  --sslCAFile arg                     Certificate Authority file for SSL
  --sslPEMKeyFile arg                 PEM certificate/key file for SSL
  --sslPEMKeyPassword arg             password for key in PEM file for SSL
  --sslCRLFile arg                    Certificate Revocation List file for SSL
  --sslAllowInvalidHostnames          allow connections to servers with 
                                      non-matching hostnames
  --sslAllowInvalidCertificates       allow connections to servers with invalid
                                      certificates
  --sslFIPSMode                       activate FIPS 140-2 mode at startup
  --retryWrites                       automatically retry write operations upon
                                      transient network errors
  --jsHeapLimitMB arg                 set the js scope's heap size limit

Authentication Options:
  -u [ --username ] arg               username for authentication
  -p [ --password ] arg               password for authentication
  --authenticationDatabase arg        user source (defaults to dbname)
  --authenticationMechanism arg       authentication mechanism
  --gssapiServiceName arg (=mongodb)  Service name to use when authenticating 
                                      using GSSAPI/Kerberos
  --gssapiHostName arg                Remote host name to use for purpose of 
                                      GSSAPI/Kerberos authentication

file names: a list of files to run. files have to end in .js and will exit after unless --shell is specified
rajeshkumarj@rajeshkumarj-desktop:~$ mongo
MongoDB shell version v3.6.3
connecting to: mongodb://127.0.0.1:27017
MongoDB server version: 3.6.3
Server has startup warnings: 
2018-03-09T11:28:16.636+0530 I STORAGE  [initandlisten] 
2018-03-09T11:28:16.636+0530 I STORAGE  [initandlisten] ** WARNING: Using the XFS filesystem is strongly recommended with the WiredTiger storage engine
2018-03-09T11:28:16.636+0530 I STORAGE  [initandlisten] **          See http://dochub.mongodb.org/core/prodnotes-filesystem
2018-03-09T11:28:18.065+0530 I CONTROL  [initandlisten] 
2018-03-09T11:28:18.065+0530 I CONTROL  [initandlisten] ** WARNING: Access control is not enabled for the database.
2018-03-09T11:28:18.065+0530 I CONTROL  [initandlisten] **          Read and write access to data and configuration is unrestricted.
2018-03-09T11:28:18.065+0530 I CONTROL  [initandlisten] 
> db
test
> db use samp
2018-03-09T13:30:14.340+0530 E QUERY    [thread1] SyntaxError: missing ; before statement @(shell):1:3
> dbuse samp
2018-03-09T13:30:19.284+0530 E QUERY    [thread1] SyntaxError: missing ; before statement @(shell):1:6
> use samp
switched to db samp
> use test
switched to db test
> use samp
switched to db samp
> show dbs
admin      0.000GB
config     0.000GB
local      0.000GB
rest_test  0.000GB
> use local
switched to db local
> show dbs
admin      0.000GB
config     0.000GB
local      0.000GB
rest_test  0.000GB
> use samp
switched to db samp
> db
samp
> db
samp
> db.createCollection("samptable")
{ "ok" : 1 }
> show collections
samptable
> show dbs
admin      0.000GB
config     0.000GB
local      0.000GB
rest_test  0.000GB
samp       0.000GB
> use samp
switched to db samp
> db.createCollection("mycol", { capped : true, autoIndexId : true})
{
	"ok" : 0,
	"errmsg" : "specify size:<n> when capped is true",
	"code" : 14832,
	"codeName" : "Location14832"
}
> show dbs
admin      0.000GB
config     0.000GB
local      0.000GB
rest_test  0.000GB
samp       0.000GB
> use samp
switched to db samp
> show collections
samptable
> db.createCollection("mycol", { capped : true, autoIndexId : true } )
{
	"ok" : 0,
	"errmsg" : "specify size:<n> when capped is true",
	"code" : 14832,
	"codeName" : "Location14832"
}
> db.createCollection("mycol", { capped : true, autoIndexId : true, size : 
...    6142800, max : 10000 } )
{
	"note" : "the autoIndexId option is deprecated and will be removed in a future release",
	"ok" : 1
}
> show collections
mycol
samptable
> db.mycol.drop()
true
> show collections
samptable
> db.mycol.insert({
...    _id: ObjectId(7df78ad8902c),
...    title: 'MongoDB Overview', 
...    description: 'MongoDB is no sql database',
...    by: 'tutorials point',
...    url: 'http://www.tutorialspoint.com',
...    tags: ['mongodb', 'database', 'NoSQL'],
...    likes: 100
... })^C

> db.samptable.insert({
...    _id: ObjectId(7df78ad8902c),
...    title: 'MongoDB Overview', 
...    description: 'MongoDB is no sql database',
...    by: 'tutorials point',
...    url: 'http://www.tutorialspoint.com',
...    tags: ['mongodb', 'database', 'NoSQL'],
...    likes: 100
... })
2018-03-09T14:36:47.323+0530 E QUERY    [thread1] SyntaxError: identifier starts immediately after numeric literal @(shell):2:17
> db.createCollection("mycollection")
{ "ok" : 1 }
> show collections
mycollection
samptable
> db.myCollection.insertOne( { x: 1 } );
{
	"acknowledged" : true,
	"insertedId" : ObjectId("5aa24fd19dead8a20c065f14")
}
> db.myCollection.drop();
true
> db.mycollection.insert( { x: 1, } );
WriteResult({ "nInserted" : 1 })
> db.mycollection.insert( { x: 1,name: "rajesh" } );
WriteResult({ "nInserted" : 1 })
> db.mycollection.insert({_id: ObjectId(7df78ad8902c),title: 'MongoDB Overview',description: 'MongoDB is no sql database',by: 'tutorials point',url: 'http://www.tutorialspoint.com',tags: ['mongodb', 'database', 'NoSQL'],likes: 100})
2018-03-09T14:45:20.729+0530 E QUERY    [thread1] SyntaxError: identifier starts immediately after numeric literal @(shell):1:38
> db.mycollection.insert({_id: ObjectId(7df78ad8902c),title:'MongoDB Overview',description: 'MongoDB is no sql database',by: 'tutorials point',url: 'http://www.tutorialspoint.com',tags: ['mongodb', 'database', 'NoSQL'],likes: 100})
2018-03-09T14:46:13.280+0530 E QUERY    [thread1] SyntaxError: identifier starts immediately after numeric literal @(shell):1:38
> db.mycollection.insert( { x: 1,name: "rajesh",title: "MongoDB Overview" } );
WriteResult({ "nInserted" : 1 })
> db.mycollection.insert({title:'MongoDB Overview',description: 'MongoDB is no sql database',by: 'tutorials point',url: 'http://www.tutorialspoint.com',tags: ['mongodb', 'database', 'NoSQL'],likes: 100})
WriteResult({ "nInserted" : 1 })
> db.createcollection("testcol",{capped: true, autoIndexedId: true})
2018-03-09T14:49:18.844+0530 E QUERY    [thread1] TypeError: db.createcollection is not a function :
@(shell):1:1
> db
samp
> db.createCollection("testcol",{capped: true, autoIndexedId: true})
{
	"ok" : 0,
	"errmsg" : "specify size:<n> when capped is true",
	"code" : 14832,
	"codeName" : "Location14832"
}
> db.createCollection("testcol",{capped: true, autoIndexedId: true, size:10000})
{
	"ok" : 0,
	"errmsg" : "The field 'autoIndexedId' is not a valid collection option. Options: { capped: true, autoIndexedId: true, size: 10000.0 }",
	"code" : 72,
	"codeName" : "InvalidOptions"
}
> db.createCollection("testcol",{capped: true, autoIndexId: true, size:10000})
{
	"note" : "the autoIndexId option is deprecated and will be removed in a future release",
	"ok" : 1
}
> show collections
mycollection
samptable
testcol
> db.testcol.insert({name: "rajesh", age: 22, mail_id: "rajeshkumaarj@gmail.com"})
WriteResult({ "nInserted" : 1 })
> db.testcol.find()
{ "_id" : ObjectId("5aa252509dead8a20c065f19"), "name" : "rajesh", "age" : 22, "mail_id" : "rajeshkumaarj@gmail.com" }
> db.testcol.find().pretty()
{
	"_id" : ObjectId("5aa252509dead8a20c065f19"),
	"name" : "rajesh",
	"age" : 22,
	"mail_id" : "rajeshkumaarj@gmail.com"
}
> db.samp.findOne().pretty()
2018-03-09T14:54:30.255+0530 E QUERY    [thread1] TypeError: db.samp.findOne(...) is null :
@(shell):1:1
> db.samp.find()
> db.mycollection.find()
{ "_id" : ObjectId("5aa2501e9dead8a20c065f15"), "x" : 1 }
{ "_id" : ObjectId("5aa250319dead8a20c065f16"), "x" : 1, "name" : "rajesh" }
{ "_id" : ObjectId("5aa251149dead8a20c065f17"), "x" : 1, "name" : "rajesh", "title" : "MongoDB Overview" }
{ "_id" : ObjectId("5aa2512f9dead8a20c065f18"), "title" : "MongoDB Overview", "description" : "MongoDB is no sql database", "by" : "tutorials point", "url" : "http://www.tutorialspoint.com", "tags" : [ "mongodb", "database", "NoSQL" ], "likes" : 100 }
> db.mycollection.findOne()
{ "_id" : ObjectId("5aa2501e9dead8a20c065f15"), "x" : 1 }
> db.mycollection.findOne().pretty()
2018-03-09T14:55:16.094+0530 E QUERY    [thread1] TypeError: db.mycollection.findOne(...).pretty is not a function :
@(shell):1:1
> db.mycollection.findOne({$and:["x"=1]}).pretty()
2018-03-09T15:01:30.950+0530 E QUERY    [thread1] ReferenceError: invalid assignment left-hand side @(shell):1:31
> db.mycollection.find({$and:["x"=1]}).pretty()
2018-03-09T15:01:50.045+0530 E QUERY    [thread1] ReferenceError: invalid assignment left-hand side @(shell):1:28
> db.mycollection.find({$and:"x"=1}).pretty()
2018-03-09T15:02:34.660+0530 E QUERY    [thread1] ReferenceError: invalid assignment left-hand side @(shell):1:27
> db.mycollection.find({$and: "x"=1}).pretty()
2018-03-09T15:03:14.044+0530 E QUERY    [thread1] ReferenceError: invalid assignment left-hand side @(shell):1:28
> db.mycollection.find({$and: x=1}).pretty()
Error: error: {
	"ok" : 0,
	"errmsg" : "$and must be an array",
	"code" : 2,
	"codeName" : "BadValue"
}
> db.mycollection.find({$and:[ x=1]}).pretty()
Error: error: {
	"ok" : 0,
	"errmsg" : "$or/$and/$nor entries need to be full objects",
	"code" : 2,
	"codeName" : "BadValue"
}
> db.mycollection.find({$and:[ x=1,name = "rajesh"]}).pretty()
Error: error: {
	"ok" : 0,
	"errmsg" : "$or/$and/$nor entries need to be full objects",
	"code" : 2,
	"codeName" : "BadValue"
}
> db.mycollection.find({$and:[{x=1}]}).pretty()
2018-03-09T15:05:50.249+0530 E QUERY    [thread1] SyntaxError: missing : after property id @(shell):1:30
> db.mycollection.find({$and:[{"name":"rajesh"}]}).pretty()
{ "_id" : ObjectId("5aa250319dead8a20c065f16"), "x" : 1, "name" : "rajesh" }
{
	"_id" : ObjectId("5aa251149dead8a20c065f17"),
	"x" : 1,
	"name" : "rajesh",
	"title" : "MongoDB Overview"
}
> db.mycollection.find({},{[{"name":"rajesh"}]}).pretty()
2018-03-09T15:13:11.000+0530 E QUERY    [thread1] SyntaxError: missing : after property id @(shell):1:44
> db.mycollection.find({},{"name":"rajesh"}).pretty()
{ "_id" : ObjectId("5aa2501e9dead8a20c065f15") }
{ "_id" : ObjectId("5aa250319dead8a20c065f16"), "name" : "rajesh" }
{ "_id" : ObjectId("5aa251149dead8a20c065f17"), "name" : "rajesh" }
{ "_id" : ObjectId("5aa2512f9dead8a20c065f18") }
> db.mycollection.find({$or:[{"name":"rajesh"}]}).pretty()
{ "_id" : ObjectId("5aa250319dead8a20c065f16"), "x" : 1, "name" : "rajesh" }
{
	"_id" : ObjectId("5aa251149dead8a20c065f17"),
	"x" : 1,
	"name" : "rajesh",
	"title" : "MongoDB Overview"
}
> db.mycollection.find({"name":"rajesh"}).pretty()
{ "_id" : ObjectId("5aa250319dead8a20c065f16"), "x" : 1, "name" : "rajesh" }
{
	"_id" : ObjectId("5aa251149dead8a20c065f17"),
	"x" : 1,
	"name" : "rajesh",
	"title" : "MongoDB Overview"
}
> 
