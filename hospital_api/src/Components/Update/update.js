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
        <nav class="navbar navbar-default">
<div class="container-fluid">
<div class="navbar-header">
<a class="nav navbar-nav" href="/doctorUpdate">Update Doctor's Page</a>
</div>
<ul class="nav navbar-nav">
<li class="active"><a href="/loginint">Logout</a></li>
</ul>
</div>
</nav>
          <img src={logo} className="App-logo" alt="logo" />      
          <h2>Successfully updated the patient details</h2><br/><br/>
             <Link to={'/billingRead'}>Go to Read page</Link>
        </header>        
      </div>
    );
  } 
}

export default Update;