/*
 * import action types
 */

import {INCREMENT, DECREMENT} from '../constants/actionTypes'

/*
 * action creators
 */

export function increment() {
  return {
    type: INCREMENT
  }
}

export function decrement() {
  return {
    type: DECREMENT
  }
}
