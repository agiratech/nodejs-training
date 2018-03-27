var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var validator = require('validator');
var app = express();
var mongo=require('./server/config/mongo.connection')
mongo.conection();
var routes=require('./server/routes/index.route.js')






// var logout = require('./routes/logout');
// var login=require('./routes/login');
// var updateprofile=require('./routes/updateprofile');
// var createpost = require('./routes/createpost');
// var updatepost=require('./routes/updatepost');
// var deletepost=require('./routes/deletepost');
// var deleteuser=require('./routes/deleteuser');
// var user=require('./routes/user');

// var registration=require('./routes/registration')



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');



app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// var mongo=require('./mongo')
// app.use('/logout', logout);
// app.use('/login',login);
// app.use('/updateprofile',updateprofile);
// app.use('/createpost', createpost);
// app.use('/updatepost',updatepost);
// app.use('/deletepost',deletepost);
// app.use('/user',user);
// app.use('/deleteuser',deleteuser);
// app.use('/registration',registration);

app.use('/',routes)
/// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
