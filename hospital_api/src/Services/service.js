    import axios from 'axios';
    export function login(user) {
      return axios.post('/doctor/login', user)
      .then(res => {console.log(res.data); return res.data})
      .catch(err => {console.log(err); return err})
    }
    export function SignUp(user) {
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
      // console.log("doctor list call", user)
      return axios.get('/doctor/doclist',{headers:{"token":localStorage.getItem("token")}})
      .then(res => {
        // console.log("ddddddddddddddddddddddddd",res.data)
        return res.data})
      .catch(err => {console.log(err); return err})
    }
    export function logout(user) {//html page for doctor to logout
      console.log("user", user)
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
    export function billingRead(token, patient_id) {
      return axios.post('/billing/billingRead',{ 'patient_id': patient_id},{headers: {"token":localStorage.getItem("token")}})
        .then(res => { console.log(res.data); return res.data })
        .catch(err => { console.log(err); return err })
    }
    export function billingReaddet(token, user) {
      return axios.post('/billing/billingListDet',user,{headers:{"token":localStorage.getItem("token")}})
      .then(res => {
        console.log("pat read details",res.data)
        return res.data})
      .catch(err => {console.log(err); return err})
    }
    export function billingUpdate(user) {
      return axios.put('/billing/billingUpdate',user,{headers:{"token":localStorage.getItem("token")}})
      .then(res => {
        // console.log("Azsxdcfvgbhjnmkkkkkkjnhbgvfcxdzsxdfcvg",res.data)
        return res.data})
      .catch(err => {console.log(err); return err})
    }
    export function billingDelete(token,user) {
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