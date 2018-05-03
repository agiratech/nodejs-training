import React, { Component } from 'react';
import './App.css';
import {Router, Route, browserHistory } from 'react-router';
import Login from './components/Login'
import Home from './components/Home' 
import Navbar from './components/layout/Navbar'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Navbar />
        <Router history={browserHistory}>
        <Route exact path="/" component={Home}/>
        <Route exact path="/login" component={Login}/>
        {/* <Route exact path="/login" component={Login}/> */}
        </Router>
      </div>
    );
  }
}

export default App;
