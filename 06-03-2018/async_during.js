//ASYNC_DURING
var count = 0;
async.during(
    function (callback) {
        return callback(null, count <= 5);
    },
    function (callback) {
        count++;
        setTimeout(callback, 1000);
        console.log("The result is executed in every 1000 milliseconds and the number of iterations are : " +count)
    },
    function (err) {
        // 5 seconds have passed
    }
);
