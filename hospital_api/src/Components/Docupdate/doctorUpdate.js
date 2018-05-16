import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as service from '../../Services/service';
class doctorUpdate extends Component {
constructor(props) {
	super(props);
	const token = {headers:{token}}
	this.state = {
		doctor_name : '',
		designation : '',
		username :'',
		pwd : '',
		conpwd : ''
	}
	this.onSubmit=this.onSubmit.bind(this);
	this.onChange=this.onChange.bind(this);
}
onChange(e) {
	this.setState({ [e.target.name]: e.target.value })
}
componentWillMount() {
	if(localStorage.getItem("token") == undefined || localStorage.getItem("token") == ""){
		this.props.history.replace('/login')
	}
	service.doctor(localStorage.getItem("token")).then((value) => {
		console.log("Details of the doctor who is logged in ",value)
		let data = value[0]
		console.log("Doctor details",data)
		this.setState({ doctor_name: data.doctor_name,designation: data.designation, 
						username: data.username, pwd: data.pwd })
	})
}
onSubmit(e)
  {
    e.preventDefault();
    console.log(this.state.username)
    console.log(this.state.pwd)
    var log={doctor_name: this.state.doctor_name,
		designation: this.state.designation,
		username: this.state.username,
		pwd: this.state.pwd,
		conpwd: this.state.conpwd}
      service.doctorUpdate(log).then(res=>{
		  console.log("doctor update",res)
		  if(res.code==="11" || res.code==="12" || res.code==="9" || res.code==="13" || res.code==="4" || res.code==="7" || res.code==="14"){
			this.props.history.replace('/doctorUpdate')  
		  }
		}).then(this.props.history.replace('/docupsuccess'))
  }
  check = function(e) {
	if (document.getElementById('pwd').value ===
	  document.getElementById('conpwd').value) {
	  document.getElementById('message').style.color = 'green';
	  document.getElementById('message').innerHTML = 'matching';
	} else {
	  document.getElementById('message').style.color = 'red';
	  document.getElementById('message').innerHTML = 'not matching';
	}
  }
render() 
{
	return (
		<div className="doctorUpdate">
		<header>
		<nav class="navbar navbar-default">
<div class="container-fluid">
<div class="navbar-header">
</div>
<ul class="nav navbar-nav">
<li class="active"><a href="/loginint">Logout</a></li>
</ul>
</div>
</nav>
			<h2> Doctor Updation </h2>
		</header>
		<form onSubmit={this.onSubmit}>
			<br/><br/><br/>
			Doctor Name: <input  type='text' name= 'doctor_name' value={this.state.doctor_name} onChange={this.onChange} placeholder='Doctor Name'required/><br/><br/>
			Designation:<select onChange={this.onChange} value={this.state.designation} required name="designation">
									<option value="">Select Designation</option>
									<option value="AutismSpecialist">AutismSpecialist</option>
									<option value="Cardiologist">Cardiologist</option>
									<option value="Dermatologist">Dermatologist</option>
									<option value="Endocrinologist">Endocrinologist</option>
									<option value="Gastroenterologist">Gastroenteroloist</option>
									<option value="Geriatrics">Geriatrics</option>
									<option value="Immunologist">Immunologist</option>
									<option value="MentalHealth">Psychologist</option>
									<option value="Obstetrics">Obstetrics</option>
									<option value="Oncologist">Oncologist</option>
									<option value="Ophthalmologist">Ophthalmologist</option>
									<option value="Orthopedics">Orthopedics</option>
									<option value="Pediatrics">Pediatrics</option>
									<option value="RehabilitationMedicine">RehabilitationMedicine</option>
									<option value="Rheumatologist">Rheumatologist</option>
								</select><br/><br/>
			Username: <input name="username" onChange={this.onChange}  value={this.state.username} placeholder='Email' type="email" required/><br/><br/>
			Password: <input name="pwd" onChange={this.onChange} placeholder='Password' type='password' id="pwd" onKeyUp={this.check} required/><br/><br/>
			Confirm Password: <input name= 'conpwd' onChange={this.onChange} placeholder='Confirm Password' id="conpwd" onKeyUp={this.check} type ='password' required/>
			<span id='message'></span><br/><br/>
			<input type='submit' value='Update'/><br/><br/>
			</form>
			</div>
		);
	}
}
export default doctorUpdate;