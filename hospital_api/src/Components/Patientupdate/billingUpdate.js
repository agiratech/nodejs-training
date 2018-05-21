import React, { Component } from 'react';
import {} from 'react-router-dom';
import * as service from '../../Services/service';
class billingUpdate extends Component {
constructor(props) {
	super(props);
	const token = {headers:{token}}
	this.state = {
		patient_id : ''  ,
		patient_name : '',
		charge_id : '',
		description : '',
		charge_name : []  
	}
	this.onSubmit=this.onSubmit.bind(this);
	this.onChange=this.onChange.bind(this);
	this.delete=this.delete.bind(this);
	}
	onChange(e) {
		this.setState({ [e.target.name]: e.target.value })
		}
componentWillMount() {
	if(localStorage.getItem("token") == undefined || localStorage.getItem("token") == ""){
		this.props.history.replace('/login')
		}
		this.setState({patient_id:this.props.location.state.patient_id, patient_name: this.props.location.state.patient_name,description: this.props.location.state.description, 
			charge_id: this.props.location.state.charge_id})
		service.billGet().then((value) => {
			this.setState({ charge_name: value })
		})
		service.patient(localStorage.getItem("token")).then((value) => {
})
}
onChange(e) {
	this.setState({ [e.target.name]: e.target.value })
	}
onSubmit(e)
{
	e.preventDefault();
	var log={
		patient_id:this.state.patient_id,
		patient_name: this.state.patient_name,
		charge_id : this.state.charge_id,
		description :this.state.description,}
service.billingUpdate(log).then(res=>{
	console.log("billing update",res)
	if(res.code === "0" || res.code === "4" || res.code === "5" || res.code === "8" || res.code === "25"){
		// alert("please check for the inputs of the update page")
		document.getElementById("error").innerHTML="please check for the inputs of the update page"
		this.props.history.replace('/billingUpdate')  
			}}).then(this.props.history.replace('/update'))
			}
			delete(e){
				service.billingDelete(localStorage.getItem("token"),this.props.location.state.patient_id).then(res=>{
					if(res.code === '5' || res.code === '7' || res.code === '8' || res.code === '9') 
					{
						console.log("entered the delete")
						// alert("Access Denied as the patient is not cured")
						document.getElementById("error").innerHTML="Access Denied as the patient is not cured"
					}
					else{
						console.log("entered the deleteeeeeeeeeee")
						this.props.history.replace('/delete')
					}
					console.log(res)
				}).catch(err=>{alert(err)})
			}
render() 
{
	const {charge_name} = this.state
return (
<div className="billingUpdate">
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
	<h2> Patient Updation </h2>
</header>
<form onSubmit={this.onSubmit}>
<br/><br/><br/>
Patient Name: <input  type='text' name= 'patient_name' placeholder='Patient name' onChange={this.onChange} value={this.state.patient_name} required/><br/><br/>
Charge Name: <select required name="charge_id" onChange={this.onChange}>
			<option value="">Choose Charge</option>
										{charge_name.map((item) =>
											<option key={item._id} value={item._id}> {item.charge_name} </option>
										)}
									</select>
									<br/><br/>
Description: <input onChange={this.onChange} value={this.state.description} name= 'description' placeholder='Patient Description' type='text'required/><br/><br/>
<input type='submit' value='Update'/><br/><br/>
<input type='button' value='Delete' onClick={this.delete} /><br/><br/>
<div id="error"></div>
</form>
</div>
);
}
}	
export default billingUpdate;