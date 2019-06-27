import React, { Component } from 'react';
import './Form.css';


class Form extends Component {
  constructor() {
    super()
    this.state={
      name: '',
      quote: '',
      superlative: '',
      photo: 'https://r.hswstatic.com/w_907/gif/loggerhead-turtle.jpg',
    }
  }

  handleChange = event => {
    this.setState({[event.target.name] : event.target.value})
  }

  resetInputs = () => {
    this.setState({
      name: '',
      quote: '',
      superlative: '',
    })
  }

  submitNewStudent = event => {
    event.preventDefault();
    const newStudent = {id: Date.now(), ...this.state}
    
    this.props.addNewStudent(newStudent);
    this.resetInputs();
  }


  render () {
    return (
      <form className="add-student-form">
      <label>Add new student</label>
        <input className="add-new"
        type="text"
        name = "name"
        placeholder = "Name"
        value = {this.state.name}
        onChange = {event => this.handleChange(event)}
        />
        <input className="add-new"
        type="text"
        name = "quote"
        placeholder = "Quote"
        value = {this.state.quote}
        onChange = {event => this.handleChange(event)}
        />
        <input className="add-new"
        type="text"
        name = "superlative"
        placeholder = "Superlative"
        value = {this.state.superlative}
        onChange = {event => this.handleChange(event)}
        />
        {/* <input className="add-new"
        type="file"
        name = "photo"
        placeholder = "Upload photo link"
        accept = ".jpg, .png. .svg"
        value = {this.state.photo}
        onChange = {event => this.handleChange(event)}  
        /> */}
        <button onClick={event => this.submitNewStudent(event)}>Add</button>
      </form>
    )
  }
}

export default Form;