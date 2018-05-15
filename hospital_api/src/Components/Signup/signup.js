import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as service from '../../Services/service';
class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      doctor_name : '',
      hospital_id:'',
      gender : '',
      designation : '',
      username :'',
      pwd : '',
      conpwd : '',
      hospital_name :[]
    }
    this.onSubmit=this.onSubmit.bind(this);
    this.onChange=this.onChange.bind(this);
  }
  componentWillMount() {
    service.hospital().then((value) => {
      this.setState({ hospital_name: value })
    })
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit(e)
  {
    e.preventDefault();
    var newDoc = {
      doctor_name: this.state.doctor_name,
      hospital_id: this.state.hospital_id,
      gender: this.state.gender,
      designation: this.state.designation,
      username: this.state.username,
      pwd: this.state.pwd,
      conpwd: this.state.conpwd
    }
      service.SignUp(newDoc).then(res=>{
        if(res.code === "15" || res.code === "22" || res.code === "23" || res.code === "17" || res.code === "16"){
          alert("please check for the signup credentials")
          this.props.history.replace('/signup')
        }
        }).then(this.props.history.replace('/login'))
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
    const {hospital_name} = this.state
		return (
      <div className="SignUp">
      <header>
        <h2> Doctor Signup Page </h2>
      </header>
      <form onSubmit={this.onSubmit}>
        <br/><br/><br/>
				Doctor Name: <input onChange={this.onChange} pattern= "(?=.*).{3,}" name= 'doctor_name' placeholder='Doctor Name' type='text'required/><br/><br/>
        Hospital Name: <select name="hospital_id"  required onChange={this.onChange}>
        <option value="">Choose Hospital</option>
                      {hospital_name.map((item) =>
                        <option key={item._id} value={item._id}> {item.hospital_name} </option>
                      )}
                    </select>
                    <br/><br/>
				Gender:<input onChange={this.onChange} name='gender' value="Male" type='radio' required/>Male
              <input onChange={this.onChange} name='gender' value="Female" type='radio' required/>Female
              <input onChange={this.onChange} name='gender' value="Transgender" type='radio' required/>Transgender
               <br/><br/>
				Designation:<select onChange={this.onChange} required name="designation" >
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
				Username: <input name="username" onChange={this.onChange}placeholder='Email' type="email" required/><br/><br/>
        Password: <input name="pwd" onChange={this.onChange} placeholder='Password' type='password' pattern= "(?=.*).{3,}" id="pwd" onKeyUp={this.check} required/><br/><br/>
				Confirm Password: <input name= 'conpwd' onChange={this.onChange} placeholder='Confirm Password' type ='password' id="conpwd" onKeyUp={this.check} required/>
        <span id='message'></span><br/><br/>
        <input type='submit' value='submit'/><br/><br/>
        <Link to={'/login'}>Go To Login</Link><br/><br/>
        </form>
				</div>
			);
		}
	}
export default SignUp;