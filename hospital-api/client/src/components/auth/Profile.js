import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as service from '../../services/service';
import AuthService from '../../services/AuthService'

class Profile extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      gender: '',
      designation: '',
      email: '',
      password: '',
      confirm_password: '',
      hospital_id: '',
      hospital_data: []
    }
    this.Auth = new AuthService();
  }
  componentWillMount() {
    if (this.Auth.loggedIn()) {
      service.doctor_profile(this.Auth.getToken()).then(res => {
        this.setState({
          hospital_id: res[0].hospital_id,
          name: res[0].name,
          gender: res[0].gender,
          designation: res[0].designation,
          email: res[0].email
        }, () => {
          service.hospital_list().then((value) => {
            var hospital_id = this.state.hospital_id
            function res(hospital_data) {
              return hospital_data._id === hospital_id
            }
            var hospital_name = (value.filter(res))
            this.setState({ hospital_name: hospital_name[0].name })
          })
        })
      })
    } else {
      this.props.history.replace('/login');
    }
  }
  render() {
    return (
      <div className="Profile">
        <div className="container">
          <div className="row">
            <h4 className="navbar-brand">User Profile</h4>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                {/* <Link to="/UpdateDoctor" className="btn btn-lg btn-info mr-2" >edit Profile</Link> */}
                <Link to={{
                  pathname: '/UpdateDoctor',
                  state: {
                    name: this.state.name,
                    designation: this.state.designation,
                    new_email: this.state.email
                  }
                }} className="btn btn-lg btn-info mr-2"> edit Profile  </Link>
              </li>
            </ul>
            <table className="table">
              <tbody>
                <tr>
                  <td>Name</td>
                  <td>{this.state.name}</td>
                </tr>
                <tr>
                  <td>Gender</td>
                  <td>{this.state.gender}</td>
                </tr>
                <tr>
                  <td>designation</td>
                  <td>{this.state.designation}</td>
                </tr>
                <tr>
                  <td>email</td>
                  <td>{this.state.email}</td>
                </tr>
                <tr>
                  <td>Hospital</td>
                  <td>{this.state.hospital_name}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default Profile;
