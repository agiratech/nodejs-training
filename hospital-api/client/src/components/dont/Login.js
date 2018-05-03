
// import React, { Component } from 'react';
// // import * as service from '../services/service';
// // import '../App.css'
// import '../index.css'
// // import App from'../App'
// // import { Router, Route } from 'react-router';

// class Login extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {value: '', value1:''}
//     this.onSubmit=this.onSubmit.bind(this)
//     this.handleChange=this.handleChange.bind(this)
//   }
//   // componentWillMount() {
//   //   service.login().then((messages) => {
//   //     this.setState({ messages: messages })
//   //   })
//   // }
//   onSubmit(event) {
//     event.preventDefault();
//     console.log(this.refs.email.value)
//     console.log(this.refs.password.value)
//     this.setState({value: this.refs.email.value, value1: this.refs.password.value});
//     console.log(this.state.value)
//     console.log(this.state.value1)
//     // return service.login().then((messages) => {
//     //   this.setState({ messages: messages })
//     // })
//   }
//   handleChange(event) {
//     this.setState({value: event.target.email, value1: event.target.password});
//   }
//   render() {
//     // const { messages } = this.state;
//     return (
//       <div className="App">
//         <header>
//           <h2> Doctor Login Page </h2>
//         </header>
//         <form onSubmit={this.onSubmit}>
//           Username: <input type="text" ref='email' placeholder='Email' onChange={this.handleChange} /><br /><br />
//           Password: <input type="password" ref='password' placeholder='Password' onChange={this.handleChange} />
//           <br /><br />
//           <input type="submit" value="submit"/>
//         </form>
//       </div>
//     );
//   }
// }

// export default Login;