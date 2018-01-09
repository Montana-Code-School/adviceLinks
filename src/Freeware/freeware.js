import React, { Component } from 'react';
import './freeware.css';
import logo from './logo.svg';
class freewareclass extends Component {
  render() {
    return (

      <div className="Freeware-main">
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}
export default freewareclass;