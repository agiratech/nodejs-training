'use strict';

console.log("app.js is running!!");
var object = {
  name: 'krishna',
  age: 22,
  location: 'madurai'
  //JSX - Javascript XML
};var template = React.createElement(
  'div',
  null,
  React.createElement(
    'p',
    null,
    'Name: ',
    object.name
  ),
  React.createElement(
    'p',
    null,
    'age:',
    object.age
  ),
  React.createElement(
    'p',
    null,
    'age:',
    object.location
  ),
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      'info one'
    ),
    React.createElement(
      'li',
      null,
      'info two'
    )
  )
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
