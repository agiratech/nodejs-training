import React, { Component } from 'react';
import * as service from '../../services/service';

class Register extends Component {
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
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit(e) {
    e.preventDefault();
    var newUser = {
      name: this.state.name,
      gender: this.state.gender,
      designation: this.state.designation,
      email: this.state.email,
      password: this.state.password,
      confirm_password: this.state.confirm_password,
      hospital_id: this.state.hospital_id
    }
    var form = document.getElementById("form-validation");
    if (form.checkValidity() === true) {
      service.register(newUser)
      .then(res =>{
        console.log(res)
        if(res.status==='200') {
          this.props.history.replace('/login')
        }
        if(res.status==='404') {
          document.getElementById('email_error').style.color = 'red';
          document.getElementById('email_error').innerHTML = 'Mail Id already taken, try different one';
        }
      })
    }
  }
  componentWillMount() {
    service.hospital_list().then((value) => {
      this.setState({ hospital_data: value })
    })
  }
  check = function (e) {
    if (document.getElementById('password').value ===
      document.getElementById('confirm_password').value) {
      document.getElementById('confirm_password').style.border = '1px green solid';
      document.getElementById('message').innerHTML = '';
    } else {
      document.getElementById('confirm_password').style.border = '1px red solid';
      document.getElementById('message').style.color = 'red';
      document.getElementById('message').innerHTML = 'password not matching';
    }
  }
  render() {
    const { hospital_data } = this.state;
    return (
      <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Sign Up</h1>
              <p className="lead text-center">Create your account</p>
              <form className="container" id="form-validation" onSubmit={this.onSubmit} noValidate >
                <div className="form-group">
                  <label className="form-control-label" htmlFor="inputSuccess1">Your Name:</label>
                  <div className="col-xs-5 selectContainer">
                    <input id="inputSuccess1" type="text" className="form-control form-control-lg" placeholder="Name" name="name" value={this.state.name} onChange={this.onChange} required minLength="5" />
                    <div className="invalid-feedback">Enter atleast 5 characters.</div>
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-xs-3 control-label">Hospital</label>
                  <div className="col-xs-5 selectContainer">
                    <select required name="hospital_id" className="form-control" value={this.state.value} onChange={this.onChange}>
                      <option value="">select hospital</option>
                      {hospital_data.map((item) =>
                        <option key={item._id} value={item._id}>{item.name}</option>
                      )}
                    </select>
                    <div className="invalid-feedback">Choose any 1 hospital.</div>
                  </div>
                </div>
                <div ><label htmlFor="customRadioInline1">Choose Gender:</label></div>
                <div className="custom-control custom-radio custom-control-inline">
                  <input type="radio" id="customRadioInline1" name="gender" className="custom-control-input" value="male" onChange={this.onChange} required />
                  <label className="custom-control-label" htmlFor="customRadioInline1">Male</label>
                </div>
                <div className="custom-control custom-radio custom-control-inline">
                  <input type="radio" id="customRadioInline2" name="gender" className="custom-control-input" value="female" onChange={this.onChange} required />
                  <label className="custom-control-label" htmlFor="customRadioInline2">Female</label>
                </div>
                <div className="form-group">
                  <div><label htmlFor="designation">Choose Designation:</label></div>
                  <select required name="designation" className="form-control" value={this.state.value} onChange={this.onChange}>
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
                <div className="form-group">
                  <label htmlFor="email">Enter Your Mail ID:</label>
                  <input type="email" className="form-control form-control-lg" placeholder="Email Address" name="email" value={this.state.email} onChange={this.onChange} required />
                  <div className="invalid-feedback">Enter a valid Mail address</div>
                  <span id='email_error'></span>
                </div>
                <div className="form-group">
                  <label htmlFor="password">Enter Password:</label>
                  <input id="password" type="password" className="form-control form-control-lg" placeholder="Password" name="password" value={this.state.password} onChange={this.onChange} onKeyUp={this.check} minLength="5" required />
                  <div className="invalid-feedback">Enter atleast 5 characters.</div>
                </div>
                <div className="form-group1">
                  <label htmlFor="confirm_password">Confirm Password:</label>
                  <input id="confirm_password" type="password" className="form-control form-control-lg" placeholder="confirm Password" name="confirm_password" value={this.state.confirm_password} onChange={this.onChange} onKeyUp={this.check} required />
                  <span id='message'></span>
                </div>
                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Register;
