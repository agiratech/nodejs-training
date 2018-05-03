import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Landing from './components/layout/Landing'
import Login from './components/auth/Login'
import Dashboard from './components/auth/Dashboard'
import Register from './components/auth/Register'
import Logout from './components/auth/Logout'

class App extends Component {
  render() {
    return (
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Landing} />
            <div className="container">
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/logout" component={Logout} />
            </div>
            <Footer />
          </div>
        </Router>
    );
  }
}

export default App;