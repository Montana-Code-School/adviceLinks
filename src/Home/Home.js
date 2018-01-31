import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import FreewareTools from '../Freeware/FreewareTools';
// import FreewareTools from './Freeware/FreewareTools.js';
class HomePage extends Component {
  render() {
    return (
      <div className="Freeware-main">
      <h1>Educationial Websites</h1>
      <p>Coding Resources Recommendations:</p>
     <p>Digital ocean tutorials</p>
      <p><a href='https://www.digitalocean.com/community/tutorials'>Digital Ocean Tutorials</a></p>
      <p>Servers for hackers:</p>
      <p><a href='https://serversforhackers.com/'>ServersForHackers</a></p>
        <h1>List Of Secuirty Tools</h1>
        <p>CCleaner is exclent for <a href='https://www.piriform.com/ccleaner/download'>Windows & Mac</a>: to clean up junk that the computer accumlates over time.</p>
        <p>Emisoft Emergency Kit for  <a href='https://www.emsisoft.com/en/software/eek/'>Windows</a> : is light weight and runs from the folder where it can work from the thumbdrive.</p>
        <p> Junkware Removal Tool for <a href='https://www.malwarebytes.com/junkwareremovaltool/'>Windows</a> : is to clean up all those unwanted FREE tool bars and clears out viruses that changes the home page.</p>
        <p> ADW Cleaner for <a href='https://www.malwarebytes.com/adwcleaner/'>Windows</a> : is a tool to clean up adware.</p>
        <p> Ghostery is a pluggin for all major < a href='https://www.ghostery.com/products/'>browsers</a> : on startup the user needs to select what items to block.</p>
        <p>BitDefender Free for <a href='https://www.bitdefender.com/solutions/free.html'>Windows</a>: is the best lightweight free Secuirty program</p>
        <p>My personal opinion for Best Free security is BitDefender Free</p>
        <ul>
          <p> *It blocks certain websites like McAfee Web Advisor</p>
          <p> *It requires email registration just once and it permanently never asks you again compared to free AVAST on a yearly basis.</p>
          <p> * No annoying pop ups or advertisements compared to AVAST & AVG</p>
          <p> *Bitdefender takes the least amount of resources on a machine to run it.</p>
          <p> *Bitdefender has been highly rated on detecting viruses and malware.</p>
        </ul>
        <h1>List of websites to show online Security comparisons:</h1>
        <ul>
          <p><a href='http://www.av-comparatives.org/'>AV-Comparatives.org</a></p>
          <p><a href='http://www.av-test.org/en/home/'>AV-Test.org</a></p>
          <p><a href='https://www.virusbtn.com/vb100/latest_comparative/index'>Virusbtn.com</a></p>
        </ul>
        <FreewareTools />
      </div>

    );
  }
}
export default HomePage;
