import React, { Component } from 'react'
// import * as service from '../../services/service';
import AuthService from '../../services/AuthService'

class Login extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      errors: {}
    }
    this.Auth = new AuthService();
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.setToken = this.setToken.bind(this);
  }
  // componentWillMount() {
  //   service.billing().then((messages) => {
  //   })
  // }
  componentWillMount() {
    if (this.Auth.loggedIn())
      this.props.history.replace('/dashboard');
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit(e) {
    e.preventDefault();
    var user = {
      email: this.state.email,
      password: this.state.password
    }
    var form1 = document.getElementById("login");
    if (form1.checkValidity() === true) {
      this.Auth.login(user)
        .then(res => {
          if(this.Auth.getToken())
          {
            this.props.history.replace('/dashboard');
          }
        })
        .catch(err => {
          console.log(err);
        })
      // service.login(user).then(res => {
      // })
    }
  }
  setToken(Token) {
    localStorage.setItem('token', Token)
  }
  render() {
    return (
      <div>
        <div className="login">
          <div className="container">
            <div className="row">
              <div className="col-md-8 m-auto">
                <h1 className="display-4 text-center">Log In</h1>
                <p className="lead text-center">Sign in to your account</p>
                <form id="login" onSubmit={this.onSubmit} noValidate>
                  <div className="form-group">
                    <input type="email" className="form-control form-control-lg" placeholder="Email Address" name="email" onChange={this.onChange} required />
                    <div className="invalid-feedback">Enter valid email</div>
                  </div>
                  <div className="form-group">
                    <input type="password" className="form-control form-control-lg" placeholder="Password" name="password" minLength="5" onChange={this.onChange} required />
                    <div className="invalid-feedback">Enter atleast 5 characters.</div>
                  </div>
                  <input type="submit" className="btn btn-info btn-block mt-4" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;