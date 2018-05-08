import React, { Component } from 'react';
import * as service from '../../services/service';
import AuthService from '../../services/AuthService'

class CreatePatient extends Component {
  constructor() {
    super()
    this.state = {
      patient_name: '',
      gender: '',
      charge_id: '',
      description: '',
      charge_data: []
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
    var newPatient = {
      patient_name: this.state.patient_name,
      gender: this.state.gender,
      description: this.state.description,
      charge_id: this.state.charge_id
    }
    var form = document.getElementById("patient-form");
    if (form.checkValidity() === true) {
      service.billing_create((this.Auth.getToken()), newPatient)
        .then(res => {
          console.log(res)
          if (res.status === '200') {
            this.props.history.replace('/dashboard')
          }
        })
    }
  }
  componentWillMount() {
    if (this.Auth.loggedIn()) {
      service.charge_get().then((value) => {
        this.setState({ charge_data: value })
      })
    } else {
      this.props.history.replace('/login');
    }
  }
  render() {
    const { charge_data } = this.state;
    return (
      <div>
        <div className="dashboard">
          <div className="container">
            <div className="row">
              <div className="col-md-8 m-auto">
                <h1 className="display-4 text-center">Create Patient</h1>
                <form className="container" id="patient-form" onSubmit={this.onSubmit} noValidate>
                  <div className="form-group">
                    <label className="form-control-label" htmlFor="inputSuccess1">Your Name:</label>
                    <div className="col-xs-5 selectContainer">
                      <input id="inputSuccess1" type="text" className="form-control form-control-lg" placeholder="Patient Name" name="patient_name" value={this.state.name} onChange={this.onChange} required minLength="5" />
                      <div className="invalid-feedback">Enter atleast 5 characters.</div>
                    </div>
                  </div>
                  <div><label htmlFor="customRadioInline1">Choose Gender:</label></div>
                  <div className="custom-control custom-radio custom-control-inline">
                    <input type="radio" id="customRadioInline1" name="gender" className="custom-control-input" value="male" onChange={this.onChange} required />
                    <label className="custom-control-label" htmlFor="customRadioInline1">Male</label>
                  </div>
                  <div className="custom-control custom-radio custom-control-inline">
                    <input type="radio" id="customRadioInline2" name="gender" className="custom-control-input" value="female" onChange={this.onChange} required />
                    <label className="custom-control-label" htmlFor="customRadioInline2">Female</label>
                  </div>
                  <div className="form-group">
                    <label className="col-xs-3 control-label">Charge Level</label>
                    <div className="col-xs-5 selectContainer">
                      <select required name="charge_id" className="form-control" value={this.state.value} onChange={this.onChange}>
                        <option value="">select Charge</option>
                        {charge_data.map((item) =>
                          <option key={item._id} value={item._id}>{item.charge_level}</option>
                        )}
                      </select>
                      <div className="invalid-feedback">Choose Charge Level of Patient.</div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">Description</label>
                    <textarea className="form-control" name="description" onChange={this.onChange} value={this.state.description} id="exampleFormControlTextarea1" rows="3" minLength="10" required></textarea>
                    <div className="invalid-feedback">Description Should Contain Atleast 10 characters.</div>
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

export default CreatePatient;