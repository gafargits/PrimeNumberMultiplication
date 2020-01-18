import React from 'react';

import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from './App'
import PrimeNumbers from './Helper/PrimeNumbers'

configure({adapter: new Adapter()});

describe('Prime Numbers', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  it('should be 10 prime numbers', () => {
    expect(wrapper.find(PrimeNumbers)).toHaveLength(10)
  })
})