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
      charge_name : []  
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

  onSubmit(e)
  {
    e.preventDefault();
    var newDoc = {
      patient_name: this.state.patient_name,
      gender: this.state.gender,
      charge_id : this.state.charge_id,
      description: this.state.description
    }
      service.billCreate((localStorage.getItem("token")),newDoc).then(res=>{
        if(res.code === "0" || res.code === "1" || res.code === "2" || res.code === "3" || res.code === "4"){
          this.props.history.replace('/billingCreate')
          console.log("************billcreate***********",res)
        }
        }).then(this.props.history.replace('/billingRead'))
  }
	render() 
	{
    const {charge_name} = this.state
 		return (
      <div className="billingCreate">
      <header>
      <nav class="navbar navbar-default">
<div class="container-fluid">
<div class="navbar-header">
<a class="nav navbar-nav" href="/doctorUpdate">Update Doctor's Page</a>
</div>
<ul class="nav navbar-nav">
<li class="active"><a href="/loginint">Logout</a></li>
</ul>
</div>
</nav>
        <h2> Patient Signup Page </h2>
      </header>
      <form onSubmit={this.onSubmit}>
        <br/><br/><br/>
				Patient Name: <input onChange={this.onChange} name= 'patient_name'  pattern= "(?=.*).{3,}" placeholder='Patient Name' type='text'required/><br/><br/>
				Gender:<input onChange={this.onChange} name='gender' value="Male" type='radio' required/>Male
              <input onChange={this.onChange} name='gender' value="Female" type='radio' required/>Female
              <input onChange={this.onChange} name='gender' value="Transgender" type='radio' required/>Transgender
               <br/><br/>
        Charge Name: <select required name="charge_id" onChange={this.onChange}>
        <option value="">Choose Charge</option>
                      {charge_name.map((item) =>
                        <option key={item._id} value={item._id}> {item.charge_name} </option>
                      )}
                    </select>
                    <br/><br/>
				Description:<input onChange={this.onChange} name= 'description' placeholder='Patient Description' type='text'required/><br/><br/>
        <input type='submit' value='create patient'/><br/><br/>
        <Link to={'/billingRead'}>Go To Read Patient Details</Link><br/><br/>
        </form>
				</div>
			);
		}
	}
export default billingCreate;