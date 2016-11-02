import React from 'react'
import { shallow } from 'enzyme'
import Counter from '../frontend/components/counter.react'

function setup() {
  const props = {
    value: 0,
    incrementClick: jest.fn(),
    decrementClick: jest.fn()
  }

  const enzymeWrapper = shallow(<Counter {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe('Counter components', () => {
  it('should render self and subcomponents', () => {
    const { enzymeWrapper } = setup()
    const divWrapper = enzymeWrapper.children();

    expect(divWrapper.find('button').at(0).text()).toBe('-')
    expect(divWrapper.find('div').text()).toBe('0')
    expect(divWrapper.find('button').at(1).text()).toBe('+')
  })
})
