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