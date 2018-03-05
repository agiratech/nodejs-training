//PROMISE.RESOLVE
var promise1 = Promise.resolve([1, 2, 3]);

promise1.then(function(value) {
  console.log(value);
});

