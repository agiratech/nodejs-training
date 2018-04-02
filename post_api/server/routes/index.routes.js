var express = require('express');
var app = express();

var user = require('./user.routes');
var post = require('./post.routes');

app.use('/user', user);
app.use('/post', post);

module.exports = app;