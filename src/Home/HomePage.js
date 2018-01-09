import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
 class HomePage extends Component {
  render() {
    return (
     <div className="Freeware-main">
      <h1>List Of Secuirty Tools</h1>
      <p>BitDefender Free for <a href='https://www.bitdefender.com/solutions/free.html'>Windows</a>: is the best lightweight free Secuirty program</p>
      <p>CCleaner is exclent for <a href='https://www.piriform.com/ccleaner/download'>Windows & Mac</a>: to clean up junk that the computer accumlates over time.</p>
      <p>Emisoft Emergency Kit for  <a href='https://www.emsisoft.com/en/software/eek/'>Windows</a> : is light weight and runs from the folder where it can work from the thumbdrive.</p>

<p> Junkware Removal Tool for <a href='https://www.malwarebytes.com/junkwareremovaltool/'>Windows</a> : is to clean up all those unwanted FREE tool bars and clears out viruses that changes the home page.</p>
     <p> ADW Cleaner for <a href='https://www.malwarebytes.com/adwcleaner/'>Windows</a> : is a tool to clean up adware.</p>
      </div>
    );
  }
}
export default HomePage;