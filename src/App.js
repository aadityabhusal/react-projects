import React, { Component } from 'react';
import firebase from './Firebase';
import Home from './Home'
import Welcome from './Welcome';
import Navigation from './Navigation';
import Login from "./Login";
import Meetings from "./Meetings";
import Register from "./Register";
import CheckIn from "./CheckIn";
import Attendees from "./Attendees";
import { Router, navigate } from "@reach/router";
class App extends Component {
  
  constructor(){
    super()
    this.state = {
      user: null,
      displayName: null,
      userID: null
    }
  }

  componentDidMount(){
    firebase.auth().onAuthStateChanged(FBUser => {
      if(FBUser){
        this.setState({
          user: FBUser,
          displayName: FBUser.displayName,
          userID: FBUser.uid
        })

        const meetingsRef = firebase.database().ref('meetings/'+FBUser.uid);
        
        meetingsRef.on('value', snapshot => {
          let meetings = snapshot.val()
          let meetingsList = [];
          for(let item in meetings){
            meetingsList.push({
              meetingId: item,
              meetingName: meetings[item].meetingName
            })
          }

          this.setState({
            meetings: meetingsList,
            totalMeetings: meetingsList.length
          })

        })

      }else{
        this.setState({
          user: null
        })
      }
    })
  }

  handleReg = (username) => {
    firebase.auth().onAuthStateChanged(FBUser => {
      FBUser.updateProfile({
        displayName: username
      }).then(() => {
        this.setState({
          user: FBUser,
          displayName: FBUser.displayName,
          userID: FBUser.uid
        })

        navigate('/meetings')

      })
    })
  }

  logOutUser = (e) => {
    e.preventDefault();
    this.setState({
      userID: null,
      user: null,
      displayName: null
    });

    firebase.auth().signOut().then(() => {
      navigate('/login');
    })
  }

  addMeeting = meetingName => {
    const ref = firebase.database().ref(`meetings/${this.state.user.uid}`);
    ref.push({meetingName: meetingName})
  }

  render(){
    return (
      <>
        <Navigation user={this.state.user} logOutUser={this.logOutUser} />
        {this.state.user && <Welcome userName={this.state.displayName} logOutUser={this.logOutUser} />}
        <Router>
          <Home path='/' user={this.state.user} />
          <Login path='/login' />
          <Meetings path='/meetings' meetings={this.state.meetings} userID={this.state.userID} addMeeting={this.addMeeting} />
          <Register regInfo = {this.handleReg} path='/register' />
          <CheckIn path='/checkin/:userID/:meetingID' />
          <Attendees path='/attendees/:userID/:meetingID' adminUser={this.state.userID} />

        </Router>
        
      </>
    )
  }
}

export default App;
