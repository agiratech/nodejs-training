var express = require('express');
var app = express();

var user = require('./user');
var post = require('./post');

app.use('/user', user);
app.use('/post', post);

module.exports = app;