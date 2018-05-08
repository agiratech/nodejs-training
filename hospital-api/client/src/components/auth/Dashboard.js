import React, { Component } from 'react'
import { Link } from 'react-router-dom';
// import * as service from '../../services/service';
import AuthService from '../../services/AuthService'
class Dashboard extends Component {
  constructor() {
    super()
    this.Auth = new AuthService();
  }
  componentWillMount() {
    if (!(this.Auth.loggedIn())) {
      this.props.history.replace('/login');
    }
  }
  render() {
    return (
      <div>
        <div className="dashboard">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-4 text-center">Dashboard</h1>
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                    <Link to="/CreatePatient" className="btn btn-lg btn-info mr-2">Add Patient</Link><hr/>
                    <Link to="/ReadPatient" className="btn btn-lg btn-info mr-2">ReadPatient</Link><hr/>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard;