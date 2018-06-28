import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();


// import React from 'react'
// import { render } from 'react-dom'
// import App from './components/app'
// import './stylesheets/style.scss'

// render(
//   <App />, 
//   document.getElementById('root'),
//   function(){
//     let loader = document.getElementById('app-loader');
//     loader.parentNode.removeChild(loader);
//   }
// )