import React, { Component } from 'react';
import Projects from './Components/Projects';
import './App.css';

// https://www.youtube.com/watch?v=A71aqufiNtQ
class App extends Component {
    super();
    constructor(){
      this.state={
        projects: [
          {
          title: 'Business Website',
          category: 'Web Design'
          },
          {
            title: 'Social Design',
            category: 'Mobile Development'
            },
            {
              title: 'Ecommerce Shopping Cart',
              category: 'Web Development'
              }
        ]
    }

  render() {
    return (
      <div className="App">
       My APP
       <Projects projects={this.state.projects}/>
       </div>
    );
  }
}

export default App;
