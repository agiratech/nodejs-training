import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import AuthService from '../../services/AuthService'
class Landing extends Component {
  constructor() {
    super()
    this.Auth = new AuthService();
  }
  componentWillMount() {
    if (this.Auth.loggedIn())
      this.props.history.replace('/dashboard');
  }
  render() {
    return (
      <div className="landing">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4">Hospital Management</h1>
                <p className="lead"> Here, Doctors Can Manage the Records of Patient</p>
                <hr />
                <Link to="/register" className="btn btn-lg btn-info mr-2">Sign Up</Link>
                <Link to="/login" className="btn btn-lg btn-light">Login</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Landing;