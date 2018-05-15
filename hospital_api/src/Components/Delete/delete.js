import React, { Component } from 'react';
import logo from '../../logo.svg';
import '../../App.css';
import { Link } from 'react-router-dom';
class Delete extends Component {
  componentWillMount() {
    if(localStorage.getItem("token") == undefined || localStorage.getItem("token") == ""){
      alert("Please login to delete the patient record")
      this.props.history.replace('/login')
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />      
          <h2>Successfully deleted the patient record</h2><br/><br/>
             <Link to={'/loginint'}>Logout</Link><br/><br/>
             <Link to={'/'}>Go To Homepage</Link><br/><br/>
             <Link to={'/billingRead'}>Go to Read page</Link>
        </header>        
      </div>
    );
  } 
}

export default Delete;