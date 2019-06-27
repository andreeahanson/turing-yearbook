import React, { Component } from 'react';
import Cohort from './Cohort';
import people from '../data/yearbook-data.js';
import './App.css';
import Form from './Form';
import Students from './Students'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class App extends Component {
  constructor() {
    super();
    this.state = {
      staff: people.staff,
      students: people.students,
      isHidden: true
    }
  }

  addNewStudent = newStudent => {
    this.setState({students: [...this.state.students, newStudent]})
  }

  toggleHidden = () => {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

  render() {
    const Staff = () => (
      <div>
        <h2>Staff</h2>
        <Cohort staff = {this.state.staff}/>
      </div>
    )

    const Elevi = () => (
      <div>
        <h2>Students</h2>
        <Students students = {this.state.students} />
      </div>
    )
    
    return (
      <div className="App">
      <header className="App-header">
      <h1>Turing Yearbook</h1>
      <div>
        <button onClick={this.toggleHidden}>
          Add new student
        </button>
        {!this.state.isHidden && <Form addNewStudent={this.addNewStudent}/>}
      </div>
      </header>
      {/* <h2>Staff</h2>
      <section className="people">
      <Cohort 
        staff = {this.state.staff}
      />
      </section>
      <h2>Students</h2>
      <section className="people">
      <Students 
        students = {this.state.students}
      />
      </section> */}
      <Router>
        <Link to='/staff'><span className="links"> Staff </span></Link>
        <Link to='/students'><span className="links"> Students </span></Link>
        <Route path='/staff' component={Staff} />
        <Route path='/students' component={Elevi} />
      </Router>
      </div>
    );
  }
}

export default App;