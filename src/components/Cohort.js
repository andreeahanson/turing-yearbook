import React from 'react';
import Person from './Person';
import './Cohort.css';

const Cohort = ({staff}) => {
  const staffCards = staff.map(person => {
    return (
      <Person
        id = {person.id}
        photo = {person.photo}
        quote = {person.quote}
        name = {person.name}
        superlative = {person.superlative}
        key={person.id}
      /> 
    )
  })

  return (
    <>
    <section className="people">
      {staffCards}
    </section>
    </>
  )
}

export default Cohort; 
