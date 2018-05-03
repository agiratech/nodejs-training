import React, { Component } from 'react'
import { Link } from 'react-router-dom';
// import * as service from '../../services/service';
import AuthService from '../../services/AuthService'
import * as service from '../../services/service';
import Landing from '../layout/Landing'

class Logout extends Component {
  constructor() {
    super()
    this.state = {
      token: ''
    }
    this.Auth = new AuthService();
  }
  // componentDidMount() {
  //   if (!(this.Auth.loggedIn())){
  //     this.props.history.replace('/login');
  //   } else {
  //     // this.setState({token : this.Auth.getToken()}).then(service.logout(this.state.token)) .then( this.Auth.logout())
  //     // console.log('token',this.state.token)
  //     this.setState({token : this.Auth.getToken()}, 
  //     async () => {
  //       await service.logout(this.state.token) 
  //       await this.Auth.logout()
  //      });
  //   }
  // }
  componentDidMount() {
    if (!(this.Auth.loggedIn())) {
      this.props.history.replace('/login');
    } else {
      const authToken = this.Auth.getToken();
      this.setState({ token: authToken }, () => {
        console.log(authToken)
        service.logout(authToken).then(this.Auth.logout()).then(this.props.history.replace('/login'))
      });
    }
  }


  // componentDidMount() {
  //   this.Auth.logout().then(service.logout(this.state.token))
  // }
  render() {
    return null;
  }
}

export default Logout;