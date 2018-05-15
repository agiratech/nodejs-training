import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as service from '../../Services/service';
class App extends Component {
  constructor(props) {
    super(props);
    const token = {headers:{token}}
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
}
componentWillMount() {
    if(localStorage.getItem("token")==undefined || localStorage.getItem("token") == ""){
        alert("login before entering the page")
      this.props.history.replace('/login')
    }
  }
onChange(e) {
  this.setState({ [e.target.name]: e.target.value })
}
onSubmit(e)
  {
      e.preventDefault();
      service.logout(localStorage.getItem("token")).then(res=>{
          if(res.code === "0"){
            this.props.history.replace('/loginint')
          }
          else{
        localStorage.removeItem("token",res.token)
   }}).then(this.props.history.replace('/logout'))
  }
  render() {
     return (
      <div className="App">
      <header>
        <h2> Successfully Logged In </h2>
      </header>
      <form onSubmit={this.onSubmit}>
        <br/><br/><br/>
        <input type='submit' value='Logout'/><br/><br/>
        <Link to={'/doctorUpdate'}>Back To Doctor Updation Page</Link>
        </form>
      </div>
         
     );
   }
 
  }
  export default App;