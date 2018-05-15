import React, { Component } from 'react';
import logo from '../../logo.svg';
import '../../App.css';
import { Link } from 'react-router-dom';
class Docupsuccess extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />      
          <h2>Successfully Updated</h2><br/><br/>
             <Link to={'/login'}>Go To Login</Link><br/><br/>
             <Link to={'/'}>Go To Homepage</Link><br/><br/>
             <Link to={'/loginint'}>Logout</Link>            
        </header>        
      </div>
    );
  } 
}

export default Docupsuccess;