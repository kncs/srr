import reducer from '../frontend/reducers/counter.reducer'
import * as types from '../frontend/constants/actionTypes'

describe('Counter reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(0)
  })

  it('should handle an UNKNOW type', () => {
    expect(
      reducer(0, {
        type: undefined
      })
    ).toEqual(0)

    expect(
      reducer(1, {
        type: types.INCREMENT
      })
    ).toEqual(2)
  })

  it('should handle INCREMENT', () => {
    expect(
      reducer(0, {
        type: types.INCREMENT
      })
    ).toEqual(1)

    expect(
      reducer(1, {
        type: types.INCREMENT
      })
    ).toEqual(2)
  })

  it('should handle DECREMENT', () => {
    expect(
      reducer(0, {
        type: types.DECREMENT
      })
    ).toEqual(-1)

    expect(
      reducer(1, {
        type: types.DECREMENT
      })
    ).toEqual(0)

    expect(
      reducer(2, {
        type: types.DECREMENT
      })
    ).toEqual(1)
  })
})
