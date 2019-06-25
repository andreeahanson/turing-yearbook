import React, { Component } from 'react';
import Cohort from './Cohort';
import people from '../data/yearbook-data.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      staff: people.staff
    }
  }


  render() {
    let list = people.staff.map(person => {
      return (
        <Cohort person={person}/>
      )
    })

    return (
      <div className="App">
      <header className="App-header">
      <h1>Turing Yearbook</h1>
      </header>
      <main>
      {list}
      </main>
      </div>
    );
  }
}

export default App;
 