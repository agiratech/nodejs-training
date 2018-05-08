import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import AuthService from '../../services/AuthService'
import * as service from '../../services/service';

class UpdatePatient extends Component {
  constructor() {
    super()
    this.state = {
      patient_id:'',
      patient_name: '',
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
    var updateDetails = {
      patient_id:this.state.patient_id,
      charge_id:this.state.charge_id,
      patient_name:this.state.patient_name,
      description:this.state.description
    }
    var form = document.getElementById("patient-update");
    if (form.checkValidity() === true) {
      service.UpdatePatient((this.Auth.getToken()),updateDetails).then(res=>{
        if(res.status=="200") {
          this.props.history.replace('/ReadPatient');
        }
      })
    }
  }
  componentWillMount() {
    if (this.Auth.loggedIn()) {
      this.setState({
        patient_id:  this.props.location.state.patient_id,
        patient_name: this.props.location.state.patient_name,
        charge_id: this.props.location.state.charge_id,
        description: this.props.location.state.description
      })
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
                <h1 className="display-4 text-center">Update Patient</h1>
                <form className="container" id="patient-update" onSubmit={this.onSubmit} noValidate>
                  <div className="form-group">
                    <label className="form-control-label" htmlFor="inputSuccess1">Your Name:</label>
                    <div className="col-xs-5 selectContainer">
                      <input id="inputSuccess1" type="text" className="form-control form-control-lg" placeholder="Patient Name" name="patient_name" value={this.state.patient_name} onChange={this.onChange} required minLength="5" />
                      <div className="invalid-feedback">Enter atleast 5 characters.</div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-xs-3 control-label">Charge Level</label>
                    <div className="col-xs-5 selectContainer">
                      <select required name="charge_id" className="form-control" value={this.state.charge_id} onChange={this.onChange}>
                        <option value="">select Charge</option>
                        {charge_data.map((item) =>
                          <option key={item._id} value={item._id}>{item.charge_level}</option>
                        )}
                      </select>
                      <div className="invalid-feedback">Choose Charge Level of Patient.</div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleFormControlTextarea1">Description</label>
                      <textarea className="form-control" name="description" onChange={this.onChange} value={this.state.description} id="exampleFormControlTextarea1" rows="3" minLength="10" required></textarea>
                      <div className="invalid-feedback">Description Should Contain Atleast 10 characters.</div>
                    </div>
                  </div>
                  <input type="submit" className="btn btn-info btn-block mt-4" />
                  <Link to={{
                          pathname: '/DeletePatient',
                          state: {patient_id:this.state.patient_id}
                        }} className="btn btn-info btn-block mt-4" >delete this record </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default UpdatePatient;