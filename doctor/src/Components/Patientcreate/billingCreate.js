import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as service from '../../Services/service';
class billingCreate extends Component {
constructor(props) {
super(props);
this.state = {
patient_name : '',
gender : '',
charge_id : '',
description : '',
charge_name : [],
levels : [],
level_no : '',
date : '',
username : ''
}
this.onSubmit=this.onSubmit.bind(this);
this.onChange=this.onChange.bind(this);
}
componentWillMount() {
if(localStorage.getItem("token") == undefined || localStorage.getItem("token") == ""){
this.props.history.replace('/login') 
}
service.billGet().then((value) => {
this.setState({ charge_name: value })
})
}

onChange(e) {
this.setState({ [e.target.name]: e.target.value })
}
onChang(e) {
console.log("11111111111111111111111111111",e.target.value, e.target.value.split(',')) 
this.setState({ [e.target.name]: e.target[e.target.selectedIndex].getAttribute('name') })
this.setState({ levels: e.target.value.split(',') })
}

onSubmit(e)
{
e.preventDefault();
var newDoc = {
patient_name: this.state.patient_name,
gender: this.state.gender,
charge_id : this.state.charge_id,
description: this.state.description,
date : this.state.date,
username : this.state.username,
level_no : this.state.level_no,
chargeName : '',
c_level : ''
}
for(var i = 0; i<this.state.charge_name.length; i++) {
if (this.state.charge_name[i]._id == this.state.charge_id) {
newDoc.chargeName = this.state.charge_name[i].charge_name;
}
}
for(i = 0; i<this.state.levels.length; i++) {
if (this.state.levels[i]._id == this.state.charge_id) {
newDoc.level_no = this.state.levels[i].levels;
}
}
console.log(this.state,'statetestesst',newDoc)
service.billCreate((localStorage.getItem("token")),newDoc).then(res=>{
if(res.code === "0" || res.code === "1" || res.code === "2" || res.code === "3" || res.code === "4" || res.code === "18"){
this.props.history.replace('/billingCreate')
console.log("************billcreate***********",res)
}
}).then(this.props.history.replace('/billingRead'))
}
  render() 
  {
const {charge_name} = this.state
const {levels} = this.state
   return (
<div className="billingCreate">
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
<h2> Patient Signup Page </h2>
</header>
<form onSubmit={this.onSubmit}>
<br/><br/><br/>
        Patient Name: <input onChange={this.onChange} name= 'patient_name' pattern= "(?=.*).{3,}" placeholder='Patient Name' type='text'required/><br/><br/>
        Gender:<input onChange={this.onChange} name='gender' value="Male" type='radio' required/>Male
<input onChange={this.onChange} name='gender' value="Female" type='radio' required/>Female
<input onChange={this.onChange} name='gender' value="Transgender" type='radio' required/>Transgender
<br/><br/>
Charge Name: <select required name="charge_id" onChange={this.onChang.bind(this)}>
<option value="">Choose Charge</option>
{charge_name.map((item) =>
<option key={item._id} name={item._id} value={item.levels}> {item.charge_name} </option>
)}
</select>
<br/><br/>
Levels: <select required name="level_no" onChange={this.onChange}>
<option value="">Choose Level</option>
{levels.map((j) =>
<option key={j._id} value={j}> {j} </option> //key -> object id of the value selected
)}
</select>
<br/><br/> 
        Description:<input onChange={this.onChange} name= 'description' placeholder='Patient Description' type='text'required/><br/><br/>
Date of appointment:<input name="date" onChange={this.onChange} placeholder='Appointment date' type='date' required/><br/><br/>
        Username: <input name="username" onChange={this.onChange}placeholder='Email' type="email" required/><br/><br/>
<input type='submit' value='create patient'/><br/><br/>
<Link to={'/billingRead'}>Go To Read Patient Details</Link><br/><br/>
</form>
        </div>
      );
    }
  }
export default billingCreate;