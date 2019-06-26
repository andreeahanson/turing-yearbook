import React, { Component } from 'react';
import Cohort from './Cohort';
import people from '../data/yearbook-data.js';
import './App.css';
import Form from './Form';
import Students from './Students'

class App extends Component {
  constructor() {
    super();
    this.state = {
      staff: people.staff,
      students: people.students
    }
  }

  addNewStudent = newStudent => {
    this.setState({students: [...this.state.students, newStudent]})
  }

  render() {
    return (
      <div className="App">
      <header className="App-header">
      <h1>Turing Yearbook</h1>
      </header>
      <h2>Staff</h2>
      <section className="people">
      <Cohort 
        staff = {this.state.staff}
      />
      </section>
      <h2>Students</h2>
      <Form addNewStudent={this.addNewStudent}/>
      <section className="people">
      <Students 
        students = {this.state.students}
      />
      </section>
      </div>
    );
  }
}

export default App;