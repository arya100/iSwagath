import React, { Component } from 'react';
import './App.css';
import Userinput from './userInput/userInput';
import Useroutput from './userOutput/userOutput';

class App extends Component {
   state = {
    username : 'weweq'
  }

   inputHandler = (e) => {
    this.setState({
      username :e.target.value
    })
  }
  render() {
    return (
      <div className="App">
        <Userinput onClick = {this.inputHandler}
        currentname = {this.state.username} />
        <Useroutput username = {this.state.username}/>
        <Useroutput username = {this.state.username}/>
        <Useroutput username = "m"/>
      </div>
    );
  }
}

export default App;
