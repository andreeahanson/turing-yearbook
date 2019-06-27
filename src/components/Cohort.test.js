import React from 'react';
import Cohort from './Cohort';
import { shallow, mount } from 'enzyme';

const mockData = [
  {id: 1, name: 'Eric', quote: 'You miss all the shots you don\'t take.', superlative: 'Most Likely to Win the PGA', photo: './eric.jpg'},
  {id: 2, name: 'Amy', quote: 'I believe in you, cuties!', superlative: 'Most Likely to Be an Actual Superhero', photo: './amy.jpg'}
]

describe('Person', () => {
  it('should match the snapshot with all data passed in correctly', () => {
    const wrapper = shallow(<Cohort
      staff = {mockData}
    />)

    expect(wrapper).toMatchSnapshot();
  })
})