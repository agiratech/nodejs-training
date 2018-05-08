import React, { Component } from 'react'
import AuthService from '../../services/AuthService'
import * as service from '../../services/service';
// import UpdatePatient from './UpdatePatient';

class DeletePatient extends Component {
  constructor() {
    super()
    this.state = {
      patient_id:''
    }
    this.Auth = new AuthService();
  }
  componentWillMount() {
    if (this.Auth.loggedIn()) {
      this.setState({
        patient_id:  this.props.location.state.patient_id
      })
      var patient={
        patient_id:this.props.location.state.patient_id
      }
      service.DeletePatient((this.Auth.getToken()),patient).then(res=>{
        if(res.status=="200") {
          this.props.history.replace('/ReadPatient');
        } else{
          alert(res.message)
          this.props.history.replace('/ReadPatient');
         
        }
      })
    } else {
      this.props.history.replace('/login');
    }
  }
  render() {
    return null;
  }
}
export default DeletePatient;