import axios from 'axios';
export function login(user) {
  return axios.post('/doctors/login', user)
    .then(res => { console.log(res.data); return res.data })
    .catch(err => { console.log(err); return err })
}
export function register(user) {
  return axios.post('/doctors/register', user)
    .then(res => { console.log(res.data); return res.data })
    .catch(err => { console.log(err); return err })
}
export function hospital_list(user) {
  return axios.get('/doctors/hospital_list', user)
    .then(res => { return res.data })
    .catch(err => { console.log(err); return err })
}
export function logout(token) {
  return axios.post('/doctors/logout', '', {
    headers: {
      'Content-Type': 'application/json',
      'token': token
    }
  })
    .then(res => { console.log(res.data); return res.data })
    .catch(err => { console.log(err); return err })
}
export function doctor_profile(token) {
  return axios.post('/doctors/doctor_profile', '', {
    headers: {
      'Content-Type': 'application/json',
      'token': token
    }
  })
    .then(res => { console.log(res.data); return res.data })
    .catch(err => { console.log(err); return err })
}
export function billing_read(token, patient_id) {
  return axios.post('/patient/billing_read', 
   { 'patient_id': patient_id},
  {
    headers: {
      'Content-Type': 'application/json',
      'token': token
    }
  })
    .then(res => { console.log(res.data); return res.data })
    .catch(err => { console.log(err); return err })
}
export function billing_read_all(token) {
  return axios.post('/patient/billing_read_all','', {
    headers: {
      'Content-Type': 'application/json',
      'token': token
    }
  })
    .then(res => { console.log(res.data); return res.data })
    .catch(err => { console.log(err); return err })
}
export function charge_get() {
  return axios.get('/patient/charge_get')
    .then((result) => {return result.data})
    .catch(err => { console.log(err); return err })
}
export function billing_create(token,newPatient) {
  return axios.post('/patient/billing_create',newPatient, {
    headers: {
      'Content-Type': 'application/json',
      'token': token
    }
  })
    .then(res => { console.log(res.data); return res.data })
    .catch(err => { console.log(err); return err })
}
export function UpdatePatient(token,updatePatient) {
  return axios.put('/patient/billing_update',updatePatient, {
    headers: {
      'Content-Type': 'application/json',
      'token': token
    }
  })
    .then(res => { console.log(res.data); return res.data })
    .catch(err => { console.log(err); return err })
}
export function DeletePatient(token,deletePatient) {
  return axios.delete('/patient/billing_delete', {
    headers: {
      'Content-Type': 'application/json',
      'token': token
    }, data: deletePatient
  })
    .then(res => { console.log(res.data); return res.data })
    .catch(err => { console.log(err); return err })
}
export function UpdateDoctor(token,UpdateDoctor) {
  return axios.put('/doctors/doctor_update',UpdateDoctor, {
    headers: {
      'Content-Type': 'application/json',
      'token': token
    }
  })
    .then(res => { console.log(res.data); return res.data })
    .catch(err => { console.log(err); return err })
}