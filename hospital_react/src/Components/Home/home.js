import React, { Component } from 'react';
import logo from '../../logo.svg';
import '../../App.css';
import { BrowserRouter as  Route, Link } from 'react-router-dom';
import Form from '../Form/Form';
import Signup from '../Signup/signup';
class Home extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />      
          <h2>Welcome to the homepage of hospital api</h2>
             <Route exact path='/login' component={Form} />
             <Route exact path='/signup' component={Signup} /><br/><br/><br/><br/>
             <Link to={'/login'}>Login</Link><br/><br/>
             <Link to={'/signup'}>Signup</Link><br/><br/>
             <Link to={'/logout'}>Logout</Link><br/><br/>             
        </header>        
      </div>
    );
  } 
}

export default Home;