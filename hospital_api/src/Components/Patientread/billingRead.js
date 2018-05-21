import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import * as service from '../../Services/service';
class billingRead extends Component {
  constructor() {
    super()
    this.state = {
      patient_id: '',
      hospital_name: '',
      patientDetails: [],
      charge_name: '',
      charge_id:'',
      patientDetails_all: []
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentWillMount() {
		if(localStorage.getItem("token") == undefined || localStorage.getItem("token") == ""){
			this.props.history.replace('/login')
		}
	service.billingReaddet((localStorage.getItem("token")), this.state.patient_id).then((patientDetails_all) => {
	this.setState({ patientDetails_all: patientDetails_all })
	console.log("billing read details console",patientDetails_all)
      })
	}
  onSubmit(e) {
    e.preventDefault();
      service.billingRead((localStorage.getItem("token")), this.state.patient_id).then((patientDetails) => {
        this.setState({ patientDetails: patientDetails }, () => {
          service.hospital().then((value) => {
            var hospital_id = this.state.patientDetails[0].hospital_id
            function res(hospitalDetails) {
              return hospitalDetails._id === hospital_id
            }
            var hospital_name = (value.filter(res))
            this.setState({ hospital_name: hospital_name[0].hospital_name })
          }), (service.billGet().then((value) => {
            var charge_id = this.state.patientDetails[0].charge_id
            function res(chargeDetails) {
              return chargeDetails._id === charge_id
            }
            var charge_name = (value.filter(res))
            this.setState({ charge_name: charge_name[0].charge_name,
            charge_id:charge_id })
          }))
        })
      })
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  render() {
    const { patientDetails_all, patientDetails, hospital_name, charge_name, patient_id } = this.state
    return (
			<div className="billingRead">
      <header>
      <nav className="navbar navbar-default">
<div className="container-fluid">
<div className="navbar-header">
<a className="nav navbar-nav" href="/doctorUpdate">Update Doctor's Page</a>
</div>
<ul className="nav navbar-nav">
<li className="active"><a href="/logout">Logout</a></li>
</ul>
</div>
</nav>
			<h2> Patient Read</h2>
		</header>
		<form onSubmit={this.onSubmit}>
			<br/><br/><br/>
	Patient Name: <select required name="patient_id" value={this.state.patient_id} onChange={this.onChange}>
<option value="">Choose Patient</option>
{patientDetails_all.map((item) =>
<option key={item._id} value={item._id}> {item.patient_name} </option>
)}
</select>
<br/><br/>
<input type="submit" value='Read patient details'/><br/><br/>
</form><br/><br/>
	<div className="container">
		<table className="table">
			{patientDetails.map((item) =>
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
						<td>Charge Name</td>
						<td>{this.state.charge_name}</td>
					</tr>
					<tr>
					<Link to={{
						pathname: '/billingUpdate',
						state: { 
							patient_id:this.state.patient_id,
							patient_name: item.patient_name,
							description: item.description,
							charge_id: this.state.charge_id
							}
					}} className="nav-link"> Edit this record  </Link>
					</tr>
				</tbody>
			)}
		</table>
	</div>
</div>
		)
}
}

export default billingRead;