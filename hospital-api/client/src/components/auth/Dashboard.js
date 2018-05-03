import React, { Component } from 'react'
import { Link } from 'react-router-dom';
// import * as service from '../../services/service';
import AuthService from '../../services/AuthService'

class Dashboard extends Component {
  constructor() {
    super()
    this.state = {
    }
    this.Auth = new AuthService();
  }
  componentWillMount() {
    if (this.Auth.loggedIn()){
      this.props.history.replace('/dashboard');
    }else {
      this.props.history.replace('/login');
    }
  }
  render() {
    return (
      <div>
        <div className="dashboard">
          <div className="container">
            <div className="row">
              <div className="col-md-8 m-auto">
                <h1 className="display-4 text-center">Dashboard</h1>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default Dashboard;