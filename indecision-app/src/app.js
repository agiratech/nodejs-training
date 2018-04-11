console.log("app.js is running!!")
var object = {
  name:'krishna',
  age:22,
  location:'madurai'
}
//JSX - Javascript XML
var template = (
  <div>
    <p>Name: {object.name}</p>
    <p>age:{object.age}</p>
    <p>age:{object.location}</p>
    <ol>
      <li>info one</li>
      <li>info two</li>
    </ol>
  </div>
);

var appRoot = document.getElementById('app')

ReactDOM.render(template, appRoot)