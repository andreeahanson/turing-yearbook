import React from 'react';
import './Person.css';

const Person = props => {
  return <article key={props.person.id}>
    <img src={props.person.photo}/>
    <h4 className="name">{props.person.name}</h4>
    <p className="quote">{props.person.quote}</p>
    <h4 className="superlative">{props.person.superlative}</h4>
  </article>

}

export default Person;
