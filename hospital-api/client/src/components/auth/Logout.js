import { Component } from 'react'
import AuthService from '../../services/AuthService'
import * as service from '../../services/service';

class Logout extends Component {
  constructor() {
    super()
    this.state = {
      token: ''
    }
    this.Auth = new AuthService();
  }
  componentDidMount() {
    if (!(this.Auth.loggedIn())) {
      this.props.history.replace('/login');
    } else {
      const authToken = this.Auth.getToken();
      this.setState({ token: authToken }, () => {
        service.logout(authToken).then(this.Auth.logout()).then(this.props.history.replace('/login'))
      });
    }
  }
  render() {
    return null;
  }
}

export default Logout;