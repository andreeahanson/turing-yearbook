import React from 'react';
import Person from './Person';
import './Students.css';

const Students = students => {
  const studentCards = students.students.map(person => {
    return (
      <Person
        id = {person.id}
        photo = {person.photo}
        quote = {person.quote}
        name = {person.name}
        superlative = {person.superlative}
        key={person.id}
        category={person.category}
      /> 
    )
  })

  return (
    <>
    <section className="people">
      {studentCards}
    </section>
    </>
  )
}

export default Students; 
