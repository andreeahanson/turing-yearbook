import React from 'react';
// import Person from './Person';
import './Cohort.css';

const Cohort = props => {
  console.log("GIGIGIGIGIGIGIG", props)
  return <article>
    <img src={props.person.photo}/>
    <h4>{props.person.name}</h4>
    <h4>{props.person.quote}</h4>
    <h4>{props.person.superlative}</h4>
  </article>

}

export default Cohort; 
