//PROMISE.PROTOTYPE.CATCH()
var promise1 = new Promise(function(resolve, reject) {
  throw 'Oops Sorry!';
});

promise1.catch(function(error) {
  console.log(error);
});