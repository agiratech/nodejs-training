    import axios from 'axios';
    export function login(user) {//login page
      return axios.post('/doctor/login', user)
      .then(res => {console.log(res.data); return res.data})
      .catch(err => {console.log(err); return err})
    }
    export function SignUp(user) {//signup page
      return axios.post('/doctor/signup', user)
      .then(res => {console.log(res.data); return res.data})
      .catch(err => {console.log(err); return err})
    }
    export function hospital(user) {//hospital details
      return axios.get('/doctor/hospital', user)
      .then(res => {return res.data})
      .catch(err => {console.log(err); return err})
    }
    export function doctor(user) {//show the details of the doctor logged in 
      return axios.get('/doctor/doclist',{headers:{"token":localStorage.getItem("token")}})
      .then(res => {
        return res.data})
      .catch(err => {console.log(err); return err})
    }
    export function logout(user) {//html page for doctor to logout
      console.log("user", user)
      localStorage.removeItem("token")
      return axios.post('/doctor/logout','', {headers:{"token":user}})
      .then(res => {console.log(res.data); return res.data})
      .catch(err => {console.log(err); return err})
    }
    export function doctorUpdate(user) {//updating the doctor details
      return axios.put('/doctor/doctorUpdate',user,{headers:{"token":localStorage.getItem("token")}})
      .then(res => {console.log(res.data); return res.data})
      .catch(err => {console.log(err); return err})
    }
    export function billCreate(token, user) {//creating a new patient
      return axios.post('/billing/billingCreate',user,{headers:{"token":localStorage.getItem("token")}})
      .then(res => {
        console.log("Entered billcreate (service.js)",res.data)
        return res.data})
      .catch(err => {console.log(err); return err})
    }
    export function billGet(user) {//charge details
      return axios.get('/billing/billingGet', user)
      .then(res => {
        console.log(res.data)
        return res.data})
      .catch(err => {console.log(err); return err})
    }
    export function billingRead(token, patient_id) {//reading the patient details
      return axios.post('/billing/billingRead',{ 'patient_id': patient_id},{headers: {"token":localStorage.getItem("token")}})
        .then(res => { console.log(res.data); return res.data })
        .catch(err => { console.log(err); return err })
    }
    export function billingReaddet(token, user) {//updating the doctor details
      return axios.post('/billing/billingListDet',user,{headers:{"token":localStorage.getItem("token")}})
      .then(res => {
        console.log("pat read details",res.data)
        return res.data})
      .catch(err => {console.log(err); return err})
    }
    export function billingUpdate(user) {//updating the patient details
      return axios.put('/billing/billingUpdate',user,{headers:{"token":localStorage.getItem("token")}})
      .then(res => {
        return res.data})
      .catch(err => {console.log(err); return err})
    }
    export function billingDelete(token,user) {//deleting the patient details
      return axios.delete('/billing/billingDelete',{headers:{"token":localStorage.getItem("token")},data:{patient_id: user}})
      .then(res => {
        console.log("Entered the billingDelete",res.data)
        return res.data})
      .catch(err => {console.log(err); return err})
    }
    export function patient(user) {//show the details of the doctor logged in (token)
      return axios.get('/billing/billingList', user)
      .then(res => {
        console.log("ddddddddddddddddddddddddd",user)
        return res.data})
      .catch(err => {console.log(err); return err})
    }





// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import * as service from '../../Services/service';
// class App extends Component {
//   constructor(props) {
//     super(props);
//     const token = {headers:{token}}
//     this.onChange = this.onChange.bind(this);
//     this.onSubmit = this.onSubmit.bind(this);
// }
// componentWillMount() {
//     if(localStorage.getItem("token")==undefined || localStorage.getItem("token") == ""){
//         alert("login before entering the page")
//       this.props.history.replace('/login')
//     }
//   }
// onChange(e) {
//   this.setState({ [e.target.name]: e.target.value })
// }
// onSubmit(e)
//   {
//       e.preventDefault();
//       service.logout(localStorage.getItem("token")).then(res=>{
//           if(res.code === "0"){
//             this.props.history.replace('/loginint')
//           }
//           else{
//         localStorage.removeItem("token",res.token)
//    }}).then(this.props.history.replace('/logout'))
//   }
//   render() {
//      return (
//       <div className="App">
//       <header>
//       <nav className="navbar navbar-default">
//   <div className="container-fluid">
//     <ul className="nav navbar-nav">
//     <li className="active"><a href="/doctorUpdate">Update Doctor's Profile</a></li>
//     </ul>
//   </div>
// </nav>
//       </header>
//       <form onSubmit={this.onSubmit}>
//         <br/><br/><br/>
//         <input type='submit' value='Logout'/><br/><br/>
//         </form>
//       </div>
         
//      );
//    }
 
//   }
//   export default App;