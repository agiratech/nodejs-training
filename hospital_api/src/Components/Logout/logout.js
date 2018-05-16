import React, { Component } from 'react';
import logo from '../../logo.svg';
import '../../App.css';
import { Link } from 'react-router-dom';
class Logout extends Component {
  componentWillMount() {
    if(localStorage.getItem("token") == undefined || localStorage.getItem("token") == ""){
      alert("Please login to logout")
      this.props.history.replace('/login')
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />      
          <h2>Successfully Logged Out</h2><br/><br/><br/><br/>
             <Link to={'/'}>Go To Homepage</Link>
        </header>        
      </div>
    );
  } 
}

export default Logout;