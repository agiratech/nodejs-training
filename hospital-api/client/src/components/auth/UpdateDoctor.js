import React, { Component } from 'react'
import AuthService from '../../services/AuthService'
import * as service from '../../services/service';

class UpdateDoctor extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      designation: '',
      new_email: ''
    }
    this.Auth = new AuthService();
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit(e) {
    e.preventDefault();
    var updateDetails = {
      name: this.state.name,
      designation: this.state.designation,
      new_email: this.state.new_email
    }
    var form = document.getElementById("doctor-update");
    if (form.checkValidity() === true) {
      service.UpdateDoctor((this.Auth.getToken()),updateDetails).then(res=>{
        if(res.status=="200") {
          this.props.history.replace('/profile');
        }
      })
    }
  }
  componentWillMount() {
    if (this.Auth.loggedIn()) {
      this.setState({
        name: this.props.location.state.name,
        designation: this.props.location.state.designation,
        new_email: this.props.location.state.new_email
      })
      console.log(this.props.location.state.name)
      console.log(this.props.location.state.designation)
      console.log(this.props.location.state.new_email)
      
    } else {
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
                <h1 className="display-4 text-center">Update Profile</h1>
                <form className="container" id="doctor-update" onSubmit={this.onSubmit} noValidate>
                  <div className="form-group">
                    <label className="form-control-label" htmlFor="inputSuccess1">Your Name:</label>
                    <div className="col-xs-5 selectContainer">
                      <input id="inputSuccess1" type="text" className="form-control form-control-lg" placeholder="Patient Name" name="name" value={this.state.name} onChange={this.onChange} required minLength="5" />
                      <div className="invalid-feedback">Enter atleast 5 characters.</div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Enter Your Mail ID:</label>
                    <input type="email" className="form-control form-control-lg" placeholder="Email Address" name="new_email" value={this.state.new_email} onChange={this.onChange} required />
                    <div className="invalid-feedback">Enter a valid Mail address</div>
                    <span id='email_error'></span>
                  </div>
                  <div className="form-group">
                    <div><label htmlFor="designation">Choose Designation:</label></div>
                    <select required name="designation" className="form-control" value={this.state.designation} onChange={this.onChange}>
                      <option value="">Select Specialty</option>
                      <option value="Autism">Autism</option>
                      <option value="Cardiology">Cardiology</option>
                      <option value="Dermatology">Dermatology</option>
                      <option value="Endocrinology">Endocrinology</option>
                      <option value="Gastroenterologys">Gastroenterologys</option>
                      <option value="Geriatrics">Geriatrics</option>
                      <option value="Immunology">Immunology</option>
                      <option value="Obstetrics">Obstetrics</option>
                      <option value="Oncology">Oncology</option>
                      <option value="Ophthalmology">Ophthalmology</option>
                      <option value="Orthopedics">Orthopedics</option>
                      <option value="Pediatrics">Pediatrics</option>
                      <option value="Rheumatology">Rheumatology</option>
                      <option value="Surgery">Surgery</option>
                    </select>
                    <div className="invalid-feedback">Choose your designation.</div>
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

export default UpdateDoctor;