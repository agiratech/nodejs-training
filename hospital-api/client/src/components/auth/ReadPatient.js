import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import * as service from '../../services/service';
import AuthService from '../../services/AuthService'

class ReadPatient extends Component {
  constructor() {
    super()
    this.state = {
      patient_id: '',
      hospital_name: '',
      patient_data: [],
      charge_name: '',
      charge_id:'',
      patient_data_all: []
    }
    this.Auth = new AuthService();
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentWillMount() {
    if (this.Auth.loggedIn()) {
      service.billing_read_all(this.Auth.getToken()).then((patient_data_all) => {
        this.setState({ patient_data_all: patient_data_all })
      })
    } else {
      this.props.history.replace('/login');
    }
  }
  onSubmit(e) {
    e.preventDefault();
    document.getElementById('message').innerHTML = '';
    var form = document.getElementById("input-validate");
    if (form.checkValidity() === true) {
      service.billing_read((this.Auth.getToken()), this.state.patient_id).then((patient_data) => {
        this.setState({ patient_data: patient_data }, () => {
          service.hospital_list().then((value) => {
            var hospital_id = this.state.patient_data[0].hospital_id
            function res(hospital_data) {
              return hospital_data._id === hospital_id
            }
            var hospital_name = (value.filter(res))
            this.setState({ hospital_name: hospital_name[0].name })
          }), (service.charge_get().then((value) => {
            var charge_id = this.state.patient_data[0].charge_id
            function res(charge_data) {
              return charge_data._id === charge_id
            }
            var charge_name = (value.filter(res))
            this.setState({ charge_name: charge_name[0].charge_level,
            charge_id:charge_id })
          }))
        })
      })
    }
    else {
      document.getElementById('message').style.color = 'red';
      document.getElementById('message').innerHTML = 'Choose 1 patient';
    }
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  render() {
    const { patient_data_all, patient_data, hospital_name, charge_name, patient_id } = this.state
    return (
      <div>
        <div className="ReadPatient">
          <div className="container">
            <div className="row">
              <div className="col-md-8 m-auto">
                <form className="container" id="input-validate" onSubmit={this.onSubmit} noValidate>
                  <div className="col-xs-5 selectContainer">
                    <select required data-live-search="true" name="patient_id" className="form-control" value={this.state.value} onChange={this.onChange}>
                      <option value="">select patient</option>
                      {patient_data_all.map((item) =>
                        <option key={item._id} value={item._id}>{item.patient_name}</option>
                      )}
                    </select>
                    <span id='message'></span>
                  </div>
                  <input type="submit" className="btn btn-info btn-block mt-4" />
                </form>
                <div className="container">
                  <table className="table">
                    {patient_data.map((item) =>
                      <tbody>
                        <tr>
                          <td>Name</td>
                          <td>{item.patient_name}</td>
                        </tr>
                        <tr>
                          <td>Gender</td>
                          <td>{item.gender}</td>
                        </tr>
                        <tr>
                          <td>Description</td>
                          <td>{item.description}</td>
                        </tr>
                        <tr>
                          <td>Hospital Name</td>
                          <td>{this.state.hospital_name}</td>
                        </tr>
                        <tr>
                          <td>Charge Level</td>
                          <td>{this.state.charge_name}</td>
                        </tr>
                        <tr>
                        <Link to={{
                          pathname: '/UpdatePatient',
                          state: { patient_id: this.state.patient_id,
                            patient_name: item.patient_name,
                            description: item.description,
                            patient_id: this.state.patient_id,
                            charge_id: this.state.charge_id
                           }
                        }} className="nav-link"> Edit this record  </Link>
                        </tr>
                      </tbody>
                    )}
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ReadPatient;