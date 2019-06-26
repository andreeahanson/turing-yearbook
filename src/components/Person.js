import React from 'react';
import './Person.css';

const Person = (person) => {
  return <article key={person.id}>
    <img src={person.photo} alt="animal"/>
    <h4 className="name">{person.name}</h4>
    <p className="quote">{person.quote}</p>                 
    <h4 className="superlative">{person.superlative}</h4>
  </article>

}

export default Person;
