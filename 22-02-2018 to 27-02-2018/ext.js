function addNumber(a, b) {
  console.log("In call stack of addNumber");
  return a+b;
}

function multiplyNumber(a, b) {
  console.log("In call stack of multiplyNumber");
  var c = 0;
  setTimeout(function()
  {
  c = addNumber(a, b);
 console.log('Return value from addNumber - ' + c);
  }, 1000);
  return c*b;
}

console.log("in the call stack of main/anonymous function");
console.log(multiplyNumber(2,3));