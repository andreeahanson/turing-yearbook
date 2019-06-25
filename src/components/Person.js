import React from 'react';
import './Person.css';

const Person = props => {
  return <article key={props.person.id}>
    <img src={props.person.photo}/>
    <h4>{props.person.name}</h4>
    <h4>{props.person.quote}</h4>
    <h4>{props.person.superlative}</h4>
  </article>

}

export default Person;
