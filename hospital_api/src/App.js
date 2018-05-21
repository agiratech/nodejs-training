import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Components/Home/home';
import Signup from './Components/Signup/signup';
import Logout from './Components/Logout/logout';
import Docupdate from './Components/Docupdate/doctorUpdate';
import Docupsuccess from './Components/Docupsuccess/docupsuccess';
import Patientcreate from './Components/Patientcreate/billingCreate';
import Patientread from './Components/Patientread/billingRead';
import Patientupdate from './Components/Patientupdate/billingUpdate';
import Update from './Components/Update/update';
import Delete from './Components/Delete/delete';
import Form from './Components/Form/Form';
class App extends Component {
  render() {
    return (
       <Router path="/" component={App}>
       <div className="App">
             <Route exact path='/' component={Home} />
             <Route exact path='/signup' component={Signup} />
             <Route exact path='/logout' component={Logout} />
             <Route exact path='/doctorUpdate' component={Docupdate} />
             <Route exact path='/docupsuccess' component={Docupsuccess} />
             <Route exact path='/billingCreate' component={Patientcreate} />
             <Route exact path='/billingRead' component={Patientread} />
             <Route exact path='/billingUpdate' component={Patientupdate} />
             <Route exact path='/login' component={Form} />
             <Route exact path='/update' component={Update} />
             <Route exact path='/delete' component={Delete} />
       </div>
       </Router>
       );
  }
}

export default App;