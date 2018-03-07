var createUser = function(id, callback) {
    callback(null, {
        id: 'user' + id
    });
};


async.times(5, function(n, next) {
    createUser(n, function(err, user) {
        next(err, user);
    });
}, function(err, users) {
});


//*************************************************************************************//

async.times(10, function(n, next) {
        next(null, {
        id: 'user' + n
    });
    
}, function(err, users) {
    console.log(users)
});


//*************************************************************************************//

async.timesLimit(10, 5, function(n, next) {
        next(null, {
        id: 'user' + n
    });
    
}, function(err, users) {
    console.log(users)
});


//*************************************************************************************//

async.timesSeries(10, function(n, next) {
        next(null, {
        id: 'user' + n
    });
    
}, function(err, users) {
    console.log(users)
});

