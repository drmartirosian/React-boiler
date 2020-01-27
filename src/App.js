import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Newcomp from './components/Newcomp'

class App extends Component {

  // //POSSIBLE STATES
  // state = {
  //   isTrue: false,
  //   isToggled: false,
  // }
  // //DONE/SUB BUTTON CHANGER
  // handleSubmit = () =>{
  //   this.setState({
  //     isTrue: !this.state.isTrue,
  //   });
  // };
  // //TOGGLE BUTTON
  // handleToggle = () =>{
  //   this.setState({
  //     isToggled: !this.state.isToggled,
  //   });
  // };

  
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
      {/* NEW STUFF */}
      <Newcomp/>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>

      </div>
    );
  }
}

export default App;
