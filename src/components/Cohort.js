import React from 'react';
import Person from './Person';
import './Cohort.css';

const Cohort = props => {
  return <section>
    <Person person={props.person}/>
  </section>

}

export default Cohort; 
