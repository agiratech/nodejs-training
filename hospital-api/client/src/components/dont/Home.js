import React, { Component } from 'react';
import '../App.css';
import { browserHistory } from 'react-router';

class Home extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">We are happy to welcome you</h1>
        </header>
        <div>
        <button onClick={() => this.onLogin()}>Login</button>
        <button onClick={() => this.onSignup()}>signup</button>
        </div>
      </div>
    );
  }
  onLogin(){
    browserHistory.push('/login');
  }
  onSignup() {
    browserHistory.push('/signup');
  }
}

export default Home;
