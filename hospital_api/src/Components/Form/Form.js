import React, { Component } from 'react';
import { FormErrors } from './FormErrors';
import './Form.css';
import * as service from '../../Services/service';
import { Link } from 'react-router-dom';

class Form extends Component {
  constructor (props) {
    super(props);
    this.state = {
      username: '',
      pwd: '',
      formErrors: {username: '', pwd: ''},
      usernameValid: false,
      pwdValid: false,
      formValid: false
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value},
                  () => { this.validateField(name, value) });
  }
  onSubmit(e)
  {
    e.preventDefault();
    var log={username:this.state.username,
      pwd:this.state.pwd}
      service.login(log).then(res=>{
        if(res.code==="23" || res.code==="26"){
          // alert("Invalid username or password")
          document.getElementById("error").innerHTML="Invalid username or password"
          this.props.history.replace('/login')
        }
        else
        {
          localStorage.setItem("token",res.token)
          this.props.history.replace('/billingCreate')
    }})
  }
  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let usernameValid = this.state.usernameValid;
    let pwdValid = this.state.pwdValid;

    switch(fieldName) {
      case 'username':
        usernameValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.username = usernameValid ? '' : ' is invalid';
        break;
      case 'pwd':
        pwdValid = value.length >= 3 ;
        fieldValidationErrors.pwd = pwdValid ? '': ' is too short';
        break;
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
                    usernameValid: usernameValid,
                    pwdValid: pwdValid
                  }, this.validateForm);
  }
  componentWillMount()
  {
    if(localStorage.getItem("token")){
      alert("Doctor is already logged in. Please logout to login")
    this.props.history.replace('/loginint')
  }
  }

  validateForm() {
    this.setState({formValid: this.state.usernameValid && this.state.pwdValid});
  }

  errorClass(error) {
    return(error.length === "0" ? '' : 'has-error');
  }

  render () {
    return (
      <form className="demoForm" onSubmit={this.onSubmit}><br/><br/><br/><br/>
        <h2>Login Page</h2>
        <div className="panel panel-default">
        <div className="formErrors">
          <FormErrors formErrors={this.state.formErrors} />
        </div>
        </div>
        <div className={`form-group ${this.errorClass(this.state.formErrors.username)}`}>
          <label htmlFor="username">Username</label>
          <input type="email" required className="form-control" name="username"
            placeholder="username"
            value={this.state.username}
            onChange={this.onChange}  />
        </div>
        <div className={`form-group ${this.errorClass(this.state.formErrors.pwd)}`}>
          <label htmlFor="pwd">Password</label>
          <input type="password" className="form-control" name="pwd"
            placeholder="Password"
            value={this.state.pwd}
            onChange={this.onChange}  />
        </div>
        <button type="submit" className="btn btn-primary" disabled={!this.state.formValid}>Login</button><br/><br/>
        <Link to={'/Signup'}>Signup</Link><br/><br/>
        <div id="error"></div>
      </form>
     
    )
  }
}

export default Form;

