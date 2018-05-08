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
import Profile from './components/auth/Profile'
import CreatePatient from './components/auth/CreatePatient'
import ReadPatient from './components/auth/ReadPatient'
import UpdatePatient from './components/auth/UpdatePatient'
import DeletePatient from './components/auth/DeletePatient'
import UpdateDoctor from './components/auth/UpdateDoctor'

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
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/UpdateDoctor" component={UpdateDoctor} />
            <Route exact path="/CreatePatient" component={CreatePatient} />
            <Route exact path="/ReadPatient" component={ReadPatient} />
            <Route exact path="/UpdatePatient" component={UpdatePatient} />
            <Route exact path="/DeletePatient" component={DeletePatient} />
            </div>
            <Footer />
          </div>
        </Router>
    );
  }
}

export default App;