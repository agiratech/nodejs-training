const fs = require('fs');
const readline = require('readline');
const {google} = require('googleapis');

// If modifying these scopes, delete credentials.json.
const SCOPES = ['https://www.googleapis.com/auth/calendar.readonly'];
const TOKEN_PATH = 'credentials.json';

// Load client secrets from a local file.
try {
  const content = fs.readFileSync('client_secret.json');
  authorize(JSON.parse(content), listEvents);
} catch (err) {
  console.log('Error loading client secret file:', err);
}

/**
 * Create an OAuth2 client with the given credentials, and then execute the
 * given callback function.
 * @param {Object} credentials The authorization client credentials.
 * @param {function} callback The callback to call with the authorized client.
 * @return {function} if error in reading credentials.json asks for a new one.
 */
function authorize(credentials, callback) {
  const {client_secret, client_id, redirect_uris} = credentials.installed;
  let token = {};
  const oAuth2Client = new google.auth.OAuth2(
      client_id, client_secret, redirect_uris[0]);

  // Check if we have previously stored a token.
  try {
    token = fs.readFileSync(TOKEN_PATH);
  } catch (err) {
    return getAccessToken(oAuth2Client, callback);
  }
  oAuth2Client.setCredentials(JSON.parse(token));
  callback(oAuth2Client);
}

/**
 * Get and store new token after prompting for user authorization, and then
 * execute the given callback with the authorized OAuth2 client.
 * @param {google.auth.OAuth2} oAuth2Client The OAuth2 client to get token for.
 * @param {getEventsCallback} callback The callback for the authorized client.
 */
function getAccessToken(oAuth2Client, callback) {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
  });
  console.log('Authorize this app by visiting this url:', authUrl);
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question('Enter the code from that page here: ', (code) => {
    rl.close();
    oAuth2Client.getToken(code, (err, token) => {
      if (err) return callback(err);
      oAuth2Client.setCredentials(token);
      // Store the token to disk for later program executions
      try {
        fs.writeFileSync(TOKEN_PATH, JSON.stringify(token));
        console.log('Token stored to', TOKEN_PATH);
      } catch (err) {
        console.error(err);
      }
      callback(oAuth2Client);
    });
  });
}

/**
 * Lists the next 10 events on the user's primary calendar.
 * @param {google.auth.OAuth2} auth An authorized OAuth2 client.
 */
function listEvents(auth) {
  const calendar = google.calendar({version: 'v3', auth});
  calendar.events.list({
    calendarId: 'primary',
    timeMin: (new Date()).toISOString(),
    maxResults: 10,
    singleEvents: true,
    orderBy: 'startTime',
  }, (err, {data}) => {
    if (err) return console.log('The API returned an error: ' + err);
    const events = data.items;
    if (events.length) {
      console.log('Upcoming 10 events:');
      events.map((event, i) => {
        const start = event.start.dateTime || event.start.date;
        console.log(`${start} - ${event.summary}`);
      });
    } else {
      console.log('No upcoming events found.');
    }
  });
}
// [END calendar_quickstart]




//billing create
// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import * as service from '../../Services/service';
// class billingCreate extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       patient_name : '',
//       gender : '',
//       charge_id : '',
//       description : '',
//       charge_name : []  
//     }
//     this.onSubmit=this.onSubmit.bind(this);
//     this.onChange=this.onChange.bind(this);
//   }
//   componentWillMount() {
//     if(localStorage.getItem("token") == undefined || localStorage.getItem("token") == ""){
//       this.props.history.replace('/login') 
//     }
//     service.billGet().then((value) => {
//       this.setState({ charge_name: value })
//     })
//   }

//   onChange(e) {
//     this.setState({ [e.target.name]: e.target.value })
//   }

//   onSubmit(e)
//   {
//     e.preventDefault();
//     var newDoc = {
//       patient_name: this.state.patient_name,
//       gender: this.state.gender,
//       charge_id : this.state.charge_id,
//       description: this.state.description
//     }
//       service.billCreate((localStorage.getItem("token")),newDoc).then(res=>{
//         if(res.code === "0" || res.code === "1" || res.code === "2" || res.code === "3" || res.code === "4"){
//           this.props.history.replace('/billingCreate')
//           console.log("************billcreate***********",res)
//         }
//         }).then(this.props.history.replace('/billingRead'))
//   }
// 	render() 
// 	{
//     const {charge_name} = this.state
//  		return (
//       <div className="billingCreate">
//       <header>
//       <nav className="navbar navbar-default">
// <div className="container-fluid">
// <div className="navbar-header">
// <a className="nav navbar-nav" href="/doctorUpdate">Update Doctor's Page</a>
// </div>
// <ul className="nav navbar-nav">
// <li className="active"><a href="/logout">Logout</a></li>
// </ul>
// </div>
// </nav>
//         <h2> Patient Signup Page </h2>
//       </header>
//       <form onSubmit={this.onSubmit}>
//         <br/><br/><br/>
// 				Patient Name: <input onChange={this.onChange} name= 'patient_name'  pattern= "(?=.*).{3,}" placeholder='Patient Name' type='text'required/><br/><br/>
// 				Gender:<input onChange={this.onChange} name='gender' value="Male" type='radio' required/>Male
//               <input onChange={this.onChange} name='gender' value="Female" type='radio' required/>Female
//               <input onChange={this.onChange} name='gender' value="Transgender" type='radio' required/>Transgender
//                <br/><br/>
//         Charge Name: <select required name="charge_id" onChange={this.onChange}>
//         <option value="">Choose Charge</option>
//                       {charge_name.map((item) =>
//                         <option key={item._id} value={item._id}> {item.charge_name} </option>
//                       )}
//                     </select>
//                     <br/><br/>
// 				Description:<input onChange={this.onChange} name= 'description' placeholder='Patient Description' type='text'required/><br/><br/>
//         <input type='submit' value='create patient'/><br/><br/>
//         <Link to={'/billingRead'}>Go To Read Patient Details</Link><br/><br/>
//         </form>
// 				</div>
// 			);
// 		}
// 	}
// export default billingCreate;