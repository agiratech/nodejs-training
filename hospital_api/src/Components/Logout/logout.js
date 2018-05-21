import React, { Component } from 'react';
import logo from '../../logo.svg';
import '../../App.css';
import { Link } from 'react-router-dom';
import * as service from '../../Services/service'
class Logout extends Component {
  componentWillMount() {
    if(localStorage.getItem("token") == undefined || localStorage.getItem("token") == ""){
      alert("Please login to logout")
      this.props.history.replace('/login')
      console.log("Logout")
    }
    else{
      service.logout(localStorage.getItem("token")).then(res=>{
        // localStorage.removeItem("token",res.token)
        // console.log("LLLLLLLLLLLLLLLLLLLLLLLL", res.token)
   }).then(this.props.history.replace('/login')) 
    }
    
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />      
          <h2>Successfully Logged Out</h2><br/><br/><br/><br/>
             <Link to={'/login'}>Login page</Link>
        </header>        
      </div>
    );
  } 
}

export default Logout;


// import { Component } from 'react'
// import * as service from '../../Services/service';
// class Logout extends Component {
//   constructor() {
//     super()
//     this.state = {
//       token: ''
//     }
//   }
//   componentWillMount() {
//       service.logout(localStorage.getItem("token")).then(res=>{
//         if(res.code === "0" || localStorage.getItem("token") == undefined || localStorage.getItem("token") == ""){
//       alert("Please login to logout")      
//       this.props.history.replace('/login')
//         }
//         else{
//       localStorage.removeItem("token",res.token)
//  }}).then(this.props.history.replace('/loginint'))
//   }
//   render() {
//     return null;
//   }
// }

// export default Logout;