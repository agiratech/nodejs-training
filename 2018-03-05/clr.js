var colors = require('colors');
console.log("hiii".red);


var colors = require('colors');
 
colors.setTheme({
  silly: 'rainbow',
  input: 'grey',
  verbose: 'cyan',
  prompt: 'grey',
  info: 'green',
  data: 'grey',
  help: 'cyan',
  warn: 'yellow',
  debug: 'blue',
  error: 'red'
});



console.log("this is an error".error);
 
console.log("this is a warning".warn);
// node color.js --no-color