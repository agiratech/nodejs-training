// import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import * as service from '../../Services/service';
// class billingReaddet extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
// 			patient_id : ''  ,
//       patient_name : '',
//       charge_id : '',
//       description : '',
//       charge_name : []  
//     }
//     this.onSubmit=this.onSubmit.bind(this);
//     this.onChange=this.onChange.bind(this);
//   }
//   componentDidMount() {
//     if(localStorage.getItem("token") == undefined || localStorage.getItem("token") == ""){
//       this.props.history.replace('/login')
      
//     }
//   }
//   componentWillMount() {
//     service.billGet().then((value) => {
// 			this.setState({ charge_name: value })
// 			// console.log("vvvvvvvvvvvvvvvvvv",value)
// 		})
// 	// 	service.billingUpdate(localStorage.getItem("token")).then((value1) => {
// 	// 		console.log("valllllllllllllllllllll",value1)
// 	// 		this.setState({ patient_name: value1 })
// 	// 		let data = value1[0]
// 	// 		this.state({patient_id: data._id, patient_name: data.patient_name, charge_id: data.charge_id,
// 	// 		description: data.description })
// 	// 		console.log("dddddddddddddddddddddddd",data)
// 	// 	// })
// 	// })
// }

//   onChange(e) {
//     this.setState({ [e.target.name]: e.target.value })
//   }

//   onSubmit(e)
//   {
//     e.preventDefault();
//     var log = {
// 			patient_id : this.state.patient_id,
//       patient_name: this.state.patient_name,
//       charge_id : this.state.charge_id,
//       description: this.state.description
// 		}
// 		service.billingReaddet(log, localStorage.getItem("token")).then((res) => {
// 		  console.log("billing update",res)
// 		  if(res.code==="0" && res.code==="18"){
// 			this.props.history.replace('/billingReaddet')  
// 		  }
// 		  else{
// 		// localStorage.setItem("token",res.token)
//     }}).then(this.props.history.replace('/billingUpdate'))
// 	}
// 	render() 
// 	{
//     const {charge_name} = this.state
//     // console.log(charge_name)
//  		return (
//       <div className="billingReaddet">
//       <header>
//         <h2> Patient Details Page </h2>
//       </header>
//       <form onSubmit={this.onSubmit}>
//         <br/><br/><br/>
// 				Patient Id: <input onChange={this.onChange} name= 'patient_id' placeholder='Patient Id' value={this.state._id} type='text'required/><br/><br/>
// 				Patient Name: <input onChange={this.onChange} name= 'patient_name'  pattern= "(?=.*).{3,}" placeholder='Patient Name' value={this.state.patient_name} type='text'required/><br/><br/>
//         Charge Name: <select required name="charge_id" onChange={this.onChange} value={this.state.charge_id}>
//         <option>Choose Charge</option>
//                       {charge_name.map((item) =>
//                         <option key={item._id} value={item._id}> {item.charge_name} </option>
//                       )}
//                     </select>
//                     <br/><br/>
// 				Description:<input onChange={this.onChange} name= 'description' placeholder='Patient Description' value={this.state.description} type='text'required/><br/><br/>
//         <input type='submit' value='Update'/><br/><br/>
//         <input type='submit' value='Delete'/><br/><br/>
//         <Link to={'/loginint'}>Logout</Link><br/><br/>
//         <Link to={'/billingRead'}>Back</Link>
//         </form>
// 				</div>
// 			);
// 		}
// 	}
// export default billingReaddet;