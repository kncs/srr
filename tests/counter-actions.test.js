import * as actions from '../frontend/actions/counter.actions'
import * as types from '../frontend/constants/actionTypes'

describe('Counter actions', () => {
  it('should create an action to increment counter', () => {
    const expectedAction = {
      type: types.INCREMENT
    }
    expect(actions.increment()).toEqual(expectedAction)
  })

  it('should create an action to decrement counter', () => {
    const expectedAction = {
      type: types.DECREMENT
    }
    expect(actions.decrement()).toEqual(expectedAction)
  })
})
