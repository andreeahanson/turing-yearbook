import React from 'react';
import { shallow, mount } from 'enzyme';
import Person from './Person.js';


describe('Person', () => {
  it('should match the snapshot with all data passed in correctly', () => {
    const wrapper = shallow(<Person 
    id={1}
    name = "Eric"
    quote = "You miss all the shots you don't take."
    superlative = "Most Likely to Win the PGA"
    photo = "./eric.jpg"
    />);

    expect(wrapper).toMatchSnapshot();
  })


})


