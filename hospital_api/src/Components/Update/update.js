import React, { Component } from 'react';
import logo from '../../logo.svg';
import '../../App.css';
import { Link } from 'react-router-dom';
class Update extends Component {
  componentWillMount() {
    if(localStorage.getItem("token") == undefined || localStorage.getItem("token") == ""){
      alert("Please login to update the patient details")
      this.props.history.replace('/login')
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />      
          <h2>Successfully updated the patient details</h2><br/><br/>
             <Link to={'/loginint'}>Logout</Link><br/><br/>
             <Link to={'/'}>Go To Homepage</Link><br/><br/>
             <Link to={'/billingRead'}>Go to Read page</Link>
        </header>        
      </div>
    );
  } 
}

export default Update;