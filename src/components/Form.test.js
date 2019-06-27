import React from 'react';
import { shallow, mount } from 'enzyme';
import Form from './Form.js';

describe('Form', () => {
  it('should match the snapshot with all the data passed in correctly', () => {
    const wrapper = shallow(<Form 
    addNewStudent = {jest.fn()}
    />)

    expect(wrapper).toMatchSnapshot();
  })

  it('should call addNewStudent when button is clicked', () => {
    const submitNewStudentMock = jest.fn()
    const wrapper = mount(
    <Form
        addNewStudent={submitNewStudentMock}
    />)

    wrapper.find('.add-student-btn').simulate('click');
    expect(submitNewStudentMock).toBeCalled();
  })


})